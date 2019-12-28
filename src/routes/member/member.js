const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Customer = require('../../models/customer');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


router.get('/hi' , (req , res) => {
    console.log('findAll...');
    Customer.find(function(err , customers){
        if(err) return res.status(500).send({error:'database fail'});
        res.json(customers);
    })
    //});

    // res.send([
    //     {
    //     'id': 1,
    //     'image': 'https://placeimg.com/64/64/1',
    //     'name': '홍길동',
    //     'birthday': '961222',
    //     'gender': '남자',
    //     'job': '대학생'
    //     },
    //     {
    //     'id': 2,
    //     'image': 'https://placeimg.com/64/64/2',
    //     'name': '임우빈',
    //     'birthday': '940801',
    //     'gender': '남자',
    //     'job': '근본'
    //     },
    //     {
    //     'id': 3,
    //     'image': 'https://placeimg.com/64/64/3',
    //     'name': '이순신',
    //     'birthday': '961127',
    //     'gender': '남자',
    //     'job': '디자이너'
    //     }
    //     ]
    //     );
});


router.post('/hi' , (req , res) => {
    console.log(req.body);
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    res.send(req.body);
});

module.exports = router;