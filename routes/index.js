const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const response = await axios.get('https://yesno.wtf/api');
    console.log(response.data);  // レスポンスのデータを確認
    res.render('index', { title: 'Yes or No', apiResponse: response.data });
  }catch (error) {
    console.error('Error fetching API:', error);  // エラーをコンソールに表示
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
  // res.render('index', { title: 'Express' });
});

module.exports = router;
