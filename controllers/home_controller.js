const Post = require("../models/post");

// module.exports.home = function(req, res){
//     console.log(req.cookies);
//     res.cookie('user_id', 25);
//     return res.render('home', {
//         title: "Home"
//     });
// }

module.exports.home=function(req,res){
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home', {
            title: "Home",
            Post:posts
        });
    })
}
// module.exports.actionName = function(req, res){}