document.addEventListener("DOMContentLoaded", () => {
  // 1. SCROLL REVEAL ANIMATION
  const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // 2. PRODUCT DATABASE
  const medileoProducts = [
    {
      name: "BENFOSUN",
      indication: "Diabetic Neuropathy",
      composition:
        "Benfotiamine 150 Mg + Methylcobalamin IP 1500 Mcg + Alpha Lipoic Acid...",
      desc: "Advanced neuro-protective formula to repair myelin sheath damage.",
    },
    {
      name: "LEOTOTAL",
      indication: "Advanced Cellular Nutrition",
      composition:
        "Extracts Of Ginkgo, Ginseng, Green Tea And Grape Seed | Omega-3...",
      desc: "Synergistic premium cell vitalizer targeting systemic inflammation.",
    },
    {
      name: "WIN-DSR",
      indication: "GERD, Dyspepsia, Gastritis",
      composition: "Rabeprazole Sodium IP 20 Mg (EC) + Domperidone IP 30 Mg...",
      desc: "Provides dual-action rapid symptomatic relief via instant and sustained release.",
    },
    {
      name: "NEX-MNT",
      indication: "Neuropathy, Neuralgia",
      composition:
        "Pregabalin IP 75 Mg (SR) + Nortriptyline Hydrochloride IP 10 Mg...",
      desc: "Multi-mechanism neuro-modulator that suppresses excessive pain transmission.",
    },
    {
      name: "D3 XING",
      indication: "Vitamin Deficiency (Sugar Free)",
      composition: "Cholecalciferol (Vitamin D3) 60000 IU In Nano Droplet",
      desc: "Advanced Nano Droplet design ensures maximum systemic bio-absorption.",
    },
    {
      name: "Gemileo-M1/M2",
      indication: "Type-2 Diabetes Management",
      composition:
        "Metformin Hydrochloride IP 500 Mg + Glimepiride IP 1 Mg/2 Mg",
      desc: "Gold-standard rational clinical combination for stable plasma glucose.",
    },
    {
      name: "BETAROOT PLUS",
      indication: "Migraine Prophylaxis",
      composition:
        "Flunarizine Dihydrochloride IP 10 Mg + Propranolol HCl IP 40 Mg (SR)",
      desc: "Synchronized dual pathway blocker to reduce severe migraine attacks.",
    },
    {
      name: "Leosart Series",
      indication: "Hypertension Management",
      composition: "Telmisartan combinations (CC, CL, AM)",
      desc: "Engineered with premium Micronized Technology for smooth pressure drops.",
    },
    {
      name: "MEDCIUM / XT",
      indication: "Low-back Pain & Bone Density",
      composition: "Calcium Citrate 1000mg + D3 200IU + Mg + Zinc",
      desc: "Safely controls harmful hyperhomocysteinemia risk while restoring bone density.",
    },
  ];

  // 3. RENDER PRODUCTS ENGINE
  const productGrid = document.getElementById("product-grid");
  const searchInput = document.getElementById("searchInput");

  function renderProducts(products) {
    if (!productGrid) return;
    productGrid.innerHTML = "";

    if (products.length === 0) {
      productGrid.innerHTML = `<div class="col-span-1 lg:col-span-3 text-center py-16 text-slate-500 font-bold text-lg">No formulations found matching your search.</div>`;
      return;
    }

    products.forEach((p, index) => {
      const delayClass = `delay-${((index % 3) + 1) * 100}`;
      // Upgraded Contrast: Pure white background, bold border, distinct shadow
      const card = `
            <div class="bento-card reveal active ${delayClass} bg-[#ffffff] rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xl relative overflow-hidden group">
                <div class="absolute top-0 left-0 w-1 h-full bg-[#00A896] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
                <div class="absolute top-4 right-4 md:top-6 md:right-6 text-3xl md:text-4xl font-serif font-extrabold text-slate-100 group-hover:text-teal-50 transition-colors duration-300 pointer-events-none">Rx</div>
                <div class="text-[9px] md:text-[10px] font-bold text-[#00A896] uppercase tracking-[0.2em] mb-3">${p.indication}</div>
                <h3 class="text-xl md:text-2xl font-extrabold text-[#002a54] mb-4 group-hover:text-[#00A896] transition-colors">${p.name}</h3>
                <div class="bg-slate-50 border-l-2 border-[#002a54] p-3 md:p-4 rounded-r-lg mb-4 md:mb-5 shadow-sm">
                    <p class="text-[11px] md:text-[13px] font-semibold text-slate-700 leading-relaxed">${p.composition}</p>
                </div>
                <p class="text-xs md:text-sm text-slate-500 leading-relaxed">${p.desc}</p>
            </div>`;
      productGrid.innerHTML += card;
    });
  }

  if (productGrid) {
    renderProducts(medileoProducts);
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = medileoProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.indication.toLowerCase().includes(term) ||
          p.composition.toLowerCase().includes(term),
      );
      renderProducts(filtered);
    });
  }
});
