/*
 *@description: to-rem
 *@author: lore-w metro-cpu@hotmail.com
 *@time: 2017/03/16
 */

"use strict";
let postcss = require('postcss'),
    _ = require('lodash');

module.exports = postcss.plugin('toRem', function toRem(options) {

    return function(css) {

        options = _.assign({
            base: 50,
            mini: 1
        }, options);

        let regPxValue = /\d+px/gi,
            regFirstValue = /(\d+)px/i;

        css.walkRules(function(rule) {

            rule.walkDecls(function(decl, i) {

                let matchArr = decl.value.match(regPxValue),
                    declValue;

                if (!_.isNull(matchArr)) {

                    declValue = decl.value;

                    let valueNum;

                    _.forEach(matchArr, function(val, index) {

                        valueNum = val.match(regFirstValue)[1] * 1;

                        if (valueNum > options.mini) {

                            declValue = declValue.replace(regFirstValue, valueNum / options.base + 'rem');
                        }

                    });
                    decl.value = declValue;
                }
            });
        });
    }
});