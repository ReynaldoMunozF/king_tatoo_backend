# Welcome to my backend app

## king_tattoo



<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#futuras-funcionalidades">Futuras funcionalidades</a></li>
    <li><a href="#contribuciones">Contribuciones</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#webgrafia">Webgrafia</a></li>
    <li><a href="#desarrollo">Desarrollo</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Objetivo
Este proyecto requería una API funcional conectada a una base de datos 

## Sobre el proyecto
Decidí crear una aplicación web para ayudar a los amantes del tatuaje, que les permitiría crear y realizar un seguimiento de sus citas asi como solicitar alguna nueva. 


## Stack
Tecnologías utilizadas:
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![NodeJS](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Node) [![ExpressJS](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/) [![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://dev.mysql.com/doc/) [![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat)](https://jwt.io/introduction) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)



## Diagrama BD
!['imagen-db'](./img/bbdd.png)

## Instalación en local
1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones ``` 
5. ``` $ npm run dev ``` 


## Endpoints
<details>
<summary>Endpoints</summary>


    - REGISTER USER

            POST http://localhost:3000/authUser/register
        body:
        ``` js
            {
                "username" : "nuevoreynaldo52.munoz",
                "first_name": "reynaldo",
                "last_name": "munoz",
                "email" : "nuevoreynaldo52@example.com",
                "password": "123456"
            }
        ```

    - LOGIN

            POST http://localhost:3000/authUser/login  
        body:
        ``` js
            {
                
                 "email": "nuevoreynaldo52@example.com",
                 "password":"123456"

            }
        ```
    - USER PROFILE

            GET http://localhost:3000/api/users/1  
       
    - UPDATE PROFILE

            PATCH http://localhost:3000/api/users/10 
        body:
        ``` js
             {
                "username" : "cambionuevoreynaldo52.munoz",
                "first_name": "cambioreynaldo",
                "last_name": "munoz",
                "email" : "cambionuevoreynaldo52@example.com",
                "password": "123456"
            }
        ```
    - APPOINTMENT CREATION

            POST http://localhost:3000/appointments/ 
        body:
        ``` js
            {
                
                  "user_id": 1,
                  "tattoo_artist_id": 1,
                  "appointment_date": "2024-04-17 10:30:00"

            }
        ```
        
    - APPOINTMENT UPDATE

            PATCH http://localhost:3000/appointments/1
        body:
        ``` js
            {
                
                  "user_id": 1,
                  "tattoo_artist_id": 2,
                  "appointment_date": "2024-04-21 10:30:00"

            }
        ```
     - APPOINTMENT DELETE

            DELETE http://localhost:3000/appointments/1

     - APPOINTMENT FOR USERS

            GET http://localhost:3000/appointments/users/1 

     - APPOINTMENT FOR TATTOO_ARTIST

            GET http://localhost:3000/appointments/artists/1 





    - ...
</details>

## Futuras funcionalidades
[ ] Añadir admin, superadmin 
[ ] Vizualizar Diseño de tattoo
 

## Contribuciones
Las sugerencias y aportaciones son siempre bienvenidas.  

Puedes hacerlo de dos maneras:

1. Abriendo una issue
2. Crea un fork del repositorio
    - Crea una nueva rama  
        ```
        $ git checkout -b feature/nombreUsuario-mejora
        ```
    - Haz un commit con tus cambios 
        ```
        $ git commit -m 'feat: mejora X cosa'
        ```
    - Haz push a la rama 
        ```
        $ git push origin feature/nombreUsuario-mejora
        ```
    - Abre una solicitud de Pull Request

## Licencia
Este proyecto se encuentra bajo licencia de "ReynaldoM"

## Webgrafia:
Para conseguir mi objetivo he recopilado información de:
- https://www.npmjs.com/package//typeorm


## Agradecimientos:

Agradezco a mis compañeros el tiempo dedicado a este proyecto:

- *Erika*  
<a href="https://github.com/AkireOrl/" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> 

- **Gabriel**  
<a href="https://github.com/GabrielEscudillo" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

- ***Rodrigo***  
<a href="https://github.com/el-ro" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=green" target="_blank"></a> 

## Contacto
<a href = "mailto:reynaldo.munozf21@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="www.linkedin.com/in/reynaldo-muñoz-flores" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>
