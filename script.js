let scene, camera, renderer, model;

// Inicializar la escena
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true; // Habilitar WebXR para AR
    document.getElementById('viewer').appendChild(renderer.domElement);

    // Luz
    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Cargar lista de modelos
    fetch('models.json')
        .then(response => response.json())
        .then(models => {
            const select = document.getElementById('model-select');
            models.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                select.appendChild(option);
            });
            // Cargar el primer modelo por defecto
            if (models.length > 0) {
                loadModel(models[0]);
            }
        });

    // Evento para cambiar modelo
    document.getElementById('model-select').addEventListener('change', (e) => {
        loadModel(e.target.value);
    });

    // Botón AR
    document.body.appendChild(THREE.ARButton.createButton(renderer));

    animate();
}

function loadModel(modelName) {
    if (model) {
        scene.remove(model);
    }
    const loader = new THREE.GLTFLoader();
    loader.load(`Modelos/${modelName}`, (gltf) => {
        model = gltf.scene;
        scene.add(model);
    }, undefined, (error) => {
        console.error('Error loading model:', error);
    });
}

function animate() {
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();