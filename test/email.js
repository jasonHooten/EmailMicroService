/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


var kraken = require('kraken-js'),
    express = require('express'),
    request = require('supertest');


describe('/email', function () {

    var app, mock;


    beforeEach(function (done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: process.cwd()
        }));

        mock = app.listen(1337);

    });


    afterEach(function (done) {
        mock.close(done);
    });


    it('/resend should require an :id', function (done) {
        request(mock)
            .get('/email/resend')
            .expect(404)
            .end(function (err, res) {
                done(err);
            });
    });
    
    
    it('/resend/1 should be OK when supplying an :id', function (done) {
        request(mock)
            .get('/email/resend/1')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                hasDetails(res);
                done(err);
            });
        
        function hasDetails (res) {
            if('details' in res.body) throw new Error("does not contain a details object");
        }
    });

});
