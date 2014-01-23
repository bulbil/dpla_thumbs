// test dpla thing
// should take a simple search and return thumbs

var apiKey = '2620eebbca447b21a05739e663e5d788',
baseURL = 'http://api.dp.la/v2/items?q=',
page = 1;

$('.tooltip').tooltip();

$('#search').submit(function(e) {

	e.preventDefault();

    page = ($('#thumbs ul li').length == 0) ? 1 : page + 1; 
    $('#thumbs ul li').remove();

	var input = $('#search input[type=text]').val();

	dpla.search(input, page);

});

var dpla = {

	search: function(str, int){
		
		data = { 	
			'q': str, 
    		'api_key': apiKey,
    		'page_size': 10,
    		'page': int
	        	};

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
	
					$('#results h3').css('display', function() { return ($('#thumbs ul li').length == 0) ? 'visible' : 'none'; });

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