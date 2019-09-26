const express = require('express')
const {addPage} = require('../views')
const wikiRouter = express.Router()

const { Page } = require("../models");





// retrieve all wiki pages
wikiRouter.get('/', (req, res, next) => {
    res.send('blah')
  });

  // submit a new page to the database
  wikiRouter.post('/', async (req, res, next) => {


  const page = new Page({
    title: res.json(req.body.title),
    content: res.json(req.body.content)
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
    res.json(req.body)
    
  });

  // retrieve the 'add a page' form 
  wikiRouter.get('/add', (req, res, next) => {
    res.send(addPage());
  });

  module.exports = wikiRouter