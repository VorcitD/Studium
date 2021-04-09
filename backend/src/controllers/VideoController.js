const connection = require('../database/connection')
const crypto =require('crypto');
module.exports={
    async index(request,response){
        const {Course_id} = request.params;
        const videos = await connection('videos').where('Course_id',Course_id).select('*');//retorna todos os módulos de um curso
    
        return response.json(videos);
    },

    async create(request, response){
        const {title,url} = request.body;
        const {Course_id} = request.params;
        
        try {
            const {id} = await connection('courses').where('id',Course_id).select('id').first(); 
            console.log(id);           
        } catch (error) {
            return response.status(400).json({error: 'There is no such Course'})            
        }

        const [id]= await connection('videos').insert({
            title,
            Course_id,
            url,
        });
        
        return response.json({
         id   
        });
    },

    async delete(request, response){
        const {Course_id} = request.params;
        await connection('videos').where('id',Course_id).delete();
        return response.status(204).send();
    }
}