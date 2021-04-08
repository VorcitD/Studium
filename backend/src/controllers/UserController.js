const connection = require('../database/connection')
const crypto =require('crypto');
module.exports={
    async index(request,response){
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async create(request, response){
        const {name,email,password,cpassword} = request.body;
        const id=crypto.randomBytes(4).toString('HEX');

        if(name=="" || email=="" || password==""){
            console.log('caiu no erro');
            return response.status(400).json({error: 'There are empty fields in this response'});
        }

        if(password!=cpassword){
            return response.status(400).json({error: 'The confirmation of the password does not match'})
        }
    
        await connection('users').insert({
            id,
            name,
            email,
            password,
        });
        
        return response.json({
         id   
        });
    }
}