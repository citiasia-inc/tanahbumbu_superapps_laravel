var $j = jQuery.noConflict();

$j(function(){

$j('#konfirmasi').hide();
$j(this).css({cursor:"default"});
$j(this).css({color:"#CCC"});
var nohp         = $j("#hpuser").val();
var dataString          = '&type=PLNS&hp='+nohp;
var idpsave    = 0;
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
        idpsaves    = 0;
    }
});

$j.ajax ({
        type: "POST",
        url: "index.php/ppob/listprodukppob",
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

$j('#konfirmasi').click(function() {
    var last_nomortujuan    = $j("#nomortujuan").val();
    var lnomortujuan        = $j("#nomortujuan").val().length;

    var last_debet          = $j("#last_debet").val();
    var last_ppob_code  = $j("#last_ppob_code").val();
    var dataString          = '&hp='+nohp+'&idpel='+last_nomortujuan+'&code='+last_ppob_code+'&last_debet='+last_debet+'&idsave='+idpsave;

    if(lnomortujuan < 5) {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan nomor pelanggan!', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nomortujuan").focus();
    }else{
        $j("html, body").animate({ scrollTop: 0 }, 0);
        $j("#konfirmasi").prop('disabled', true);
        $j("#konfirmasi").css({cursor:"default"});
        $j("#konfirmasi").val("Proses...");
        $j("#cover-box").hide();
        $j(".box_final_result").show();
        $j('#loadingisipulsa').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/isipln_result",
                data: dataString,
                cache: false,
                success: function(html) {
                $j(".box_final_result").html(html);
                }
                });
    }
});
$j('#konfirmasi_cektagihan').click(function() {
    var last_nomortujuan    = $j("#nomortujuan_internet").val();
    var lnomortujuan        = $j("#nomortujuan_internet").val().length;

    var dataString          = '&hp='+nohp+'&idpel='+last_nomortujuan+'&idsave='+idpsaves;
    if(lnomortujuan < 5) {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan nomor pelanggan!', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nomortujuan_internet").focus();
    }else{
        $j("html, body").animate({ scrollTop: 0 }, 0);
        $j("#konfirmasi_internet").prop('disabled', true);
        $j("#konfirmasi_internet").css({cursor:"default"});
        $j("#konfirmasi_internet").val("Proses...");
        $j("#cover-box_internet").hide();
        $j(".box_final_result_internet").show();
        $j('#loadingisipulsa_internet').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/isiplnn_result",
                data: dataString,
                cache: false,
                success: function(html) {
                $j(".box_final_result_internet").html(html);
                }
                });
    }
});
$j('#konfirmasi_statusppob').click(function() {
    //var nomortujuan_status    = $j("#nomortujuan_status").val();
    //var invoice_status        = $j("#invoice_status").val();
    var invoice        = $j("#invoice_status").val();
    var res = invoice.split("#");
    var invoice_status        =res[0];
    var nomortujuan_status    = res[1];
    var dataString          = '&hp='+nohp+'&inv='+invoice_status+'&idpel='+nomortujuan_status;
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
        $j("html, body").animate({ scrollTop: 0 }, 0);
        $j("#konfirmasi_internet").prop('disabled', true);
        $j("#konfirmasi_internet").css({cursor:"default"});
        $j("#konfirmasi_internet").val("Proses...");
        $j(".form_statusv").hide();
        $j(".box_result_cekstatus").show();
        $j('#loadingcekstatus').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/cekstatusppob",
                data: dataString,
                cache: false,
                success: function(html) {
                $j(".box_result_cekstatus").html(html);
                $j('#loadingcekstatus').hide();
                }
                });
    }
});



});
