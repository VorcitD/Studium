const connection = require('../database/connection')
const crypto =require('crypto');
module.exports={
    async index(request,response){
        const courses = await connection('courses').select('*');
    
        return response.json(courses);
    },

    async create(request, response){
        const {name,description,author,price,numClasses,category} = request.body;
        
        const [id]= await connection('courses').insert({
            name,
            description,
            author,
            price,
            numClasses,
            category
        });
        
        return response.json({
         id   
        });
    },

    async delete(request, response){
        const {id} =request.params;
        await connection('courses').where('id',id).delete();
        return response.status(204).send();
    }
}