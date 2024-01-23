/*
  Warnings:

  - Added the required column `end` to the `Timeline` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Timeline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Timeline` ADD COLUMN `end` INTEGER NOT NULL,
    ADD COLUMN `start` INTEGER NOT NULL;
