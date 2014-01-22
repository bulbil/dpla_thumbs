// test dpla thing
// should take a simple search and return thumbs

var apiKey = '2620eebbca447b21a05739e663e5d788';

var baseURL = 'http://api.dp.la/v2/items?q=';

$("#search input[type=submit]").on('click', function() { 

	var input = $('#search input[type=text]')[0].value;

	dpla.search(input);

});


var dpla = {

	search: function(str){

		var url = baseURL;
		url	+= str;
		url	+= '&api_key=' + apiKey;

		$.ajax({

	        type: 'GET',
	        url: url,
	        async: false,
	        // jsonpCallback: 'JSON_CALLBACK',
	        // contentType: "application/json",
	        dataType: 'json',
	        success: function() {
	        	console.log('fire');
	        },
	        error: function(e) {
	            console.log(e.message);
	        }
	    });

	}


}