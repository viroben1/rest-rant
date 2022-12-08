const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')
router.get('/new', (req, res) => {
  res.render('places/new')
})

// EDIT
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

//render place page
router.get('/', (req, res) => {
  res.render('places/index', {places})
})
router.get('/:id', (req, res) => {
  
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id] ,id })
  }
})




router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })





//   UPDATE ROUTE
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

      // // Save the new data into places[id]
      //  places[id] = req.body
      // res.redirect(`/places/${id}`)
      // res.render('places/edit')
  






  //   DELETE ROUTE
  router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
  })

  

  
  

//create places
  router.post('/', (req, res) => {
    console.log(req, res)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
module.exports = router