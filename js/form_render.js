window.addEventListener("load", e=>{
    //Begin Product SVG render->
    //answerhere: https://stackoverflow.com/questions/2753732/how-to-access-svg-elements-with-javascript
    var svgindes = (document.getElementById("inside-design")).contentDocument;

    //Begin style for color pull down menu
    //answer source: https://usefulangle.com/post/254/javascript-loop-through-select-options
    Array.from(document.querySelector("#color-menu").options).forEach(function(colorpulldowns){
        var bgcolors = colorpulldowns.value
        colorpulldowns.style.backgroundColor = bgcolors;
    });
    //End style for color pull down menu  

    const popupcolor = document.querySelector("select[name='color']");

    document.querySelector("#inside-design-options").addEventListener('input', evnt=>{
      //Begin popup color
      let coloroutline = svgindes.querySelector("#coloroutlinesvg");
      coloroutline.setAttribute('style', 'fill:'+popupcolor.value);
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
      //End inside message of card
    });

    document.querySelector("#outside-design-options").addEventListener('input', evnt=>{
            //Begin outside message of card
            let outsidemessage = document.querySelector('input[name="messageout"]');
            let outsidemessageoutput = document.querySelector("textpath[href='#outsidemessage']");
            outsidemessageoutput.innerHTML = outsidemessage.value
            //End outside message of card

            //begin outside image color
                  let coloroutline = svgindes.querySelector("#coloroutlinesvg");
      coloroutline.setAttribute('style', 'fill:'+popupcolor.value);
            //end outside image color
    });
    

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
      const outdesop = document.querySelector("#outside-design-options");
      const outdesren = document.querySelector("#outside-design-render");
      const indesren = document.querySelector("#inside-design-render");
      outdesren.style.opacity="0"

      document.addEventListener('scroll', function () {
        isInViewport(outdesop) ?
        indesren.style.opacity="0":
        indesren.style.opacity="1";

        isInViewport(outdesop) ?
        outdesren.style.opacity="1":
        outdesren.style.opacity="0";

      }, {passive:true});
})
