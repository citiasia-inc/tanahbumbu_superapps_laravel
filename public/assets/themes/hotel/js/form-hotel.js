var cityCode;
var $j = jQuery.noConflict();
$j(function(){


var isi_from   = $j("#hotel_name").val();
if(isi_from == "") {
$j('#hotel_name').focus();
}


	$j("#hotel_name").focus(function() {
        this.value = "";
        });


	$j("#hotel_name").autocomplete({
	source: function(request, response) {
        var results = $j.ui.autocomplete.filter(cityCode, request.term);
        response(results.slice(0, 20));
        },
        minLength: 3,
	select: function( event, ui ) {
                    $j('#hotel_supplier').val(ui.item.label_supplier);
                    $j('#hotel_category').val(ui.item.label_category);
                    $j('#hotel_country').val(ui.item.label_country);
  	},
        close: function (event, ui) {
                //$j('#flight_to').focus();
              },
        }).data("ui-autocomplete")._renderItem = function (ul, item) {
                return $j('<li>')
                    .data("ui-autocomplete-item", item)
                    .append('<a> ' + item.label_display + '</a>')
                    .appendTo(ul);
        };





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
