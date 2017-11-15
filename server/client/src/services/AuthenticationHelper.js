import decode from 'jwt-decode';

export function getToken() {
  // Retrieves the user token from localStorage
  return localStorage.getItem('id_token')
}

export function setLocalStorage(response) {
  // Saves user token to localStorage
  localStorage.setItem('id_token', response.token)
  localStorage.setItem('role', response.role)
  localStorage.setItem('username', response.username)
  localStorage.setItem('account_name', response.account)
}

export function logout() {
  // Clear user token and profile data from localStorage
  localStorage.removeItem('id_token');
  localStorage.removeItem('role');
  localStorage.removeItem('username');
  localStorage.removeItem('account_name');
}

export function signIn(username, password) {
  const path = `/api/authenticate`
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  const body = JSON.stringify({
    username,
    password
  });
  const init = {
    method: 'POST',
    headers: headers,
    body: body
  }
  const POSTrequest = new Request(path, init);
  return fetch(POSTrequest)
    .then((result)=> result.json())
    .then((jsonResult) => {
      if (jsonResult.success) {
        setLocalStorage(jsonResult)
        console.log("Logged in")
        return Promise.resolve(jsonResult);
      }
      else {
        // throw 'jsonResult'
        return Promise.reject(jsonResult);
      }
    })
}

export function getProfile() {
  // Using jwt-decode npm package to decode the token
  return console.log(decode(getToken()));
}

export function isTokenExpired(token) {
  const current_time = new Date().getTime() / 1000;
  try {
    const jwt = decode(token);
    if (jwt.exp < current_time) { // Checking if token is expired. N
      return true;
    }
    else
      return false;
  }
  catch (err) {
    return false;
  }
}

export function requestDemo(params) {
  const domain = 'http://localhost:3001'
  const path = `/api/signup`
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  const {fullname, company, phone, email} = params
  const body = JSON.stringify({
    fullname,
    company,
    phone,
    email
  });
  const init = {
    method: 'POST',
    headers: headers,
    body: body
  }
  const POSTrequest = new Request(path, init);
  return fetch(POSTrequest)
    .then((result)=> result.json())
    .then((jsonResult) => {
      console.log(jsonResult)
    })
}


// export function fetch(url, options) {
//   // performs api calls sending the required authentication headers
//   const headers = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }

//   // Setting Authorization header
//   // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
//   if (this.loggedIn()) {
//     headers['Authorization'] = 'Bearer ' + this.getToken()
//   }

//   return fetch(url, {
//     headers,
//     ...options
//   })
//     .then(this._checkStatus)
//     .then(response => response.json())
// }

// export function _checkStatus(response) {
//   // raises an error in case response status is not a success
//   if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
//     return response
//   } else {
//     var error = new Error(response.statusText)
//     error.response = response
//     throw error
//   }
// }