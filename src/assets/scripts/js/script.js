const $loadingElement = $("#loading");

function hideLoadingScreen() {
  $loadingElement.addClass("is-hidden");
  setTimeout(function () {
    $("body").removeClass("is-fixed");
  }, 500);
}

function loadingScreen() {
  if ($loadingElement.length) {
    $("body").addClass("is-fixed");
    hideLoadingScreen();
    $(window).on("load", hideLoadingScreen);
  }
}

function btnScrollTop() {
  const $pageTopBtn = $(".js-pagetop");
  const scrollTarget = $(window).height();

  $(window).on("load scroll touchmove", function () {
    const scrollTop = $(window).scrollTop();

    if (scrollTop > scrollTarget) {
      $pageTopBtn.addClass("is-active");
    } else {
      $pageTopBtn.removeClass("is-active");
    }
  });

  $pageTopBtn.on("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  });
}

//--- init
//------------
$(function () {
  loadingScreen();
  btnScrollTop();
});
