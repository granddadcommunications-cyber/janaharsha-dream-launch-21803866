const site = {
  whatsapp: "919010341194",
  defaultMessage: "Hi, I'm interested in Janaharsha Plots. Please share details.",
};

function waLink(message = site.defaultMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

document.addEventListener("click", (event) => {
  const menuButton = event.target.closest("[data-menu-toggle]");
  if (menuButton) {
    const nav = document.querySelector("[data-mobile-nav]");
    nav?.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", nav?.classList.contains("is-open") ? "true" : "false");
  }

  const faqButton = event.target.closest("[data-faq-button]");
  if (faqButton) {
    const item = faqButton.closest(".faq-item");
    item?.classList.toggle("is-open");
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-lead-form]");
  if (!form) return;
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "")
    .replace(/\D/g, "")
    .slice(0, 10);
  const budget = String(data.get("budget") || "Open");
  const purpose = String(data.get("purpose") || "Investment");
  const status = form.querySelector("[data-form-status]");

  if (!name || !/^[6-9]\d{9}$/.test(phone)) {
    if (status)
      status.textContent = "Please enter your name and a valid 10-digit Indian mobile number.";
    return;
  }

  const message = `Hi, I'm ${name}. Phone: ${phone}. Budget: ${budget || "Open"}. Purpose: ${purpose}. Please share Janaharsha Plots details.`;
  if (status) status.textContent = "Opening WhatsApp…";
  window.open(waLink(message), "_blank", "noopener,noreferrer");
  setTimeout(() => {
    if (status) status.textContent = "Thanks! We'll reach out shortly.";
    form.reset();
  }, 500);
});

for (const input of document.querySelectorAll('input[name="phone"]')) {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 10);
  });
}
