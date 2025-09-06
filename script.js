// サンプルLP JavaScript
(() => {
  // モバイルナビゲーションの開閉
  const nav = document.getElementById("nav");
  const hamburger = document.getElementById("hamburger");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    hamburger.classList.toggle("is-active");
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
  });

  // ナビゲーションリンククリックで閉じる（モバイル）
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        hamburger.classList.remove("is-active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  });

  // スムーススクロール (ヘッダー高考慮)
  const headerHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--header-height") ||
      64,
    10
  );
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });

  // フッターの年を自動更新
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();
