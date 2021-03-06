/**
 * Created by sean on 31/01/16.
 */

var superagent = require('superagent');
var chai = require('chai');
var expect = chai.expect;

describe('html edge poster generation', function() {

    var TARGET_HOST = 'http://localhost:17142';

//    it('should generate a poster for MNN487118_Test.zip via a GET', function (done) {
//        superagent
//            .get(TARGET_HOST + '/convert/test.png?src=http://localhost/MNN487118_Test/Entertainment1+300+x+250.html&width=300&height=250')
//            .end(function (err, res) {
//                expect(res.status).to.equal(200);
//                done();
//            })
//    });

    it('should generate a CC2015 poster for MNN487118_Test.zip via a POST', function (done) {
        superagent
            .post(TARGET_HOST + '/convert/test.png')
            .type('form')
            .attach('creative', 'test-resources/MNN487118_Test.zip', 'MNN487118_Test.zip')
            .end(function (err, res) {
                if (res.text) console.error(res.text);
                expect(res.status).to.equal(200);
                done();
            })
    });

    it('should gracefully fail when attempting to create poster for test-fitting-test.zip via a POST', function (done) {
        superagent
            .post(TARGET_HOST + '/convert/test.png')
            .type('form')
            .attach('creative', 'test-resources/test-fitting-test.zip', 'test-fitting-test.zip')
            .end(function (err, res) {
                if (res.text) console.error(res.text);
                expect(res.status).to.equal(500);
                done();
            })
    });
});