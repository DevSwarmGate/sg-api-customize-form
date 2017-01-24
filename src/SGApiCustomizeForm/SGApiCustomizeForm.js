const SGApi_abstract = require('sg-api-abstract'),
    _makeApi = require('./_makeApi');

module.exports = class SGApiCustomizeForm extends SGApi_abstract{
    constructor(token,fid){
        super(token,'ApiCustomizeform');
        this._formId = fid;
        this._winnerId = null;
        this._matchId = null;
        this._config = this._init();
    }

    _init(){
        return _makeApi(this);
    }

    request(aname,data,cb){
        let submit_data = this._config[aname],
            url = null;

        if(data !== null && data !== undefined && data !== ''){
            submit_data.data = data;
        }
        url = super.getApiUrl(aname,submit_data.urlData);
        super.request(url,submit_data,cb);
    }
};