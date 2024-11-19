var $j = jQuery.noConflict();
$j(function(){


// START TOAST
var post_totalprice = $j('#post_totalprice').val();
var json_totalprice = $j('#json_totalprice').val();

if(post_totalprice != json_totalprice) {
$j('#toast').html("Harga berubah jadi <b>Rp."+json_totalprice+"</b><span id=\"toast-close\">TUTUP</span>");
$j("#toast").css("background-color", "#ff1e33");

$j('#toast').addClass('show').stop().delay(7500).queue(function(){
  $j(this).removeClass('show');
});


$j("#toast-close").click(function() {
  $j('#toast').removeClass('show');
});
}
// END TOAST


$j("input[name*='tanggallahir_bayi']").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: "-740D",
        numberOfMonths: 1,
        maxDate: "0D",
        dateFormat: 'dd-mm-yy',
        dayNamesMin: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
});



$j('#namalengkap_1').focus();


$j("#autoissued").click(function(){
   if($j('#autoissued').prop('checked')) {
   //alert('LANGSUNG ISSUED memotong saldo anda!');
   $j('#toast').html("LANGSUNG ISSUED memotong saldo anda! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
   $j("#bookingbutton").val("ISSUED NOW");
   } else {
   $j("#bookingbutton").val("BOOKING NOW");
   }
});




$j("#bookingbutton").click(function() {


	var session		= $j('#getsession').val();
	var train_name         	= $j('#train_name').val();
	var train_code         	= $j('#train_code').val();
        var train_class        	= $j('#train_class').val();
        var train_subclass     	= $j('#train_subclass').val();
	var train_from         	= $j('#train_from').val();
        var train_to           	= $j('#train_to').val();
        var train_date         	= $j('#train_date').val();
        var train_adult		= $j('#train_adult').val();
        var train_child        	= $j('#train_child').val();
        var train_infant       	= $j('#train_infant').val();
        var train_key 		= $j('#train_key').val();
        var train_price        	= $j('#train_price').val();
        var train_seat          = $j('#train_seat').val();
	var train_datetime	= $j('#train_datetime').val();


	if ($j("#autoissued").prop('checked')) {
        var autoissued = "1";
        }

	var goback		= $j('#goback').val();

	if(goback == "1") {
	var session_back        = $j('#getsession_back').val();
        var train_name_back     = $j('#train_name_back').val();
        var train_code_back     = $j('#train_code_back').val();
        var train_class_back    = $j('#train_class_back').val();
        var train_subclass_back = $j('#train_subclass_back').val();
        var train_date_back     = $j('#train_date_back').val();
        var train_price_back    = $j('#train_price_back').val();
        var train_seat_back     = $j('#train_seat_back').val();
        var train_datetime_back = $j('#train_datetime_back').val();
	}

        var nama                = '';
        var ktp                 = '';

        var dewasaanakbayi      = +train_adult + +train_child + +train_infant;

	for(i = 1; i <= dewasaanakbayi; i++) {
            var btitle          = $j("#title_"+i).val();
            var bnama		= $j("#namalengkap_"+i).val();
            var bktp            = $j("#ktp_"+i).val();

	    var lnama           = $j("#namalengkap_"+i).val().length;

            if(lnama < 3) {
            //alert("Invalid nama lengkap untuk penumpang "+i+" "+bnama+"! Min. 3 characters!");
            $j('#toast').html("Nama lengkap untuk penumpang "+i+" "+bnama+"! Min. 3 characters! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
            $j("#toast").css("background-color", "#ff1e33");
            $j('#toast').addClass('show').stop().delay(7500).queue(function(){
              $j(this).removeClass('show');
            });
            $j("#toast-close").click(function() {
              $j('#toast').removeClass('show');
            });
	    $j('#namalengkap_'+i).focus();
            return false;
            } else {
            //nama        	+=  i + ". " + btitle + ". " + bnama + " - Identitas: " + bktp + "<br />";
            nama            +=  btitle + ". " + bnama + ":";
            ktp +=  bktp + ":";
            }
        }


	var phone		= $j("#phone").val();
        var email               = $j("#email").val();
        var lphone              = $j("#phone").val().length;
        var lemail              = $j("#email").val().length;
        var hp = $j("#hpuser").val();
	var dataStringBooking   = 'hp='+hp+'&train_name='+train_name+'&train_code='+train_code+'&train_class='+train_class+'&train_subclass='+train_subclass+'&train_date='+train_date+'&train_from='+train_from+'&train_to='+train_to+'&train_adult='+train_adult+'&train_child='+train_child+'&train_infant='+train_infant+'&nama='+nama+'&ktp='+ktp+'&session='+session+'&train_price='+train_price+'&train_seat='+train_seat+'&train_datetime='+train_datetime+'&phone='+phone+'&email='+email+'&session_back='+session_back+'&train_name_back='+train_name_back+'&train_code_back='+train_code_back+'&train_class_back='+train_class_back+'&train_subclass_back='+train_subclass_back+'&train_date_back='+train_date_back+'&train_price_back='+train_price_back+'&train_seat_back='+train_seat_back+'&train_datetime_back='+train_datetime_back+'&goback='+goback+'&autoissued='+autoissued;
        if(lphone < 8) {
        //alert("Please enter correct phone number");
        $j('#toast').html("Please enter correct phone number <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
            $j("#toast").css("background-color", "#ff1e33");
            $j('#toast').addClass('show').stop().delay(7500).queue(function(){
              $j(this).removeClass('show');
            });
            $j("#toast-close").click(function() {
              $j('#toast').removeClass('show');
            });
	$j('#phone').focus();
        } else if(lemail < 7) {
        //alert("Please enter correct email address");
        $j('#toast').html("Please enter correct email address <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
            $j("#toast").css("background-color", "#ff1e33");
            $j('#toast').addClass('show').stop().delay(7500).queue(function(){
              $j(this).removeClass('show');
            });
            $j("#toast-close").click(function() {
              $j('#toast').removeClass('show');
            });
        $j('#email').focus();
        } else {
        $j.ajax({
        url: "index.php/ticket/formtrainresultbooking",
        type: "post",
        data: dataStringBooking,
        beforeSend: function(html) {
        $j("#bookingbutton").css({cursor:"default"});
        $j("#bookingbutton").val("Proses Booking...");
	$j("#bookingbutton").prop('disabled', true);
            },
        success: function (html) {
	if(html.match(/ERROR:/)) {
	$j("#bookingbutton").css({cursor:"pointer"});
        $j("#bookingbutton").prop('disabled', false);
        $j("#bookingbutton").val("Booking Now");
	$j('#toastbooking-close').show();
	$j('#toastbooking-content').html(""+html+"");
	$j("#toastbooking").css("background-color", "#ff1e33");
	$j('#toastbooking').addClass('showbooking').stop().delay(7500).queue(function(){
	  $j(this).removeClass('showbooking');
	});
	$j("#toastbooking-close").click(function() {
	  $j('#toastbooking').removeClass('showbooking');
	});
	} else {
        $j("#bookingbutton").css({cursor:"pointer"});
        $j("#bookingbutton").prop('disabled', false);
        $j("#bookingbutton").val("Booking Now");
        $j("#resultbooking").show();
        $j(".detailorder").hide();
        $j('#resultbooking').html(html);
	var last_fare   	= $j("#last_totalfare").val();
        var last_basicfare	= $j("#last_basicfare").val();
        var last_diskonchannel	= $j("#last_diskonchannel").val();
        var last_bonus  	= $j("#last_bonus").val();
	var last_fare_back      = $j("#last_totalfare_back").val();
        var last_basicfare_back = $j("#last_basicfare_back").val();
        var last_diskonchannel_back = $j("#last_diskonchannel_back").val();
        var last_bonus_back     = $j("#last_bonus_back").val();
        //$j("#display_price").html(last_fare);
        //$j("#display_basicfare").html(last_basicfare);
        //$j("#display_diskonchannel").html(last_diskonchannel);
        //$j("#display_bonus").html(last_bonus);
	}
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }

        });
        }


});

});
