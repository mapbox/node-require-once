"use strict";

var module_loader = require('module');
var real_load = module_loader._load;

var load = function(request, parent, isMain) {
    if (module.exports.modules.indexOf(request) > -1) {
       return real_load(require.resolve(request), parent, isMain);
    }
    return real_load(request, parent, isMain);
};

module.exports = function(require_once) {
    if (Array.isArray(require_once)) {
        module.exports.modules = module.exports.modules.concat(require_once);
    } else {
        module.exports.modules.push(require_once);
    }
    module_loader._load = load;
}

module.exports.modules = [];
