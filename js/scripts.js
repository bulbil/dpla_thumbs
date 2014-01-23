// test dpla thing
// should take a simple search and return thumbs

var apiKey = '2620eebbca447b21a05739e663e5d788',
baseURL = 'http://api.dp.la/v2/items?q=',
page = 1;

$('.tooltip').tooltip();

$('#search').submit(function(e) {

	e.preventDefault();

	var input = $('#search input[type=text]').val();

	dpla.search(input);

});

var dpla = {

	search: function(str){
		
		data = { 	
			'q': str, 
    		'api_key': apiKey,
    		'page_size': 10,
    		'page': page
	        	};

		page = ($('#thumbs ul li').length == 0) ? 2 : page + 1;

		console.log(page);

		var url = baseURL
			+ str;

		$.ajax({

	        type: 'GET',
	        url: url,
	        data: data,
	        dataType: 'jsonp',
	        success: function(data) {

				var count = (data.count > 0) ? data.count + ' results' : 'no results';
				$('#count h1').text(count);

	        	$.each(data.docs, function(i,d) {

	        		if(d.object) {

						$('#thumbs ul').append('<li>');
						var thumb = $('#thumbs li').last();
						thumb.append('<a><img>');
						thumb.children('a').attr( {'href': d.isShownAt, 'target': 'blank'});		
						thumb.find('a img').attr('src', d.object);
						thumb.tooltip({'title': d.sourceResource.title, 'placement': 'auto bottom'});
					}
		        });
	        },
	        error: function(e) {
	            console.log(e.message);
	        }
	    });

	}
}