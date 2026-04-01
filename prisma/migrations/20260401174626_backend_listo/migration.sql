-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confirmPassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movimiento" (
    "id" TEXT NOT NULL,
    "montoIngreso" DOUBLE PRECISION,
    "montoGasto" DOUBLE PRECISION,
    "categoria" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Movimiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Saving" (
    "id" TEXT NOT NULL,
    "montoMeta" DOUBLE PRECISION,
    "progreso" DOUBLE PRECISION,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Saving_pkey" PRIMARY KEY ("id")
);

