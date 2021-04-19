import { router } from './routes';

import express from 'express';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(router);

export {app}