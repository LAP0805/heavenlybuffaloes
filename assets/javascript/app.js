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


$("#wingsAdd").on("click", function (event) {
  $(".selectFields").hide()
  $(".addedToCart").hide()
  event.preventDefault();
  addWingsToCart()
 

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
  newRow.append("<td>" + $("#wingType").val() + " (" + $("#wingsFlavorSelect").val() + ")</td><td>" + amount + "</td>")
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