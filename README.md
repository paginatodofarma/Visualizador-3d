# Visualizador 3D con AR para Archivos GLB

Este proyecto es una página web estática que utiliza `<model-viewer>` de Google para visualizar modelos 3D en formato GLB, con soporte para Realidad Aumentada (AR).

## Características

- Visualización 3D interactiva de modelos GLB
- Soporte para AR en dispositivos compatibles (WebXR, Scene Viewer, Quick Look)
- Controles de cámara y rotación automática
- Lista de modelos disponibles en la carpeta `Modelos/` y subcarpetas
- **Compartir enlaces:** Genera URLs directas a modelos específicos para compartir

## Configuración de GitHub Pages

1. Sube este repositorio a GitHub.
2. Ve a la configuración del repositorio (Settings).
3. En la sección "Pages", selecciona la rama `main` y la carpeta raíz (`/`).
4. Guarda los cambios. GitHub Pages generará la URL de tu sitio.

## Configuración del Listado Automático

1. **Asegúrate de que el repositorio sea público** en GitHub (Settings > General > Visibility: Public). La API de GitHub requiere repositorios públicos para acceso anónimo.
2. Edita `index.html` y reemplaza los valores en el script:
   - `const owner = 'tuusuario';` con tu nombre de usuario de GitHub.
   - `const repo = 'tunombre-repo';` con el nombre de tu repositorio (sin espacios, minúsculas).
   - `const branch = 'main';` si usas otra rama (por defecto 'main').
3. Sube los cambios a GitHub.

El listado se actualizará automáticamente al cargar la página, obteniendo los archivos .glb de la carpeta `Modelos/` y sus subcarpetas vía la API de GitHub.

## Estructura del Proyecto

- `index.html`: Página principal con el visualizador.
- `Modelos/`: Carpeta que contiene los archivos .glb.
- `README.md`: Este archivo.

## Agregar Más Modelos

1. Coloca tus archivos .glb en la carpeta `Modelos/`.
2. Edita `index.html` y agrega un `<li>` en la lista con el onclick correspondiente.

## Dependencias

- `<model-viewer>`: Librería de Google para visualización 3D. Se carga desde CDN.

## Soporte AR

El visualizador incluye soporte para AR en:
- WebXR (navegadores compatibles)
- Scene Viewer (Android)
- Quick Look (iOS)

Asegúrate de que tu dispositivo y navegador soporten AR.