var listHoliday;
var $c = jQuery.noConflict();

	function format_date_full(original_date) {
            var day_name = [ 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            var month_name = [ "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des" ];
            var oridate = original_date.split("-");
            oridate = new Date(parseInt(oridate[0]),parseFloat(oridate[1]) - 1,parseInt(oridate[2]),0,0,0,0);
            oridate = day_name[oridate.getDay()]+", "+ (oridate.getDate() < 10 ? '0'+ oridate.getDate() : oridate.getDate()) +" "+ month_name[oridate.getMonth()] + " " + oridate.getFullYear();

            return oridate;
        }

        $c(document).ready(function() {
            var departure_calendar_selected = false;
            var return_calendar_selected = false;
            var global_departure_date = $c("#js_datedeparture").val();
            var global_return_date = $c("#js_dateback").val();
            var global_nextyear_date = $c("#js_datenextyear").val();

            // calendar
            var departure_calendar;
            var return_calendar;

            // initialize both calendar
            departure_calendar = $c("#departure_calendar").dnCalendar({
                minDate: global_departure_date,
                maxDate: global_nextyear_date,
                defaultDate: global_departure_date,
		notes: listHoliday,
	        showNotes: true,
                monthNames: [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ],
                dayNames: [ 'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
                dataTitles: { defaultDate: 'Pergi', today : 'hari ini' }, 
                dayClick: function(date, view) {
                    if (departure_calendar_selected) {
                        // get and format date
                        global_departure_date = date.yyyymmdd();

                        // set value of departure date
                        $c('#train_datedeparture').val(format_date_full(global_departure_date));

                        var split_ret_date = global_return_date.split('-');
                        var new_return_date = new Date(split_ret_date[0], split_ret_date[1] - 1, split_ret_date[2]);
                        if(new_return_date < date) {
                            // update return calendar
                            return_calendar.update({defaultDate: global_departure_date, minDate: global_departure_date});
                            $c('#train_dateback').val(format_date_full(global_departure_date));
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
                defaultDate: global_return_date,
                notes: listHoliday,
                showNotes: true,
                monthNames: [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ],
                dayNames: [ 'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
                dataTitles: { defaultDate: 'Pulang', today : 'hari ini' }, 
                dayClick: function(date, view) {
                    if (return_calendar_selected) {
                        global_return_date = date.yyyymmdd();
                        $c('#train_dateback').val(format_date_full(global_return_date));

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
