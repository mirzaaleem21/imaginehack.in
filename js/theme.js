/////////////////////////////////////////////////////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
/////////////////////////////////////////////////////////////////////

$(".page-scroll").bind("click", function(event) {
  var $anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr("href")).offset().top - 64
      },
      1500,
      "easeInOutExpo"
    );
  event.preventDefault();
});

////////////////////////////////////////////////////////////////////////
// On-Scroll Animated Header: https://github.com/codrops/AnimatedHeader
////////////////////////////////////////////////////////////////////////

var cbpAnimatedHeader = (function() {
  var docElem = document.documentElement,
    header = document.querySelector(".navbar-fixed-top"),
    didScroll = false,
    changeHeaderOn = 10;

  function init() {
    window.addEventListener(
      "scroll",
      function(event) {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 250);
        }
      },
      false
    );
  }

  function scrollPage() {
    var sy = scrollY();
    if (sy >= changeHeaderOn) {
      classie.add(header, "navbar-shrink");
    } else {
      classie.remove(header, "navbar-shrink");
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();
})();

//////////////////////////////////////////////
// Highlight the top nav as scrolling occurs
//////////////////////////////////////////////

$("body").scrollspy({
  target: ".navbar",
  offset: 65
});

///////////////////////////////////////////
// Display loading image while page loads
///////////////////////////////////////////

// Wait for window load
$(window).load(function() {
  // Animate loader off screen
  $(".page-loader").fadeOut("slow");
});

////////////////////////////////////////////////////
// OWL Carousel: http://owlgraphic.com/owlcarousel
////////////////////////////////////////////////////

// Intro text carousel
$("#owl-intro-text").owlCarousel({
  singleItem: true,
  autoPlay: 6000,
  stopOnHover: true,
  navigation: false,
  navigationText: false,
  pagination: true
});

// Partner carousel
$("#owl-partners").owlCarousel({
  items: 4,
  itemsDesktop: [1199, 3],
  itemsDesktopSmall: [980, 2],
  itemsTablet: [768, 2],
  autoPlay: 5000,
  stopOnHover: true,
  pagination: false
});

// Testimonials carousel
$("#owl-testimonial").owlCarousel({
  singleItem: true,
  pagination: true,
  autoHeight: true
});

////////////////////////////////////////////////////////////////////
// Stellar (parallax): https://github.com/markdalgleish/stellar.js
////////////////////////////////////////////////////////////////////

$.stellar({
  // Set scrolling to be in either one or both directions
  horizontalScrolling: false,
  verticalScrolling: true
});

///////////////////////////////////////////////////////////
// WOW animation scroll: https://github.com/matthieua/WOW
///////////////////////////////////////////////////////////

new WOW().init();

////////////////////////////////////////////////////////////////////////////////////////////
// Counter-Up (requires jQuery waypoints.js plugin): https://github.com/bfintal/Counter-Up
////////////////////////////////////////////////////////////////////////////////////////////

$(".counter").counterUp({
  delay: 10,
  time: 2000
});

////////////////////////////////////////////////////////////////////////////////////////////
// Isotop Package
////////////////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {
  $(".portfolio_menu ul li").click(function() {
    $(".portfolio_menu ul li").removeClass("active_prot_menu");
    $(this).addClass("active_prot_menu");
  });

  var $container = $("#portfolio");
  $container.isotope({
    itemSelector: ".col-sm-4",
    layoutMode: "fitRows"
  });
  $("#filters").on("click", "a", function() {
    var filterValue = $(this).attr("data-filter");
    $container.isotope({ filter: filterValue });
    return false;
  });
});

$(".schedule-btn-1").click(function() {
  $(".schedule-plan1")
    .css("display", "block")
    .css("animation-name", "slidein");
  $(".schedule-plan2").css("display", "none");
});

$(".schedule-btn-2").click(function() {
  $(".schedule-plan1").css("display", "none");
  $(".schedule-plan2")
    .css("display", "block")
    .css("animation-name", "slidein");
});
/////////////////////////
// Scroll to top button
/////////////////////////

// Check to see if the window is top if not then display button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $(".scrolltotop").fadeIn();
  } else {
    $(".scrolltotop").fadeOut();
  }
});

// Click event to scroll to top
$(".scrolltotop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  return false;
});

////////////////////////////////////////////////////////////////////
// Close mobile menu when click menu link (Bootstrap default menu)
////////////////////////////////////////////////////////////////////

$(document).on("click", ".navbar-collapse.in", function(e) {
  if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
    $(this).collapse("hide");
  }
});

//FAQ
$(".faq-list-item").click(function() {
  var $answer = $(this).find(".answer");
  if ($answer.hasClass("open")) {
    $answer.removeClass("open");
    // Use the slideUp() method to hide $answer
    $answer.slideUp();

    // Find the <span> elements inside, then rewrite the content using the text() method
    $(this)
      .find("span")
      .text("+");
  } else {
    $answer.addClass("open");
    // Use the slideDown() method to show $answer
    $answer.slideDown();

    // Find the <span> elements inside, then rewrite the content using the text() method
    $(this)
      .find("span")
      .text("-");
  }
});

$(".button").click(function() {
  var buttonId = $(this).attr("id");
  $("#modal-container")
    .removeAttr("class")
    .addClass(buttonId);
  $("body").addClass("modal-active");
});

$("#modal-container").click(function() {
  $(this).addClass("out");
  $("body").removeClass("modal-active");
});

class Drop {
  constructor(x, y) {
    var elem = document.createElement("div");
    elem.classList = ["drop"];
    elem.style.left = `${x}px`;
    elem.style.color = "darkblue";
    elem.style.fontSize = "large";
    elem.style.fontFamily = "consolas";
    elem.style.opacity = "0." + Math.floor(Math.random() * 10);
    elem.style.top = `${y}px`;
    elem.innerHTML = "<span class='leader'>" + GetAString(1) + "</span>";
    document.getElementById("divRain").appendChild(elem);
  }
}

function GetAString(len) {
  var chars = "01";
  var strOut = "";
  for (var i = 0; i < len; i++) {
    strOut += chars.substr(Math.floor(Math.random() * chars.length), 1);
  }
  return strOut;
}

function cleanup() {
  var elements = document.getElementsByClassName("drop");
  for (var i = 0; i < elements.length; i++) {
    // don't always flip it
    if (Math.floor(Math.random() * 10 + 1) > 9) {
      elements[i].innerHTML =
        "<span class='leader'>" + GetAString(1) + "</span>";
    }
  }
  while (elements.length > 200) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function loop() {
  // Get X start
  var rx = Math.floor(Math.random() * window.innerWidth - 220);
  new Drop(rx, 0);
  requestAnimationFrame(loop);
  cleanup();
}

loop();
