<script src="js/jquery-3.6.0.min.js"></script>
$(document).ready(function() {
    $("#fontoptions2, #includelogo2, #outsideimg2, #outsideimg4, #mail2, #mail4, #mail6").hide();

    //What kind of popup would you like?
    $("#producttype").change(function() {
        if ($("input[value=card]:checked").val()) {
            $(".cardinput").show();
        } 
        if ($("input[value=nocard]:checked").val()) {
            $(".cardinput").hide();
        } 
    });

    //What font would you like to use for your message? > more font options
    $("#fontoptions1").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value") == "More Font Options"){
                $("#fontoptions2").show();
            } else{
                $("#fontoptions2").hide();
            }
        });
    });
    
    //Include your logo above your message? 
    $("#includelogo1").change(function(){
        if ($("input[value=yeslogo]:checked").val()){
            $("#includelogo2").show();
            $("#outsideimg3").show();
            $("#outsideimg4").hide();
            $("input[name=logofile]").attr("required", true);
        }
        if($("input[value=nologo]:checked").val()){
            $("#includelogo2").hide();
            $("#outsideimg3").hide();
            $("#outsideimg4").show();
            $("input[name=logofile]").attr("required", false);
        }
    })
    //Would you like to change the default linework image on the front of the card?
    $("#outsideimg1").change(function(){
        if ($("input[value=yesimg]:checked").val()){
            $("#outsideimg2").show(); 
            $("input[name=imagefit]").attr("required", false);
        }
        if($("input[value=noimg]:checked").val()){
            $("#outsideimg2").hide();
            $("input[name=imagefit]").attr("required", false);
        }
    }) 
    //Use your logo from before?
    //BUG -- this will show even if you choose nothing on "logo above message"
    $("#outsideimg3").change(function(){
        if($("input[value=yesbefore]:checked").val()){
            $("#outsideimg4").hide();
            $("input[name=logoreuse]").attr("required", false);
        }
        //no upload a new image
        //BUG -- include "how you would like your image to fit" with logo choice
        if ($("input[value=nobefore]:checked").val()){
            $("#outsideimg4").show();
            $("input[name=logoreuse], input[name=imagefit]").attr("required", true);
        }
    })

    //Include Envelopes with your order?
    $("#mail1").change(function(){
        if($("input[value=yesenv]:checked").val()){
            $("#mail2").show();
        }
        if($("input[value=noenv]:checked").val()){
            $("#mail2").hide();
        }
    })
    
    //Print Your Return Address on Your Envelopes?
    $("#mail3").change(function(){
        if($("input[value=yesreturn]:checked").val()){
            $("#mail4").show();
        }
        if($("input[value=noreturn]:checked").val()){
            $("#mail4").hide();
        }
    })
    //Print your client's addresses on your envelope?
    $("#mail5").change(function(){
        if($("input[value=yesadd]:checked").val()){
            $("#mail6").show();
        }
        if($("input[value=noadd]:checked").val()){
            $("#mail6").hide();
        }
    })

});