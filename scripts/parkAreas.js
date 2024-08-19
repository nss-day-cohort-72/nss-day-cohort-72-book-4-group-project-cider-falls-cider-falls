import { getParkAreas, getGuests } from "./database.js"

const areas = getParkAreas()   
const guests = getGuests()             


document.addEventListener(
    "click",
    (clickEvent) => {
        const areaTarget = clickEvent.target

        if (areaTarget.classList.contains("parkArea")) {
            const areaId = parseInt(areaTarget.dataset.id)
            const numberOfGuests = guests.filter(guest => guest.parkAreasId === areaId).length
            window.alert(`There are currently ${numberOfGuests} guests in the ${areaTarget.textContent} area.`)
        }
    }
)

export const ParkAreasList = () => {
    let areasHTML = "<ul>"
    
    for (const area of areas) {
        let areasHTML = `

        <article class="area-card">
            <h2 class="area-name">${area.title}</h2>
                <ul class="area-info">
                    <li class="area-services"></li>   
                </ul>
        </article>
        `
    

        areasHTML += "</ul>"
    }
    
    return areasHTML
}

