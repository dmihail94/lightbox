var mainCaption = ["Hay Bales", "Lake", "Canyon", "Iceberg", "Desert", "Fall", "Plantation", "Dunes", "Countryside Lane", "Sunset", "Cave", "Bluebells"];
var secondCaption = [
  "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
  "The lake was so calm today. We had a great view of the snow on the mountains from here.",
  "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
  "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
  "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
  "Fall is coming, I love when the leaves on the trees start to change color.",
  "I drove past this plantation yesterday, everything is so green!",
  "My summer vacation to the Oregon Coast. I love the sandy dunes!",
  "We enjoyed a quiet stroll down this countryside lane.",
  "Sunset at the coast! The sky turned a lovely shade of orange.",
  "I did a tour of a cave today and the view of the landscape below was breathtaking.",
  "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
];

var img = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];




var thumbs = $('.thumb');
var lenThumbs = thumbs.length;
var overlay = $('.overlay')[0];

//left Arrow
var leftA = $('.leftA');
//right Arrow
var rightA = $('.rightA');

//iterate throught all thumbs from the DOM
for (let i = 0; i < lenThumbs; i++) {

  //When the i`th thumb is clicked display the i`th overlay
  $(thumbs[i]).click(function() {
    //the value of index become the index of the thumb clicked
    let index = i;
    //set the src for the image from overlay
    $(overlay).find('img').attr('src', 'photos/' + img[i] + '.jpg');

    //set the text for main caption
    $(overlay).find('.maincaption').html(mainCaption[i]);
    //set the text for second caption
    $(overlay).find('.secondcaption').html(secondCaption[i]);
    //show the overlay when the thumb is clicked
    $(overlay).show('fast');

    //event for left arrow
    $(leftA).click(prev);

    //event for right arrow
    $(rightA).click(next);
    //Mobile swipe left
    $(overlay).on('swipeleft', prev);
    //Mobile swipe right
    $(overlay).on('swiperight', next);


    //next overlay
    function next() {

      //when right arrow is clicked and if the last overlay is displayed then the next item showed become the first overlay
      if (index >= lenThumbs - 1) {
        index = 0;
      } else {
        index++;
      }

      $(overlay).find('img').attr('src', 'photos/' + img[index] + '.jpg');
      $(overlay).find('.maincaption').html(mainCaption[index]);
      //set the text for second caption
      $(overlay).find('.secondcaption').html(secondCaption[index]);
    }

    //previous overlay
    function prev() {

      //when left arrow is clicked and if the first overlay is displayed then the previous item showed become the last overlay
      if (index <= 0) {
        index = lenThumbs - 1;
      } else {
        index--;
      }

      $(overlay).find('img').attr('src', 'photos/' + img[index] + '.jpg');
      $(overlay).find('.maincaption').html(mainCaption[index]);
      $(overlay).find('.secondcaption').html(secondCaption[index]);
    }

  }); //end event thumb clicked

} //end for

//When the img from the overlay is clicked, hide the overlay
$(overlay).children('img').click(function() {
  $(overlay).hide('fast');
});

function search() {

  // value of searched
  var searchField = $('.search').val().toLowerCase();
  var myExp = new RegExp('^' + searchField, "i");

  // show or hide based on the 'ALT' attribute
  $('.thumb').each(function() {
    if ($(this).attr('alt').search(myExp) != -1) {
      $(this).show("slow");
    } else {
      $(this).hide();
    }

  });

}

$('.search').keyup(search);

//When the document is load set the value of search input to empty string
$(document).ready(function() {
  $('.search').val('');

});
