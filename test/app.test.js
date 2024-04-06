const chai = require("chai");
const { server } = require("../index");
const chaiHttp = require("chai-http");

// assertion style
chai.should();

// making http request to API endpoint
chai.use(chaiHttp);

describe("Testing APi", () => {
    // Testing GET route
  describe("GET /task", () => {
    it("should GET all the task",(done)=>{
        chai.request(server)
        .get('/task')
        .end((err,res)=>{
            res.should.have.status(200)
        })
        done()
    })
  });

  describe("POST /task/create", () => {
    it('should create a new task successfully', async (done) => {
        const taskData = {
            title: 'office work',
            description: 'get details of employee',
            dueDate: '2024-12-02',
            priority: 'low',
            status: 'done'
          };
        chai.request(server)
          .post('/task/create')
          .send(taskData)
        //   .end((err,res)=>{
            
        // })
        response.should.have.status(201);
        response.body.should.be.an('object');
        response.body.should.have.property('_id');
        
        done()
      });
  });
});
