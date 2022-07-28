// const jokeUrl = "https://api.chucknorris.io/jokes/random";

import { init } from "./js/chistes-page";
import { obtenerUsuarios } from "./js/http-provider";
import { init2 } from "./js/usuarios-page";

obtenerUsuarios().then();

// fetch(jokeUrl).then((resp) => {
// CON EL .json le decimos a la promesa que estraiga el body en formato JSON
//   resp.json().then(({ id, value }) => {
//     console.log(id);
//     console.log(value);
//   });
// });

// fetch(jokeUrl).then((resp) => {
//   resp.json().then(({ id, value }) => console.log(id, value));
// });

// import { obtenerChiste } from "./js/http-provider";

// obtenerChiste().then(console.log);

init();

init2();

//TOMA TODO LO QUE ESTA EN EL ARCHIVO Y LLAMALO COMO UN OBJETO LLAMADo CRUD
import * as CRUD from "./js/crud-provider";

CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
  name: "Iván",
  job: "Psicólogo",
}).then(console.log);

CRUD.actualizarUsuario(
  {
    name: "Florencia",
    job: "Psicóloga",
  },
  2
).then(console.log);

CRUD.eliminarUsuario(2).then(console.log);
