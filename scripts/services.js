import { getServices, getParkAreas } from "./database.js";

const services = getServices()
const parkAreas = getParkAreas()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const serviceId = itemClicked.dataset.id

        if (itemClicked.dataset.type === 'service') {

            for (const area of parkAreas) {
                if ( area.service_id === parseInt(serviceId)) {
                    window.alert(`${itemClicked.textContent} is available in ${area.title}.`)
                }
            }
        }
    }
)


export const serviceList = () => {
    let servicesHTML = "<ul>"

    for (const service of services) {
        servicesHTML += `<li data-type="service" data-servicePrimaryKey="${service.id}" 
                            data-serviceforeignkey="${service.parkAreasId}">
                            ${service.name}</li>`
    }

    servicesHTML += "</ul>"

    return servicesHTML;
}