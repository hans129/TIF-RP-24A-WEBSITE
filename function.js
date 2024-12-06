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
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card'); // Pilih semua elemen dengan kelas 'card'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target); // Hentikan observasi setelah animasi
          }
        });
      },
      {
        threshold: 0.1, // Elemen terlihat 10% sebelum memicu
      }
    );

    cards.forEach((card) => observer.observe(card)); // Observasi setiap card
  });

  document.addEventListener("DOMContentLoaded", () => {
    const album = document.querySelector('.album'); // Pilih elemen dengan kelas 'album'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0'); // Tambahkan kelas untuk fade-in
            observer.unobserve(entry.target); // Hentikan observasi setelah animasi selesai
          }
        });
      },
      { threshold: 0.1 } // Elemen harus terlihat 10% sebelum animasi
    );

    observer.observe(album); // Observasi elemen 'album'
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll("#slides img");
    const slideContainer = document.getElementById("slides");
    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");
  
    let currentIndex = 0;
    const delay = 3000; // Delay untuk auto-slide (opsional)
    const totalSlides = slides.length;
  
    function updateSlide(index) {
      const offset = -index * 100; // Pindahkan slider
      slideContainer.style.transform = `translateX(${offset}%)`;
    }
  
    // Tombol Next
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide(currentIndex);
    });
  
    // Tombol Previous
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide(currentIndex);
    });
  
    // Auto-slide (opsional)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide(currentIndex);
    }, delay);
  });