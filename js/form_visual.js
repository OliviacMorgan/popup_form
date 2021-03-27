
window.addEventListener("load", e=>{

    $("input[type='radio'].data-card").change(function() {
      //Check the value for "paypal", also verify that the radio is checked
      if (this.checked) {
          $(".bookinput").hide();
          $(".cardinput").show();
      } else {
          //I figured you would want to unhide these if paypal isnt checked, here's the else
          $(".bookinput").show();
          $(".cardinput").hide();
      }
  }); 
  $("input[type='radio'].data-book").change(function() {
      //Check the value for "paypal", also verify that the radio is checked
      if (this.checked) {
          $(".bookinput").show();
          $(".cardinput").hide();
      } else {
          //I figured you would want to unhide these if paypal isnt checked, here's the else
          $(".cardinput").show();
          $(".bookinput").hide();
      }
  })
});