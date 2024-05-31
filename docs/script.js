$(document).ready(function () {
  //variable selector
  const recomtrigger = $(".books-card");
  var recomarea = $(".details");
  var btnweek = $(".weeks");
  var btnmonth = $(".months");
  var btnyear = $(".years");
  //variable selector end

  // details hide-show
  $(recomtrigger).click(function (e) {
    e.preventDefault();
    var $div = $(this).next();
    $(".details").not($div).hide();
    if ($div.is(":visible")) {
      $div.hide();
    } else {
      $div.show(500);
    }
  });

  $(document).click(function (e) {
    var p = $(e.target).closest(".books-card").length;
    if (!p) {
      $(".details").hide();
    }
  });

  // $(recomtrigger).click(function () {
  //   $(this).next().toggle(1000);
  // });
  // details hide-show end

  // topbook date toggle
  $(btnweek).click(function () {});
  $(btnmonth).click(function () {});
  $(btnyear).click(function () {});
  // topbook date toggle end
});
