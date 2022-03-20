$("#sidebarCollapse").on("click", function () {
  $("#sidebar").toggleClass("active");
});

$(".icon01")
  .mouseover(() => {
    $(".icon01").prop("src", "./icon/github-ICON-2.png");
  })
  .mouseout(() => {
    $(".icon01").prop("src", "./icon/github-ICON-1.png");
  });

$(".icon02")
  .mouseover(() => {
    $(".icon02").prop("src", "./icon/instagram-ICON-2.png");
  })
  .mouseout(() => {
    $(".icon02").prop("src", "./icon/instagram-ICON-1.png");
  });

$(".icon03")
  .mouseover(() => {
    $(".icon03").prop("src", "./icon/facebook-ICON-2.png");
  })
  .mouseout(() => {
    $(".icon03").prop("src", "./icon/facebook-ICON-1.png");
  });
