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
}];

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
    const loginView = document.getElementById('login-view');
    const mainView = document.getElementById('main-view');

    if (page === 'login') {
        if (loginView) loginView.style.display = 'flex'; // Login usa flex para centrar
        if (mainView) mainView.style.display = 'none';

        // Resetear campos de login
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const errorElement = document.getElementById('login-error');
        if (usernameInput) usernameInput.value = '';
        if (passwordInput) passwordInput.value = '';
        if (errorElement) errorElement.style.display = 'none';

    } else if (page === 'main') {
        if (loginView) loginView.style.display = 'none';
        if (mainView) mainView.style.display = 'block';

        navigateToSubPage(subPage, param);
    }
    currentPage = page;
}

/**
 * Muestra la sub-página correcta dentro del main-view
 */
function navigateToSubPage(subPage, param) {
    const viewHome = document.getElementById('view-home');
    const viewBloques = document.getElementById('view-bloques');
    const viewMecanismos = document.getElementById('view-mecanismos');

    // Ocultar todas las sub-vistas primero
    if (viewHome) viewHome.style.display = 'none';
    if (viewBloques) viewBloques.style.display = 'none';
    if (viewMecanismos) viewMecanismos.style.display = 'none';

    // Mostrar la seleccionada
    if (subPage === 'home') {
        if (viewHome) viewHome.style.display = 'block';
    } else if (subPage === 'bloques') {
        if (viewBloques) viewBloques.style.display = 'block';
    } else if (subPage === 'mecanismos') {
        if (viewMecanismos) {
            viewMecanismos.style.display = 'block';
            renderMecanismos(param); // Renderizar contenido dinámico
        }
    }

    currentSubPage = subPage;

    // Actualizar estado activo en la navegación lateral
    updateSidebarActiveState(subPage, param);
}

/**
 * Renderiza el contenido de mecanismos dinámicamente
 */
function renderMecanismos(level) {
    const container = document.getElementById('view-mecanismos');
    if (!container) return;

    let title = "MECANISMOS";
    if (level === 'principiante') title = "MECANISMOS PARA PRINCIPIANTES";
    if (level === 'medio') title = "MECANISMOS DE DIFICULTAD MEDIA";
    if (level === 'experto') title = "MECANISMOS PARA EXPERTOS";

    // Filtrar mecanismos por nivel
    let filteredMecanismos = mecanismosData.filter(m => m.nivel === level);

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
                            ${m.descripcion}
                        </div>
                        <div class="col-md-4">
                            <img src="${m.gifUrl}" alt="GIF del Mecanismo ${m.nombre}" class="img-fluid">
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
    `).join('');

    container.innerHTML = `
        <h2>${title}</h2>
        <div class="accordion" id="mecanismos-accordion">
            ${accordionHTML}
        </div>
    `;
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

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Listener para el botón de login (ahora es estático en el HTML)
    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }

    // Iniciar en login
    navigateTo('login');
});
