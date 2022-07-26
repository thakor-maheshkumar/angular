var BlogModel = require('../model/blog');

exports.create = async(req,res)=>{
    console.log(req.body);
    if(!req.body.name && !req.body.description){
        res.status(200).send({
            message:'Content can not be empty'
        });
    };
    var blog =  new BlogModel({
        name:req.body.name,
        description:req.body.description
    });

     await blog.save().then(data=>{
        res.status(200).send({
            message:"Blog Created successfully",
            blog:data
        });
     });

     exports.findOne = async BlogModel.FindById(req.params.id);
};