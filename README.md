
# Cliente HTTP para Canvas LMS

Desarrollo de aplicación hecha en NodeJs para obtener via REST los datos ofrecidos por la API de Canvas LMS.

Para ver el proyecto primero clonar o descargar el repositorio.

    git clone https://github.com/sonidiaz/clientHttpCanvas.git

Después

    cd clientHttpCanvas
    npm install
 

Es necesario generar una conexión OAUTH2 por lo tanto tenemos que disponer de un CLIENT_SECRET y de un CLIENT_ID. Tendrá que crear un archivo llamado **credentials.js** en el directorio `src` agregando el siguiente contenido:


    const  CLIENT_ID  =  '<CLIENT_ID>';
    const  CLIENT_SECRET  = '<CLIENT_SECRET>';
    const  CLIENT_CANVAS_TEST  =  '<CLIENT_CANVAS_TEST>';
    module.exports  = {TOKEN,CLIENT_ID,CLIENT_SECRET,CLIENT_CANVAS_TEST}

Una vez realizado esto levantamos el proyecto en modo desarrollo con el siguiente comando

    npm start


`