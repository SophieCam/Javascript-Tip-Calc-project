/////*****Date function ******/////////
//yellow= js methods
//The getDate() method returns the day of a date as a number (1-31)
var today = new Date();

var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date + ' / ' + time;

document.getElementById("clockDisplay").innerHTML = dateTime;


//////*************Calculate **********/////

function calculate() {
  var billAmount = document.getElementById("billAmt").value;
  var shareBill = document.getElementById("guest").value;
  var serviceQuality = document.getElementById("serviceQual").value;

  //Display tip and the total after split
  var tipResult = billAmount * serviceQuality / shareBill;
  document.getElementById("total").innerHTML = "Tip Per Person:$" + tipResult.toFixed(2);


  var totalResult = (billAmount / shareBill) + tipResult;
  document.getElementById("totalPP").innerHTML = "Total Amount Due Per Person: $" + totalResult.toFixed(2);
}