module.exports = class App {
    constructor(){
      this.users = []
    }

    addUsers(user){
      this.users.push(user)
    }
}