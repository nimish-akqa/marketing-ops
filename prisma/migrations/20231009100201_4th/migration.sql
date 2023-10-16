/*
  Warnings:

  - You are about to drop the `_AGENTToPROJECT` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AGENTToPROJECT" DROP CONSTRAINT "_AGENTToPROJECT_A_fkey";

-- DropForeignKey
ALTER TABLE "_AGENTToPROJECT" DROP CONSTRAINT "_AGENTToPROJECT_B_fkey";

-- DropTable
DROP TABLE "_AGENTToPROJECT";
