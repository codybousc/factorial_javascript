var factorial = function(number) {
  if ((number === 0) || (number === 1)) {
    return 1;
  }
  result = 1;
  for(var index = number; index >= 1; index -= 1) {
    var result = result * (index);
  }
  return result;
};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $(".number").text(number);

    $("#number").show();

    $(".number2").text(result);

    $("#result").show();

    event.preventDefault();
  });
});
