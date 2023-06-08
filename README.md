# Like Me - Backend: I

Este repositorio contiene una API simple de Express.js que se conecta a una base de datos PostgreSQL. Proporciona dos puntos finales para recuperar y crear publicaciones.

## Requisitos previos

Antes de ejecutar la aplicación, asegúrese de tener instalados los siguientes elementos:

- [Node.js](https://nodejs.org) (v12 o superior)
- [PostgreSQL](https://www.postgresql.org/) (v10 o superior)

## Empezando

Para comenzar, siga los siguientes pasos:

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Instala las dependencias ejecutando el siguiente comando:

```bash
npm install
```

4. Asegúrate de tener un servidor PostgreSQL en funcionamiento y actualiza los detalles de conexión en el archivo `index.js` si es necesario.

```javascript
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "likeme",
    password: "postgres",
    port: 5432,
    allowExitOnIdle: true
})
```

5. Inicia el servidor de desarrollo ejecutando el siguiente comando:

```bash
npm start
```
o
```bash
npm run dev
```

El servidor se ejecutará en el puerto 3000. Puedes acceder a los puntos finales de la API utilizando la siguiente URL base: `http://localhost:3000`.

## Puntos finales

### Obtener publicaciones

```
GET /posts
```

Este punto final devuelve todas las publicaciones existentes en la base de datos.

### Crear publicación

```
POST /posts
```

Este punto final permite crear una nueva publicación. Debe enviar un objeto JSON en el cuerpo de la solicitud con los siguientes campos: `titulo`, `url` y `descripcion`. El campo `likes` se establecerá automáticamente en 0.

## Manejo de errores

Si ocurre algún error en el servidor durante las solicitudes, se devolverá una respuesta con el código de estado 500 y un mensaje de error.

Espero que esta información sea útil. Si tienes alguna otra pregunta, no dudes en hacerla.
