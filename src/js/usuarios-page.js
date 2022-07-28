import { obtenerUsuarios } from "./http-provider";

const body = document.body;
let tBodyRef;
let correlativo = 0;

const crearHtml = () => {
  const html = `
  <h1 class="mt-5"> Usuarios</h1>
  <hr />
  
  <table class="table">
  <thead>
  <tr>
  <th scope="col">#</th>
  <th scope="col">email</th>
  <th scope="col">Nombre</th>
  <th scope="col">Avatar</th>
  </tr>
  </thead>
        <tbody>
        </tbody>
        </table>
        `;

  const div = document.createElement("div");
  div.innerHTML = html;
  body.append(div);
  tBodyRef = document.querySelector("tbody");

  // Crear una referencia al TBODY
  // ya que los TRs van dentro del tbody
  // querySelector('tbody');
  // Crear una variable para mantener la referencia?
};

// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
// {
//     "id": 7,
//     "email": "michael.lawson@reqres.in",
//     "first_name": "Michael",
//     "last_name": "Lawson",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
// }

// let numChiste = 1;
// btnOtro.addEventListener("click", async () => {
//   dibujarChiste(await obtenerChiste(), numChiste++);
//   console.log("Hola Mundo");
// });
// };

const crearFilaUsuario = async (usuario) => {
  // En la tabla deben de colocar un correlativo empezando en 1
  // También deben de colocar el avatar
  correlativo++;
  const html = `
  <td scope="col"> ${correlativo} </td>
  <td scope="col"> email: ${usuario.email} </td>
  <td scope="col"> firstName: ${usuario.first_name}  ${usuario.last_name}</td>
  <td scope="col">
  <img class="img-thumbnail" src="${usuario.avatar}">
  </td>
  `;

  const tr = document.createElement("tr");
  tr.innerHTML = html;
  tBodyRef.append(tr);

  // Añadir el table row (tr) dentro del TBody creado anteriormente
};

export const init2 = async () => {
  crearHtml();
  await obtenerUsuarios().then((usuarios) =>
    usuarios.forEach((usuario) => {
      crearFilaUsuario(usuario);

      // OTRA MANERA DE HACERLO ES
      // const usuarios = await obtenerUsuarios();
      // usuarios.forEach(crearFilaUsuario)
    })
  );
  // console.log(await obtenerUsuarios());

  // Obtener la lista de usuarios usando el servicio creado
  // Por cada usuario, llamar la función crearFila (for, forEach)
  // Colocar el init en el index.js, para que se ejecute la creación
};
