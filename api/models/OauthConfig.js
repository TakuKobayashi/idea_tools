/**
* OauthConfig.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    userId: {type: 'int'},
    oathType: {type: 'string'},
    sid: {type: 'string'},
    token: {type: 'string'},
    tokenSecret: {type: 'string'},
    expiredAt: {type: 'datetime'},
    imagePath: {type: 'string'},
  }
};

