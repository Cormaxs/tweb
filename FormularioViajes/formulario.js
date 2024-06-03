
const travelForm = document.getElementById('travelForm'); 
travelForm.addEventListener('submit', function(event) {
  // Evita el envío automático del formulario
  event.preventDefault(); 
  //obtengo los valores
  const origin = document.getElementById('origen').value;
  const destination = document.getElementById('destino').value;
  const date = document.getElementById('fecha').value;
  // Valida si todos los campos están completos y que no sean el mismo origin y destino
  if (origin && destination && date && origin !== destination) {
    //verifico si las fechas es a partir del dia actual en adelante, luego creo el archivo jsn y capturo los datos
    const capturaDatos = verificarFecha(origin, destination,date);
    //si no devuelve false
    if(capturaDatos !== false){
      //formateo de ejemplo de como usar los datos
    return console.log(" Origen del viaje: ", capturaDatos.origin,"\n Destino del viaje: ", capturaDatos.destination , "\n Fecha del viaje: ", capturaDatos.date);
    }else{return false;}
  } else {
    return alert('Asegurese de no selecionar el mismo origen y destino');
  }
});



function verificarFecha(origin, destination,date){
    //fecha del dia
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; // Agregar 1 para obtener el mes real (enero = 1)
    const dia = fechaActual.getDate();
    const hora = fechaActual.getHours();
   
    //fecha del calendario seleccionado date
    const dateParts = date.split('-'); // Divide la fecha en un array por "-"
    const year = parseInt(dateParts[0]); // Convierte el año (índice 0) a entero
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

  // empezar validacion
  if (year < año) {
    alert('solo se permite buscar una fecha desde el año, mes y dia actual en adelante')
    return false; // Año del calendario es anterior al año actual
  } else if (year === año) {
    // Si los años son iguales, validar mes
    if (month < mes) {
      alert('solo se permite buscar una fecha desde el año, mes y dia actual en adelante');
      return false; // Mes del calendario es anterior al mes actual
    } else if (month === mes) {
      // Si los meses son iguales, validar día
      if (day < dia) {
        alert('solo se permite buscar una fecha desde el año, mes y dia actual en adelante');
        return false; // Día del calendario es anterior al día actual
      }
    }
  }

  // Si todas las validaciones pasan, la fecha del calendario es válida y armo el Json
  return CreateJson(origin,destination,date);
}



function CreateJson(origin, destination, date){//crea un json con los datos del formulario
    const datosJson = {
        "origin": origin,
        "destination": destination,
        "date": date
      };
     return datosJson;// Aquí puedes realizar acciones con los datos (ej: enviar a una API, mostrar resultados, etc.)
}

