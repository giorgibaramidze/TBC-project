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