const path=require('path');
const rootDir=require('../util/path');


exports.succespage=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
};