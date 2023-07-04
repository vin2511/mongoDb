const getUser = (req,res) => {
    res.status(200).json({message: 'Get all Users'})
};

const getUsrById =  (req,res) => {
    res.status(200).json({message: `Get User for ${req.params.id}`})
}
const createUser =  (req,res) => {
    res.status(200).json({message: 'Create User'})
}

const updateUser =  (req,res) => {
    res.status(200).json({message: `Update User for ${req.params.id}`})
}
const delUser = (req,res) => {
    res.status(200).json({message:`Delete Users ${req.params.id}`})
}

module.exports  = {getUser,createUser,updateUser,getUsrById, delUser}
