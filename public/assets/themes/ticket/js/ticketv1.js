var $j = jQuery.noConflict();

$j(function(){
$j(this).css({cursor:"default"});
$j(this).css({color:"#CCC"});
$j('#loadingcek').hide();
var nohp         = $j("#hpuser").val();
$j('#konfirmasi_bayar').click(function() {
    var bookname    = $j("#bookname").val();
    var dataString          = '&hp='+nohp+'&bookname='+bookname;
    if(bookname=="") {
        $.alert('Maaf anda belum memasukkan kode booking', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#bookname").focus();
    }else{
        $j("#form_status").hide();
        $j("#box_result").show();
        $j('#loadingcek').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ticket/getissuedkai",
                data: dataString,
                cache: false,
                success: function(html) {
                $j("#box_result").html(html);
                $j('#loadingcek').hide();
                }
                });
    }
});
$j('#konfirmasi_status').click(function() {
    var bookname    = $j("#bookname").val();
    var dataString          = '&hp='+nohp+'&bookname='+bookname;
    if(bookname=="") {
        $.alert('Maaf anda belum memasukkan kode booking', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#bookname").focus();
    }else{
        $j("#form_statusv").hide();
        $j("#box_result_cekstatus").show();
        $j('#loadingcekstatus').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ticket/cekbookingstatus",
                data: dataString,
                cache: false,
                success: function(html) {
                $j("#box_result_cekstatus").html(html);
                $j('#loadingcekstatus').hide();
                }
                });
    }
});
$j('#konfirmasi_bayarflight').click(function() {
    var bookname    = $j("#bookname").val();
    var dataString          = '&hp='+nohp+'&bookname='+bookname;
    if(bookname=="") {
        $.alert('Maaf anda belum memasukkan kode booking', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#bookname").focus();
    }else{
        $j("#form_status").hide();
        $j("#box_result").show();
        $j('#loadingcek').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ticket/getissuedflight",
                data: dataString,
                cache: false,
                success: function(html) {
                $j("#box_result").html(html);
                $j('#loadingcek').hide();
                }
                });
    }
});
$j('#konfirmasi_statusflight').click(function() {
    var bookname    = $j("#bookname").val();
    var dataString          = '&hp='+nohp+'&bookname='+bookname;
    if(bookname=="") {
        $.alert('Maaf anda belum memasukkan kode booking', {
                    title: 'Confirm',
                    //closeTime: 5000,
                    //autoClose: false,
                    //position: ['left', [-0.42, 0]],
                    //withTime: false,
                    type: 'danger'
                    //isOnly: true
                });
        $j("#bookname").focus();
    }else{
        $j("#form_statusv").hide();
        $j("#box_result_cekstatus").show();
        $j('#loadingcekstatus').show();
        $j.ajax ({
                type: "POST",
                url: "index.php/ticket/cekflightbookingstatus",
                data: dataString,
                cache: false,
                success: function(html) {
                $j("#box_result_cekstatus").html(html);
                $j('#loadingcekstatus').hide();
                }
                });
    }
});
});
