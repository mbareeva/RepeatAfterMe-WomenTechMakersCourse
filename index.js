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
const express = require('express')
const UserService = require('./services/user-service')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    //response
    res.render('index')
})

app.get('/contributors/all', async (req, res) => {
    const contributors = await UserService.findAll()
    res.render('contributors', { contributors })
})

app.get('/contributors/:id', async (req, res) => {
    const contributor = await UserService.find(req.params.id)
    res.send(contributor.name)
})
//post from browser to server
app.post('/contributors', async (req, res) => {
   const user = await UserService.add(req.body)
   res.send(user)
})

app.delete('/contributors/:id', async (req, res) => {
    const user = await UserService.del(req.params.id)
    res.send(user)
  })

app.listen(3000, () => {//request
    console.log('Server is listening')
})