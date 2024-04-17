const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function displayBigMenu(menuState) {
  if (menuState) {
      $('.side-menu').css({
          width: '14.063rem'
      });
      $('.side-menu .side-bar a.menubutton').css({
          width: '13.438rem',
          'text-align': 'center'
      });
      $('.side-menu .side-bar a.menubutton').attr('data-bs-toggle', "");
      $('.side-menu .side-bar a.menubutton').attr('title', "");
      $('.closeMenuButton').css({
          display: 'block'
      });
      $('.showMenuButton').css({
          display: 'none'
      });
  } else {
      $('.side-menu').css({
          width: '3.75rem'
      });
      $('.side-menu .side-bar a.menubutton').css({
          width: '3rem',
          'text-align': 'center'
      });
      $('.side-menu .side-bar a.menubutton').attr('data-bs-toggle', "tooltip");
      $('.closeMenuButton').css({
          display: 'none'
      });
      $('.showMenuButton').css({
          display: 'block'
      });
  }
}