<div align="center">

# E-commerce Platform

<img alt="ReactJS" src="cart.png" width="100" /><br>


![Sveltekit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GIT](https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

![Node](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ExpressJs](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoBD](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

</div><br>

## Introducción

E-commerce Platform es una aplicación web de comercio electrónico que permite a los usuarios listar productos, editar, eliminar, añadir al carrito, y realizar pedidos. La plataforma está diseñada para ser escalable y fácilmente extensible, con características adicionales planificadas para futuras actualizaciones.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [API REST](#api-rest)

## Características

- **Lista de Productos**: Visualiza todos los productos disponibles.
- **CRUD de Productos**: Crear, leer, actualizar y eliminar productos.
- **Carrito de Compras**: Añadir productos al carrito y gestionar su contenido.
- **Gestión de Órdenes**: Realiza y administra pedidos.

## Tecnologías Utilizadas

### Frontend
- **Framework**: SvelteKit
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS

### Backend
- **Servidor**: Node.js con Express
- **Lenguaje**: TypeScript
- **Base de Datos**: MongoDB

## Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- MongoDB (versión 4.4 o superior)

### Clonar el Repositorio

```sh
git clone https://github.com/tu-usuario/e-commerce-platform.git
cd e-commerce-platform
```

### Instalación de Dependencias

#### Frontend

```sh
cd frontend
npm install
```

#### Backend

```sh
cd backend
npm install
```

## Uso

### Frontend

```sh
cd frontend
npm run dev
```

El frontend estará disponible en `http://localhost:5174`.

### Backend

```sh
cd backend
npm run dev
```

El backend estará disponible en `http://localhost:3000`.

## API REST

### Productos

- **GET /api/products**: Lista todos los productos.
- **GET /api/products/:id**: Obtiene un producto específico.
- **POST /api/products**: Crea un nuevo producto.
- **PUT /api/products/:id**: Actualiza un producto existente.
- **DELETE /api/products/:id**: Elimina un producto.

### Órdenes

- **GET /api/orders**: Lista todas las órdenes.
- **GET /api/orders/:id**: Obtiene una orden específica.
- **POST /api/orders**: Crea una nueva orden.
- **PUT /api/orders/:id**: Actualiza una orden existente.
- **DELETE /api/orders/:id**: Elimina una orden.


### Documentación

Para obtener documentación detallada sobre la API, consulte la colección Postman [E-commerce Platform API](https://documenter.getpostman.com/view/15768378/2sA3kPqk2j).

<div class="footer" align="right">
    &copy; 2024 Baenat
</div>