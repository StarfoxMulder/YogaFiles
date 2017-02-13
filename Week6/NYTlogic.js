
var apiKey = "771ae04713df42bd960af3d8c1afa625";

var searchTerm = "";
var numRecords = "";
var startYear = "";
var endYear = "";
var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;


$('#search').click( function() {
	$('form').submit();
});

$('form').submit( function() {
	
	$.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
        	for(var i = 0; i < numRecords; i++) {

            // populating each response
            var  = $('table').children().eq(1).children('tr').eq(0).children('td');

            firstRowTds.eq(0).text(response.Title);

            firstRowTds.eq(1).text(response.Author);

            firstRowTds.eq(2).text(response.Date);
        };
    };
})


