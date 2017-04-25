var tubeUrl = 'https://www.googleapis.com/youtube/v3/search'


function search(q, callback) {
	var settings = {
		url: tubeUrl,
		data: {
			q: q,
			part: 'snippet',
			key: 'AIzaSyC1X5YMRMTXWAxSXyEWLAVJtI4Lzd5JDXk'
		},
		dataType: 'json',
		type: 'GET',
		success: callback
	};
	$.ajax(settings);
}

function displayResults(input) {
	var searchResults = '';
	if (input.items) {
		input.items.forEach(function(item) {
		 searchResults += '<p><img src="' + item.snippet.thumbnails.medium.url + '"></p>';
		});
	}
	else {
		searchResults += '<p>No results</p>';
	}

	$('.js-search-results').html(searchResults);
}

	$(function() {
		$('.js-search-form').submit(function(e) {
		e.preventDefault();
		var q = $(this).find('.js-query').val();
		search(q, displayResults);
	});
});
