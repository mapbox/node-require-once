'use strict';

var test = require('tap').test;
var require_once = require('../');

test('require-once', function (t) {
    t.deepEqual(require_once.modules, []);
    require_once('mapnik');
    t.deepEqual(require_once.modules, ['mapnik']);
    var mapnik = require('mapnik');
    t.equal(mapnik.version, '3.5.0');
    var tilelive_vector = require('tilelive-vector');
    t.equal(tilelive_vector.mapnik.version, '3.5.0');
    t.end();
});