const { v4: uuidv4 } = require('uuid');

const messages = [
  {
    id: uuidv4(),
    text: 'Hi there!',
    user: 'hannliao',
    added: '10/15/2024, 2:08:41 PM',
  },
  {
    id: uuidv4(),
    text: 'zzzzz',
    user: 'jigglypuff',
    added: '10/15/2024, 9:15:11 AM',
  },
  {
    id: uuidv4(),
    text: 'Hellooooo this is a longer message so I can see what it looks like! When will it wrap to a new line?',
    user: 'xfairybutterflies',
    added: '10/15/2024, 7:57:49 AM',
  },
  {
    id: uuidv4(),
    text: "when did it end? all the enjoyment.. I'm sad again, don't tell my boyfriend, it's not what he's made for... what was I made for?",
    user: 'billieeilish',
    added: '10/14/2024, 11:52:07 AM',
  },
  {
    id: uuidv4(),
    text: "I bet you figured I'd pass with the winter, be something easy to forget... oh, you think I'm gone 'cause I left... but I'm in the trees, I'm in the breeze, my foosteps on the ground. You'll see my face in every place, but you can't catch me now",
    user: 'lucygray',
    added: '10/13/2024, 4:07:23 PM',
  },
  {
    id: uuidv4(),
    text: 'long live the walls we crashed through! how the kingdom lights shined just for me and you :) I was screaming, "Long live all the magic we made!" and bring on all the pretenders... one day, we will be remembered',
    user: 'taylorswift',
    added: '10/13/2024, 12:36:21 PM',
  },
];

module.exports = messages;
