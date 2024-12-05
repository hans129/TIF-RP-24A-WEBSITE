document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");
  
    fadeInElements.forEach((element) => {
      // Tambahkan kelas "opacity-100" untuk memicu animasi
      setTimeout(() => {
        element.classList.replace("opacity-0", "opacity-100");
      }, 500); // Mulai setelah 500ms
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const closeSidebar = document.getElementById("close-sidebar");
    const sidebar = document.getElementById("sidebar");
  
    // Show Sidebar
    menuButton.addEventListener("click", () => {
      sidebar.classList.remove("translate-x-full");
    });
  
    // Hide Sidebar
    closeSidebar.addEventListener("click", () => {
      sidebar.classList.add("translate-x-full");
    });
  });
  
  