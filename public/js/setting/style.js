export default ()=>{

    if(!localStorage.getItem('theme'))
        localStorage.setItem('theme', 'light')

    const themeLight = {
        'color-background' : '#EDF3FB',
        'color-item'    : '#ffffff',
        'color-letter'  : '#1c1c1e',
        'filter-img'    : 'initial'
    }
  
    const themeDark  = {
        'color-background' : '#1c1c1e',   
        'color-item' : '#2C2C2E',   
        'color-letter' : '#EDF3FB',
        'filter-img'   :'invert(82%) sepia(99%) saturate(0%) hue-rotate(102deg) brightness(111%) contrast(100%)'
    }

    const theme = localStorage.getItem('theme') == 'light' ? themeLight : themeDark

    const styleSetting = getElement('#style-setting')
    styleSetting.innerHTML = `:root {${ ArrayToString(Object.keys(theme), key => `--${ key } : ${ theme[key] };\n`) }}`
    
}