function toggleAccordion(sectionNumber) {
    const section = document.querySelector(`.accordion-section:nth-child(${sectionNumber})`);

    if (section) {
      const content = section.querySelector('.accordion-content');
      const arrowIcon = section.querySelector('i');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      toggleArrowDirection(arrowIcon);
      document.querySelectorAll('.accordion-section').forEach((otherSection) => {
        if (otherSection !== section) {
          const otherContent = otherSection.querySelector('.accordion-content');
          const otherArrowIcon = otherSection.querySelector('i');

          if (otherContent) {
            otherContent.style.display = 'none';
          }

          if (otherArrowIcon) {
            resetArrowDirection(otherArrowIcon);
          }
        }
      });
    }
  }

  function toggleArrowDirection(arrowIcon) {
    if (arrowIcon) {
      arrowIcon.classList.toggle('fa-chevron-down');
      arrowIcon.classList.toggle('fa-chevron-up');
    }
  }

  function resetArrowDirection(arrowIcon) {
    if (arrowIcon) {
      arrowIcon.classList.remove('fa-chevron-up');
      arrowIcon.classList.add('fa-chevron-down');
    }
  }




  
  


  // document.addEventListener("DOMContentLoaded", function () {
  //   const carousel = document.querySelector(".carousel");
  //   const prevBtn = document.querySelector(".prev");
  //   const nextBtn = document.querySelector(".next");
  //   const dotsContainer = document.querySelector(".dots-container");
  
  //   const itemsPerPage = 3;
  //   const totalItems = document.querySelectorAll(".carousel-item").length;
  //   let totalDots = Math.ceil(totalItems / itemsPerPage);
  //   let currentIndex = 0;
  
  //   // Create dots
  //   for (let i = 0; i < totalDots; i++) {
  //     const dot = document.createElement("div");
  //     dot.classList.add("dot");
  //     dot.addEventListener("click", () => goToPage(i));
  //     dotsContainer.appendChild(dot);
  //   }
  
  //   const dots = document.querySelectorAll(".dot");
  //   updateDots();
  
  //   function updateDots() {
  //     dots.forEach((dot, index) => {
  //       dot.classList.toggle("active", index === currentIndex / itemsPerPage);
  //     });
  //   }
  
  //   function goToPage(index) {
  //     currentIndex = index * itemsPerPage;
  //     updateDots();
  //     updateCarousel();
  //     resetTimer();
  //   }
  
  //   function updateCarousel() {
  //     const translateValue = -currentIndex * (100 / itemsPerPage) + "%";
  //     carousel.style.transform = "translateX(" + translateValue + ")";
  //   }
  
  //   function nextPage() {
  //     currentIndex = Math.min(currentIndex + itemsPerPage, totalItems - 1);
  //     updateDots();
  //     updateCarousel();
  //   }
  
  //   function prevPage() {
  //     currentIndex = Math.max(currentIndex - itemsPerPage, 0);
  //     updateDots();
  //     updateCarousel();
  //   }
  
  //   // Automatic sliding
  //   let timer;
  //   function startTimer() {
  //     timer = setInterval(nextPage, 5000); // Change page every 5 seconds (adjust as needed)
  //   }
  
  //   function resetTimer() {
  //     clearInterval(timer);
  //     startTimer();
  //   }
  
  //   // Event listeners
  //   prevBtn.addEventListener("click", () => {
  //     prevPage();
  //     resetTimer();
  //   });
  
  //   nextBtn.addEventListener("click", () => {
  //     nextPage();
  //     resetTimer();
  //   });
  
  //   startTimer(); // Start the automatic sliding when the page loads
  // });
  
