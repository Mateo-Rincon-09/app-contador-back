# 💰 App-Contador-Back

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0+-purple.svg)](https://www.prisma.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Aplicación backend moderna y escalable para el control financiero, construida con Node.js, TypeScript y Prisma. Diseñada siguiendo principios de Domain-Driven Design (DDD) para gestionar autenticación de usuarios, categorías, ahorros y transacciones con eficiencia.

## 🚀 Funcionalidades

- **Autenticación de usuarios**: Sistema seguro con JWT
- **Gestión de categorías**: Organiza gastos e ingresos con categorías personalizables
- **Seguimiento de ahorros**: Controla y administra metas de ahorro
- **Gestión de transacciones**: Registra y analiza movimientos financieros
- **API RESTful**: Endpoints claros y bien estructurados
- **Integración con base de datos**: Prisma ORM sobre PostgreSQL
- **Soporte Docker**: Despliegue en contenedores para un entorno consistente
- **TypeScript**: Implementación completamente tipada para mayor confiabilidad

## 🛠️ Stack Tecnológico

- **Backend**: Node.js con Express.js
- **Lenguaje**: TypeScript
- **Base de datos**: PostgreSQL con Prisma ORM
- **Autenticación**: JWT (JSON Web Tokens)
- **Contenerización**: Docker y Docker Compose
- **Arquitectura**: Domain-Driven Design (DDD)

## 📦 Instalación

### Requisitos previos

- Node.js (v18 o superior)
- Docker y Docker Compose
- npm o yarn

### Configuración

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Mateo-Rincon-09/app-contador-back.git
   cd app-contador-back
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   copy .env.template .env
   # Completa las variables de entorno en .env
   ```

4. **Configurar la base de datos**
   ```bash
   # Generar cliente de Prisma
   npx prisma generate

   # Ejecutar migraciones
   npx prisma migrate dev
   ```

5. **Opcional: iniciar con Docker**
   ```bash
   docker-compose up -d
   ```

## 🏃‍♂️ Uso

### Desarrollo

```bash
# Iniciar servidor en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor en producción
npm start
```

### Endpoints principales

La API ofrece los siguientes endpoints principales:

- **Autenticación**: `/auth/login`, `/auth/register`
- **Categorías**: `/categories`
- **Ahorros**: `/savings`
- **Transacciones**: `/transactions`

Para más detalles sobre la API, utiliza una herramienta como Postman o Insomnia para explorar los endpoints.

## 🏗️ Estructura del proyecto

```
src/
├── app.ts                 # Punto de entrada de la aplicación
├── config/                # Archivos de configuración
│   ├── envs.ts           # Variables de entorno
│   ├── jwt.adapter.ts    # Utilidades JWT
│   ├── pagination.ts     # Helpers de paginación
│   └── prisma.ts         # Cliente de Prisma
├── domain/               # Capa de dominio (DDD)
│   ├── models/           # DTOs y modelos de dominio
│   ├── generated/        # Tipos generados por Prisma
│   └── enum/             # Enumeraciones de la aplicación
└── presentation/         # Capa de presentación
    ├── routes.ts         # Rutas principales
    ├── server.ts         # Configuración del servidor
    ├── auth/             # Módulo de autenticación
    ├── category/         # Módulo de categorías
    ├── saving/           # Módulo de ahorros
    ├── transaction/      # Módulo de transacciones
    └── middleware/       # Middlewares personalizados
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Sigue estos pasos:

1. Haz un fork del repositorio
2. Crea una rama de función (`git checkout -b feature/mi-mejora`)
3. Realiza tus cambios (`git commit -m 'Describe tu cambio'`)
4. Sube la rama (`git push origin feature/mi-mejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo MIT. Revisa el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Mateo Rincón**
- GitHub: [@Mateo-Rincon-09](https://github.com/Mateo-Rincon-09)

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
