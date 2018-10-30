/*
This is a platform for those who love travelling.
After registration the user can share with others the route of the trip.
With the help of experience of other users, you do not have to worry about
making up a plan of a trip. You can just look up the post with map and locations
on it, reviews of visited places, save the post and repeat the experience.

Four classes: User, Post, Map, Location.#

User can post Post(s)
Post should contain Map
Map has Locations on it
*/


const User = require("./models/user")
const Location = require("./models/location")
const Map = require("./models/map")
const Post = require("./models/post")
const Chalk = require("chalk")
const UserService = require("./services/user-service")

async function main(){

/*
Create a user
*/
const leo = new User ("Leo", "leonardo@gmail.com")
const christine = new User ("Christine", "christ92@hotmail.com")
const phil = new User ("Philipp", "phil_white@mail.ru")

/*
Set a post
*/
const post1 = new Post("2 days in Rome", "Brief overlook of worthy places in Rome")
const post2 = new Post("Surfing camp in Bali", "How I learned serfing and travelled around suburbs")
const post3 = new Post("Me as Au-Pair in France", "My year of living with host family")

/*
Setting up locations
*/
const accomodation = new Location("Alessandro Palace Hostel & Bar", "via Vicenza, 42", 4)
const cafe = new Location("Pizzeria Del Secolo Roma", "via Palestro, 62",  3)
const accomodation2 = new Location ("Private House", "Rue Saint-Maurice", 5)
const cafe2 = new Location ("L'Atelier Gourmand", "2 Rue Saint-MAurice", 3)
const accomodation3 = new Location("Pro Surf School Bali", "Pantai Kuta 33, Legian, Kuta", 5)
const cafe3 = new Location ("Warung Damar", "Jalan Kartika Plaza", 4)
//test
//console.log(accomodation)

/*
Create a map for each user
*/
const map = new Map("my route in Rome")
const map2 = new Map("my trip to France")
const map3 = new Map("Surroundings")

/*
Add visited locations on map
*/
map.addLocOnMap(accomodation)
map.addLocOnMap(cafe)
map2.addLocOnMap(accomodation2)
map2.addLocOnMap(cafe2)
map3.addLocOnMap(accomodation3)
map3.addLocOnMap(cafe3)

/*
Add map(s) in post of a user
*/
post1.addMapInPost(map)
post2.addMapInPost(map2)
post3.addMapInPost(map3)

//test
//console.log(post1)

/*
Set a post for the user
*/
leo.makePost(post1)
christine.makePost(post2)
phil.makePost(post3)


await UserService.add(leo)
await UserService.add(christine)
await UserService.add(phil)
const people = await UserService.findAll()

console.log(people[0].name)
}

main()
