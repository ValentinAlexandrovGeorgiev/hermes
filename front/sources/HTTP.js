import fetch from 'isomorphic-fetch'

class HTTP {
  post (url, body) {
    const _body = JSON.stringify(body)

    return fetch(url, {
      method: 'POST',
      body: _body,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return {
        json: res.json(),
        ok: res.ok
      }
    })
  }

  put (url, body) {
    const _body = JSON.stringify(body)

    return fetch(url, {
      method: 'PUT',
      body: _body,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return {
        json: res.json(),
        ok: res.ok
      }
    })
  }

  get (url) {
    return fetch(url, {
      method: 'get',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=86400',
        Authorization: 'Basic YWRtaW46YWRtaW4xMjM0NTY3ODk='
      }
    }).then(res => {
      return res.json()
    }).then((json) => {
      return json
    }).catch(err => {
      return {
        errorObject: err
      }
    })
  }

  delete (url) {
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return {
        json: res.json(),
        ok: res.ok
      }
    })
  }

  addParameters (url, data) {
    const dataKeys = Object.keys(data)
    let params = ''
    dataKeys.map((key) => {
      if (data[key] !== undefined) {
        params += `${key}=${data[key]}&`
      }
    })
    if (url.includes('?')) {
      url = `${url}&${params.slice(0, -1)}`
    } else {
      url = `${url}?${params.slice(0, -1)}`
    }
    return url
  }
}

export default new HTTP()
