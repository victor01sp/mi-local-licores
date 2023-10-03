import style from "./setting/style.js"
import routes from "./src/routes.js"
import header from "./components/header.js"
import navigate from "./components/navigate.js"
const app =()=>{

    const root = getElement('#root')
    root.innerHTML = `<main class="main_igx9mZT" id="main"></main>`
    root.prepend(header())
    root.append(navigate())

    style()
    routes()

    addEventListener('contextmenu', e => e.preventDefault())
}

export default app