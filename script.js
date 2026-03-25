// Lista de modelos (puedes actualizar manualmente)
const models = ['prueba.glb'];

document.addEventListener('DOMContentLoaded', () => {
    const modelList = document.getElementById('model-list');
    models.forEach(model => {
        const modelItem = document.createElement('div');
        modelItem.className = 'model-item';
        modelItem.innerHTML = `
            <h3>${model}</h3>
            <button onclick="viewModel('${model}', 'normal')">Ver en 3D Normal</button>
            <button onclick="viewModel('${model}', 'ar')">Ver en AR</button>
        `;
        modelList.appendChild(modelItem);
    });
});

function viewModel(model, mode) {
    const url = `viewer.html?model=${encodeURIComponent(model)}&mode=${mode}`;
    window.open(url, '_blank');
}