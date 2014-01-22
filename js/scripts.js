// test dpla thing
// should take a simple search and return thumbs

var apiKey = '2620eebbca447b21a05739e663e5d788';

var baseURL = 'http://api.dp.la/v2/items?q=';

$.getJSON('http://api.dp.la/v2/items?q=chunk&api_key=2620eebbca447b21a05739e663e5d788', function(d) {

	console.log('what');
});


$('#search').submit(function(e) {

	e.preventDefault();

	var input = $('#search input[type=text]').val();
	console.log(input);

	dpla.search(input);

});

var dpla = {

	search: function(str){

		var dpla = baseURL
			+ str
			+ '&api_key=' + apiKey;

		console.log(dpla);

		$.getJSON(dpla, function(data) {

			console.log('fire');

		});

		// $.ajax({

	 //        type: 'GET',
	 //        url: url,
	 //        // jsonpCallback: 'JSON_CALLBACK',
	 //        contentType: "application/json",
	 //        dataType: 'json',
	 //        success: function(data) {
	 //        	console.log('fire');
	 //        },
	 //        error: function(e) {
	 //            console.log(e.message);
	 //        }
	 //    });

	}


}