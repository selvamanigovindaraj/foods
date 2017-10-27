var foods;
var foodList;
var quantity;
var foodsPrice=0;
var sNo=0;
var totalPrice=0;
var grandTotal=0;
$(document).ready(function () {
    $(".foodList").hide();
    $(".addressArea").hide();
    $.ajax({
        type: "GET",
        url: "https://59da0fdfea4639001240945b.mockapi.io/foodItems",
        dataType: "json",
        success: function (result) {
            foodList=result;
            foodItems = "<option value=''>" + "Choose.." + "</Option>"
            for (i = 0; i < result.length; i++) {
                foodItems += "<option>" + result[i].foods + "</option>"
            }
            $("select").html(foodItems);
        }
    })
});
function findFood() {
    foods = $("select").val();
}
function createInvoice() {
    $('.foodList').show();
    quantity = $("#quantity").val();
    for (i = 0; i < foodList.length; i++) {
        if (foodList[i].foods == foods) {
            foodsPrice = foodList[i].price;
        }
    }
    totalPrice = quantity * foodsPrice;
    sNo += 1;
    $("tbody").append("<tr><td>" + sNo + "</td><td>" + foods + "</td><td>" + quantity + "</td><td>" + foodsPrice + "</td><td>" + totalPrice + "</td></tr>");
    grandTotal = eval(grandTotal + totalPrice);
    $("#grandTotal").html(grandTotal);
}
$(".form-check-input").change(function() {
    if(this.checked) {
        $(".addressArea").show();
    }
    else{
        $(".addressArea").hide();
    }
});
function goToPayment(){
    var payerDetials={
        address:$("#address").val(),
        grandTotalPrice:$("#grandTotal").text()
    }
    $.post("https://59f2d1f096bf410012f8c4dc.mockapi.io/payeedetials",payerDetials,function(){
        
    })
}