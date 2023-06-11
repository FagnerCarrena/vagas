const verify = (req, res,next)=>{
    const {senha} = req. query;
    if(!senha) {
        return res.status(401).json({mensagem: "Informe a senha por favor"})
        }
    
    if(senha !== 'SCF') {
    return res.status(401).json({mensagem: "Senha incorreta"})
    }

    next()
    }
    
    module.exports = verify;