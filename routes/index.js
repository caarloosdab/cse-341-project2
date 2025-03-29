const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags= ['Hello World'] 
    res.send('First GET working!'); 
});

router.use('/users', require('./users'))

module.exports = router;