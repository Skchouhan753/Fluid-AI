const chai = require("chai");
const { server } = require("../index");
const chaiHttp = require("chai-http");

// assertion style
chai.should();

// making http request to API endpoint
chai.use(chaiHttp);

describe("Testing APi", () => {
   
    describe("POST /register", () => {
        it('should register user successfully', (done) => {
          const userData = {
            username: 'john cena',
            email: 'johncena@gmail.com',
            password: '1234',
          };
      
          chai.request(server)
            .post('/register')
            .send(userData)
            .end((err, response) => {
              // Check for errors
              if (err) {
                return done(err);
              }
      
              // Assertions
              response.should.have.status(200);
            //   response.body.should.be.an('object');
            //   response.body.should.have.property('_id');
      
              done();
            });
        });
      });

      describe("POST /login", () => {
        it('should login successfully', (done) => {
          const userData = {
            email: 'johncena@gmail.com',
            password: '1234',
          };
      
          chai.request(server)
            .post('/login')
            .send(userData)
            .end((err, response) => {
              // Check for errors
              if (err) {
                return done(err);
              }
      
              // Assertions
              response.should.have.status(200);
            //   response.body.should.be.an('object');
            //   response.body.should.have.property('_id');
      
              done();
            });
        });
      });

  describe("GET /task", () => {
    it("should get all the task",(done)=>{
        chai.request(server)
        .get('/task')
        .end((err,res)=>{
            res.should.have.status(200)
        })
        done()
    })
  });

  describe("POST /task/create", () => {
    it('should create a new task successfully', (done) => {
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
        .end((err, response) => {
          // Check for errors
          if (err) {
            return done(err);
          }
  
          // Assertions
          response.should.have.status(200);
        //   response.body.should.be.an('object');
        //   response.body.should.have.property('_id');
  
          done();
        });
    });
  });
  
  describe("GET /task/:id", () => {
    it('should retrieve a task by ID successfully', async (done) => {
        // Assuming task exists in the database
        const existingTaskId = '6610352efe0cd5e737f45820';
        chai.request(server)
        .get(`/task/${existingTaskId}`)
          .end((err,res)=>{
              res.should.have.status(200);
              // response.body.should.be.an('object');
              // response.body.should.have.property('_id').eql(existingTaskId);
              // Add more assertions based on your task schema
        })
        done()
      });
  });

  describe("PATCH /task/:id", () => {
    it('should update a task by ID successfully', async (done) => {
        // Assuming task exists in the database
        const existingTaskId = '6610352efe0cd5e737f45820';
        const taskData = {
            title: 'office work',
            description: 'get details of employee',
            dueDate: '2024-12-02',
            priority: 'low',
            status: 'done'
          };
        chai.request(server)
          .post(`/task/${existingTaskId}`)
          .send(taskData)
          .end((err,res)=>{
              res.should.have.status(200);
              // response.body.should.be.an('object');
              // response.body.should.have.property('_id').eql(existingTaskId);
              // Add more assertions based on your task schema
        })
        done()
      });
  });
  
  describe("DELETE /task/:id", () => {
    it('should DELETE a task by ID successfully', async (done) => {
        // Assuming task exists in the database
        const existingTaskId = '6610352efe0cd5e737f45820';
        chai.request(server)
          .delete(`/task/${existingTaskId}`)
          .end((err,res)=>{
              res.should.have.status(200);
              // response.body.should.be.an('object');
              // response.body.should.have.property('_id').eql(existingTaskId);
              // Add more assertions based on your task schema
        })
        done()
      });
  });



});
