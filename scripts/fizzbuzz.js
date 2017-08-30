for (var i = 0; i <= 100; i) {
    i++;

    if (i % 2 !== 0) {
        document.write("<div class='left'>");
    } else {
        document.write("<div class='right'>");
    }

    if (i % 15 === 0) {
        document.write("<h2 class='marked'>FizzBuzz!</h2>");
    } else if (i % 5 === 0) {
        document.write("<h2 class='marked'>Buzz</h2>");
    } else if (i % 3 === 0) {
        document.write("<h2 class='marked'>Fizz</h2>");
    } else {
        document.write("<h2>" + i + "</h2>");
    }

    document.write("</div>");

    document.write("<br/>");

}