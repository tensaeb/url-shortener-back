const ShortUrl = require("../models/ShortUrl");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.should();
chai.use(chaiHttp);

describe("ShortUrl", () => {
  beforeEach((done) => {
    ShortUrl.deleteMany({}, (err) => {
      done();
    });
  });

  describe("/GET shortUrl", () => {
    it("it should GET all the urls", (done) => {
      chai
        .request(app)
        .get("/api/urls")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST shortUrl", () => {
    it("it should nw POST a shortUrl", (done) => {
      let shortUrl = {
        full: "https://github.com/tensaeb/url-shortener-back",
      };
      chai
        .request(app)
        .post("/api/urls")
        .send(shortUrl)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("Success");
          done();
        });
    });
  });
});
