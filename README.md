Importante utilizar la última versión de las bases de datos. 
En caso de necesitar un cambio en las bases de datos contactar a Sebastian Molano.

Para el despliegue:
- Ejecutar el comando ```npm install``` para instalar las dependencias

- Cambiar los datasources en el archivo index.ts para conectarse a las bases de datos apropiadas (locales o remotas).

Para correr el servidor: Ejecutar el comando ```npm run build``` seguido del comando npm run start.

<br>

Los queries se hacen todos en GraphQL. Para hacer un query se debe conectar a la dirección de la máquina que hostea el servidor en el puerto 3001 en el único endpoint de graphql. 
```bash
http://localhost:3001/graphql
```

<h2> IMPORTANTE </h2>
El servidor por defecto tiene una opción para probar graphql en una página web. Mientras esta opción está activada, la conexión al endpoint de arriba va a devolver una página web muy útil para poder hacer queries de prueba. Para evitar este comportamiento y solo quedarse con el servidor, desactivar la opción graphiql: true que está dentro del main en index.ts

<br>

<h2> Cómo hacer un Query HTTP </h2>
En graphql, un query se hace por medio del protocolo HTTP. Para hacer esto, se puede mandar un mensaje POST con el query graphql asociado a lo que se quiere buscar. <br>

En este link, se da una explicación de cómo funciona un query por http en graphql:
[Query por medio de HTTP](https://www.apollographql.com/blog/graphql/basics/making-graphql-requests-using-http-methods/).

<br>
Para los microservicios en Java, se pueden guiar de este tutorial (desde la sección 4) 

[Java HTTP graphql fetching](https://www.baeldung.com/java-call-graphql-service)


<br>
En el archivo some_graphql_queries.txt hay algunos queries de ejemplo que se pueden probar que pueden probar. Para los queries de actualizar UPDATE, se puede utilizar el mismo query de create.