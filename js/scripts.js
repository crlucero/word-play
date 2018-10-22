$(document).ready(function() {
  $("#formOne").submit(function() {

        var sentence1 = $('input#sentence1').val();
        var words = sentence1.split(' ');

        var sentences = words.map(function(word) {
          if (word.length >= 3) {
            return word;
          }
        });
        sentences=(sentences.reverse().join(' '));

        $('#sentence').text(sentences);
        $("#story").show();

    event.preventDefault();
  });
});
