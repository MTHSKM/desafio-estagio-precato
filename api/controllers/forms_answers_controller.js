const database = require('../models')

class forms_answers_controller {
    static async pegaDados(req, res){
        try{
        const todosOsDados = await database.forms_answers.findAll()
        return res.status(200).json(todosOsDados)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmDado(req, res){
        const { id } = req.params 
        try{
            const umDado = await database.forms_answers.findOne( {where: { id: Number(id) }})
            return res.status(200).json(umDado)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async adicionaDado(req, res){
        const novoForms = req.body
        try{
            const novoFormsCriado = await database.forms_answers.create(novoForms)
            return res.status(200).json(novoFormsCriado)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaForms(req, res){
        const { id } = req.params 
        const novasInfos = req.body
        try{
            await database.forms_answers.update(novasInfos, {where: { id: Number(id) }})
            const formsAtualizado = await database.forms_answers.findOne( {where: { id: Number(id) }})
            return res.status(200).json(formsAtualizado)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaForms(req, res){
        const { id } = req.params
        try{
            await database.forms_answers.destroy({where: { id: Number(id) }})
            return res.status(200).json({mensagem: `Forms com o id ${id} foi deletado com sucesso!`})
        } catch(error){
            return res.status(500).json(error.message)
        }   
    }
}

module.exports = forms_answers_controller