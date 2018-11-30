$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyAIO2AQ2iV2XtXgOgSQDyX9bCwGOV7iCXc",
        authDomain: "bike-my-ride.firebaseapp.com",
        databaseURL: "https://bike-my-ride.firebaseio.com",
        projectId: "bike-my-ride",
        storageBucket: "bike-my-ride.appspot.com",
        messagingSenderId: "171797017102"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    var email = "";

    $("#add-user").on("click", function (event) {

        event.preventDefault();

        email = $("#email-input").val().trim();
        alert(email);
        database.ref().push({
            email: email,
        });

    });

    database.ref().on("value", function (snapshot) {

        console.log(snapshot.val());
        console.log(snapshot.val().email);

        $("#email-display").text(snapshot.val().email);

    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });

});