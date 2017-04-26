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
		 searchResults += '<p><a href="https://www.youtube.com/watch?v=' + item.id.videoId + '" rel="prettyPhoto" title="' + item.snippet.title +'">' + '<img src="' + item.snippet.thumbnails.medium.url + '" alt="youtube" width="200"></a></p>';
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
