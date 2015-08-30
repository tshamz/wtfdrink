(function(wtfFacebook, undefined) {

  // Private
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      document.getElementById('js-state-fb-login-status').style.display = 'none';
    }
  }

  // Public
  wtfFacebook.checkLoginState = function() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '614158375329555',
      xfbml      : true,
      version    : 'v2.2',
      status     : true
    });
    FB.getLoginStatus(function(response) {
      var facebookState = {
        "loginStatus": response.status,
        "userID": response.authResponse.userID,
        "accessToken": response.authResponse.accessToken
      };
      Main.page.state.facebook = facebookState;
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

}(window.wtfFacebook = window.wtfFacebook || {}));
