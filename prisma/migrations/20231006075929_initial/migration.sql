/*
  Warnings:

  - The `type` column on the `AGENT` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AGENT_TYPE" AS ENUM ('HUMAN', 'BOT');

-- AlterTable
ALTER TABLE "AGENT" DROP COLUMN "type",
ADD COLUMN     "type" "AGENT_TYPE" NOT NULL DEFAULT 'HUMAN';

-- DropEnum
DROP TYPE "TYPE";
