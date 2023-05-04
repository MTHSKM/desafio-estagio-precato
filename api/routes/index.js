const bodyParser = require('body-parser')
const forms_answers = require('./forms_answers_route')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(forms_answers)
    app.get('/', (req, res) => res.send('Olá!'))
}