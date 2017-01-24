const SGApi_abstract = require('sg-api-abstract');

module.exports = class SGFormApi extends SGApi_abstract{
    constructor(token,fid){
        super(token,'ApiCustomizeform');
        this._formId = fid;
        this._config = this._init();
    }

    _init(){
        return {
            getForm:{
                method:'GET',
                urlData:{
                    fid:this._formId
                }
            }
        }
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