

window.addEventListener("load", e=>{
    var cardcost = document.getElementById("fiftycost").textContent;
    var totalcost = document.getElementById("total")
    totalcost.innerHTML=(cardcost*(document.getElementById("count").value)).toFixed(2);

    //dynamically calculate current cost of cards based on order quantity
    document.getElementById("count").addEventListener("input", updateCost);
    function updateCost(e) {
      document.getElementById("totalcount").innerHTML=e.target.value;
      let val = e.target.value;
      if (val < 100) {newcardcost = cardcost};
      if (val >= 100 && val <= 499) {
        newcardcost = (cardcost * .95).toFixed(2);
      }
      if (val >= 500 && val <= 999) {
        newcardcost = (cardcost * .9).toFixed(2);
      }
      if (val >= 1000) {
        newcardcost = (cardcost * .85).toFixed(2);
      }
      document.getElementById("curcost").textContent = newcardcost;

      totalcost.innerHTML = (newcardcost*val).toFixed(2);;
    }
    

    //Calculate cost per card based on quantity for customer reference only
    document.getElementById('onehundredcost').innerHTML = (cardcost*.95).toFixed(2);
    document.getElementById('fivehundredcost').innerHTML = (cardcost*.90).toFixed(2);
    document.getElementById('onethousandcost').innerHTML = (cardcost*.85).toFixed(2);

    //read out order quantity in product panel

    
    document.getElementById("popupform").addEventListener("input", updatetotal);
    
    function updatetotal(){
        let totalfield = document.getElementById("total");
        

    }

});



