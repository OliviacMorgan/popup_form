window.addEventListener("load", e=>{

    var cardques = document.querySelectorAll(".cardinput");
        cardbtns = document.querySelector("input[type=radio].data-card")

        bookques = document.querySelector(".bookinput");
        bookbtns = document.querySelectorAll("input[type=radio].data-book");

        bookques.classList.add("hidden");

        for (var i=0; i<bookbtns.length; i++){
            bookbtns[i].addEventListener("change", evt=>{
                console.log(evt.target.value );
                while(evt.target.value = "on" && bookques.classList.contains("hidden")==true){
                    bookques.classList.remove("hidden");

                    cardques.forEach(function(cardque){
                        cardque.classList.add("hidden");
                        });
                    }
            })
        }
            
        cardbtns.addEventListener("change", event=>{
            console.log(event.target.value );
            while(event.target.value = "on" && bookques.classList.contains("hidden")==false)
            bookques.classList.add("hidden")

            cardques.forEach(function(cardque){
            while (cardque.classList.contains("hidden"))
            cardque.classList.remove("hidden");
             });
        })
        


    // while(bl--)
    //     bookbtns[bl].addEventListener("change", function(){
    //     cardques.forEach(function(cardque){
    //     cardque.classList.add("hidden");
    //     });
    //     })
    
    // for (var i=0; i<bl; i++){(function(bookbtn){
    //     bookbtns[bookbtn].addEventListener("clicked", evt=>{
    //         console.log("evt.target.value");
    //     })
    // })
    // }
//    function hideQuestions(){
//     if (cardbtns.checked == true){
//         bookques.classList.add("hidden");
//     }
//     else{
//         for (cardque in cardques){
//             cardques.classlist.add("hidden");
//         };
//         bookques.classList.remove("hidden");
//     }
//     }
//     return hideQuestions();
    
    // for (bookbtn in bookbtns){
    //     bookbtns[bookbtn].onclick = function(){
    //     cardques.forEach(function(cardque){
    //     cardque.classList.add("hidden");
    //     });
    //     }
    // }
    

    
    
    });