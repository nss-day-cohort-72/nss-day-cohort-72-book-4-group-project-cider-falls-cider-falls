import { getParkAreas, getGuests } from "./database.js"

const areas = getParkAreas()   
const guests = getGuests()             


document.addEventListener(
    "click",
    (clickEvent) => {
        const areaTarget = clickEvent.target

        if (areaTarget.classList.contains("parkArea") ) {
            const areaId = parseInt(areaTarget.dataset.areaId)
            const numberOfGuests = guests.filter(guest => guest.parkAreasId === areaId).length
            window.alert(`There are currently ${numberOfGuests} guests in the ${areaTarget.textContent} area.`)
        }
    }
)

export const ParkAreasList = () => {
    let areasHTML = "<ul>"
    

    for (const area of areas) {
        areasHTML += `<li>
        <h2 data-id="${area.id}">${area.title}</h2>
        <p>${area.service_id}</p>
     </li>`
}

    areasHTML += "</ul>"

    return citiesHTML
}

