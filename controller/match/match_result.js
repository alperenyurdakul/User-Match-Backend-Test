const Match = require('../../model/matchModels');
const Chat = require('../../model/chatModel');

const matchResult = async (req, res) => {
    _id = req.body._id
    match_user_id = req.body.match_user_id
    result = req.body.result
    var matchedUserStatus = false;
    if (result == true) { result = 1 }
    else { result = 2 }
    //match var mı userlar arasında kontrol
    await Match.find({ user_one: match_user_id, user_two: _id }, async (err, data) => {
        if (data) {
            matchedUserStatus = true
            const matchId = data[0]._id;
            console.log("matchId", matchId)
            console.log(data)
            if (result == true) {
                if (data[0].user_one_liked == 1) {
                    //matched Oldu
                    updateExistedMatch(matchId, result)
                    console.log("_id, match_user_id", _id, match_user_id)
                    const newData = {
                        user_one: _id,
                        user_two: match_user_id
                    };
                    const newMatch = new Chat(newData);
                    newMatch.save((err, data) => {
                        if (err) {
                            console.log("err", err)
                        } else {
                            return res.status(200).json({ "matched": true, "chat": data });
                        }
                    });

                } else {
                    updateExistedMatch(matchId, result)
                    return res.status(200).json({ "matched": false });
                }
            } else {
                updateExistedMatch(matchId, result)
                return res.status(200).json({ "matched": false });
            }
        }
    })
    //match bulunmuyor userlar arasında
    if (matchedUserStatus == false) {
        //match objesi oluştur _id'i user_one a, result'ı user_one_liked'a ata 
        const newData = {
            user_one: _id,
            user_one_liked: result,
            user_one_liked_date: (new Date()).getTime()
        };
        const newMatch = new Match(newData);
        newMatch.save((err, data) => {
            if (err) {
                console.log("err", err)
            } else {
                return data;
            }
        });
    }
}

updateExistedMatch = (matchId, result) => {
    Match.findByIdAndUpdate({ _id: matchId }, {
        user_two_liked: result,
        user_two_liked_date: (new Date()).getTime()
    }, { new: true }, (err, user) => {
        if (err) console.log("ERR:", err);
    });
}

module.exports = matchResult;