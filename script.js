const app = document.getElementById('app');

// --- DATOS DE MECANISMOS ---

const mecanismosData = [{
    id: "mec1",
    nombre: "PUERTA AUTOMATICA 2x2",
    nivel: "principiante",
    gifUrl: "Imagenes/VPuerta.gif",
    stepImages: [
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
}, {
    id: "mecXOR",
    nombre: "COMPUERTA XOR",
    nivel: "medio",
    gifUrl: "Imagenes/XORGIF.mp4",
    stepImages: [
        "Imagenes/XOR.jpg",
        "Imagenes/XOR2.jpg",
        "Imagenes/XOR3.jpg",
        "Imagenes/XOR4.jpg"
    ],
    descripcion: `
        <p>Mecanismo paso a paso: La compuerta XOR (O exclusiva) emite una señal solo si una, y solo una, de sus entradas está activa. Si ambas están apagadas o ambas encendidas, la salida es cero.</p>
        <p>Es fundamental para sistemas binarios y calculadoras en Minecraft.</p>
    `
}, {
    id: "mecTC",
    nombre: "TOCADISCOS AUTOMATICO",
    nivel: "experto",
    gifUrl: "Imagenes/TCGIF.mp4",
    stepImages: [
        "Imagenes/TC.jpg",
        "Imagenes/TC2.jpg",
        "Imagenes/TC3.jpg",
        "Imagenes/TC4.jpg"
    ],
    descripcion: `
        <p>Mecanismo paso a paso: El tocadiscos automatico es un mecanismo que toca discos de vinilo y los reproduce.</p>
        <p>Perfecto para usar tus discos favoritos en Minecraft.</p>
    `
}];






// --- DATOS DE BLOQUES ---

const bloquesData = [
    {
        id: "bloque1",
        nombre: "ANTORCHA DE REDSTONE",
        mainImage: "Imagenes/Antorcha1.jpg",
        stepImages: [
            "Imagenes/Antorchasuelo.jpg",
            "Imagenes/Antorchasuelo0.jpg",
            "Imagenes/Antorchabloque.jpg"
        ],
        descripcion: `
            <p>La antorcha de redstone es una fuente de energía constante en Minecraft que puede activar circuitos de redstone, actuar como un inversor de señal ("puerta NOT"), y apagar su propia señal al recibir energía en el bloque que la soporta. También es útil como fuente de luz y para generar mecanismos complejos al combinarse con otros componentes.</p>
            <p><strong>Funciones principales</strong></p>
            <ul>
                <li><strong>Fuente de energía:</strong> Proporciona una señal de redstone que se extiende hasta 15 bloques de cable y puede alimentar bloques adyacentes y el bloque justo encima.</li>
                <li><strong>Inversor de señal:</strong> Su utilidad más importante es invertir la señal. Cuando el bloque donde está colocada recibe energía, la antorcha se apaga, lo que se aprovecha para crear circuitos lógicos como la puerta NOT.</li>
                <li><strong>Activación de dispositivos:</strong> Permite activar pistones, puertas, dispensadores y otros componentes de redstone a distancia.</li>
                <li><strong>Construcción de mecanismos:</strong> Es un componente fundamental para crear circuitos avanzados, relojes y cerraduras de combinación al combinarse con otros componentes como repetidores y comparadores.</li>
            </ul>
        `
    },
    {
        id: "bloque2",
        nombre: "REPETIDOR",
        mainImage: "Imagenes/Repetidor.jpg",
        stepImages: [
            "Imagenes/Repetidorfases.jpg",
            "Imagenes/Repetidor1.jpg",
            "Imagenes/Repetidor01.jpg"
        ],
        descripcion: `
            <p>La función principal de un repetidor de redstone es extender la señal de redstone más allá del límite de 15 bloques, actuando como un amplificador. Además, puede retrasar la señal en 1 a 4 ticks (0.1 a 0.4 segundos) y funciona como un diodo, permitiendo que la corriente fluya en una sola dirección. También tiene la capacidad de bloquearse, manteniendo su estado de energía incluso si la señal de entrada desaparece.</p>
            <p><strong>Funciones detalladas</strong></p>
            <ul>
                <li><strong>Extender la señal:</strong> La señal de redstone pierde potencia con la distancia. Un repetidor recibe la señal y la "reinicia" con la máxima intensidad, permitiendo que el circuito continúe por otros 15 bloques.</li>
                <li><strong>Retrasar la señal:</strong> Al hacer clic derecho en un repetidor, puedes configurar un retardo entre 1 y 4 tics. Cada tic es 0.1 segundos, por lo que un repetidor puede introducir un retraso de hasta 0.4 segundos. Esto es útil para sincronizar mecanismos complejos o crear relojes de redstone.</li>
                <li><strong>Actuar como diodo:</strong> La corriente solo puede entrar por la parte ancha del repetidor y salir por la punta de la flecha, impidiendo que la energía fluya hacia atrás.</li>
                <li><strong>Bloquearse:</strong> Un repetidor puede ser "bloqueado" si otro repetidor o un bloque de redstone le emite energía por un lado. Cuando está bloqueado, el repetidor mantiene su estado actual (encendido o apagado), lo cual es útil para crear pestillos.</li>
            </ul>
        `
    },
    {
        id: "bloque3",
        nombre: "BLOQUE DE REDSTONE",
        mainImage: "Imagenes/BloqueRedstone.jpg",
        stepImages: [
            "Imagenes/BloqueRedstoneA.jpg",
            "Imagenes/BloqueRedstoneB.jpg",
            "Imagenes/BloqueRedstoneC.jpg"
        ],
        descripcion: `
            <p>El bloque de redstone es una fuente de energía móvil y compacta. A diferencia de las antorchas, no se puede apagar y siempre emite una señal de intensidad 15. Es ideal para activar pistones y mecanismos móviles.</p>
        `
    },
    {
        id: "bloque13",
        nombre: "COMPARADOR DE REDSTONE",
        mainImage: "Imagenes/Comparador.jpg",
        stepImages: [
            "Imagenes/ComparadorA.jpg",
            "Imagenes/ComparadorB.jpg",
            "Imagenes/ComparadorC.jpg"
        ],
        descripcion: `
            <p>El comparador tiene múltiples funciones: comparar señales, restar señales y medir el estado de contenedores (como cofres o tolvas). Es esencial para circuitos lógicos avanzados y sistemas de almacenamiento.</p>
        `
    },
    {
        id: "bloque5",
        nombre: "DISPENSADOR",
        mainImage: "Imagenes/Dispensador.jpg",
        stepImages: [
            "Imagenes/DispensadorA.jpg",
            "Imagenes/DispensadorB.jpg",
            "Imagenes/DispensadorC.jpg"
        ],
        descripcion: `
            <p>El dispensador lanza objetos o utiliza ítems cuando recibe una señal de redstone. Puede disparar flechas, lanzar pociones, colocar agua/lava, o equipar armaduras.</p>
        `
    },
    {
        id: "bloque4",
        nombre: "SOLTADOR",
        mainImage: "Imagenes/Soltador.jpg",
        stepImages: [
            "Imagenes/SoltadorA.jpg",
            "Imagenes/SoltadorB.jpg",
            "Imagenes/SoltadorC.jpg"
        ],
        descripcion: `
            <p>El soltador suelta ítems como entidades en el suelo cuando recibe energía. A diferencia del dispensador, nunca "usa" el ítem (ej. soltará un cubo de agua como ítem, no colocará el agua).</p>
        `
    },
    {
        id: "bloque6",
        nombre: "GANCHO DE CUERDA",
        mainImage: "Imagenes/Gancho.jpg",
        stepImages: [
            "Imagenes/GanchoB.jpg",
            "Imagenes/GanchoC.jpg",
            "Imagenes/GanchoD.jpg"
        ],
        descripcion: `
            <p>El gancho de cuerda detecta entidades (jugadores, mobs, ítems) que pasan a través de un hilo conectado entre dos ganchos. Emite una señal de redstone cuando se activa.</p>
        `
    },
    {
        id: "bloque7",
        nombre: "LAMPARA DE REDSTONE",
        mainImage: "Imagenes/LuzRedstoneA.jpg",
        stepImages: [
            "Imagenes/LuzRedstoneA2.jpg",
            "Imagenes/LuzRedstoneE.jpg",
            "Imagenes/LuzRedstoneE2.jpg"
        ],
        descripcion: `
            <p>La lámpara de redstone es una fuente de luz controlable. Se enciende cuando recibe una señal de redstone y se apaga cuando la señal cesa. Ideal para iluminación automatizada.</p>
        `
    },
    {
        id: "bloque8",
        nombre: "OBSERVADOR",
        mainImage: "Imagenes/Observador.jpg",
        stepImages: [
            "Imagenes/ObservadorA.jpg",
            "Imagenes/ObservadorB.jpg",
            "Imagenes/ObservadorC.jpg"
        ],
        descripcion: `
            <p>El observador detecta cambios en el bloque frente a su "cara" y emite un pulso rápido de redstone por la parte trasera. Es fundamental para granjas automáticas y mecanismos compactos.</p>
        `
    },
    {
        id: "bloque9",
        nombre: "PALANCA",
        mainImage: "Imagenes/PalancaA.jpg",
        stepImages: [
            "Imagenes/PalancaB.jpg",
            "Imagenes/PalancaC.jpg",
            "Imagenes/PalancaD.jpg"
        ],
        descripcion: `
            <p>La palanca es un interruptor manual que proporciona una señal de redstone constante (encendido/apagado). Se puede colocar en cualquier lado de un bloque.</p>
        `
    },
    {
        id: "bloque10",
        nombre: "SENSOR DE LUZ SOLAR",
        mainImage: "Imagenes/Panel.jpg",
        stepImages: [
            "Imagenes/PanelB .jpg",
            "Imagenes/PanelC.jpg",
            "Imagenes/PanelD.jpg"
        ],
        descripcion: `
            <p>El sensor de luz solar emite una señal de redstone cuya intensidad depende de la luz solar actual. Puede invertirse para detectar la noche (sensor de luz lunar).</p>
        `
    },
    {
        id: "bloque11",
        nombre: "PISTON",
        mainImage: "Imagenes/Piston.jpg",
        stepImages: [
            "Imagenes/Piston2.jpg",
            "Imagenes/Piston3.jpg",
            "Imagenes/Piston4.jpg"
        ],
        descripcion: `
            <p>El pistón normal empuja bloques hasta 12 espacios cuando recibe energía, pero no los trae de vuelta al desactivarse. Útil para mover bloques o crear puertas simples.</p>
        `
    },
    {
        id: "bloque12",
        nombre: "PISTON PEGAJOSO",
        mainImage: "Imagenes/PistonP.jpg",
        stepImages: [
            "Imagenes/PistonP2.jpg",
            "Imagenes/PistonP3.jpg",
            "Imagenes/PistonP4.jpg"
        ],
        descripcion: `
            <p>El pistón pegajoso funciona igual que el normal, pero puede "pegarse" al bloque que empuja, trayéndolo de vuelta cuando se desactiva. Esencial para puertas automáticas y mecanismos complejos.</p>
        `
    },
    {
        id: "bloque14",
        nombre: "TOLVA",
        mainImage: "Imagenes/Tolva.jpg",
        stepImages: [
            "Imagenes/TolvaA.jpg",
            "Imagenes/TolvaB.jpg",
            "Imagenes/TolvaC.jpg"
        ],
        descripcion: `
            <p>La tolva recoge ítems que caen sobre ella o los extrae de contenedores superiores, y los transfiere a un contenedor conectado. Es la base de los sistemas de almacenamiento automático.</p>
        `
    },
    {
        id: "bloque15",
        nombre: "MESA DE CRAFTEO",
        mainImage: "Imagenes/Crafteo.jpg",
        stepImages: [
            "Imagenes/CrafteoA.jpg",
            "Imagenes/CrafteoB.jpg",
            "Imagenes/CrafteoC.jpg"
        ],
        descripcion: `
            <p>Esta mesa de crafteo genera el objeto con el cual la programas cuando la activas con redstone genera el objeto con los objetos necesarios para el crafteo.</p>
        `
    }
];

// --- LOGICA DE NAVEGACION ---

let currentPage = '';
let currentSubPage = '';
let currentUser = null; // Almacena el usuario logueado: { id, username }


//  Manejar el intento de login

function handleLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('login-error');

    const username = usernameInput ? usernameInput.value : '';
    const password = passwordInput ? passwordInput.value : '';

    // Validación de usuario y contraseña con backend PHP
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                if (errorElement) errorElement.style.display = 'none';
                currentUser = data.user; // Guardar usuario logueado
                navigateTo('main'); // Navega a la página principal si es correcto
            } else {
                if (errorElement) {
                    errorElement.textContent = data.message || "Usuario o contraseña incorrectos.";
                    errorElement.style.display = 'block';
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
            if (errorElement) {
                errorElement.textContent = "Error al conectar con el servidor.";
                errorElement.style.display = 'block';
            }
        });
}


//Alternar entre Login y Registro

function toggleLoginRegister(view) {
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');

    // Ocultar ambos primero (dentro del contenedor de login, no la app entera)
    // Nota: login-view es el ID del contenedor principal de login en el HTML actual.
    // Necesitamos ajustar la visibilidad de las tarjetas internas si queremos mantener el fondo.
    // Pero según el HTML, 'login-view' y 'register-view' son hermanos directos de 'app'.

    if (view === 'login') {
        if (loginView) loginView.style.display = 'flex';
        if (registerView) registerView.style.display = 'none';
    } else {
        if (loginView) loginView.style.display = 'none';
        if (registerView) registerView.style.display = 'flex';
    }
}


// Manejar el registro de usuario

function handleRegister(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('reg-username');
    const passwordInput = document.getElementById('reg-password');
    const errorElement = document.getElementById('register-error');

    const username = usernameInput.value;
    const password = passwordInput.value;

    fetch('add_user.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Cuenta creada exitosamente. Por favor inicia sesión.");
                toggleLoginRegister('login');
                usernameInput.value = '';
                passwordInput.value = '';
                if (errorElement) errorElement.style.display = 'none';
            } else {
                if (errorElement) {
                    errorElement.textContent = data.message || "Error al crear cuenta.";
                    errorElement.style.display = 'block';
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
            if (errorElement) {
                errorElement.textContent = "Error de conexión.";
                errorElement.style.display = 'block';
            }
        });
}


/*
  Navega entre las vistas principales y sub-vistas
  La vista principal ('login' o 'main')
  La sub-página ('home', 'bloques', 'mecanismos')
  Parámetro extra (ej. 'principiante')
 */
function navigateTo(page, subPage = 'home', param = null) {
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');
    const mainView = document.getElementById('main-view');

    if (page === 'login') {
        if (loginView) loginView.style.display = 'flex';
        if (registerView) registerView.style.display = 'none';
        if (mainView) mainView.style.display = 'none';

        // Resetear campos de login
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const errorElement = document.getElementById('login-error');
        if (usernameInput) usernameInput.value = '';
        if (passwordInput) passwordInput.value = '';
        if (errorElement) errorElement.style.display = 'none';

        currentUser = null; // Limpiar usuario al salir

    } else if (page === 'main') {
        if (loginView) loginView.style.display = 'none';
        if (registerView) registerView.style.display = 'none';
        if (mainView) mainView.style.display = 'block';

        navigateToSubPage(subPage, param);
    }
    currentPage = page;
}

// Muestra la sub-página correcta dentro del main-view
function navigateToSubPage(subPage, param) {
    const viewHome = document.getElementById('view-home');
    const viewBloques = document.getElementById('view-bloques');
    const viewMecanismos = document.getElementById('view-mecanismos');
    const viewUsuarios = document.getElementById('view-usuarios');

    // Ocultar todas las sub-vistas primero
    if (viewHome) viewHome.style.display = 'none';
    if (viewBloques) viewBloques.style.display = 'none';
    if (viewMecanismos) viewMecanismos.style.display = 'none';
    if (viewUsuarios) viewUsuarios.style.display = 'none';

    // Mostrar la seleccionada
    if (subPage === 'home') {
        if (viewHome) viewHome.style.display = 'block';
    } else if (subPage === 'bloques') {
        if (viewBloques) {
            viewBloques.style.display = 'block';
            renderBloques();
        }
    } else if (subPage === 'mecanismos') {
        if (viewMecanismos) {
            viewMecanismos.style.display = 'block';
            renderMecanismos(param);
        }
    } else if (subPage === 'usuarios') {
        if (viewUsuarios) {
            viewUsuarios.style.display = 'block';
            renderUsers();
        }
    }

    currentSubPage = subPage;

    // Actualizar estado activo en la navegación lateral
    updateSidebarActiveState(subPage, param);
}

// Renderiza el contenido de losmecanismos
function renderMecanismos(level) {
    const container = document.getElementById('view-mecanismos');
    if (!container) return;

    let title = "MECANISMOS";
    if (level === 'principiante') title = "MECANISMOS PARA PRINCIPIANTES";
    if (level === 'medio') title = "MECANISMOS DE DIFICULTAD MEDIA";
    if (level === 'experto') title = "MECANISMOS PARA EXPERTOS";

    // Filtrar mecanismos por nivel
    let filteredMecanismos = mecanismosData.filter(m => m.nivel === level);

    let accordionHTML = filteredMecanismos.map((m, index) => {
        // Determinar si es video o imagen
        let mediaElement = '';
        if (m.gifUrl.endsWith('.mp4')) {
            mediaElement = `<video src="${m.gifUrl}" autoplay loop muted playsinline class="img-fluid"></video>`;
        } else {
            mediaElement = `<img src="${m.gifUrl}" alt="GIF del Mecanismo ${m.nombre}" class="img-fluid">`;
        }
        //Todo lo del Acordeon 
        return `
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
                            ${m.descripcion}
                        </div>
                        <div class="col-md-4">
                            ${mediaElement}
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3"><img src="${m.stepImages[0]}" class="img-fluid" alt="Paso 1"></div>
                        <div class="col-3"><img src="${m.stepImages[1]}" class="img-fluid" alt="Paso 2"></div>
                        <div class="col-3"><img src="${m.stepImages[2]}" class="img-fluid" alt="Paso 3"></div>
                        <div class="col-3"><img src="${m.stepImages[3]}" class="img-fluid" alt="Paso 4"></div>
                    </div>
                </div>
            </div>
        </div>
    `}).join('');

    container.innerHTML = `
        <h2>${title}</h2>
        <div class="accordion" id="mecanismos-accordion">
            ${accordionHTML}
        </div>
    `;
}

// Renderiza el contenido de bloques 
function renderBloques() {
    const container = document.getElementById('view-bloques');
    if (!container) return;

    let accordionHTML = bloquesData.map((b, index) => `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading-bloque-${b.id}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-bloque-${b.id}" aria-expanded="false" aria-controls="collapse-bloque-${b.id}">
                    BLOQUE NO.${index + 1} < ${b.nombre} >
                </button>
            </h2>
            <div id="collapse-bloque-${b.id}" class="accordion-collapse collapse" aria-labelledby="heading-bloque-${b.id}" data-bs-parent="#bloques-accordion">
                <div class="accordion-body">
                    <h3>INFORMACION SOBRE EL BLOQUE: ${b.nombre}</h3>
                    <div class="row mb-3">
                        <div class="col-md-8">
                            ${b.descripcion}
                        </div>
                        <div class="col-md-4">
                            <img src="${b.mainImage}" alt="${b.nombre}" class="img-fluid">
                        </div>
                    </div>
                    <div class="row">
                        ${b.stepImages.map(img => `
                            <div class="col-3"><img src="${img}" class="img-fluid"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <h2>INFORMACION SOBRE BLOQUES</h2>
        <div class="accordion" id="bloques-accordion">
            ${accordionHTML}
        </div>
    `;
}

// Resalta el ítem activo en el sidebar
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

document.addEventListener('DOMContentLoaded', () => {
    // Listener para el botón de login
    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }

    // Listener para registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Iniciar en login
    navigateTo('login');
});

// Renderiza la vista de usuarios según permisos
function renderUsers() {
    const adminSection = document.getElementById('admin-section');
    const currentUsernameDisplay = document.getElementById('current-username-display');

    if (currentUsernameDisplay && currentUser) {
        currentUsernameDisplay.textContent = currentUser.username;
    }

    // Si es Aby mostrar panel de admin
    if (currentUser && currentUser.username === 'Aby') {
        if (adminSection) adminSection.style.display = 'block';

        const tableBody = document.querySelector('#users-table tbody');
        if (!tableBody) return;

        fetch('get_users.php')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    tableBody.innerHTML = data.users.map(user => `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.username}</td>
                            <td>
                                <button class="btn btn-danger btn-sm" onclick="handleDeleteUser(${user.id})">Eliminar</button>
                            </td>
                        </tr>
                    `).join('');
                } else {
                    console.error('Error al obtener usuarios:', data.message);
                }
            })
            .catch(error => console.error('Error:', error));
    } else {
        // Si no es Aby, ocultar panel de admin
        if (adminSection) adminSection.style.display = 'none';
    }
}

// Maneja la eliminación de cuenta
function handleDeleteSelf() {
    if (!currentUser) return;
    if (!confirm("¿Estás seguro de que quieres eliminar TU cuenta? Esta acción no se puede deshacer.")) return;

    deleteUserRequest(currentUser.id, true);
}

// Maneja la eliminación de un usuario (Admin)
function handleDeleteUser(id) {
    if (!confirm("¿Estás seguro de que quieres eliminar este usuario?")) return;
    deleteUserRequest(id, false);
}

// Petición para eliminar usuario
function deleteUserRequest(id, isSelf) {
    fetch('delete_user.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                if (isSelf) {
                    alert("Tu cuenta ha sido eliminada.");
                    navigateTo('login');
                } else {
                    renderUsers(); // Actualizar lista
                }
            } else {
                alert("Error al eliminar usuario: " + (data.message || "Desconocido"));
            }
        })
        .catch(error => console.error('Error:', error));
}
