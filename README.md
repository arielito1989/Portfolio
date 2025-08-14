# Portfolio de Ariel Nogueroles

Este es el código fuente del portfolio web de Ariel Nogueroles, un programador y estudiante de ciberseguridad. El objetivo de este proyecto es mostrar sus habilidades, experiencia y proyectos de una manera moderna y profesional.

## Tecnologías Utilizadas

Este proyecto fue construido utilizando las siguientes tecnologías:

- **Frontend:**
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
- **Estilos:**
  - [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones:**
  - [Framer Motion](https://www.framer.com/motion/)
- **Iconos:**
  - [React Icons](https://react-icons.github.io/react-icons/)
- **Formularios:**
  - [React Hook Form](https://react-hook-form.com/)
- **Linting:**
  - [ESLint](https://eslint.org/)

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

```
portfolio/
├── public/
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   │   ├── certificates.json
│   │   └── projects.json
│   ├── styles/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

- **`public`**: Contiene los archivos estáticos que no son procesados por Vite.
- **`src`**: Contiene el código fuente de la aplicación.
  - **`assets`**: Contiene imágenes y otros recursos.
  - **`components`**: Contiene los componentes de React, organizados en `layout`, `sections` y `ui`.
  - **`data`**: Contiene los archivos JSON con la información de los proyectos y certificados.
  - **`styles`**: Contiene los estilos globales (en este caso, principalmente la configuración de Tailwind CSS).
  - **`App.jsx`**: Es el componente principal de la aplicación.
  - **`main.jsx`**: Es el punto de entrada de la aplicación.
- **Archivos de configuración**: Contiene los archivos de configuración para Vite, Tailwind CSS, PostCSS y ESLint.

## Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).

### Instalación

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/arielito1989/portfolio.git
    ```

2.  Navega al directorio del proyecto:

    ```bash
    cd portfolio
    ```

3.  Instala las dependencias:

    ```bash
    npm install
    ```

### Ejecución

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo y la abrirá en [http://localhost:5173](http://localhost:5173).

## Scripts Disponibles

En el archivo `package.json`, puedes encontrar los siguientes scripts:

- **`npm run dev`**: Inicia la aplicación en modo de desarrollo.
- **`npm run build`**: Compila la aplicación para producción.
- **`npm run lint`**: Ejecuta el linter (ESLint) para revisar el código.
- **`npm run preview`**: Inicia un servidor local para previsualizar la compilación de producción.

## Despliegue

Este proyecto está listo para ser desplegado en plataformas como [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/). Simplemente conecta tu repositorio de Git a una de estas plataformas y sigue las instrucciones para desplegar un proyecto de Vite.

## Hoja de Ruta

Aquí hay una lista de las mejoras planificadas para este proyecto. Cada vez que se complete una tarea, se marcará como finalizada.

### Rendimiento
- [x] Implementar carga diferida (Lazy Loading) para las imágenes.
- [x] Optimizar las imágenes para la web (compresión y formatos modernos).
- [x] Implementar división de código (Code Splitting) para las secciones.

### Accesibilidad (a11y)
- [x] Verificar y corregir el contraste de color.
- [x] Añadir texto alternativo descriptivo a todas las imágenes.
- [x] Asegurar que la navegación con teclado sea posible y visible.
- [x] Utilizar etiquetas HTML semánticas en todo el sitio.

### Calidad del Código
- [x] Añadir tipado con JSDoc o migrar a TypeScript.
- [x] Mover información sensible a variables de entorno.
- [x] Refactorizar y crear componentes más pequeños y reutilizables.

### SEO
- [x] Añadir meta tags descriptivos en `index.html`.
- [x] Implementar meta tags de Open Graph y Twitter Cards.
- [x] Crear un archivo `sitemap.xml`.

### Funcionalidades
- [x] Implementar un interruptor de modo claro/oscuro.
- [x] Añadir soporte para múltiples idiomas (internacionalización).
- [x] Crear una sección de blog.

### Mejoras de Diseño (UI/UX)
- [ ] Refinar la jerarquía tipográfica para dar más peso al nombre.
- [ ] Unificar el color de acento para una mayor coherencia.
- [ ] Explorar un layout asimétrico para la sección de inicio.
- [ ] Mejorar las animaciones con efectos escalonados (stagger).