 Helper to create DOM element from HTML string
function el(html) {
  const div = document.createElement("div");
  div.innerHTML = html.trim();
  return div.firstChild;
}

8 Routes Map
const routes = {
  "/": renderHome,
  "/about": renderAbout,
  "/contact": renderContact,
  "/shared": renderShared,
  "/resell": renderResell,
  "/vps": renderVPS,
  "/domain-register": renderDomainRegister,
  "/domain-transfer": renderDomainTransfer,
};

 Main render function
function render() {
  const path = location.hash.replace("#", "") || "/";
  const renderFn = routes[path] || renderNotFound;
  const app = document.getElementById("app");
  Clear previous content and load new content
  app.innerHTML = "";
  app.appendChild(renderFn());
  document.getElementById("year").textContent = new Date().getFullYear();
}

Template for a transparent price card
function priceCard(title, price, featA, featB, tag) {
  return `
    <div class="transparent-card transition-all hover:scale-[1.02] duration-300">
      <div class="flex items-center justify-between">
        <div class="font-semibold text-slate-900">${title}</div>
        ${
          tag
            ? '<div class="text-xs px-2 py-1 bg-white text-blue-600 rounded">BEST DEAL</div>'
            : ""
        }
      </div>
      <div class="mt-4">
        <div class="text-3xl font-bold text-blue-700">${price}</div>
        <div class="text-sm text-slate-500 mt-1">Renew at market price</div>
      </div>
      <ul class="mt-4 text-sm text-slate-600 list-none space-y-2">
        <li class="flex items-center gap-2">
          <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg>
          ${featA}
        </li>
        <li class="flex items-center gap-2">
          <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg>
          ${featB}
        </li>
        <li class="flex items-center gap-2">
          <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg>
          Unlimited bandwidth
        </li>
      </ul>
      <div class="mt-6">
        <a href="#/contact" class="block w-full text-center px-4 py-3 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-600 transition">Select Plan</a>
      </div>
    </div>
  `;
}

--- 1. Home Page Content (Hero + Features) ---
function renderHome() {
  const html = `
    <section class="grid md:grid-cols-2 gap-10 items-center min-h-[50vh]">
      <div>
        <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          <span class="block">Blazing Fast Web Hosting</span>
          <span class="text-blue-700">for Your Success.</span>
        </h1>

        <p class="mt-4 text-xl text-slate-600">
          Performance, Security, and 24/7 Support—everything you need to build your dreams online.
        </p>

        <div class="mt-8 flex gap-4">
          <a href="#/shared" class="px-8 py-4 rounded-full bg-blue-700 text-white text-lg font-bold shadow-2xl hover:bg-blue-600 transition duration-300">
            Find Your Plan
          </a>
          <a href="#/contact" class="px-8 py-4 rounded-full border border-blue-700 text-blue-700 text-lg font-bold hover:bg-blue-50 transition duration-300">
            Contact Sales
          </a>
        </div>
      </div>

      <div class="hidden md:flex justify-center items-center">
        
      </div>
    </section>
    
    <section class="mt-4 py-4 md:py-8 border-y border-slate-300/50">
      <div class="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8">
        
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-1">
            <span class="text-2xl font-bold text-green-600">★</span>
            <span class="text-xl font-bold">Trustpilot</span>
          </div>
          <div class="flex items-center mt-1">
            <span class="text-2xl text-green-500">★★★★</span><span class="text-2xl text-green-500/50">★</span>
          </div>
          <div class="text-xs text-slate-600 mt-1">242 Reviews | 4.7/5</div>
        </div>

        <div class="flex flex-col items-center">
          <div class="text-xl font-bold">Google</div>
          <div class="flex items-center mt-1">
            <span class="text-2xl text-green-500">★★★★★</span>
          </div>
          <div class="text-xs text-slate-600 mt-1">250 Reviews | 4.9/5</div>
        </div>
        
        <div class="flex flex-col items-center">
          <div class="text-xl font-bold">facebook</div>
          <div class="flex items-center mt-1">
            <span class="text-2xl text-green-500">★★★★★</span>
          </div>
          <div class="text-xs text-slate-600 mt-1">256 Reviews | 4.9/5</div>
        </div>

        <div class="flex flex-col items-center">
          <div class="text-xl font-bold">host<span class="font-normal italic">advice</span></div>
          <div class="flex items-center mt-1">
            <span class="text-2xl text-green-500">★★★★</span><span class="text-2xl text-gray-300">★</span>
          </div>
          <div class="text-xs text-slate-600 mt-1">Overall Review | 4.0/5</div>
        </div>

      </div>
    </section>
    <section class="mt-16">
      <h2 class="text-4xl font-bold text-center text-slate-900 mb-4">Our Best Value Hosting Plans</h2>
      <p class="text-center text-slate-600 mb-10">Start small, scale big. Upgrade anytime.</p>

      <div class="grid md:grid-cols-3 gap-6">
        ${priceCard(
          "Essential",
          "৳ 2900/yr",
          "2 websites",
          "10 GB NVMe Storage"
        )}
        ${priceCard(
          "Business",
          "৳ 4900/yr",
          "10 websites",
          "20 GB NVMe Storage",
          "best"
        )}
        ${priceCard(
          "Power",
          "৳ 9000/yr",
          "100 websites",
          "100 GB NVMe Storage"
        )}
      </div>
    </section>

    <section class="mt-16">
      <h2 class="text-3xl font-bold text-slate-900 mb-2">Global Network</h2>
      <p class="text-slate-600 mb-6">Our reliable infrastructure spans the globe for fast local performance.</p>

      <div class="transparent-card">
        <h4 class="font-semibold text-lg text-slate-900">Server Locations & Coverage</h4>
        <div class="map-wrap border border-blue-400/30">
          <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-180.000%2C-85.0511%2C180.000%2C85.0511&layer=mapnik&marker=0,0&zoom=1">
          </iframe>
        </div>
        <div class="text-sm text-slate-600 mt-3">Interactive map of the world.</div>
      </div>
      
    </section>
  `;

  return el(html);
}

 --- 2. About Page Content ---
function renderAbout() {
  return el(`
    <section class="transparent-card max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-slate-900">About NeedyHost</h2>
      <p class="mt-4 text-slate-600 text-lg">
        Founded in 2023, NeedyHost was built on the principle that high-performance web hosting should be accessible and simple for everyone, from individual bloggers to growing enterprises.
      </p>
      <div class="mt-8 grid md:grid-cols-3 gap-6">
        <div class="transparent-card">
          <h4 class="text-xl font-semibold text-blue-700">Performance</h4>
          <p class="text-sm text-slate-600 mt-2">NVMe SSDs and optimized network architecture for lightning-fast speeds.</p>
        </div>
        <div class="transparent-card">
          <h4 class="text-xl font-semibold text-blue-700">Simplicity</h4>
          <p class="text-sm text-slate-600 mt-2">Easy-to-use control panel and one-click installers for popular applications.</p>
        </div>
        <div class="transparent-card">
          <h4 class="text-xl font-semibold text-blue-700">Support</h4>
          <p class="text-sm text-slate-600 mt-2">24/7/365 expert human support via chat, phone, and tickets.</p>
        </div>
      </div>
    </section>
  `);
}

--- 3. Contact Page Content ---
function renderContact() {
  return el(`
    <section class="transparent-card max-w-xl mx-auto">
      <h2 class="text-4xl font-bold text-slate-900">Contact Us</h2>
      <p class="text-slate-600 mt-2">We're happy to help with sales, support, or general inquiries.</p>
      <form id="contactForm" class="mt-6 grid gap-4">
        <input name="name" placeholder="Your Full Name" class="p-4 rounded-lg glass border-blue-400/20 placeholder-slate-500 text-slate-800" required />
        <input name="email" type="email" placeholder="Email Address" class="p-4 rounded-lg glass border-blue-400/20 placeholder-slate-500 text-slate-800" required />
        <input name="subject" placeholder="Subject (e.g., Sales Question, Technical Issue)" class="p-4 rounded-lg glass border-blue-400/20 placeholder-slate-500 text-slate-800" />
        <textarea name="message" placeholder="Your Message" rows="6" class="p-4 rounded-lg glass border-blue-400/20 placeholder-slate-500 text-slate-800" required></textarea>
        <div class="flex gap-4 mt-2">
          <button class="px-6 py-3 rounded-md bg-blue-700 text-white font-bold hover:bg-blue-600 transition" type="submit">Send Message</button>
          <button type="reset" class="px-6 py-3 rounded-md border border-slate-400 text-slate-600 hover:border-blue-700 hover:text-blue-700 transition">Reset Form</button>
        </div>
        <div id="contactMsg" class="text-sm text-green-600 mt-3 hidden">✅ Thank you! Your message has been received (demo confirmation).</div>
      </form>
    </section>
  `);
}

Template for all Generic Service Pages (Shared, Resell, VPS, Domain)
function genericService(title, description, idealFor) {
  return el(`
    <section class="transparent-card">
      <h2 class="text-4xl font-bold text-slate-900">${title}</h2>
      <p class="text-xl text-blue-700 mt-2">${description}</p>
      
      <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="transparent-card border-blue-400/30">
          <h4 class="font-semibold text-lg text-slate-900">Core Features</h4>
          <ul class="mt-3 text-sm text-slate-600 list-disc pl-5 space-y-2">
            <li>Free SSL & CDN ready</li>
            <li>99.9% Uptime Guarantee</li>
            <li>24/7 Priority Support</li>
          </ul>
          <div class="mt-4">
            <a href="#/contact" class="text-sm text-blue-700 hover:text-blue-900">View Full Feature List →</a>
          </div>
        </div>

        <div class="transparent-card border-blue-400/30">
          <h4 class="font-semibold text-lg text-slate-900">Who Is It For?</h4>
          <p class="text-sm text-slate-600 mt-3">${idealFor}</p>
        </div>

        <div class="transparent-card border-blue-400/30 flex flex-col justify-between">
          <div>
              <h4 class="font-semibold text-lg text-slate-900">Ready to Start?</h4>
              <p class="text-sm text-slate-600 mt-2">Browse our pricing plans and sign up today.</p>
          </div>
          <div class="mt-4">
            <a href="#/contact" class="block w-full text-center px-4 py-3 rounded-md bg-blue-700 text-white font-bold hover:bg-blue-600 transition">Get Started Now</a>
          </div>
        </div>
      </div>
    </section>
  `);
}

--- 4. Shared Hosting Page Content ---
function renderShared() {
  return genericService(
    "Shared Hosting",
    "Affordable, high-speed hosting for personal websites and small businesses.",
    "Ideal for blogs, portfolio sites, and small e-commerce stores just starting out. Best balance of cost and performance."
  );
}
--- 5. Reseller Hosting Page Content ---
function renderResell() {
  return genericService(
    "Reseller Hosting",
    "Launch your own hosting business with white-label control and dedicated resources.",
    "Perfect for web developers, designers, and agencies looking to offer hosting to their clients under their own brand."
  );
}
 --- 6. VPS Hosting Page Content ---
function renderVPS() {
  return genericService(
    "VPS Hosting",
    "Dedicated virtual resources with root access for ultimate power and flexibility.",
    "Suited for large applications, high-traffic websites, and projects requiring custom configurations or guaranteed resources."
  );
}
 --- 7. Domain Registration Page Content ---
function renderDomainRegister() {
  return genericService(
    "Domain Registration",
    "Find and register your perfect domain name quickly and securely.",
    "Great for anyone starting a new online project, ensuring you secure your brand's name before it's taken."
  );
}
--- 8. Domain Transfer Page Content ---
function renderDomainTransfer() {
  return genericService(
    "Domain Transfer",
    "Move your existing domain to NeedyHost for easier management and better pricing.",
    "Recommended for users who want to consolidate their domains and hosting services under one reliable, easy-to-manage platform."
  );
}
 --- Not Found Page ---
function renderNotFound() {
  return el(
    `<section class="transparent-card text-center max-w-xl mx-auto"><h2 class="text-4xl font-bold text-slate-900">404 — Page Not Found</h2><p class="mt-3 text-slate-600">The route you requested doesn't exist. Please check the navigation links.</p></section>`
  );
}

--- Runtime Logic & Event Listeners ---

 Mobile dropdown toggle
function toggleMobile(id) {
  const el = document.getElementById(id);
  el.classList.toggle("show");
}

 Function to manage the desktop dropdown behavior
function setupDropdown(buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  const dropdown = btn.nextElementSibling;

   Toggle dropdown on click
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
     Close other active dropdowns
    document.querySelectorAll(".dropdown.active").forEach((d) => {
      if (d !== dropdown) d.classList.remove("active");
    });
    Toggle current dropdown
    dropdown.classList.toggle("active");
  });

 Prevent closing when clicking inside the dropdown
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

 Initialize on load and on hash change
window.addEventListener("hashchange", render);

window.addEventListener("load", () => {
  render(); // Initial load of content

   Mobile Menu Toggle
  document.getElementById("burger").addEventListener("click", () => {
    const m = document.getElementById("mobileNav");
    m.classList.toggle("hidden");
  });

   Sticky Navbar Scroll Effect (Glassmorphism on scroll)
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const initialClasses = [
      "bg-gradient-to-r",
      "from-blue-700",
      "via-blue-600",
      "to-blue-500",
    ];

    if (window.scrollY > 50) {
      navbar.classList.add("nav-glass");
      Remove initial gradient colors
      initialClasses.forEach((cls) => navbar.classList.remove(cls));
    } else {
      navbar.classList.remove("nav-glass");
     Add initial gradient colors back
      initialClasses.forEach((cls) => navbar.classList.add(cls));
    }
  });

  Contact Form Submission Demo
  document.addEventListener("submit", (e) => {
    if (e.target && e.target.id === "contactForm") {
      e.preventDefault();
      document.getElementById("contactMsg").classList.remove("hidden");
      Hide the message after 3 seconds
      setTimeout(
        () => document.getElementById("contactMsg").classList.add("hidden"),
        3000
      );
    }
  });

   Desktop Dropdown Logic (Click + Outside Close)
  setupDropdown("host-btn");
  setupDropdown("domain-btn");

   Close all dropdowns when clicking anywhere outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach((d) => {
      d.classList.remove("active");
    });
  });
});

// -----------------------------
  const hostBtn = document.getElementById("hostBtn");
  const domainBtn = document.getElementById("domainBtn");

  const hostMenu = document.getElementById("hostMenuDesktop");
  const domainMenu = document.getElementById("domainMenuDesktop");

  function closeAllDropdowns() {
    hostMenu.classList.add("hidden");
    domainMenu.classList.add("hidden");
  }

  hostBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    domainMenu.classList.add("hidden");
    hostMenu.classList.toggle("hidden");
  });

  domainBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    hostMenu.classList.add("hidden");
    domainMenu.classList.toggle("hidden");
  });

  // Auto-close when clicking outside
  document.addEventListener("click", () => {
    closeAllDropdowns();
  });