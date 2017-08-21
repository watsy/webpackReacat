export default function (url, value) {
  const config = {
    method: 'post',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify(value)
  }
 return fetch(url, Object.assign({}, config)).then(res => {
        return res.json()

    }).then(data => {
      if (data.code === 302) {
        window.location.href = data.msg
        return false
      }
      return data
    })
}