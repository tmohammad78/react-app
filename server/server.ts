import path from 'path';
import express from 'express';
// const path = require('path');
// const express = require('express');
import { renderServerSide } from './renderServerSide';
// const renderServerSide = require('./renderServerSide');

export const app = express();
app.use(express.static(path.resolve(__dirname, '../build')));

app.use(express.static(path.resolve('../../asssets')))


app.use(renderServerSide)
