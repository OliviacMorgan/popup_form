
window.addEventListener("load", e=>{

    $("input[type='radio'].data-card").change(function() {
      if (this.checked) {
          $(".cardinput").show();
      } else {
          $(".cardinput").hide();
      }
  }); 
  $("input[type='radio'].no-card").change(function() {
      if (this.checked) {
          $(".cardinput").hide();
      } else {
          $(".cardinput").show();
      }
  })
});