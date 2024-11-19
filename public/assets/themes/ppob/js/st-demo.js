;(function() {
  'use strict';


  $(activate);

  var real_target	= window.location.hash.replace("#", '');

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var real_target		= $(e.target).attr('href');
  var real_target               = real_target.replace("#", '');
  var target2			= window.location.hash.replace("#", '');
  if(real_target != target2) {
  $("#"+target2).hide();
  $("#"+real_target).show();
  } else {
  $("#"+real_target).hide();
  $("#"+target2).show();
  }
});


  function activate() {

    $('.nav-tabs')
      .scrollingTabs()
      .on('ready.scrtabs', function() {
        $('.tab-content').show();
		var target = window.location.hash.replace("#", '').length;
		if(target > 2) {
		var target2	= window.location.hash.replace("#", '');
		$("#menu-"+target2).addClass('active');
		$("#"+target2).show(target2);
		} else {
		$("#menu-tab1").addClass('active');
		$("#tab1").addClass('active');
		}
      });

  }
}());
