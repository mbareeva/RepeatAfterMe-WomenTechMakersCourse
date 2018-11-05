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


const app = express()
app.set('view engine', 'pug')

app.get('/', async (req, res) => {//response
    res.render('index', {contributors})
})

app.get('/person/all', async (req, res) => {
    const contributors = await UserService.findAll()
    res.render('index', {contributors})
})

app.get('/person/:id', async (req, res) => {
    res.send(await UserService.find(req.params.id))
})

//app.post('/person', async (req, res) => {
//        console.log(req.body)
//})

app.listen(3000, () => {//request
    console.log('Server is listening')
})