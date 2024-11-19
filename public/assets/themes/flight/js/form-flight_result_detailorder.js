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

$j("#frm input[name='tanggallahir_dewasa']").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: '-100Y',
        yearRange: "-90:+0",
        numberOfMonths: 1,
        maxDate: "-12Y",
        dateFormat: 'dd-mm-yy',
        dayNamesMin: ['M', 'S', 'S', 'R', 'K', 'J', 'S']
});

$j("input[name*='passport_expired']").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: '0Y',
        yearRange: "-0:+10",
        numberOfMonths: 1,
        maxDate: "+10Y",
        dateFormat: 'dd-mm-yy',
        dayNamesMin: ['M', 'S', 'S', 'R', 'K', 'J', 'S']
});

$j("input[name*='tanggallahir_anak']").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: "-4380D",
        numberOfMonths: 1,
        maxDate: "-740D",
        dateFormat: 'dd-mm-yy',
        dayNamesMin: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
});

$j("input[name*='tanggallahir_bayi']").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: "-740D",
        numberOfMonths: 1,
        maxDate: "0D",
        dateFormat: 'dd-mm-yy',
        dayNamesMin: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
});

$j(".datepicker").hide();

$j("#infotransit").mouseover(function() {
        var ID = $j(this).attr('ids');
        $j("#boxinfotransit_"+ID).show();
});

$j("#infotransit").mouseout(function() {
        var ID = $j(this).attr('ids');
        $j("#boxinfotransit_"+ID).hide();
});


$j('#namalengkap_1').focus();


$j("#autoissued").click(function(){
   if($j('#autoissued').prop('checked')) {
   alert('Transaksi LANGSUNG ISSUED ini akan langsung memotong saldo anda! Pastikan saldo anda mencukupi!');
   $j("#bookingbutton").val("ISSUED NOW");
   } else {
   $j("#bookingbutton").val("BOOKING NOW");
   }
});




$j("#bookingbutton").click(function() {


	var flight_name         = $j('#flight_name').val();
	var flight_code         = $j('#flight_code').val();
	var flight_from         = $j('#flight_from').val();
        var flight_to           = $j('#flight_to').val();
        var flight_transit      = $j('#flight_transit').val();
        var flight_date         = $j('#flight_date').val();
        var flight_class        = $j('#flight_class').val();
        var flight_adult	= $j('#flight_adult').val();
        var flight_child        = $j('#flight_child').val();
        var flight_infant       = $j('#flight_infant').val();
        var flight_key 		= $j('#flight_key').val();
        var flight_price        = $j('#flight_price').val();
	var sessiontrans	= $j('#sessiontrans').val();

	if ($j("#autoissued").prop('checked')) {
	var autoissued = "1";
	}

        var nama                = '';
        var dob                 = '';
	   var baggagevolume       = '';
        var passportnumber      = '';
        var countryissuing      = '';
        var nationality         = '';
        var passportexpired     = '';

        var dewasaanakbayi      = +flight_adult + +flight_child + +flight_infant;

	for(i = 1; i <= dewasaanakbayi; i++) {
            var btitle          = $j("#title_"+i).val();
            var bnama		= $j("#namalengkap_"+i).val();
            var bdob            = $j("#tanggallahir_"+i).val();
    	    var baggage         = $j("#baggagevolume_"+i).val();;
            var passnumber      = $j("#passport_number_"+i).val();
            var nation          = $j("#country_issuing_"+i).val();
            var passport_expired= $j("#passport_expired_"+i).val();

	        var lnama           = $j("#namalengkap_"+i).val().length;

            if(lnama < 3) {
            alert("Invalid nama lengkap untuk penumpang "+i+" "+bnama+"! Min. 3 characters!");
	        $j('#namalengkap_'+i).focus();
            return false;
            } else {
                if(i==1){
                    nama                +=  btitle + ". " + bnama;
                    dob                 +=  bdob;
                    baggagevolume       +=  baggage;
                    passportnumber      +=  passnumber;
                    countryissuing      +=  nation;
                    nationality         +=  nation;
                    passportexpired     +=  passport_expired;
                }else{
                    nama                +=  ":"+ btitle + ". " + bnama;
                    dob                 +=  ":"+ bdob;
                    baggagevolume       +=  ":"+ baggage;
                    passportnumber      +=  ":"+ passnumber;
                    countryissuing      +=  ":"+ nation;
                    nationality         +=  ":"+ nation;
                    passportexpired     +=  ":"+ passport_expired;
                }
            
            }
        }


	var phone		= $j("#phone").val();
        var email               = $j("#email").val();
        var lphone              = $j("#phone").val().length;
        var lemail              = $j("#email").val().length;
        var hp = $j("#hpuser").val();
	var dataStringBooking   = 'hp='+hp+'&flight_name='+flight_name+'&flight_code='+flight_code+'&flight_date='+flight_date+'&flight_class='+flight_class+'&flight_from='+flight_from+'&flight_to='+flight_to+'&flight_transit='+flight_transit+'&flight_adult='+flight_adult+'&flight_child='+flight_child+'&flight_infant='+flight_infant+'&nama='+nama+'&dob='+dob+'&baggagevolume='+baggagevolume+'&passportnumber='+passportnumber+'&countryissuing='+countryissuing+'&nationality='+nationality+'&passportexpired='+passportexpired+'&sessiontrans='+sessiontrans+'&autoissued='+autoissued+'&flight_key='+flight_key+'&flight_price='+flight_price+'&phone='+phone+'&email='+email;


        if(lphone < 8) {
        alert("Please enter correct phone number");
	$j('#phone').focus();
        } else if(lemail < 7) {
        alert("Please enter correct email address");
        $j('#email').focus();
        } else {
        $j.ajax({
        url: "index.php/ticket/formflightresultbooking",
        type: "post",
        data: dataStringBooking,
        beforeSend: function(html) {
        $j("#bookingbutton").css({cursor:"default"});
        $j("#bookingbutton").val("Proses Booking...");
	   $j("#bookingbutton").prop('disabled', true);
            },
        success: function (html) {
            $j('#toastbooking-content').html(""+html+"");
	       if(html.match(/ERROR:/)) {
        	$j("#bookingbutton").css({cursor:"pointer"});
                $j("#bookingbutton").prop('disabled', false);
                $j("#bookingbutton").val("Booking Now");
        	$j('#toastbooking-close').show();
        	
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
	   var last_fare   = $j("#last_totalfare").val();
        var last_publish= $j("#last_publishfare").val();
        var last_tax    = $j("#last_tax").val();
        var last_bonus  = $j("#last_bonus").val();
        $j("#display_price").html(last_fare);
        $j("#display_publish").html(last_publish);
        $j("#display_tax").html(last_tax);
        $j("#display_bonus").html(last_bonus);
	}
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }

        });
        }


});

});
