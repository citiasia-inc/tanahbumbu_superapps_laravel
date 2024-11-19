    var btnChooseSlot;
    function do_something(lat,lon){
        //alert(lat+" "+lon);
        $("#c_lat").val(lat);
        $("#c_lon").val(lon);
    }
    //var base_url = window.location.origin;
    function base_url() {
    var pathparts = location.pathname.split('/');
    if (location.host == 'localhost') {
        var url = location.origin+'/'+pathparts[1].trim('/')+'/'; // http://localhost/myproject/
    }else{
        var url = location.origin; // http://stackoverflow.com
        if(pathparts.length > 1){
        url  = url  +'/'+pathparts[1].trim('/')+'/';
        }
    }
    return url;
}
    window.loadLocality = function(city_id){

      $.ajax({
              method: "POST",
              url: base_url()+'index.php/admin/locality_json',
              data: { city_id: city_id }
            })
              .done(function( data ) {
                    
                     $.each(data, function(index, element) {
                                $('#locality_id').append("<option value='"+element.locality_id+"'>"+element.locality+"</option>");
                            });
                            $("#locality_id").trigger("chosen:updated");
            });  
    };
    
    window.loadBusiness = function(){
      var cat_id = $("#cat_id").val();
      var lat = $("#c_lat").val();
      var lon = $("#c_lon").val();
      var city = $("#c_city").val();
      var rad = $("#rad").val();
      var locality = $("#c_locality").val();
      var speciality = $("#c_speciality").val();
      
      $("#display_area").html("<div class='loading'></div>"); 
      $.ajax({
              method: "POST",
              url: base_url()+'index.php/search/get',
              data: { cat_id: cat_id, lat : lat, lon : lon, rad : rad, city_id : city, locality : locality, speciality : speciality }
            })
            .done(function( data ) {
                $("#display_area").html(data);                        
            });  
    };
    window.loadGetTimeSlot = function(btn){
           var cdate = btn.data("date");
           var bus_id = btn.data("busid");
           var days = btn.data("days"); 
           
           $(".business-slot-area").html("<div class='loading'></div>"); 
          $.ajax({
                  method: "POST",
                  url: base_url()+'index.php/views/get_schedule_slot',
                  data: { start_date: cdate, bus_id : bus_id, days : days }
                })
                .done(function( data ) {
                    $(".business-slot-area").html(data);                        
                });
    }
    jQuery(function($){
        $.validate();
       
       if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          do_something(position.coords.latitude, position.coords.longitude);
          loadBusiness();  
        });
       } else {
          /* geolocation IS NOT available */
          loadBusiness();  
       }
       
       loadLocality($("#city_id").val());
       $("#city_id").chosen();
       $("#locality_id").chosen();
       $("#city_id").change(function(){
            $('#locality_id').html("");
            var city_id = $(this).val();
            loadLocality(city_id);
             
       }); 
       $( "#speciality" ).autocomplete({
          source: base_url()+"index.php/admin/speciality_json",
          minLength: 2,
          select: function( event, ui ) {
            //log( "Selected: " + ui.item.value + " aka " + ui.item.id );
          }
       }); 
       
        var minimized_elements = $('.minimize');
    
    minimized_elements.each(function(){    
        var t = $(this).text();        
        if(t.length < 100) return;
        
        $(this).html(
            t.slice(0,100)+'<span>... </span><a href="#" class="more">More</a>'+
            '<span style="display:none;">'+ t.slice(100,t.length)+' <a href="#" class="less">Less</a></span>'
        );
        
    }); 
    
    $('a.more', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).hide().prev().hide();
        $(this).next().show();        
    });
    
    $('a.less', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).parent().hide().prev().show().prev().show();    
    });

    

    $( "#ratingForm" ).submit(function( event ) {
      var rating = $(this).find("input[name=rating]").val();
      var comment = $(this).find("textarea[name=reviews]").val();
      var bus_id = $(this).find("input[name=bus_id]").val();
      $.ajax({
                  method: "POST",
                  url: base_url()+'index.php/views/addcomment',
                  data: { rating : rating, reviews : comment, bus_id : bus_id }
                })
                .done(function( data ) {
                    if(data.responce){
                       $('#tab_c').tab('show');
                       $(document).scroll("#tab_c"); 
                       $("#ratingModel").modal('hide');
                       $('.review-lists').prepend(data.data); 
                    }else{
                       $(".rating-message").html(data.message); 
                    }
                                        
                });
      event.preventDefault();
    });

       
    $( "#loginForm" ).submit(function( event ) {
      var email = $(this).find("input[name=email]").val();
      var password = $(this).find("input[name=password]").val();
      $.ajax({
                  method: "POST",
                  url: base_url()+'index.php/login/login_ajax',
                  data: { email : email, password : password }
                })
                .done(function( data ) {
                    
                    if(data.responce){
                        $("#appointmentForm #fullname").val(data.data.user_fullname);
                        $("#appointmentForm #email").val(data.data.user_email);
                        $("#appointmentForm #mobile").val(data.data.user_phone);
                        $("#loginModal").modal('hide');
                        loadGetTimeSlot(btnChooseSlot);
                    }else{
                        $("#reauth-email").html(data.message);
                    }                       
                });
      event.preventDefault();
    });
    
    $("body").on("click",".book-btn",function(){
        btnChooseSlot = $(this);
        $.ajax({
              method: "POST",
              url: base_url()+'index.php/login/is_user_login'
            })
              .done(function( data ) {
                    
                    if(data){      
                        loadGetTimeSlot(btnChooseSlot);
                    }else{
                        $("#loginModal").modal('show');
                    }
                    
            });
        
       
    });
    
    
    });
