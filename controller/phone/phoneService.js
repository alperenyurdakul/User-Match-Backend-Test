const User = require('../../model/userModels');


const phoneService = (req, res) =>
  User.findOne({
    firebase_id: req.body.firebase_id, 
    phone: req.body.phone
  }, (err, user) => {
    if (err) return res.status(500).json({ error: "mongo Error: " + err });

    if (user) {
      return res.status(200).json({ "user": user });
    } else {
      const newUserData = {
        firebase_id: req.body.firebase_id,
        phone: req.body.phone,
        last_active: (new Date()).getTime(),
        created_at: (new Date()).getTime(),
        name: req.body.name
      };

      const newUser = new User(newUserData);

      newUser.save((err, user) => {
        if (err && err.code == 11000) {
          User.findOne({
            firebase_id: req.body.firebase_id
          }, (err, user) => {
            if (err) return res.status(500).json({ error: "mongo Error: " + err });

            if (user)
              return res.status(200).json({ "user": user });

            User.findOneAndUpdate({
              phone: req.body.phone
            }, {
              firebase_id: req.body.firebase_id
            }, { new: true }, (err, user) => {
              if (err) return res.status(500).json({ error: "mongo Error: " + err });

              return res.status(200).json({ "user": user });
            });
          });
        } else {
          if (err || !user) return res.status(500).json({ error: "mongo error: " + err });

          return res.status(200).json({ "user": user });
        }
        console.log("güncellendi");
      });
    }
  });

module.exports = phoneService;