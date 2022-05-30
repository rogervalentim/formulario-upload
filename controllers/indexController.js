const indexController={
    exibir:(req, res)=>{
        res.render("form")
    },
    salvar:(req,res)=>{
        res.send('cadastrado ...')
    }
}

module.exports =indexController;