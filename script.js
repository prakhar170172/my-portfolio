document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const navLinks = sidebar.querySelectorAll("a");
  
    // Toggle sidebar
    function toggleSidebar(show) {
      sidebar.classList.toggle("active", show);
      overlay.classList.toggle("active", show);
      hamburger.setAttribute("aria-expanded", show ? "true" : "false");
    }
  
    // Open sidebar
    hamburger.addEventListener("click", () => {
      toggleSidebar(true);
    });
  
    // Close when clicking outside
    overlay.addEventListener("click", () => {
      toggleSidebar(false);
    });
  
    // Close when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        toggleSidebar(false);
      });
    });
  
    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggleSidebar(false);
      }
    });
  
    // Smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 40,
            behavior: "smooth"
          });
        }
      });
    });
  });

  