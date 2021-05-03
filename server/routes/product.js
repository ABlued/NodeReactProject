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

router.post('/products',(req,res) => {
  // product collection에 들어 있는 모든 상품 정보 가져오기

  let limit = req.body.limit ? parseInt(req.body.limit) : 20;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let term = req.body.searchTerm

  let findArgs = {};
  for(let key in req.body.filters){
    if(req.body.filters[key].length > 0){
      if(key === "price"){
        findArgs[key] = {   // gte와 lte는 몽고DB에서 제공되는 API이다.
          $gte: req.body.filters[key][0], // gte(greater then equal) : 이것보다 크거나 같고
          $lte: req.body.filters[key][1]  // lte (less then equal) : 이것보다 작거나 같은
        }
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
    console.log('findArgs',findArgs);
  }

  if(term){
    Product.find(findArgs)
    .find({ $text: {$search: term}})
    // $text에 궁금하다면 https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%87%BC%ED%95%91%EB%AA%B0/lecture/41266?tab=curriculum&speed=1.25
    // 7분부터 보세요
    .populate("writer")   // writer(데이터ID)에 대한 모든 정보를 가져온다
    .skip(skip) //처음엔 8개만 가져와
    .limit(limit)
    .exec((err, productInfo) =>{
      if(err) return res.status(400).json({ success: false, err})
      return res.status(200).json({ success: true, productInfo, postSize: productInfo.length})
    })
    
  } else {
    Product.find(findArgs)
    .populate("writer")   // writer(데이터ID)에 대한 모든 정보를 가져온다
    .skip(skip) //처음엔 8개만 가져와
    .limit(limit)
    .exec((err, productInfo) =>{
      if(err) return res.status(400).json({ success: false, err})
      return res.status(200).json({ success: true, productInfo, postSize: productInfo.length})
    })

  }

})
module.exports = router;
// multer 이미지를 백엔드 서버에 저장해주는데 도와주는 모듈
// 참고링크 : https://www.npmjs.com/package/multer