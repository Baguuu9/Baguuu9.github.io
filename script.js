const pages = document.querySelectorAll('.page');
const backButton = document.querySelector('.back-button');

// Add active class to the currently visible section
document.getElementById('personality').classList.add('active');

pages.forEach(page => {
  page.addEventListener('click', (event) => {
    // Prevent default behavior for back button only
    if (event.target === backButton) {
      event.preventDefault();
    }

    const nextPage = document.getElementById(event.target.href.slice(1));

    // Remove active class from previously active page
    const activePage = document.querySelector('.active:not(#personality)');
    if (activePage) {
      activePage.classList.remove('active');
      activePage.classList.add('fadeOut');

      setTimeout(() => {
        activePage.classList.remove('fadeOut');
      }, 500);
    }

    nextPage.classList.add('active');
    nextPage.classList.add('fadeIn');

    setTimeout(() => {
      nextPage.classList.remove('fadeIn');
    }, 500);
  });
});

backButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});
