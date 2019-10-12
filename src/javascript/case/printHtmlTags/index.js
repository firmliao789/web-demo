import {log} from '../../log'

/**
 * @param set 保存标签自动去重
 * @param node 当前节点
 */
const travel = (set, node) => {
    //如果当前节点不为空就添加进去
    if (node.tagName) {
        set.add(node.tagName)
    }
    //查询子节点
    if (node.childNodes.length > 0) {
        node.childNodes.forEach((item) => {
            travel(set, item);
        })
    }
}

/**
 * 打印页面所有的标签
 */
export default function () {
    let set = new Set();
    travel(set, document)
    log(Array.from(set).join('、'));
}
