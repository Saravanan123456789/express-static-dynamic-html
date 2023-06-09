const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  res.send("User Page")
})
router.get("/new",(req,res)=>{
  res.render('user/new')
})

router.get('/:id([0-9])',(req,res)=>{
// res.json(req.user)
if(req.params.id<users.length){
res.send(req.user.name)
}
 
else{
  res.send("Page Not Found")
}
})

router.post('/',(req,res)=>{
 
  users.push({name:req.body.name})
  res.redirect(`/user/${users.length-1}`);
})

const users=[{
  idno:1,
  name:'Saro'
},
{
  idno:2,
  name:'santhosh'
},
{
  idno:3,
  name:'Sureka'
},
{
  idno:4,
  name:'Trisha'
},
{
  idno:5,
  name:"vasanth"
}]

router.param('id',(req,res,next,id)=>{
 req.user=users[id]
 next();
})
// const UsersArrayLength=users.length;
module.exports=router;