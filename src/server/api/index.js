const Router = require('koa-router');

const comment = require('./comment');
const like = require('./like');
const image = require('./image');
const user = require('./user');

const api = new Router();

api.use('/comment', comment.routes());
api.use('/like', like.routes());
api.use('/image', image.routes());
api.use('/user', user.routes());

module.exports = api;
