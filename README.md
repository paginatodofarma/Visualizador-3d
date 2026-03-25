# Visualizador 3D con AR para Archivos GLB

Este proyecto es una página web estática que utiliza `<model-viewer>` de Google para visualizar modelos 3D en formato GLB, con soporte para Realidad Aumentada (AR).

## Características

- Visualización 3D interactiva de modelos GLB
- Soporte para AR en dispositivos compatibles (WebXR, Scene Viewer, Quick Look)
- Controles de cámara y rotación automática
- Lista de modelos disponibles en la carpeta `Modelos/`

## Configuración de GitHub Pages

1. Sube este repositorio a GitHub.
2. Ve a la configuración del repositorio (Settings).
3. En la sección "Pages", selecciona la rama `main` y la carpeta raíz (`/`).
4. Guarda los cambios. GitHub Pages generará la URL de tu sitio.

## Estructura del Proyecto

- `index.html`: Página principal con el visualizador.
- `Modelos/`: Carpeta que contiene los archivos .glb.
- `README.md`: Este archivo.

## Agregar Más Modelos

1. Coloca tus archivos .glb en la carpeta `Modelos/`.
2. Edita `index.html` y `404.html`, agrega un `<li onclick="loadModel('nombre')">nombre</li>` en la lista, donde 'nombre' es el nombre del archivo sin .glb.

## Routing y URL directa por modelo

La página usa client-side routing. Cuando seleccionas un modelo, la URL cambia a:

`https://tuusuario.github.io/Visualizador-3d/nombre_del_modelo`

Esto permite URL directas para cada modelo, por ejemplo:

`https://paginatodofarma.github.io/Visualizador-3d/modelo5`.

El botón "Copiar URL del modelo seleccionado" copia la URL actual con el modelo en el path.

El archivo `404.html` asegura que GitHub Pages sirva `index.html` para rutas no existentes (como `/modelo5`) y se cargue el modelo correcto.

## Dependencias

- `<model-viewer>`: Librería de Google para visualización 3D. Se carga desde CDN.

## Soporte AR

El visualizador incluye soporte para AR en:
- WebXR (navegadores compatibles)
- Scene Viewer (Android)
- Quick Look (iOS)

Asegúrate de que tu dispositivo y navegador soporten AR.