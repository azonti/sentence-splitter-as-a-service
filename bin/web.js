#!/usr/bin/env node
const express = require('express')
const split = require('sentence-splitter').split
const Syntax = require('sentence-splitter').Syntax
const app = express()

app.use(express.json())

app.post('/', function (req, res) {
  res.json(req.body.map(text => split(text).filter(node => node.type === Syntax.Sentence).map(node => node.raw)))
})

app.listen(process.env.PORT || 3000);
