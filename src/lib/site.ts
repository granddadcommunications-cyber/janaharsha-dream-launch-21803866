export const SITE = {
  name: "Janaharsha Plots",
  domain: "JanaharshaPlots.com",
  phone: "9010341194",
  phoneTel: "+919010341194",
  whatsapp: "919010341194",
  operator: "RRP Realty",
  tagline: "Own Land in Hyderabad's Fastest Growing Investment Corridor",
};

export const waLink = (msg = "Hi, I'm interested in Janaharsha Plots. Please share details.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const PHASES = [
  "Phase A", "Phase B", "Phase C", "Phase D", "Phase E",
  "Phase H", "Phase L", "Phase M", "Phase N",
  "Phase P", "Phase Q", "Phase S", "Phase T",
];

export const FEATURED_LAYOUTS = [
  { name: "Phase A", village: "Mangalpally", road: "40 ft", availability: "Available" },
  { name: "Phase C", village: "Yacharam", road: "33 ft", availability: "Filling Fast" },
  { name: "Phase E", village: "Kandukur", road: "40 ft", availability: "Available" },
  { name: "Phase L", village: "Tukkuguda", road: "30 ft", availability: "Limited" },
  { name: "Phase N", village: "Maheshwaram", road: "40 ft", availability: "Available" },
  { name: "Phase Q", village: "Ibrahimpatnam", road: "33 ft", availability: "Available" },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Layouts", to: "/layout-downloads" },
  { label: "Dream City", to: "/janaharsha-dream-city" },
  { label: "Investment", to: "/investment-plots-hyderabad" },
  { label: "Sell / Resale", to: "/sell-your-plot-ibrahimpatnam" },
  { label: "About", to: "/about-rrp-realty" },
  { label: "Contact", to: "/contact" },
];
