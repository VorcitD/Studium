const connection = require('../database/connection')
const crypto =require('crypto');
module.exports={
    async index(request,response){
        const {Course_id} = request.params;
        console.log(Course_id);
        const course = await connection('courses').select('*').where('id',Course_id).first();
        const video = await connection('videos').select('*').where('course_id',Course_id);
        

        return response.json({course,video});
    },

}