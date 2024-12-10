import { getServices} from "./database.js"

const guests = getServices()

export const Services = () => {
    return `
        <ul>
            <li>Service 1</li>
            <li>Service 2</li>
        </ul>
    `;
};