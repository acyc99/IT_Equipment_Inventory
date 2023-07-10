const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  const { success, message } = req.query;
  res.render('submission-result', { success, message });
});

module.exports = router;
