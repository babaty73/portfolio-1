import express from "express";
import mongoose from "mongoose";
import { Resend } from "resend";
import { body, validationResult } from "express-validator";
import rateLimit from "express-rate-limit";
import cors from "cors";
import "dotenv/config";

const app = express();
app.set("trust proxy", 1);
const PORT = process.env.PORT || 4000;

// ─── middleware ───────────────────────────────────────────────────────────────

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    methods: ["POST", "OPTIONS"],
  })
);

// rate-limit: max 5 contact submissions per IP per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many requests from this IP. Please try again later.",
  },
});

// ─── mongoose schema ──────────────────────────────────────────────────────────

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
    ip: { type: String },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
// 
// ─── Resend ───────────────────────────────────────────────────

const resend = new Resend(process.env.RESEND_API_KEY);
async function sendNotification({ name, email, message }) {
  const { data, error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.EMAIL_TO,
    subject: `New message from ${name}`,
    replyTo: email,
    html: `
      <h2>New Contact Form Submission</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>
    `,
  });

  if (error) {
    console.error(error);
    throw error;
  }

  console.log("✅ Email sent:", data);
}
// ─── validation rules ─────────────────────────────────────────────────────────

const contactValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required.")
    .isLength({ max: 100 }).withMessage("Name must be under 100 characters."),
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required.")
    .isEmail().withMessage("Enter a valid email address.")
    .normalizeEmail(),
  body("message")
    .trim()
    .notEmpty().withMessage("Message is required.")
    .isLength({ min: 20 }).withMessage("Message must be at least 20 characters.")
    .isLength({ max: 2000 }).withMessage("Message must be under 2000 characters."),
];

// ─── routes ───────────────────────────────────────────────────────────────────

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.post(
  "/api/contact",
  contactLimiter,
  contactValidation,
  async (req, res) => {
    console.log("🔥 CONTACT ROUTE HIT");
    // return validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    try {
      // 1. persist to MongoDB
      await Contact.create({ name, email, message, ip });

      // 2. send email notification (non-blocking on failure)
      console.log("➡️ About to send email");
      await sendNotification({ name, email, message });
      console.log("⬅️ After send email");
      return res.status(201).json({ message: "Message received. I'll be in touch." });
    } catch (err) {
      console.error("[contact] db error:", err.message);
      return res.status(500).json({ error: "Something went wrong. Please try again." });
    }
  }
);

// ─── 404 fallback ─────────────────────────────────────────────────────────────

app.use((_req, res) => res.status(404).json({ error: "Not found." }));

// ─── db + server startup ──────────────────────────────────────────────────────

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("[mongodb] connected");
    app.listen(PORT, () =>
      console.log(`[server] running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("[startup] failed:", err.message);
    process.exit(1);
  }
}

start();
