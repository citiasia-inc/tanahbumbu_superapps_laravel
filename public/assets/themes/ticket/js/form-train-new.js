var cityCode;
var $j = jQuery.noConflict();
$j(function(){

$j(".switch").click(function(){

   if($j('.switch').prop('checked')) {
   $j("#box-tanggalpulang").show();
   $j("#goback").val("1");
   } else {
   $j("#goback").val("0");
   $j("#box-tanggalpulang").hide();
   }

});


var isi_from   = $j("#train_from").val();
if(isi_from == "") {
$j('#train_from').focus();
}

$j(".tukar").click(function() {
         var isi_to     = $j("#train_to").val();
         var isi_from   = $j("#train_from").val();
         $j("#train_from").val( isi_to );
         $j("#train_to").val( isi_from );
});


$j("#dewasa").change(function() {
var dewasa  = parseInt($j('#dewasa').val());
var anak        = parseInt($j('#anak').val());
var bayi        = parseInt($j('#bayi').val());

var totalpax  = parseInt(dewasa+anak);
if(totalpax > 7) {
//alert("Maksimal total calon penumpang adalah 7 orang!");
$j('#toast').html("Maksimal total calon penumpang adalah 7 orang! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
$j('#dewasa').val("1");
}
});

$j("#anak").change(function() {
var dewasa      = parseInt($j('#dewasa').val());
var anak        = parseInt($j('#anak').val());
var bayi        = parseInt($j('#bayi').val());

var totalpax    = parseInt(dewasa+anak);
if(totalpax > 7) {
//alert("Maksimal total calon penumpang adalah 7 orang!");
  $j('#toast').html("Maksimal total calon penumpang adalah 7 orang! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
$j('#anak').val("0");
}
});


$j("#bayi").change(function() {
var dewasa      = parseInt($j('#dewasa').val());
var anak        = parseInt($j('#anak').val());
var bayi        = parseInt($j('#bayi').val());

var totalpax    = parseInt(dewasa+anak);
if(totalpax > 7) {
//alert("Maksimal total calon penumpang adalah 7 orang!");
$j('#toast').html("Maksimal total calon penumpang adalah 7 orang! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
$j('#bayi').val("0");
}
});


  $j("#train_from").focus(function() {
        this.value = "";
        });

        $j("#train_to").focus(function() {
        this.value = "";
        });


  $j("#train_from").autocomplete({
        source: cityCode,
        minLength: 3,
        change: function(event, ui) {
                var source  = $j(this).val();
                var found = $j('.ui-autocomplete li').text().search(source);
                console.debug('found:' + found);
                if(found < 0) {
                    $j(this).val('');
                }
            },
  close: function (event, ui) {
                //$j('#train_to').focus();
              }
        });

  $j("#train_to").autocomplete({
        source: cityCode,
        minLength: 3,
        change: function(event, ui) {
                var source      = $j(this).val();
                var found       = $j('.ui-autocomplete li').text().search(source);
                console.debug('found:' + found);
                if(found < 0) {
                    $j(this).val('');
                }
            },
        });



$j('#konfirmasi').click(function() {

var from        = $j('#train_from').val();
var to          = $j('#train_to').val();
var date        = $j('#train_datedeparture').val();
var adult       = parseInt($j('#dewasa').val());
var child       = parseInt($j('#anak').val());
var infant      = parseInt($j('#bayi').val());

var totalpax    = parseInt(adult+child+infant);
var totaladult  = parseInt(adult+child);

var totalpax    = parseInt(adult+child+infant);

if(from == "") {
//alert("Nama Stasiun Asal tidak boleh kosong!");
  $j('#toast').html("Nama Stasiun Asal tidak boleh kosong! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
$j('#train_from').focus();
} else if(to == "") {
    //alert("Nama Stasiun Tujuan tidak boleh kosong!");
    $j('#toast').html("Nama Stasiun Tujuan tidak boleh kosong! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
    $j('#train_to').focus();
}else if(date == "") {
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
} else if(totalpax < 1) {
    //alert("Minimal total calon penumpang adalah 1 orang!");
    $j('#toast').html("Minimal total calon penumpang adalah 1 orang! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
} else if(totaladult > 7) {
    //alert("Maksimal total calon penumpang adalah 7 orang!");
    $j('#toast').html("Maksimal total calon penumpang adalah 7 orang! <span id=\"toast-close\" style='background-color:#ddd;padding:5px;cursor:pointer;'> CLOSE </span>");
    $j("#toast").css("background-color", "#ff1e33");
    $j('#toast').addClass('show').stop().delay(7500).queue(function(){
      $j(this).removeClass('show');
    });
    $j("#toast-close").click(function() {
      $j('#toast').removeClass('show');
    });
} else {
$j("#konfirmasi").prop('disabled', true);
$j("#konfirmasi").css({cursor:"default"});
$j("#konfirmasi").val("Proses...");
$j("#frm").submit();
}

});

});
