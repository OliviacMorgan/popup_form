window.addEventListener("load", e => {
  //Begin style for color pull down menu
  //answer source: https://usefulangle.com/post/254/javascript-loop-through-select-options
  Array.from(document.querySelector("#color-menu").options).forEach(function (colorpulldowns) {
    var bgcolors = colorpulldowns.value
    colorpulldowns.style.backgroundColor = bgcolors;
  });
  //End style for color pull down menu  
  const popupcolor = document.querySelector("select[name='color']");

  document.querySelector("#card-customization").addEventListener('input', evnt => {
    //Begin popup color
    //answerhere: https://stackoverflow.com/questions/2753732/how-to-access-svg-elements-with-javascript
    var colorinline = (document.getElementById("inside-design")).contentDocument.querySelector("#coloroutlinesvg");
    var coloroutline = (document.getElementById("outside-design")).contentDocument.querySelector("#coloroutlinesvg");
    colorinline.setAttribute('style', 'fill:' + popupcolor.value);
    coloroutline.setAttribute('style', 'fill:' + popupcolor.value);
    //End popup color

    //Begin message of card
    //OLIVIA - is there a reason you seperated the message lines from the object element import?
    let message1 = document.querySelector('input[name="messageinfirst"]');
    let messageoutput1 = document.querySelector("textpath[href='#messagelineone']");

    let message2 = document.querySelector("input[name=messageinsecond]");
    let messageoutput2 = document.querySelector("textpath[href='#messagelinetwo']");


    let outsidemessage = document.querySelector('input[name="messageout"]');
    let outsidemessageoutput = document.querySelector("textpath[href='#outsidemessage']");

    let insidefont = document.querySelector("select[name='font']");
    let outsidefont = document.querySelector("select[name='outsidefont']");

    messageoutput1.innerHTML = message1.value;
    messageoutput2.innerHTML = message2.value;
    outsidemessageoutput.innerHTML = outsidemessage.value;

    messageoutput1.style.fontFamily = insidefont.value;
    messageoutput2.style.fontFamily = insidefont.value;
    outsidemessageoutput.style.fontFamily = insidefont.value;

    if (document.querySelector("input[value='yesfont']").checked) {
      outsidemessageoutput.style.fontFamily = outsidefont.value;
    }

    if (document.querySelector("input[value='nocard']").checked) {
      messageoutput1.innerHTML = "";
      messageoutput2.innerHTML = "";
      outsidemessageoutput.innerHTML = "";
    }
    //End message of card

    //Begin uploaded Logo 
    //https://www.codegrepper.com/code-examples/whatever/how+to+set+uploaded+file+to+image+src
    document.querySelector("input[name='logofile']").onchange = function () {
      document.getElementById("inside-upright").contentDocument.querySelector("#client-logo").setAttribute('href', (window.URL.createObjectURL(this.files[0])))
    }
    //End uploaded Logo
  });

  //source: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
  //This example doesn't totally work if your element is taller than your window, I fixed this in the return section
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    //you used these logs to troubleshoot the values you needed 
    // console.log(rect.bottom -rect.height + " bottom - height");
    // console.log(window.innerHeight+" window inner Height");

    //OLIVIA - you might be able to shorten this with element.scrollHeight
    return (
      rect.bottom - rect.height <= window.innerHeight / 2 && rect.top + rect.height >= window.innerHeight / 2
    );
  }
  const outdesop = document.querySelector("#outside-design-options");
  const outdesren = document.querySelector("#outside-design-render");
  const indesren = document.querySelector("#inside-design-render");
  outdesren.style.opacity = "0"

  document.addEventListener('scroll', function () {
    isInViewport(outdesop) ?
      indesren.style.opacity = "0" :
      indesren.style.opacity = "1";

    isInViewport(outdesop) ?
      outdesren.style.opacity = "1" :
      outdesren.style.opacity = "0";

  }, { passive: true });
})
