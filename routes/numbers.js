const express = require('express');

const router = express.Router();

router.get('/' , (req , res , next)=>{

    console.log(req.query);
    const {url : urls} = req.query;
    foreach(urls)
    {
        
    }
    res.status(200).json({
        message : "OK"
    });

});

module.exports = router;