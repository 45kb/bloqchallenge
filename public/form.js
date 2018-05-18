  var openLogin = new Event('openLogin')
    , openSignin = new Event('openSignin')
    , launchSignin = new Event('launchSignin')
    , launchLogin = new Event('launchLogin')
    , signinButton = document.getElementById('signin-button')
    , signinForm = document.getElementById('signin')
    , loginButton = document.getElementById('login-button')
    , loginOption = document.getElementById('login-option')
    , signinOption = document.getElementById('signin-option')
    , loginError = document.getElementById('login-error')
    , loginErrorSpan = document.getElementById('login-error').getElementsByTagName('div')[0]
    , signinErrorSpan = document.getElementById('signin-error').getElementsByTagName('div')[0]
    , signinError = document.getElementById('signin-error')
    , launchTheLogin = function () {
      window.dispatchEvent(launchLogin)
    }
    , launchTheSignin = function () {
      window.dispatchEvent(launchSignin)
    }
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
    signinError.classList.add('hide')
    loginError.classList.add('hide')

    signinForm.classList.remove('show')
    signinButton.classList.remove('show')

    signinOption.classList.remove('active')
    loginOption.classList.add('active')

    loginButton.classList.add('show')
  }, false)

  window.addEventListener('openSignin', function (e) {
    signinError.classList.add('hide')
    loginError.classList.add('hide')

    signinForm.classList.add('show')
    signinButton.classList.add('show')

    signinOption.classList.add('active')
    loginOption.classList.remove('active')

    loginButton.classList.add('hide')
    loginButton.classList.remove('show')
  }, false)

  window.addEventListener('launchSignin', function (e) {
    signinError.classList.remove('hide')
    signinErrorSpan.innerText = "Error in a field!"
  }, false)
  window.addEventListener('launchLogin', function (e) {
    loginError.classList.remove('hide')
    loginErrorSpan.innerText = "Error in a field!"
  }, false)
