import { getAreas} from "./database.js"

const guests = getAreas()

export const Areas = () => {
    return `
        <ul>
            <li>Area 1</li>
            <li>Area 2</li>
        </ul>
    `;
};