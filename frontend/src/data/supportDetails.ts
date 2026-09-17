// Centralized support / payment configuration.
//
// IMPORTANT: values below are placeholders. Replace them with your real
// account details before publishing. Nothing here is sent to any backend
// or stored in localStorage — it is only rendered statically on /support.

export type LocalPaymentMethod = {
  id: string;
  name: string;
  description: string;
  fields: { label: string; value: string }[];
  hasQrCode?: boolean;
};

export const localSupport: LocalPaymentMethod[] = [
  {
    id: "telebirr",
    name: "Telebirr",
    description: "Send support directly via Telebirr mobile money.",
    fields: [
      { label: "Recipient name", value: "Imran " },
      { label: "Telebirr number", value: "0973362473" },
    ],
    hasQrCode: true,
  },
  {
    id: "cbe",
    name: "Commercial Bank of Ethiopia",
    description: "Send support via bank transfer to my CBE account.",
    fields: [
      { label: "Account holder", value: "Imran Endiris Bedru" },
      { label: "Account number", value: "1000649955941" },
    ],
    hasQrCode: true,
  },
];

export type InternationalOption = {
  id: string;
  name: string;
  description: string;
  url: string;
};

export const internationalSupport: InternationalOption[] = [
  {
    id: "remitly",
    name: "Remitly",
    description:
      "Remitly can be used to send money to Ethiopia, including bank deposits to Commercial Bank of Ethiopia where your sending corridor supports it.",
    url: "https://www.remitly.com/",
  },
  {
    id: "wise",
    name: "Wise",
    description:
      "Wise can be used by eligible senders to transfer money directly to my Ethiopian bank account.",
    url: "https://wise.com/",
  },
  {
    id: "cbe-ethio-direct",
    name: "CBE Ethio Direct",
    description:
      "CBE Ethio Direct lets diaspora customers send money to CBE accounts or CBE Birr wallets — useful for Ethiopian supporters living abroad.",
    url: "https://cbe.com.et/",
  },
  {
    id: "payoneer",
    name: "Payoneer",
    description:
      "An additional international payment option for people who already use Payoneer, or where the applicable receiving functionality is available.",
    url: "https://www.payoneer.com/",
  },
];

export const laptop = {
  model: "Toshiba C660-15N",
  specs: ["4GB RAM", "HDD", "Older-generation hardware"],
};

export const journey = {
  startDate: "April 20, 2026",
  currentLabel: "Present",
  followerStart: "2 followers",
  followerNow: "3,000+ followers",
  daysLabel: "150 Days of Building in Public",
};
