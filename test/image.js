import Image from '../src/models/image';
import chai from 'chai';
import {expect} from 'chai';
import isBuffer from 'is-buffer';

import * as constants from './constants'


describe('image model', ()=> {
  var imageBase64;
  var imageUrl;
  var imageUrlError;
  var imagePath;

  it('construct image with base64', done => {
    imageBase64 = new Image(constants.BASE64_OPTIONS);
    expect(imageBase64.base64).to.be.a('string');
    expect(imageBase64.path).to.equal(null);
    expect(imageBase64.url).to.equal(null);
    done();
  });

  it('construct image with url', done => {
    imageUrl = new Image(constants.URL_OPTIONS);
    expect(imageUrl.url).to.be.a('string');
    expect(imageUrl.path).to.equal(null);
    expect(imageUrl.base64).to.equal(null);
    done();
  });

  it('construct image with path', done => {
    imagePath = new Image(constants.PATH_OPTIONS);
    expect(imagePath.path).to.be.a('string');
    expect(imagePath.url).to.equal(null);
    expect(imagePath.base64).to.equal(null);
    done();
  });
  it('build image with base64', done => {
    const promise = imageBase64.build();
    promise.then((content) => {
      const buffer = isBuffer(content);
      expect(buffer).to.be.equal(true);
      done();
    });
  });
  it('build image with url', done => {
    const promise = imageUrl.build();
    promise.then((content) => {
      const buffer = isBuffer(content);
      expect(buffer).to.be.equal(true);
      done();
    });
  });
  it('build image with path', done => {
    const promise = imagePath.build();
    promise.then((content) => {
      const buffer = isBuffer(content);
      expect(buffer).to.be.equal(true);
      done();
    });
  });

  it('build error image with empty image', done => {
    const empty = new Image(constants.EMPTY_OBJECT);
    const promise = empty.build();
    promise.then().catch((e) => {
      expect(e.msg).to.be.a('string');
      done();
    });
  });
  it('build error image with url', done => {
    imageUrlError = new Image(constants.URL_OPTIONS_ERROR);
    const promise = imageUrlError.build();
    promise.then().catch((e) => {
      expect(e.msg).to.be.a('string');
      done();
    });
  });
});
