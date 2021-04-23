window.addEventListener("load", e=>{
    var message = document.querySelector("textarea[name='message']");
    var messageoutput = document.querySelector("output[name='messageresult']");
    var productpic = document.querySelector("#productpic")
    var eleheight = document.querySelector('#mail')
   
    // console.log(eleheight.offsetHeight);
    // console.log((eleheight.offsetTop + eleheight.offsetHeight));

        
    document.querySelector("form").addEventListener('change', renderCard)
        function renderCard(){
            messageoutput.innerHTML=message.value
            messageoutput.style.fontFamily = document.querySelector("select[name='font']").value
          if (document.querySelector("input[value='nocard']").checked){
            messageoutput.innerHTML=""
          }
        }
    
    document.addEventListener('scroll', evn=> {
          if (window.scrollY >(eleheight.offsetTop + eleheight.offsetHeight)) {
            productpic.src="img/letters.svg";
          }
        });

        return renderCard();
        
})
