module.exports = class Post {
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
