const testProxy=require('./test');
const delay=require('mocker-api/lib/delay')
const proxy={
    ...testProxy
}
const ENABLE_MOCK=true;
module.exports=ENABLE_MOCK?delay(proxy,0):{}
