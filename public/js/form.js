  var openLogin = new Event('openLogin')
    , openSignin = new Event('openSignin')
    , launchSignin = new Event('launchSignin')
    , launchLogin = new Event('launchLogin')
    , loginSuccess = new Event('loginSuccess')
    , signinSuccess = new Event('signinSuccess')
    , body = document.body
    , authImg = document.getElementById('auth-img')
    , formBody = document.getElementById('form-body')
    , loginSuccessElement = document.getElementById('login-success')
    , signinSuccessElement = document.getElementById('signin-success')
    , signinButton = document.getElementById('signin-button')
    , signinForm = document.getElementById('signin')
    , loginButton = document.getElementById('login-button')
    , loginOption = document.getElementById('login-option')
    , signinOption = document.getElementById('signin-option')
    , loginError = document.getElementById('login-error')
    , loginErrorElement = document.getElementById('login-error').getElementsByTagName('div')[0]
    , signinErrorElement = document.getElementById('signin-error').getElementsByTagName('div')[0]
    , signinError = document.getElementById('signin-error')
    , getFormData = function () {
      var email = document.getElementById('email').value
        , password = document.getElementById('password').value
        , firstname = document.getElementById('firstname').value
        , lastname = document.getElementById('lastname').value

      return JSON.stringify({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
      })
    }
    , launchLoginSuccess = function () {
        window.dispatchEvent(loginSuccess)
    }
    , launchSigninSuccess = function () {
        window.dispatchEvent(signinSuccess)
    }
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
    , disableCursor = function () {
      body.style = 'pointer-events:none'
    }
    , enableCursor = function () {
      body.style = 'pointer-events:all'
    }

  //listen for login success
  window.addEventListener('loginSuccess', function (e) {
    enableCursor()
    window.confirm("At this point the form errors will stop the user, now we continue to the success event. click ok.")
    authImg.classList.add('success')
    formBody.innerHTML = getFormData() + "<div><br/><br/>Log in end!</div>"
  })
  //listen for signin success
  window.addEventListener('signinSuccess', function (e) {
    enableCursor()
    window.confirm("At this point the form errors will stop the user, now we continue to the success event. click ok.")
    authImg.classList.add('success')
    formBody.innerText = getFormData() + "<div><br/><br/>Sign in end!</div>"
  })
  //listen for form toggle to login mode
    window.addEventListener('openLogin', function (e) {
      signinError.classList.add('hide')
      loginError.classList.add('hide')

      signinForm.classList.remove('show')
      signinButton.classList.remove('show')

      signinOption.classList.remove('active')
      loginOption.classList.add('active')

      loginButton.classList.add('show')
    }, false)
  //listen for form toggle to signin mode
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
  //listen for signin start (click on signin button)
  window.addEventListener('launchSignin', function (e) {
    disableCursor()
    signinError.classList.remove('hide')
    signinErrorElement.innerText = "Error in a field!"
    window.setTimeout(function () {
      launchSigninSuccess()
    }, 1000)
  }, false)
  //listen for login start (click on login button)
  window.addEventListener('launchLogin', function (e) {
    disableCursor()
    loginError.classList.remove('hide')
    loginErrorElement.innerText = "Error in a field!"
    window.setTimeout(function () {
      launchLoginSuccess()
    }, 1000)
  }, false)