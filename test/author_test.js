const mongoose = require('mongoose');
const assert = require('assert');
const Author = require('../models/authorModel')

describe('author record', ()=>{
  it('creating author' , function(done){
    this.timeout(15000)
    setTimeout(done, 13000); 
    let author = new Author({
      name: "Bhavesh",
      age: 42,
      books: [{title: "None", pages: 510}]
    })
    author.save().then(()=>{
      done()
    })
  })

  it('add book to author', (done)=>{
    this.timeout(30000)
    setTimeout(done, 23000); 
    let author = new Author({
      name: "Bhavesh",
      age: 42,
      books: [{title: "None", pages: 510}]
    })

    author.save().then(()=>{
      Author.findOne({name: "Bhavesh"}).then(record=>{
        record.books.push({title: "None 2", pages: 1000})
        record.save().then(()=>{
          Author.findOne({name: "Bhavesh"}).then(result=>{
            assert(result.books.lenght === 2);
            done()
          })
        })
      })
    })
  })
})