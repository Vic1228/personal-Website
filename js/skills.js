$(document).ready(() => {
  setTimeout(() => {
    $("#example1").progress({
      percent: 80,
      duration: 1000,
    });
  }, 0);

  setTimeout(() => {
    $("#example2").progress({
      percent: 50,
      duration: 1000,
    });
  }, 300);

  setTimeout(() => {
    $("#example3").progress({
      percent: 70,
      duration: 1000,
    });
  }, 600);

  setTimeout(() => {
    $("#example4").progress({
      percent: 90,
      duration: 1000,
    });
  }, 900);

  setTimeout(() => {
    $("#example5").progress({
      percent: 50,
      duration: 1000,
    });
  }, 1200);

  setTimeout(() => {
    $("#example6").progress({
      percent: 70,
      duration: 1000,
    });
  }, 1500);
});
