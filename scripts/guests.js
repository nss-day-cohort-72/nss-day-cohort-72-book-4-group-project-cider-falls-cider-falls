import { getGuests } from "./database.js"

const guests = getGuests()


export const guestList = () => {
    let guestHTML = "<ul>"

    for (const guest of guests) {
        guestHTML += `<li data-id="${guest.id}"
            >${guest.name}
        </li>`
    }

    guestHTML += "</ul>"

    return guestHTML
}

