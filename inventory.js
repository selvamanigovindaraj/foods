var spice;
var spiceList;
$(document).ready(function(){
    $(".spiceInformation").hide();
    $.ajax({
        type: "GET",
        url: "https://59f2dbd596bf410012f8c4e9.mockapi.io/spiceDetials",
        dataType: "json",
        success: function (result) {
            spiceList=result;
            var option="<option value=''>"+"Choose..."+"</option>"
            for(i=0;i<result.length;i++){
                option+="<option>"+result[i].product+"</option>"
            }
            $("select").html(option);
        }
    })
});
function spices(){
    spice=$('select').val();
}
function spicesDetials(){
    $(".spiceInformation").show ();
    for(i=0;i<spiceList.length;i++){
        if(spiceList[i].product==spice){
            $("#product").text(spiceList[i].product);
            $("#recievedDate").text(spiceList[i].recievedDate);
            $("#priceInKg").text(spiceList[i].pricekg);
            $("#buyerName").text(spiceList[i].buyerName);
            $("#mobileNo").text(spiceList[i].mobile);
            $("#unicCode").text(spiceList[i].unicCode);
            $("#expiryDate").text(spiceList[i].expiryDate);
            $("#priceInTon").text(spiceList[i].priceTons);
            $("#salesman").text(spiceList[i].salesman);
            $("#email").text(spiceList[i].email);
        }
    }
}