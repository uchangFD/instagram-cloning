const Router = require('koa-router');
const imageCtrl = require('./image.ctrl');

const image = new Router();

// posts.get('/', postsCtrl.list);
// posts.post('/', postsCtrl.write);
// posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read);
// posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);
// posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);

module.exports = image;
