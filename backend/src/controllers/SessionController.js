const connection =  require('../database/connection');

module.exports = {
    async create(request,response){
        const{email,password} =request.body;
        const useremail = await connection('users')
        .where('email',email)
        .select('id')
        .first();

        const userpassword = await connection('users')
        .where('password',password)
        .select('name')
        .first();

        if(!useremail || !userpassword){
            return response.status(400).json({error: 'No username found with this email'});
        }


        return response.json(useremail);
    }
}