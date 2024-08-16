const database = {

areas : [
    { id: 1, name: 'Chamfort River', services: 'rafting, canoeing, and fishing' },
    { id: 2, name: 'Lost Wolf Hiking Trail', services: 'hiking, picnicking, and rock climbing' },
    { id: 3, name: 'Lodge', services: 'lodging, parking, information, and picnicking'},
    { id: 4, name: 'Gander River', services: 'fishing and hiking' },
    { id: 5, name: 'Campgrounds', services: 'information, lodging, and parking' },
    { id: 6, name: 'Pine Bluffs Trails', services: 'hiking, picnicking, and zip lines' }
  ],

guests : [
    { id: 1, name: 'John Doe', areaID: 1, service: 'Rock Climbing' },
    { id: 2, name: 'Jane Smith', areaID: 3, service: 'Hiking' },
    { id: 3, name: 'Michael Johnson', areaID: 5, service: 'Fishing' },
    { id: 4, name: 'Emily Davis', areaID: 2, service: 'Picnicking' },
    { id: 5, name: 'Chris Brown', areaID: 6, service: 'Information' },
    { id: 6, name: 'Jessica Wilson', areaID: 4, service: 'Lodging' },
    { id: 7, name: 'David Taylor', areaID: 1, service: 'Parking' },
    { id: 8, name: 'Sarah Miller', areaID: 3, service: 'Zip Lining' },
    { id: 9, name: 'James Anderson', areaID: 2, service: 'Canoeing' },
    { id: 10, name: 'Laura Thomas', areaID: 5, service: 'Rafting' },
    { id: 11, name: 'Daniel Lee', areaID: 6, service: 'Hiking' },
    { id: 12, name: 'Sophia Harris', areaID: 4, service: 'Fishing' }
  ],

services : [
    { id: 1, service: 'Rock Climbing' },
    { id: 2, service: 'Hiking' },
    { id: 3, service: 'Fishing' },
    { id: 4, service: 'Picnicking' },
    { id: 5, service: 'Information' },
    { id: 6, service: 'Lodging' },
    { id: 7, service: 'Parking' },
    { id: 8, service: 'Zip Lining' },
    { id: 9, service: 'Canoeing' },
    { id: 10, service: 'Rafting' }
  ]

}

export const getAreas = () => {
    return database.areas.map(areas => ({...areas}))
}

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}))
}

export const getServices = () => {
    return database.services.map(services => ({...services}))
}
