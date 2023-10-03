export default ()=>{
    const ElementComponent = createHTML(`
        <div class="div_RAPYu72">
            <nav class="div_sVKUc89">
                <a href="#/" class="button_av6D9xa icon" data-page="inicio"><img src="public/img/icons/svg/icon-home.svg"></a>
                <a href="#/configuracion" class="button_av6D9xa icon" data-page="configuracion"><img src="public/img/icons/svg/icon-setting.svg"></a>
            </nav>
        </div>
    `) 

    const defPutFocus =()=>{
        const page = location.hash.split('/')[1] ?? 'inicio'
        const buttonFocus = ElementComponent.querySelector('a.focus')
        const buttonPage  = ElementComponent.querySelector(`a[ data-page = ${ (page == '' || page == 'recepcion')  ? 'inicio' : page } ]`)
        
        if(buttonFocus) buttonFocus.classList.remove('focus') 
        buttonPage.classList.add('focus')
    }

    defPutFocus()
    addEventListener('hashchange', defPutFocus)
    
    return ElementComponent
}