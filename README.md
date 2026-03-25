# Visualizador 3D con AR para Archivos GLB

Este proyecto es una página web estática que utiliza `<model-viewer>` de Google para visualizar modelos 3D en formato GLB, con soporte para Realidad Aumentada (AR).

## Características

- Visualización 3D interactiva de modelos GLB
- Soporte para AR en dispositivos compatibles (WebXR, Scene Viewer, Quick Look)
- Controles de cámara y rotación automática
- Lista de modelos disponibles en la carpeta `Modelos/` y subcarpetas
- **Compartir enlaces:** Genera URLs directas a modelos específicos para compartir
- **Modo Pose + Camisa Virtual:** Prototipo experimental con MediaPipe y Three.js para superponer una camisa 3D basada en pose corporal

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
...
## Modo Pose + Camisa Virtual (Experimental)

Este proyecto incluye un prototipo experimental (`prototipo-pose-camisa.html`) que combina MediaPipe Pose Landmarker con Three.js para crear una experiencia de "puesta de ropa virtual":

### Cómo usar:
1. Abre `prototipo-pose-camisa.html` en un navegador moderno con webcam.
2. Permite acceso a la cámara.
3. Haz clic en "Iniciar/Detener Detección" para activar la detección de pose.
4. La camisa 3D azul se posicionará automáticamente sobre tu torso.
5. Usa "Mostrar/Ocultar Camisa" para alternar la visibilidad.

### Características del prototipo:
- **Modelo 3D personalizado:** Camisa con torso, mangas y cuello usando geometrías Three.js.
- **Alineación refinada:** Usa múltiples landmarks (hombros, codos, caderas, rodillas) para mejor posicionamiento.
- **Selector de colores:** 6 colores disponibles para personalizar la camisa.
- **Ajuste automático:** La camisa se escala y rota según la pose detectada.

### Tecnologías:
- **MediaPipe Pose:** Detecta 33 landmarks corporales en tiempo real.
- **Three.js:** Renderiza la camisa 3D y la superpone sobre el video.
- **Webcam:** Captura video en vivo para análisis de pose.

### Mejoras recientes (v1.1):
- **Manejo robusto de errores:** Verificación de WebGL, null checks para camera3d/renderer, try-catch en funciones críticas.
- **Compatibilidad mejorada:** Detección automática de soporte WebGL, mensajes de error informativos.
- **Función de reinicio:** Botón para reiniciar la detección de pose y resetear posiciones.
- **Umbrales de detección reducidos:** De 0.5 a 0.3 para mejor detección en condiciones variables.
- **Indicadores visuales:** Estado de detección en tiempo real, logging mejorado para debugging.
- **Manejo de resize mejorado:** Verificación de objetos antes de actualizar.

### Requisitos del navegador:
- **WebGL:** Requerido para renderizado 3D (soporte en Chrome 51+, Firefox 45+, Safari 10+).
- **Webcam:** Para captura de video en vivo.
- **HTTPS:** Recomendado para acceso a webcam (GitHub Pages lo proporciona automáticamente).

### Solución de problemas:
- **"WebGL no soportado":** Actualiza tu navegador o usa uno compatible.
- **"Canvas 3D no encontrado":** Asegúrate de que el archivo se carga completamente.
- **Detección fallida:** Mejora la iluminación, reduce el umbral o reinicia la detección.
- **Errores de redimensionamiento:** Evitados con verificaciones robustas.