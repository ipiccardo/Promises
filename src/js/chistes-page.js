import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro;
let olList;

const crearChistesHtml = () => {
  const html = `  <h1 class="mt-5">Chistes</h1>
    <hr />
    <button class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-group">
    </ol>`;

  const divChistes = document.createElement("div");
  divChistes.innerHTML = html;

  body.append(divChistes);
};

const eventos = () => {
  olList = document.querySelector("ol");
  btnOtro = document.querySelector("button");

  let numChiste = 1;
  btnOtro.addEventListener("click", async () => {
    dibujarChiste(await obtenerChiste(), numChiste++);
    console.log("Hola Mundo");
  });
};

const dibujarChiste = ({ id, value }, numChiste) => {
  const olItem = document.createElement("li");

  olItem.innerHTML = `${numChiste} <b>${id}</b>: ${value}`;
  olItem.classList.add("list-group-item");
  olList.append(olItem);
};

export const init = () => {
  crearChistesHtml();
  eventos();
};
