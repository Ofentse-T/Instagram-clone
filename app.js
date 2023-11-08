import bio from './Modules/bio.js'
import gallery from './Modules/gallery.js'
import nav from './Modules/nav.js'

const app = () => {
    return `
    ${nav()}
    <div class = "container">
    ${bio()}
    ${gallery()}
    </div>
    `
}

document.getElementById('root').innerHTML = app();