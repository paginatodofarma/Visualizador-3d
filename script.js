let scene, camera, renderer, model, controls;

// Inicializar la escena
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true; // Habilitar WebXR para AR
    document.getElementById('viewer').appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

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
    console.log('Loading model:', modelName);
    if (model) {
        scene.remove(model);
    }
    const loader = new THREE.GLTFLoader();
    loader.load(`Modelos/${modelName}`, (gltf) => {
        console.log('Model loaded successfully');
        model = gltf.scene;
        // Centrar y escalar el modelo
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 5 / maxDim;
        model.scale.setScalar(scale);
        scene.add(model);
    }, (progress) => {
        console.log('Loading progress:', progress);
    }, (error) => {
        console.error('Error loading model:', error);
    });
}

function animate() {
    renderer.setAnimationLoop(() => {
        controls.update();
        renderer.render(scene, camera);
    });
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();