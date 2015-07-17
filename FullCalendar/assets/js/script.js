$(function(){

	data = [
    		{"start": "2015-07-21 15:00:00", "end": "2015-07-21 16:00:00", "title": "Java"},
    		{"start": "2015-07-22 15:00:00", "end": "2015-07-22 16:00:00", "title": "Java"},
    		{"start": "2015-07-23 15:00:00", "end": "2015-07-23 16:00:00", "title": "Java"},
    		{"start": "2015-07-13 15:00:00", "end": "2015-07-13 16:00:00", "title": "C++"},
    		{"start": "2015-07-14 15:00:00", "end": "2015-07-14 16:00:00", "title": "C++"}
		];

	Service = Backbone.Model.extend({
		defaults: {
    		title: null,
    		start: null,
    		end: null
  		}
	});
	ServiceCollection = Backbone.Collection.extend({
		model: Service,
	});

	App = Backbone.View.extend({
		initialize: function() {
			this.model = new Service();
		},
		render: function() {
		 	$('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,basicWeek,basicDay',
                    ignoreTimezone: false
                },
                selectable: true,
                selectHelper: true,
                editable: true,
                ignoreTimezone: false,                
            });
		 	$('#calendar').fullCalendar("addEventSource", this.collection.toJSON());
		}
});

	var myCollection = new ServiceCollection(data);
    new App({collection: myCollection}).render();


});