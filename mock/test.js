const Mock=require('mockjs');

module.exports={
    "GET /api/test":(req,res)=>{
        const {id}=req.query;
        if(id==1){
            return res.json(
                Mock.mock({
                    status:0,
                    data:{
                        list:[1,2,3,4,5],
                        name:'helan',
                        id:1,
                        'name|3-5':'ab',
                        'reName|4':'a',
                        'num|+2':2,
                        'newNum|3-5':1,
                        'float|2-4.10-15':1,
                        'arr|5':[
                            {'num|+1':0,'score|1-100':50,'name|+1':['hl','zk','xm','ds','ol']}
                        ],
                        'flag|1':false,
                        'newFlag|0-5':false,
                        'obj|2':{name:'hl',age:24,like:'eat',sex:'girl'},
                        'newOj|2-3':{name:'hl',age:24,like:'eat',sex:'girl'},
                        'array|2':[1,2,3,4,5],
                        'newArray|1':[1,2,3,4,5],
                        'newArray2|1-3':[1,2,3,4,5],
                        first: '@FIRST',
                        middle: '@FIRST',
                        last: '@LAST',
                        full: '@first @middle @last',
                        status: '@name',
                        time: '@time',
                        host: '@first',
                        jqName: '@last',
                        server: '@clast',
                        respond: '@url',


                    }
                })
            )
        }
        else{
            return res.json(
                Mock.mock({
                    status:0,
                    data:{
                        list:['a','s','f','g'],
                        name:'helanlan',
                        id:`${req}`
                    }
                })
            )
        }
    }
}
