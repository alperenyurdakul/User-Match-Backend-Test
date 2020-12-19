const Match =require('../../model/matchModels');

const newMatch = () => {

    const newData = {
        user_one: "5fcbc376718ed71d96d2b188",
        user_two: "5fcd6a220fbde62ea6ef477f",
        user_one_liked: true,
        user_two_liked: true,
        user_one_liked_date: (new Date()).getTime(),
        user_two_liked_date: (new Date()).getTime()
    };

    const newMatch = new Match(newData);

    newMatch.save((err, data,res) => {
        if (err) {
            console.log("err", err)
        } else {
            return data;
        }
        
    }
    );

}

module.exports = newMatch;