export class HttpRequest<T> {
  api = import.meta.env.VITE_API_URL;
  path: string;
  headers = new Headers();

  constructor(config: { api?: string; headers?: Headers; path: string }) {
    if (config.api) this.api = config.api;
    if (config.headers) this.headers = config.headers;
    this.path = config.path;
  }

  get(id?: string) {
    const find = id ? `/${id}` : "";
    return fetch(`${this.api}${this.path}${find}`, {
      headers: this.headers,
    }).then((r) => r.json());
  }

  post(data: T) {
    return fetch(`${this.api}${this.path}`, {
      headers: this.headers,
      method: "POST",
      body: data as any,
    }).then((r) => r.json());
  }

  put(id: string, data: Partial<T>) {
    return fetch(`${this.api}${this.path}/${id}`, {
      headers: this.headers,
      method: "PUT",
      body: data as any,
    }).then((r) => r.json());
  }

  delete(id: string) {
    return fetch(`${this.api}${this.path}/${id}`, {
      headers: this.headers,
      method: "DELETE",
    }).then((r) => r.json());
  }
}
