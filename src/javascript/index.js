// import bind from './core/bind/index'
// import myNew from './new/index'
// import myInstanceOf from './instanceof'
// import printHtmlTags from './case/printHtmlTags'
import {deBounceTest} from './case/debounce'
import {throttleTest} from './case/throttle'
import {deepCloneTest} from './case/deepClone'
import {disruptArrayTest} from './case/disruptArray'

//灰常重要，知会 webpack 允许此模块的热更新
if (module.hot) {
    module.hot.accept();
}
//打印html内所有的标签
// printHtmlTags();

//防抖
// deBounceTest();

//节流
// throttleTest();

//深拷贝
// deepCloneTest();

//数组乱序
disruptArrayTest();
