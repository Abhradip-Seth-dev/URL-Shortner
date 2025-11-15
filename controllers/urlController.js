/*
* @desc  This Function will be responsible for creating a new short url

*/


const shortenUrl = async (req,res)=>{
    const validUrl = require('valid-url');
    const {longUrl}=req.body
    console.log("Received Long Url!!")
    if(!longUrl){
        return res.status(400).json({ success: false, error: 'Please provide a URL' });
    }
    if(!validUrl.isUri(longUrl)){
        return res.status(400).json({ success: false, error: 'Invalid URL format provided' });
    }
    res.status(200).json({ success: true, message: 'Controller is now connected!', data: { receivedUrl: longUrl } });
    
}


module.exports={
    shortenUrl,
}