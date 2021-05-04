
window.addEventListener("load", e=>{

  var cardcost = document.getElementById("fiftycost").textContent;
    cardtotal = document.getElementById("count");
    totalelem = document.getElementById("total");
    costelem = document.getElementById("curcost");

    totalelem.value = (cardcost*(cardtotal.value)).toFixed(2);
    costelem.value = cardcost
  
    //dynamically calculate current cost of cards based on order quantity
    document.querySelector("form").addEventListener("input", updateCost);

    function updateCost() {
      let val = cardtotal.value;
          
      document.getElementById("totalcount").value=val;

      if (val < 100) {newcardcost = cardcost};
      if (val >= 100 && val <= 499) {
        newcardcost = (cardcost * .95);
      }
      if (val >= 500 && val <= 999) {
        newcardcost = (cardcost * .9);
      }
      if (val >= 1000) {
        newcardcost = (cardcost * .85);
      }
      costper = newcardcost;

      //total cost based on dynamic 
      totalamt = (newcardcost*val);
      costper = parseFloat(newcardcost)

      //if you select no card attached
      if (document.querySelector("input[value='nocard']").checked){
        totalamt -= (val*5);
        costper-= 5;
      };
      if (document.querySelector("input[value='card']").checked){
        if (document.querySelector("#yes-envelopes").checked){
          totalamt += (val*.5)
          costper+= .5;
        }
        if (document.querySelector("#yes-pack").checked){
          totalamt += (val*.5)
          costper += .5;
        }
        if (document.querySelector("#yes-returnadd").checked){
          totalamt += (val*.3)
          costper += .3;
        }
        if (document.querySelector("#yes-clients").checked){
          totalamt += (val*1)
          costper += 1;
        }
        if (document.querySelector("#yes-mail").checked){
          totalamt += (val*1)
          costper += 1;
        }
      };

      totalelem.value = totalamt.toFixed(2);
      costelem.value = costper.toFixed(2);
    }

    //Calculate cost per card based on quantity for customer reference only
    document.getElementById('onehundredcost').innerHTML = (cardcost*.95).toFixed(2);
    document.getElementById('fivehundredcost').innerHTML = (cardcost*.90).toFixed(2);
    document.getElementById('onethousandcost').innerHTML = (cardcost*.85).toFixed(2);

});



