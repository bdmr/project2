	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultView: 'month',
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
					start: '2019-07-24T16:00:00'
				},
				{
					title: 'Meeting with Parents',
					start: '2019-07-08T10:30:00',
					end: '2019-07-08T12:30:00'
				},
				{
					title: 'LEGO Brick Play',
					url: 'https://www.mortonarb.org/events/lego%C2%AE-brick-play-0',
					start: '2019-07-28T11:00:00',
					end: '2019-07-28T16:00:00',
					color: '#20677F',

				},
				{
					title: 'Kids Slime Workshop',
					url: 'https://www.artstudiolocalcolor.com/',
					start: '2019-07-06',
					end: '2019-07-06',
					color: '#d84c5d'
				},
				{
					title: 'Project Presentations',
					url: 'https://sps.northwestern.edu/',
					start: '2019-07-06T10:00:00',
					end: '2019-07-06T14:00:00',
					color: '#a90b22'
				},
				{
					title: 'CCM Free Day',
					url: 'https://chicagochildrensmuseum.org',
					start: '2019-07-07',
					end: '2019-07-07',
					color: '#163912'
				},
				{
					title: 'Parents Survival Night',
					url: 'https://www.thelittlegym.com',
					start: '2019-07-12',
					end: '2019-07-12',
					color: 'orange'
				}
			],
			eventClick: function(event){
				if(event.url){
					window.open(event.url, "_blank");
					return false;
				}
			}
		
		});
		
	});