/*
* @desc  This Function will be responsible for creating a new short url

*/


const shortenUrl = async (req,res)=>{
    res.status(200).json({success:true,message:"ROute is working!!"
    })
}


module.exports={
    shortenUrl,
}