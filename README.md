# Rested Root - Sitio Web

Clon del sitio web de Rested Root (https://www.restedroot.org/)

## Estructura del Proyecto

```
Rested root/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos del sitio
├── js/
│   └── script.js      # JavaScript para interactividad
├── images/            # Carpeta para imágenes
└── README.md          # Este archivo
```

## Imágenes Requeridas

Coloca las siguientes imágenes en la carpeta `images/`:

1. `logo-background-header-large.png` - Imagen de fondo del header
2. `rested-root-willow-300dpi-brown.png` - Imagen del sauce en la sección hero
3. `rested-root-willow-300dpi.png` - Imagen del sauce en la sección "Tree of Change"

## Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Menú de navegación con dropdowns
- ✅ Menú hamburguesa para dispositivos móviles
- ✅ Animaciones suaves al hacer scroll
- ✅ Todas las secciones del sitio original:
  - Header con navegación
  - Hero section
  - How it Works
  - Our Cooperative
  - Services
  - Tree of Change
  - Testimonials
  - Footer completo

## Cómo Usar

1. Coloca las imágenes en la carpeta `images/`
2. Abre `index.html` en tu navegador
3. O usa un servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```

## Personalización

Puedes modificar los colores en el archivo `css/style.css` cambiando las variables CSS en `:root`:

```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #654321;
    --text-color: #333;
    --bg-color: #f5f5f5;
}
```

## Navegación

El sitio incluye enlaces de navegación a todas las secciones:
- About Us (Our Team, Our Theory of Change)
- Services (Services, Youth & Family Programs, Events)
- Testimonials (Feedback)
- More

## Notas

- Asegúrate de tener las imágenes con los nombres exactos mencionados arriba
- El sitio está optimizado para diferentes tamaños de pantalla
- Los enlaces del formulario de contacto pueden ser conectados a un backend según tus necesidades

