const express = require('express')
const router = express.Router()




router.get('/',(req,res)=>{


    res.render('home')

})


router.get('/allMyths',(req,res)=>{

    db.getAllMyths(req.params.id)

    res.render('allMyths')
})



router.get('/mythByRegion/:id', (req,res)=>{


    res.render('mythByRegion')
})


// router.get('/oneMyth', (req,res=>{

//     res.render('oneMyth', data)
// }))


//  router.post('/')

 module.exports = router