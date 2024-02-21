# My Blog

Este es un proyecto de Next.js iniciado con `create-next-app` y ahora utilizando Prisma como ORM para la gestión de la base de datos PostgreSQL.

## Pre-requisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma CLI](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-cli)

## Instalación

Sigue estos pasos para instalar el proyecto en tu computadora:

1. Clona el repositorio:

```
   git clone https://github.com/Amador-Dania/my-blog
   cd my-blog
```

2. Instala las dependencias:

```
   npm install
```

3. Configura la base de datos con Prisma:

- Asegúrate de que PostgreSQL esté instalado y en ejecución.
- Configura tus variables de entorno para la conexión a PostgreSQL en un archivo `.env` en la raíz del proyecto siguiendo el ejemplo de `.env.example`.
- Inicializa Prisma en tu proyecto (si no lo has hecho durante la configuración de Prisma):
  ```
  npx prisma init
  ```
- Ejecuta las migraciones de Prisma para actualizar tu base de datos:
  ```
  npx prisma migrate dev --name init
  ```

4. Ejecuta el servidor de desarrollo:

```
   npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

## Aprende Más

Para aprender más sobre Next.js y Prisma, echa un vistazo a los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características de Next.js y su API.
- [Aprende Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.
- [Documentación de Prisma](https://www.prisma.io/docs/) - aprende a utilizar Prisma en tus proyectos.

Puedes echar un vistazo al [repositorio de Next.js en GitHub](https://github.com/vercel/next.js/) - tus comentarios y contribuciones son bienvenidos.

## Despliegue en Vercel

La forma más fácil de desplegar tu aplicación Next.js es usar la plataforma Vercel de los creadores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para más detalles.
