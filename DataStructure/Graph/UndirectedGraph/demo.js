// 无向图 邻接矩阵
class UndirectedGraph {
  constructor () {
    // 顶点
    this.vertexs = []
    // 边
    this.edges = {}
    // 矩阵
    this.matrix = []
  }

  // 是否包含该顶点
  contains (vertex) {
    if (this.vertexs.length === 0) {
      return false
    }
    return this.vertexs.includes(vertex)
  }

  // 添加顶点
  addVertexs (vertexs) {
    if (Array.isArray(vertexs)) {
      vertexs.forEach(vertex => {
        this.addVertex(vertex)
      })
    }
  }

  // 添加单个顶点
  addVertex (vertex) {
    if (!this.contains(vertex)) {
      this.vertexs.push(vertex)
    }
  }

  // 添加边
  addEdges (edges) {
    Object.keys(edges).forEach(from => {
      this.addEdge(from, edges[from])
    })
  }

  // 添加单边
  addEdge (from, tos) {
    this.addVertex(from)
    if (Array.isArray(tos)) {
      tos.forEach(to => {
        this.addVertex(to)
      })
    } else {
      this.addVertex(to)
    }

    tos = Array.isArray(tos) ? tos : [tos]
    if (this.edges[from]) {
      this.edges[from] = [ ...new Set([ ...this.edges[from], ...tos]) ]
    } else {
      this.edges[from] = tos
    }

    tos.forEach(to => {
      if (this.edges[to]) {
        this.edges[to] = [ ...new Set([...this.edges[to], from]) ]
      } else {
        this.edges[to] = [from]
      }
    })
  }

  // 构建矩阵
  build () {
    const vertexs = this.vertexs
    const length = vertexs.length
    for (let i = 0; i < length; i++) {
      this.matrix[i] = new Array(length)
      for (let j = 0; j < length; j++) {
        if (i === j) {
          this.matrix[i][j] = 0
        } else {
          const key = vertexs[i]
          const value = vertexs[j]
          if (this.edges[key] && this.edges[key].includes(value)) {
            this.matrix[i][j] = 1
          } else {
            this.matrix[i][j] = 0
          }
        }
      }
    }
  }
}

//    A B C D E F G
// A  0 1 1 1 0 0 1
// B  1 0 1 1 0 0 0
// C  1 1 0 1 0 0 0
// D  1 1 1 0 0 0 0
// E  0 0 0 0 0 1 1
// F  0 0 1 0 1 0 1
// G  1 0 0 0 1 1 0
const vertexs = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const undirectedGraph = new UndirectedGraph()
undirectedGraph.addVertexs(vertexs)
const edges = {
  A: ['B', 'C', 'D', 'G'],
  B: ['C', 'D'],
  C: ['D', 'F'],
  E: ['F', 'G'],
  F: ['G']
}
undirectedGraph.addEdges(edges)
undirectedGraph.build()
console.log(undirectedGraph.matrix)