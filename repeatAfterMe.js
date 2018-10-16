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

var User = class {
constructor(name, email){
  this.name = name;
  this.email = email;
  this.posts = [];
}

    sayName(){
      console.log("Hello, " + this.name + "!" + " Share with us your last trip!")
  }
    sayEmail(){
      return this.email;
    }
    makePost(post){
        this.posts.push(post)
    }
}



var Post = class {
      constructor(topic, description){
        this.topic = topic
        this.description = description
        this.maps = []
      }

      writeTopic(){
        console.log("The topic is " + this.topic)
      }
      describeTrip(){
        console.log(this.description)
      }
      addMapInPost(map){
        this.maps.push(map)
      }
  }



var Map = class {
      constructor(caption){
          this.caption = caption
        this.locations = []
      }

      addLocOnMap(locationN){
        this.locations.push(locationN)
      }
}

var Location = class {
    constructor(placeName, placeAddress, rating){
        this.placeName = placeName
        this.placeAddress = placeAddress
        this.rating = rating
      }

      sayPlaceName(){
        return this.placeName
      }
      sayPlaceAddress(){
        return this.placeAddress
      }
      sayRating(){
        return this.rating
      }
  }
var leo = new User ("Leo", "leonardo@gmail.com")
var christine = new User ("Christine", "christ92@hotmail.com")
var phil = new User ("Philipp", "phil_white@mail.ru")

// test
//leo.sayName()
//console.log(christine.sayEmail())

var post1 = new Post("2 days in Rome", "Brief overlook of worthy places in Rome")
var post2 = new Post("Surfing camp in Bali", "How I learned serfing and travelled around suburbs")
var post3 = new Post("Me as Au-Pair in France", "My year of living with host family")

var accomodation = new Location("Alessandro Palace Hostel & Bar", "via Vicenza, 42", 4)
var cafe = new Location("Pizzeria Del Secolo Roma", "via Palestro, 62",  3)
var accomodation2 = new Location ("Private House", "Rue Saint-Maurice", 5)
var cafe2 = new Location ("L'Atelier Gourmand", "2 Rue Saint-MAurice", 3)
var accomodation3 = new Location("Pro Surf School Bali", "Pantai Kuta 33, Legian, Kuta", 5)
var cafe3 = new Location ("Warung Damar", "Jalan Kartika Plaza", 4)
//test
//console.log(accomodation)

var map = new Map("my route in Rome")
var map2 = new Map("my trip to France")
var map3 = new Map("Surroundings")

map.addLocOnMap(accomodation)
map.addLocOnMap(cafe)
map2.addLocOnMap(accomodation2)
map2.addLocOnMap(cafe2)
map3.addLocOnMap(accomodation3)
map3.addLocOnMap(cafe3)

//test
//console.log(map)

post1.addMapInPost(map)
post2.addMapInPost(map2)
post3.addMapInPost(map3)

console.log(post1)

leo.makePost(post1)
christine.makePost(post2)
phil.makePost(post3)

//console.log(phil)
