const assert = require('assert');
const MarioChar = require('../models/marioChar');

describe("saving records", ()=>{

  it("saving a record to a database", (done)=>{
    let char = new MarioChar({
      name: "Mario",
      weight: 10
    })
    char.save().then((done)=>{
      done()
    })
  })

})