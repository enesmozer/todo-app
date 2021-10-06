process.env.NODE_ENV = 'test';

import mongoose from 'mongoose';
import Todo from '../models/todo.js';

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js';

chai.use(chaiHttp);

describe('Todos', () => {
  beforeEach((done) => {
    //Before each test we empty the database
    Todo.remove({}, (err) => {
      done();
    });
  });

  describe('/GET todos', () => {
    it('it should GET all the todos', (done) => {
      chai
        .request(server)
        .get('/api/v1/todos')
        .end((err, res) => {
          expect(res.status).equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body.length).equal(0);
          done();
        });
    });
  });
});

describe('/POST todo', () => {
  it('it should not POST a todo without name field', (done) => {
    let todo = {
      description: 'Dont forget the paying the bills before deadline',
    };
    chai
      .request(server)
      .post('/api/v1/todos')
      .send(todo)
      .end((err, res) => {
        expect(res.status).equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.own.property('errors');
        expect(res.body.errors).to.have.own.property('name');
        expect(res.body.errors.name).to.have.own.property('kind').equal('required');
        done();
      });
  });
  it('it should POST a todo ', (done) => {
    let todo = {
      name: 'Pay the Bills',
      description: 'Dont forget the paying the bills before deadline',
    };
    chai
      .request(server)
      .post('/api/v1/todos')
      .send(todo)
      .end((err, res) => {
        expect(res.status).equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.own.property('name');
        expect(res.body).to.have.own.property('description');
        expect(res.body).to.have.own.property('createdAt');
        done();
      });
  });
});
