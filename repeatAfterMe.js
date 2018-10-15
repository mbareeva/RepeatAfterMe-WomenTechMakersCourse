/*
This is a platform for those who love travelling.
After registration the user can share with others the route of the trip.
With the help of experience of other users, you do not have to worry about
making up a plan of a trip. You can just look up the post with map and locations
on it, reviews of visited places, save the post and repeat the experience.

Four classes: User, Post, Map, Location.
*/

var User = class {
constructor(name, email){
  this.name = name;
  this.email = email;
  this.posts = [];
}
    sayName(){
      console.log("Hello, " + this.name! "Share with us your last trip!")
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
        this.map = ...
      }
    }

var leo = new User ("Leo", "leonardo@gmail.com")
var christine = new User ("Christine", "christ92@hotmail.com")
var phil = new User ("Philipp", "phil_white@mail.ru")
var post1 = new Post("2 days in Rome", "Brief overlook of worthy places in Rome")
var post2 = new Post("Surfing camp in Bali", "How I learned serfing and travelled around suburbs")
var post3 = new Post("Me as Au-Pair in France", "My year of living with host family")
leo.makePost(post1)
christine.makePost(post2)
phil.makePost(post3)

var Map = class {
      constructor(){
        this.locations = []
      }
}

var Location = class {
    constructor(placeName, placeAddress){
        this.placeName = placeName
        this.placeAddress = placeAddress
      }
    }

}
