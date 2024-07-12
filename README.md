# GEshop

Este proyecto es un pequeño E-Shop desarrollado con [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0. Incluye funcionalidades como mostrar productos por categoría, agregar productos al carrito, y ver detalles de productos. El proyecto utiliza varias librerías y frameworks, como Tailwind CSS y Owl Carousel.

Tiene el fin de cubrir la prueba tecnica otorgada el dia 11: Prueba técnica Frontend Senior

Cubre los requerimientos:

    • Mostrar todos los productos en una página agrupados por categoría.
    • Se debe mostrar la imagen, nombre y precio del producto junto a un botón que lo agregue a un carrito de compra.
    • Se deben guardar los productos seleccionado en el carrito de compra.
    • Se debe visualizar un botón donde se vea cuantos productos hay en el carrito.
    • Al hacer clic en el botón se debe mostrar un popup el listado de los productos del carrito con su precio y el total a pagar.
    • Al hacer clic en el producto me debe redireccionar a otra página donde se muestre el detalle del producto.
    • Se debe incluir el botón de agregar al carrito de compra.

## Prerrequisitos

Antes de empezar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

## 1. Clona el repositorio

## 2. Ingresa a la carpeta
    cd tu-repositorio

## 3. Instala las librerias
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    npm install ngx-owl-carousel-o

## 4. Configuraciones de Archivos ( En caso no esten configurados)

    # tailwind.config.js:
    #=====================
    #   module.exports = {
    #    content: [
    #       './src/**/*.{html,ts}',
    #   ],
    #   theme: {
    #       extend: {},
    #   },
    #   plugins: [],
    #   };

    #Añade las directivas de Tailwind en src/styles.scss.
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';
    @import 'ngx-owl-carousel-o/lib/styles/scss/owl.carousel';
    @import 'ngx-owl-carousel-o/lib/styles/scss/owl.theme.default';
    
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Contacto
Para cualquier consulta o sugerencia, por favor contacta a jeanfranco211@gmail.com

Este `README.md` cubre todos los pasos necesarios para instalar y configurar las dependencias del proyecto, así como para iniciar el servidor de desarrollo.


