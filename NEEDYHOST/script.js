const navbar = document.getElementById("navbar");
const navContainer = document.getElementById("nav-container");
const logoBox = document.getElementById("logo-box");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // 1. Make the main header wrapper invisible
    navbar.classList.remove("bg-gradient-to-r", "from-blue-700", "to-blue-900", "text-white");
    navbar.classList.add("bg-transparent", "text-gray-900", "pt-4");

    // 2. Make the nav container a floating pill in the middle
    navContainer.classList.add(
      "bg-white/70", 
      "backdrop-blur-xl", 
      "shadow-2xl", 
      "rounded-full", 
      "max-w-5xl", // Slightly narrower when floating
      "border", 
      "border-white/20"
    );
    
    // Adjust logo colors for light background
    logoBox.classList.replace("bg-white", "bg-blue-600");
    logoBox.classList.replace("text-blue-600", "text-white");

  } else {
    // 1. Reset main header to blue gradient
    navbar.classList.add("bg-gradient-to-r", "from-blue-700", "to-blue-900", "text-white");
    navbar.classList.remove("bg-transparent", "text-gray-900", "pt-4");

    // 2. Reset nav container
    navContainer.classList.remove(
      "bg-white/70", 
      "backdrop-blur-xl", 
      "shadow-2xl", 
      "rounded-full", 
      "max-w-5xl",
      "border", 
      "border-white/20"
    );
    
    // Reset logo colors
    logoBox.classList.replace("bg-blue-600", "bg-white");
    logoBox.classList.replace("text-white", "text-blue-600");
  }
});

// Dropdown Logic (Fixed for transparent state)
document.querySelectorAll('.dropdown').forEach(dropdown => {
  const trigger = dropdown.querySelector('.dropdown-trigger');
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('active');
    });
    dropdown.classList.toggle('active');
  });
  dropdown.addEventListener('mouseleave', () => dropdown.classList.remove('active'));
});

window.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
});


// =============== PRICE CARDS LOGIC ====================
 // ===== GLOBAL STATE =====
  let currentPeriod = "yearly"; // yearly | monthly
  let currentCurrency = "BDT";  // BDT | USD

  const currencySymbol = {
    BDT: "৳",
    USD: "$"
  };

  const periodLabel = {
    yearly: "/yr",
    monthly: "/mo"
  };

  // ===== UPDATE ALL PLANS =====
  function updatePrices() {
    document.querySelectorAll("[id$='-price']").forEach(priceEl => {
      const price = priceEl.dataset[
        `price${currentCurrency.toLowerCase()}${capitalize(currentPeriod)}`
      ];

      if (!price) return;

      priceEl.textContent = `${currencySymbol[currentCurrency]} ${price}`;
    });

    document.querySelectorAll("[id$='-period']").forEach(periodEl => {
      periodEl.textContent = periodLabel[currentPeriod];
    });

    updateRenewText();
  }

  // ===== RENEW TEXT (OPTIONAL BUT CLEAN) =====
  function updateRenewText() {
    const renewMap = {
      essential: { yearly: 3900, monthly: null },
      business: { yearly: 6900, monthly: null },
      power: { yearly: 12900, monthly: null }
    };

    Object.keys(renewMap).forEach(plan => {
      const renewEl = document.getElementById(`${plan}-renew`);
      if (!renewEl) return;

      if (currentPeriod === "yearly") {
        renewEl.textContent =
          currentCurrency === "BDT"
            ? `Renew at TK ${renewMap[plan].yearly} /yr`
            : `Renew at $${Math.round(renewMap[plan].yearly / 100)} /yr`;
      } else {
        renewEl.textContent = "";
      }
    });
  }

  // ===== BUTTON STATE HANDLING =====
  function setActiveButton(groupId, activeValue, attr) {
    document
      .getElementById(groupId)
      .querySelectorAll("button")
      .forEach(btn => {
        const isActive = btn.dataset[attr] === activeValue;

        btn.classList.toggle("bg-blue-700", isActive);
        btn.classList.toggle("text-white", isActive);
        btn.classList.toggle("bg-slate-200", isActive && attr === "currency");
        btn.classList.toggle("text-slate-800", isActive && attr === "currency");

        if (!isActive) {
          btn.classList.remove("bg-blue-700", "text-white", "bg-slate-200");
          btn.classList.add("text-slate-600");
        }
      });
  }

  // ===== EVENT LISTENERS =====
  document
    .querySelectorAll("#billing-switch button")
    .forEach(btn => {
      btn.addEventListener("click", () => {
        currentPeriod = btn.dataset.period;
        setActiveButton("billing-switch", currentPeriod, "period");
        updatePrices();
      });
    });

  document
    .querySelectorAll("#currency-switch button")
    .forEach(btn => {
      btn.addEventListener("click", () => {
        currentCurrency = btn.dataset.currency;
        setActiveButton("currency-switch", currentCurrency, "currency");
        updatePrices();
      });
    });

  // ===== HELPERS =====
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // ===== INIT =====
  updatePrices();