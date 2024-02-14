# Express
npm i express

# TypeScript
npm i -D typescript
npm i -D ts-node
npm i -D @types/node
npm i -D @types/express

# Modulos adicionales
npm i cors
npm i -D @types/cors
npm i -D nodemon
npm i -D @faker-js/faker


# TypeORM
npm i typeorm reflect-metadata mysql2

# Crear tsconfig.json
npx tsc --init

    # {
    #     "compilerOptions": {
    #         "target": "ES2021",
    #         "experimentalDecorators": true, 
    #         "emitDecoratorMetadata": true,
    #         "rootDir": "./src",
    #         "outDir": "./dist",
    #     },
    #     "include": [
    #         "src/**/*.ts"
    #     ],
    #     "exclude": [
    #         "node_modules"
    #     ]
    # }
    
# Configurar package.json

    # {
    #     "main": "dist/server.js",
    #     "scripts": {
    #         "build": "npx tsc",
    #         "start": "node dist/server.js",
    #         "dev": "nodemon --files src/server.ts"
    #     },
    # }




# Crear migraciones en TypeORM manualmente
npx typeorm migration:create ./src/migrations/CreateUser

# Ejecutar migraciones en TypeORM 
npx typeorm-ts-node-commonjs migration:run -d ./src/data-source.ts 

# Revierte la última migración en TypeORM. Para revertir las demás, repetir el comando en orden inverso.
npx typeorm-ts-node-commonjs migration:revert -d ./src/data-source.ts


# Crear modelos
npx typeorm entity:create ./src/models/User

# ------------------------------------------------------------------------------
# Despues de refactorizar la estructura de directorio de la base de datos
# ------------------------------------------------------------------------------

# Crear migraciones manualmente
npx typeorm migration:create ./src/database/migrations/CreateUsers
npx typeorm migration:create ./src/database/migrations/CreateTatooArtist
npx typeorm migration:create ./src/database/migrations/CreateAppointments
npx typeorm migration:create ./src/database/migrations/CreateShedules



# Ejecutar migraciones
npx typeorm-ts-node-commonjs migration:run -d ./src/database/data-source.ts 

# Crear modelos
npx typeorm entity:create ./src/models/Role
npx typeorm entity:create ./src/models/User
npx typeorm entity:create ./src/models/Student
npx typeorm entity:create ./src/models/Teacher
npx typeorm entity:create ./src/models/Course
npx typeorm entity:create ./src/models/Enrollment

CREATE USERS

INSERT INTO users (username, phone, password, first_name, last_name, birthday, email) VALUES
('john_doe', '+1234567890', 'pass123', 'John', 'Doe', '1990-05-15', 'john.doe@example.com'),
('jane_smith', '+1987654321', 'abc456', 'Jane', 'Smith', '1988-08-20', 'jane.smith@example.com'),
('mike_jackson', '+1122334455', 'mikepass', 'Mike', 'Jackson', '1975-02-10', 'mike.jackson@example.com'),
('emily_adams', '+1445566778', 'emily123', 'Emily', 'Adams', '1995-11-25', 'emily.adams@example.com'),
('david_williams', '+1778899001', 'davidpass', 'David', 'Williams', '1982-07-30', 'david.williams@example.com'),
('sarah_brown', '+1654321987', 'sarahpass', 'Sarah', 'Brown', '1998-04-05', 'sarah.brown@example.com'),
('chris_johnson', '+1888777666', 'chrispass', 'Chris', 'Johnson', '1987-09-12', 'chris.johnson@example.com'),
('lisa_anderson', '+1223344556', 'lisa123', 'Lisa', 'Anderson', '1979-01-03', 'lisa.anderson@example.com'),
('kevin_miller', '+1555666777', 'kevinpass', 'Kevin', 'Miller', '1992-03-08', 'kevin.miller@example.com'),
('amanda_white', '+1333222111', 'amanda123', 'Amanda', 'White', '1986-06-18', 'amanda.white@example.com'),
('ryan_thomas', '+1777888999', 'ryanpass', 'Ryan', 'Thomas', '1980-10-22', 'ryan.thomas@example.com'),
('jennifer_taylor', '+1999888777', 'jennifer123', 'Jennifer', 'Taylor', '1991-12-14', 'jennifer.taylor@example.com'),
('mark_hall', '+1888999111', 'markpass', 'Mark', 'Hall', '1973-08-28', 'mark.hall@example.com'),
('natalie_lee', '+1777555999', 'natalie123', 'Natalie', 'Lee', '1984-05-07', 'natalie.lee@example.com'),
('peter_scott', '+1444333222', 'peterpass', 'Peter', 'Scott', '1990-07-02', 'peter.scott@example.com'),
('karen_evans', '+1999777666', 'karenpass', 'Karen', 'Evans', '1976-04-30', 'karen.evans@example.com'),
('matthew_baker', '+1666555444', 'matthew123', 'Matthew', 'Baker', '1993-09-16', 'matthew.baker@example.com'),
('amy_clark', '+1222333444', 'amy123', 'Amy', 'Clark', '1983-02-11', 'amy.clark@example.com'),
('robert_jones', '+1888444555', 'robertpass', 'Robert', 'Jones', '1989-11-09', 'robert.jones@example.com'),
('rebecca_hill', '+1555444333', 'rebecca123', 'Rebecca', 'Hill', '1981-06-26', 'rebecca.hill@example.com');


CREATE TATTOO_ARTISTS

INSERT INTO tattoo_artists (nickname, password, first_name, last_name, email, role) VALUES
('coolguy123', 'coolpass', 'Michael', 'Johnson', 'michael.johnson@example.com', 'admin'),
('soccerlover', 'soccer123', 'Emily', 'Robinson', 'emily.robinson@example.com', 'admin'),
('bookworm', 'bookpass', 'Daniel', 'Garcia', 'daniel.garcia@example.com', 'admin'),
('musicfanatic', 'music123', 'Jessica', 'Martinez', 'jessica.martinez@example.com', 'admin'),
('gamer4life', 'gamerpass', 'Andrew', 'Hernandez', 'andrew.hernandez@example.com', 'admin'),
('artlover', 'artpass', 'Sophia', 'Lopez', 'sophia.lopez@example.com', 'admin');
('techgeek', 'techpass', 'David', 'Perez', 'david.perez@example.com', 'admin'),
('traveler', 'travelpass', 'Olivia', 'Gonzalez', 'olivia.gonzalez@example.com', 'admin'),
('foodie', 'foodpass', 'Ethan', 'Sanchez', 'ethan.sanchez@example.com', 'admin'),
('fitnessjunkie', 'fitnesspass', 'Ava', 'Ramirez', 'ava.ramirez@example.com', 'admin');
