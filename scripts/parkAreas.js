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
        areasHTML += `<li class="parkArea" data-id="${area.id}">
                        ${area.title}</li>`
    }

    areasHTML += "</ul>"

    return areasHTML
}

