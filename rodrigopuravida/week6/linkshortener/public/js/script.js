$(function() {
  $('.delete-article').click(function(e) {
    var deleteButton = $(this);

    e.preventDefault();
    $.ajax({
      url: $(this).attr("href"),
      method: "DELETE"
    }).done(function() {
      // hacky, but it does the job with arrays
      window.location.href = "/articles";
    });
  });
});