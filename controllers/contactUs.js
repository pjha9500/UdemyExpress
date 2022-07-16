const path=require('path');
const rootDir=require('../util/path');
exports.contactdetails=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'));
};

