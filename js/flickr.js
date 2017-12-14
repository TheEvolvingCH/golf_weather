$(document).ready(function () {
  $(document).on('click', '.decisionButton', function () {
    let button = $(this).val();
    if (button === "Nah, I'm Good") {
      var flickrAPI = "https://cors-anywhere.herokuapp.com/http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
      var flickrOptions = { 
        tags: "golf course",
        format: "json",
      };
      function displayPhotos(data) {
        let photoHTML = `<h2>Ok then, here are some golf course photos to get you by...</h2>`;
        photoHTML += `<div class="photos">`;
        $.each(data.items, function (i, photo) {
          photoHTML += '<a href= "' + photo.link + '" class="image">';
          photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        });
        photoHTML += `</div>`;
        $('#app').html(photoHTML);
      }
      $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    }
  }); //end handler           
}); //end ready