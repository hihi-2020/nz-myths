const server = require('./server')
//const router = express.Router()


const port = process.env.PORT||3000



server.listen(port, function () {
    console.log('Server is listening on port', port)
  })