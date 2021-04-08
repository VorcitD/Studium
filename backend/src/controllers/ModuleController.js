const connection = require('../database/connection')
const crypto =require('crypto');
module.exports={
    async index(request,response){
        const {Course_id} = request.params;
        const modules = await connection('modules').where('course_id',Course_id).select('*');//retorna todos os módulos de um curso
    
        return response.json(modules);
    },

    async create(request, response){
        const {title} = request.body;
        const {Course_id} = request.params;
        try {
            const {id} = await connection('courses').where('id',Course_id).select('id').first();
            
        } catch (error) {
            return response.status(400).json({error: 'There is no such course'})
        }
        
        const [id]= await connection('modules').insert({
            title,
            Course_id,
        });
        
        return response.json({
         id  
        });
    },

    async delete(request, response){
        const {id} = request.params;
        await connection('modules').where('id',id).delete();
        return response.status(204).send();
    }
}