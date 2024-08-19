import { getParkAreas, getGuests, getServices } from "./database.js"

const areas = getParkAreas()
const guests = getGuests()
const services = getServices()

// Event listener for displaying the number of guests
document.addEventListener(
    "click",
    (clickEvent) => {
        const areaTitleTarget = clickEvent.target.closest(".parkAreaTitle")
        
        if (areaTitleTarget) {
            const areaId = parseInt(areaTitleTarget.dataset.areaId)
            const numberOfGuests = guests.filter(guest => guest.parkAreasId === areaId).length
            window.alert(`There are currently ${numberOfGuests} guests in the ${areaTitleTarget.textContent} area.`)
        }
    }
)

// Function to get the services HTML
const getServiceListHTML = (serviceIds) => {
    const serviceList = services.filter(service => serviceIds.includes(service.id))
    return serviceList.map(service => `<li>${service.name}</li>`).join('')
}

// Function to create the park areas list with services
export const ParkAreasList = () => {
    let parkAreasHTML = "<ul>"

    for (const area of areas) {
        // Parse the service IDs related to this park area
        const serviceIds = area.service_id.split(', ').map(Number)
        const servicesHTML = getServiceListHTML(serviceIds)
        
        parkAreasHTML += `
            <li>
                <div class="parkAreaTitle" data-area-id="${area.id}">${area.title}</div>
                <ul class="services">${servicesHTML}</ul>
            </li>`
    }
//commenting for new commit and push
    parkAreasHTML += "</ul>"

    return parkAreasHTML
}