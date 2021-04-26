const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Product } = require('../models/Product');
//=================================
//             Product
//=================================

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')      // 업로드로 저장이 된다.
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`)       // 저장할 때 어떤 이름으로 할지
    }
  })
var upload = multer({ storage: storage }).single("file")
   
router.post('/image',(req,res) => {
    // 가져온 이미지를 저장
    upload(req, res, err => {
        if(err){
            return res.json({ success: false, err})
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename})
    })
})

router.post('/',(req,res) => {
  // 받아온 정보들을 DB에 넣어 준다.
  const product = new Product(req.body)
  // DB에 저장
  product.save((err) =>{
    if(err) return res.status(400).json({ success: false, err})
    return res.status(200).json({ success: true})
  })
})
module.exports = router;
// multer 이미지를 백엔드 서버에 저장해주는데 도와주는 모듈
// 참고링크 : https://www.npmjs.com/package/multer