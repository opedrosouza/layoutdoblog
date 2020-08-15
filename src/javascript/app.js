document.addEventListener('DOMContentLoaded' , () => {
  $('.fa-times').on('click', () => {
    $('.navbar-collapse').hasClass('show') ? $('.navbar-collapse').removeClass('show') : console.log(false)
  })
})