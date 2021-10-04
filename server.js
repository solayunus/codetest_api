const http = require('http');
const app = require('./app');
const bodyParser = require('body-parser');






// const server = http.createServer((req, res) => {
//   res.end('This is my server response!');
// });

app.listen(process.env.PORT || 5000);
