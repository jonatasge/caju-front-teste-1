export class HttpRequest<T> {
  api = import.meta.env.VITE_API_URL;
  path: string;
  headers = new Headers();

  constructor(config: { api?: string; headers?: Headers; path: string }) {
    if (config.api) this.api = config.api;
    if (config.headers) this.headers = config.headers;
    this.path = config.path;

    this.headers.append("Content-Type", "application/json");
  }

  get(id?: string) {
    const _id = id ? `/${id}` : "";
    return fetch(`${this.api}${this.path}${_id}`, {
      headers: this.headers,
    }).then((r) => r.json());
  }

  find(param: string, value: string) {
    return fetch(`${this.api}${this.path}?${param}=${value}`, {
      headers: this.headers,
    }).then((r) => r.json());
  }

  post(data: T) {
    return fetch(`${this.api}${this.path}`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then((r) => r.json());
  }

  put(id: string, data: Partial<T>) {
    return fetch(`${this.api}${this.path}/${id}`, {
      headers: this.headers,
      method: "PUT",
      body: JSON.stringify(data),
    }).then((r) => r.json());
  }

  delete(id: string) {
    return fetch(`${this.api}${this.path}/${id}`, {
      headers: this.headers,
      method: "DELETE",
    }).then((r) => r.json());
  }
}
