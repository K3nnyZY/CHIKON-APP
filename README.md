# Chikon App - Gestión Integral para Restaurantes

Chikon App es una solución digital integral para restaurantes, diseñada para facilitar la gestión de usuarios, productos, mesas, pedidos y pagos. La aplicación se divide en dos componentes: un robusto backend desarrollado con Django REST Framework y un frontend interactivo desarrollado con React.

## Backend
El backend de Chikon App está construido con Django REST Framework, proporcionando una API RESTful que permite a los restaurantes gestionar sus operaciones de manera eficiente.

### Funciones Principales

- **Gestión de usuarios (CRUD)**
- **Autenticación (Token JWT)**
- **Gestión de categorías (CRUD)**
- **Gestión de productos (CRUD)**
- **Gestión de mesas (CRUD)**
- **Gestión de pedidos (CRUD)**
- **Gestión de pagos (CRUD)**

### Librerías y Paquetes Utilizados

- Django REST framework
- drf-yasg (Documentación de la API)
- Simple JWT (Autenticación)
- Django CORS Headers
- Pillow (Manejo de imágenes)
- Django Filter (Filtros de datos)

### Instrucciones para Ejecutar el Proyecto

1. **Instalar las Dependencias del Proyecto**

    ```bash
    pip install -r requirements.txt
    ```

2. **Crear las Migraciones**

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

3. **Crear un Superusuario**

    ```bash
    python manage.py createsuperuser
    ```

4. **Ejecutar el Servidor de Desarrollo**

    ```bash
    python manage.py runserver
    ```

## Frontend
El frontend de Chikon App está desarrollado con React, permitiendo a los restaurantes gestionar su negocio a través de una interfaz de usuario moderna y eficiente.

### Módulos del Frontend

#### Módulo de Administración
Para los empleados del restaurante, incluye funcionalidades como:
- Gestión de usuarios (CRUD)
- Gestión de categorías (CRUD)
- Gestión de productos (CRUD)
- Gestión de mesas (CRUD)
- Gestión de pedidos y pagos:
  - Generar un pedido
  - Entregar pedido
  - Generar cuenta
  - Ver cuenta
  - Marcar como pagado y cerrar cuenta
- Consulta del historial de pagos

#### Módulo de Cliente
Para la interacción de los clientes con el restaurante, incluye funcionalidades como:
- Selección de una mesa
- Agregar productos al carrito
- Realizar un pedido
- Ver la lista de productos pedidos
- Solicitar la cuenta

### Librerías y Paquetes Utilizados

- [**Semantic UI React**](https://react.semantic-ui.com/)
- [**Sass**](https://sass-lang.com/)
- [**React Router**](https://reactrouter.com/)
- [**Lodash**](https://lodash.com/)
- [**Formik**](https://formik.org/)
- [**Yup**](https://www.npmjs.com/package/yup)
- [**React-Toastify**](https://www.npmjs.com/package/react-toastify)
- [**Sweetalert2**](https://sweetalert2.github.io/)
- [**React-Dropzone**](https://react-dropzone.js.org/)
- [**Classnames**](https://www.npmjs.com/package/classnames)
- [**Moment**](https://momentjs.com/)
- [**qrcode.react**](https://www.npmjs.com/package/qrcode.react)

### Instrucciones para Ejecutar el Proyecto

1. **Instalar las Dependencias del Proyecto**

    ```bash
    npm install
    ```

2. **Crear un Archivo `.env`**

    ```env
    REACT_APP_API_URL=http://localhost:8000/api
    ```

3. **Ejecutar el Servidor de Desarrollo**

    ```bash
    npm start
    ```

## Otra forma de ejecutar el proyecto (Docker-compose)
También se puede ejecutar el proyecto utilizando Docker-compose, se debe tener instalado Docker y Docker-compose en el sistema. Para ello, se deben ejecutar los siguientes comandos en el terminal:

1. **Construir el contenedor**

    ```bash
    docker-compose build
    ```

2. **Levantar el contenedor**

    ```bash
    docker-compose up
    ```

Este comando levantará dos contenedores: uno para el backend y otro para el frontend. El backend estará disponible en `http://localhost:8000` y el frontend en `http://localhost:3000`.