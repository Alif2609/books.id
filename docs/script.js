$(document).ready(function () {
  //variable selector
  const recomtrigger = $(".books-card");
  let recomarea = $(".details");
  let btnweek = $(".weeks");
  let btnmonth = $(".months");
  let btnyear = $(".years");
  let navBtn = $(".nav-btn");
  let navList = $(".nav-list");
  let navCloseBtn = $(".nav-btn-close");

  //variable selector end

  // hamburger menu
  $(navBtn).click(function () {
    $(navList).slideDown(200);
  });
  $(navCloseBtn).click(function () {
    $(navList).slideUp(200);
  });
  // hamburger menu

  // dropdown nav
  $(".features").click(function () {
    $(".dropdown-content").slideToggle(200);
  });
  $(document).click(function (e) {
    var n = $(e.target).closest(".features").length;
    if (!n) {
      $(".dropdown-content").slideUp(200);
    }
  });

  // dropdown nav

  // // details hide-show
  // $(recomtrigger).click(function (e) {
  //   e.preventDefault();
  //   let $rc = $(this).next();
  //   $(".details").not($rc).hide();
  //   if ($rc.is(":visible")) {
  //     $rc.hide(500);
  //   } else {
  //     $rc.show(500);
  //   }
  // });

  // $(document).click(function (e) {
  //   var p = $(e.target).closest(".books-list").length;
  //   if (!p) {
  //     $(".details").hide();
  //   }
  // });

  // // details hide-show end

  // topbook date toggle
  $(".filter-button").click(function () {
    $(this).toggleClass("filter-active");
    let $fb = $(this).siblings();
    if ($fb.hasClass("filter-active")) {
      $fb.removeClass("filter-active");
    } else {
    }
  });
  // topbook date toggle end
});
