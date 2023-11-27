document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector("header");
  window.addEventListener("scroll", function() {
    if(window.scrollY > 0) {
      header.style.backgroundColor = 'rgba(229, 227, 227, 0.7)';
      header.style.transition = "background-color 0.3s ease"
    } else {
      header.style.backgroundColor = "transparent"
    }
  })
})