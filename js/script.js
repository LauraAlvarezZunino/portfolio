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

  // --- SECCIÓN LOGO ---
  const sectionHeader = document.createElement("section");
  sectionHeader.classList.add("sectionHeader");

  const imgnav = document.createElement("img");
  imgnav.classList.add("imgnav");
  imgnav.src = './img/imgnav.png';
  imgnav.alt = 'Logo';
  
  // Hacemos que el logo también lleve al inicio al hacer click
  imgnav.style.cursor = "pointer";
  imgnav.addEventListener("click", () => {
      crearInicio();
      cerrarMenu(); // Si el menú está abierto, lo cierra
  });

  sectionHeader.appendChild(imgnav);

  // --- SECCIÓN NAV (Enlaces) ---
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  nav.id = "navbar"; // Le damos ID para manipularlo fácil

  // Función auxiliar para cerrar menú al hacer click en un enlace
  const cerrarMenu = () => {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  };

  const botonHome = crearBoton("Home", () => { crearInicio(); cerrarMenu(); });
  const botonSobreMi = crearBoton("About me", () => { crearSobreMi(); cerrarMenu(); });
  const botonProyectos = crearBoton("Projects", () => { crearProyectos(); cerrarMenu(); });
  const botonContacto = crearBoton("Contact", () => { crearContacto(); cerrarMenu(); });

  nav.appendChild(botonHome);
  nav.appendChild(botonSobreMi);
  nav.appendChild(botonProyectos);
  nav.appendChild(botonContacto);

  // --- BOTÓN HAMBURGUESA ---
  const hamburger = document.createElement("button");
  hamburger.classList.add("hamburger");
  
  // Creamos las 3 líneas del icono
  for(let i=0; i<3; i++) {
      const span = document.createElement("span");
      hamburger.appendChild(span);
  }

  // Evento Toggle (Abrir/Cerrar)
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // --- ENSAMBLADO FINAL ---
  header.appendChild(sectionHeader);
  header.appendChild(hamburger); // El botón va fuera del nav pero dentro del header
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



redes.appendChild(
  crearImagenConEnlace(
    "https://cdn-icons-png.flaticon.com/512/733/733553.png",  
    "https://github.com/LauraAlvarezZunino",                           
    "iconoSocial"
  )
);


redes.appendChild(
  crearImagenConEnlace(
    "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    "http://www.linkedin.com/in/lauraalvarezzunino",
    "iconoSocial"
  )
);

  contenedorTexto.appendChild(texto1);
  contenedorTexto.appendChild(texto2);
  contenedorTexto.appendChild(redes);

  const img = document.createElement("img");
  img.classList.add("imgInicio");
  img.src = './img/perfilpic.jpg';
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

  const titulo = crearTexto("About Me", "tituloSobreMiHeader");
  sobreMi.appendChild(titulo);

  // --- Imagen ---
  const contenedorImg = document.createElement("div");
  contenedorImg.classList.add("sectionSobremiDos");

  const img = document.createElement("img");
  img.classList.add("imgSobreMi");
  img.src = "./img/sobremi.jpg";
  img.alt = "Profile picture - Laura Álvarez Zunino";
  contenedorImg.appendChild(img);

  // --- Contenido principal ---
  const contenedorContenido = document.createElement("div");
  contenedorContenido.classList.add("contenidoSobreMi");

  const parrafo1 = document.createElement("p");
  parrafo1.textContent =
    "I am a multidisciplinary professional with a Bachelor’s Degree in Nursing and a strong passion for technology, innovation, and continuous learning.";

  const parrafo2 = document.createElement("p");
  parrafo2.textContent =
    "Currently, I am studying a Technical Degree in Analysis, Development, and Application Programming, where I apply analytical thinking, creativity, and problem-solving skills to software projects.";

  const parrafo3 = document.createElement("p");
  parrafo3.textContent =
    "My background in healthcare has strengthened my empathy, teamwork, and communication abilities, which I now combine with my growing technical expertise in programming, database management, and UX/UI design. I enjoy developing solutions that improve user experiences and contribute to meaningful, people-centered projects.";

  contenedorContenido.append(parrafo1, parrafo2, parrafo3);

  // --- Línea divisoria ---
  const linea = document.createElement("hr");
  linea.classList.add("lineaHorizontal");
  contenedorContenido.appendChild(linea);

  // --- HABILIDADES (Hard & Soft Skills) ---
  const habilidadesContainer = document.createElement("div");
  habilidadesContainer.classList.add("habilidadesSobreMi");

  const tituloHabilidades = document.createElement("h3");
  tituloHabilidades.textContent = "Skills";

  const hardSkillsTitle = document.createElement("h4");
  hardSkillsTitle.textContent = "Technical (Hard) Skills";

  const listaHard = document.createElement("ul");
  const hardItems = [
    "Programming Languages: JavaScript, PHP",
    "Frameworks / Libraries: React, Express",
    "Databases: SQL, NoSQL, database modeling, DDL and DML statements",
    "Frontend: HTML, CSS, Bootstrap, Material Design",
    "UX/UI Design: Figma, WordPress, usability principles",
    "Tools: Git, GitHub, VS Code, DBeaver, Postman, JSON, XML, RESTful API design, Cisco Packet Tracer, Vim, Canva, terminal basics",
    "Methodologies: Scrum, Agile teamwork, Waterfall model",
    "Concepts: Structured programming, OOP, fundamentals of TDD",
    "Languages: Spanish (Native), English A1 (beginner)"
  ];

  hardItems.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    listaHard.appendChild(li);
  });

  const softSkillsTitle = document.createElement("h4");
  softSkillsTitle.textContent = "Soft Skills";

  const listaSoft = document.createElement("ul");
  const softItems = [
    "Communication and empathy",
    "Adaptability and critical thinking",
    "Teamwork and collaboration",
    "Problem-solving and creativity",
    "Attention to detail and organization"
  ];

  softItems.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    listaSoft.appendChild(li);
  });

  habilidadesContainer.append(
    tituloHabilidades,
    hardSkillsTitle,
    listaHard,
    softSkillsTitle,
    listaSoft
  );

  contenedorContenido.appendChild(habilidadesContainer);

  // --- Línea divisoria antes de Experiencia/Educación ---
  const linea2 = document.createElement("hr");
  linea2.classList.add("lineaHorizontal");
  contenedorContenido.appendChild(linea2);

  // --- Columnas: Experiencia y Estudios ---
  const columnas = document.createElement("div");
  columnas.classList.add("columnas");

  // EXPERIENCIA
  const experiencia = document.createElement("div");
  const tituloExp = document.createElement("h3");
  tituloExp.textContent = "Experience";
  const listaExp = document.createElement("ul");

  const itemExp1 = document.createElement("li");
  itemExp1.textContent =
    "Nursing Professional — Tandil Health System (2014–Present): Experience in patient care, multidisciplinary teamwork, and clinical process management.";
  const itemExp2 = document.createElement("li");
  itemExp2.textContent =
    "Academic & Personal Projects — Web Development: Development of web applications, REST APIs, and database integration using JavaScript, Node.js, PHP, and MySQL.";

  listaExp.append(itemExp1, itemExp2);
  experiencia.append(tituloExp, listaExp);

  // ESTUDIOS
  const estudios = document.createElement("div");
  const tituloEdu = document.createElement("h3");
  tituloEdu.textContent = "Qualifications";
  const listaEdu = document.createElement("ul");

  const itemEdu1 = document.createElement("li");
  itemEdu1.textContent =
    "Bachelor’s Degree in Nursing — National University of the Center of Buenos Aires Province (UNICEN).";
  const itemEdu2 = document.createElement("li");
  itemEdu2.textContent =
    "Technical Degree in Analysis, Development and Application Programming — ISFDyT No. 166, Tandil (Expected graduation: 2025).";
  const itemEdu3 = document.createElement("li");
  itemEdu3.textContent =
    "Complementary Training: UX/UI Design (Codo a Codo, 2023), Free Software Installation Festival (FLISoL 2024).";

  listaEdu.append(itemEdu1, itemEdu2, itemEdu3);
  estudios.append(tituloEdu, listaEdu);

  columnas.append(experiencia, estudios);
  contenedorContenido.appendChild(columnas);

  sobreMi.append(contenedorImg, contenedorContenido);
  main.appendChild(sobreMi);
}

function crearProyectos() {
  const proyectos = document.createElement("div");
  proyectos.classList.add("divproyectos");

  const cardUno = crearCardConContenido(
    "La Gran Ocasión", 
    "img/laGranOcasion.jpg", 
    "cardproyecto",
    "Plataforma web desarrollada para la Biblioteca Julio Cortazar de la Escuela Nacional 'Ernesto Sábato',con el objetivo de fomentar la lectura, la crítica literaria y la participación comunitaria entre alumnos y docentes.", 
    "https://github.com/TurcoDev/sababook-front"
  );

  const cardDos = crearCardConContenido(
    "RoomService", 
    "./img/room.png",
    "cardproyecto",
    "Una APIBackend-Only desarrollada para la gestión de servicios de un hotel (habitaciones, reservas, notificaciones y usuarios). Esta aplicación implementa el patrón Modelo-Vista-Controlador y la Programación Orientada a Objetos en PHP.", 
    "https://github.com/LauraAlvarezZunino/RoomService2.0"
  );

  const cardTres = crearCardConContenido(
    "Viví Tandil", 
    "./img/vivitandil.png",
    "cardproyecto",
    "Proyecto Final de Diseño UX UI, incluye analisis del entorno, creacion de identidad visual,y de pantallas mobile para una api de alquiler de propiedades en la ciudad de Tandil", 
    "https://docs.google.com/presentation/d/1o8b2gC95aXJI5-YxBjMYmaSAYNclue2_1LFWx-mH0Xo/edit?usp=sharing"
  );

  proyectos.appendChild(cardUno);
  proyectos.appendChild(cardDos);
  proyectos.appendChild(cardTres);

  const main = mainContent();
  main.innerHTML = ""; 
  main.appendChild(proyectos);
}

function crearCardConContenido(titulo, imagenURL, claseCard, descripcion, linkRepo) {
  const card = document.createElement("div");
  card.classList.add(claseCard);

  const img = document.createElement("img");
  img.src = imagenURL;
  img.alt = "Imagen del proyecto";
  img.classList.add("imagenCard");

  const parrafo = crearTexto(titulo, "textoCard");

  // ========= OVERLAY ==========
  const overlay = document.createElement("div");
  overlay.classList.add("detalleProyecto");

  // Contenedor del texto (scroll si es largo)
  const content = document.createElement("div");
  content.classList.add("overlay-content");

  const textoDesc = document.createElement("p");
  textoDesc.innerText = descripcion || "Descripción próximamente...";
  textoDesc.classList.add("descripcionProyecto");

  content.appendChild(textoDesc);

  // Contenedor del botón (siempre abajo)
  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("overlay-button");

  const btnLink = document.createElement("a");
  btnLink.href = linkRepo || "#";
  btnLink.target = "_blank";
  btnLink.innerText = "Ver Más Detalles";
  btnLink.classList.add("btnRepo");

  buttonWrapper.appendChild(btnLink);

  // Agrego al overlay
  overlay.appendChild(content);
  overlay.appendChild(buttonWrapper);

  // Agrego al card
  card.appendChild(img);
  card.appendChild(parrafo);
  card.appendChild(overlay);

  return card;
}

function crearContacto() {
  const contacto = document.createElement("div");
  contacto.classList.add("divContacto");

  const form = document.createElement("form");
  form.setAttribute("id", "contact-form");

  const titulo = crearTexto("Contact", "tituloSobreMiHeader");
  contacto.appendChild(titulo);

  // --- Campo Nombre ---
  const grupoNombre = document.createElement("div");
  grupoNombre.classList.add("input-group");

  const inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.id = "nombre";
  inputNombre.name = "nombre";
  inputNombre.placeholder = " ";
  inputNombre.classList.add("floating-input");

  const labelNombre = document.createElement("label");
  labelNombre.setAttribute("for", "nombre");
  labelNombre.innerText = "Name";

  grupoNombre.append(inputNombre, labelNombre);

  // --- Campo Correo ---
  const grupoCorreo = document.createElement("div");
  grupoCorreo.classList.add("input-group");

  const inputCorreo = document.createElement("input");
  inputCorreo.type = "email";
  inputCorreo.id = "correo";
  inputCorreo.name = "correo";
  inputCorreo.placeholder = " ";
  inputCorreo.classList.add("floating-input");

  const labelCorreo = document.createElement("label");
  labelCorreo.setAttribute("for", "correo");
  labelCorreo.innerText = "Email address";

  grupoCorreo.append(inputCorreo, labelCorreo);

  // --- Campo Comentario ---
  const grupoComentario = document.createElement("div");
  grupoComentario.classList.add("input-group");

  const textareaComentario = document.createElement("textarea");
  textareaComentario.id = "comentario";
  textareaComentario.name = "comentario";
  textareaComentario.placeholder = " ";
  textareaComentario.classList.add("floating-input");

  const labelComentario = document.createElement("label");
  labelComentario.setAttribute("for", "comentario");
  labelComentario.innerText = "Comment";

  grupoComentario.append(textareaComentario, labelComentario);

  // --- Botón ---
  const botonEnviar = document.createElement("button");
  botonEnviar.type = "submit";
  botonEnviar.classList.add("botonEnviar");
  botonEnviar.innerText = "Send";

  // --- Mensaje de estado ---
  const statusMsg = document.createElement("p");
  statusMsg.id = "status";
  statusMsg.classList.add("status-msg");

  // --- Ensamble ---
  form.append(grupoNombre, grupoCorreo, grupoComentario, botonEnviar, statusMsg);
  contacto.appendChild(form);

  const main = mainContent();
  main.innerHTML = "";
  main.appendChild(contacto);

  // --- Evento de envío ---
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusMsg.textContent = "Sending message...";

    emailjs
      .send("service_ohfez7q", "template_lyqokiy", {
        from_name: inputNombre.value,
        from_email: inputCorreo.value,
        message: textareaComentario.value,
      })
      .then(() => {
        statusMsg.textContent = "Message sent successfully!";
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        statusMsg.textContent = "Failed to send message. Please try again later.";
      });
  });
}


function crearTexto(texto, nombreClase) {
  const parrafo = document.createElement("p");
  parrafo.innerText = texto;
  parrafo.classList.add(nombreClase);
  return parrafo;
}




function crearBoton(texto, cuandoCLick) {
  const button = document.createElement("a");
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