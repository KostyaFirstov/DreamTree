function slowScroll(id) {
  $('html,body').animate({
      scrollTop: $(id).offset().top
  }, 500);
}




const observerCircle = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('active');
    }
  });
});
observerCircle.observe(document.querySelector('.circle'));




const observerSkills = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('active');
    }
  });
});
observerSkills.observe(document.querySelector('.skills'));








$('.portfolio__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          swipe: true,
          centerMode: false
        }}
    ],
  });




  $(".portfolio__slider").on('afterChange', function(event, slick, currentSlide){
    $("#cp").text(currentSlide + 1);
 });









 const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('active');
    }
  });
});
observer.observe(document.querySelector('.linef'));





const observer2 = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('active');
    }
  });
});
observer2.observe(document.querySelector('.lines'));



const observer3 = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('active');
    }
  });
});
observer3.observe(document.querySelector('.linet'));








