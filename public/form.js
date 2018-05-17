  var openLogin = new Event('openLogin')
    , openSignin = new Event('openSignin')
    , signinButton = document.getElementById('signin-button')
    , signinForm = document.getElementById('signin')
    , loginButton = document.getElementById('login-button')
    , loginOption = document.getElementById('login-option')
    , signinOption = document.getElementById('signin-option')
    , openLoginForm = function () {
      window.dispatchEvent(openLogin)
    }
    , openSigninForm = function () {
      window.dispatchEvent(openSignin)
    }
    , showLoaderLogin = function () {
      window.dispatchEvent(showLoaderLogin)
    }
    , showLoaderSignin = function () {
      window.dispatchEvent(showLoaderSignin)
    }

  window.addEventListener('openLogin', function (e) {
    signinForm.classList.remove('show')
    signinButton.classList.remove('show')

    signinOption.classList.remove('active')
    loginOption.classList.add('active')

    loginButton.classList.add('show')
  }, false)

  window.addEventListener('openSignin', function (e) {
    signinForm.classList.add('show')
    signinButton.classList.add('show')

    signinOption.classList.add('active')
    loginOption.classList.remove('active')

    loginButton.classList.add('hide')
    loginButton.classList.remove('show')
  }, false)
