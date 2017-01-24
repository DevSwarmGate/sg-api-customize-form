const SGApi_abstract = require('sg-api-abstract'),
    _makeApi = require('./_makeApi');

module.exports = class SGApiCustomizeForm_ausOpen extends SGApiCustomizeForm{
    constructor(token,fid){
        super(token,fid);
        this._winnerId = null;
        this._matchId = null;
    }

    _init(){
        return _makeApi(this);
    }
};