import path from 'path';
import express from 'express';
import { renderServerSide } from './renderServerSide';

export const app = express();

// app.use(express.static(path.resolve(__dirname, '../build')));

// app.use(express.static(path.resolve('../../assets')));

app.use(renderServerSide);
