function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    document.getElementById('g-signin2').style.display="none";
    document.getElementById('data').style.display="block";

    document.getElementById('pic').setAttribute('src',profile.getImageUrl());
    document.getElementById('email').textContent = profile.getEmail();
}

function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        alert("You've been successfully signed out");
        document.getElementById('g-signin2').style.display="block";
        document.getElementById('data').style.display="none";
    })
}