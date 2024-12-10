import { getAreas, getGuests } from './database.js';

const areas = getAreas();
const guests = getGuests();

// export const Areas = () => {
//     return `
//         <ul>
//             <li>Area 1</li>
//             <li>Area 2</li>
//         </ul>
//     `;
// };

export const Areas = () => {
  let html = `
      <ul class = "areas-container">`;
  for (const area of areas) {
    html += `
          <li data-id = "${area.id}"
               data-type = "area" >
          ${area.mainAttraction}
          </li>
      `;
  }
  html += `
    </ul>
   `;
  return html;
};

document.addEventListener('click', (e) => {
  const clickedItem = e.target;
  if (clickedItem.dataset.type === 'area') {
    const dataIdAttribute = parseInt(clickedItem.dataset.id);
    const guestsInArea = guests.filter(guest => guest.areaId === dataIdAttribute).length
   alert(`There are ${guestsInArea} guests in this area `)
    
  }
});
