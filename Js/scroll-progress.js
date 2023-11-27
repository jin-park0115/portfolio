window.addEventListener('scroll', function() {
  const scrollPosition = window.screenY || this.document.documentElement.scrollTop;
  const documentHeight = this.document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercentage = (scrollPosition / documentHeight) * 100;
  const progressBar = document.getElementById('scroll-progress');
  progressBar.style.width = scrollPercentage + "%";
})