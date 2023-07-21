// Hamburger
const hamMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".nav-links");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Nav Bar Scrolling Change
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".nav");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
})

//  Owl Carousel
 $(document).ready(function() {
    var owl = $("#carousel").owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1.2,
        },
        500: {
          items: 2.5,
        },
        600: {
          items: 3.5,
        },
        900: {
          items: 4.5,
        },
      },
      autoplay: true,
      autoplayTimeout: 3000,
    });

    // Handle left arrow click
    $(".fa-arrow-circle-left").click(function() {
      owl.trigger("prev.owl.carousel");
    });
    // Handle right arrow click
    $(".fa-arrow-circle-right").click(function() {
      owl.trigger("next.owl.carousel");
    });
  });