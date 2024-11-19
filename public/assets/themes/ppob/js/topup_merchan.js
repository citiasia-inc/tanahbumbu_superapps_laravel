var $j = jQuery.noConflict();
$j(function(){


//setInterval(function(){
//     $j('.box_laporan').load('merchant-last_transaction.php');
//}, 10000);
var idpsave    = 0;
$j('#moreidp').click(function(){
    if($(this).prop("checked") == true){
        idpsave    = 1;
    }else if($(this).prop("checked") == false){
        idpsave    = 0;
    }
});

$j('#nomorpelanggan_emoney').keyup(function() {
  var foo = $j(this).val().split("-").join(""); // remove hyphens
  if (foo.length > 0) {
    foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
  }
  $j(this).val(foo);
});
var nohp         = $j("#hpuser").val();
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
        url: "index.php/ppob/cekstatusgrabpay",
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


$j("#nominaltokopedia").change(function() {
$j('#nomorpelanggan').focus();
});

$j("#nominalshopee").change(function() {
$j('#nomorpelanggan').focus();
});


var id          = $j("#merchant").val();
var nopel       = $j("#nopel").val();
var direct_main = $j("#direct_main").val();

if(direct_main == "grabpay" || direct_main == "tcash" || direct_main == "ovo" || direct_main == "gopaydriver" || direct_main == "gopay") {
$j("#kolomnominal").show();
$j('#text-span-nominal').html("Nominal TOPUP");
$j("#kolomtokopedia").hide();
$j("#kolomshopee").hide();
$j('#text-span').html("Nomor HP di "+id);
$j("#kolomnomorpelanggan").show();
$j('#nominal').focus();
$j('#nomorpelanggan').attr("placeholder", nopel);
}

if(direct_main == "homecredit") {
$j("#kolomnominal").show();
$j('#text-span-nominal').html("Nominal Tagihan");
$j("#kolomtokopedia").hide();
$j("#kolomshopee").hide();
$j('#text-span').html("10 Digit Nomor Kontrak "+id);
$j("#kolomnomorpelanggan").show();
$j('#nominal').focus();
$j('#nomorpelanggan').attr("placeholder", "0000000000");
}



$j('#konfirmasi').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan").val();
var lnomorpelanggan     = $j("#nomorpelanggan").val().length;
var merchant            = $j("#merchant").val();
var nominal             = $j("#nominal").val();

var dataStringMerchant  = '&hp='+nohp+'&merchant='+merchant+'&nomorpelanggan='+nomorpelanggan+'&nominal='+nominal;

if(lnomorpelanggan < 6) {
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
}else if(nominal =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nominal', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nominal").focus();
    }else if(nominal < 50000) {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf nilai Nominal minimal 50.000', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nominal").focus();
    } else {
$j("#konfirmasi").prop('disabled', true);
$j("#konfirmasi").css({cursor:"default"});
$j("#konfirmasi").val("Proses...");
$j(".box-merchant").hide();
$j(".box_result_merchant").show();
$j('#loadingmerchant').show();
$j.ajax ({
        type: "POST",
        url: "index.php/ppob/topup_merchant_result_ajax",
        data: dataStringMerchant,
        cache: false,
        success: function(html) {
        $j(".box_result_merchant").html(html);
        }
        });
}

});





$j('#konfirmasi_emoney').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan_emoney").val();
var lnomorpelanggan     = $j("#nomorpelanggan_emoney").val().length;
var merchant            = $j("#merchant_emoney").val();
var nominal             = $j("#nominal_emoney").val();

var dataStringMerchant  = '&hp='+nohp+'&merchant='+merchant+'&nomorpelanggan='+nomorpelanggan+'&range-nominal='+nominal;

if(lnomorpelanggan < 6 ) {
$.alert('Anda belum mengisi nominal', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
    $j('#nomorpelanggan').focus();
}else if(nominal =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nominal', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nominal").focus();
    }else if(nominal < 50000) {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf nilai Nominal minimal 50.000', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nominal").focus();
    } else {
$j("#konfirmasi_emoney").prop('disabled', true);
$j("#konfirmasi_emoney").css({cursor:"default"});
$j("#konfirmasi_emoney").val("Proses...");
$j(".box-emoney").hide();
$j(".box_result_emoney").show();
$j('#loadingemoney').show();
$j.ajax ({
        type: "POST",
        url: "index.php/ppob/topup_merchant_result_ajax",
        data: dataStringMerchant,
        cache: false,
        success: function(html) {
        $j(".box_result_emoney").html(html);
        }
        });
}

});

$j('#konfirmasi_linkaja').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan").val();
var lnomorpelanggan     = $j("#nomorpelanggan").val().length;
var merchant            = $j("#merchant").val();
var nominal             = $j("#nominal").val();

var dataStringMerchant  = '&hp='+nohp+'&merchant='+merchant+'&idpel='+nomorpelanggan+'&nominal='+nominal+'&idsave='+idpsave;

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
}else if(nominal =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nominal', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nominal").focus();
    }else if(nominal < 50000) {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf nilai Nominal minimal 50.000', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nominal").focus();
    } else {
$j("#konfirmasi_linkaja").prop('disabled', true);
$j("#konfirmasi_linkaja").css({cursor:"default"});
$j("#konfirmasi_linkaja").val("Proses...");
$j(".box-emoney").hide();
$j("#frm").hide();
$j(".box_result_merchant").show();
$j('#loadingmerchant').show();
$j.ajax ({
        type: "POST",
        url: "index.php/ppob/inquirymerchantlinkaja",
        data: dataStringMerchant,
        cache: false,
        success: function(html) {
        $j(".box_result_merchant").html(html);
        }
        });
}

});

$j('#konfirmasi_dana').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan").val();
var lnomorpelanggan     = $j("#nomorpelanggan").val().length;
var merchant            = $j("#merchant").val();
var nominal             = $j("#nominal").val();

var dataStringMerchant  = '&hp='+nohp+'&merchant='+merchant+'&idpel='+nomorpelanggan+'&nominal='+nominal+'&idsave='+idpsave;

if(lnomorpelanggan < 6 ) {
$.alert('Anda belum mengisi nomor HP', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
    $j('#nomorpelanggan').focus();
}else if(nominal =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nominal', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nominal").focus();
    }else if(nominal < 50000) {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf nilai Nominal minimal 50.000', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nominal").focus();
    } else {
$j("#konfirmasi_dana").prop('disabled', true);
$j("#konfirmasi_dana").css({cursor:"default"});
$j("#konfirmasi_dana").val("Proses...");
$j(".box-emoney").hide();
$j("#frm").hide();
$j(".box_result_merchant").show();
$j('#loadingmerchant').show();
$j.ajax ({
        type: "POST",
        url: "index.php/ppob/inquirymerchantdana",
        data: dataStringMerchant,
        cache: false,
        success: function(html) {
        $j(".box_result_merchant").html(html);

        }
        });
}

});

$j('#konfirmasi_firstmedia').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan").val();
var lnomorpelanggan     = $j("#nomorpelanggan").val().length;
var merchant            = $j("#merchant").val();

var dataStringMerchant  = '&hp='+nohp+'&merchant='+merchant+'&idpel='+nomorpelanggan+'&idsave='+idpsave;

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
        $j("#konfirmasi_firstmedia").prop('disabled', true);
        $j("#konfirmasi_firstmedia").css({cursor:"default"});
        $j("#konfirmasi_firstmedia").val("Proses...");
        $j(".box-emoney").hide();
        $j("#frm").hide();
        $j(".box_result_merchant").show();
        $j('#loadingmerchant').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/inquirymerchantfirstmedia",
                data: dataStringMerchant,
                cache: false,
                success: function(html) {
                $j(".box_result_merchant").html(html);
                $j('#loadingmerchant').hide();
                }
                });
        }
});

$j('#konfirmasi_aduan').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan").val();
var lnomorpelanggan     = $j("#nomorpelanggan").val().length;
var isiaduan             = $j("#isiaduan").val();

var dataStringMerchant  = '&hp='+nohp+'&isiaduan='+isiaduan+'&idpel='+nomorpelanggan;

if(lnomorpelanggan < 6 ) {
$.alert('Anda belum mengisi HP', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
    $j('#nomorpelanggan').focus();
}else if(isiaduan =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan isi aduan', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#isiaduan").focus();
    }else {
        $j("#konfirmasi_aduan").prop('disabled', true);
        $j("#konfirmasi_aduan").css({cursor:"default"});
        $j("#konfirmasi_aduan").val("Proses...");
        $j(".box-emoney").hide();
        $j("#frm").hide();
        $j(".box_result_merchant").show();
        $j('#loadingmerchant').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/personal/prosesaduan",
                data: dataStringMerchant,
                cache: false,
                success: function(html) {
                $j(".box_result_merchant").html(html);
                }
            });
        }
});
$j('#konfirmasi_angsuran').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan").val();
var lnomorpelanggan     = $j("#nomorpelanggan").val().length;
var merchant            = $j("#merchant").val();
var nominal             = $j("#nominal").val();

var dataStringMerchant  = '&hp='+nohp+'&merchant='+merchant+'&idpel='+nomorpelanggan+'&nominal='+nominal+'&idsave='+idpsave;

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
}else if(nominal =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nominal', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nominal").focus();
    }else if(nominal < 50000) {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf nilai Nominal minimal 50.000', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nominal").focus();
    } else {
        $j("#konfirmasi_angsuran").prop('disabled', true);
        $j("#konfirmasi_angsuran").css({cursor:"default"});
        $j("#konfirmasi_angsuran").val("Proses...");
        $j(".box-emoney").hide();
        $j("#frm").hide();
        $j(".box_result_merchant").show();
        $j('#loadingmerchant').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/inquirymerchanangsuran",
                data: dataStringMerchant,
                cache: false,
                success: function(html) {
                $j(".box_result_merchant").html(html);
                $j('#loadingmerchant').hide();
                }
                });
        }
});
$j('#konfirmasi_myrepublic').click(function() {

var nomorpelanggan      = $j("#nomorpelanggan").val();
var lnomorpelanggan     = $j("#nomorpelanggan").val().length;
var merchant            = $j("#merchant").val();

var dataStringMerchant  = '&hp='+nohp+'&merchant='+merchant+'&idpel='+nomorpelanggan+'&idsave='+idpsave;

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
        $j("#konfirmasi_myrepublic").prop('disabled', true);
        $j("#konfirmasi_myrepublic").css({cursor:"default"});
        $j("#konfirmasi_myrepublic").val("Proses...");
        $j(".box-emoney").hide();
        $j("#frm").hide();
        $j(".box_result_merchant").show();
        $j('#loadingmerchant').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/inquirymerchantmyrepublic",
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
