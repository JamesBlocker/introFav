$(document).ready(function() {

  $('form').submit(function(event) {
    var fav1 = $('#favorite1').val();
    var fav2 = $('#favorite2').val();
    var fav3 = $('#favorite3').val();
    var myArrays = [fav1, fav2, fav3];
    // myArrays.push("someThing");

    for (var i = 0; i < myArrays.length; i++) {
      $('#list').append('<li>' + myArrays[i] + '</li>');
      alert(myArrays[i]);
    }



$('.f1').text(fav1);
$('.f2').text(fav2);
$('.f3').text(fav3);


    event.preventDefault();
  });
});
