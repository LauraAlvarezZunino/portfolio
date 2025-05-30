function mainContent() {
  let mainElement = document.querySelector("main");
  if (mainElement) {
    mainElement.innerHTML = ""; // hay que limpiar el contenido anterior
    return mainElement;

  }

  // Si no existe, lo crea
  mainElement = document.createElement("main");
  mainElement.classList.add("main");
  document.getElementById("root").appendChild(mainElement);
  return mainElement;
}
document.addEventListener("DOMContentLoaded", () => {
  crearInicio(); // Asegura que se ejecute al cargar
});

function crearHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const sectionHeader = document.createElement("section");
  sectionHeader.classList.add("sectionHeader");

  //const textoHeader = crearTexto("Welcome", "textoHeader");
  //sectionHeader.appendChild(textoHeader);

  const imgnav = document.createElement("img");
  imgnav.classList.add("imgnav");
  imgnav.src = './img/imgnav.png';
  imgnav.alt = 'Foto de nav';


  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const botonSobreMi = crearBoton("About me", crearSobreMi);
  const botonProyectos = crearBoton("Projects", crearProyectos);
  const botonContacto = crearBoton("Contact", crearContacto);
  const botonHome = crearBoton("Home", crearInicio);
  sectionHeader.appendChild(imgnav);
  nav.appendChild(botonHome);
  nav.appendChild(botonSobreMi);
  nav.appendChild(botonProyectos);
  nav.appendChild(botonContacto);

  header.appendChild(sectionHeader);
  header.appendChild(nav);

  document.getElementById("root").appendChild(header);
}
function crearInicio() {
  const main = mainContent();

  const inicio = document.createElement("section");
  inicio.classList.add("inicio"); 

  const contenedorTexto = document.createElement("div");
  contenedorTexto.classList.add("sectionInicio");

  const texto1 = crearTexto("Hi! I'm Laura Alvarez!", "tituloInicio");
  const texto2 = crearTexto(" ", "textoInicio");

  const redes = document.createElement("div");
  redes.classList.add("iconosSociales");
  redes.appendChild(crearImagenConEnlace("https://cdn-icons-png.flaticon.com/512/300/300221.png", "https://www.google.com", "iconoSocial"));
  redes.appendChild(crearImagenConEnlace("https://cdn-icons-png.flaticon.com/512/2111/2111463.png", "https://www.instagram.com", "iconoSocial"));
  redes.appendChild(crearImagenConEnlace("https://cdn-icons-png.flaticon.com/512/174/174857.png", "https://www.linkedin.com", "iconoSocial"));

  contenedorTexto.appendChild(texto1);
  contenedorTexto.appendChild(texto2);
  contenedorTexto.appendChild(redes);

  const img = document.createElement("img");
  img.classList.add("imgInicio");
  img.src = './img/perfil.avif';
  img.alt = 'Foto de perfil';

  const contenedorImagen = document.createElement("div");
  contenedorImagen.classList.add("contenedorImagen");
  contenedorImagen.appendChild(img);

  inicio.appendChild(contenedorTexto);
  inicio.appendChild(contenedorImagen);

  main.appendChild(inicio);
}



function crearSobreMi() {
  const main = mainContent();

  const sobreMi = document.createElement("section");
  sobreMi.classList.add("sobreMi");

  const titulo = crearTexto("About me","tituloSobreMiHeader");

  sobreMi.appendChild(titulo);


  const contenedorImg = document.createElement("div");
  contenedorImg.classList.add("sectionSobremiDos");

  const img = document.createElement("img");
  img.classList.add("imgSobreMi");
  img.src = './img/sobremi.jpg';

  contenedorImg.appendChild(img);


  const contenedorContenido = document.createElement("div");
  contenedorContenido.classList.add("contenidoSobreMi");

  const texto = crearTexto(
    "I am a dedicated and empathetic professional with strong skills in pediatric and neonatal care. Over the years, I have gained significant experience working in high-pressure environments, solving complex problems, and collaborating effectively with multidisciplinary teams to provide high-quality patient care. Currently, I am expanding my knowledge in technology by studying Application Development and Programming, focusing on the integration of innovative solutions to healthcare.",
    "parrafoSobreMi"
  );
  contenedorContenido.appendChild(texto);

  const linea = document.createElement("hr");
  linea.classList.add("lineaHorizontal");
  contenedorContenido.appendChild(linea);

  const columnas = document.createElement("div");
  columnas.classList.add("columnas");

  const experiencia = document.createElement("ul");
  experiencia.innerText = `Experience
  🧸 Pediatric Intensive Care Unit Nurse
    🚼 Neonatal Nurse
    🩺 Home Healthcare Nurse
  `;

  const estudios = document.createElement("ul");
  estudios.innerText = `Qualifications
    📚 Bachelor of Nursing
    💻 Studying Technician in analysis, administration and application programming
    📖 Courses in JS, HTML, CSS
  `;

  columnas.appendChild(experiencia);
  columnas.appendChild(estudios);
  contenedorContenido.appendChild(columnas);

  sobreMi.appendChild(contenedorImg);
  sobreMi.appendChild(contenedorContenido);

  main.appendChild(sobreMi);
}


function crearProyectos() {
  const proyectos = document.createElement("div");
  proyectos.classList.add("divproyectos");

  const cardUno = crearCardConContenido(

    "Proyacto", 
    "./img/room.png",
    "cardproyecto" 
  );
  const cardDos = crearCardConContenido(

    "RoomService", 
    "./img/room.png",
    "cardproyecto" 
  );

  const cardTres = crearCardConContenido(

    "Vivi Tandil", 
    "./img/vivitandil.png",
    "cardproyecto" 
  );

  proyectos.appendChild(cardUno);
  proyectos.appendChild(cardDos);
  proyectos.appendChild(cardTres);


  const main = mainContent();
  main.innerText = "";
  main.appendChild(proyectos);
}

function crearContacto() {
  const contacto = document.createElement("div");
  contacto.classList.add("divContacto");

  const form = document.createElement("form");
 const titulo = crearTexto("Contact","tituloSobreMiHeader");

  contacto.appendChild(titulo);


  
  const grupoNombre = document.createElement("div");
  grupoNombre.classList.add("input-group");

  const inputNombre = document.createElement("input");
  inputNombre.setAttribute("type", "text");
  inputNombre.setAttribute("id", "nombre");
  inputNombre.setAttribute("name", "nombre");
  inputNombre.classList.add("floating-input");

  const labelNombre = document.createElement("label");
  labelNombre.setAttribute("for", "nombre");
  labelNombre.innerText = "Name";

  grupoNombre.appendChild(inputNombre);
  grupoNombre.appendChild(labelNombre);


  const grupoCorreo = document.createElement("div");
  grupoCorreo.classList.add("input-group");

  const inputCorreo = document.createElement("input");
  inputCorreo.setAttribute("type", "email");
  inputCorreo.setAttribute("id", "correo");
  inputCorreo.setAttribute("name", "correo");
  inputCorreo.classList.add("floating-input");

  const labelCorreo = document.createElement("label");
  labelCorreo.setAttribute("for", "correo");
  labelCorreo.innerText = "Email address";

  grupoCorreo.appendChild(inputCorreo);
  grupoCorreo.appendChild(labelCorreo);



  const grupoComentario = document.createElement("div");
  grupoComentario.classList.add("input-group");

  const textareaComentario = document.createElement("textarea");
  textareaComentario.setAttribute("id", "comentario");
  textareaComentario.setAttribute("name", "comentario");
  textareaComentario.classList.add("floating-input");

  const labelComentario = document.createElement("label");
  labelComentario.setAttribute("for", "comentario");
  labelComentario.innerText = "Comment";

  inputNombre.setAttribute("placeholder", "");
inputCorreo.setAttribute("placeholder", " ");
textareaComentario.setAttribute("placeholder", " ");

  grupoComentario.appendChild(textareaComentario);
  grupoComentario.appendChild(labelComentario);


  const botonEnviar = document.createElement("button");
  botonEnviar.setAttribute("type", "submit");
  botonEnviar.classList.add("botonEnviar");
  botonEnviar.innerText = "Send";

 
  form.appendChild(grupoNombre);
  form.appendChild(grupoCorreo);
  form.appendChild(grupoComentario);
  form.appendChild(botonEnviar);
  contacto.appendChild(form);

  const main = mainContent();
  main.innerHTML = "";
  main.appendChild(contacto);
}


function crearTexto(texto, nombreClase) {
  const parrafo = document.createElement("p");
  parrafo.innerText = texto;
  parrafo.classList.add(nombreClase);
  return parrafo;
}

function crearCardConContenido(texto, imagenURL, claseCard) {
  const card = document.createElement("div");
  card.classList.add(claseCard);

  const img = document.createElement("img");
  img.src = imagenURL;
  img.alt = "Imagen del proyecto";
  img.classList.add("imagenCard");

  const parrafo = crearTexto(texto, "textoCard");

  card.appendChild(img);
  card.appendChild(parrafo);

  return card;
}




function crearBoton(texto, cuandoCLick) {
  const button = document.createElement("button");
  button.innerText = texto;
  button.classList.add("botones");
  button.addEventListener("click", cuandoCLick);
  return button;
}

function crearImagenConEnlace(imagenURL, enlaceURL, claseImg = "") {

  const link = document.createElement("a");
  link.href = enlaceURL;
  link.target = "_blank"; // abre el enlace en una nueva pestaña


  const img = document.createElement("img");
  img.src = imagenURL;
  img.alt = "Imagen con enlace";
  img.classList.add(claseImg);

  // Insertar la imagen dentro del enlace
  link.appendChild(img);

  return link;
}



window.addEventListener("DOMContentLoaded", () => {
  crearHeader(); // genera el header con los botones
});
