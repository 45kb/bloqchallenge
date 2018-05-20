  var WS_URL = "http://localhost:3000"
    , openLogin = new Event('openLogin')
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
    , getSecret = function () {

      var url = WS_URL + "/challenge"
        , xhr = new XMLHttpRequest()

      xhr.open('GET', url, true)
      xhr.setRequestHeader("Authorization", "Bearer: " + window.localStorage.jwt)
      xhr.addEventListener('load', function() {
        var responseObject = this.response
        if (this.responseText === 'congratz!') {
          window.alert("LOGGED IN!")
          launchLoginSuccess()
        } else {
          window.alert("NOPE!!!! must be ----> email:pippo, password:user")
          enableCursor()
        }
      })

      xhr.send(null)
    }
    , login = function () {
      var loginUrl = WS_URL + "/login"
        , xhr = new XMLHttpRequest()
        , formData = JSON.parse(getFormData())
        , sendObject = JSON.stringify({
          user: formData.email,
          password: formData.password
        })

      xhr.open('POST', loginUrl, true)
      xhr.setRequestHeader('Content-Type', 'application/json charset=UTF-8')
      xhr.addEventListener('load', function() {
        var responseObject = JSON.parse(this.response)
        console.log(responseObject)
        if (responseObject.token &&
          formData.email === responseObject.user &&
          formData.password === responseObject.role) {
          window.localStorage.jwt = responseObject.token
        } else {
          window.localStorage.jwt = "none"
        }
        getSecret()
      })

      console.log('going to send', sendObject)

      xhr.send(sendObject)
    }
  //listen for login success
  window.addEventListener('loginSuccess', function (e) {
    enableCursor()
    window.confirm("Form validation needed, anyways... click ok!")
    authImg.classList.add('success')
    formBody.innerHTML = getFormData() + "<div><br/><br/>Log in end!</div>"
  })
  //listen for signin success
  window.addEventListener('signinSuccess', function (e) {
    enableCursor()
    window.confirm("Form validation needed, anyways... click ok!")
    authImg.classList.add('success')
    formBody.innerHTML = getFormData() + "<div><br/><br/>Sign in end!</div>"
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
    }, 500)
  }, false)
  //listen for login start (click on login button)
  window.addEventListener('launchLogin', function (e) {
    disableCursor()
    loginError.classList.remove('hide')
    loginErrorElement.innerText = "Error in a field!"
    login()
  }, false)
