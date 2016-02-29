/*jslint
    browser: true,
    maxerr: 8,
    maxlen: 96,
    node: true,
    nomen: true,
    regexp: true,
    stupid: true
*/
(function () {
    'use strict';
    var local;



    // run shared js-env code - pre-init
    (function () {
        // init local
        local = {};
        // init modeJs
        local.modeJs = (function () {
            try {
                return typeof navigator.userAgent === 'string' &&
                    typeof document.querySelector('body') === 'object' &&
                    typeof XMLHttpRequest.prototype.open === 'function' &&
                    'browser';
            } catch (errorCaughtBrowser) {
                return module.exports &&
                    typeof process.versions.node === 'string' &&
                    typeof require('http').createServer === 'function' &&
                    'node';
            }
        }());
        switch (local.modeJs) {
        // re-init local from window.local
        case 'browser':
            local = window.local;
            break;
        // re-init local from example.js
        case 'node':
            local.script = require('fs').readFileSync(__dirname + '/README.md', 'utf8')
                // support syntax-highlighting
                .replace((/[\S\s]+?\n.*?example.js\s*?```\w*?\n/), function (match0) {
                    // preserve lineno
                    return match0.replace((/.+/g), '');
                })
                .replace((/\n```[\S\s]+/), '')
                // disable mock package.json env
                .replace(/(process.env.npm_package_\w+ = )/g, '// $1')
                // alias require('$npm_package_name') to require('index.js');
                .replace(
                    "require('" + process.env.npm_package_name + "')",
                    "require('./index.js')"
                );
            local.utility2 = require('utility2');
            // require example.js
            local = local.utility2.requireFromScript(
                __dirname + '/example.js',
                local.utility2.jslintAndPrint(local.script, __dirname + '/example.js')
                    .replace(
                        "local.fs.readFileSync(__dirname + '/example.js', 'utf8')",
                        JSON.stringify(local.script)
                    )
            );
            break;
        }
    }());



    // run shared js-env code - function
    (function () {
        // init tests
        local.testCase_crudCreateGetDeleteMany_default = function (options, onError) {
        /*
         * this function will test crudCreateGetDeleteMany's default handling-behavior
         */
            var onParallel;
            // jslint-hack
            local.utility2.nop(options);
            onParallel = local.utility2.onParallel(onError);
            onParallel.counter += 1;
            [{
                crudCreateOrReplaceOne: local.swgg.api.pet.addPet,
                crudDeleteOneByKeyUnique: local.swgg.api.pet.deletePet,
                crudGetOneByKeyUnique: local.swgg.api.pet.getPetById,
                data: { id: 10, name: 'name', photoUrls: ['photoUrls'] },
                keyAlias: 'id',
                keyUnique: 'petId'
            }, {
                crudCreateOrReplaceOne: local.swgg.api.store.placeOrder,
                crudDeleteOneByKeyUnique: local.swgg.api.store.deleteOrder,
                crudGetOneByKeyUnique: local.swgg.api.store.getOrderById,
                data: { id: 10 },
                keyAlias: 'id',
                keyUnique: 'orderId'
            }, {
                crudCreateOrReplaceOne: local.swgg.api.user.createUser,
                crudDeleteOneByKeyUnique: local.swgg.api.user.deleteUser,
                crudGetOneByKeyUnique: local.swgg.api.user.getUserByName,
                data: { username: 'zz_test_crudCreateGetDeleteMany' },
                keyUnique: 'username'
            }].forEach(function (options) {
                onParallel.counter += 1;
                local.testCase_crudCreateGetDeleteOne_default(options, onParallel);
            });
            onParallel();
        };

        local.testCase_crudCreateGetDeleteOne_default = function (options, onError) {
        /*
         * this function will test crudCreateGetDeleteOne's default handling-behavior
         */
            var modeNext, onNext;
            modeNext = 0;
            onNext = function (error, data) {
                local.utility2.testTryCatch(function () {
                    // validate no error occurred
                    local.utility2.assert(!error, error);
                    modeNext += 1;
                    switch (modeNext) {
                    case 1:
                        options = local.utility2.objectSetDefault(options || {}, {
                            data: { id: 'zz_test_crudCreateGetDeleteOne', propRequired: true },
                            keyUnique: 'id'
                        });
                        // test create handling-behavior
                        local.testCase_crudCreateOrReplaceOne_default(options, onNext);
                        break;
                    case 2:
                        // validate no error occurred
                        local.utility2.assert(!error, error);
                        // test delete handling-behavior
                        local.testCase_crudDeleteOneByKeyUnique_default(options, onNext);
                        break;
                    default:
                        onError(error, data);
                    }
                }, onError);
            };
            onNext();
        };

        local.testCase_crudCreateOrReplaceOne_default = function (options, onError) {
        /*
         * this function will test crudCreateOrReplaceOne's default handling-behavior
         */
            var modeNext, onNext;
            modeNext = 0;
            onNext = function (error, data) {
                local.utility2.testTryCatch(function () {
                    // validate no error occurred
                    local.utility2.assert(!error, error);
                    modeNext += 1;
                    switch (modeNext) {
                    case 1:
                        options = local.utility2.objectSetDefault(options || {}, {
                            crudCreateOrReplaceOne: local.swgg.api._test.crudCreateOrReplaceOne,
                            data: {
                                id: 'zz_test_crudCreateOrReplaceOneByKeyUnique',
                                propRequired: true
                            },
                            keyUnique: 'id'
                        });
                        local.swgg.queryByKeyUniqueInit(options);
                        options.crudCreateOrReplaceOne({ body: JSON.stringify(options.data) }, {
                            modeErrorData: true
                        }, onNext);
                        break;
                    case 2:
                        // validate no error occurred
                        local.utility2.assert(!error, error);
                        // validate data was created
                        local.testCase_crudGetOneByKeyUnique_default(options, onNext);
                        break;
                    default:
                        onError(error, data);
                    }
                }, onError);
            };
            onNext();
        };

        local.testCase_crudDeleteOneByKeyUnique_default = function (options, onError) {
        /*
         * this function will test crudDeleteOneByKeyUnique's default handling-behavior
         */
            var modeNext, onNext;
            modeNext = 0;
            onNext = function (error, data) {
                local.utility2.testTryCatch(function () {
                    // validate no error occurred
                    local.utility2.assert(!error, error);
                    modeNext += 1;
                    switch (modeNext) {
                    case 1:
                        options = local.utility2.objectSetDefault(options || {}, {
                            crudDeleteOneByKeyUnique:
                                local.swgg.api._test.crudDeleteOneByKeyUnique_id,
                            crudGetOneByKeyUnique:
                                local.swgg.api._test.crudGetOneByKeyUnique_id,
                            keyUnique: 'id',
                            keyValue: 'zz_test_crudDeleteOneByKeyUnique'
                        });
                        local.swgg.queryByKeyUniqueInit(options);
                        options.crudDeleteOneByKeyUnique(options.queryByKeyUnique, {
                            modeErrorData: true
                        }, onNext);
                        break;
                    case 2:
                        // validate no error occurred
                        local.utility2.assert(!error, error);
                        options.crudGetOneByKeyUnique(options.queryByKeyUnique, {
                            modeErrorData: true
                        }, onNext);
                        break;
                    case 3:
                        // validate no error occurred
                        local.utility2.assert(!error, error);
                        // validate data was deleted
                        local.utility2.assert(data.obj.data.length === 1 &&
                            data.obj.data[0] === null, data);
                        onNext();
                        break;
                    default:
                        onError(error, data);
                    }
                }, onError);
            };
            onNext();
        };

        local.testCase_crudExistsOneByKeyUnique_default = function (options, onError) {
        /*
         * this function will test crudExistsOneByKeyUnique's default handling-behavior
         */
            var modeNext, onNext;
            modeNext = 0;
            onNext = function (error, data) {
                local.utility2.testTryCatch(function () {
                    // validate no error occurred
                    local.utility2.assert(!error, error);
                    modeNext += 1;
                    switch (modeNext) {
                    case 1:
                        options = {
                            crudExistsOneByKeyUnique:
                                local.swgg.api._test.crudExistsOneByKeyUnique_id,
                            keyUnique: 'id',
                            keyValue: 'zz_test_crudExistsOneByKeyUnique'
                        };
                        local.swgg.queryByKeyUniqueInit(options);
                        options.crudExistsOneByKeyUnique(options.queryByKeyUnique, {
                            modeErrorData: true
                        }, onNext);
                        break;
                    case 2:
                        // validate no error occurred
                        local.utility2.assert(!error, error);
                        // validate data
                        local.utility2.assert(data.obj.data.length === 1 &&
                            data.obj.data[0] === true, data);
                        onNext();
                        break;
                    default:
                        onError(error, data);
                    }
                }, onError);
            };
            onNext();
        };

        local.testCase_crudGetOneByKeyUnique_default = function (options, onError) {
        /*
         * this function will test crudGetOneByKeyUnique's default handling-behavior
         */
            var modeNext, onNext;
            modeNext = 0;
            onNext = function (error, data) {
                local.utility2.testTryCatch(function () {
                    // validate no error occurred
                    local.utility2.assert(!error, error);
                    modeNext += 1;
                    switch (modeNext) {
                    case 1:
                        options = local.utility2.objectSetDefault(options || {}, {
                            crudGetOneByKeyUnique:
                                local.swgg.api._test.crudGetOneByKeyUnique_id,
                            keyUnique: 'id',
                            keyValue: 'zz_test_crudGetOneByKeyUnique'
                        });
                        local.swgg.queryByKeyUniqueInit(options);
                        options.crudGetOneByKeyUnique(options.queryByKeyUnique, {
                            modeErrorData: true
                        }, onNext);
                        break;
                    case 2:
                        // validate no error occurred
                        local.utility2.assert(!error, error);
                        // validate data
                        local.utility2.assert(data.obj.data.length === 1 &&
                            data.obj.data[0][options.keyAlias] === options.keyValue, data);
                        onNext();
                        break;
                    default:
                        onError(error, data);
                    }
                }, onError);
            };
            onNext();
        };

        local.testCase_ajax_error = function (options, onError) {
        /*
         * this function will test ajax's error handling-behavior
         */
            var onParallel;
            // jslint-hack
            local.utility2.nop(options);
            onParallel = local.utility2.onParallel(onError);
            onParallel.counter += 1;
            [{
                // test 404-error handling-behavior
                url: '/test.undefined'
            }, {
                method: 'POST',
                // test param-parse-error handling-behavior
                url: '/api/v0/_test/paramDefault/aa?paramJson=syntax%20error'
            }, {
                // test 404-api-error handling-behavior
                url: '/api/v0/_test/undefined'
            }].forEach(function (options) {
                onParallel.counter += 1;
                local.utility2.ajax(options, function (error, xhr) {
                    local.utility2.testTryCatch(function () {
                        // validate error occurred
                        local.utility2.assert(error, error);
                        // validate error is in jsonapi-format
                        error = JSON.parse(xhr.responseText);
                        local.utility2.assert(error.errors[0], error);
                        onParallel();
                    }, onError);
                });
            });
            onParallel();
        };

        local.testCase_onErrorJsonapi_default = function (options, onError) {
        /*
         * this function will test onErrorJsonapi's default handling-behavior
         */
            var onParallel;
            // jslint-hack
            local.utility2.nop(options);
            onParallel = local.utility2.onParallel(onError);
            onParallel.counter += 1;
            [
                'hello',
                ['hello'],
                { data: ['hello'], meta: { isJsonapiResponse: true } }
            ].forEach(function (data) {
                onParallel.counter += 1;
                local.swgg.api._test.onErrorJsonapi({ data: JSON.stringify(data) }, {
                    modeErrorData: true
                }, function (error, data) {
                    local.utility2.testTryCatch(function () {
                        // validate no error occurred
                        local.utility2.assert(!error, error);
                        // validate data
                        local.utility2.assert(data.obj.data[0] === 'hello', data);
                        onParallel();
                    }, onError);
                });
            });
            onParallel();
        };

        local.testCase_onErrorJsonapi_emptyArray = function (options, onError) {
        /*
         * this function will test onErrorJsonapi's empty-array handling-behavior
         */
            var onParallel;
            // jslint-hack
            local.utility2.nop(options);
            onParallel = local.utility2.onParallel(onError);
            onParallel.counter += 1;
            onParallel.counter += 1;
            local.swgg.api._test.onErrorJsonapi({ data: '[]' }, {
                modeErrorData: true
            }, function (error, data) {
                local.utility2.testTryCatch(function () {
                    // validate no error occurred
                    local.utility2.assert(!error, error);
                    // validate data
                    local.utility2.assert(data.obj.data[0] === null, data);
                    onParallel();
                }, onError);
            });
            onParallel.counter += 1;
            local.swgg.api._test.onErrorJsonapi({ error: '[]' }, {
                modeErrorData: true
            }, function (error) {
                local.utility2.testTryCatch(function () {
                    // validate error occurred
                    local.utility2.assert(error, error);
                    // validate error
                    local.utility2.assert(error.errors[0].message === 'null', error);
                    onParallel();
                }, onError);
            });
            onParallel();
        };

        local.testCase_onErrorJsonapi_error = function (options, onError) {
        /*
         * this function will test onErrorJsonapi's error handling-behavior
         */
            var onParallel;
            // jslint-hack
            local.utility2.nop(options);
            onParallel = local.utility2.onParallel(onError);
            onParallel.counter += 1;
            [
                'hello',
                ['hello'],
                [{ message: 'hello' }],
                {
                    errors: [{ message: 'hello' }],
                    meta: { isJsonapiResponse: true },
                    statusCode: 500
                }
            ].forEach(function (data) {
                onParallel.counter += 1;
                local.swgg.api._test.onErrorJsonapi({ error: JSON.stringify(data) }, {
                    modeErrorData: true
                }, function (error) {
                    local.utility2.testTryCatch(function () {
                        // validate error occurred
                        local.utility2.assert(error, error);
                        // validate error
                        local.utility2.assert(error.errors[0].message === 'hello', error);
                        onParallel();
                    }, onError);
                });
            });
            onParallel();
        };

        local.testCase_validateByParamDefList_default = function (options, onError) {
        /*
         * this function will test validateByParamDefList's default handling-behavior
         */
            // jslint-hack
            local.utility2.nop(options);
            // test nop handling-behavior
            local.swgg.validateByParamDefList({ data: {} });
            local.swgg.api._test.paramDefault({
                id: 'zz_test_' + local.utility2.uuidTimeCreate(),
                // test array-csv-param handling-behavior
                paramArrayCsv: 'aa,bb',
                // test array-multi-param handling-behavior
                paramArrayMulti: 'aa',
                // test array-pipes-param handling-behavior
                paramArrayPipes: 'aa|bb',
                // test array-ssv-param handling-behavior
                paramArraySsv: 'aa bb',
                // test array-tsv-param handling-behavior
                paramArrayTsv: 'aa\tbb',
                // test body-param handling-behavior
                paramBody: 'hello body',
                // test enum-param handling-behavior
                paramEnum: 0,
                // test header-param handling-behavior
                paramHeader: 'hello header',
                // test json-param handling-behavior
                paramJson: '1',
                // test path-param handling-behavior
                paramPath: 'hello path',
                // test required-param handling-behavior
                paramRequired: 'hello required'
            }, { modeErrorData: true }, function (error, data) {
                local.utility2.testTryCatch(function () {
                    // validate no error occurred
                    local.utility2.assert(!error, error);
                    // validate object
                    data = local.utility2.jsonStringifyOrdered(data.obj.data[0]);
                    local.utility2.assert(data === JSON.stringify({
                        paramArrayCsv: ['aa', 'bb'],
                        paramArrayMulti: ['aa'],
                        paramArrayPipes: ['aa', 'bb'],
                        paramArraySsv: ['aa', 'bb'],
                        paramArrayTsv: ['aa', 'bb'],
                        paramBody: 'hello body',
                        paramEnum: 0,
                        paramHeader: 'hello header',
                        paramJson: '1',
                        paramPath: 'hello path',
                        paramRequired: 'hello required'
                    }), data);
                    onError();
                }, onError);
            });
        };

        local.testCase_validateByParamDefList_formData = function (options, onError) {
        /*
         * this function will test validateByParamDefList's formData handling-behavior
         */
            // jslint-hack
            local.utility2.nop(options);
            local.swgg.api._test.paramFormData({
                id: 'zz_test_' + local.utility2.uuidTimeCreate(),
                paramFormData1: 'aa',
                paramFormData2: 'bb'
            }, { modeErrorData: true }, function (error, data) {
                local.utility2.testTryCatch(function () {
                    // validate no error occurred
                    local.utility2.assert(!error, error);
                    // validate object
                    data = local.utility2.jsonStringifyOrdered(data.obj.data[0]);
                    local.utility2.assert(data === JSON.stringify({
                        paramFormData1: 'aa',
                        paramFormData2: 'bb'
                    }), data);
                    onError();
                }, onError);
            });
        };

        local.testCase_validateBySchema_default = function (options, onError) {
        /*
         * this function will test validateBySchema's default handling-behavior
         */
            var optionsCopy;
            options = {
                data: { propRequired: true },
                schema: local.swgg.swaggerJson.definitions.TestCrudModel
            };
            [
                { key: 'propArray', value: [null] },
                { key: 'propArraySubdoc', value: [{ propRequired: true }] },
                { key: 'propBoolean', value: true },
                { key: 'propEnum', value: 0 },
                { key: 'propInteger', value: 0 },
                { key: 'propIntegerInt32', value: 0 },
                { key: 'propIntegerInt64', value: 0 },
                { key: 'propNumberFloat', value: 0.5 },
                { key: 'propNumberDouble', value: 0.5 },
                { key: 'propObject', value: { foo: true } },
                { key: 'propObjectSubdoc', value: { propRequired: true } },
                { key: 'propString', value: 'hello' },
                { key: 'propStringByte', value: local.modeJs === 'browser'
                    ? local.global.btoa(local.utility2.stringAsciiCharset)
                    : new Buffer(local.utility2.stringAsciiCharset).toString('base64') },
                { key: 'propStringDate', value: '1971-01-01' },
                { key: 'propStringDatetime', value: '1971-01-01T00:00:00Z' },
                { key: 'propStringEmail', value: 'q@q.com' },
                { key: 'propStringJson', value: 'null' },
                { key: 'propUndefined', value: null },
                { key: 'propUndefined', value: undefined },
                { key: 'propUndefined', value: true }
            ].forEach(function (element) {
                optionsCopy = local.utility2.jsonCopy(options.data);
                optionsCopy[element.key] = element.value;
                // test circular-reference handling-behavior
                optionsCopy.propArraySubdoc = optionsCopy.propArraySubdoc || [optionsCopy];
                optionsCopy.propObject = optionsCopy.propObject || optionsCopy;
                optionsCopy.propObjectSubdoc = optionsCopy.propObjectSubdoc || optionsCopy;
                local.swgg.validateBySchema({ data: optionsCopy, schema: options.schema });
            });
            onError();
        };

        local.testCase_validateBySchema_error = function (options, onError) {
        /*
         * this function will test validateBySchema's error handling-behavior
         */
            var optionsCopy;
            options = {
                data: { propRequired: true },
                schema: local.swgg.swaggerJson.definitions.TestCrudModel
            };
            [
                { data: null },
                { key: 'propArray', value: true },
                { key: 'propArraySubdoc', value: [{ propRequired: null }] },
                { key: 'propBoolean', value: 0 },
                { key: 'propEnum', value: -1 },
                { key: 'propInteger', value: true },
                { key: 'propInteger', value: Infinity },
                { key: 'propInteger', value: NaN },
                { key: 'propIntegerInt32', value: 0.5 },
                { key: 'propIntegerInt64', value: 0.5 },
                { key: 'propNumber', value: true },
                { key: 'propNumber', value: Infinity },
                { key: 'propNumber', value: NaN },
                { key: 'propNumberFloat', value: true },
                { key: 'propNumberDouble', value: true },
                { key: 'propObject', value: true },
                { key: 'propObjectSubdoc', value: 'non-object' },
                { key: 'propRequired', value: null },
                { key: 'propRequired', value: undefined },
                { key: 'propString', value: true },
                { key: 'propStringByte', value: local.utility2.stringAsciiCharset },
                { key: 'propStringDate', value: 'null' },
                { key: 'propStringDatetime', value: 'null' },
                { key: 'propStringEmail', value: 'null' },
                { key: 'propStringJson', value: 'syntax error' }
            ].forEach(function (element) {
                local.utility2.testTryCatch(function () {
                    options.error = null;
                    optionsCopy = local.utility2.jsonCopy(options.data);
                    optionsCopy[element.key] = element.value;
                    local.swgg.validateBySchema({
                        data: element.data === null
                            ? null
                            : optionsCopy,
                        schema: options.schema
                    });
                }, function (error) {
                    options.error = error;
                });
                // validate error occurred
                local.utility2.assert(options.error, element);
            });
            onError();
        };

        local.testCase_validateBySwagger_default = function (options, onError) {
        /*
         * this function will test validateBySwagger's default handling-behavior
         */
            options = {};
            local.utility2.testMock([
                // suppress console.error
                [console, { error: local.utility2.nop }]
            ], function (onError) {
                [null, {}].forEach(function (element) {
                    local.utility2.testTryCatch(function () {
                        local.swgg.validateBySwagger(element);
                    }, function (error) {
                        options.data = error;
                    });
                    // validate error occurred
                    local.utility2.assert(options.data, options.data);
                });
                onError();
            }, onError);
        };
    }());
    switch (local.modeJs) {



    // run browser js-env code - function
    case 'browser':
        local.testCase_ui_default = function (options, onError) {
        /*
         * this function will test the ui's default handling-behavior
         */
            options = {};
            options.onParallel = local.utility2.onParallel(onError);
            options.onParallel.counter += 1;
            [1, -1].forEach(function (ii) {
                Object.keys(local.global.SwaggerUi.Views).sort(function () {
                    // coverage-hack
                    return Math.random() - 0.5;
                }).sort(function (aa, bb) {
                    return (aa < bb
                        ? -1
                        : 1) * ii;
                }).forEach(function (view) {
                    view = local.global.SwaggerUi.Views[view];
                    Object.keys(view.prototype.events || {}).sort(function (aa, bb) {
                        return (aa < bb
                            ? -1
                            : 1) * ii;
                    }).forEach(function (event) {
                        event = {
                            query: event.split(' ').slice(1).join(' '),
                            key: event,
                            name: event.split(' ')[0],
                            value: view.prototype.events[event]
                        };
                        switch (event.name) {
                        case 'click':
                        case 'mousedown':
                        case 'mouseenter':
                            event.type = 'MouseEvent';
                            break;
                        case 'keyup':
                            event.type = 'KeyboardEvent';
                            break;
                        }
                        if (event.type) {
                            options.onParallel.counter += 1;
                            setTimeout(function () {
                                Array.prototype.slice.call(document.querySelectorAll(
                                    '.swagger-section ' + event.query
                                )).forEach(function (element) {
                                    event.event = document.createEvent(event.type);
                                    event.event.initEvent(event.name, true, true);
                                    element.dispatchEvent(event.event);
                                });
                                options.onParallel();
                            }, options.onParallel.counter * 100);
                        }
                    });
                });
            });
            options.onParallel();
        };
        break;



    // run node js-env code - function
    case 'node':
        local.testCase_build_assets = function (options, onError) {
        /*
         * this function will test build's asset handling-behavior
         */
            var onParallel;
            // jslint-hack
            local.utility2.nop(options);
            onParallel = local.utility2.onParallel(onError);
            onParallel.counter += 1;
            [{
                file: '/index.html',
                url: '/'
            }, {
                file: '/api/v0/swagger.json',
                url: '/api/v0/swagger.json'
            }, {
                file: '/assets.example.js',
                url: '/assets.example.js'
            }, {
                file: '/assets.swgg.admin-ui.html',
                url: '/assets.swgg.admin-ui.html'
            }, {
                file: '/assets.swgg.css',
                url: '/assets.swgg.css'
            }, {
                file: '/assets.swgg.js',
                url: '/assets.swgg.js'
            }, {
                file: '/assets.swgg.lib.admin-ui.js',
                url: '/assets.swgg.lib.admin-ui.js'
            }, {
                file: '/assets.swgg.lib.nedb.js',
                url: '/assets.swgg.lib.nedb.js'
            }, {
                file: '/assets.swgg.lib.swagger-ui.js',
                url: '/assets.swgg.lib.swagger-ui.js'
            }, {
                file: '/assets.test.js',
                url: '/assets.test.js'
            }, {
                file: '/assets.utility2.css',
                url: '/assets.utility2.css'
            }, {
                file: '/assets.utility2.js',
                url: '/assets.utility2.js'
            }, {
                file: '/jsonp.swgg.stateInit.js',
                url: '/jsonp.swgg.stateInit.js'
            }, {
                file: '/swagger-ui.html',
                url: '/swagger-ui.html'
            }].forEach(function (options) {
                onParallel.counter += 1;
                local.utility2.ajax(options, function (error, xhr) {
                    // validate no error occurred
                    onParallel.counter += 1;
                    onParallel(error);
                    local.utility2.fsWriteFileWithMkdirp(
                        local.utility2.envDict.npm_config_dir_build + '/app' + options.file,
                        xhr.response,
                        onParallel
                    );
                });
            });
            // copy external dir
            local.fs.readdirSync('external').forEach(function (file) {
                onParallel.counter += 1;
                local.utility2.fsWriteFileWithMkdirp(
                    local.utility2.envDict.npm_config_dir_build + '/app/' + file,
                    local.fs.readFileSync('external/' + file),
                    onParallel
                );
            });
            onParallel();
        };

        local.testCase_testPage_default = function (options, onError) {
        /*
         * this function will test the test-page's default handling-behavior
         */
            // jslint-hack
            local.utility2.nop(options);
            local.utility2.browserTest({
                modeCoverageMerge: true,
                url: local.utility2.serverLocalHost +
                    '/?modeTest=consoleLogResult#!/_test/paramDefault'
            }, onError);
        };
        break;
    }



    // run shared js-env code - post-init
    (function () {
        // init test api
        local.swgg.apiUpdate({
            definitions: {
                // init onErrorJsonapi schema
                onErrorJsonapi: {
                    _pathPrefix: '_test',
                    properties: {
                        data: { type: 'object' },
                        error: { default: {}, type: 'object' }
                    }
                },
                // init TestCrudModel schema
                TestCrudModel: {
                    // init _pathObjectDefaultList
                    _pathObjectDefaultList: [
                        'crudCountManyByQuery',
                        'crudCreateOrReplaceMany',
                        'crudCreateOrReplaceOne',
                        'crudCreateOrReplaceOneByKeyUnique.id',
                        'crudDeleteManyByQuery',
                        'crudDeleteOneByKeyUnique.id',
                        'crudExistsOneByKeyUnique.id',
                        'crudGetManyByQuery',
                        'crudGetOneByQuery',
                        'crudGetOneByKeyUnique.id'
                    ],
                    _pathPrefix: '_test',
                    properties: {
                        id: { type: 'string' },
                        propArray: {
                            items: {},
                            maxItems: 100,
                            minItems: 1,
                            type: 'array',
                            uniqueItems: true
                        },
                        propArraySubdoc: {
                            default: [{ propRequired: true }],
                            items: { $ref: '#/definitions/TestCrudModel' },
                            type: 'array'
                        },
                        propBoolean: { type: 'boolean' },
                        propEnum: { enum: [0, 1], type: 'integer' },
                        propInteger: { type: 'integer' },
                        propIntegerInt32: { format: 'int32', type: 'integer' },
                        propIntegerInt64: { format: 'int64', type: 'integer' },
                        propNumber: {
                            type: 'number',
                            exclusiveMaximum: true,
                            exclusiveMinimum: true,
                            maximum: 1,
                            minimum: -1,
                            multipleOf: 0.5
                        },
                        propNumberDouble: { format: 'double', type: 'number' },
                        propNumberFloat: { format: 'float', type: 'number' },
                        propObject: {
                            default: { foo: true },
                            maxProperties: 100,
                            minProperties: 1,
                            type: 'object'
                        },
                        propObjectSubdoc: { $ref: '#/definitions/TestNullModel' },
                        propRequired: { default: true },
                        propString: {
                            maxLength: 100,
                            minLength: 1,
                            type: 'string'
                        },
                        propStringByte: { format: 'byte', type: 'string' },
                        propStringDate: { format: 'date', type: 'string' },
                        propStringDatetime: { format: 'date-time', type: 'string' },
                        propStringEmail:
                            { default: 'a@a.com', format: 'email', type: 'string' },
                        propStringJson: { default: 'null', format: 'json', type: 'string' },
                        propUndefined: {}
                    },
                    required: ['propRequired']
                },
                // init TestNullModel schema
                TestNullModel: {}
            },
            paths: {
                // test onErrorJsonapi handling-behavior
                '/_test/onErrorJsonapi': { get: {
                    operationId: 'onErrorJsonapi',
                    parameters: [{
                        description: 'data param',
                        format: 'json',
                        in: 'query',
                        name: 'data',
                        type: 'string'
                    }, {
                        description: 'error param',
                        format: 'json',
                        in: 'query',
                        name: 'error',
                        type: 'string'
                    }],
                    summary: 'test onErrorJsonapi handling-behavior',
                    tags: ['_test']
                } },
                // test default-param handling-behavior
                '/_test/paramDefault/{paramPath}': { post: {
                    operationId: 'paramDefault',
                    parameters: [{
                        // test array-csv-param handling-behavior
                        collectionFormat: 'csv',
                        description: 'csv-array param',
                        in: 'query',
                        items: { type: 'string' },
                        name: 'paramArrayCsv',
                        type: 'array'
                    }, {
                        // test array-multi-param handling-behavior
                        collectionFormat: 'multi',
                        description: 'multi-array param',
                        in: 'query',
                        items: { type: 'string' },
                        name: 'paramArrayMulti',
                        type: 'array'
                    }, {
                        // test array-pipes-param handling-behavior
                        collectionFormat: 'pipes',
                        description: 'pipes-array param',
                        in: 'query',
                        items: { type: 'string' },
                        name: 'paramArrayPipes',
                        type: 'array'
                    }, {
                        // test array-ssv-param handling-behavior
                        collectionFormat: 'ssv',
                        description: 'ssv-array param',
                        in: 'query',
                        items: { type: 'string' },
                        name: 'paramArraySsv',
                        type: 'array'
                    }, {
                        // test array-tsv-param handling-behavior
                        collectionFormat: 'tsv',
                        description: 'tsv-array param',
                        in: 'query',
                        items: { type: 'string' },
                        name: 'paramArrayTsv',
                        type: 'array'
                    }, {
                        // test body-param handling-behavior
                        description: 'body',
                        in: 'body',
                        name: 'paramBody',
                        schema: { format: 'binary', type: 'string' }
                    }, {
                        // test enum-param handling-behavior
                        description: 'enum param',
                        enum: [0, 1],
                        in: 'query',
                        name: 'paramEnum',
                        type: 'integer'
                    }, {
                        // test header-param handling-behavior
                        description: 'header param',
                        in: 'header',
                        name: 'paramHeader',
                        type: 'string'
                    }, {
                        // test json-param handling-behavior
                        description: 'json param',
                        format: 'json',
                        in: 'query',
                        name: 'paramJson',
                        type: 'string'
                    }, {
                        // test optional-param handling-behavior
                        description: 'optional param',
                        in: 'query',
                        name: 'paramOptional',
                        type: 'string'
                    }, {
                        // test path-param handling-behavior
                        description: 'path param',
                        in: 'path',
                        name: 'paramPath',
                        required: true,
                        type: 'string'
                    }, {
                        // test required-param handling-behavior
                        description: 'required param',
                        in: 'query',
                        name: 'paramRequired',
                        required: true,
                        type: 'string'
                    }],
                    summary: 'test default-param handling-behavior',
                    tags: ['_test']
                } },
                // test form-data-param handling-behavior
                '/_test/paramFormData': { post: {
                    operationId: 'paramFormData',
                    parameters: [{
                        description: 'form-data param 1',
                        in: 'formData',
                        name: 'paramFormData1',
                        required: true,
                        type: 'string'
                    }, {
                        description: 'form-data param 2',
                        in: 'formData',
                        name: 'paramFormData2',
                        required: true,
                        type: 'string'
                    }],
                    summary: 'test form-data-param handling-behavior',
                    tags: ['_test']
                } }
            },
            _tagDict: { _test: { description: 'internal test-api' } }
        });
        // test redundant http-body-parse-middleware handling-behavior
        local.middleware.middlewareList.push(local.swgg.middlewareBodyParse);
        // init serverLocal
        local.utility2.serverLocalUrlTest = function (url) {
            url = local.utility2.urlParse(url).pathname;
            return local.modeJs === 'browser' &&
                url.indexOf('/api/v0/swagger.json') < 0 &&
                (/\/api\/v0\/|\/test\./).test(url);
        };
        // init test-middleware
        local.middleware.middlewareList.push(function (request, response, nextMiddleware) {
            local.request = request;
            local.response = response;
            switch (request.swggPathObject && request.swggPathObject.operationId) {
            case 'onErrorJsonapi':
                // test redundant onErrorJsonapi handling-behavior
                local.swgg.onErrorJsonapi(function (error, data) {
                    local.swgg.serverRespondJsonapi(request, response, error, data);
                })(
                    JSON.parse(request.swggParamDict.error || 'null'),
                    JSON.parse(request.swggParamDict.data || 'null')
                );
                break;
            case 'paramDefault':
            case 'paramFormData':
                // test redundant onErrorJsonapi handling-behavior
                local.swgg.serverRespondJsonapi(request, response, null, request.swggParamDict);
                break;
            default:
                // serve file
                local.utility2.middlewareFileServer(request, response, nextMiddleware);
            }
        });
        // init collection-list
        local.utility2.onReady.counter += 1;
        local.swgg.collectionListInit([{
            // test no-drop handling-behavior
            drop: null,
            // test no-id-drop-index handling-behavior
            ensureIndexList: [{ fieldName: 'propInteger' }],
            name: 'TestCrudModel'
        }, {
            docList: [{
                id: 'zz_test_crudDeleteOneByKeyUnique',
                propRequired: true
            }, {
                id: 'zz_test_crudExistsOneByKeyUnique',
                propRequired: true
            }, {
                id: 'zz_test_crudGetOneByKeyUnique',
                propRequired: true
            }],
            drop: true,
            ensureIndexList: [{ fieldName: 'id', unique: true }],
            name: 'TestCrudModel',
            // test removeIndexList handling-behavior
            removeIndexList: ['undefined']
        }], local.utility2.onReady);
        local.swgg.collectionListInit([{
            // test error handling-behavior
            error: local.utility2.errorDefault
        }], local.utility2.nop);
    }());
    switch (local.modeJs) {



    // run node js-env code - post-init
    case 'node':
        // init assets
        local.utility2.assetsDict['/'] = local.utility2.stringFormat(
            local.utility2.templateIndexHtml,
            {
                envDict: local.utility2.envDict,
                // add script assets.test.js
                scriptExtra: '</script><script src="assets.test.js"></script>'
            },
            ''
        );
        local.utility2.assetsDict['/assets.test.js'] =
            local.utility2.istanbulInstrumentInPackage(
                local.fs.readFileSync(__filename, 'utf8'),
                local.swgg.__dirname + '/test.js',
                'swagger-lite'
            );
        local.utility2.assetsDict['/assets.swgg.admin-ui.html'] = local.utility2.stringFormat(
            local.swgg.templateAssetsSwggAdminUiHtml,
            {
                envDict: local.utility2.envDict,
                // add script assets.test.js
                scriptExtra: '</script><script src="assets.example.js"></script>' +
                    '</script><script src="assets.test.js"></script>'
            },
            ''
        );
        // run validation test
        local.testCase_validateByParamDefList_default(null, local.utility2.onErrorDefault);
        local.testCase_validateBySchema_default(null, local.utility2.onErrorDefault);
        local.testCase_validateBySwagger_default(null, local.utility2.onErrorDefault);
        // debug dir
        [
            local.utility2.__dirname,
            local.swgg.Nedb.__dirname,
            __dirname
        ].forEach(function (dir) {
            local.fs.readdirSync(dir).forEach(function (file) {
                file = dir + '/' + file;
                local.utility2.onFileModifiedRestart(file);
                switch (local.path.extname(file)) {
                case '.css':
                case '.js':
                case '.json':
                    // jslint file
                    local.utility2.jslintAndPrint(local.fs.readFileSync(file, 'utf8'), file);
                    break;
                }
            });
        });
        // init repl debugger
        local.utility2.replStart();
        break;
    }
}());
