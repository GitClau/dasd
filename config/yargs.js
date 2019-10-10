// const argv...

// comando crear Crear un elemento por hacer
// --descripcion - d


// comando actualizar 'Actualiza el estado completado de una tarea'
//     --descripcion - d
//     --completado - c true

// --help


//ya que se repite mucho la estructura de base y limite pues se define como options un parametro que se pasa a las funciones más adelante




// const argv = require('yargs')
//     .command('crear', 'Crear un elemento por hacer', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripcion de la tarea por hacer'
//         }
//     })
//     .command('actualizar', 'Actualiza el estado completado de una tarea', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripcion de la tarea por hacer'
//         },
//         completado: {
//             default: true,
//             alias: 'c',
//             desc: 'Marca como completado o pendiente una tarea'
//         }

//     })
//     .command('borrar', 'borrar un elemento por hacer', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripcion de la tarea por hacer'
//         }
//     })
//     .help()
//     .argv;


// para hacer un poco más sencillo el código y no repetir tanto creamos las constantes que se repiten

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: descripcion
    }, {
        completado: completado
    })
    .command('borrar', 'borrar un elemento por hacer', {
        descripcion: descripcion
    })
    .command('actualizarcompletado', 'Actualiza el estado completado de una tarea', {
        descripcion: descripcion
    }, {
        completado: completado
    })
    .help()
    .argv;

module.exports = {
    argv
}