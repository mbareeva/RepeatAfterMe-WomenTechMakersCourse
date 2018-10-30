const Chalk = require("chalk")
const Post = require("./post")
module.exports = class User  {
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
    
  
    static create({name, email, posts}) {
      const user = new User(name, email, posts)
      user.posts = posts.map(Post.create)
      return user
  }

}
