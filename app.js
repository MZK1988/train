// var config = {
//     apiKey: "AIzaSyCagBskWkOB85dUjQo8y_Q1LvTA4iVVnoo",
//     authDomain: "eetimesheet.firebaseapp.com",
//     databaseURL: "https://eetimesheet.firebaseio.com",
//     projectId: "eetimesheet",
//     storageBucket: "",
//     messagingSenderId: "709285101569"
// };
// firebase.initializeApp(config);


alert("hello");







$("#submitOne").on("click", function () {

    
    event.preventDefault();
    var eeName = $("#eeName").val()
    var eeRole = $("#eeRole").val()
    var eestartDate = $("#eestartDate").val()
    var eemonthlyRate = $("#eemonthlyRate").val()
    
    
    console.log(eeName);
    console.log(eeRole);
    console.log(eestartDate);
    console.log(eemonthlyRate);

    $("#currentEmployees").append("<tbody><tr><th>" + eeName.trim() + "</th><th>" + eeRole.trim() + "</th><th>" + eestartDate.trim() + "</th><th>" + eemonthlyRate.trim() + "</th></tr></tbody>")


});

