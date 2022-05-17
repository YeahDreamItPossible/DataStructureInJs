// 图 邻接矩阵实现
// 邻接矩阵使用一个一维数组来存储顶点信息，一个二维数组来存储图中边或弧的信息

const DIRECTED_GRAPH = Symbol.for('DIRECTED_GRAPH')

class Graph {
  constructor () {
    this.type = DIRECTED_GRAPH
    this.vertexs = []
    // this.
    this.martri = []
  }
}