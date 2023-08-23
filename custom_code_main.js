var activeSectionElement = $(".main-section-move-me");
var activeContentElement = $(".main-section-content-wrapper-me");
// my stuff

$(document).ready(function () {

  activeSectionElement = $(".main-section-move-me-up");
  activeContentElement = $(".main-section-content-wrapper-me");

  $("#main-nav-me").addClass("main-nav-active-up").addClass("main-nav-active");

  $(".main-section-move-me-down").hide();

  $(".main-section-move-ux-up").hide();
  $(".main-section-move-ux-down").hide();
  $(".main-section-content-wrapper-ux").hide();

  $(".main-section-move-identity-up").hide();
  $(".main-section-move-identity-down").hide();
  $(".main-section-content-wrapper-identity").hide();

  $(".main-section-move-photography-up").hide();
  $(".main-section-move-photography-down").hide();
  $(".main-section-content-wrapper-photography").hide();

  $(".main-section-content-wrapper").height("150vh");


  function removeAllClasses(element) {
    element.removeClass("go-right")
      .removeClass("go-left")
      .removeClass("be-right")
      .removeClass("be-left")
      .removeClass("go-middle");
  };

  function resetAllClasses() {
    removeAllClasses($(".main-section-move-me-up"));
    removeAllClasses($(".main-section-move-ux-up"));
    removeAllClasses($(".main-section-move-identity-up"));
    removeAllClasses($(".main-section-move-photography-up"));

    removeAllClasses($(".main-section-move-me-down"));
    removeAllClasses($(".main-section-move-ux-down"));
    removeAllClasses($(".main-section-move-identity-down"));
    removeAllClasses($(".main-section-move-photography-down"));

    removeAllClasses($(".main-section-content-wrapper-me"));
    removeAllClasses($(".main-section-content-wrapper-ux"));
    removeAllClasses($(".main-section-content-wrapper-identity"));
    removeAllClasses($(".main-section-content-wrapper-photography"));
  };


  $("#main-nav-me").click(function () {
    if (activeSectionElement.hasClass("main-section-move-me-up") || activeSectionElement.hasClass("main-section-move-me-down")) {

    } else {
      resetAllClasses();

      if (activeSectionElement.hasClass("main-section-move-ux-up")) {
        console.log("i'm me me me me");

        $(".main-section-move-me-down").addClass("be-left");
        $(".main-section-content-wrapper-me-down").addClass("be-left");
        $(".main-section-move-me-down").show();
        $(".main-section-content-wrapper-me-down").show();

        resetAllClasses();

        $(".main-section-move-me-down").addClass("go-middle");
        $(".main-section-content-wrapper-me-down").addClass("go-middle");
        $(".main-section-move-ux-up").addClass("go-right");
        $(".main-section-content-wrapper-ux-up").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-ux-up").hide();
          $(".main-section-content-wrapper-ux-up").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-identity-up")) {

        $(".main-section-move-me-down").addClass("be-left");
        $(".main-section-content-wrapper-me-down").addClass("be-left");
        $(".main-section-move-me-down").show();
        $(".main-section-content-wrapper-me-down").show();

        resetAllClasses();

        $(".main-section-move-me-down").addClass("go-middle");
        $(".main-section-content-wrapper-me-down").addClass("go-middle");
        $(".main-section-move-identity-up").addClass("go-right");
        $(".main-section-content-wrapper-identity-up").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-identity-up").hide();
          $(".main-section-content-wrapper-identity-up").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-photography-up")) {

        $(".main-section-move-me-down").addClass("be-left");
        $(".main-section-content-wrapper-me-down").addClass("be-left");
        $(".main-section-move-me-down").show();
        $(".main-section-content-wrapper-me-down").show();

        resetAllClasses();

        $(".main-section-move-me-down").addClass("go-middle");
        $(".main-section-content-wrapper-me-down").addClass("go-middle");
        $(".main-section-move-photography-up").addClass("go-right");
        $(".main-section-content-wrapper-photography-up").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-photography-up").hide();
          $(".main-section-content-wrapper-photography-up").hide();
        }, 1500);

      }

      if (activeSectionElement.hasClass("main-section-move-ux-down")) {
        console.log("i'm me me me me");

        $(".main-section-move-me-up").addClass("be-left");
        $(".main-section-content-wrapper-me-up").addClass("be-left");
        $(".main-section-move-me-up").show();
        $(".main-section-content-wrapper-me-up").show();

        resetAllClasses();

        $(".main-section-move-me-up").addClass("go-middle");
        $(".main-section-content-wrapper-me-up").addClass("go-middle");
        $(".main-section-move-ux-down").addClass("go-right");
        $(".main-section-content-wrapper-ux-down").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-ux-down").hide();
          $(".main-section-content-wrapper-ux-down").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-identity-down")) {

        $(".main-section-move-me-up").addClass("be-left");
        $(".main-section-content-wrapper-me-up").addClass("be-left");
        $(".main-section-move-me-up").show();
        $(".main-section-content-wrapper-me-up").show();

        resetAllClasses();

        $(".main-section-move-me-up").addClass("go-middle");
        $(".main-section-content-wrapper-me-up").addClass("go-middle");
        $(".main-section-move-identity-down").addClass("go-right");
        $(".main-section-content-wrapper-identity-down").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-identity-down").hide();
          $(".main-section-content-wrapper-identity-down").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-photography-down")) {

        $(".main-section-move-me-up").addClass("be-left");
        $(".main-section-content-wrapper-me-up").addClass("be-left");
        $(".main-section-move-me-up").show();
        $(".main-section-content-wrapper-me-up").show();

        resetAllClasses();

        $(".main-section-move-me-up").addClass("go-middle");
        $(".main-section-content-wrapper-me-up").addClass("go-middle");
        $(".main-section-move-photography-down").addClass("go-right");
        $(".main-section-content-wrapper-photography-down").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-photography-down").hide();
          $(".main-section-content-wrapper-photography-down").hide();
        }, 1500);

      }

      $(".main-section-content-wrapper").height("150vh");

      if (activeSectionElement.hasClass("main-section-move-me-up") ||
        activeSectionElement.hasClass("main-section-move-ux-up") ||
        activeSectionElement.hasClass("main-section-move-identity-up") ||
        activeSectionElement.hasClass("main-section-move-photography-up")) {
        activeSectionElement = $(".main-section-move-me-down");
      } else {
        activeSectionElement = $(".main-section-move-me-up");
      }

    }

    $("#main-nav-me").addClass("main-nav-active");
    $("#main-nav-ux").removeClass("main-nav-active");
    $("#main-nav-identity").removeClass("main-nav-active");
    $("#main-nav-photography").removeClass("main-nav-active");
  });




  $("#main-nav-ux").click(function () {

    if (activeSectionElement.hasClass("main-section-move-ux-up") || activeSectionElement.hasClass("main-section-move-ux-down")) {

    } else {

      resetAllClasses();

      if (activeSectionElement.hasClass("main-section-move-me-up")) {
        console.log("in ux doing me");

        $(".main-section-move-ux-down").addClass("be-right");
        $(".main-section-content-wrapper-ux-down").addClass("be-right");
        $(".main-section-move-ux-down").show();
        $(".main-section-content-wrapper-ux-down").show();

        resetAllClasses();

        $(".main-section-move-ux-down").addClass("go-middle");
        $(".main-section-content-wrapper-ux-down").addClass("go-middle");
        $(".main-section-move-me-up").addClass("go-left");
        $(".main-section-content-wrapper-me-up").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-me-up").hide();
          $(".main-section-content-wrapper-me-up").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-identity-up")) {
        console.log("in ux doing identity");

        $(".main-section-move-ux-down").addClass("be-left");
        $(".main-section-content-wrapper-ux-down").addClass("be-left");
        $(".main-section-move-ux-down").show();
        $(".main-section-content-wrapper-ux-down").show();

        resetAllClasses();

        $(".main-section-move-ux-down").addClass("go-middle");
        $(".main-section-content-wrapper-ux-down").addClass("go-middle");
        $(".main-section-move-identity-up").addClass("go-right");
        $(".main-section-content-wrapper-identity-up").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-identity-up").hide();
          $(".main-section-content-wrapper-identity-up").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-photography-up")) {
        console.log("in ux doing photography");
        //photography

        $(".main-section-move-ux-down").addClass("be-left");
        $(".main-section-content-wrapper-ux-down").addClass("be-left");
        $(".main-section-move-ux-down").show();
        $(".main-section-content-wrapper-ux-down").show();

        resetAllClasses();

        $(".main-section-move-ux-down").addClass("go-middle");
        $(".main-section-content-wrapper-ux-down").addClass("go-middle");
        $(".main-section-move-photography-up").addClass("go-right");
        $(".main-section-content-wrapper-photography-up").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-photography-up").hide();
          $(".main-section-content-wrapper-photography-up").hide();
        }, 1500);

      }

      if (activeSectionElement.hasClass("main-section-move-me-down")) {
        console.log("in ux doing me");

        $(".main-section-move-ux-up").addClass("be-right");
        $(".main-section-content-wrapper-ux-up").addClass("be-right");
        $(".main-section-move-ux-up").show();
        $(".main-section-content-wrapper-ux-up").show();

        resetAllClasses();

        $(".main-section-move-ux-up").addClass("go-middle");
        $(".main-section-content-wrapper-ux-up").addClass("go-middle");
        $(".main-section-move-me-down").addClass("go-left");
        $(".main-section-content-wrapper-me-down").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-me-down").hide();
          $(".main-section-content-wrapper-me-down").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-identity-down")) {
        console.log("in ux doing identity");

        $(".main-section-move-ux-up").addClass("be-left");
        $(".main-section-content-wrapper-ux-up").addClass("be-left");
        $(".main-section-move-ux-up").show();
        $(".main-section-content-wrapper-ux-up").show();

        resetAllClasses();

        $(".main-section-move-ux-up").addClass("go-middle");
        $(".main-section-content-wrapper-ux-up").addClass("go-middle");
        $(".main-section-move-identity-down").addClass("go-right");
        $(".main-section-content-wrapper-identity-down").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-identity-down").hide();
          $(".main-section-content-wrapper-identity-down").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-photography-down")) {
        console.log("in ux doing photography");
        //photography

        $(".main-section-move-ux-up").addClass("be-left");
        $(".main-section-content-wrapper-ux-up").addClass("be-left");
        $(".main-section-move-ux-up").show();
        $(".main-section-content-wrapper-ux-up").show();

        resetAllClasses();

        $(".main-section-move-ux-up").addClass("go-middle");
        $(".main-section-content-wrapper-ux-up").addClass("go-middle");
        $(".main-section-move-photography-down").addClass("go-right");
        $(".main-section-content-wrapper-photography-down").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-photography-down").hide();
          $(".main-section-content-wrapper-photography-down").hide();
        }, 1500);

      }

      $(".main-section-content-wrapper").height("400vh");

      if (activeSectionElement.hasClass("main-section-move-me-up") ||
        activeSectionElement.hasClass("main-section-move-ux-up") ||
        activeSectionElement.hasClass("main-section-move-identity-up") ||
        activeSectionElement.hasClass("main-section-move-photography-up")) {
        activeSectionElement = $(".main-section-move-ux-down");
      } else {
        activeSectionElement = $(".main-section-move-ux-up");
      }

    }

    $("#main-nav-ux").addClass("main-nav-active");
    $("#main-nav-me").removeClass("main-nav-active");
    $("#main-nav-identity").removeClass("main-nav-active");
    $("#main-nav-photography").removeClass("main-nav-active");
  });




  $("#main-nav-identity").click(function () {

    if (activeSectionElement.hasClass("main-section-move-identity-up") || activeSectionElement.hasClass("main-section-move-identity-down")) {

    } else {

      resetAllClasses();

      if (activeSectionElement.hasClass("main-section-move-me-up")) {
        console.log("in identity doing me");

        $(".main-section-move-identity-down").addClass("be-right");
        $(".main-section-content-wrapper-identity-down").addClass("be-right");
        $(".main-section-move-identity-down").show();
        $(".main-section-content-wrapper-identity-down").show();

        resetAllClasses();

        $(".main-section-move-identity-down").addClass("go-middle");
        $(".main-section-content-wrapper-identity-down").addClass("go-middle");
        $(".main-section-move-me-up").addClass("go-left");
        $(".main-section-content-wrapper-me-up").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-me-up").hide();
          $(".main-section-content-wrapper-me-up").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-ux-up")) {
        console.log("in identity doing ux");

        $(".main-section-move-identity-down").addClass("be-right");
        $(".main-section-content-wrapper-identity-down").addClass("be-right");
        $(".main-section-move-identity-down").show();
        $(".main-section-content-wrapper-identity-down").show();

        resetAllClasses();

        $(".main-section-move-identity-down").addClass("go-middle");
        $(".main-section-content-wrapper-identity-down").addClass("go-middle");
        $(".main-section-move-ux-up").addClass("go-left");
        $(".main-section-content-wrapper-ux-up").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-ux-up").hide();
          $(".main-section-content-wrapper-ux-up").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-photography-up")) {
        // photography

        $(".main-section-move-identity-down").addClass("be-left");
        $(".main-section-content-wrapper-identity-down").addClass("be-left");
        $(".main-section-move-identity-down").show();
        $(".main-section-content-wrapper-identity-down").show();

        resetAllClasses();

        $(".main-section-move-identity-down").addClass("go-middle");
        $(".main-section-content-wrapper-identity-down").addClass("go-middle");
        $(".main-section-move-photography-up").addClass("go-right");
        $(".main-section-content-wrapper-photography-up").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-photography-up").hide();
          $(".main-section-content-wrapper-photography-up").hide();
        }, 1500);

      }

      if (activeSectionElement.hasClass("main-section-move-me-down")) {
        console.log("in identity doing me");

        $(".main-section-move-identity-up").addClass("be-right");
        $(".main-section-content-wrapper-identity-up").addClass("be-right");
        $(".main-section-move-identity-up").show();
        $(".main-section-content-wrapper-identity-up").show();

        resetAllClasses();

        $(".main-section-move-identity-up").addClass("go-middle");
        $(".main-section-content-wrapper-identity-up").addClass("go-middle");
        $(".main-section-move-me-down").addClass("go-left");
        $(".main-section-content-wrapper-me-down").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-me-down").hide();
          $(".main-section-content-wrapper-me-down").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-ux-down")) {
        console.log("in identity doing ux");

        $(".main-section-move-identity-up").addClass("be-right");
        $(".main-section-content-wrapper-identity-up").addClass("be-right");
        $(".main-section-move-identity-up").show();
        $(".main-section-content-wrapper-identity-up").show();

        resetAllClasses();

        $(".main-section-move-identity-up").addClass("go-middle");
        $(".main-section-content-wrapper-identity-up").addClass("go-middle");
        $(".main-section-move-ux-down").addClass("go-left");
        $(".main-section-content-wrapper-ux-down").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-ux-down").hide();
          $(".main-section-content-wrapper-ux-down").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-photography-down")) {
        // photography

        $(".main-section-move-identity-up").addClass("be-left");
        $(".main-section-content-wrapper-identity-up").addClass("be-left");
        $(".main-section-move-identity-up").show();
        $(".main-section-content-wrapper-identity-up").show();

        resetAllClasses();

        $(".main-section-move-identity-up").addClass("go-middle");
        $(".main-section-content-wrapper-identity-up").addClass("go-middle");
        $(".main-section-move-photography-down").addClass("go-right");
        $(".main-section-content-wrapper-photography-down").addClass("go-right");
        setTimeout(function () {
          $(".main-section-move-photography-down").hide();
          $(".main-section-content-wrapper-photography-down").hide();
        }, 1500);

      }

      $(".main-section-content-wrapper").height("400vh");

      if (activeSectionElement.hasClass("main-section-move-me-up") ||
        activeSectionElement.hasClass("main-section-move-ux-up") ||
        activeSectionElement.hasClass("main-section-move-identity-up") ||
        activeSectionElement.hasClass("main-section-move-photography-up")) {
        activeSectionElement = $(".main-section-move-identity-down");
      } else {
        activeSectionElement = $(".main-section-move-identity-up");
      }

    }

    $("#main-nav-identity").addClass("main-nav-active");
    $("#main-nav-me").removeClass("main-nav-active");
    $("#main-nav-ux").removeClass("main-nav-active");
    $("#main-nav-photography").removeClass("main-nav-active");
  });




  $("#main-nav-photography").click(function () {
    if (activeSectionElement.hasClass("main-section-move-photography-up") || activeSectionElement.hasClass("main-section-move-photography-down")) {

    } else {

      resetAllClasses();

      if (activeSectionElement.hasClass("main-section-move-me-up")) {
        console.log("in photography doing me");

        $(".main-section-move-photography-down").addClass("be-right");
        $(".main-section-content-wrapper-photography-down").addClass("be-right");
        $(".main-section-move-photography-down").show();
        $(".main-section-content-wrapper-photography-down").show();

        resetAllClasses();

        $(".main-section-move-photography-down").addClass("go-middle");
        $(".main-section-content-wrapper-photography-down").addClass("go-middle");
        $(".main-section-move-me-up").addClass("go-left");
        $(".main-section-content-wrapper-me-up").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-me-up").hide();
          $(".main-section-content-wrapper-me-up").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-ux-up")) {
        console.log("in photography doing ux");

        $(".main-section-move-photography-down").addClass("be-right");
        $(".main-section-content-wrapper-photography-down").addClass("be-right");
        $(".main-section-move-photography-down").show();
        $(".main-section-content-wrapper-photography-down").show();

        resetAllClasses();

        $(".main-section-move-photography-down").addClass("go-middle");
        $(".main-section-content-wrapper-photography-down").addClass("go-middle");
        $(".main-section-move-ux-up").addClass("go-left");
        $(".main-section-content-wrapper-ux-up").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-ux-up").hide();
          $(".main-section-content-wrapper-ux-up").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-identity-up")) {
        // identity

        $(".main-section-move-photography-down").addClass("be-right");
        $(".main-section-content-wrapper-photography-down").addClass("be-right");
        $(".main-section-move-photography-down").show();
        $(".main-section-content-wrapper-photography-down").show();

        resetAllClasses();

        $(".main-section-move-photography-down").addClass("go-middle");
        $(".main-section-content-wrapper-photography-down").addClass("go-middle");
        $(".main-section-move-identity-up").addClass("go-left");
        $(".main-section-content-wrapper-identity-up").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-identity-up").hide();
          $(".main-section-content-wrapper-identity-up").hide();
        }, 1500);

      }

      if (activeSectionElement.hasClass("main-section-move-me-down")) {
        console.log("in photography doing me");

        $(".main-section-move-photography-up").addClass("be-right");
        $(".main-section-content-wrapper-photography-up").addClass("be-right");
        $(".main-section-move-photography-up").show();
        $(".main-section-content-wrapper-photography-up").show();

        resetAllClasses();

        $(".main-section-move-photography-up").addClass("go-middle");
        $(".main-section-content-wrapper-photography-up").addClass("go-middle");
        $(".main-section-move-me-down").addClass("go-left");
        $(".main-section-content-wrapper-me-down").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-me-down").hide();
          $(".main-section-content-wrapper-me-down").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-ux-down")) {
        console.log("in photography doing ux");

        $(".main-section-move-photography-up").addClass("be-right");
        $(".main-section-content-wrapper-photography-up").addClass("be-right");
        $(".main-section-move-photography-up").show();
        $(".main-section-content-wrapper-photography-up").show();

        resetAllClasses();

        $(".main-section-move-photography-up").addClass("go-middle");
        $(".main-section-content-wrapper-photography-doupwn").addClass("go-middle");
        $(".main-section-move-ux-down").addClass("go-left");
        $(".main-section-content-wrapper-ux-down").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-ux-down").hide();
          $(".main-section-content-wrapper-ux-down").hide();
        }, 1500);

      } else if (activeSectionElement.hasClass("main-section-move-identity-down")) {
        // identity

        $(".main-section-move-photography-up").addClass("be-right");
        $(".main-section-content-wrapper-photography-up").addClass("be-right");
        $(".main-section-move-photography-up").show();
        $(".main-section-content-wrapper-photography-up").show();

        resetAllClasses();

        $(".main-section-move-photography-up").addClass("go-middle");
        $(".main-section-content-wrapper-photography-up").addClass("go-middle");
        $(".main-section-move-identity-down").addClass("go-left");
        $(".main-section-content-wrapper-identity-down").addClass("go-left");
        setTimeout(function () {
          $(".main-section-move-identity-down").hide();
          $(".main-section-content-wrapper-identity-down").hide();
        }, 1500);

      }

      $(".main-section-content-wrapper").height("400vh");

      if (activeSectionElement.hasClass("main-section-move-me-up") ||
        activeSectionElement.hasClass("main-section-move-ux-up") ||
        activeSectionElement.hasClass("main-section-move-identity-up") ||
        activeSectionElement.hasClass("main-section-move-photography-up")) {
          console.log("up up up up up uupupup up ");
        activeSectionElement = $(".main-section-move-photography-down");
      } else {
        console.log("down down down dwondsn");
        activeSectionElement = $(".main-section-move-photography-up");
      }

    }

    $("#main-nav-photography").addClass("main-nav-active");
    $("#main-nav-me").removeClass("main-nav-active");
    $("#main-nav-ux").removeClass("main-nav-active");
    $("#main-nav-identity").removeClass("main-nav-active");
  });
});
