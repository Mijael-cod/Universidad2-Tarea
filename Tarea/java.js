const primeraapi = "http://localhost:8080/api/alumno/all";
const segundaapi = "https://pokeapi.co/api/v2/pokemon/ditto";
const terceraapi = "http://localhost:8080/api/alumno/all3";

const cargaapi = async () => {
    const consulta = await consumiendoapi(primeraapi);
    const consulta2 = await consumiendoapi(segundaapi);
    const consulta3 = await consumiendoapi(terceraapi);
    console.log(consulta);
    console.log(consulta2);
    console.log(consulta3);
}

const consumiendoapi = async (api)=>{
    const respuesta = await fetch(api);
    return respuesta.json();
}   


function cargaDatosPersona() {

    $.ajax({
        url: terceraapi,
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            var myItems = respuesta;
            var valor = '';
            for (i = 0; i < myItems.length; i++) {
                valor +=
                    '<tr>' +
                    '<td>' + myItems[i].id + '</td>' +
                    '<td>' + myItems[i].nif + '</td>' +
                    '<td>' + myItems[i].nombre + '</td>' +
                    '<td>' + myItems[i].apellido1 + '</td>' +
                    '<td>' + myItems[i].apellido2 + '</td>' +
                    '<td>' + myItems[i].ciudad + '</td>' +
                    '<td>' + myItems[i].direccion + '</td>' +
                    '<td>' + myItems[i].telefono + '</td>' +
                    '<td>' + myItems[i].fecha_nacimiento + '</td>'+
                    '<td>' + myItems[i].sexo + '</td>' +
                    '<td>' + myItems[i].tipo + '</td>' +
                    '<td>' +
                    ' <button class="btn btn-danger" onclick="borrarPersona(' + myItems[i].id + ')">Eliminar</button>' +
                    '<button class="btn btn-warning" onclick="detallesPersona(' + myItems[i].id + ')">Editar</button>' +

                    '</td>' +
                    '</tr > ';


            }
            $('#tbodyPersona').html(valor);
        }

    })
}




