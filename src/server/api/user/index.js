const Router = require('koa-router');
const userCtrl = require('./user.ctrl');

const user = new Router();

user.get('/', userCtrl.list);
user.post('/', userCtrl.write);
// posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read);
// posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);
// posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);

module.exports = user;
