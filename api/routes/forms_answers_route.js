const { Router } = require('express')
const forms_answers_controller = require('../controllers/forms_answers_controller')

const router = Router()

router.get('/forms_answers', forms_answers_controller.pegaDados)
router.get('/forms_answers/:id', forms_answers_controller.pegaUmDado)
router.post('/forms_answers', forms_answers_controller.adicionaDado)
router.put('/forms_answers/:id', forms_answers_controller.atualizaForms)
router.delete('/forms_answers/:id', forms_answers_controller.apagaForms)

module.exports = router