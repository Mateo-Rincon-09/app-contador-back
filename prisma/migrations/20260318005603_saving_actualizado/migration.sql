/*
  Warnings:

  - You are about to drop the column `agregarMonto` on the `Saving` table. All the data in the column will be lost.
  - You are about to drop the column `eliminarMonto` on the `Saving` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Saving" DROP COLUMN "agregarMonto",
DROP COLUMN "eliminarMonto",
ADD COLUMN     "progreso" DOUBLE PRECISION;
