var $j = jQuery.noConflict();

$j(function(){
    $j("#forminput").show();
    var nohp       = $j("#hpuser").val();
    $j('#konfirmasi_pwd').click(function() {
        var pinpwd1    = $j("#pinpwd1").val();
        var pinpwd2    = $j("#pinpwd2").val();
        var lpinpwd1   = $j("#pinpwd1").val().length;
        var dataStringPWD = 'pwd='+encodeURIComponent(pinpwd1)+'&hp='+nohp;
        //alert(" = "+nohp+" = "+pinpwd1);
        if(lpinpwd1 < 4) {
            //alert('Password minimal 6 karakter');
            $.alert('Password minimal 6 karakter', {
                title: 'Alert',
                //closeTime: 5000,
                //autoClose: false,
                //position: ['left', [-0.42, 0]],
                //withTime: false,
                type: 'danger'
                //isOnly: true
            });
            return false;
        }else if(pinpwd1 != pinpwd2) {
            //alert('Password tidak sama');
            $.alert('Password tidak sama', {
                title: 'Alert',
                //closeTime: 5000,
                //autoClose: false,
                //position: ['left', [-0.42, 0]],
                //withTime: false,
                type: 'danger'
                //isOnly: true
            });
            return false;
        }else{
            $j(".box_result_cekstatus").show();
            $j('#loadingcekstatus').show();
            $j("#forminput").hide();
            $j.ajax ({
                type: "POST",
                url: "index.php/ppob/user_pwd",
                data: dataStringPWD,
                cache: false,
                success: function(html) {
                    $j('#loadingcekstatus').hide();
                    $j(".box_result_cekstatus").show();
                    $j(".box_result_cekstatus").html(html);
                }
            });
        }

    });
    $j('#konfirmasi_TRANSFER').click(function() {
        var nomortujuan        = $j("#nomortujuan").val();
        var nominal        = $j("#nominal").val();
        var pwd        = $j("#pwd").val();
        var lpwd = $j("#pwd").val().length;
        var dataString          = '&hp='+nohp+'&tujuan='+nomortujuan+'&nominal='+nominal+'&pwd='+pwd;
        if(nomortujuan =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor HP Tujuan', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nomortujuan").focus();
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
        }else if(lpwd < 3) {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan PIN', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#pwd").focus();
        }else if(nominal < 10000) {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf Nominal minimal Rp 10.000', {
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
            $j("#form_transfer").hide();
            $j(".box_result_cekstatus").show();
            $j('#loadingcekstatus').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/pbbdev/transferok",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j(".box_result_cekstatus").html(html);
                    $j('#loadingcekstatus').hide();
                    }
                    });
        }
    });
    $j('#konfirmasi_ref').click(function() {
        var noref        = $j("#noref").val();
        var dataString          = '&hp='+nohp+'&tujuan='+noref;
        if(noref =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Nomor HP Referensi', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#noref").focus();
        }else{
            $j("#forminput").hide();
            $j(".box_result_cekstatus").show();
            $j('#loadingcekstatus').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/personal/refok",
                    data: dataString,
                    cache: false,
                    success: function(html) {
                    $j(".box_result_cekstatus").html(html);
                    $j('#loadingcekstatus').hide();
                    }
                    });
        }
    });
    $j('#konfirmasi_REQ').click(function() {
        var nik        = $j("#nik").val();
        var name        = $j("#name").val();
        var telp        = $j("#telp").val();
        var email        = $j("#email").val();
        var dataString          = '&hp='+nohp+'&nik='+nik+'&name='+name+'&telp='+telp+'&email='+email;
        if(nik =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan NIK', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#nik").focus();
        }else if(name =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Name', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#name").focus();
        }else if(telp =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Telepon', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#telp").focus();
        }else if(email =="") {
            //alert("Maaf anda belum memasukkan nomor pelanggan!");
            $.alert('Maaf anda belum memasukkan Email', {
                        title: 'Confirm',
                        //closeTime: 5000,
                        //autoClose: false,
                        //position: ['left', [-0.42, 0]],
                        //withTime: false,
                        type: 'danger'
                        //isOnly: true
                    });
            $j("#email").focus();
        }else{
            $j("#forminput").hide();
            $j(".box_result_cekstatus").show();
            $j('#loadingcekstatus').show();
            $j.ajax ({
                    type: "POST",
                    url: "index.php/personal/daftaranggotaok",
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
