import clienteAxios from "./axios";

export const fetcher = (url) =>
    clienteAxios.get(url).then(res => res.data)