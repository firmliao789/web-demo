"use strict";

/**
 * LRU（Least recently used，最近最少使用）算法。该算法的观点是，
 最近被访问的数据那么它将来访问的概率就大，
 缓存满的时候，优先淘汰最无人问津者。
 */
class LruCache {
    constructor(limit = 10) {
        this.limit = limit;
        this.index = {};
        this._store = [];
    }

    get(key) {
        let idx = this.index[key],
            result = this._store[idx];
        if (result !== null) {
            //使用了如果数组中存在 就把他加到最前面
            let arr = this._store.splice(0, idx + 1);
            arr.pop();
            arr.unshift(result);
            this._store = arr.concat(this._store);
            //把当前项的index设置为0 其他的统一加一
            for (let key in this.index) {
                if (this.index[key] === idx)
                    this.index[key] = 0;
                else
                    this.index[key] = this.index[key]++;
            }
        }
        return result;
    }

    set(key, value) {
        //满了就清除最后面的
        if (this._store.length >= this.limit)
            this._store.pop();
        //将新加入的放到最前面
        this._store.unshift(value);
        //所有的index向后移动一位
        for (let k in this.index)
            this.index[k] = ++this.index[k];
        //当前项的index=0
        this.index[key] = 0;
    }
}

export const lruCacheTest = function () {
    let lruCache = new LruCache(2);
    lruCache.set('a', 'a');
    lruCache.set('b', 'b');
    lruCache.get('a');
    lruCache.set('c', 'c');
    lruCache.get('c');
    lruCache.set('d', 'd');
    console.log(lruCache);
}