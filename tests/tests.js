'use strict';

const assert   = require('assert'),
      vars     = require('./variables'),
      isObject = require(vars.path);

module.exports = {
    'js-partial-is-object' : () => {
        let _undefined = undefined,
            _null      = null,
            _boolean   = false,
            _number    = 0,
            _string    = 'str',
            _function  = () => {},
            _array     = [],
            _object    = {},

            _objectCreated_1 = Object.create({}),
            _objectCreated_2 = Object.create(Object.prototype),
            _nullProtoObject = Object.create(null);

        assert(isObject()           === false);
        assert(isObject(_undefined) === false);
        assert(isObject(_null)      === false);
        assert(isObject(_boolean)   === false);
        assert(isObject(_number)    === false);
        assert(isObject(_string)    === false);
        assert(isObject(_function)  === false);
        assert(isObject(_array)     === false);
        assert(isObject(_object)    === true);

        assert(isObject(_undefined, true) === false);
        assert(isObject(_null,      true) === false);
        assert(isObject(_boolean,   true) === false);
        assert(isObject(_number,    true) === false);
        assert(isObject(_string,    true) === false);
        assert(isObject(_function,  true) === false);
        assert(isObject(_array,     true) === false);
        assert(isObject(_object,    true) === true);

        assert(isObject(_undefined, false) === false);
        assert(isObject(_null,      false) === false);
        assert(isObject(_boolean,   false) === false);
        assert(isObject(_number,    false) === false);
        assert(isObject(_string,    false) === false);
        assert(isObject(_function,  false) === false);
        assert(isObject(_array,     false) === false);
        assert(isObject(_object,    false) === true);

        assert(isObject(_objectCreated_1) === true);
        assert(isObject(_objectCreated_2) === true);
        assert(isObject(_nullProtoObject) === true);

        assert(isObject(_objectCreated_1, true) === true);
        assert(isObject(_objectCreated_2, true) === true);
        assert(isObject(_nullProtoObject, true) === true);

        assert(isObject(_objectCreated_1, false) === true);
        assert(isObject(_objectCreated_2, false) === true);
        assert(isObject(_nullProtoObject, false) === false);
    }
};
