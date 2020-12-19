const mongoose = require('mongoose');
const User = require('../../model/userModels');

module.exports =  async(req,res)=>{

    var userData;

    await User.findOne({
        _id: req.body._id
    }, (err, user) => {
        if (err) return res.status(500).json({ error: "mongo Error: " + err });
        if (user) {
            
            userData = user;
        } else {
        } 
    });
    
    var photoList = userData.profile_photo_list
    photoList.push(req.file.location)
    userData.profile_photo_list = photoList
    User.findOneAndUpdate({
        _id: req.body._id
    } , {
        profile_photo_list: userData.profile_photo_list
    }, { new: true }, (err, user) => {
        if (err) return res.status(500).json({ error: "mongo Error: " + err });

    });
    res.send(userData)
}