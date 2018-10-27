let admin = (req,res,next)=>{
    switch(req.user.role) {
        case 1:
            next();
            break;
        case 0:
            return res.send('You are not allowed, get out now.');
            break;
        default:
            return res.send('You are not allowed, get out now.');
            break;
    }
}

module.exports = { admin }
