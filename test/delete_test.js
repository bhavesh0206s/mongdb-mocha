const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe("deleting records", ()=>{
  let char
  beforeEach((done)=>{
    char = new MarioChar({
      name: 'Mario'
    })
    char.save().then(()=>{
      done()
    })
  })

  it("delete one a record from a database", function(done){
    this.timeout(15000)
    setTimeout(done, 13000); 
    MarioChar.findOneAndRemove({
      name: 'Mario'
    }).then(()=>{
      MarioChar.findOne({name: "Mario"}).then(result=>{
        assert(result===null)
        done()
      })
    })
  })

})