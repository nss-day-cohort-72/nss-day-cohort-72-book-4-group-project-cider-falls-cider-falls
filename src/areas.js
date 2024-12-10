import { getAreas } from "./database.js";



export const displayAreas = () => {
    let html = `<ul>`
    let areas = getAreas()
    console.log(areas)
    for (const area of areas) {
        console.log(area)
        html += `
        <li 
        class="area-details"
        >${area.name}: supports ${area.services}
        </li>
        `
    }
    html += `</ul>`
    return html
}