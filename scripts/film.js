function Film(title, runLength, rating, description, comment, character) {
    this.title = title;
    this.runLength = runLength;
    this.rating = rating;
    this.description = description;
    this.comment = comment;
    this.character = character;
}

Film.prototype.setTitle = function(title) {
    this.title = title;
}

Film.prototype.setRunLength = function(runLength) {
    this.runLength = runLength;
}

Film.prototype.setRating = function(rating) {
    this.rating = rating;
}

Film.prototype.setDescription = function(description) {
    this.description = description;
}

Film.prototype.setComment = function(comment) {
    this.comment = comment;
}

Film.prototype.setCharacter = function(character) {
    this.character = character;
}

Film.prototype.getTitle = function() {
    return this.title;
}

Film.prototype.getRunLength = function() {
    return this.runLength;
}

Film.prototype.getRating = function() {
    return this.rating;
}

Film.prototype.getCharacter = function() {
    return this.character;
}

Film.prototype.getComment = function() {
    return this.comment;
}

//

function Character(name, actor) {
    this.name = name;
    this.actor = actor;
}

Character.prototype.setName = function(name) {
    this.name = name;
}

Character.prototype.setActor = function(actor) {
    this.actor = actor;
}

Character.prototype.getName = function(name) {
    return this.name;
}

Character.prototype.getActor = function(actor) {
    return this.actor;
}

//

function Comment(user, text) {
    this.user = user;
    this.text = text;

}

Comment.prototype.setUser = function(user) {
    this.user = user;
}

Comment.prototype.setText = function(text) {
    this.text = text;
}

Comment.prototype.getUser = function(user) {
    return this.user;
}

Comment.prototype.getText = function(text) {
    return this.text;
}

Film.prototype.addComment = function(comment) {
    this.comment.push(comment);
}
Film.prototype.addCharacter = function(character) {
    this.character.push(character);
};

var f = new Film("The Big Lebowski", 152, 8.3, "Lorem Ipsum", [], []);
f.setTitle("The Big Lebowski");
f.setRunLength(152);
f.setRating(8.3);
f.setDescription("Lorem Ipsum");
f.setComment([]);
f.setCharacter([]);

var com = new Comment({"alias":"Prometheus", "firstname": "Jaime", "lastname": "Lannister"}, "Better Movie");
var c = new Character({"name": "Man in glasses", "actor": {"firstname": "Jeff", "lastname": "Dunham"} });

f.addComment(com);
f.addCharacter(c);





var film = {

    "title": "Stalker",
    "runLength": 162,
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
                  + "<tr><td><h3>" + film.runLength + "</h3>" + "</td></tr>"
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
document.write("<p>" + f.getTitle() + " " + f.getRunLength() + " " + f.getRating() + " " + f.get + " " + f.getCharacter() + " " + f.getComment() + "</p>");