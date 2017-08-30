
var row = 1;

function Multiply(row) {

    var row = 1;

    for(row; row <= 20; row++) {

        document.write("<tr>");
        for (var i = 1; i <= 50; i++) {

            if (i === 1) {
                document.write("<th>" + 1 * row + "</th>");
            } else {

            document.write("<td>" + i * row + "</td>");
        }
    }

        /*if (i === 1) {
                document.write("<tr>");
            for (var j = 1; j <= 10; j++) {
                document.write("multiplier");
            }
            document.write("</tr>");
        }*/


        document.write("</tr>");



    }
}

Multiply(row);