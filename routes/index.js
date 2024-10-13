const { Router } = require('express');
const router = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Hannah',
    added: new Date(),
  },
  {
    text: 'Hey',
    user: 'Justin',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
