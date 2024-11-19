$(document).ready(function() {

   $("#bg-profile").click(function() {
    $("#uploads_profile").click();
   });

   $("#bg-ktp").click(function() {
    $("#uploads_ktp").click();
   });

   $("#bg-ktp-selfie").click(function() {
    $("#uploads_ktp_selfie").click();
   });

   $("#idcard_type").change(function () {
   var idcard_type  = $("#idcard_type").val();
   $("#show_idcard_type").html(idcard_type);
   });


   $("#uploads_profile").change(function () 
   {
     $("#fa-profile").hide();
     var iSize          = ($("#uploads_profile")[0].files[0].size / 1024);

     var size_profile           = $("#size_profile").val();
     var size_ktp               = $("#size_ktp").val();
     var size_ktp_selfie        = $("#size_ktp_selfie").val();

     if (iSize / 1024 > 1)
     {
        if (((iSize / 1024) / 1024) > 1)
        {
            iSize = (Math.round(((iSize / 1024) / 1024) * 100) / 100);
            if(iSize >= 0) {
            $("#lblSize_profile").html( iSize + "Gb! <span style=\"color:red;\">It's too large!</span>");
            $("#btnUpload").hide();
            $("#size_profile").val("1000");
            }
        }
        else
        {
            iSize = (Math.round((iSize / 1024) * 100) / 100)
            if(iSize > 5) {
            $("#lblSize_profile").html(iSize + "Mb! <span style=\"color:red;\">It's too large!</span>");
            $("#btnUpload").hide();
            $("#size_profile").val("1000");
            } else {
            $("#lblSize_profile").html( iSize + "Mb");
            if(size_ktp > 5 || size_ktp_selfie > 5) {
            $("#btnUpload").hide();
        } else {
            $("#size_profile").val("5");
            $("#btnUpload").show();
        }
            }
        }
     }
     else
     {
        iSize = (Math.round(iSize * 100) / 100)
        $("#lblSize_profile").html( iSize  + "kb");
    if(size_ktp > 5 || size_ktp_selfie > 5) {
        $("#btnUpload").hide();
        } else {
    if(iSize < 10) {
        $("#size_profile").val("1000");
        $("#lblSize_profile").html(iSize + "kb! <span style=\"color:red;\">It's too small!</span>");
        $("#btnUpload").hide();
        } else {
        $("#size_profile").val("5");
        $("#btnUpload").show();
    }
    }
     }
   });

   $("#uploads_ktp").change(function ()
   {
     $("#fa-ktp").hide();
     var iSize = ($("#uploads_ktp")[0].files[0].size / 1024);
 
     var size_profile           = $("#size_profile").val();
     var size_ktp               = $("#size_ktp").val();
     var size_ktp_selfie        = $("#size_ktp_selfie").val();

     if (iSize / 1024 > 1)
     {
        if (((iSize / 1024) / 1024) > 1)
        {
            iSize = (Math.round(((iSize / 1024) / 1024) * 100) / 100);
        if(iSize >= 0) {
            $("#lblSize_ktp").html( iSize + "Gb! <span style=\"color:red;\">It's too large!</span>");
            $("#btnUpload").hide();
            $("#size_ktp").val("1000");
        }
        }
        else
        {
            iSize = (Math.round((iSize / 1024) * 100) / 100)
        if(iSize > 5) {
            $("#lblSize_ktp").html(iSize + "Mb! <span style=\"color:red;\">It's too large!</span>");
            $("#btnUpload").hide();
            $("#size_ktp").val("1000");
        } else {
            $("#lblSize_ktp").html( iSize + "Mb");
        if(size_profile > 5 || size_ktp_selfie > 5) {
        $("#btnUpload").hide();
        } else {
            $("#size_ktp").val("5");
            $("#btnUpload").show();
        }
        }
        }
     }
     else
     {
        iSize = (Math.round(iSize * 100) / 100)
        $("#lblSize_ktp").html( iSize  + "kb");
    if(size_profile > 5 || size_ktp_selfie > 5) {
        $("#btnUpload").hide();
        } else {
    if(iSize < 10) {
        $("#size_ktp").val("1000");
        $("#lblSize_ktp").html(iSize + "kb! <span style=\"color:red;\">It's too small!</span>");
        $("#btnUpload").hide();
        } else {
        $("#size_ktp").val("5");
        $("#btnUpload").show();
    }
    }
     }
  });
  $("#uploads_ktp_selfie").change(function ()
   {
     $("#fa-ktp-selfie").hide();
     var iSize = ($("#uploads_ktp_selfie")[0].files[0].size / 1024);

     var size_profile           = $("#size_profile").val();
     var size_ktp           = $("#size_ktp").val();
     var size_ktp_selfie        = $("#size_ktp_selfie").val();

     if (iSize / 1024 > 1)
     {
        if (((iSize / 1024) / 1024) > 1)
        {
            iSize = (Math.round(((iSize / 1024) / 1024) * 100) / 100);
            if(iSize >= 0) {
            $("#lblSize_ktp_selfie").html( iSize + "Gb! <span style=\"color:red;\">It's too large!</span>");
            $("#btnUpload").hide();
        $("#size_ktp_selfie").val("1000");
            }
        }
        else
        {
            iSize = (Math.round((iSize / 1024) * 100) / 100)
            if(iSize > 5) {
            $("#lblSize_ktp_selfie").html(iSize + "Mb! <span style=\"color:red;\">It's too large!</span>");
            $("#btnUpload").hide();
            $("#size_ktp_selfie").val("1000");
            } else {
            $("#lblSize_ktp_selfie").html( iSize + "Mb");
        if(size_profile > 5 || size_ktp > 5) {
            $("#btnUpload").hide();
            } else {
            $("#size_ktp_selfie").val("5");
            $("#btnUpload").show();
        }
            }
        }
     }
     else
     {
        iSize = (Math.round(iSize * 100) / 100)
        $("#lblSize_ktp_selfie").html( iSize  + "kb");
        if(size_profile > 5 || size_ktp > 5) {
        $("#btnUpload").hide();
        } else {
    if(iSize < 10) {
        $("#size_ktp_selfie").val("1000");
        $("#lblSize_ktp_selfie").html(iSize + "kb! <span style=\"color:red;\">It's too small!</span>");
        $("#btnUpload").hide();
        } else {
        $("#size_ktp_selfie").val("5");
        $("#btnUpload").show();
    }
    }
     }
  });
});





var $j = jQuery.noConflict();
$j(function(){


$j("#btnUpload").click(function() {

var lidcard        = $j("#idcard_number").val().length;
var size_profile           = $j("#size_profile").val();
var size_ktp               = $j("#size_ktp").val();
var size_ktp_selfie        = $j("#size_ktp_selfie").val();

if(lidcard < 5) {
alert("ERROR: Silakan isi Nomor Identitas dengan benar!");
$j("#idcard_number").focus();
} else if(size_profile != "5") {
alert("ERROR: Silakan upload Foto Profile anda!");
} else if(size_ktp != "5") {
alert("ERROR: Silakan upload Foto Identitas anda!");
} else if(size_ktp_selfie != "5") {
alert("ERROR: Silakan upload Foto Selfie dengan Identitas anda!");
} else {
document.frm.submit();
$j("#btnUpload").prop('disabled', true);
$j("#btnUpload").val("Proses...");

var valid = true;

if (!valid) {
e.preventDefault();
$j("#btnUpload").prop('disabled', false);
}

}
});


});
