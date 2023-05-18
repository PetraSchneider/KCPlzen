function toggleAccordion(event) {
    var accordion = event.target.closest('.accordion');
    var accordionContent = accordion.querySelector('.accordion-content');
  
    accordion.classList.toggle('active');
    accordionContent.style.display = accordion.classList.contains('active') ? 'block' : 'none';
  }
