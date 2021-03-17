

window.addEventListener("load", e=>{
    //read out order quality in product panel
    var count = document.getElementById("count");
    let popupcountfield = document.getElementById("totalcount");

    count.addEventListener("input", updateQuantity);
    
        function updateQuantity(e){
            popupcountfield.textContent=e.target.value;
        }
    

    //Calculate cost per card based on quantity
    var fifty = document.getElementById("fiftycost");
    document.getElementById('onehundredcost').innerHTML = ((fifty.textContent)*.95).toFixed(2);
    document.getElementById('fivehundredcost').innerHTML = ((fifty.textContent)*.90).toFixed(2);
    document.getElementById('onethousandcost').innerHTML = ((fifty.textContent)*.85).toFixed(2);

    //MAIN- calculate total cost of order

    

});



