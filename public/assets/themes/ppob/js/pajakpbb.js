var $j = jQuery.noConflict();
$j(function(){


//setInterval(function(){
//     $j('.box_laporan').load('merchant-last_transaction.php');
//}, 10000);
var nohp         = $j("#hpuser").val();
var idpsave    = 0;

$j('#nomorpelanggan').keyup(function() {
  var foo = $j(this).val().split("-").join(""); // remove hyphens
  if (foo.length > 0) {
    foo = foo.match(new RegExp('.{1,3}', 'g')).join("-");
  }
  $j(this).val(foo);
});



/*
$j('#konfirmasi_status').click(function() {
var invoice_status      = $j("#invoice_status").val();
var dataStringStatus = 'inv='+invoice_status;
if(invoice_status =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nomor Invoice', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#invoice_status").focus();
    }else{
$j(".box_result_cekstatus").hide();
$j('#loadingcekstatus').show();
$j("#konfirmasi_status").prop('disabled', true);
$j("#konfirmasi_status").css({cursor:"default"});
$j("#konfirmasi_status").val("Proses...");
$j.ajax ({
        type: "POST",
        url: "index.php/pbb/cekstatuspajakpbb",
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
}
});*/





$j('#konfirmasi_pajakpbb').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan").val();
var lnomorpelanggan     = $j("#nomorpelanggan").val().length;
var merchant            = $j("#produks").val();
var lmerchant           = $j("#produks").val().length;

var dataStringMerchant  = '&hp='+nohp+'&produks='+merchant+'&idpel='+nomorpelanggan+'&idsave='+idpsave;

if(lmerchant < 3) {
alert("Silakan pilih dulu Wilayah PBB dengan benar!");
} else if(lnomorpelanggan < 18) {
alert("Silakan isi kolom NOP dengan benar!");
$j('#nomorpelanggan').focus();
} else {
$j("#konfirmasi_pajakpbb").prop('disabled', true);
$j("#konfirmasi_pajakpbb").css({cursor:"default"});
$j("#konfirmasi_pajakpbb").val("Proses...");
$j(".box-merchant").hide();
$j("#frm").hide();
$j(".box_result_merchant").show();
$j('#loadingmerchant').show();
$j.ajax ({
        type: "POST",
        url: "index.php/pbb/inquirypajakpbb",
        data: dataStringMerchant,
        cache: false,
        success: function(html) {
        $j(".box_result_merchant").html(html);
        $j('#loadingmerchant').hide();
        }
        });
}

});

$j('#konfirmasi_pajakesamsat').click(function() {

var nomor_rangka    = $j("#nomor_rangka").val();
var lnomor_rangka   = $j("#nomor_rangka").val().length;
var produks        = $j("#produks").val();
var nomor_ktp       = $j("#nomor_ktp").val();
var lnomor_ktp      = $j("#nomor_ktp").val().length;

var dataStringMerchant  = '&hp='+nohp+'produks='+produks+'&nomor_rangka='+nomor_rangka+'&nomor_ktp='+nomor_ktp+'&idsave='+idpsave;

if(lnomor_rangka < 8) {
alert("Silakan isi kolom dengan benar!");
$j('#nomor_rangka').focus();
} else if(lnomor_ktp < 10) {
alert("Silakan isi kolom dengan benar!");
$j('#nomor_ktp').focus();
} else {
$j("#konfirmasi_pajakesamsat").prop('disabled', true);
$j("#konfirmasi_pajakesamsat").css({cursor:"default"});
$j("#konfirmasi_pajakesamsat").val("Proses...");
$j(".box-merchant").hide();
$j("#frm").hide();
$j(".box_result_merchant").show();
$j('#loadingmerchant').show();
$j.ajax ({
        type: "POST",
        url: "index.php/pbb/inquiryesamsat",
        data: dataStringMerchant,
        cache: false,
        success: function(html) {
        $j(".box_result_merchant").html(html);
        $j('#loadingmerchant').hide();
        }
        });
}

});
});


/*var $j = jQuery.noConflict();
$j(function(){


//setInterval(function(){
//     $j('.box_laporan').load('merchant-last_transaction.php');
//}, 10000);
var nohp         = $j("#hpuser").val();
var idpsave    = 0;
$j('#moreidp').click(function(){
    if($(this).prop("checked") == true){
        idpsave    = 1;
    }else if($(this).prop("checked") == false){
        idpsave    = 0;
    }
});



$j('#konfirmasi_status').click(function() {
var invoice_status      = $j("#invoice_status").val();
var dataStringStatus = 'inv='+invoice_status;
if(invoice_status =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nomor Invoice', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#invoice_status").focus();
    }else{
$j(".box_result_cekstatus").hide();
$j('#loadingcekstatus').show();
$j("#konfirmasi_status").prop('disabled', true);
$j("#konfirmasi_status").css({cursor:"default"});
$j("#konfirmasi_status").val("Proses...");
$j.ajax ({
        type: "POST",
        url: "index.php/pbb/cekstatuspajakpbb",
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
}
});


$j('#konfirmasi_pajakpbb').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan").val();
var lnomorpelanggan     = $j("#nomorpelanggan").val().length;
var produks            = $j("#produks").val();

var dataStringMerchant  = '&hp='+nohp+'&produks='+produks+'&idpel='+nomorpelanggan+'&idsave='+idpsave;

if(lnomorpelanggan < 6 ) {
$.alert('Anda belum mengisi nomor pelanggan', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
    $j('#nomorpelanggan').focus();
}else {
        $j("#konfirmasi_pajakpbb").prop('disabled', true);
        $j("#konfirmasi_pajakpbb").css({cursor:"default"});
        $j("#konfirmasi_pajakpbb").val("Proses...");
        $j(".box-merchant").hide();
        $j("#frm").hide();
        $j(".box_result_merchant").show();
        $j('#loadingmerchant').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/pbb/inquirypajakpbb",
                data: dataStringMerchant,
                cache: false,
                success: function(html) {
                $j(".box_result_merchant").html(html);
                $j('#loadingmerchant').hide();
                }
                });
        }
});
$j('#konfirmasi_esamsat').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan").val();
var lnomorpelanggan     = $j("#nomorpelanggan").val().length;
var produks            = $j("#produks").val();

var dataStringMerchant  = '&hp='+nohp+'&produks='+produks+'&idpel='+nomorpelanggan+'&idsave='+idpsave;

if(lnomorpelanggan < 6 ) {
$.alert('Anda belum mengisi nomor pelanggan', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
    $j('#nomorpelanggan').focus();
}else {
        $j("#konfirmasi_pajakpbb").prop('disabled', true);
        $j("#konfirmasi_pajakpbb").css({cursor:"default"});
        $j("#konfirmasi_pajakpbb").val("Proses...");
        $j(".box-merchant").hide();
        $j("#frm").hide();
        $j(".box_result_merchant").show();
        $j('#loadingmerchant').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/pbb/inquirypajakpbb",
                data: dataStringMerchant,
                cache: false,
                success: function(html) {
                $j(".box_result_merchant").html(html);
                $j('#loadingmerchant').hide();
                }
                });
        }
});

});*/
