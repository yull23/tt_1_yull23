# Technical Interview Project:

## Introduction:

This project is centered around the creation of a REST API for managing university enrollment. The main entities considered for this purpose are:

Student
Teacher
Enrollment
Semester
Technologies Used:

- Docker
- NestJs
- NodeJs
- TypeScript
- ORM: TypeORM

## Used Libraries:

- Utilization of environment variables:
  - config
  - cross-env
- Database query handling:
  - typeORM
  - pg
- Input data validation:
  - class-validator
  - class-transformer
- Logging control:
  - morgan
  - winston
- Cache manager:
  - cache-manager

## Building the REST API

The following Entity-Relationship Diagram (ERD) was proposed:

![Imagen de ejemplo](https://res.cloudinary.com/dx3atyo8q/image/upload/v1701287576/WhatsApp_Image_2023-11-29_at_2.52.43_PM_yvypo9.jpg)

Through this configuration, it would be possible to access relationships between entities to view the courses enrolled by a student for each semester, completed courses, carried out enrollments, interacted teachers, and the semesters in which enrollments took place.
