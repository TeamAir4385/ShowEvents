var Cloud = require('ti.cloud');
Cloud.debug = true;  // optional; if you add this line, set it to false for production


Cloud.Events.search(
	{name: 'Party'},
	function (e) {
    	if (e.success) {
            var listViewItems =[];
            
        	for (var i = 0; i < e.events.length; i++) {
        		var event = e.events[i];
        		listViewItems.push( 
				    {
				    	name: {text: e.events[i].name}, 
				        start_time: {text: e.events[i].start_time},
				        details: {text: e.events[i].details}
				        	        
				    });

			//given that cloud calls are asynchronous, we need to open the window on the
			//success of getting the cloud event.
			
			       	             
			}
		$.index.open(); 	
    	} else {
        	alert('Error:\n' +
          	((e.error && e.message) || JSON.stringify(e)));
    	}
    	
    	$.eventList.sections[0].setItems(listViewItems);
});

