const app = document.getElementById('app');

// --- PLANTILLAS HTML (Vistas) ---

/**
 * Plantilla para la vista de Inicio de Sesión
 */
const loginViewTemplate = `
    <div id="login-view">
        <div class="login-card pixel-border">
            <div class="text-center mb-4">
                <img src="https://static.wikia.nocookie.net/minecraft/images/d/d3/Redstone_blok.png/revision/latest/scale-to-width-down/250?cb=20170429185629" alt="Logo Redstone" class="img-fluid">
            </div>
            <h2 class="mb-4">INICIAR SESION</h2>
            <form>
                <div class="mb-3">
                    <label for="username" class="form-label" style="font-size: 0.9rem;">Nombre de Usuario:</label>
                    <input type="text" class="form-control" id="username" placeholder="Introduce tu usuario">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label" style="font-size: 0.9rem;">Contraseña:</label>
                    <input type="password" class="form-control" id="password" placeholder="Introduce tu contraseña">
                </div>
                <!-- Párrafo para mostrar errores de login -->
                <p id="login-error" class="text-danger text-center mt-3" style="font-family: var(--mc-font-body); font-size: 1.2rem; display: none; color: var(--mc-bright-red) !important;"></p>
                <div class="text-center mt-4">
                    <!-- CAMBIADO: Se quitó onclick y se añadió id="login-button" -->
                    <button type="button" class="btn btn-mc" id="login-button">INGRESAR</button>
                </div>
            </form>
        </div>
    </div>
`;

/*
  Plantilla para la vista principal (Navbar + Contenedor de contenido)
 */
const mainViewTemplate = `
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-mc">
        <div class="container">
            <!-- CAMBIADO: URL del logo -->
            <a class="navbar-brand" href="#" onclick="navigateTo('main', 'home')">
                <img src="Imagenes/Logo.jpg" alt="Logo">
                GUIA REDSTONE
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="navigateTo('main', 'home')">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="navigateTo('main', 'bloques')">Bloques</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="mechanismsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mecanismos
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="mechanismsDropdown">
                            <li><a class="dropdown-item" href="#" onclick="navigateTo('main', 'mecanismos', 'principiante')">Principiantes</a></li>
                            <li><a class="dropdown-item" href="#" onclick="navigateTo('main', 'mecanismos', 'medio')">Intermedios</a></li>
                            <li><a class="dropdown-item" href="#" onclick="navigateTo('main', 'mecanismos', 'experto')">Expertos</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="navigateTo('login')">Cerrar Sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main id="main-content" class="container mt-4">
        <div class="row">
            <!-- Columna de Navegación Lateral (Sidebar) -->
            <div class="col-lg-3">
                <div class="guides-header mb-3">
                    <h3>GUIAS DE MECANISMOS</h3>
                </div>
                <div class="list-group sidebar-nav">
                    <a class="list-group-item" onclick="navigateTo('main', 'bloques')">BLOQUES</a>
                    <a class="list-group-item" onclick="navigateTo('main', 'mecanismos', 'principiante')">BASICOS</a>
                    <a class="list-group-item" onclick="navigateTo('main', 'mecanismos', 'medio')">MEDIOS</a>
                    <a class="list-group-item" onclick="navigateTo('main', 'mecanismos', 'experto')">EXPERTOS</a>
                </div>
            </div>
            
            <!-- Área de contenido principal (se rellena dinámicamente) -->
            <div class="col-lg-9">
                <div id="content-area" class="content-area pixel-border">
                    <!-- El contenido de la sub-página se insertará aquí -->
                </div>
            </div>
        </div>
    </main>
`;

/**
 * Contenido para la pagina de inicio
 */
const homeContent = `
    <h2>INFORMACION BASICA DE REDSTONE</h2>
    <div class="row align-items-center">
        <div class="col-md-8">
            <p>La redstone es un elemento fundamental en el juego Minecraft que funciona como un simulador de electricidad, permitiendo a los jugadores crear circuitos y automatizar procesos. Se obtiene al minar un mineral rojo en el subsuelo, el cual al ser picado suelta un polvo del mismo nombre. Este polvo se utiliza para crear circuitos que pueden activar mecanismos como puertas automáticas, pistones y trampas, con un alcance máximo de 15 bloques. 
Características y usos
Simula electricidad: El polvo de redstone actúa como un cable que transmite energía desde una fuente (como una palanca, un botón o una placa de presión) hasta un dispositivo que la reciba. 
Automatización: Permite automatizar acciones y construir dispositivos complejos como granjas automáticas, ascensores e incluso computadoras dentro del juego. 
Componente de circuitos: Se puede colocar para conectar varios componentes y crear circuitos lógicos. 
Transmisión de energía: La señal de redstone puede viajar hasta 15 bloques. Para extenderla o hacerla funcionar más allá, se pueden usar elementos como repetidores. 
Dónde encontrarla
Minería: El mineral de redstone se encuentra bajo tierra, entre las capas 0 y 16, siendo más común alrededor de la capa 10. 
Mina: Requiere un pico de hierro o superior para ser minado y obtener el polvo de redstone. 
Bloque de redstone: Si se obtiene un bloque de redstone entero, se puede picar para obtener polvo o utilizarlo como una fuente de energía constan</p>
        </div>
        <div class="col-md-4">
            <img src="Imagenes/PRcueva.jpg" alt="Redstone en Minecraft" class="img-fluid">
        </div>
    </div>
`;

/**
 * Contenido para la página de bloques
 */
const bloquesContent = `
    <h2>INFORMACION SOBRE BLOQUES</h2>
    
    <!-- Entrada de Bloque 1 -->
    <div class="block-entry">
        <h3>INFORMACION SOBRE EL BLOQUE: ANTORCHA DE REDSTONE</h3>
        <div class="row mb-3">
            <div class="col-md-8">
                <p>La antorcha de redstone es una fuente de energía constante en Minecraft que puede activar circuitos de redstone, actuar como un inversor de señal ("puerta NOT"), y apagar su propia señal al recibir energía en el bloque que la soporta. También es útil como fuente de luz y para generar mecanismos complejos al combinarse con otros componentes. 
Funciones principales
Fuente de energía: Proporciona una señal de redstone que se extiende hasta 15 bloques de cable y puede alimentar bloques adyacentes y el bloque justo encima. 
Inversor de señal: Su utilidad más importante es invertir la señal. Cuando el bloque donde está colocada recibe energía, la antorcha se apaga, lo que se aprovecha para crear circuitos lógicos como la puerta NOT. 
Activación de dispositivos: Permite activar pistones, puertas, dispensadores y otros componentes de redstone a distancia. 
Construcción de mecanismos: Es un componente fundamental para crear circuitos avanzados, relojes y cerraduras de combinación al combinarse con otros componentes como repetidores y comparadores</p>
            </div>
            <div class="col-md-4">
                <img src="Imagenes/Antorcha1.jpg" alt="Antorcha de Redstone" class="img-fluid">
            </div>
        </div>
        <div class="row">
            <div class="col-3"><img src="Imagenes/Antorchasuelo.jpg" class="img-fluid"></div>
            <div class="col-3"><img src="Imagenes/Antorchasuelo0.jpg" class="img-fluid"></div>
            <div class="col-3"><img src="Imagenes/Antorchabloque.jpg" class="img-fluid"></div>
            
        </div>
    </div>
    
    <hr style="border-top: 4px solid var(--mc-medium-grey);">

    <!-- Entrada de Bloque 2 -->
    <div class="block-entry mt-4">
        <h3>INFORMACION SOBRE EL BLOQUE: REPETIDOR</h3>
        <div class="row">
            <div class="col-md-4">
                <img src="Imagenes/Repetidor.jpg" alt="Repetidor de Redstone" class="img-fluid mb-3">
            </div>
            <div class="col-md-8">
                <p>La función principal de un repetidor de redstone es extender la señal de redstone más allá del límite de 15 bloques, actuando como un amplificador. Además, puede retrasar la señal en 1 a 4 ticks (0.1 a 0.4 segundos) y funciona como un diodo, permitiendo que la corriente fluya en una sola dirección. También tiene la capacidad de bloquearse, manteniendo su estado de energía incluso si la señal de entrada desaparece         Funciones detalladas     Extender la señal: La señal de redstone pierde potencia con la distancia. Un repetidor recibe la señal y la "reinicia" con la máxima intensidad, permitiendo que el circuito continúe por otros 15 bloques.  Retrasar la señal: Al hacer clic derecho en un repetidor, puedes configurar un retardo entre 1 y 4 tics. Cada tic es 0.1 segundos, por lo que un repetidor puede introducir un retraso de hasta 0.4 segundos. Esto es útil para sincronizar mecanismos complejos o crear relojes de redstone.  Actuar como diodo: La corriente solo puede entrar por la parte ancha del repetidor y salir por la punta de la flecha, impidiendo que la energía fluya hacia atrás.  Bloquearse: Un repetidor puede ser "bloqueado" si otro repetidor o un bloque de redstone le emite energía por un lado. Cuando está bloqueado, el repetidor mantiene su estado actual (encendido o apagado), lo cual es útil para crear pestillos. </p>
            </div>
        </div>
        <!-- Fila de 4 imágenes añadida -->
        <div class="row mt-3">
            <div class="col-3"><img src="Imagenes/Repetidorfases.jpg" class="img-fluid"></div>
            <div class="col-3"><img src="Imagenes/Repetidor1.jpg" class="img-fluid"></div>
            <div class="col-3"><img src="Imagenes/Repetidor01.jpg" class="img-fluid"></div>
          
    </div>
`;

/*
  Contenido para la página de "Mecanismos" (Acordeón)
 */
function getMecanismosContent(level) {
    let title = "MECANISMOS";
    if (level === 'principiante') title = "MECANISMOS PARA PRINCIPIANTES";
    if (level === 'medio') title = "MECANISMOS DE DIFICULTAD MEDIA";
    if (level === 'experto') title = "MECANISMOS PARA EXPERTOS";


    let mecanismos = [{
        id: "mec1",
        nombre: "PUERTA AUTOMATICA 2x2",
        nivel: "principiante",
        gifUrl: "Imagenes/VPuerta.gif",
        stepImages: [ // Array de imágenes 
            "Imagenes/PPaso1.jpg",
            "Imagenes/PPaso2.jpg",
            "Imagenes/PPaso3.jpg",
            "Imagenes/PPaso4.jpg"
        ],
        descripcion: `
            <p>Mecanismo paso a paso: Esta es la descripción individual de la <strong>Puerta Automática 2x2</strong>. Es un mecanismo excelente para principiantes.</p>
            <p>Se necesitan pistones, redstone, botones y un bloque de tu elección. Sigue las imágenes para ver cómo conectarlo todo.</p>
        `
    }, {
        id: "mec2",
        nombre: "GRANJA DE CAÑA DE AZUCAR",
        nivel: "principiante",
        gifUrl: "Imagenes/VCana.gif",
        stepImages: [
            "Imagenes/CPaso1.jpg",
            "Imagenes/CPaso2.jpg",
            "Imagenes/CPaso3.jpg",
            "Imagenes/CPaso4.jpg"
        ],
        descripcion: `
            <p>Mecanismo paso a paso: Esta granja de caña de azúcar es automática y muy eficiente.</p>
            <p>Utiliza observadores para detectar el crecimiento y pistones para cortar la caña. El agua la recoge en una tolva.</p>
        `
    }, {
        id: "mec3",
        nombre: "ASCENSOR DE AGUA",
        nivel: "experto",
        gifUrl: "Imagenes/VElevador.gif",
        stepImages: [
            "Imagenes/EPaso1.jpg",
            "Imagenes/EPaso2.jpg",
            "Imagenes/Epaso3.jpg",
            "Imagenes/EPaso4.jpg"
        ],
        descripcion: `
            <p>Mecanismo paso a paso: Un ascensor de agua te permite subir y bajar rápidamente usando arena de almas y bloques de magma.</p>
            <p>No requiere mucha redstone, pero es un mecanismo esencial de transporte vertical.</p>
        `
    }, {
        id: "mec4",
        nombre: "SUPER HORNO",
        nivel: "medio",
        gifUrl: "Imagenes/VHorno.gif",
        stepImages: [
            "Imagenes/VPaso1.jpg",
            "Imagenes/VPaso2.jpg",
            "Imagenes/VPaso3.jpg",
            "Imagenes/VPaso4.jpg"
        ],
        descripcion: `
            <p>Mecanismo paso a paso: El super horno utiliza un sistema de tolvas para distribuir combustible y items a múltiples hornos a la vez.</p>
            <p>Es perfecto para cocinar grandes cantidades de items de forma rápida y eficiente.</p>
        `
    }];

    // Filtrar mecanismos por nivel
    let filteredMecanismos = mecanismos.filter(m => m.nivel === level);
    // if (filteredMecanismos.length === 0) filteredMecanismos = mecanismos; // <- Esta línea se elimina, causaba el error.

    let accordionHTML = filteredMecanismos.map((m, index) => `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading-${m.id}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${m.id}" aria-expanded="false" aria-controls="collapse-${m.id}">
                    MECANISMO NO.${index + 1} < ${m.nombre} >
                </button>
            </h2>
            <div id="collapse-${m.id}" class="accordion-collapse collapse" aria-labelledby="heading-${m.id}" data-bs-parent="#mecanismos-accordion">
                <div class="accordion-body">
                    <h3>INFORMACION SOBRE EL MECANISMO</h3>
                    <div class="row">
                        <div class="col-md-8">
                            <!-- CAMBIADO: Ahora usa la descripcion individual -->
                            ${m.descripcion}
                        </div>
                        <div class="col-md-4">
                            <!-- CAMBIADO: Ahora usa la gifUrl del mecanismo -->
                            <img src="${m.gifUrl}" alt="GIF del Mecanismo ${m.nombre}" class="img-fluid">
                        </div>
                    </div>
                    <!-- CAMBIADO: Ahora usa el array stepImages del mecanismo -->
                    <div class="row mt-3">
                        <div class="col-3"><img src="${m.stepImages[0]}" class="img-fluid" alt="Paso 1"></div>
                        <div class="col-3"><img src="${m.stepImages[1]}" class="img-fluid" alt="Paso 2"></div>
                        <div class="col-3"><img src="${m.stepImages[2]}" class="img-fluid" alt="Paso 3"></div>
                        <div class="col-3"><img src="${m.stepImages[3]}" class="img-fluid" alt="Paso 4"></div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <h2>${title}</h2>
        <div class="accordion" id="mecanismos-accordion">
            ${accordionHTML}
        </div>
    `;
}

// --- LÓGICA DE NAVEGACIÓN ---

let currentPage = '';
let currentSubPage = '';

/**
 *  Manejar el intento de login
 */
function handleLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('login-error');

    const username = usernameInput ? usernameInput.value : '';
    const password = passwordInput ? passwordInput.value : '';

    // Validación de usuario y contraseña
    if (username === "Aby" && password === "12345678") {
        if (errorElement) errorElement.style.display = 'none';
        navigateTo('main'); // Navega a la página principal si es correcto
    } else {
        // Muestra error si es incorrecto
        if (errorElement) {
            errorElement.textContent = "Usuario o contraseña incorrectos.";
            errorElement.style.display = 'block';
        }
    }
}


/*
  Navega entre las vistas principales y sub-vistas
  La vista principal ('login' o 'main')
  La sub-página ('home', 'bloques', 'mecanismos')
  Parámetro extra (ej. 'principiante')
 */
function navigateTo(page, subPage = 'home', param = null) {
    // Si navegamos a una vista principal diferente (ej. de Login a Main)
    if (page !== currentPage) {
        if (page === 'login') {
            app.innerHTML = loginViewTemplate;
            //  listener de boton de login
            const loginButton = document.getElementById('login-button');
            if (loginButton) {
                loginButton.addEventListener('click', handleLogin);
            }
        } else if (page === 'main') {
            app.innerHTML = mainViewTemplate;
            // El navbar y el sidebar ahora existen

            navigateToSubPage(subPage, param);
        }
        currentPage = page;
    } else if (page === 'main') {
        // Si ya estamos en main solo cambiamos la sub-página
        navigateToSubPage(subPage, param);
    }
}

/**
 * Renderiza el contenido dentro del #content-area de la vista principal
 */
function navigateToSubPage(subPage, param) {
    if (currentSubPage === subPage && !param) return; // Ya estamos ahí

    const contentArea = document.getElementById('content-area');
    if (!contentArea) return; // Seguridad

    let content = '';
    if (subPage === 'home') {
        content = homeContent;
    } else if (subPage === 'bloques') {
        content = bloquesContent;
    } else if (subPage === 'mecanismos') {
        content = getMecanismosContent(param); // param será principiante, medio, avanzado.
    }

    contentArea.innerHTML = content;
    currentSubPage = subPage;

    // Actualizar estado activo en la navegación lateral
    updateSidebarActiveState(subPage, param);
}

/**
 * Resalta el ítem activo en el sidebar
 */
function updateSidebarActiveState(subPage, param) {
    const sidebarLinks = document.querySelectorAll('.sidebar-nav .list-group-item');
    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        const linkText = link.textContent.toLowerCase();

        if (subPage === 'bloques' && linkText === 'bloques') {
            link.classList.add('active');
        } else if (subPage === 'mecanismos') {
            if (param === 'principiante' && linkText === 'basicos') {
                link.classList.add('active');
            } else if (param === 'medio' && linkText === 'medios') {
                link.classList.add('active');
            } else if (param === 'experto' && linkText === 'expertos') {
                link.classList.add('active');
            }
        }
    });
}

// Cargar la página de inicio de sesión al iniciar
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('login');
});
