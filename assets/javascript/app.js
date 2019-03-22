$("#wingType").on("change", function () {
  if ($(this).val() === "Bone-In") {
    $("#boneInHowMany").show();
    $("#veganHowMany").hide();
    $("#bonelessHowMany").hide();
    $("#wingsFlavor").show()
  }
  if ($(this).val() === "Boneless") {
    $("#bonelessHowMany").show();
    $("#boneInHowMany").hide();
    $("#veganHowMany").hide();
    $("#wingsFlavor").show()
  }
  if ($(this).val() === "Vegan") {
    $("#veganHowMany").show();
    $("#boneInHowMany").hide();
    $("#bonelessHowMany").hide();
    $("#wingsFlavor").show()
  }

})

$("#friesType").on("change", function () {
  $("#friesHowMany").show()
})

$(".dismiss").on("click", function(){
  $(".selectFields").hide()
  $(".addedToCart").hide()
})

$("#wingsAdd").on("click", function (event) {
  $(".selectFields").hide()
  $(".addedToCart").hide()
  event.preventDefault();
  addWingsToCart()
})

$("#friesAdd").on("click", function(event){
  $(".selectFields").hide()
  $(".addedToCart").hide()
  event.preventDefault();
  addFriesToCart();
})

$("#beerAdd, #drinksAdd, #browniesAdd").on("click", function(event){
  $(".selectFields").hide()
  $(".addedToCart").hide()
  event.preventDefault();
  addBeerDrinksBrownies();
  
})




function addWingsToCart() {
  
  let amount = $("#wingsQuantity").val()
  let price;
  let quantity;
  if ($("#wingType").val() && $("#wingsHowManySelect").val() && $("#wingsFlavorSelect").val() && $("#wingsQuantity").val()) {
    price = $("#wingsHowManySelect").find(':selected').data('price')
    quantity = $("#wingsHowManySelect").find(':selected').data('amount')
  } else if ($("#wingType").val() && $("#bonelessHowManySelect").val() && $("#wingsFlavorSelect").val() && $("#wingsQuantity").val()) {
    price = $("#bonelessHowManySelect").find(':selected').data('price')
    quantity = $("#bonelessHowManySelect").find(':selected').data('amount')
  } else if ($("#wingType").val() && $("#veganHowManySelect").val() && $("#wingsFlavorSelect").val() && $("#wingsQuantity").val()) {
    price = $("#veganHowManySelect").find(':selected').data('price')
    quantity = $("#veganHowManySelect").find(':selected').data('amount')
  }
  else{
    return $(".selectFields").show();
  }
  
  $(".addedToCart").show()
  let newRow = $("<tr>")
  let priceCell = $("<td>" + (price * amount) + "</td>")
  priceCell.attr("class", "itemPrice")
  newRow.append("<td>" + $("#wingType").val() + " (" + $("#wingsFlavorSelect").val() + ")(" +quantity+ ")</td>")
  let quantityCell=$("<td>"+amount+"</td>")
  newRow.append(quantityCell);
  newRow.append(priceCell)
  

  $("#cartTable").append(newRow)
  let sum = 0;
  $(".itemPrice").each(function(){
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      sum += Math.round(value * 100) / 100
    }
    sum =  Math.round(sum * 100) / 100
  })

  
  $("#totalHere").text("$" + sum)
  $("#wingsForm").trigger("reset");

}




function addFriesToCart(){
let amount;
let price;
if($("#friesType").val() && $("#friesHowManySelect").val() && $("#friesQuantity").val()){
amount=$("#friesQuantity").val()
price= $("#friesHowManySelect").find(":selected").data("price");

}
else{
  return $(".selectFields").show();
  
}
$(".addedToCart").show()
let newRow = $("<tr>")
console.log(price)
let priceCell = $("<td>" + (price * amount) + "</td>")
priceCell.attr("class", "itemPrice")
newRow.append("<td>" + $("#friesType").val() + "("+$("#friesHowManySelect").find(":selected").data("amount") +")</td>")
let quantityCell = $("<td>" + amount + "</td>")
newRow.append(quantityCell)
newRow.append(priceCell)
$("#cartTable").append(newRow)
let sum = 0;
  $(".itemPrice").each(function(){
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      sum += Math.round(value * 100) / 100
    }
    sum =  Math.round(sum * 100) / 100
  })
 
  


$("#totalHere").text("$" + sum)
$("#friesForm").trigger("reset");
}


function addBeerDrinksBrownies(){
let amount;
let price;
if ($("#beerSelect").val()){
amount = $("#beerQuantity").val()
price = $("#beerSelect").find(":selected").data("price")
}
else if($("#drinksSelect").val()){
  amount= $("#drinksQuantity").val()
  price = $("#drinksSelect").find(":selected").data("price")
}
else if($("#browniesSelect").val()){
   amount = $("#browniesQuantity").val()
   price = $("#browniesSelect").find(":selected").data("price")
}
else {
  return $(".selectFields").show();
}
$(".addedToCart").show()
let newRow = $("<tr>")
console.log(price)
let priceCell = $("<td>" + (price * amount) + "</td>")
priceCell.attr("class", "itemPrice")
if($("#beerSelect").val()){
  newRow.append("<td>" + $("#beerSelect").val() +"</td>")
}
if($("#drinksSelect").val()){
  newRow.append("<td>" + $("#drinksSelect").val() + "("+$("#drinksSelect").find(":selected").data("size") +")</td>")
}
if($("#browniesSelect").val()){
  newRow.append("<td>" + $("#browniesSelect").val() +"</td>")
}
let quantityCell = $("<td>" + amount + "</td>")
newRow.append(quantityCell)
newRow.append(priceCell)
$("#cartTable").append(newRow)
let sum = 0;
  $(".itemPrice").each(function(){
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      sum += Math.round(value * 100) / 100
    }
    sum =  Math.round(sum * 100) / 100
  })
 
$("#totalHere").text("$" + sum)
$("#drinksForm").trigger("reset");
$("#beerForm").trigger("reset");
$("#browniesForm").trigger("reset");
}