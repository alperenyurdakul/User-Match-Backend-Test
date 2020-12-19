const User = require('../../model/userModels');
const Match = require('../../model/matchModels');
const { PerformanceObserver, performance } = require('perf_hooks');


const findUser = async (req, res) => {

    await User.findOne({ _id: req.body._id }, (err, user) => {

        if (err) return res.status(500).json({ error: "mongo Error: " + err });
        var user_one = user;
        if (user) {
            User.aggregate([
                { $match: { wanted_gender: user_one.gender, gender: user_one.wanted_gender, city: user_one.city } },
                { $sample: { size: 30 } }
            ], async (err, data) => {
                var t0 = performance.now()
                var matchedUsers = data
                for (var i = 0; i < matchedUsers.length; i++) {
                    var matchedUserStatus = false;
                    //0: undefined, 1: true, 2: false
                    await Match.find({ user_one: req.body._id, user_two: matchedUsers[i]._id }, (err, data) => {
                        if (data.length) {
                            console.log(data)
                            if (data[0].user_one_liked == 1 || data[0].user_one_liked == 2 || data[0].user_one_liked == true || data[0].user_one_liked == false) {
                                matchedUserStatus = true
                            }
                        }
                    })
                    await Match.find({ user_one: matchedUsers[i]._id, user_two: req.body._id }, (err, data) => {
                        if (data.length) {
                            console.log(data)
                            if (data[0].user_two_liked == 1 || data[0].user_two_liked == 2 || data[0].user_two_liked == true || data[0].user_two_liked == false) {
                                matchedUserStatus = true
                            }
                        }
                    })
                    var t1 = performance.now()
                    if (matchedUserStatus == true) { matchedUsers.splice(i, 1) }
                }
                console.log(matchedUsers.length)
                console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
                return res.status(200).json({ "matches": matchedUsers });
            })
        } else {



        }
    });

}

module.exports  = findUser;


