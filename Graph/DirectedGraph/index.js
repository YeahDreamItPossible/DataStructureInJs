// 有向图
class DirectedGraph {
  constructor () {
    this.vertexs = new Map()
    this.edges = new Map()
    this.edgesCount = 0
  }

  // adds a vertex into the graph
  addVertex (key, value) {
    this.vertexs.set(key, value)
    if (!this.edges.has(key)) {
      this.edges.set(key, new Map())
    }
    return this
  }

  // checks if the graph has the vertex
  hasVertex (key) {
    return this.vertexs.has(key)
  }

  // removes the vertex and its all edges from the graph
  removeVertex (vertex) {
    if (!this.hasVertex(vertex)) {
      return false
    }
    this.removeEdges(key)
    this.edges.delete(key)
    this.vertexs.delete(key)
    return true
  }

  // adds a directed edge from the vertex to another vertex 
  addEdge (srcKey, destKey, weight = 1) {
    if (!this.hasVertex(srcKey)) {
      this.addVertex(srcKey, '')
    }
    if (!this.hasVertex(destKey)) {
      this.addVertex(destKey, '')
    }

    this.edges.get(srcKey).set(destKey, weight)
    this.edgesCount += 1
    return this
  }

  // checks if there is a direction between tow node
  hasEdge (srcKey, destKey) {
    return (
      this.hasVertex(srcKey) &&
      this.hasVertex(destKey) &&
      this.edges.get(srcKey).has(destKey)
    )
  }

  // gets the weight of the edge if exists
  getWeigth (srcKey, destKey) {
    if (
      srcKey !== destKey &&
      this.hasVertex(srcKey) &&
      this.hasVertex(destKey)
    ) {
      return this.edges.get(srcKey).get(destKey) || -1
    }
    return -1
  }

  // removes the all direction in the vertex
  removeEdges (key) {
    if (!this.hasVertex(key)) {
      return 0
    }

    let removedEdgesCount = this.edges.get(key).size
    this.edges.get(key).clear()

    this.edges.forEach((dest, src) => {
      if (src.has(key)) {
        this.removeEdge(src, key)
        removedEdgesCount += 1
      }
    })

    this.edgesCount -= removedEdgesCount
    return removedEdgesCount
  }

  // removes the direction from src to dest
  removeEdge (srcKey, destKey) {
    if (!this.hasEdge(srcKey, destKey)) {
      return false
    }
    this.edges.get(srcKey).delete(destKey)
    this.edgesCount -= 1
    return true
  }

  // returns the number of vertexs in the graph
  getVertexCount () {
    return this.vertexs.size
  }

  // returns the number of edge in the graph
  getEdgeCount () {
    return this.edgesCount
  }

  // traverse all vertex in the graph using depth-first search
  dfs () {}
  
  // traverse all vertex in the graph using breadth-first search
  bfs () {}

  // clears the graph
  clear () {
    this.vertexs.clear()
    this.edges.clear()
    this.edgesCount = 0
  }
}