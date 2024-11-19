var cityCode;
var $j = jQuery.noConflict();
$j(function(){

$j(".switch").click(function(){

   /*if($j('.switch').prop('checked')) {
   $j("#box-tanggalpulang").show();
   $j("#goback").val("1");
   } else {
   $j("#goback").val("0");
   $j("#box-tanggalpulang").hide();
   }*/

});


var isi_from   = $j("#flight_from").val();
if(isi_from == "") {
$j('#flight_from').focus();
}

$j(".tukar").click(function() {
         var isi_to     = $j("#flight_to").val();
         var isi_from   = $j("#flight_from").val();
         $j("#flight_from").val( isi_to );
         $j("#flight_to").val( isi_from );
});


$j("#dewasa").change(function() {
var dewasa	= parseInt($j('#dewasa').val());
var anak        = parseInt($j('#anak').val());
var bayi        = parseInt($j('#bayi').val());

var totalpax	= parseInt(dewasa+anak);
if(totalpax > 7) {
alert("Maksimal total calon penumpang adalah 7 orang!");
$j('#dewasa').val("1");
}
});

$j("#anak").change(function() {
var dewasa      = parseInt($j('#dewasa').val());
var anak        = parseInt($j('#anak').val());
var bayi        = parseInt($j('#bayi').val());

var totalpax    = parseInt(dewasa+anak);
if(totalpax > 7) {
alert("Maksimal total calon penumpang adalah 7 orang!");
$j('#anak').val("0");
}
});


$j("#bayi").change(function() {
var dewasa      = parseInt($j('#dewasa').val());
var anak        = parseInt($j('#anak').val());
var bayi        = parseInt($j('#bayi').val());

var totalpax    = parseInt(dewasa+anak);
if(totalpax > 7) {
alert("Maksimal total calon penumpang adalah 7 orang!");
$j('#bayi').val("0");
}
});


	$j("#flight_from").focus(function() {
        this.value = "";
        });

        $j("#flight_to").focus(function() {
        this.value = "";
        });


	$j("#flight_from").autocomplete({
        source: cityCode,
        minLength: 2,
        change: function(event, ui) {
                var source	= $j(this).val();
                var found	= $j('.ui-autocomplete li').search(source);
                console.debug('found:' + found);
                if(found < 0) {
                    $j(this).val('');
                }
            },
	close: function (event, ui) {
                //$j('#flight_to').focus();
              }
        });

	$j("#flight_to").autocomplete({
        source: cityCode,
        minLength: 2,
        change: function(event, ui) {
                var source      = $j(this).val();
                var found       = $j('.ui-autocomplete li').search(source);
                console.debug('found:' + found);
                if(found < 0) {
                    $j(this).val('');
                }
            },
        });



$j('#konfirmasi').click(function() {

var from        = $j('#flight_from').val();
var to          = $j('#flight_to').val();
var date        = $j('#flight_datedeparture').val();
var adult       = parseInt($j('#dewasa').val());
var child       = parseInt($j('#anak').val());
var infant      = parseInt($j('#bayi').val());

var totalpax    = parseInt(adult+child+infant);
var totaladult	= parseInt(adult+child);

var totalpax    = parseInt(adult+child+infant);
if(from == "") {
    alert("Nama Kota Asal tidak boleh kosong!");
    $j('#flight_from').focus();
} else if(to == "") {
    alert("Nama Kota Tujuan tidak boleh kosong!");
    $j('#flight_to').focus();
} else if(date == "") {
    alert("Tanggal tidak boleh kosong!");
    $j('#flight_datedeparture').focus();
} else if(totalpax < 1) {
alert("Minimal total calon penumpang adalah 1 orang!");
} else if(totaladult > 7) {
alert("Maksimal total calon penumpang adalah 7 orang!");
} else {
$j("#konfirmasi").prop('disabled', true);
$j("#konfirmasi").css({cursor:"default"});
$j("#konfirmasi").val("Proses...");
$j("#frm").submit();
}

});

});
