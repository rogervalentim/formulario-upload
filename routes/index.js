var express = require('express');
const indexController= require('../controllers/indexController')
const path = require('path');
const multer = require('multer');
var router = express.Router();

const multerDiskStorage= multer.diskStorage({
  destination: (req, file , callback) =>{
    const folder = path.join(__dirname, "../public/profile");
    callback(null,folder);
  },
  filename: (req, file , callback) =>{
    const imageName = Date.now() + file.originalname;
    callback(null, imageName);
  },

})

const upload = multer({ storage: multerDiskStorage})
/* GET home page. */
router.get('/',indexController.exibir);
router.post('/cadastrado',upload.single("avatar"),indexController.salvar)

module.exports = router;
