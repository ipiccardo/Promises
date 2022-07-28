const jokeUrl = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";

export const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl);

    if (!resp.ok) throw "No se pudo realizar la petición";

    const { icon_url, id, value } = await resp.json();
    return { icon_url, id, value };
  } catch (err) {
    throw err;
  }
};

export const obtenerUsuarios = async () => {
  const resp = await fetch(urlUsuarios);
  const { data: usuarios } = await resp.json();
  return usuarios;
};
