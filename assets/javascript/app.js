
$("#wingType").on("change", function(){
    if($(this).val() === "Bone-In"){
        $("#boneInHowMany").show();
        $("#veganHowMany").hide();
        $("#bonelessHowMany").hide();
        $("#wingsFlavor").show()
    }
    if($(this).val() === "Boneless"){
        $("#bonelessHowMany").show();
        $("#boneInHowMany").hide();
        $("#veganHowMany").hide();
        $("#wingsFlavor").show()
    }
    if($(this).val() === "Vegan"){
        $("#veganHowMany").show();
        $("#boneInHowMany").hide();
        $("#bonelessHowMany").hide();
        $("#wingsFlavor").show()
    }
    
})

$("#friesType").on("change", function(){
 $("#friesHowMany").show()
})


$("#wingsAdd").on("click", function(event){
  $(".selectFields").hide()
  $(".addedToCart").hide()
  event.preventDefault();
  if($("#wingType").val() && $("#wingsHowManySelect").val() && $("#wingsFlavorSelect").val() && $("#wingsQuantity").val()){
    $(".addedToCart").show()
    addWingsToCart()
  }
  else if($("#wingType").val() && $("#bonelessHowManySelect").val() && $("#wingsFlavorSelect").val() && $("#wingsQuantity").val()){
$(".addedToCart").show()
addWingsToCart()
  }
  else if($("#wingType").val() && $("#veganHowManySelect").val() && $("#wingsFlavorSelect").val() && $("#wingsQuantity").val()){
    $(".addedToCart").show()
    addWingsToCart()
  }
  else{
    $(".selectFields").show();
  }
  $("#wingsForm").trigger("reset");

})



function addWingsToCart(){
 
  let newRow = $("<tr>") 
  let amount= $("#wingsHowManySelect").find(':selected').data('amount')
  let price= $("#wingsHowManySelect").find(':selected').data('price')
  console.log(price)
  let priceCell = $("<td>" + price +"</td>")
  priceCell.attr("class", "itemPrice")
  newRow.append("<td>"+ $("#wingType").val()+ " (" + $("#wingsFlavorSelect").val()+")</td><td>" +amount+"</td>")
 newRow.append(priceCell)

  $("#cartTable").append(newRow)
  let sum=0;
  $(".itemPrice").each(function(){
    var value = $(this).text();
    if(!isNaN(value) && value.length != 0) {
        sum += parseFloat(value)
    }
  })

  $("#cartTotal").text("$" + sum)
}