import Vue from 'vue'
import {
    Input,
    Button,
    Loading,
    Message,
    MessageBox,
    Notification
}from 'element-ui';
import './element-variables.scss';
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;

Vue.use(Input);
Vue.use(Button);
Vue.use(Loading);
// Vue.use(Message);
// Vue.use(MessageBox);
// Vue.use(Notification);
