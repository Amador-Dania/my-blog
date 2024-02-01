# My Blog

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Pre-requisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js]
- [npm]
- [PostgreSQL]

## Instalación

Sigue estos pasos para instalar el proyecto en tu computadora:

1. Clona el repositorio:

```bash
git clone https://github.com/Amador-Dania/my-blog
cd my-blog

```

2. Instala las dependencias

```bash

npm install


```

3.Ejecuta el servidor de desarrollo

```bash
npm run dev

```

4. Configura la base de datos:

Después de asegurarte de que PostgreSQL esté instalado y en ejecución:

**Crea la base de datos `myblog`:**

```sql
CREATE DATABASE myblog;
```

Ejecuta el script de migración ubicado en app/utils/migration.sql

Abre http://localhost:3000 con tu navegador para ver el resultado.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
