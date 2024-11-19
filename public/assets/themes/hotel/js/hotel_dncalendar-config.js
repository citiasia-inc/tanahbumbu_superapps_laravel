var listHoliday;
var $c = jQuery.noConflict();

	function format_date_full(original_date) {
            var day_name = [ 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            var month_name = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
            var oridate = original_date.split("-");
            oridate = new Date(parseInt(oridate[0]),parseFloat(oridate[1]) - 1,parseInt(oridate[2]),0,0,0,0);
            oridate = day_name[oridate.getDay()]+", "+ (oridate.getDate() < 10 ? '0'+ oridate.getDate() : oridate.getDate()) +" "+ month_name[oridate.getMonth()] + " " + oridate.getFullYear();

            return oridate;
        }

        $c(document).ready(function() {
	    var max_night	= 10;
            var departure_calendar_selected = false;
            var return_calendar_selected = false;
            var global_today_date = $c("#js_datetoday").val();
            var global_departure_date = $c("#js_datedeparture").val();
            var global_return_date = $c("#js_dateback").val();
            var global_nextyear_date = $c("#js_datenextyear").val();

            // calendar
            var departure_calendar;
            var return_calendar;

            // initialize both calendar
            departure_calendar = $c("#departure_calendar").dnCalendar({
                minDate: global_today_date,
                maxDate: global_nextyear_date,
                defaultDate: global_departure_date,
		notes: listHoliday,
	        showNotes: true,
                monthNames: [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ],
                dayNames: [ 'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
                dataTitles: { defaultDate: 'Check-in', today : 'hari ini' }, 
                dayClick: function(date, view) {
                    if (departure_calendar_selected) {
                        // get and format date
                        global_departure_date = date.yyyymmdd();

                        // set value of departure date
                        $c('#hotel_checkin').val(format_date_full(global_departure_date));
			$c("#js_datedeparture").val(global_departure_date);



var html ='';
var start = new Date(global_departure_date); //yyyy-mm-dd
var end = new Date(global_nextyear_date); //yyyy-mm-dd

var i = 0;
while(start <= end){

    var mm = ((start.getMonth()+1)>=10)?(start.getMonth()+1):'0'+(start.getMonth()+1);
    var dd = ((start.getDate())>=10)? (start.getDate()) : '0' + (start.getDate());
    var yyyy = start.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd; //yyyy-mm-dd
    var convert_date = format_date_full(date);

if(i < max_night && i > 0) {
    html += '<option value="'+date+'|'+i+'|'+convert_date+'">'+i+' malam <div>(Check-out: '+convert_date+')</div></option>';
}

    start = new Date(start.setDate(start.getDate() + 1)); //date increase by 1

i++;
}

   document.getElementById("hotel_checkout").innerHTML = html;



			var split_ret_date = global_return_date.split('-');
                        var new_return_date = new Date(split_ret_date[0], split_ret_date[1] - 1, split_ret_date[2]);
                        if(new_return_date < date) {
                            // update return calendar
                            return_calendar.update({defaultDate: global_departure_date, minDate: global_departure_date});
                            $c('#flight_dateback').val(format_date_full(global_departure_date));
                        } else {
                            // update return calendar
                            return_calendar.update({minDate: global_departure_date});
                        }

                        // update departure calendar
                        departure_calendar.update({defaultDate: global_departure_date});
                        
			setTimeout(function(){
                        $c('#modal_departure_calendar').modal('hide');
			}, 800);

                        departure_calendar_selected = false;
                    }
                } 
            });
            
            return_calendar = $c("#return_calendar").dnCalendar({
		minDate: global_departure_date,
                maxDate: global_nextyear_date,
                defaultDate: global_departure_date,
                notes: listHoliday,
                showNotes: true,
                monthNames: [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ],
                dayNames: [ 'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
                dataTitles: { defaultDate: 'Pulang', today : 'hari ini' }, 
                dayClick: function(date, view) {
                    if (return_calendar_selected) {
                        global_return_date = date.yyyymmdd();
                        $c('#flight_dateback').val(format_date_full(global_return_date));

                        // update calendar
                        return_calendar.update({defaultDate: global_return_date});
                        
                        setTimeout(function(){
                        $c('#modal_return_calendar').modal('hide');
                        }, 800);

                        return_calendar_selected = false;
                    }
                }
            });

            // build both calendar
            departure_calendar.build();
            return_calendar.build();

            $c("#_departure_calendar").click(function() {
                departure_calendar.update({});
                departure_calendar_selected = true; 
                return_calendar_selected = false;

                // open modal
                $c("#modal_departure_calendar").modal();
            });

            $c("#_return_calendar").click(function() {
                return_calendar.update({});
                departure_calendar_selected = false;
                return_calendar_selected = true;

                // open modal
                $c("#modal_return_calendar").modal();
            });
        });/*]]>*/
