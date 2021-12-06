export function get(url: string) {
  return fetch(url).then((r) => r.json());
}
export function post(url: string, params: { [key: string]: any }, config?: { [key: string]: any }) {
  return fetch(url, {
    method: "post",
    headers: Object.assign({}, config || {}),
    body: JSON.stringify(params || {}),
  });
}
const Http = {
  get: get,
  post: post,
};

export default Http;
