const express = require('express');
const router = express.Router();
const  Post = require('../models/post');

// get back all the post
router.get('/',async(req, res) => {
    try{
               const posts= await Post.find();
               res.json(posts);
    }catch(err){
        res.json({message:err});
    }
})

// submit a post
router.post('/',async (req,res) => {
   // console.log(req.body);
   const post = new Post({
       title:req.body.title,
       description: req.body.description
   });
   try{
   const savedpost=await post.save()
   res.json(savedPost);
   }catch(err) {
       res.json({message:err});
   }
});


// specific post
 router.get('/:postId', async (req,res) =>{
     try{
     const post = await Post.findById(req.params.postId);
     res.json(post);
     } catch (err) {
         res.json({message:err});
     }
 });
 // delete a specific post
 router.delete('/:postId' , async (req,res)=> {
     try{
     const removedPost=  await Post.remove({_id: req.params.postId});
     res.json(removedPost);
     } catch(err){
        res.json({message:err}); 
     }
 });

 router.patch('/:postId' , async (req,res)=> {
     try{
     const updatedPost=  await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title : req.body.title}}
        );
     res.json(updatedPost);
     } catch(err){
        res.json({message:err}); 
     }
 });
module.exports = router;