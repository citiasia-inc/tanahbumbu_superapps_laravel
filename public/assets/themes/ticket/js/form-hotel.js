var cityCode;
var $j = jQuery.noConflict();
$j(function(){

$j("#switch").click(function(){
  $j('#toast').html("<b>Maaf</b> masih proses pengembangan <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
  
});


var isi_from   = $j("#hotel_city").val();
if(isi_from == "") {
$j('#hotel_city').focus();
}


$j("#malam").change(function() {
var malam	= parseInt($j('#malam').val());
var room  = parseInt($j('#room').val());

var totalpax	= parseInt(malam);
if(totalpax > 9) {
    $j('#toast').html("Maksimal total 9 orang! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
$j('#malam').val("1");
}
});

$j("#room").change(function() {
var malam      = parseInt($j('#malam').val());
var room        = parseInt($j('#room').val());

var totalpax    = parseInt(malam);
if(totalpax > 9) {
    $j('#toast').html("Maksimal total 9 orang! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
$j('#room').val("1");
}
});

	$j("#hotel_city").focus(function() {
        this.value = "";
        });


	$j("#hotel_city").autocomplete({
        source: cityCode,
        minLength: 2,
        change: function(event, ui) {
                var source	= $j(this).val();
                var found	= $j('.ui-autocomplete li').text().search(source);
                console.debug('found:' + found);
                if(found < 0) {
                    $j(this).val('');
                }
            },
	close: function (event, ui) {
                //$j('#train_to').focus();
              }
        });

$j('#konfirmasi').click(function() {

var from        = $j('#hotel_city').val();
var date        = $j('#train_datedeparture').val();
var malam       = parseInt($j('#malam').val());
var room       = parseInt($j('#room').val());

var totalpax    = parseInt(malam);
var totalmalam	= parseInt(room);

if(from == "") {
    
    //alert("Nama Stasiun Asal tidak boleh kosong!");
    $j('#toast').html("Nama Kota atau Hotel tidak boleh kosong! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
$j('#hotel_city').focus();
} else if(date == "") {
    //alert("Nama Stasiun Tujuan tidak boleh kosong!");
    $j('#toast').html("Tanggal tidak boleh kosong! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
    $j('#train_datedeparture').focus();
} else {
$j("#konfirmasi").prop('disabled', true);
$j("#konfirmasi").css({cursor:"default"});
$j("#konfirmasi").val("Proses...");
$j("#frm").submit();
}

});

});
