const Post=require('../models/post');
module.exports.mainhomepage= async function(req,res)
{
    let posts=await Post.find({}).sort('-createdAt').populate('user')
    return res.render('habbit_traker',{t:"habbit page",habbit:posts});
    // MyModel.find().sort({ createdAt: -1 }).exec((err, docs) => {
}
module.exports.habbitcreate = async function(req,res)
{
    try
    {
         await Post.create({
            content:req.body.content,
            user:req.user._id
        });
        req.flash('success','habbit is created');
        return res.redirect('back');
    }
    catch(err)
    {
        console.log("error",err);
        return res.redirect('back');
    }
    
}
module.exports.destroy= async function(req,res)
{
    try
    {
        let post= await Post.findById(req.params.id);
                post.remove();
                req.flash('success','habbit is  delete successfuly');
                return res.redirect('back');
            
    }
    catch(err)
    {
        req.flash('error',err);
        return res.redirect('back');
    }
  
}
module.exports.tikchecks= async function(req,res)
{
    try
    {
                let user = await Post.findByIdAndUpdate(req.body.post);
                let val=req.body.button;

                if(user.tiks[val]===0)
                {
                    user.numberofday+=1;
                    user.tiks[val]=1;
                    await user.save();
                    req.flash('success','habbit is check');
                }
                else
                {
                    user.numberofday-=1;
                    user.tiks[val]=0;
                   await user.save();
                   req.flash('success','habbit is uncheck');
                }
                return res.redirect('back');
    }
    catch(err)
    {
        req.flash('error',err);
        return res.redirect('back');
    }
  
}
module.exports.updatename= async function(req,res)
{
    try
    {
        let user = await Post.findByIdAndUpdate(req.body.post);
        user.content=req.body.content;
        await user.save();
        req.flash('success',"habbit  name is changes succesfully");
        return res.redirect("back");
    }
    catch(err)
    {
        console.log(err);
        return res.redirect('back');
    }

}
    