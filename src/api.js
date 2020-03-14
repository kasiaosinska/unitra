export function get(endpoint, body, options) {
  return request('get', endpoint, body, options);
}

export function post(endpoint, body, options) {
  return request('post', endpoint, body, options);
}

export function put(endpoint, body, options) {
  return request('put', endpoint, body, options);
}

export function deleteRequest(endpoint, options) {
  return request('delete', endpoint, null, options);
}

function request(method, endpoint, body = null, options = {}) {
  const fullUrl = `localhost:7555${endpoint}`;

  const token = localStorage.getItem('token');

  return fetch(fullUrl, {
    method: method,
    headers: {
      Accept: 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...options,
    },
    body,
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
