import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import expressValidator from 'express-validator';
import nodemailer from 'nodemailer';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import recommendationsRouter from './routes/recommendations';
import activityRouter from './routes/activity';
import emailRouter from './routes/email';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.use(expressValidator());

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/recommendations', recommendationsRouter);
app.use('/api/activity', activityRouter);
app.use('/api/email', emailRouter);

export default app;
