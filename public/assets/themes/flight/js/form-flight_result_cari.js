var $r = jQuery.noConflict();
$r(function(){

        $r(window).scroll(function(){
        if ($r(this).scrollTop() > 400) {
        $r('.scrollup').fadeIn();
        } else {
        $r('.scrollup').fadeOut();
        }
        });

        $r('.scrollup').click(function(){
	var top_limit	= $r(window).scrollTop()-2000;
        $r("html, body").animate({ scrollTop: top_limit }, 600);
        return false;
        });


$r(".title-box").mouseover(function() {
        var ID = $r(this).attr('ids');
        $r("#boxinfotransit_"+ID).show();
});

$r(".title-box").mouseout(function() {
        var ID = $r(this).attr('ids');
        $r("#boxinfotransit_"+ID).hide();
});


$r(".box_changeroute").click(function() {
        $r('.hide_box_changeroute').show();
	$r(".box_changeroute").hide();
        $r("#display_form").show();
        $r('#display_form').fadeIn();
});

$r(".hide_box_changeroute").click(function() {
        $r('.hide_box_changeroute').hide();
        $r('.box_changeroute').show();
        $r('#display_form').hide();
});

$r(".pesanbutton").click(function() {

var ID = $r(this).attr('id');

$r(".pesanbutton").prop('disabled', true);
$r(".pesanbutton").css({cursor:"default"});
$r("#"+ID).hide();
$r("#boxwaiting_"+ID).html("Mohon tunggu..");
$r('#fadeandscale').popup({
        autoopen: true,
        pagecontainer: '.container',
        transition: 'all 0.3s',
 	blur: false
});
$r("#form_"+ID).submit();

});

});
