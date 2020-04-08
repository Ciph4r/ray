const Ray = () => {
  return {
    length : 0,

    push: function(val){
      this[this.length] = val
      this.length ++
    },
    pop: function(){
      const val = this[this.length -1]
      delete this[this.length -1]
      this.length --
      return val
    },
    unshift: function(val){
    let next = this[0]
    for (let i = 1 ; i < this.length+1; i++){
      const old = next
      next = this[i]
      this[i] = old
    }
    this[0] = val
    this.length ++
     return this
    },
    shift: function(){
      const val = this[0]
      for (let i = 0 ; i < this.length ; i++){
        this[i] = this[i+1]
      }
      delete this[this.length-1]
      this.length -- 
      return val
    }

  
  }
}


module.exports = {
  Ray,
}

