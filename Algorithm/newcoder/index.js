/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
const getCache = () => ({
  _map: {},

  has (key) {
    return (key in this._map) || false
  },

  get (key) {
    if (this.has(key)) {
      return this._map[key]
    }
    return -1
  },

  set (key, val) {
    this._map[key] = val
    return this
  },

  delete (key) {
    console.log(key, this.has(key))
    if (!this.has(key)) {
      return true
    }
    try {
      delete this._map[key]
    } catch (e) {
      console.error(e)
    }
  },

  size () {
    return Object.keys(this._map).length
  }
})

const getStack = () => ({
  _stack: [],

  inStack (val) {
    this._stack.unshift(val)
  },

  outStack () {
    return this._stack.pop()
  },

  removeNode (val) {
    this._stack = this._stack.filter(node => node !== val)
  },

  isOverflow (size) {
    return this._stack.length > size
  }
})


const foreach = (iteratable, iterator) => {
  iteratable.forEach((key, index) => {
    iterator(key, index)
  })
}

function LRU( operators ,  k ) {
  const cache = getCache()
  const stack = getStack()
  const map = getCache()

  let result = []

  foreach(operators, (operator) => {
    if (map.has(operator[1])) {
      stack.removeNode(operator[1])
    } else {
      map.set(operator[1], true)
    }

    stack.inStack(operator[1])
    
    if (operator[0] === 1 && stack.isOverflow(k)) {
      // 栈溢出 且 设置缓存
      let firstNode = stack.outStack()
      console.log('-->>', firstNode)
      cache.delete(firstNode)
      map.set(firstNode, false)
    }

    if (operator[0] === 1) {
      cache.set(operator[1], operator[2])
    } else {
      result.push(cache.get(operator[1]))
    }
  })

  console.log(cache._map)
  console.log(stack._stack)

  return result
}

// console.log(LRU([[1,1,1],[1,2,2],[1,1,3],[2,1],[2,1]],3))
// console.log(LRU([[1,1,1],[1,2,2],[1,3,2],[2,1],[1,4,4],[2,2]],3))
// console.log(LRU([[1,1,1],[1,2,2],[1,3,3],[2,2],[1,4,4],[1,5,5],[2,2]],3))
console.log(LRU([[1,1,1],[1,2,2],[1,3,2],[2,1],[1,4,4],[2,2]],4))

// 3 2 1
// 2 3 1
// 4 2 3
// 5 4 2
// 2 5 4

module.exports = {
  LRU : LRU
};