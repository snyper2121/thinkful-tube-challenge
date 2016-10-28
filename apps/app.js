$(function(){
  
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });

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

      var rootUrl = "https://www.youtube.com/";



      for(var item of data.items) {
        results += '<div><ul>' + '<h1>' + item.snippet.title + '</h1>' + '<a href="' + rootUrl;  
   
        if(item.id.kind === 'youtube#video'){
          results += '/watch?v=' + item.id.videoId;
        } 

        if(item.id.kind === 'youtube#channel'){
          results += 'channel/' + item.id.channelId;
        }

        results += '"><img src='  + item.snippet.thumbnails.high.url + '></a></ul></div>';
        console.log(item);
      }

      $('#search-results').html(results);
    });


  }


 // getRequest(document.getElementById('query').value);
 
  function renderVideoOrChannel(youtubeItem){
    if(youtubeItem.id.kind === 'youtube#video'){
          '<a href=""></a>';
          results += '/watch?v=' + item.id.videoId;
        } 

        if(youtubeItem.id.kind === 'youtube#channel'){
          results += 'channel/' + item.id.channelId;
        }
  }


});




