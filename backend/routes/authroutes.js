import  express from 'express';

const router = express.Router();
router.get('/login',(req,res)=>{
    res.send("yeah checked correctly");
})

export default  router;