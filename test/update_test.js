const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe("updating records", ()=>{
  let char
  beforeEach((done)=>{
    char = new MarioChar({
      name: 'Mario',
      weight: 50
    })
    char.save().then(()=>{
      done()
    })
  })

  it("updating one a record from a database", function(done){
    this.timeout(15000)
    setTimeout(done, 13000); 
    MarioChar.findOneAndUpdate({
      name: 'Mario',
    }, {name: "Kirtan"}).then(()=>{
      MarioChar.findOne({_id: char._id}).then(result=>{
        assert(result.name==="Kirtan")
        done()
      })
    })
  })

  it("updating weight a record from a database", function(done){
    this.timeout(15000)
    setTimeout(done, 13000); 
    MarioChar.findOneAndUpdate({
      name: 'Mario',
    }, {name: "Kirtan"}).then(()=>{
      MarioChar.findOne({_id: char._id}).then(result=>{
        assert(result.name==="Kirtan")
        done()
      })
    })
  })

})