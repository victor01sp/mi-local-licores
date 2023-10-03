import inicio from "../page/inicio.js";
import recepcionIDNombre from "../page/recepcionIDNombre.js";

export default ()=>{

    const main =  getElement('#main')

    const Route = new Hash()

    Route.param('/', inicio)
    Route.param('/recepcion', inicio)
    Route.param('/recepcion/:id_categoria', recepcionIDNombre)

    Route.dispatch(()=> main.innerHTML = '')
}