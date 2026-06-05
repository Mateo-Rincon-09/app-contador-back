# 💰 App-Contador-Back

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0+-purple.svg)](https://www.prisma.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Backend moderno para control financiero, construido con Node.js, TypeScript y Prisma. Soporta autenticación, gestión de categorías, metas de ahorro, transacciones y login con Firebase.

## 🚀 Funcionalidades principales

- Registro y login de usuarios con JWT
- Login con Google mediante token Firebase
- Actualización segura de contraseña
- Gestión de categorías con creación, listado y eliminación lógica
- Gestión de metas de ahorro con creación, listado y eliminación lógica
- Gestión de transacciones con creación, listado y eliminación lógica
- Vínculo opcional de transacciones a ahorros para actualizar progreso
- Filtros y paginación en listados
- API REST protegida con middleware JWT
- Base de datos PostgreSQL con Prisma
- Contenerización con Docker Compose

## 🛠️ Stack Tecnológico

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- JWT
- Firebase Admin
- Docker / Docker Compose

## 📦 Instalación

### Requisitos

- Node.js 18+
- npm
- PostgreSQL o Docker
- Docker Compose (opcional)

### Pasos

```bash
git clone https://github.com/Mateo-Rincon-09/app-contador-back.git
cd app-contador-back
npm install
```

### Variables de entorno

Copia el archivo de ejemplo y completa las variables:

```bash
copy .env.template .env
```

Variables necesarias:

- `PORT`
- `SECRET_TOKEN`
- `DATABASE_URL`
- `FIREBASE_SERVICE_ACCOUNT`

`FIREBASE_SERVICE_ACCOUNT` debe contener todo el JSON de la cuenta de servicio en una sola línea, con los saltos de línea del `private_key` como `\n`.

### Base de datos

```bash
npx prisma generate
npx prisma migrate dev
```

### Con Docker

```bash
docker-compose up -d
```

## 🏃‍♂️ Comandos

```bash
npm run dev
npm run build
npm start
```

## 🔑 Autenticación

Todas las rutas protegidas requieren el header:

```
Authorization: Bearer <token>
```

## 📚 API REST

### Auth

- `POST /auth/register`
  - body: `{ name, lastName, email, password }`
  - respuesta: usuario creado + token JWT

- `POST /auth/login`
  - body: `{ email, password }`
  - respuesta: usuario + token JWT

- `POST /auth/google`
  - body: `{ token }`
  - descripción: inicia sesión con un token Firebase ID y crea el usuario si no existe.

- `PUT /auth/update-password/:id`
  - body: `{ newPassword }`
  - descripción: actualiza la contraseña del usuario especificado.

### Categorías

- `POST /category/new`
  - protegida
  - body: `{ name, dateCreated, status? }`
  - crea una categoría nueva para el usuario autenticado.

- `GET /category/:userId`
  - protegida
  - devuelve todas las categorías activas de un usuario.

- `POST /category/list`
  - protegida
  - body: `{ currentPage, pageSize, searchValue?, dateCreated? }`
  - devuelve resultados paginados y filtrados.

- `DELETE /category/delete/:categoryId`
  - protegida
  - marca la categoría como `deleted`.

### Ahorros

- `POST /saving/new`
  - protegida
  - body: `{ amount, dateCreated, dateStart, dateEnd, status?, amountProgress? }`
  - crea una meta de ahorro vinculada al usuario autenticado.

- `POST /saving/list`
  - protegida
  - body: `{ currentPage, pageSize, searchValue?, dateCreated?, dateRangeActive?, dateStart?, dateEnd? }`
  - devuelve ahorros activos con filtros de búsqueda y fecha.

- `DELETE /saving/delete/:savingId`
  - protegida
  - marca el ahorro como `deleted`.

### Transacciones

- `POST /transaction/create`
  - protegida
  - body: `{ type, amount, description, dateCreated, categoryId, savingId? }`
  - crea una transacción y, si se incluye `savingId`, actualiza el progreso del ahorro asociado.

- `POST /transaction/list`
  - protegida
  - body: `{ currentPage, pageSize, searchValue?, dateCreated?, type? }`
  - devuelve transacciones activas paginadas y filtradas.

- `DELETE /transaction/delete/:transactionId`
  - protegida
  - marca la transacción como `deleted`.

## 🧠 Comportamiento adicional

- Los listados usan paginación con `currentPage` y `pageSize`.
- El filtro de `dateCreated` aplica el rango completo del día.
- Las búsquedas en categorías, ahorros y transacciones son insensibles a mayúsculas.
- Las eliminaciones son suaves (`status: deleted`) para preservar el historial.
- Las transacciones con `savingId` actualizan el progreso del ahorro asociado.

## 🏗️ Estructura del proyecto

```
src/
├── app.ts
├── config/
│   ├── envs.ts
│   ├── firebaseAdmin.ts
│   ├── jwt.adapter.ts
│   ├── pagination.ts
│   └── prisma.ts
├── domain/
│   ├── models/
│   │   ├── dto-auth/
│   │   ├── dto-category/
│   │   ├── dto-saving/
│   │   └── dto-transaction/
│   ├── generated/
│   └── enum/
└── presentation/
    ├── auth/
    ├── category/
    ├── saving/
    ├── transaction/
    ├── middleware/
    ├── routes.ts
    └── server.ts
```

## 🐳 Docker

El proyecto incluye un servicio PostgreSQL en `docker-compose.yml`:

- `postgres` en el puerto `5432`
- usuario: `postgres`
- contraseña: `123456`
- base de datos: `app_contador`

## 🤝 Contribuciones

1. Haz un fork del repositorio
2. Crea una rama de función (`git checkout -b feature/mi-mejora`)
3. Realiza tus cambios
4. Sube la rama
5. Abre un Pull Request

## 📄 Licencia

MIT

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
