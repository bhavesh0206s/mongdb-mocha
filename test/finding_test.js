const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe("finding records", ()=>{
  let char
  beforeEach((done)=>{
    char = new MarioChar({
      name: 'Mario'
    })
    char.save().then(()=>{
      done()
    })
  })

  it("finding one a record from a database", function(done){
    this.timeout(15000)
    setTimeout(done, 13000); 
    MarioChar.findOne({
      name: 'Mario'
    }).then((result)=>{
      assert(result.name === 'Mario')
      done()
    })
  })

  it("finding one a record from a database by ID", function(done){
    this.timeout(30000)
    setTimeout(done, 25000); 
    MarioChar.findOne({
      _id: char._id
    }).then((result)=>{
      assert(result._id.toString() === char._id.toString())
      done()
    })
  })

})