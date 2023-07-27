Social Media Application
Developed by Dusan Velimirovic
July 2023

###### SASS
    npm install sass

###### Backend

Modules: express, mysql nodemon, bcryptjs, jsonwebtoke, cookie-parser, cors
Modules Client side: Axios

Starting backened server: npm start

Routes: u osnovi endpoints koje nasa app koristi kako bi upravljala odredjenim podacima
        Istovremeno predstavlja deo URL objekta
        Takodje, definise kako app endpoints URIs odgovaraju na client request 

        U upravljanju sa routes je generalno dobra praksa da imamo kontolere

JWT (JSON Web Token)
    Omogucava web aplikacijama da budu daleko bezbednije
    Omogucava bezbedno transmitovanje podataka izmedju entitete preko JSON objekta (digitalni potpis).
    Gde se koristi:
        1. Autorizacija
        2. Razmena informacija izmedju entiteta
            Kao recimo kada korisnik drustvene mreze zeli da obrise svoj post. Prvo se proverava da li taj post pripada njemu pa se tek onda dozvoljava brisanje


CORS (Cross-origin resource sharing) 
    Omogucava da api moze da pristupi samo nas url (a ne neki strani).
    Drugim recima, omogucava konstrolisani pristup ogranicenim resursima (domenska kontrola pristupa)
    https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

    