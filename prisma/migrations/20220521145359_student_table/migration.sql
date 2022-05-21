-- CreateTable
CREATE TABLE `student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_student` VARCHAR(9) NOT NULL,
    `institution` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `immigration` DATETIME(3) NULL,
    `birthCountry` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(255) NOT NULL,
    `nation` VARCHAR(255) NOT NULL,
    `homePhone` VARCHAR(10) NOT NULL,
    `mobilePhone` VARCHAR(10) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `student_id_student_key`(`id_student`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
