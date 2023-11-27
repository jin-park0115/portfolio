document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navbarItems = document.querySelectorAll('.navbar ul li');
  
  navbarItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
          scrollToSection(index);
          setActiveMenuItem(index)
      });
  });

  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      sections.forEach(function(section, index) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
              setActiveMenuItem(index);
          }
      });
  });

  function setActiveMenuItem(index) {
      navbarItems.forEach(function(item) {
          item.classList.remove('active');
      });
      navbarItems[index].classList.add('active');
  }

  function scrollToSection(index) {
      const targetSection = sections[index];
      window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
      });
  }
});
