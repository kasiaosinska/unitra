export function get(endpoint, body, options) {
  return request('get', endpoint, body, options);
}

export function post(endpoint, body, options) {
  return request('post', endpoint, body, options);
}

function request(method, endpoint, body = null, options = {}) {
  const fullUrl = `http://localhost:7555${endpoint}`;

  const token = sessionStorage.getItem('token');

  return fetch(fullUrl, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...options,
    },
    body: body,
  })
    .then(response => {
      switch (response.status) {
        case 401:
        case 500:
          return { json: { status: response.status }, response };
        case 204:
          return { response };
        default:
          return response.json().then(json => ({ json, response }));
      }
    })
    .then(({ json = {}, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .catch(error => {
      throw error;
    });
}
