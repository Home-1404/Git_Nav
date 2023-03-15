$(".button").click(function () {
  $(".nav-container-2").css("display", "flex");
  $(".button").css("transform", "rotate(90deg)");
});

$(".button").dblclick(function () {
  $(".nav-container-2").css("display", "none");
  $(".button").css("transform", "rotate(0deg)");
});

$(".button").mouseover(function () {
  $(".button").css("color", "#ffa500");
});

$(".button").mouseout(function () {
  $(".button").css("color", "#fff");
});
