var $j = jQuery.noConflict();

$j(function(){
/*
$j('.box_last_transaction').load('pulsa-last_transaction.php');

setInterval(function(){
     $j('.box_last_transaction').load('pulsa-last_transaction.php');
}, 15000);
*/
var idpsave    = 0;
var idpsaves    = 0;
$j('#moreidp').click(function(){
    if($(this).prop("checked") == true){
        idpsave    = 1;
    }else if($(this).prop("checked") == false){
        idpsave    = 0;
    }
});
var idpsaves    = 0;
$j('#moreidps').click(function(){
    if($(this).prop("checked") == true){
        idpsaves    = 1;
    }else if($(this).prop("checked") == false){
        idpsaves   = 0;
    }
});


$j('#konfirmasi').hide();
$j('#konfirmasi_internet').hide();

var disable_reload	= $j("#disable_reload").val();
if(disable_reload == "1") {
$j("#cover-box_internet").hide();
}

var tipe_transaksi	= "PULSA";
var tipe_transaksi2     = "PAKET DATA";

var nomortujuan         = $j("#copy_nomortujuan").val();
var nomortujuan_internet= $j("#copy_nomortujuan_internet").val();
var nohp         = $j("#hpuser").val();

var dataString          = 'nomortujuan='+encodeURIComponent(nomortujuan)+'&tipe='+tipe_transaksi+'&hp='+nohp;
var dataString_internet = 'nomortujuan='+encodeURIComponent(nomortujuan_internet)+'&tipe='+tipe_transaksi2+'&hp='+nohp;

var empatdigit		= nomortujuan.slice(0,7);
$j("#empatdigit").html(empatdigit);

var empatdigit_internet	= nomortujuan_internet.slice(0,7);
$j("#empatdigit_internet").html(empatdigit_internet);

$j.ajax ({
        type: "POST",
        url: "/checkoperator",
        data: dataString,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#image_operator").html("<img src='assest/themes/ppob/img/spinner-twitter.gif' style='width:20px;'>");
            },
        success: function(html) {
	var parse               = html.split('|');
    var desc_operator       = parse[0];
	var logo_operator	= parse[1];
        $j("#show_operator").html(desc_operator);
        $j("#image_operator").html(logo_operator);
        }
        });

$j.ajax ({
        type: "POST",
        url: "index.php/ppob/list_hargaoperator_box_json",
        data: dataString,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#list_price").hide();
        $j("#loadingbox").show();
        },
        success: function(html) {
        $j("#loadingbox").hide();
        $j("#list_price").show();
        $j("#list_price").html(html);
        }
});

$j.ajax ({
        type: "POST",
        url: "index.php/ppob/check_operator_sql",
        data: dataString_internet,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#image_operator").html("<img src='assets/themes/ppob/img/spinner-twitter.gif' style='width:15px;'>");
            },
        success: function(html) {
        var parse               = html.split('|');
        var desc_operator       = parse[0];
        var logo_operator       = parse[1];
        $j("#show_operator_internet").html(desc_operator);
        $j("#image_operator_internet").html(logo_operator);
        }
        });

$j.ajax ({
        type: "POST",
        url: "index.php/ppob/list_hargaoperator_internet_box_json",
        data: dataString_internet,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#list_price_internet").hide();
        $j("#loadingbox_internet").show();
        $j("#list_price_internet").show();
            },
        success: function(html) {
        $j("#loadingbox_internet").hide();
        $j("#list_price_internet").show();
        $j("#list_price_internet").html(html);
        }
        });



// START SHOW OPERATOR
$j('#nomortujuan').on('input', function() {
var nomortujuan         = $j("#nomortujuan").val();
var lnomortujuan        = $j("#nomortujuan").val().length;
if(lnomortujuan < 4) {
var nomortujuan         = $j("#session_placeholder").val();
$j("#box_mynumber").css({cursor:"pointer"});
$j("#box_mynumber").css({color:"#445870"});
$j('#konfirmasi').hide();
}

var empatdigit          = $j("#copy_nomortujuan").val().slice(0,7);
var last_empatdigit	= $j("#nomortujuan").val().slice(0,7);

if(lnomortujuan > 4) {
var clone_nomortujuan   = $j("#clone_nomortujuan").html("Nomor Tujuan: "+nomortujuan);
$j("#clone_nomortujuan").show();
}

if(empatdigit != last_empatdigit) {
$j('#konfirmasi').hide();
var copy_nomortujuan	= $j("#copy_nomortujuan").val(nomortujuan);
$j("#empatdigit").html(last_empatdigit);
var nohp         = $j("#hpuser").val();
var dataString          = 'nomortujuan='+encodeURIComponent(nomortujuan)+'&tipe='+tipe_transaksi+'&hp='+nohp;
$j.ajax ({
        type: "POST",
        url: "index.php/ppob/list_hargaoperator_box_json",
        data: dataString,
        cache: false,
	timeout: 900000,
	beforeSend: function(html) {
        $j("#list_price").hide();
        $j("#loadingbox").show();
            },
        success: function(html) {
        $j("#loadingbox").hide();
        $j("#list_price").show();
        $j("#list_price").html(html);
        }
        });

$j.ajax ({
        type: "POST",
        url: "index.php/ppob/check_operator_sql",
        data: dataString,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#image_operator").html("<img src='./assets/themes/ppob/img/spinner-twitter.gif' style='width:15px;'>");
        $j("#show_operator").html("<img src='./assets/themes/ppob/img/spinner-twitter.gif' style='width:15px;'>");
            },
        success: function(html) {
	var parse               = html.split('|');
        var desc_operator       = parse[0];
        var logo_operator       = parse[1];
        $j("#show_operator").html(desc_operator);
        $j("#image_operator").html(logo_operator);
        }
        });
}

});
// END SHOW OPERATOR
// START SHOW OPERATOR
$j('#nomortujuan_internet').on('input', function() {
var nomortujuan_internet	= $j("#nomortujuan_internet").val();
var lnomortujuan_internet	= $j("#nomortujuan_internet").val().length;
if(lnomortujuan_internet < 4) {
var nomortujuan_internet    = $j("#session_placeholder_internet").val();
$j("#box_mynumber_internet").css({cursor:"pointer"});
$j("#box_mynumber_internet").css({color:"#445870"});
$j('#konfirmasi_internet').hide();
}

var empatdigit_internet		= $j("#copy_nomortujuan_internet").val().slice(0,7);
var last_empatdigit_internet	= $j("#nomortujuan_internet").val().slice(0,7);

if(lnomortujuan_internet > 4) {
var clone_nomortujuan_internet 	= $j("#clone_nomortujuan_internet").html("Nomor Tujuan: "+nomortujuan_internet);
$j("#clone_nomortujuan_internet").show();
}

if(empatdigit_internet != last_empatdigit_internet) {
$j('#konfirmasi_internet').hide();
var copy_nomortujuan_internet	= $j("#copy_nomortujuan_internet").val(nomortujuan_internet);
$j("#empatdigit_internet").html(last_empatdigit_internet);
var dataString_internet		= 'nomortujuan='+encodeURIComponent(nomortujuan_internet)+'&tipe='+tipe_transaksi2;
$j.ajax ({
        type: "POST",
        url: "index.php/ppob/list_hargaoperator_internet_box_json",
        data: dataString_internet,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#list_price_internet").hide();
        $j("#loadingbox_internet").show();
            },
        success: function(html) {
        $j("#loadingbox_internet").hide();
        $j("#list_price_internet").show();
        $j("#list_price_internet").html(html);
        }
        });

$j.ajax ({
        type: "POST",
        url: "index.php/ppob/check_operator_sql",
        data: dataString_internet,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#image_operator_internet").html("<img src='./assets/themes/ppob/img/spinner-twitter.gif' style='width:15px;'>");
        $j("#show_operator_internet").html("<img src='./assets/themes/ppob/img/spinner-twitter.gif' style='width:15px;'>");
            },
        success: function(html) {
	var parse               = html.split('|');
        var desc_operator       = parse[0];
        var logo_operator       = parse[1];
        $j("#show_operator_internet").html(desc_operator);
        $j("#image_operator_internet").html(logo_operator);
        }
        });
}

});
// END SHOW OPERATOR



$j('#box_mynumber').click(function() {

$j('#konfirmasi').hide();

var nomortujuan         = $j("#session_placeholder").val();
$j("#nomortujuan").val(nomortujuan);
$j(this).css({cursor:"default"});
$j(this).css({color:"#CCC"});

var clone_nomortujuan   = $j("#clone_nomortujuan").html("Nomor Tujuan: "+nomortujuan);
$j("#clone_nomortujuan").show();

var empatdigit          = $j("#copy_nomortujuan").val().slice(0,7);
var last_empatdigit     = $j("#nomortujuan").val().slice(0,7);

if(empatdigit != last_empatdigit) {
$j("#copy_nomortujuan").val(nomortujuan);
$j("#empatdigit").html(last_empatdigit);
$j.ajax ({
        type: "POST",
        url: "index.php/ppob/check_operator_sql",
        data: dataString,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#image_operator").html("<img src='./assets/themes/ppob/img/spinner-twitter.gif' style='width:15px;'>");
        $j("#show_operator").html("<img src='./assets/themes/ppob/img/spinner-twitter.gif' style='width:15px;'>");
            },
        success: function(html) {
	var parse               = html.split('|');
        var desc_operator       = parse[0];
        var logo_operator       = parse[1];
        $j("#show_operator").html(desc_operator);
        $j("#image_operator").html(logo_operator);
        }
        });

$j.ajax ({
        type: "POST",
        url: "index.php/ppob/list_hargaoperator_box_json",
        data: dataString,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#list_price").hide();
        $j("#loadingbox").show();
            },
        success: function(html) {
        $j("#loadingbox").hide();
        $j("#list_price").show();
        $j("#list_price").html(html);
        }
        });
}

});




$j('#box_mynumber_internet').click(function() {

$j('#konfirmasi_internet').hide();

var nomortujuan_internet	= $j("#session_placeholder_internet").val();
$j("#nomortujuan_internet").val(nomortujuan_internet);
$j(this).css({cursor:"default"});
$j(this).css({color:"#CCC"});

var clone_nomortujun_internet	= $j("#clone_nomortujuan_internet").html("Nomor Tujuan: "+nomortujuan_internet);
$j("#clone_nomortujuan_internet").show();

var empatdigit_internet		= $j("#copy_nomortujuan_internet").val().slice(0,7);
var last_empatdigit_internet	= $j("#nomortujuan_internet").val().slice(0,7);

if(empatdigit_internet != last_empatdigit_internet) {
$j("#copy_nomortujuan_internet").val(nomortujuan_internet);
$j("#empatdigit_internet").html(last_empatdigit_internet);
$j.ajax ({
        type: "POST",
        url: "index.php/ppob/check_operator_sql",
        data: dataString_internet,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#image_operator_internet").html("<img src='./assets/themes/ppob/img/spinner-twitter.gif' style='width:15px;'>");
        $j("#show_operator_internet").html("<img src='./assets/themes/ppob/img/spinner-twitter.gif' style='width:15px;'>");
            },
        success: function(html) {
        var parse               = html.split('|');
        var desc_operator       = parse[0];
        var logo_operator       = parse[1];
        $j("#show_operator_internet").html(desc_operator);
        $j("#image_operator_internet").html(logo_operator);
        }
        });

$j.ajax ({
        type: "POST",
        url: "index.php/ppob/list_hargaoperator_internet_box_json",
        data: dataString_internet,
        cache: false,
	timeout: 900000,
        beforeSend: function(html) {
        $j("#list_price_internet").hide();
        $j("#loadingbox_internet").show();
            },
        success: function(html) {
        $j("#loadingbox_internet").hide();
        $j("#list_price_internet").show();
        $j("#list_price_internet").html(html);
        }
        });
}

});





$j('#konfirmasi').click(function() {

if ($j("#onemore").prop('checked')) {
    var onemore = "yes";
}

var last_nomortujuan    = $j("#nomortujuan").val();
var lnomortujuan        = $j("#nomortujuan").val().length;
if(lnomortujuan < 4) {
var last_nomortujuan	= $j("#session_placeholder").val();
}
var last_nominal        = $j("#last_nominal").val();
var last_debet          = $j("#last_debet").val();
var last_operator_code  = $j("#last_operator_code").val();
var password_pulsa      = $j("#password_pulsa").val();
var lpassword_pulsa	= $j("#password_pulsa").val().length;
var dataString          = 'nomortujuan='+last_nomortujuan+'&last_nominal='+last_nominal+'&last_debet='+last_debet+'&last_operator_code='+last_operator_code+'&idpassword='+encodeURIComponent(password_pulsa)+'&onemore='+onemore+'&tipe='+tipe_transaksi+'&hp='+nohp+'&idsave='+idpsave;

if(lpassword_pulsa < 3) {
    //alert("Silakan masukkan password anda dulu!");
    $.alert('Silakan masukkan password anda dulu!', {
                title: 'Confirm',
                //closeTime: 5000,
                //autoClose: false,
                //position: ['left', [-0.42, 0]],
                //withTime: false,
                type: 'danger'
                //isOnly: true
            });
    $j("#password_pulsa").focus();
} else {
    //var r = confirm("Transaksi Isi Ulang Pulsa Rp. "+last_nominal+" ke "+last_nomortujuan+" tidak dapat dibatalkan! Pastikan nomor HP "+last_nomortujuan+" sudah benar, Klik OK bila anda setuju untuk lanjutkan.");
    
    $.confirm({
        title: 'Confirm!',
        content: "Transaksi Isi Ulang Pulsa Rp. "+last_nominal+" ke "+last_nomortujuan+" tidak dapat dibatalkan! Pastikan nomor HP "+last_nomortujuan+" sudah benar, Klik OK bila anda setuju untuk lanjutkan.",
        buttons: {
            cancel: function () {
                //$.alert('Canceled!');
            },
            somethingElse: {
                text: 'OK',
                btnClass: 'btn-blue',
                keys: ['enter', 'shift'],
                action: function(){
                    //$.alert('Something else?');
                    $j("html, body").animate({ scrollTop: 0 }, 0);
                    $j("#konfirmasi").prop('disabled', true);
                    $j("#konfirmasi").css({cursor:"default"});
                    $j("#konfirmasi").val("Proses...");
                    $j("#cover-box").hide();
                    $j(".box_final_result").show();
                    $j('#loadingisipulsa').show();
                    $j.ajax ({
                            type: "POST",
                            url: "index.php/ppob/isipulsa_result",
                            data: dataString,
                            cache: false,
                            success: function(html) {
                            $j(".box_final_result").html(html);
                            }
                            });
                }
            }
        }
    });
}

});
$j('#konfirmasi_internet').click(function() {

var ilast_nomortujuan    = $j("#nomortujuan_internet").val();
var ilnomortujuan        = $j("#nomortujuan_internet").val().length;
if(ilnomortujuan < 4) {
var ilast_nomortujuan    = $j("#session_placeholder_internet").val();
}
var ilast_nominal        = $j("#ilast_nominal").val();
var ilast_debet          = $j("#ilast_debet").val();
var ilast_operator_code  = $j("#ilast_operator_code").val();
var lpassword_internet	 = $j("#password_internet").val().length;
var password_internet    = $j("#password_internet").val();
var idataString          = 'nomortujuan='+ilast_nomortujuan+'&last_nominal='+ilast_nominal+'&last_debet='+ilast_debet+'&last_operator_code='+ilast_operator_code+'&idpassword='+encodeURIComponent(password_internet)+'&tipe='+tipe_transaksi2+'&hp='+nohp+'&idsave=';
if(lpassword_internet < 5) {
//alert("Silakan masukkan password anda dulu!");
$.alert('Silakan masukkan password anda dulu!', {
                title: 'Confirm',
                //closeTime: 5000,
                //autoClose: false,
                //position: ['left', [-0.42, 0]],
                //withTime: false,
                type: 'danger'
                //isOnly: true
            });
$j("#password_internet").focus();
} else {
    $.confirm({
        title: 'Confirm!',
        content: "Transaksi Isi Paket Internet Rp. "+ilast_nominal+" ("+ilast_operator_code+") ke "+ilast_nomortujuan+" tidak dapat dibatalkan! Pastikan nomor HP "+ilast_nomortujuan+" sudah benar, Klik OK bila anda setuju untuk lanjutkan.",
        buttons: {
            cancel: function () {
                //$.alert('Canceled!');
            },
            somethingElse: {
                text: 'OK',
                btnClass: 'btn-blue',
                keys: ['enter', 'shift'],
                action: function(){
                    //$.alert('Something else?');
                    $j("html, body").animate({ scrollTop: 0 }, 0);
                    $j("#konfirmasi_internet").prop('disabled', true);
                    $j("#konfirmasi_internet").css({cursor:"default"});
                    $j("#konfirmasi_internet").val("Proses...");
                    $j("#cover-box_internet").hide();
                    $j(".box_final_result_internet").show();
                    $j('#loadingisipulsa_internet').show();
                    $j.ajax ({
                            type: "POST",
                            url: "index.php/ppob/isipulsa_result",
                            data: idataString,
                            cache: false,
                            success: function(html) {
                            $j(".box_final_result_internet").html(html);
                            }
                            });
                }
            }
        }
    });
}

});

$j('#konfirmasi_status').click(function() {

var invoice_status      = $j("#invoice_status").val();
var nomortujuan_status	= $j("#nomortujuan_status").val();
var dataStringStatus = 'invoice='+invoice_status+'&nomortujuan='+nomortujuan_status;
$j(".box_result_cekstatus").hide();
$j('#loadingcekstatus').show();
$j("#konfirmasi_status").prop('disabled', true);
$j("#konfirmasi_status").css({cursor:"default"});
$j("#konfirmasi_status").val("Proses...");
$j.ajax ({
        type: "POST",
        url: "index.php/ppob/pulsa_cekstatus",
        data: dataStringStatus,
        cache: false,
        success: function(html) {
	$j('#loadingcekstatus').hide();
	$j(".box_result_cekstatus").show();
        $j(".box_result_cekstatus").html(html);
	$j("#konfirmasi_status").prop('disabled', false);
	$j("#konfirmasi_status").css({cursor:"pointer"});
	$j("#konfirmasi_status").val("CEK STATUS");
        }
        });
});





});




