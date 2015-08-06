$(function() {

  $('.delete-article').click(function(e) {
    e.preventDefault();
    var articleToDelete = $(this);

    $.ajax({
      url: articleToDelete.attr('href'),
      method: 'DELETE'
    }).done(function(data) {
      if (data.msg === 'OK') {
        articleToDelete.parent().remove();
      }
    });
  });

});