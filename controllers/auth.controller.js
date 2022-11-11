


const register = ( req, res )=>{
    
    res.json( { data: req.body } );
    
    
}
const login = (req, res)=>{
    res.json( { msg: 'Login' } )
}







export {
    login,
    register
}