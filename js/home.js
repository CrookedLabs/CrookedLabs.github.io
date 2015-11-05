$(function () {

    var crooked = $('.crooked'),
        presidential = $('.presidential'),
        birthday = $('.birthday'),
        shotrandomizer = $('.shotrandomizer'),
        close = $('.close');

    close.on('click', function () {
      $(this).parent('.show').removeClass('show').addClass('hide');
      setTimeout(function() {
        crooked.removeClass('back');
      }, 500);
    });

    $('#project-list li').on('click', function () {
      console.log($(this).attr('id'));
      var id = $(this).attr('id');
      crooked.addClass('back');
      setTimeout(function() {
        var el = $('.' + id).removeClass('hide').addClass('show');
      }, 500);
    });
  });
