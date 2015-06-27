var diglettUrl = "https://fc06.deviantart.net/fs70/f/2010/165/9/4/050___Diglett_by_cammarin.png";

function initiateDiglettFuckdown () {
  paintItDiglett();
  stubLinksWithDiglett();
}

function stubLinksWithDiglett () {
  $(document).on('click', 'a, button', function (e) {
    e.preventDefault();
    diglettAlert();
  });
  $(document).on('submit', function (e) {
    e.preventDefault();
    diglettAlert();
  });
}

function paintItDiglett () {
  $('img').attr('src', diglettUrl);
  $('a').text('DIGLETT');
  $('*').each(function(i, element) {
    var width = $(element).width();
    $(element).css({
      'backgroundImage' : 'url(' + diglettUrl + ')',
      'backgroundSize' : width / 10
    });
  });
}

function diglettAlert () {
  swal({
    title : 'canadancer!',
    text : 'did you choose this one???',
    imageUrl : diglettUrl
  });  
}