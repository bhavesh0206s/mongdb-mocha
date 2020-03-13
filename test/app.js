const mongoose = require('mongoose')
before((done)=>{
  mongoose.connect('mongodb+srv://bhavesh:<password>@cluster0-awgwv.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology: true ,useNewUrlParser: true, useFindAndModify: false  });
  done()
})

beforeEach((done)=>{
  mongoose.connection.collections.mariochars.drop(()=>{
    done()
  })
})