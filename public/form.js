
  var openLogin = new Event('openLogin')
    , openSignin = new Event('openSignin')
    , signinButton = document.getElementsById('signin-button')
    , signinForm = document.getElementsById('signin')
    , loginButton = document.getElementById('login-button')
    , openLoginForm = function OpenLoginForm() {
      window.dispatchEvent(openLogin)
    }
    , openSigninForm = function OpenSigninForm() {
      window.dispatchEvent(openSignin)
    }

  window.addEventListener('openLogin', function (e) {
    signinForm.addClass('hide');
    signinButton.addClass('hide');
  }, false)

  window.addEventListener('openSignin', function (e) {

    loginButton.addClass('hide');
  }, false)
