const express = require('express');
const wikiRouter = express.Router();
const { addPage } = require('../views');
const { Page } = require('../models');
const wikiPage = require('../views/wikipage');

// retrieve all wiki pages
wikiRouter.get('/', (req, res, next) => {
  res.send('blah');
});

// submit a new page to the database
wikiRouter.post('/', async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    slug: req.body.slug,
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.json(page);
  } catch (error) {
    next(error);
  }
});

// retrieve the 'add a page' form
wikiRouter.get('/add', (req, res, next) => {
  res.send(addPage());
});

// Route for a specific page
wikiRouter.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    console.log(wikiPage(page));
    res.json(wikiPage(page));
  } catch (error) {
    next(error);
  }
});

module.exports = wikiRouter;
