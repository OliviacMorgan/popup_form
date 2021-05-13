window.addEventListener("load", e=>{
    //Begin Product SVG render->
    //answerhere: https://stackoverflow.com/questions/2753732/how-to-access-svg-elements-with-javascript
    var product = document.querySelector(".product")
    var svgindes = (document.getElementById("inside-design")).contentDocument;

    //INSIDE DESIGN OPTIONS 

    //Begin style for color pull down menu
    //answer source: https://usefulangle.com/post/254/javascript-loop-through-select-options
    Array.from(document.querySelector("#color-menu").options).forEach(function(colorpulldowns){
        var bgcolors = colorpulldowns.value
        colorpulldowns.style.backgroundColor = bgcolors;
    });
    //End style for color pull down menu  

    document.querySelector("#inside-design-options").addEventListener('input', evnt=>{
      //Begin popup color
      let coloroutline = svgindes.querySelector("#coloroutlinesvg");
      let popupcolor = document.querySelector("select[name='color']").value;
      coloroutline.setAttribute('style', 'fill:'+popupcolor);
      //End popup color

      //Begin inside message of card
      let message1 = document.querySelector('input[name="messageinfirst"]');
      let messageoutput1 = document.querySelector("textpath[href='#messagelineone']");
  
      let message2 = document.querySelector("input[name=messageinsecond]");
      let messageoutput2 = document.querySelector("textpath[href='#messagelinetwo']");

      let insidefont = document.querySelector("select[name='font']")

      messageoutput1.innerHTML=message1.value;
      messageoutput2.innerHTML=message2.value;

      messageoutput1.style.fontFamily = insidefont.value;
      messageoutput2.style.fontFamily = insidefont.value;

      if (document.querySelector("input[value='nocard']").checked){
        messageoutput1.innerHTML="";
        messageoutput2.innerHTML="";
      }
    });
    //End inside message of card

    //source: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
    //This example doesn't totally work if your element is taller than your window, I fixed this in the return section
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      //you used these logs to troubleshoot the values you needed 
      // console.log(rect.bottom -rect.height + " bottom - height");
      // console.log(window.innerHeight+" window inner Height");
      return (
          rect.bottom - rect.height <= window.innerHeight/2 && rect.top + rect.height >= window.innerHeight/2   
      );
  }
      const topform = document.querySelector('#top-form');
      const gendes = document.querySelector('#general-design'); //OLIVIA - do we need this? delete div and id if not in html
      document.addEventListener('scroll', function () {
        const topformval = isInViewport(topform) ?
        product.style.opacity = ".3":
        product.style.opacity = "1";

      }, {
          passive:true
        });

})
