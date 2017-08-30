var film = {

    "title": "Stalker",
    "runlength": 162,
    "rating": 8.1,
    "description": "A guide leads two men through an area known" +
    " as the Zone to find a room that grants wishes.",
    "comments": [
        {"user":
            {"alias": "Prometheus", "firstname": "Simon", "lastname": "Vanleeuw"},
            "text": "Good Movie."
        },{"user":
            {"alias": "Prometheus", "firstname": "Simon", "lastname": "Vanleeuw"},
            "text": "Good Movie."
        },{"user":
            {"alias": "Prometheus", "firstname": "Simon", "lastname": "Vanleeuw"},
            "text": "Good Movie."
        },{"user":
            {"alias": "Prometheus", "firstname": "Simon", "lastname": "Vanleeuw"},
            "text": "Good Movie."
        },
    ],
    "character": [
        {
            "name": "Stalker",
            "actor": {
            "firstname": "Aleksandr",
            "lastname": "Kaydanovski",
        }
        }
    ]
};

function printFilmArrayUser(array) {
    for (var i = 0; i < array.length; i++) {
        document.write("<tr><td>" + array[i].text + " " + array[i].user.alias + " " + array[i].user.firstname + " " + array[i].user.lastname + "</td></tr>");
    }
}

function printFilmArrayCharacter(array) {
    for (var i = 0; i < array.length; i++) {
        document.write("<tr><td>" + array[i].name + "<br/>" + array[i].actor.firstname + "<br/>" + array[i].actor.lastname + "</td></tr>");
    }
}


function printFilm() {
    document.write("<table>");
    document.write( "<tr><td><h1>" + film.title + "</h1>" + "</td></tr>"
                  + "<tr><td><h3>" + film.runlength + "</h3>" + "</td></tr>"
                  + "<tr><td><h3>" + film.rating + "</h3>" + "</td></tr>"
                  + "<tr><td><p>" + film.description + "</p>" + "</td></tr>"

        );

                    printFilmArrayUser(film.comments);
                    printFilmArrayCharacter(film.character);

    document.write("</table>");

                  //+ "<p>" + film.character.join(",") + "</p>" + "<br/>"
    //+ "<p>" + film.comments[0].user.firstname + "</p>" + "<br/>"

}

//document.write(film.title + " " + film.runlength + " " + film.rating + " " + film.description);

printFilm();