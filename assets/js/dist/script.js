	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultDate: '2019-06-24',
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'Children Museum Trip',
					start: '2019-06-14'
				},
				{
					title: 'Class Concert',
					start: '2019-06-24'
				},
				{
					id: 999,
					title: 'Summer Program',
					start: '2019-07-09T16:00:00'
				},
				{
					id: 999,
					title: 'Summer Program',
					start: '2016-07-24T16:00:00'
				},
				{
					title: 'Conference',
					start: '2016-12-11',
					end: '2016-12-13'
				},
				{
					title: 'Meeting with Parents',
					start: '2019-07-08T10:30:00',
					end: '2019-07-08T12:30:00'
				},
				{
					title: 'Click for Google',
					url: 'https://google.com/',
					start: '2019-07-28'
				}
			]
		});
		
	});