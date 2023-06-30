//saludo inicial
let mensajeBienvenida = "Bienvenidos a la APP de Movie Tickets"
alert(mensajeBienvenida);

let totalEntradas = 0;  // variable que acumula el total de entradas
let precioTotal = 0;   //variable que acumula el precio total
const precioEntrada = 700;  //precio unico para todas las entradas
let seguirComprando = true;  //variable de control para seguir comprando


let nombreCiudadElegida = "";
let ciudadElegida = 0;
let nombrePeliculaElegida = "";
let peliculaElegida = 0;
let fechaElegida = "";
let horarioElegido = "";
let cantidadEntradas = 0;
let confirmacion = "";

do {
    nombreCiudadElegida = "";
    ciudadElegida = seleccionarComplejo();
    nombrePeliculaElegida = "";
    peliculaElegida = seleccionarPelicula();
    horarioElegido = seleccionarHorario(ciudadElegida, peliculaElegida);
    cantidadEntradas = ingresarCantidadEntradasAComprar();
    confirmacion = confirmarCompra();
    if (confirmacion)   //se agrega al carrito
    {
        totalEntradas = totalEntradas + cantidadEntradas;
        precioTotal = precioTotal + cantidadEntradas * precioEntrada;
    }
    seguirComprando = interrogoSiContinuoComprando();
} while (seguirComprando);
alert("Ud. compró un total de " + totalEntradas + " pagando $" + precioTotal);

function seleccionarComplejo() {
    //selección del complejo donde comprar las entradas
    let continuar = true;
    let ciudadElegida;

    do {
        alert('Selecciona tu ciudad' + '\n' +
            '1 - Complejo Recoleta' + '\n' +
            '2 - Complejo Pilar' + '\n' +
            '3 - Complejo Mar del Plata' + '\n' +
            '4 - Complejo La Plata' + '\n' +
            '5 - Complejo Mendoza' + '\n' +
            '6 - Complejo Rosario' + '\n' +
            '7 - Complejo Bahía Blanca');
        ciudadElegida = parseInt(prompt("Selecciona tu ciudad:"));
        if ((!isNaN(ciudadElegida)) && ((ciudadElegida >= 1 && ciudadElegida <= 7)))
            continuar = false;
        else
            alert("Ingresó una opción inválida.")
    } while (continuar);

    switch (ciudadElegida) {
        case 1:
            nombreCiudadElegida = "Complejo Recoleta";
            break;
        case 2:
            nombreCiudadElegida = "Complejo Pilar";
            break;
        case 3:
            nombreCiudadElegida = "Complejo Mar del Plata";
            break;
        case 4:
            nombreCiudadElegida = "Complejo La Plata";
            break;
        case 5:
            nombreCiudadElegida = "Complejo Mendoza";
            break;
        case 6:
            nombreCiudadElegida = "Complejo Rosario";
            break;
        case 7:
            nombreCiudadElegida = "Complejo Bahía Blanca";
            break;
    }
    alert("Ud seleccionó la ciudad: " + nombreCiudadElegida);
    return ciudadElegida;
}

function seleccionarPelicula() {
    //selección de la película de interés
    let continuar = true;
    let peliculaElegida;

    do {
        alert('Selecciona la película' + '\n' +
            '1 - SUPER MARIO BROS: LA PELICULA - 2D CAST' + '\n' +
            '2 - LA EXTORSIÓN - 2D CAST' + '\n' +
            '3 - GUARDIANES DE LA GALAXIA VOL. 3 - 2D CAST' + '\n' +
            '4 - RAPIDOS Y FURIOSOS X - 2D CAST' + '\n' +
            '5 - RAPIDOS Y FURIOSOS X - 3D CAST' + '\n' +
            '6 - LA SIRENITA - 3D CAST' + '\n' +
            '7 - SPIDER-MAN: A TRAVÉS DEL SPIDER-VERSO - 2D CAST' + '\n' +
            '8 - TRANSFORMERS: EL DESPERTAR DE LAS BESTIAS - 2D CAST' + '\n' +
            '9 - TRANSFORMERS: EL DESPERTAR DE LAS BESTIAS - 3D CAST' + '\n' +
            '10 - FLASH - 2D CAST' + '\n' +
            '11 - BOOGEYMAN: TU MIEDO ES REAL');
        peliculaElegida = parseInt(prompt("Selecciona tu película:"));
        if ((!isNaN(peliculaElegida)) && ((peliculaElegida >= 1 && peliculaElegida <= 9)))
            continuar = false;
        else
            alert("Ingresó una opción inválida.")
    } while (continuar);

    switch (peliculaElegida) {
        case 1:
            nombrePeliculaElegida = "SUPER MARIO BROS: LA PELICULA - 2D CAST";
            break;
        case 2:
            nombrePeliculaElegida = "LA EXTORSIÓN - 2D CAST";
            break;
        case 3:
            nombrePeliculaElegida = "GUARDIANES DE LA GALAXIA VOL. 3 - 2D CAST";
            break;
        case 4:
            nombrePeliculaElegida = "RAPIDOS Y FURIOSOS X - 3D CAST";
            break;
        case 5:
            nombrePeliculaElegida = "LA SIRENITA - 3D CAST";
            break;
        case 6:
            nombrePeliculaElegida = "SPIDER-MAN: A TRAVÉS DEL SPIDER-VERSO - 2D CAST";
            break;
        case 7:
            nombrePeliculaElegida = "TRANSFORMERS: EL DESPERTAR DE LAS BESTIAS - 3D CAST";
            break;
        case 8:
            nombrePeliculaElegida = "FLASH - 2D CAST";
            break;
        case 9:
            nombrePeliculaElegida = "BOOGEYMAN: TU MIEDO ES REAL";
            break;
    }

    alert("Ud seleccionó la película: " + nombrePeliculaElegida);
    return peliculaElegida;
}

function seleccionarHorario(ciudad, pelicula) {
    //selección del horario
    let continuar = true;
    let horarioElegido;
    let listaHorarios = armarListadoHorarios(ciudad);

    do {
        alert('Seleccione el horario de la película ' + nombrePeliculaElegida + '\n' + listaHorarios);
        horarioElegido = parseInt(prompt("Selecciona tu horario:"));
        if ((!isNaN(horarioElegido)) && ((horarioElegido >= 1 && horarioElegido <= 4)))
            continuar = false;
        else
            alert("Ingresó una opción inválida.")
    } while (continuar);

    fechaElegida = getFechaElegida(ciudad, horarioElegido);
    alert("Ud seleccionó el horario: " + fechaElegida);
    return horarioElegido;
}

function armarListadoHorarios(ciudad) {
    let horarios = "";

    switch (ciudad) {
        case 1:
        case 3:
        case 5:
            {
                horarios = '1 - Miercolés 7 de Junio - 18:30' + '\n' +
                    '2 - Miercolés 7 de Junio - 21:00' + '\n' +
                    '3 - Jueves 8 de Junio - 18:30' + '\n' +
                    '4 - Jueves 8 de Junio - 21:00';
            }
            break;
        case 2:
        case 4:
        case 6:
            {
                horarios = '1 - Miercolés 7 de Junio - 19:00' + '\n' +
                    '2 - Miercolés 7 de Junio - 21:20' + '\n' +
                    '3 - Jueves 8 de Junio - 19:00' + '\n' +
                    '4 - Jueves 8 de Junio - 21:20';
            }
            break;
        case 7:
        case 8:
        case 9:
            {
                horarios = '1 - Miercolés 7 de Junio - 18:00' + '\n' +
                    '2 - Miercolés 7 de Junio - 20:40' + '\n' +
                    '3 - Jueves 8 de Junio - 18:00' + '\n' +
                    '4 - Jueves 8 de Junio - 20:40';
            }
            break;
    }
    return horarios;
}

function getFechaElegida(ciudad, horarioElegido) {
    switch (horarioElegido) {
        case 1:
            {
                if (ciudad == 1 || ciudad == 3 || ciudad == 5)
                    return "Miercolés 7 de Junio - 18:30";
                else if (ciudad == 2 || ciudad == 4 || ciudad == 6)
                    return "Miercolés 7 de Junio - 19:00";
                else
                    return "Miercolés 7 de Junio - 18:00";
            }
        case 2:
            {
                if (ciudad == 1 || ciudad == 3 || ciudad == 5)
                    return "Miercolés 7 de Junio - 21:00";
                else if (ciudad == 2 || ciudad == 4 || ciudad == 6)
                    return "Miercolés 7 de Junio - 21:20";
                else
                    return "Miercolés 7 de Junio - 20:40";
            }
        case 3:
            {
                if (ciudad == 1 || ciudad == 3 || ciudad == 5)
                    return "Jueves 8 de Junio - 18:30";
                else if (ciudad == 2 || ciudad == 4 || ciudad == 6)
                    return "Jueves 8 de Junio - 19:00";
                else
                    return "Jueves 8 de Junio - 18:00";
            }
        case 4:
            {
                if (ciudad == 1 || ciudad == 3 || ciudad == 5)
                    return "Jueves 8 de Junio - 21:00";
                else if (ciudad == 2 || ciudad == 4 || ciudad == 6)
                    return "Jueves 8 de Junio - 21:20";
                else
                    return "Jueves 8 de Junio - 20:40";
            }
    }
}

function ingresarCantidadEntradasAComprar() {
    let cantidadEntradas = 0;
    do {
        cantidadEntradas = parseInt(prompt("Ingrese la cantidad de Entradas que quiere comprar:"));
        if (!isNaN(cantidadEntradas))
            continuar = false;
        else
            alert("Ingrese un número válido.")
    } while (continuar);
    return cantidadEntradas;
}

function confirmarCompra() {
    let respuesta;
    let continuar = true;
    do {
        respuesta = prompt("Confirma la compra de " + cantidadEntradas + " entradas para la película " + nombrePeliculaElegida + " para el día " + fechaElegida + " S/N");
        if (respuesta == "S" || respuesta == "N" || respuesta == "s" || respuesta == "n")
            continuar = false;
        else
            alert("Ingrese S/N")
    } while (continuar);
    if (respuesta == "S" || respuesta == "s")
        return true;
    else // (respuesta == "N")
        return false;
}

function interrogoSiContinuoComprando() {
    let respuesta;
    let continuar = true;
    do {
        respuesta = prompt("Desea seguir comprando entradas S/N");
        if (respuesta == "S" || respuesta == "N" || respuesta == "s" || respuesta == "n")
            continuar = false;
        else
            alert("Ingrese S/N")
    } while (continuar);
    if (respuesta == "S" || respuesta == "s")
        return true;
    else // (respuesta == "N")
        return false;
}