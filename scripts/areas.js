import { getAreas, getGuests} from "./database.js"

const areas = getAreas()
const guests = getGuests()

export const Areas = () => {

    let areaHtml = '<ol>'

    for (const area of areas){
        areaHtml += `<li data-type="area" data-region="${area.region}" data-attraction="${area.mainAttraction}" data-id="${area.id}">
    This is area name is ${area.mainAttraction}
</li>`;
    }
    areaHtml += "</ol>"
    return areaHtml;

};

const guestHelperCount = (indArea) => {
    let areaID = parseInt(indArea.dataset.id);
    let guessCount = 0;
//    const guest = guests.find(guest => guest.areaId === areaID);
   for(const guest of guests){
    if(areaID === parseInt(guest.areaId)){
        guessCount++;
    }
   }
   return guessCount;
}
// another way to do it below 
// This function calculates the guest count for a specific area
// const guestHelperCount = (areaID) => {
//     return guests.filter(guest => guest.areaId === parseInt(areaID)).length;
// };

document.addEventListener(
    "click",
    (clickEvent) => {
        const areaTarget = clickEvent.target
        let areaName = areaTarget.dataset.attraction;
        if(areaTarget.dataset.type === "area"){
            let guessCount = guestHelperCount(areaTarget);
            window.alert(`there are ${guessCount} guests in this area of ${areaName}`);
        }
    }
)