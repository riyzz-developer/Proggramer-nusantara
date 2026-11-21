(function () {
  const dict = {
    id: {
      nav_understand: "Memahami Programmer",
      nav_flow: "Alur Grup",
      nav_tools: "Tools Kerja",
      nav_benefits: "Manfaat",
      nav_channels: "TikTok & Kanal",
      nav_rules: "Aturan",
      join_short: "Gabung",
      hero_pill: "PROGRAMMER NUSANTARA | PN",
      hero_title: "Memahami Programmer. Ruang Diskusi Jujur untuk Sesama Builder.",
      hero_lead:
        "Menjadi programmer bukan cuma soal menulis baris kode yang jalan, tapi tentang memahami cara berpikir, menghadapi kebuntuan, menghargai proses, dan saling dukung tanpa ego.",
      join_wa: "Gabung Grup WhatsApp",
      visit_tiktok: "TikTok @proggramer.nusantara",
      u_eye: "MEMAHAMI PROGRAMMER",
      u_title: "Apa yang Sering Tidak Terlihat dari Seorang Programmer",
      u_sub:
        "Di balik satu fitur sederhana atau satu halaman web yang rapi, ada jam terbang membaca log, menguji hipotesis, dan merapikan ulang logika.",
      u1_t: "Debug Itu Bagian dari Proses",
      u1_d:
        "Error bukan tanda gagal. Menemukan satu bug kecil sering membutuhkan pemahaman menyeluruh terhadap alur data dan state aplikasi.",
      u2_t: "Fokus Butuh Ketertiban",
      u2_d:
        "Programmer sering bekerja dalam mode mendalam. Obrolan yang terlalu ramai oleh spam atau gangguan membuat diskusi teknis kehilangan arah.",
      u3_t: "Setiap Level Punya Tantangan",
      u3_d:
        "Pemula bergulat dengan dasar logika dan sintaks; yang lebih berpengalaman bergulat dengan performa, keamanan, arsitektur, dan maintainability.",
      f_eye: "ALUR KERJA KOMUNITAS",
      f_title: "Alur Utama di Programmer Nusantara",
      f_sub:
        "Alur yang jelas membantu setiap anggota mendapatkan jawaban yang relevan dan menjaga suasana grup tetap sehat.",
      f1_t: "Pahami Aturan",
      f1_d:
        "Kenali batas promosi harian, larangan spam, aturan AI, serta larangan transaksi mencurigakan sejak awal.",
      f2_t: "Jelaskan Konteks",
      f2_d:
        "Saat bertanya, tulis tujuan, stack/bahasa, potongan kode penting, dan pesan error secara runtut.",
      f3_t: "Diskusi Terbuka",
      f3_d:
        "Bandingkan beberapa solusi, pahami alasannya, dan pilih pendekatan paling masuk akal untuk kasusmu.",
      f4_t: "Eksekusi & Berbagi",
      f4_d:
        "Uji langsung di proyekmu, bagikan pelajaran yang didapat, dan bantu sesama anggota yang sedang bertanya.",
      t_eye: "STACK & PERKAKAS KITA BEKERJA",
      t_title: "Bahasa & Tools yang Sering Dipakai",
      t_sub:
        "Dari bahasa pemrograman hingga perkakas sehari-hari saat menulis, menguji, dan menjalankan kode.",
      filter_all: "Semua Tools",
      filter_lang: "Bahasa & Web",
      filter_work: "Tools & Workflow Kerja",
      cat_lang: "Bahasa",
      cat_web: "Web UI",
      cat_sys: "Sistem & Performa",
      cat_work: "Workflow",
      t_py:
        "Skrip otomasi, backend, pengolahan data, API, hingga pengujian logika cepat dan bersih.",
      t_html:
        "Struktur semantik halaman, tata letak responsif grid/flex, tipografi, dan gaya antarmuka modern.",
      t_cpp:
        "Pemrograman berkinerja tinggi, manajemen memori, algoritma/struktur data, dan aplikasi sistem.",
      t_js:
        "Interaktivitas browser, manipulasi DOM, logika asinkron, hingga pengembangan aplikasi web dan backend.",
      t_git:
        "Version control, histori perubahan kode, branching, kolaborasi repository, dan pelacakan revisi.",
      t_cli:
        "Navigasi file, kompilasi kode, manajemen proses, environment, dan eksekusi perintah harian.",
      t_ide:
        "Menulis kode, inspeksi elemen/jaringan, membaca stack trace, dan melacak bug langkah demi langkah.",
      t_db:
        "Penyimpanan data terstruktur, pertukaran data REST/JSON, serta isolasi lingkungan aplikasi.",
      m_eye: "MANFAAT GRUP",
      m_title: "Apa yang Kamu Dapatkan di PN",
      m_sub:
        "Ruang belajar dan berjejaring yang praktis untuk menunjang keseharianmu sebagai programmer.",
      m1_t: "Bedah Bug & Logika Kode",
      m1_d:
        "Cepat menemukan titik buta saat kode tidak berjalan sesuai harapan, baik di frontend, backend, mobile, maupun script otomasi.",
      m2_t: "Referensi Tools, Library & Workflow",
      m2_d:
        "Belajar memilih tools yang tepat guna alih-alih ikut-ikutan hype tanpa memahami kebutuhan proyek.",
      m3_t: "Teman Diskusi & Kolaborasi",
      m3_d:
        "Terhubung dengan sesama programmer yang punya minat serupa untuk diskusi proyek, belajar bersama, atau bertukar pengalaman.",
      m4_t: "Ruang Lebih Tertib & Minim Drama",
      m4_d:
        "Aturan tegas membantu menjaga kualitas percakapan agar anggota tetap nyaman berdiskusi setiap hari.",
      c_eye: "JEJARING & KONTEN",
      c_title: "Kanal Resmi Programmer Nusantara",
      c_sub:
        "Ikuti konten singkat seputar dunia programmer di TikTok dan bergabung ke ruang diskusi utama di WhatsApp.",
      c1_d:
        "Catatan singkat, sudut pandang keseharian programmer, mindset ngoding, dan informasi seputar komunitas.",
      open_tiktok: "Buka Akun TikTok",
      c2_t: "Grup Diskusi Utama PN",
      c2_d:
        "Tempat tanya jawab, diskusi teknis, berbagi insight, dan membangun koneksi antar-programmer secara langsung.",
      r_eye: "ATURAN WAJIB GRUP",
      r_title: "Hal yang Wajib Dipatuhi Semua Anggota",
      r_sub:
        "Aturan ini dibuat agar grup tetap fokus, aman, dan tidak penuh gangguan.",
      r1_t: "Promosi Maksimal 1 Kali Sehari",
      r1_d:
        "Boleh promosi proyek, jasa, atau karya sendiri, tetapi maksimal 1 kali dalam 1 hari. Jangan membanjiri grup dengan promosi berulang.",
      r2_t: "Tidak Boleh Spam",
      r2_d:
        "Dilarang mengirim pesan berulang, link tidak jelas, pesan berantai/forward tidak relevan, atau spam chat.",
      r3_t: "Tidak Boleh Menambahkan AI ke Grup",
      r3_d:
        "Dilarang memasukkan bot AI atau akun AI apa pun ke dalam grup tanpa izin dari admin.",
      r4_t: "Dilarang Meminta DANA & Transaksi Meragukan",
      r4_d:
        "Dilarang meminta uang/saldo DANA secara paksa, utang piutang tidak jelas, atau aktivitas apa pun yang mengarah ke penipuan.",
      e_eye: "BUDAYA DISKUSI",
      e_title: "Cara Berdiskusi yang Enak di Grup",
      e_sub:
        "Kebiasaan kecil yang bikin semua anggota lebih mudah saling memahami.",
      e1_t: "Langsung ke Inti Masalah",
      e1_d:
        "Hindari sekadar \"bang mau tanya\" lalu diam. Tuliskan langsung pertanyaan atau kendalamu agar bisa cepat direspons.",
      e2_t: "Hargai Waktu & Proses",
      e2_d:
        "Setiap orang punya kesibukan dan jam kerja sendiri. Sabar menunggu jawaban dan hargai penjelasan yang diberikan.",
      e3_t: "Jaga Keamanan Sesama",
      e3_d:
        "Jangan membagikan data sensitif, kredensial, atau tautan berbahaya ke dalam grup.",
      close_t: "Siap Masuk ke Grup & Berdiskusi?",
      close_d:
        "Patuhi aturan utama (promosi maks 1x/hari, no spam, no tambah AI ke grup, no minta DANA/penipuan) dan bangun koneksi sehat sesama programmer.",
      footer_txt: "© 2026 Programmer Nusantara | PN. Memahami Programmer."
    },
    en: {
      nav_understand: "Understanding Programmers",
      nav_flow: "Group Flow",
      nav_tools: "Work Tools",
      nav_benefits: "Benefits",
      nav_channels: "TikTok & Channels",
      nav_rules: "Rules",
      join_short: "Join",
      hero_pill: "PROGRAMMER NUSANTARA | PN",
      hero_title: "Understanding Programmers. An Honest Discussion Space for Builders.",
      hero_lead:
        "Being a programmer is more than making code run—it is about understanding how we think, facing blockers, respecting the process, and supporting each other without ego.",
      join_wa: "Join WhatsApp Group",
      visit_tiktok: "TikTok @proggramer.nusantara",
      u_eye: "UNDERSTANDING PROGRAMMERS",
      u_title: "What People Often Miss About a Programmer",
      u_sub:
        "Behind a clean interface or a working feature lies hours of reading logs, testing hypotheses, and refactoring logic.",
      u1_t: "Debugging Is Part of the Craft",
      u1_d:
        "Errors are not failure. Tracking down a single tricky bug often takes a clear grasp of data flow and application state.",
      u2_t: "Focus Needs Order",
      u2_d:
        "Programmers often work in deep focus. Noise from spam or distractions buries real technical conversations.",
      u3_t: "Every Stage Has Real Challenges",
      u3_d:
        "Beginners wrestle with core logic and syntax; experienced builders wrestle with performance, security, architecture, and maintainability.",
      f_eye: "COMMUNITY FLOW",
      f_title: "Core Flow at Programmer Nusantara",
      f_sub:
        "A clear flow helps members get useful answers and keeps the group healthy.",
      f1_t: "Know the Rules",
      f1_d:
        "Understand the daily promo limit, anti-spam rule, AI bot restriction, and no-DANA/scam rule from day one.",
      f2_t: "Share Clear Context",
      f2_d:
        "When asking for help, share your goal, stack/language, relevant code, and exact error output.",
      f3_t: "Open Discussion",
      f3_d:
        "Compare practical solutions, understand trade-offs, and pick what fits your case best.",
      f4_t: "Build & Share Back",
      f4_d:
        "Test it on your project, share what you learned, and help other members when they get stuck.",
      t_eye: "HOW WE BUILD & WORK",
      t_title: "Languages & Everyday Tools",
      t_sub:
        "From core programming languages to daily tools used when writing, testing, and running code.",
      filter_all: "All Tools",
      filter_lang: "Languages & Web",
      filter_work: "Tools & Workflow",
      cat_lang: "Language",
      cat_web: "Web UI",
      cat_sys: "Systems & Speed",
      cat_work: "Workflow",
      t_py:
        "Automation scripts, backends, data tasks, APIs, and fast logic testing.",
      t_html:
        "Semantic page structure, responsive grid/flex layouts, typography, and modern UI styling.",
      t_cpp:
        "High-performance programming, memory control, data structures/algorithms, and system apps.",
      t_js:
        "Browser interactivity, DOM handling, async flows, and full web/backend development.",
      t_git:
        "Version control, change history, branching, repository collaboration, and revision tracking.",
      t_cli:
        "File navigation, compiling code, process management, environments, and daily shell commands.",
      t_ide:
        "Writing code, inspecting elements/network, reading stack traces, and stepping through bugs.",
      t_db:
        "Structured data storage, REST/JSON data exchange, and isolated app environments.",
      m_eye: "GROUP BENEFITS",
      m_title: "What You Get in PN",
      m_sub:
        "A practical space to learn and connect with fellow programmers.",
      m1_t: "Bug & Logic Breakdowns",
      m1_d:
        "Spot blind spots faster when code behaves unexpectedly across frontend, backend, mobile, or automation scripts.",
      m2_t: "Tools, Libraries & Workflow",
      m2_d:
        "Pick the right tools for real problems instead of chasing hype without understanding the trade-offs.",
      m3_t: "Peers & Collaboration",
      m3_d:
        "Connect with programmers who share similar interests for project talks, study sessions, and experience sharing.",
      m4_t: "Calmer, More Orderly Space",
      m4_d:
        "Clear boundaries keep daily discussions focused and comfortable for everyone.",
      c_eye: "CHANNELS & CONTENT",
      c_title: "Official Programmer Nusantara Channels",
      c_sub:
        "Follow short programmer notes on TikTok and join the main discussion group on WhatsApp.",
      c1_d:
        "Short notes, everyday programmer perspectives, coding mindset, and community updates.",
      open_tiktok: "Open TikTok Account",
      c2_t: "Main PN WhatsApp Group",
      c2_d:
        "Where Q&A, technical talks, insights, and direct connections between programmers happen.",
      r_eye: "MANDATORY GROUP RULES",
      r_title: "Rules Every Member Must Follow",
      r_sub:
        "These rules keep the group focused, safe, and free from noise.",
      r1_t: "Promotions Max Once a Day",
      r1_d:
        "Promoting your own work, service, or project is allowed at most once per day. Do not flood the chat with repeated promos.",
      r2_t: "No Spam Allowed",
      r2_d:
        "Do not send repeated messages, random links, irrelevant forwards, or spam the group.",
      r3_t: "No Adding AI to the Group",
      r3_d:
        "Do not add any AI bot or AI account into the group without admin permission.",
      r4_t: "No Asking for DANA or Sketchy Deals",
      r4_d:
        "No forceful requests for money/DANA balance, unclear lending, or anything resembling scams.",
      e_eye: "DISCUSSION CULTURE",
      e_title: "How to Keep Discussions Smooth",
      e_sub:
        "Small habits that make it easier for everyone to understand each other.",
      e1_t: "Get Straight to the Point",
      e1_d:
        "Avoid just saying \"can I ask?\" and waiting. State your question or blocker right away so others can help.",
      e2_t: "Respect Time & Process",
      e2_d:
        "Everyone has work and personal schedules. Be patient for replies and respect thoughtful answers.",
      e3_t: "Protect Member Safety",
      e3_d:
        "Never share sensitive data, credentials, or suspicious links inside the group.",
      close_t: "Ready to Join & Discuss?",
      close_d:
        "Follow the core rules (max 1 promo/day, no spam, no AI bots added, no DANA/scam requests) and build healthy connections.",
      footer_txt: "© 2026 Programmer Nusantara | PN. Understanding Programmers."
    }
  };

  let currentLang = "id";

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    const pack = dict[lang] || dict.id;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key]) {
        el.textContent = pack[key];
      }
    });

    const label = document.getElementById("langLabel");
    if (label) {
      label.textContent = lang === "id" ? "EN" : "ID";
    }
  }

  function initToolsFilter() {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".tool-card");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        cards.forEach((card) => {
          const cat = card.getAttribute("data-category");
          const match = filter === "all" || cat === filter;
          card.classList.toggle("is-hidden", !match);
          if (match) {
            card.style.opacity = "1";
            card.style.transform = "none";
          }
        });

        if (window.ScrollTrigger) {
          ScrollTrigger.refresh();
        }
      });
    });
  }

  function initScrollAnimations() {
    const blocks = document.querySelectorAll(".scroll-block");
    const texts = document.querySelectorAll(".reveal-text");

    blocks.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(34px) scale(0.985)";
    });

    texts.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
    });

    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".hero .reveal-text", {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform"
      });

      gsap.utils.toArray(".scroll-block").forEach((block, i) => {
        gsap.to(block, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: (i % 4) * 0.06,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: block,
            start: "top 88%",
            toggleActions: "play none none reverse"
          }
        });
      });

      gsap.utils.toArray("section:not(.hero) .reveal-text").forEach((txt) => {
        gsap.to(txt, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: txt,
            start: "top 91%",
            toggleActions: "play none none reverse"
          }
        });
      });
    } else if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.transition = "opacity 0.65s ease, transform 0.65s ease";
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0) scale(1)";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      document.querySelectorAll(".scroll-block, .reveal-text").forEach((el) => observer.observe(el));
    } else {
      document.querySelectorAll(".scroll-block, .reveal-text").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("langToggle");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        applyLanguage(currentLang === "id" ? "en" : "id");
      });
    }

    initToolsFilter();
    initScrollAnimations();
  });
})();
