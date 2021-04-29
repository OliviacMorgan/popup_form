window.addEventListener("load", e=>{
    //Load up SVGS into document 
    //answerhere: https://stackoverflow.com/questions/2753732/how-to-access-svg-elements-with-javascript
    var svgindes = (document.getElementById("inside-design")).contentDocument;

    var messagesvg = svgindes.querySelector("#messagesvg");
    var logosvg = svgindes.querySelector("#logosvg");

    messagesvg.style.display ='none'
    logosvg.style.display ='none'
    

    //outside message vars
    var message = document.querySelector("textarea[name='message']");
    var messageoutput = document.querySelector("output[name='messageresult']");
    //test var for product pic OLIVIA change this around
    var productpic = document.querySelector("#productpic");

     // this reads out custom message with font    
    document.querySelector("form").addEventListener('change', renderCard)
        function renderCard(){
            messageoutput.innerHTML=message.value
            messageoutput.style.fontFamily = document.querySelector("select[name='font']").value
          if (document.querySelector("input[value='nocard']").checked){
            messageoutput.innerHTML=""
          }
        }
    

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
  const box = document.querySelector('#mail');
  document.addEventListener('scroll', function () {
      const messageText = isInViewport(box) ?
      productpic.src="img/letters.svg" :
      productpic.src="img/";
  }, {
      passive: true
  });
        return renderCard();    
})
