// On scroll chanage nav bar bg color
$(document).ready(function() {
    // Function to change the background color of the navbar on scroll
    function changeNavbarBackground() {
      var navbar = document.getElementById("navbar");
      var offset = 100; //Determines when the background color changes

      if (window.pageYOffset > offset) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Attaching the scroll event listener to the window
    window.addEventListener("scroll", changeNavbarBackground);
  });


//  Owl Carousel
 $(document).ready(function() {
    var owl = $("#carousel").owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1.5,
        },
        600: {
          items: 2.5,
        },
        900: {
          items: 3.5,
        },
        1200: {
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
