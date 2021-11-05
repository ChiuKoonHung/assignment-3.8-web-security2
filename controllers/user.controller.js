const service = require("../services/user.service");

function handleSignUpRequest(req, res){

    service.signup(req.body.email, req.body.pwd);
    return res.json({message:"ok"});
}

async function handleGetAllUserRequest(req, res){
    res.json(await service.getAll());
}

async function handleLoginRequest(req, res){
    const resData = await service.login(req.body.email, req.body.pwd);
    res.json(resData);
}

module.exports = {
    handleGetAllUserRequest,
    handleSignUpRequest,
    handleLoginRequest
}