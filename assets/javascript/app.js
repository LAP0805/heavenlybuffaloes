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



function addWingsToCart() {
  let amount;
  let price;
  if ($("#wingType").val() && $("#wingsHowManySelect").val() && $("#wingsFlavorSelect").val() && $("#wingsQuantity").val()) {

    amount = $("#wingsHowManySelect").find(':selected').data('amount')
    price = $("#wingsHowManySelect").find(':selected').data('price')
  } else if ($("#wingType").val() && $("#bonelessHowManySelect").val() && $("#wingsFlavorSelect").val() && $("#wingsQuantity").val()) {

    amount = $("#bonelessHowManySelect").find(':selected').data('amount')
    price = $("#bonelessHowManySelect").find(':selected').data('price')
  } else if ($("#wingType").val() && $("#veganHowManySelect").val() && $("#wingsFlavorSelect").val() && $("#wingsQuantity").val()) {
    amount = $("#veganHowManySelect").find(':selected').data('amount')
    price = $("#veganHowManySelect").find(':selected').data('price')
  }
  else{
    return $(".selectFields").show();
  }
  $(".addedToCart").show()
  let newRow = $("<tr>")
  console.log(price)
  let priceCell = $("<td>" + price + "</td>")
  priceCell.attr("class", "itemPrice")
  newRow.append("<td>" + $("#wingType").val() + " (" + $("#wingsFlavorSelect").val() + ")</td>")
  let quantityCell=$("<td>"+amount+"</td>")
  quantityCell.attr("class","quantitySub")
  newRow.append(quantityCell);
  newRow.append(priceCell)
  

  $("#cartTable").append(newRow)
  let sum = 0;
  $(".itemPrice").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      sum += parseFloat(value)
    }
  })

  $("#cartTotal").text("$" + sum)
  $("#wingsForm").trigger("reset");

}
let priceID=0;
function addFriesToCart(){
let amount;
let price;
let quantity;
priceID ++;
if($("#friesType").val() && $("#friesHowManySelect").val() && $("#friesQuantity").val()){
amount=$("#friesQuantity").val()
price= $("#friesHowManySelect").find(":selected").data("price");
quantity=$("#friesQuantity").val();
}
else{
  return $(".selectFields").show();
  
}
$(".addedToCart").show()
let newRow = $("<tr>")
console.log(price)
let priceCell = $("<td>" + price + "</td>")
priceCell.attr("data-number", priceID)
priceCell.attr("class", "itemPrice")
newRow.append("<td>" + $("#friesType").val() + "("+$("#friesHowManySelect").find(":selected").data("amount") +")</td>")
let quantityCell = $("<td>" + amount + "</td>")
quantityCell.attr("data-number", priceID)
quantityCell.attr("class", "itemQuantity")
newRow.append(quantityCell)
newRow.append(priceCell)


$("#cartTable").append(newRow)
let sum = 0;
let quantity2;
let tag;
$(".itemPrice").each(function () {
  tag = $(this).attr("data-number");
  console.log(tag)
       $(".itemQuantity").each(function(){
         if(tag = $(this).attr("data-number")){
          quantity2 = $(this).text();
          console.log(quantity2)
         }
       })
  
  var value = $(this).text();
  if (!isNaN(value) && value.length != 0) {
    sum += (parseFloat(value) * parseInt(quantity2))
    
  }
})

$("#cartTotal").text("$" + sum)
$("#friesForm").trigger("reset");
}