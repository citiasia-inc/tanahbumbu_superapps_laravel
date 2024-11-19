var $j = jQuery.noConflict();

$j(function(){
$j(this).css({cursor:"default"});
$j(this).css({color:"#CCC"});
var nohp         = $j("#hpuser").val();
var idpsave    = 0;
$j('#moreidp').click(function(){
    if($(this).prop("checked") == true){
        idpsave    = 1;
        $j("#pelangganname").show();
    }else if($(this).prop("checked") == false){
        idpsave    = 0;
        $j("#pelangganname").hide();
    }
});

$j('#konfirmasisms').click(function() {
var kodesms     = $j("#kodesms").val();
var lkodesms        = $j("#kodesms").val().length;
var dataString      = 'kodesms='+kodesms;

if(lkodesms < 6) {
$.alert('Kode SMS '+kodesms+' yang anda masukkan salah!', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
} else {
$j("#konfirmasisms").prop('disabled', true);
$j("#konfirmasisms").css({cursor:"default"});
$j("#konfirmasisms").val("Proses...");
$j.ajax ({
        type: "POST",
        url: "https://transaksi.klikmbc.co.id/v2/check-kodesms_pulsa",
        data: dataString,
        cache: false,
        success: function(html) {
    $j("#konfirmasisms").prop('disabled', false);
    $j("#konfirmasisms").css({cursor:"pointer"});
    $j("#konfirmasisms").val("KONFIRMASI");
    if(html.match(/ERROR:/)) {
        $.alert('Response : '+html+' yang anda masukkan salah!', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        } else {
        $.alert('Response : '+html+' yang anda masukkan salah!', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        //location.reload();
    }
        }
        });
}
});

$j('#konfirmasi_cektagihan').click(function() {
    var nomorpelanggan    = $j("#nomorpelanggan").val();
    var jlhbulan        = $j("#jlhbulan").val();
    var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&jlhbln='+jlhbulan+'&code=BPJSKS&idsave='+idpsave;
    if(nomorpelanggan=="") {
        $.alert('Maaf anda belum memasukkan nomor pelanggan!', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nomorpelanggan").focus();
    }else{
        $j("#cover-form").hide();
        $j("#loadingbox_result").show();
        $j('#loadingbox_form').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/cektagihanppob",
                data: dataString,
                cache: false,
                success: function(html) {
                $j("#loadingbox_result").html(html);
                $j('#loadingbox_form').hide();
                }
                });
    }
});

$j('#konfirmasi_statusppobbpjs').click(function() {
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
                url: "index.php/ppob/cekstatusppobbpjs",
                data: dataString,
                cache: false,
                success: function(html) {
                $j(".box_result_cekstatus").html(html);
                $j('#loadingcekstatus').hide();
                }
                });
    }
});
$j('#konfirmasi_statusppob').click(function() {
    var nomortujuan_status    = $j("#nomortujuan_status").val();
    var invoice_status        = $j("#invoice_status").val();

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
    }else if(nomortujuan_status =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nomor Pelanggan', {
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
        $j("#cover-box_internet").hide();
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

$j('#konfirmasi_gopay').click(function() {
    var gopaytype    = $j("#gopaytype").val();
    var nomorpelanggan        = $j("#nomorpelanggan").val();
    var nominal        = $j("#nominal").val();

    var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&type='+gopaytype+'&nominal='+nominal+'&idsave='+idpsave;
    if(nomorpelanggan =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nomor HP di GOPAY', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nomorpelanggan").focus();
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
    }else{
        $j("#cover-form").hide();
        $j("#loadingbox_result").show();
        $j('#loadingbox_form').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/inquirymerchant",
                data: dataString,
                cache: false,
                success: function(html) {
                $j("#loadingbox_result").html(html);
                $j('#loadingbox_form').hide();
                }
                });
    }
});
$j('#konfirmasi_tf').click(function() {
    alert(1);
});
$j('#konfirmasi_statusgopay').click(function() {
    var invoice_status        = $j("#invoice_status").val();

    var dataString          = '&hp='+nohp+'&inv='+invoice_status;
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
        $j("#cover-box_internet").hide();
        $j(".box_result_cekstatus").show();
        $j('#loadingcekstatus').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/cekstatusgopay",
                data: dataString,
                cache: false,
                success: function(html) {
                $j(".box_result_cekstatus").html(html);
                $j('#loadingcekstatus').hide();
                }
                });
    }
});
$j('#konfirmasi_grab').click(function() {
    var gopaytype    = $j("#gopaytype").val();
    var nomorpelanggan        = $j("#nomorpelanggan").val();
    var nominal        = $j("#nominal").val();

    var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&type='+gopaytype+'&nominal='+nominal+'&idsave='+idpsave;
    if(nomorpelanggan =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nomor HP di GRAB', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nomorpelanggan").focus();
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
    }else{
        $j("#cover-form").hide();
        $j("#loadingbox_result").show();
        $j('#loadingbox_form').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/inquirymerchantgrab",
                data: dataString,
                cache: false,
                success: function(html) {
                $j("#loadingbox_result").html(html);
                $j('#loadingbox_form').hide();
                }
                });
    }
});
$j('#konfirmasi_statusppobgrabpay').click(function() {
    var invoice_status        = $j("#invoice_status").val();

    var dataString          = '&hp='+nohp+'&inv='+invoice_status;
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
        $j("#cover-box_internet").hide();
        $j(".box_result_cekstatus").show();
        $j('#loadingcekstatus').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/cekstatusgrabpay",
                data: dataString,
                cache: false,
                success: function(html) {
                $j(".box_result_cekstatus").html(html);
                $j('#loadingcekstatus').hide();
                }
                });
    }
});

$j('#nomorpelanggan_emoney').keyup(function() {
  var foo = $j(this).val().split("-").join(""); // remove hyphens
  if (foo.length > 0) {
    foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
  }
  $j(this).val(foo);
});
$j('#konfirmasi_emoney').click(function() {
    var gopaytype    = $j("#gopaytype").val();
    var nomorpelanggan        = $j("#nomorpelanggan_emoney").val();
    var nominal        = $j("#nominal").val();

    var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&type='+gopaytype+'&nominal='+nominal+'&idsave='+idpsave;
    if(nomorpelanggan =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nomor Kartu', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nomorpelanggan").focus();
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
    }else{
        $j("#cover-form").hide();
        $j("#loadingbox_result").show();
        $j('#loadingbox_form').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/inquirymerchantemoney",
                data: dataString,
                cache: false,
                success: function(html) {
                $j("#loadingbox_result").html(html);
                $j('#loadingbox_form').hide();
                }
                });
    }
});
$j('#konfirmasi_statusemoney').click(function() {
    var invoice_status        = $j("#invoice_status").val();

    var dataString          = '&hp='+nohp+'&inv='+invoice_status;
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
        $j("#cover-box_internet").hide();
        $j(".box_result_cekstatus").show();
        $j('#loadingcekstatus').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/cekstatusgrabpay",
                data: dataString,
                cache: false,
                success: function(html) {
                $j(".box_result_cekstatus").html(html);
                $j('#loadingcekstatus').hide();
                }
                });
    }
});
///paytren
$j('#konfirmasi_paytren').click(function() {
    var gopaytype    = $j("#gopaytype").val();
    var nomorpelanggan        = $j("#nomorpelanggan").val();
    var nominal        = $j("#nominal").val();

    var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&type='+gopaytype+'&nominal='+nominal;
    if(nomorpelanggan =="") {
        //alert("Maaf anda belum memasukkan nomor pelanggan!");
        $.alert('Maaf anda belum memasukkan Nomor PayTren', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#nomorpelanggan").focus();
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
    }else{
        $j("#cover-form").hide();
        $j("#loadingbox_result").show();
        $j('#loadingbox_form').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/inquirymerchantpaytren",
                data: dataString,
                cache: false,
                success: function(html) {
                $j("#loadingbox_result").html(html);
                $j('#loadingbox_form').hide();
                }
                });
    }
});
$j('#konfirmasi_statuspaytren').click(function() {
    var invoice_status        = $j("#invoice_status").val();

    var dataString          = '&hp='+nohp+'&inv='+invoice_status;
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
        $j("#cover-box_internet").hide();
        $j(".box_result_cekstatus").show();
        $j('#loadingcekstatus').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/cekstatusgrabpay",
                data: dataString,
                cache: false,
                success: function(html) {
                $j(".box_result_cekstatus").html(html);
                $j('#loadingcekstatus').hide();
                }
                });
    }
});
    ///pdam
    $j('#konfirmasi_pdam').click(function() {
        var gopaytype    = $j("#gopaytype").val();
        var nomortujuan        = $j("#nomortujuan").val();
        
        var dataString          = '&hp='+nohp+'&idpel='+nomortujuan+'&type='+gopaytype+'&idsave='+idpsave;
        if(nomortujuan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor Pelanggan', {
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
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ppob/ppobtagihancek",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    }
                    });
        }
    });
    ///telkom
    $j('#konfirmasi_telkom').click(function() {
        //alert(idpsave);
        var idpsavename     = $j("#pelanggan_name").val();
        var gopaytype    = $j("#gopaytype").val();
        var nomortujuan        = $j("#nomortujuan").val();
        
        var dataString          = '&hp='+nohp+'&idpel='+nomortujuan+'&type='+gopaytype+'&idsave='+idpsave+'&idpsavename='+idpsavename;
        if(nomortujuan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor Pelanggan', {
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
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ppob/ppobtagihantelkom",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    }
                    });
        }
    });
    ///tvkabel
    $j('#konfirmasi_tvkabel').click(function() {
        var gopaytype    = $j("#gopaytype").val();
        var nomortujuan        = $j("#nomortujuan").val();
        
        var dataString          = '&hp='+nohp+'&idpel='+nomortujuan+'&type='+gopaytype+'&idsave='+idpsave;
        if(nomortujuan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor Pelanggan', {
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
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ppob/ppobtagihantv",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    }
                    });
        }
    });
    ///gas Negara
    $j('#konfirmasi_gas').click(function() {
        var gopaytype    = $j("#gopaytype").val();
        var nomortujuan        = $j("#nomortujuan").val();
        
        var dataString          = '&hp='+nohp+'&idpel='+nomortujuan+'&type='+gopaytype+'&idsave='+idpsave;
        if(nomortujuan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor Pelanggan', {
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
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ppob/ppobtagihangas",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    }
                    });
        }
    });
    $j('#konfirmasi_brizzi').click(function() {
        var gopaytype    = $j("#gopaytype").val();
        var nomorpelanggan        = $j("#nomorpelanggan_emoney").val();
        var nominal        = $j("#nominal").val();

        var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&type='+gopaytype+'&nominal='+nominal;
        if(nomorpelanggan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor Kartu', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nomorpelanggan").focus();
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
        }else{
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ppob/inquirymerchantbrizzi",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    }
                    });
        }
    });
    $j('#konfirmasi_tapcash').click(function() {
        var gopaytype    = $j("#gopaytype").val();
        var nomorpelanggan        = $j("#nomorpelanggan_emoney").val();
        var nominal        = $j("#nominal").val();

        var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&type='+gopaytype+'&nominal='+nominal+'&idsave='+idpsave;
        if(nomorpelanggan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor Kartu', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nomorpelanggan").focus();
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
        }else{
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ppob/inquirymerchanttapcash",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    }
                    });
        }
    });
    $j('#konfirmasi_multif').click(function() {
        var gopaytype    = $j("#gopaytype").val();
        var nomorpelanggan        = $j("#nomortujuan").val();
        
        var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&type='+gopaytype;
        if(nomorpelanggan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor Kontrak', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nomorpelanggan").focus();
        }else{
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            
        }
    });
    $j('#negara').change(function() {
        var id = $j("#negara").val();
        var dataString = '&id='+id;
        $j("#bankviewtransfer").html('');
        $j.ajax ({
                type: "POST",
                url: "index.php/ticket/banktransferview",
                data: dataString,
                cache: false,
                success: function(html) {
                    $j("#bankviewtransfer").html(html);
                }
            });

    });
    $j('#konfirmasi_transferuang').click(function() {
        var bankname    = $j("#bankname").val();
        var nomorpelanggan        = $j("#nomorpelanggan").val();
        var nominal        = $j("#nominal").val();
        var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&bankcode='+bankname+'&nominal='+nominal;
        if(nomorpelanggan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor Rekening', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nomorpelanggan").focus();
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
        }else{
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j('#ibox_login').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ticket/banktransferok",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    $j('.box_result').show();
                    $j('#ibox_login').show();
                    }
                    });
        }
    });
    
    $j('#konfirmasi_pascabayar').click(function() {
        var gopaytype    = $j("#gopaytype").val();
        var nomorpelanggan        = $j("#nomorpelanggan").val();
        var nominal        = $j("#nominal").val();

        var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&type='+gopaytype+'&idsave='+idpsave;
        if(nomorpelanggan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor Kartu', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nomorpelanggan").focus();
        }else{
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ppob/inquirymerchantpascabayar",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    }
                    });
        }
    });
    $j('#konfirmasi_ovo').click(function() {
        var gopaytype    = $j("#gopaytype").val();
        var nomorpelanggan        = $j("#nomorpelanggan").val();
        var nominal        = $j("#nominal").val();

        var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&type='+gopaytype+'&nominal='+nominal+'&idsave='+idpsave;
        if(nomorpelanggan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor HP di OVO', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nomorpelanggan").focus();
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
        }else{
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ppob/inquirymerchantovo",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    }
                    });
        }
    });
    $j('#konfirmasi_tcash').click(function() {
        var gopaytype    = $j("#gopaytype").val();
        var nomorpelanggan        = $j("#nomorpelanggan").val();
        var nominal        = $j("#nominal").val();

        var dataString          = '&hp='+nohp+'&idpel='+nomorpelanggan+'&type='+gopaytype+'&nominal='+nominal+'&idsave='+idpsave;
        if(nomorpelanggan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor HP di TCASH', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nomorpelanggan").focus();
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
        }else{
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ppob/inquirymerchanttcash",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    }
                    });
        }
    });
    $j('#konfirmasi_pinjaman').click(function() {
        var bankname    = $j("#bankname").val();
        var nominal        = $j("#nominal").val();
        var peruntukan        = $j("#peruntukan").val();
        var angsuran        = $j("#angsuran").val();

        var dataString          = '&hp='+nohp+'&nominal='+nominal+'&peruntukan='+peruntukan+'&angsuran='+angsuran;
        if(nominal < 500000) {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf nilai Nominal minimal 500.000', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nominal").focus();
        }else{
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j('#ibox_login').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/personal/kirimpinjaman",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    $j('.box_result').show();
                    $j('#ibox_login').show();
                    }
                    });
        }
    });
    $j('#type').change(function() {
        var id = $j("#type").val();
        var dataString = '&id='+id;
        $j("#gameslist").html('');
        $j.ajax ({
                type: "POST",
                url: "index.php/ppob/gameslist",
                data: dataString,
                cache: false,
                success: function(html) {
                    $j("#gameslist").html(html);
                }
            });

    });
    $j('#konfirmasi_games').click(function() {
        var code    = $j("#code").val();
        var nomorpelanggan        = $j("#nomorpelanggan").val();
        var idpasswordn        = $j("#idpasswordn").val();
        
        
        var dataString          = '&hp='+nohp+'&code='+code+'&nomorpelanggan='+nomorpelanggan+'&pwd='+idpasswordn;
        if(code =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf Nominal harus di pilih', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#code").focus();
        }else if(idpasswordn =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf PIN harus di isi', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#idpasswordn").focus();
        }else if(nomorpelanggan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf Pelanggan harus di isi', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nomorpelanggan").focus();
        }else{
            $j("#cover-form").hide();
            $j("#loadingbox_result").show();
            $j('#loadingbox_form').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/ppob/inquirygames",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j("#loadingbox_result").html(html);
                    $j('#loadingbox_form').hide();
                    }
                    });
        }
    });
});
