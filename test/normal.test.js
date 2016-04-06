'use strict';

var test = require('tap').test;
var require_once = require('../');

test('require-normal', function (t) {
    var mapnik = require('mapnik');
    t.equal(mapnik.version, '3.5.0');
    var tilelive_vector = require('tilelive-vector');
    t.equal(tilelive_vector.mapnik.version, '3.4.19');
    t.end();
});