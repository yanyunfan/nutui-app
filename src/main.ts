import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import store from './store/index';

import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css"

// 自动设置 REM 基准值（html 标签字体大小）
import 'amfe-flexible'
// 加载全局样式
import './styles/index.less'

const app = createApp(App)

app.use(router).use(store).use(NutUI).mount("#app");
