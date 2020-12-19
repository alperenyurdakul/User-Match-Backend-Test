const hataYakalayici = (err,req,res,next)=>{

    if(err.code === 11000){
        return res.json(req.body);
    }
 
    if(err.code === 66){
        return res.json(
            {
                mesaj:"Değiştirilemez bir alanı güncellemeye çalıştınız",
                hataKodu:404
            }
        )
    }
    res.status(err.statusCode || 500);
    res.json({
        hataKodu:err.statusCode || 500,
        mesaj: err.message
    });
 }
 
 module.exports = hataYakalayici;