function main() {
  $(".nav__link").click(function(e) {
    e.preventDefault();

    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top
    }, 1000);
  });
}

$(document).ready(main);