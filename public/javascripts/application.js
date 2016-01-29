$(function() {
  console.log("Ruff ruff");

  $('#paw-right').click(function(){
      $.get('/likes');
  });
});
