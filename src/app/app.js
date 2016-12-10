import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import config from 'config';
import router from './routes';

const app = express();

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const VIEW_PATH = './../../view';
app.use(express.static(VIEW_PATH));

app.use('*', router);

app.get('/index.htm', (req, res) => {
  res.sendFile(path.resolve(__dirname + "/" + VIEW_PATH + "/" + "index.htm" ));
});

const PORT = process.env.PORT || config.SERVER.PORT;
app.listen(PORT, () =>{
  console.log('pingme listening on port 3000!');
});
