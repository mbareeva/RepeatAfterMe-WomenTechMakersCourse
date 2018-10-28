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

    static create({topic, description, maps}) {
      const post = new Post(topic, description, maps)
      post.maps = maps.map(Map.create)
      return post
  }

    
}
