window.addEventListener("load", e=>{
    var message = document.querySelector("textarea[name='message']");
    var messageoutput = document.querySelector("output[name='messageresult']");
    var productpic = document.querySelector("#productpic")
    var eleheight = document.querySelector('#mail1')

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
