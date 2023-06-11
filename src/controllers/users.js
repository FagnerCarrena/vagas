let{usuario, ultimoId} = require("../fakeData");


const getUsers = ( req, res) => {
    
    return res.json(usuario)

};
const getUser = ( req, res ) => {
    const { name} = req.query;

    if(!name){
        return res.status(400).json({mensagem: "O nome do usuário não foi encontrado "})
    }
    const usuarioEncontrado = usuario.find(user => user.name === name)

  if(!usuarioEncontrado){
        return res.status(404).json({mensagem: "Usuário inexistente"})
    }
    return res.send(usuarioEncontrado)
}

const registerUser =  (req, res) => {
    const {name, job}= req.body; 

    if(!name ){
        return res.status(400).json({mensagem: "Preencha todos os campos"})
        }

        const usuarioExistente = usuario.find(user =>{
            return user.name === name
        })
        
        if(usuarioExistente){
            return res.status(400).json({mensagem: "Usuário já foi cadastrado"})
        }

        const novoUsuario = {
                id: ultimoId++,
                name,
                job,
                }
        usuario.push(novoUsuario)
        return res.status(201).json(novoUsuario);
};

const deleteUser = (req, res) => {
    const {id} = req.params;
    const usuarioEncontrado = usuario.find(user => user.id === Number(id))
if(!usuarioEncontrado){
        return res.status(404).json({mensagem: "usuario inexistente"})
    }
 usuario = usuario.filter(use => use.id !== usuarioEncontrado.id)
return res.status(204).json({mensagem:"Usuário excluido com sucesso"});

};

 const update = (req, res) => {
    const {name, job}= req.body;
    const {id} = req.params;
if(!name & !job){
     return res.status(400).json({mensagem: "Informe os dados"})
    }
const usuarioEncontrado = usuario.find(user => user.id === Number(id))
if(!usuarioEncontrado){
            return res.status(404).json({mensagem: "Usuário inexistente"})}

        if(name){
          usuarioEncontrado.name = name
        }
        if(job){
            usuarioEncontrado.job = job
          }
return res.status(204).send();

 }
const five = (req, res) => {
    const { name} = req.query;
if(!name){
        return res.status(400).json({mensagem: "O nome do usuário não foi encontrado "})
    }
    
    const usuarioEncontrado = usuario.find(user => user.name === name)
    let contador = 0
    if(usuarioEncontrado){
       contador++
       console.log(contador)
    }
     if(!usuarioEncontrado){
         return res.status(404).json({mensagem: "Usuário inexistente"})
     }
      return res.send(` O Usuario foi lido ${contador} vez`)
}
        
module.exports = {
    getUsers,
   registerUser,
   deleteUser,
   update,
   getUser,
   five
};