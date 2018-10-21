const Chalk = require("chalk")
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

    report(){
      console.log(Chalk.white.bgBlue.bold(this.name), "posted: ", this.posts)

  }
}
