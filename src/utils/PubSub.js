class PubSub{
    topics={};
    subId=-1;
    subscribe=(topic,func)=>{
        const token=(this.subId+=1).toString();
        if(!this.topics[topic]){
            this.topics[topic]=[];
        }
        this.topics[topic].push({token,func});
        return {topic,token}
    };
    unSubscribe=({topic,token})=>{
        const idx=this.topics[topic].findIndex((subscription)=>subscription.token===token)
        this.topics[topic].splice(idx,1);
    };
    publish=(topic,...args)=>{
        this.topics[topic]?.forEach((subscription)=>subscription.func(...args));
    }
}
const TopicsEnum={
    clearTimer:0,
    properties:{
        0:{desc:'clear'}
    }
}
const pubSub=new PubSub();
export default pubSub;
export {TopicsEnum};
