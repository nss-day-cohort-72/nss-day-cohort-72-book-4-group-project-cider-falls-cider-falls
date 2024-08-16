import { getGuests} from "./database.js"

const guests = getGuests()

export const Guests = () => {
    return `
        <ul>
            <li></li>
            <li></li>
        </ul>
    `;
};
