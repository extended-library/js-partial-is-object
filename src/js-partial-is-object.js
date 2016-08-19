/*
 |----------------------------------------------------------------------------------------------------------------------
 | A partial to check whether an object is a plain object.
 |----------------------------------------------------------------------------------------------------------------------
 */

/**
 * More information on [JavaScript Open Standards]{@link https://github.com/jsopenstd/jsopenstd}.
 *
 * @namespace js.partial
 * @version 0.0.0
 *
 * @author Richard King <richrdkng@gmail.com> [GitHub]{@link https://github.com/richrdkng}
 * @license [MIT]{@link https://github.com/jsopenstd/js-partial-foreach/blob/master/license.md}
 */

/**
 * UMD - [returnExports.js pattern]{@link https://github.com/umdjs/umd/blob/master/templates/returnExports.js}
 * For more information and license, check the link below:
 * [UMD GitHub Repository]{@link https://github.com/umdjs/umd}
 */
(function(root, factory) {
    // AMD
    /* istanbul ignore next: ignore coverage test for UMD */
    if (typeof define === 'function' && define.amd) {
        define([], factory);

    // CommonJS
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();

    // Browser
    } else {
        root.js_partial_isString = factory();
    }
}(this, function() {
    'use strict';

    /**
     * Determines whether an object is a plain object.
     * By default handles **null-prototype objects** as plain objects created via **Object.create(null)**.
     *
     * @function isObject
     * @memberOf js.partial
     *
     * @param {*}       object                                        - The object to check.
     * @param {boolean} [handleNullPrototypeObjectAsPlainObject=true] - Handle a null-prototype object as plain object
     *                                                                  too, when created via **Object.create(null)**.
     *                                                                  By default a null-prototype object will be also
     *                                                                  classified as a plain object.
     *
     * @returns {boolean} If the object is a plain object, it will return true.
     */
    return function isObject(object, handleNullPrototypeObjectAsPlainObject) {
        var handleNullProtoObj = true;

        if (typeof handleNullPrototypeObjectAsPlainObject === 'boolean') {
            handleNullProtoObj = handleNullPrototypeObjectAsPlainObject;
        }

        if (object !== null) {
            if (Object.prototype.toString.call(object) === '[object Object]') {
                if ( ! handleNullProtoObj) {
                    return typeof object.constructor !== 'undefined';
                }

                return true;
            }
        }

        return false;
    };
}));
