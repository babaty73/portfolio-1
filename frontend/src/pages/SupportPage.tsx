import { Analytics } from "@vercel/analytics/react";
import SupportHero from "../components/support/SupportHero";
import MyStory from "../components/support/MyStory";
import TheMachine from "../components/support/TheMachine";
import WhatIveBuilt from "../components/support/WhatIveBuilt";
import WhyImUpgrading from "../components/support/WhyImUpgrading";
import SupportOptions from "../components/support/SupportOptions";
import OtherWaysToHelp from "../components/support/OtherWaysToHelp";
import TheJourney from "../components/support/TheJourney";
import FinalCta from "../components/support/FinalCta";
import Footer from "../components/ui/Footer";
import { ToastProvider } from "../components/ui/Toast";

export default function SupportPage() {
  return (
    <ToastProvider>
      <div
        id="top"
        className="bg-zinc-950 min-h-screen text-zinc-100 antialiased"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <main>
          <SupportHero />
          <MyStory />
          <TheMachine />
          <WhatIveBuilt />
          <WhyImUpgrading />
          <SupportOptions />
          <OtherWaysToHelp />
          <TheJourney />
          <FinalCta />
        </main>
        <Footer />
        <Analytics />
      </div>
    </ToastProvider>
  );
}
