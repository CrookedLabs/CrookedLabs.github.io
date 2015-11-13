$(function () {
  var penguin = $(".penguin");
  var experiments = $(".experiments");

  var arr = $(".section").each(function (i, el) {
    $(this).find(".nav").on("click", function () {
      arr.removeClass("active");
      $(el).addClass("active");
      if (penguin.hasClass("active")) {
        console.log("is penguin");
        experiments.css("width", "19%");
      } else {
        experiments.css("width", "");
      }
    });
  });
});
