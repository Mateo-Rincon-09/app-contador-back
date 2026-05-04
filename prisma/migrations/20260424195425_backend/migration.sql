/*
  Warnings:

  - The `status` column on the `saving` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('active', 'closed', 'deleted');

-- AlterTable
ALTER TABLE "category" ADD COLUMN     "status" "StatusType" NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE "saving" DROP COLUMN "status",
ADD COLUMN     "status" "StatusType" NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE "transaction" ADD COLUMN     "status" "StatusType" NOT NULL DEFAULT 'active';

-- DropEnum
DROP TYPE "SavingType";
