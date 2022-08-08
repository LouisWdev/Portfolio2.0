const express = require('express');
const router = express.Router();
const portfolioposts = require('../../models/PortfolioPost');
const ProjectPost = require('../../models/ProjectPost');

//Portfolio Posts
//REQUEST GET ALL Portfolio Posts 
router.get('/', (req, res) => {
    portfolioposts.find()
        .then(portfolioposts => res.json(portfolioposts))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

//REQUEST ADD NEW ARTICLES 
router.post('/add', (req, res) => {
    const newArticle = new Articles({
        title: {type: String, require: true},
        article: {type: String, required: true}
    });

    newArticle.save()
       .then(() => res.json("The new Article posted successfuly!"))
       .catch(err => res.status(400).json(`Error: ${err}`));
});

 //REQUEST FIND ARTICLE BY ID
router.get('/:id', (req, res) => {
    portfolioposts.findById(req.params.id)
      .then(article => res.json(article))
      .catch(err => res.status(400).json(`Error: ${err}`))
})

 //REQUEST FIND ARTICLE BY ID AND UPDATE 
router.put('/update/:id', (req, res) => {
    portfolioposts.findById(req.params.id)
     .then(article => {
         article.title = req.body.title,
         article.article = req.body.article;
         article.authorname = req.body.authorname;

         article
            .save()
            .then(() => res.json("The Article is UPDATED successfuly!"))
     }) 
     .catch(err => res.status(400).json(`Error: ${err}`))
})

 //REQUEST FIND ARTICLE BY ID AND DELETE
 router.delete('/:id', (req, res) => {
    portfolioposts.findByIdAndDelete(req.params.id)
      .then(() => res.json("The article is DELETED!!"))
      .catch(err => res.status(400).json(`Error: ${err}`))
 })

module.exports = router;