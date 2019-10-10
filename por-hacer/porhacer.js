const fs = require('fs');

let listadoPorHacer = []; //se inicia un listado vacio

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {

        if (err)
            throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json'); // ahora son dos puntos y no uno ya que estamos en lo que sería el servidor en este caso en local dentro de la carpeta db

    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    //se guarda la informacion de la base de datos aquí y ahora ya que se ha hecho un push al listado con el contenido de por hacer
    guardarDB();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    console.log(index);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    console.log(nuevoListado);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

const filtradofinalizado = () => {
    cargarDB();

    let listadoFiltrado = listadoPorHacer.filter(tarea => {
        return tarea.completado == true;
    });
    console.log(listadoFiltrado);

    if (listadoPorHacer.length === listadoFiltrado.length) {
        return false;
    } else {
        listadoPorHacer = listadoFiltrado;
        guardarDB();
        return true;
    }

}




module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    filtradofinalizado
}