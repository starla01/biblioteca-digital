const fs = require('fs');

fs.readdir('./Documents/propiedad-industrial/2020', (error, files) => {
    if(error){
        throw error
    }
    console.log("Finalizar lectura");
    console.log(JSON.stringify(files))
});