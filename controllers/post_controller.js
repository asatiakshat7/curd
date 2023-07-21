const post=require('../models/post');


module.exports.create=function(req,res){
    post.create({
        content:req.body.content,
        user:req.user._id
    },function(err,post){
        if(err){
            console.log('Error in creating Post');
            return;
        }
        return res.redirect('/');
    })
}

// module.exports.update=function(req,res){
//     post.find({
//         user:req.user._id
//     },function(err,post){
//         if(err){
//             console.log('Error in Updating Post');
//             return;
//         }

//         return res.redirect('/',);
//     })
// }