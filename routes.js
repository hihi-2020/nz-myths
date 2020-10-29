const express = require('express')
const router = express.Router()
//const db = require('./db')




router.get('/',(req,res)=>{


    res.render('home')

})


router.get('/allMyths',(req,res)=>{

    db.getAllMyths()
    .then(myths => {
        return res.render('index', { myths: myths })
      })

   
})


router.get('/mythsByRegion/:id', (req,res)=>{

    db.getMythByRegion(req.params.id)
    .then(region =>{
        const viewData ={
            region
        }
        res.render('mythsByRegion', viewData)
    })

})


router.get('/oneMyth/:id', (req,res)=>{

    db.getOneMyth(req.params.id)
    .then(oneMyth =>{
        const viewData ={
            oneMyth
        }
        res.render('oneMyth', viewData)
    })
})

router.post('/newMyth', (req, res)=>{

    db.addMyth()
    .then 


    res.redirect('/')

} )


//  router.post('/')

 module.exports = router