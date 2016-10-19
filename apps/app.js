$(function(){
  
  // $('#search-term').submit(function(event){
  //   event.preventDefault();
  //   var searchTerm = #('#query').val();
  //   getRequest(searchTerm);
  // });

  function getRequest(searchTerm){
    var params = {
      part:'snippet',
      key:'AIzaSyDKsd-8CUeiATvU0BWeKbWEfwQzujnqPac',
      q: searchTerm
    };

    url = 'https://www.googleapis.com/youtube/v3/search'

    $.getJSON(url, params, function(data){
      //console.log(data.items);

      var results = "";

      for(var item of data.items) {
        results += '<div><ul><p>' + item.snippet.title + item.snippet.thumbnails.high.url + '</p></ul></div>';
        console.log(item);
      }

      $('#search-results').html(results);
    });


  }

  getRequest('star wars');

});




// $('#search-term').submit(function(event){
//     event.preventDefault();
//     var searchTerm = $('#query').val();
//     getRequest(searchTerm);
//   });
// });

// function getRequest(searchTerm){
//   var params = {
//     s: searchTerm,
//     r: 'json'
//   };
//   url = 'http://www.omdbapi.com';

//   $.getJSON(url, params, function(data){
//     showResults(data.Search);
//   });
// }

// function showResults(results){
//   var html = "";
//   $.each(results, function(index,value){
//     html += '<div><ul><p>' + item.snippet.title +  + '</p></ul></div>';
//     console.log(value.Title);
//   });
//   $('#search-results').html(html);