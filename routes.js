const express = require('express')
const router = express.Router()
const db = require('./dbFunctions')




router.get('/',(req,res)=>{


    res.render('home')

})


router.get('/allMyths',(req,res)=>{
    db.getAllMyths()
    .then(myths => {
        return res.render('allMyths', { myths: myths })
      })
})


router.get('/mythsByRegion/:id', (req,res)=>{
    db.getMythByRegion(req.params.id)
    .then(region =>{
        const viewData ={
            region: region,
            name: region[0].name
        }
        res.render('mythsByRegion', viewData)
    })
})


router.get('/oneMyth/:id', (req,res)=>{
    db.getOneMyth(req.params.id)
    .then(oneMyth =>{
        console.log(oneMyth)
       
        res.render('oneMyth', oneMyth)
    })
})


router.get('/addMyth', (req,res)=>{
   res.render('addMyth')
})



router.post('/newMyth', (req, res)=>{
    const myth = req.body
    console.log(myth)
    db.addMyth(myth)
    .then(()=> {
           res.redirect('/')
    })

} )


//  router.post('/')

 module.exports = router