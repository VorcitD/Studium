const connection = require('../database/connection')
const crypto =require('crypto');
module.exports={
    async index(request,response){
        const {Modules_id} = request.params;
        const videos = await connection('videos').where('modules_id',Modules_id).select('*');//retorna todos os módulos de um curso
    
        return response.json(videos);
    },

    async create(request, response){
        const {title,url} = request.body;
        const {Modules_id} = request.params;
        
        try {
            const {id} = await connection('modules').where('id',Modules_id).select('id').first(); 
            console.log(id);           
        } catch (error) {
            return response.status(400).json({error: 'There is no such module'})            
        }

        const [id]= await connection('videos').insert({
            title,
            Modules_id,
            url,
        });
        
        return response.json({
         id   
        });
    },

    async delete(request, response){
        const {Modules_id} = request.params;
        await connection('videos').where('id',Modules_id).delete();
        return response.status(204).send();
    }
}