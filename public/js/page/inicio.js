export default ()=>{
    const ElementComponent = createHTML(`
        <div class="div_69J38wz scroll-y">
            <div class="div_04bAm9R"><span class="loader"></span></div>
            <div class="div_36Bj2x6"></div>
        </div>
    `)

    const containerLoad = ElementComponent.querySelector('.div_04bAm9R')
    const containerItem = ElementComponent.querySelector('.div_36Bj2x6')
    
    const firstTime =  {
        render : true
    }

    const elementHTML =(data = {})=>{
        const element = createHTML(`
            <a href="#/recepcion/${ data.ID }" class="a_37VC2hx icon" id="a-${ data.ID }">
                <div class="div_pN383wq">
                    <img src="public/img/icons/svg/icon-drink-licor.svg">
                    <span>${ data.COUNT }</span>
                </div>
                <div class="div_iaB94Y2">
                    <span class="text-ellipsis">${ data.NAME }</span>
                    <img src="public/img/icons/svg/icon-arrow-right.svg">
                </div>
            </a>
        `)

        return element
    }

    const renderData =(Data = {})=>{

        const cantidadCategoria = Data.producto.reduce((contador, producto) => {
            contador[producto.ID_CATEGORIA] = (contador[producto.ID_CATEGORIA] || 0) + 1
            return contador;
        }, {})

        const Producto = Data.categoria.map(categoria => {
            return {...categoria, COUNT: cantidadCategoria[categoria.ID] || 0}
        })

        if(firstTime.render) {
            firstTime.render = false
            const elementTemp = document.createDocumentFragment()

            Producto.forEach(data => elementTemp.append(elementHTML(data)) )

            containerLoad.remove()
            containerItem.append(elementTemp)
            ElementComponent.append(containerItem)
        }
    }

    const loadData = async ()=>{
        const DataProductoCategoria    =  await fetch('./public/js/json/productoCategoria.json')
        const DataProductos         =  await fetch('./public/js/json/productos.json')
 
        const DataJSON = {
            categoria      : await DataProductoCategoria.json(),
            producto    : await DataProductos.json()
        }

        renderData(DataJSON)
    }

    loadData()

    containerItem.remove()
    main.append(ElementComponent)
}