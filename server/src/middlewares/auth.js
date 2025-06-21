import jwt from "jsonwebtoken"


const verifyToken = (req, res, next) =>{
    const token = req.cookies.token || req.signedCookies.token

    if(!token){
        res.status(404).json(
            { success: false, output: 'Un authorized user! Either register or login' })
    }else{
        try{
        const isValidToken = jwt.verify(token, process.env.SECRET_KEY);
        if(isValidToken){
            req.userPayload = isValidToken;
            console.log("valid token", isValidToken)
            next();
        }
        }catch(error){
            console.log("Error in verifying token ", error);
        }
    }
}

const generateToken = async (res, payload)=>{
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    console.log(token);

    res.cookie('token',token, {
        httpOnly:true,
        signed: true
    })
}


export {generateToken, verifyToken};