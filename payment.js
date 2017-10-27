$(document).ready(function(){
    $("#paymentForm").validate({
        rules:{
            userName:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            mobileNo:{
                required:true,
                minlength:true
            },
            cardNo:{
                required:true,
                minlength:true
            },
            expiryDate:{
                required:true,
                date:true
            },
            cvvNo:{
                required:true,
            }
            // cvv:{
            //     required:true,
            //     maxlength:true
            // }
        },
        message:{
            userName:{
                required:"This Field is required"
            },
            email:{
                required:"This Field is required",
                email:"provide valid email"
            },
            mobileNo:{
                required:"This Field is required",
                minlength:"Atleast have 10 numbers"
            },
            cardNo:{
                required:"This Field is required",
                minlength:"Atleast have 16 numbers"
            },
            expiryDate:{
                required:"This Field is required",
                date:"provide valid date"
            },
            cvvNo:{
                required:"This Field is required",
            }
        },
        submitHandler:function(form){
            var payment={
                username:$("#userName").val(),
                email:$("#email").val(),
                mobile:$("#mobileNo").val(),
                cardno:$("#cardNo").val(),
                expiry:$("#expiryDate").val(),
                cvv:$("#cvv").val()
            }
            $.post("https://59f2c25d96bf410012f8c4c4.mockapi.io/paymentdetials",payment,function(){
                $("#userName").val('');
                $("#email").val('');
                $("#mobileNo").val('');
                $("#cardNo").val('');
                $("#expiryDate").val('');
                $("#cvv").val('');
            })
        }
    });  
})