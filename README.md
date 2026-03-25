# Visualizador 3D y AR para Archivos GLB

Este proyecto es un visualizador web para modelos 3D en formato GLB, compatible con visualización normal y Realidad Aumentada (AR).

## Características

- **Visualización 3D Normal**: Usa Three.js para renderizar modelos en el navegador.
- **Modo AR**: Usa AR.js para experiencia de Realidad Aumentada en dispositivos móviles.
- **Modelos**: Los archivos GLB se almacenan en la carpeta `Modelos/`.

## Cómo Usar

1. Coloca tus archivos .glb en la carpeta `Modelos/`.
2. Actualiza la lista de modelos en `script.js` si es necesario.
3. Abre `index.html` en un navegador para seleccionar un modelo y modo de visualización.

## Para GitHub Pages

1. Sube este repositorio a GitHub.
2. Ve a Settings > Pages y selecciona la rama principal (main) y carpeta raíz (/).
3. El sitio estará disponible en `https://tuusuario.github.io/turepo/`.

## Requisitos

- Navegador moderno con soporte WebGL.
- Para AR: Dispositivo móvil con cámara y navegador compatible (Chrome, Safari).

## Dependencias

- Three.js (CDN)
- AR.js (CDN)