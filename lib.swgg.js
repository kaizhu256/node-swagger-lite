/* istanbul instrument in package swagger-lite */
/*jslint
    bitwise: true,
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
        // init global
        local.global = local.modeJs === 'browser'
            ? window
            : global;
        // init utility2_rollup
        local = local.global.utility2_rollup || local;
        // init lib
        local.local = local.swgg = local;
        // init lib utility2
        local.utility2 = local.global.utility2_rollup || (local.modeJs === 'browser'
            ? local.global.utility2
            : require('./lib.utility2.js'));
        local.utility2.objectSetDefault(local, local.utility2);
        local.idDomElementDict = {};
        local.swaggerSchemaJson = {};
        local.templateApiDict = {};
        local.uiEventListenerDict = {};
        // init templateApiDict
        local.swgg.templateApiDict.crudCountManyByQuery = {
            _method: 'get',
            _path: '/{{_tags0}}/crudCountManyByQuery',
            parameters: [{
                default: '{}',
                description: 'query param',
                format: 'json',
                in: 'query',
                name: '_queryWhere',
                type: 'string'
            }],
            summary: 'count many {{_schemaName}} objects by query'
        };
        local.swgg.templateApiDict.crudErrorDelete = {
            _method: 'delete',
            _path: '/{{_tags0}}/crudErrorDelete',
            responses: {
                500: {
                    description:
                        '500 error - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return error response'
        };
        local.swgg.templateApiDict.crudErrorGet = {
            _method: 'get',
            _path: '/{{_tags0}}/crudErrorGet',
            responses: {
                500: {
                    description:
                        '500 error - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return error response'
        };
        local.swgg.templateApiDict.crudErrorHead = {
            _method: 'head',
            _path: '/{{_tags0}}/crudErrorHead',
            responses: {
                500: {
                    description:
                        '500 error - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return error response'
        };
        local.swgg.templateApiDict.crudErrorLogin = {
            _method: 'get',
            _path: '/{{_tags0}}/crudErrorLogin',
            responses: {
                500: {
                    description:
                        '500 error - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'login by password'
        };
        local.swgg.templateApiDict.crudErrorOptions = {
            _method: 'options',
            _path: '/{{_tags0}}/crudErrorOptions',
            responses: {
                500: {
                    description:
                        '500 error - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return error response'
        };
        local.swgg.templateApiDict.crudErrorPatch = {
            _method: 'patch',
            _path: '/{{_tags0}}/crudErrorPatch',
            responses: {
                500: {
                    description:
                        '500 error - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return error response'
        };
        local.swgg.templateApiDict.crudErrorPost = {
            _method: 'post',
            _path: '/{{_tags0}}/crudErrorPost',
            responses: {
                500: {
                    description:
                        '500 error - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return error response'
        };
        local.swgg.templateApiDict.crudErrorPre = {
            _method: 'get',
            _path: '/{{_tags0}}/crudErrorPre',
            responses: {
                500: {
                    description:
                        '500 error - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return error response'
        };
        local.swgg.templateApiDict.crudErrorPut = {
            _method: 'put',
            _path: '/{{_tags0}}/crudErrorPut',
            responses: {
                500: {
                    description:
                        '500 error - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return error response'
        };
        local.swgg.templateApiDict.crudGetManyByQuery = {
            _method: 'get',
            _path: '/{{_tags0}}/crudGetManyByQuery',
            parameters: [{
                default: '{"_id":{"$exists":true}}',
                description: 'query param',
                format: 'json',
                in: 'query',
                name: '_queryWhere',
                required: true,
                type: 'string'
            }, {
                default: '{}',
                description: 'projection-fields param',
                format: 'json',
                in: 'query',
                name: '_queryFields',
                type: 'string'
            }, {
                default: 20,
                description: 'cursor-limit param',
                in: 'query',
                name: '_queryLimit',
                required: true,
                type: 'integer'
            }, {
                default: 0,
                description: 'cursor-skip param',
                in: 'query',
                name: '_querySkip',
                type: 'integer'
            }, {
                default: '[{"fieldName":"_timeUpdated","isDescending":true}]',
                description: 'cursor-sort param',
                format: 'json',
                in: 'query',
                name: '_querySort',
                type: 'string'
            }],
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse{{_schemaName}}' }
                }
            },
            summary: 'get many {{_schemaName}} objects by query'
        };
        local.swgg.templateApiDict.crudGetOneById = {
            _idField: '{{_idField}}',
            _method: 'get',
            _path: '/{{_tags0}}/crudGetOneById.{{_idField}}.{{_idAlias}}',
            parameters: [{
                description: '{{_schemaName}} {{_idField}}',
                in: 'query',
                name: '{{_idField}}',
                required: true,
                type: 'string'
            }],
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse{{_schemaName}}' }
                }
            },
            summary: 'get one {{_schemaName}} object by {{_idField}}'
        };
        local.swgg.templateApiDict.crudGetOneByQuery = {
            _method: 'get',
            _path: '/{{_tags0}}/crudGetOneByQuery',
            parameters: [{
                default: '{}',
                description: 'query param',
                format: 'json',
                in: 'query',
                name: '_queryWhere',
                required: true,
                type: 'string'
            }],
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse{{_schemaName}}' }
                }
            },
            summary: 'get one {{_schemaName}} object by query'
        };
        local.swgg.templateApiDict.crudNullDelete = {
            _method: 'delete',
            _path: '/{{_tags0}}/crudNullDelete',
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return null response'
        };
        local.swgg.templateApiDict.crudNullGet = {
            _method: 'get',
            _path: '/{{_tags0}}/crudNullGet',
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return null response'
        };
        local.swgg.templateApiDict.crudNullHead = {
            _method: 'head',
            _path: '/{{_tags0}}/crudNullHead',
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return null response'
        };
        local.swgg.templateApiDict.crudNullOptions = {
            _method: 'options',
            _path: '/{{_tags0}}/crudNullOptions',
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return null response'
        };
        local.swgg.templateApiDict.crudNullPatch = {
            _method: 'patch',
            _path: '/{{_tags0}}/crudNullPatch',
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return null response'
        };
        local.swgg.templateApiDict.crudNullPost = {
            _method: 'post',
            _path: '/{{_tags0}}/crudNullPost',
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return null response'
        };
        local.swgg.templateApiDict.crudNullPut = {
            _method: 'put',
            _path: '/{{_tags0}}/crudNullPut',
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'return null response'
        };
        local.swgg.templateApiDict.crudRemoveManyByQuery = {
            _method: 'delete',
            _path: '/{{_tags0}}/crudRemoveManyByQuery',
            parameters: [{
                default: '{"id":"undefined"}',
                description: 'query param',
                format: 'json',
                in: 'query',
                name: '_queryWhere',
                required: true,
                type: 'string'
            }],
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'remove many {{_schemaName}} objects by query'
        };
        local.swgg.templateApiDict.crudRemoveOneById = {
            _idField: '{{_idField}}',
            _method: 'delete',
            _path: '/{{_tags0}}/crudRemoveOneById.{{_idField}}.{{_idAlias}}',
            parameters: [{
                description: '{{_schemaName}} {{_idField}}',
                in: 'query',
                name: '{{_idField}}',
                required: true,
                type: 'string'
            }],
            summary: 'remove one {{_schemaName}} object by {{_idField}}'
        };
        local.swgg.templateApiDict.crudSetManyById = {
            _method: 'put',
            _path: '/{{_tags0}}/crudSetManyById',
            parameters: [{
                description: '{{_schemaName}} object',
                in: 'body',
                name: 'body',
                required: true,
                schema: { items: { $ref: '#/definitions/{{_schemaName}}' }, type: 'array' }
            }],
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse{{_schemaName}}' }
                }
            },
            summary: 'create or replace many {{_schemaName}} objects'
        };
        local.swgg.templateApiDict.crudSetOneById = {
            _idField: '{{_idField}}',
            _method: 'put',
            _path: '/{{_tags0}}/crudSetOneById.{{_idField}}.{{_idAlias}}',
            parameters: [{
                description: '{{_schemaName}} {{_idField}}',
                in: 'query',
                name: '{{_idField}}',
                type: 'string'
            }, {
                description: '{{_schemaName}} object',
                in: 'body',
                name: 'body',
                required: true,
                schema: { $ref: '#/definitions/{{_schemaName}}' }
            }],
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse{{_schemaName}}' }
                }
            },
            summary: 'create or replace one {{_schemaName}} object by {{_idField}}'
        };
        local.swgg.templateApiDict.crudUpdateOneById = {
            _idField: '{{_idField}}',
            _method: 'patch',
            _path: '/{{_tags0}}/crudUpdateOneById.{{_idField}}.{{_idAlias}}',
            parameters: [{
                description: '{{_schemaName}} {{_idField}}',
                in: 'query',
                name: '{{_idField}}',
                type: 'string'
            }, {
                description: '{{_schemaName}} object',
                in: 'body',
                name: 'body',
                required: true,
                schema: { $ref: '#/definitions/{{_schemaName}}' },
                'x-swgg-notRequired': true
            }],
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse{{_schemaName}}' }
                }
            },
            summary: 'create or update one {{_schemaName}} object by {{_idField}}'
        };
        local.swgg.templateApiDict.fileGetOneById = {
            _idField: '{{_idField}}',
            _method: 'get',
            _path: '/{{_tags0}}/fileGetOneById.{{_idField}}.{{_idAlias}}',
            parameters: [{
                description: '{{_schemaName}} {{_idField}}',
                in: 'query',
                name: '{{_idField}}',
                required: true,
                type: 'string'
            }],
            produces: ['application/octet-stream'],
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { type: 'file' }
                }
            },
            summary: 'get one {{_schemaName}} file by {{_idField}}'
        };
        local.swgg.templateApiDict.fileUploadManyByForm = {
            _fileUploadNumber: '{{_fileUploadNumber}}',
            _method: 'post',
            _path: '/{{_tags0}}/fileUploadManyByForm.{{_fileUploadNumber}}',
            consumes: ['multipart/form-data'],
            parameters: [{
                description: '{{_schemaName}} file description',
                in: 'formData',
                name: 'fileDescription',
                type: 'string'
            }, {
                description: '{{_schemaName}} file to upload by form',
                in: 'formData',
                name: 'file1',
                type: 'file'
            }],
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse{{_schemaName}}' }
                }
            },
            summary: 'upload many {{_schemaName}} files by form'
        };
        local.swgg.templateApiDict.userLoginByPassword = {
            _method: 'get',
            _path: '/{{_tags0}}/userLoginByPassword',
            parameters: [
                {
                    description: 'The user name for login',
                    in: 'query',
                    name: 'username',
                    required: true,
                    type: 'string'
                },
                {
                    description: 'The password for login in clear text',
                    in: 'query',
                    name: 'password',
                    required: true,
                    type: 'string'
                }
            ],
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'login by password'
        };
        local.swgg.templateApiDict.userLogout = {
            _method: 'get',
            _path: '/{{_tags0}}/userLogout',
            responses: {
                200: {
                    description:
                        '200 ok - http://jsonapi.org/format/#document-structure-top-level',
                    schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                }
            },
            summary: 'logout'
        };
        // JSON.stringify templateApiDict items to prevent side-effects
        Object.keys(local.swgg.templateApiDict).forEach(function (key) {
            local.swgg.templateApiDict[key] =
                JSON.stringify(local.swgg.templateApiDict[key]);
        });
        // init templateSwaggerJson
        local.swgg.templateSwaggerJson = JSON.stringify({
            basePath: '/api/v0',
            definitions: {
                BuiltinFile: {
                    properties: {
                        _id: { readOnly: true, type: 'string' },
                        _timeCreated: { format: 'date-time', readOnly: true, type: 'string' },
                        _timeUpdated: { format: 'date-time', readOnly: true, type: 'string' },
                        fileBlob: { format: 'byte', type: 'string' },
                        fileContentType: { type: 'string' },
                        fileDescription: { type: 'string' },
                        fileFilename: { type: 'string' },
                        fileInputName: { type: 'string' },
                        fileSize: { minimum: 0, type: 'integer' },
                        fileUrl: { type: 'string' },
                        id: { type: 'string' }
                    }
                },
                BuiltinUser: {
                    properties: {
                        _id: { readOnly: true, type: 'string' },
                        _timeCreated: { format: 'date-time', readOnly: true, type: 'string' },
                        _timeUpdated: { format: 'date-time', readOnly: true, type: 'string' },
                        id: { type: 'string' },
                        jwtEncoded: { type: 'string' },
                        password: { format: 'password', type: 'string' },
                        username: { type: 'string' }
                    }
                },
                // http://jsonapi.org/format/#document-structure-top-level
                BuiltinJsonapiResponse: {
                    properties: {
                        data: {
                            items: { type: 'object' },
                            type: 'array'
                        },
                        errors: {
                            items: { type: 'object' },
                            type: 'array'
                        },
                        meta: { type: 'object' }
                    }
                }
            },
            info: {
                description: 'demo of swagger-ui server',
                title: 'swgg api',
                version: '0'
            },
            paths: {},
            securityDefinitions: {},
            swagger: '2.0',
            tags: []
        });
/* jslint-ignore-begin */
// https://github.com/swagger-api/swagger-ui/blob/v2.1.3/dist/images/logo_small.png
local.swgg.templateSwaggerUiLogoSmallBase64 = '\
iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFn\
ZVJlYWR5ccllPAAAAqRJREFUeNrEVz1s00AUfnGXii5maMXoEUEHVwIpEkPNgkBdMnQoU5ytiKHJwpp2\
Q2JIO8DCUDOxIJFIVOoWZyJSh3pp1Q2PVVlcCVBH3ufeVZZ9Zye1Ay86nXV+ue/9fO/lheg/Se02X1rv\
ksmbnTiKvuxQMBNgBnN4a/LCbmnUAP6JV58NCUsBC8CuAJxGPF47OgNqBaA93tolUhnx6jC4NxGwyOEw\
lccyAs+3kwdzKq0HDn2vEBTi8J2XpyMaywNDE157BhXUE3zJhlq8GKq+Zd2zaWHepPA8oN9XkfLmRdOi\
JV4XUUg/IyWncLjCYY/SHndV2u7zHr3bPKZtdxgboJOnthvrfGj/oMf3G0r7JVmNlLfKklmrt2MvvcNO\
7LFOhoFHfuAJI5o6ta10jpt5CQLgwXhXG2YIwvu+34qf78ybOjWTnWwkgR36d7JqJOrW0hHmNrKg9xhi\
S4+1jFmrxymh03B0w+6kURIAu3yHtOD5oaUNojMnGgbcctNvwdAnyxvxRR+/vaJnjzbpzcZX+nN1SdGv\
85i9eH8w3qPO+mdm/y4dnQ1iI8Fq6Nf4cxL6GWSjiFDSs0VRnxC5g0xSB2cgHpaseTxfqOv5uoHkNQ6H\
a/N1Yz9mNMppEkEkYKj79q6uCq4bCHcSX3fJ0Vk/k9siASjCm1N6gZH6Ec9IXt2WkFES2K/ixoIyktJP\
Au/ptOA1SgO5zqtr6KASJPF0nMV8dgMsRhRPOcMwqQAOoi0VAIMLAEWJ6YYC1c8ibj1GP51RqwzYwZVM\
HQuvOzMCBUtb2tGHx5NAdLKqp5AX7Ng4d+Zi8AGDI9z1ijx9yaCH04y3GCP2S+QcvaGl+pcxyUBvinFl\
awoDQjHSelX8hQEoIrAq8p/mgC88HOS1YCl/BRgAmiD/1gn6Nu8AAAAASUVORK5CYII=\
';
/* jslint-ignore-end */
        // init assets
        local.assetsDict['/assets.swgg.lib.json-schema.schema.json'] = '{}';
        local.assetsDict['/assets.swgg.lib.swagger.schema.json'] = '{}';
        local.assetsDict['/assets.swgg.swagger-ui.logo_small.png'] =
            local.assetsDict['/favicon.ico'] = local.bufferToNodeBuffer(
                local.bufferCreate(local.swgg.templateSwaggerUiLogoSmallBase64, 'base64')
            );
    }());



    // run shared js-env code - function
    (function () {
        local.swgg.apiAjax = function (self, options, onError) {
        /*
         * this function will send a swagger-api ajax-request with the pathObject self
         */
            var isMultipartFormData, tmp;
            isMultipartFormData = (self.consumes && self.consumes[0]) === 'multipart/form-data';
            local.objectSetDefault(options, { data: '', paramDict: {}, url: '' });
            // try to validate paramDict
            local.tryCatchOnError(function () {
                local.swgg.validateByParamDefList({
                    // normalize paramDict
                    data: local.swgg.normalizeParamDictSwagger(
                        local.jsonCopy(options.paramDict),
                        self
                    ),
                    dataReadonlyRemove: options.paramDict,
                    key: self.operationId,
                    paramDefList: self.parameters
                });
            }, function (error) {
                options.errorValidate = error;
                onError(error);
            });
            if (options.errorValidate) {
                return;
            }
            // init options-defaults
            local.objectSetDefault(options, {
                inForm: isMultipartFormData
                    ? new local.FormData()
                    : '',
                inHeader: {},
                inPath: self._path,
                inQuery: '',
                headers: {},
                method: self._method,
                responseType: self.produces &&
                        self.produces[0].indexOf('application/octet-stream') === 0
                    ? 'arraybuffer'
                    : ''
            });
            // init paramDict
            self.parameters.forEach(function (paramDef) {
                tmp = options.paramDict[paramDef.name];
                if (tmp === undefined) {
                    return;
                }
                if (!(paramDef.type === 'string' || tmp instanceof local.Blob)) {
                    tmp = JSON.stringify(tmp);
                }
                switch (paramDef.in) {
                case 'body':
                    options.inBody = tmp;
                    break;
                case 'formData':
                    if (isMultipartFormData) {
                        options.inForm.append(paramDef.name, tmp, tmp && tmp.name);
                        break;
                    }
                    options.inForm += '&' + encodeURIComponent(paramDef.name) + '=' +
                        encodeURIComponent(tmp);
                    break;
                case 'header':
                    options.inHeader[encodeURIComponent(paramDef.name.toLowerCase())] = tmp;
                    break;
                case 'query':
                    options.inQuery += '&' + encodeURIComponent(paramDef.name) + '=' +
                        encodeURIComponent(tmp);
                    break;
                case 'path':
                    options.inPath = options.inPath
                        .replace('{' + paramDef.name + '}', encodeURIComponent(tmp));
                    break;
                }
            });
            // init data
            options.data = options.inBody || (isMultipartFormData
                ? options.inForm
                : options.inForm.slice(1));
            // init headers
            local.objectSetOverride(options.headers, options.inHeader);
            // init headers - Content-Type
            if (options.inForm) {
                options.headers['Content-Type'] = isMultipartFormData
                    ? 'multipart/form-data'
                    : 'application/x-www-form-urlencoded';
            }
            // init headers - Authorization
            options.jwtEncoded = options.jwtEncoded || local.swgg.userJwtEncoded;
            if (options.jwtEncoded) {
                options.headers.Authorization = options.headers.Authorization ||
                    'Bearer ' + options.jwtEncoded;
            }
            // init url
            options.url = (local.swgg.urlBaseGet() + options.inPath + '?' +
                options.inQuery.slice(1))
                .replace((/\?$/), '');
            if (!(options.headers['Content-Type'] || options.headers['content-type'])) {
                options.headers['content-type'] = 'application/json; charset=UTF-8';
            }
            // send ajax-request
            return local.ajax(options, function (error, xhr) {
                // try to init responseJson
                local.tryCatchOnError(function () {
                    xhr.responseJson = JSON.parse(xhr.responseText);
                }, local.nop);
                // init userJwtEncoded
                tmp = xhr.getResponseHeader('swgg-jwt-encoded');
                if (tmp) {
                    local.swgg.userJwtEncoded = tmp;
                }
                onError(error, xhr);
            });
        };

        local.swgg.apiDictUpdate = function (options) {
        /*
         * this function will update the swagger-api dict of api-calls
         */
            var tmp;
            options = options || {};
            // init apiDict
            local.swgg.apiDict = local.swgg.apiDict || {};
            // init swaggerJson
            local.swgg.swaggerJson = local.swgg.swaggerJson ||
                JSON.parse(local.swgg.templateSwaggerJson);
            // save tags
            tmp = {};
            [local.swgg.swaggerJson.tags, options.tags || []].forEach(function (tagList) {
                tagList.forEach(function (tag) {
                    local.objectSetOverride(tmp, local.objectLiteralize({
                        '$[]': [tag.name, tag]
                    }));
                }, 2);
            });
            tmp = Object.keys(tmp).sort().map(function (key) {
                return tmp[key];
            });
            // merge options into swaggerJson
            options = local.objectSetOverride(local.swgg.swaggerJson, options, 10);
            // restore tags
            local.swgg.swaggerJson.tags = tmp;
            Object.keys(options.definitions).forEach(function (schemaName) {
                // normalize definition
                options.definitions[schemaName] = local.swgg.schemaNormalizeAndCopy(
                    options.definitions[schemaName]
                );
            });
            // init apiDict from paths
            Object.keys(options.paths).forEach(function (path) {
                Object.keys(options.paths[path]).forEach(function (method) {
                    var self;
                    self = options.paths[path][method];
                    self._method = method;
                    self._path = path;
                    local.objectSetOverride(
                        local.swgg.apiDict,
                        local.objectLiteralize({
                            '$[]': [self.tags[0] + ' ' + self.operationId, self]
                        }),
                        2
                    );
                });
            });
            // init apiDict from x-swgg-apiDict
            Object.keys(options['x-swgg-apiDict'] || {}).forEach(function (key) {
                // init self
                local.objectSetOverride(
                    local.swgg.apiDict,
                    local.objectLiteralize({
                        '$[]': [key, local.jsonCopy(options['x-swgg-apiDict'][key])]
                    }),
                    Infinity
                );
            });
            // init apiDict
            Object.keys(local.swgg.apiDict).forEach(function (key) {
                var self;
                self = local.swgg.apiDict[key];
                if (key === self._keyPath) {
                    return;
                }
                // init _operationId
                self._operationId = self._operationId || key.split(' ')[1];
                // init _fileUploadNumber
                self._fileUploadNumber = 1;
                self._operationId.replace(
                    (/^fileUploadManyByForm\.(\d+)/),
                    function (match0, match1) {
                        // jslint-hack - nop
                        local.nop(match0);
                        self._fileUploadNumber = Number(match1);
                    }
                );
                // init _idAlias and _idField
                tmp = local.swgg.idFieldInit({ operationId: self._operationId });
                self._idAlias = tmp.idAlias;
                self._idField = tmp.idField;
                // init _tags0
                self._tags0 = key.split(' ')[0];
                // init templateApiDict
                if (local.swgg.templateApiDict[self._operationId.split('.')[0]]) {
                    local.objectSetDefault(
                        self,
                        JSON.parse(local.swgg.templateApiDict[self._operationId.split('.')[0]]
                            .replace((/\{\{_fileUploadNumber\}\}/g), self._fileUploadNumber)
                            .replace((/\{\{_idAlias\}\}/g), self._idAlias)
                            .replace((/\{\{_idField\}\}/g), self._idField)
                            .replace((/\{\{_schemaName\}\}/g), self._schemaName)
                            .replace((/\{\{_tags0\}\}/g), self._tags0)
                            .replace((/\{\{operationId\}\}/g), self._operationId))
                    );
                }
                // init default
                local.objectSetDefault(self, {
                    _keyOperationId: key,
                    operationId: self._operationId,
                    parameters: [],
                    responses: {
                        200: {
                            description: 'ok - ' +
                                'http://jsonapi.org/format/#document-top-level',
                            schema: { $ref: '#/definitions/BuiltinJsonapiResponse' }
                        }
                    },
                    tags: [self._tags0]
                });
                // init _method
                self._method = self._method.toUpperCase();
                // init _keyPath
                self._keyPath = self._method + ' ' + self._path.replace((/\{.*?\}/g), '');
                // init _idField.format and _idField.type
                if (self._schemaName) {
                    self.parameters.forEach(function (param) {
                        if (param.name === self._idField) {
                            param.format = options.definitions[self._schemaName]
                                .properties[self._idAlias].format;
                            param.type = options.definitions[self._schemaName]
                                .properties[self._idAlias].type;
                        }
                    });
                }
                switch (self.operationId.split('.')[0]) {
                // add extra file-upload forms
                case 'fileUploadManyByForm':
                    for (tmp = 1; tmp <= self._fileUploadNumber; tmp += 1) {
                        self.parameters[tmp] = local.jsonCopy(self.parameters[1]);
                        self.parameters[tmp].name = 'file' + tmp;
                    }
                    break;
                }
                // update apiDict
                self = local.swgg.apiDict[key] = local.swgg.apiDict[self._keyPath] =
                    local.jsonCopy(self);
                // init _ajax
                self._ajax = function (options, onError) {
                    return local.swgg.apiAjax(self, options, onError);
                };
                // remove underscored keys from self
                tmp = local.jsonCopy(self);
                Object.keys(tmp).forEach(function (key) {
                    if (key[0] === '_') {
                        delete tmp[key];
                    }
                });
                // update paths
                local.objectSetOverride(options, local.objectLiteralize({
                    paths: { '$[]': [self._path, { '$[]': [self._method.toLowerCase(), tmp] }] }
                }), 3);
            });
            // normalize swaggerJson
            local.swgg.swaggerJson = JSON.parse(local.jsonStringifyOrdered(options));
            // update $npm_config_swagger_basePath
            local.env.npm_config_swagger_basePath = local.swgg.swaggerJson.basePath;
            // try to validate swaggerJson
            local.tryCatchOnError(function () {
                local.swgg.validateBySwagger(local.swgg.swaggerJson);
            }, local.onErrorDefault);
        };

        local.swgg.dbRowListRandomCreate = function (options) {
        /*
         * this function will return a dbRowList of options.length random dbRow's
         */
            local.objectSetDefault(options, { dbRowList: [] });
            for (options.ii = 0; options.ii < options.length; options.ii += 1) {
                options.dbRowList.push(local.swgg.dbRowRandomCreate(options));
            }
            return options.dbRowList;
        };

        local.swgg.dbRowRandomCreate = function (options) {
        /*
         * this function will return a random dbRow
         */
            var dbRow, ii, max, min, propDef, tmp;
            dbRow = {};
            Object.keys(options.properties).forEach(function (key) {
                propDef = options.properties[key];
                if (propDef.readOnly) {
                    return;
                }
                if (propDef.enum) {
                    dbRow[key] = local.listGetElementRandom(propDef.enum);
                    return;
                }
                // http://json-schema.org/latest/json-schema-validation.html#anchor13
                // 5.1.  Validation keywords for numeric instances (number and integer)
                max = isFinite(propDef.maximum)
                    ? propDef.maximum
                    : 999;
                min = isFinite(propDef.maximum)
                    ? propDef.minimum
                    : -999;
                switch (propDef.type) {
                case 'array':
                    tmp = [];
                    // http://json-schema.org/latest/json-schema-validation.html#anchor36
                    // 5.3.  Validation keywords for arrays
                    for (ii = 0; ii < (propDef.minItems || 0); ii += 1) {
                        tmp.push(null);
                    }
                    break;
                case 'boolean':
                    tmp = local.listGetElementRandom([false, true]);
                    break;
                case 'integer':
                    if (propDef.exclusiveMaximum) {
                        max -= 1;
                    }
                    if (propDef.exclusiveMinimum) {
                        min += 1;
                    }
                    tmp = Math.floor(min + Math.random() * (max - min));
                    break;
                case 'object':
                    tmp = {};
                    // http://json-schema.org/latest/json-schema-validation.html#anchor53
                    // 5.4.  Validation keywords for objects
                    for (ii = 0; ii < (propDef.minProperties || 0); ii += 1) {
                        tmp['property' + ii] = null;
                    }
                    break;
                case 'number':
                    if (propDef.exclusiveMinimum) {
                        min = min < 0
                            ? min * 0.99999
                            : min * 1.00001 + 0.00001;
                    }
                    if (propDef.exclusiveMaximum) {
                        max = max > 0
                            ? max * 0.99999
                            : max * 1.00001 - 0.00001;
                    }
                    tmp = min + Math.random() * (max - min);
                    break;
                case 'string':
                    tmp = 'random_' + Date.now().toString(36) +
                        Math.random().toString(36).slice(2, 10);
                    switch (propDef.format) {
                    case 'byte':
                        tmp = local.stringToBase64(tmp);
                        break;
                    case 'date':
                    case 'date-time':
                        tmp = new Date().toISOString();
                        break;
                    case 'email':
                        tmp = tmp + '@random.com';
                        break;
                    case 'json':
                        tmp = JSON.stringify({ random: tmp });
                        break;
                    }
                    // http://json-schema.org/latest/json-schema-validation.html#anchor25
                    // 5.2.  Validation keywords for strings
                    while (tmp.length < (propDef.minLength || 0)) {
                        tmp += Math.random().toString(36).slice(2, 6);
                    }
                    tmp = tmp.slice(0, propDef.maxLength || Infinity);
                    break;
                }
                // http://json-schema.org/latest/json-schema-validation.html#anchor13
                // 5.1.  Validation keywords for numeric instances (number and integer)
                if (propDef.multipleOf) {
                    tmp = propDef.multipleOf * Math.floor(tmp / propDef.multipleOf);
                    if (tmp < min) {
                        tmp += propDef.multipleOf;
                    }
                }
                // try to validate data
                local.tryCatchOnError(function () {
                    local.swgg.validateByPropDef({
                        data: tmp,
                        key: propDef.name,
                        schema: propDef
                    });
                    dbRow[key] = tmp;
                }, local.nop);
            });
            return local.jsonCopy(local.objectSetOverride(dbRow, options.override(options)));
        };

        local.swgg.idDomElementCreate = function (seed) {
        /*
         * this function will return a unique dom-element id from the seed,
         * that is both dom-selector and url friendly
         */
            var id, ii;
            id = encodeURIComponent(seed).replace((/\W/g), '_');
            for (ii = 2; local.swgg.idDomElementDict[id]; ii += 1) {
                id = encodeURIComponent(seed + '_' + ii).replace((/\W/g), '_');
            }
            local.swgg.idDomElementDict[id] = true;
            return id;
        };

        local.swgg.idFieldInit = function (options) {
        /*
         * this function will init options.idAlias, options.idField, and options.queryById
         */
            var idAlias, idField;
            // init idField
            options.idAlias = options.operationId.split('.');
            idField = options.idField = options.idAlias[1] || 'id';
            // init idAlias
            idAlias = options.idAlias = options.idAlias[2] || options.idField;
            // invert queryById
            if (options.modeQueryByIdInvert) {
                idAlias = options.idField;
                idField = options.idAlias;
            }
            // init queryById
            options.idValue = (options.data && options.data[idAlias]) || options.idValue;
            options.queryById = {};
            options.queryById[idField] = options.idValue;
            return options;
        };

        local.swgg.jwtDecodedEncryptAndEncode = function (user) {
        /*
         * this function will encrypt and encode user.jwtDecrypted and user.jwtDecoded
         */
            local.objectSetDefault(user, {
                jwtDecoded: {},
                jwtDecrypted: {
                    exp: Math.floor(Date.now() / 1000) + 3600,
                    jti: local.uuidTimeCreate()
                }
            }, 2);
            user.jwtDecoded.encrypted = local.sjclCipherAes128Encrypt(
                local.env.JWT_SECRET || '',
                JSON.stringify(user.jwtDecrypted)
            );
            user.jwtEncoded = local.jwtHs256Encode(local.env.JWT_SECRET || '', user.jwtDecoded);
        };

        local.swgg.jwtEncodedDecodeAndDecrypt = function (user) {
        /*
         * this function will decode and decrypt user.jwtEncoded
         */
            // try to decode and decrypt jwtEncoded
            local.tryCatchOnError(function () {
                // decode jwt-payload in bearer-token
                user.jwtDecoded = local.jwtHs256Decode(
                    local.env.JWT_SECRET || '',
                    user.jwtEncoded
                );
                // decrypt jwt-payload's encrypted-sub-payload
                user.jwtDecrypted = JSON.parse(local.sjclCipherAes128Decrypt(
                    local.env.JWT_SECRET || '',
                    user.jwtDecoded.encrypted
                ));
                // validate expiration date
                local.assert(Date.now() * 0.001 <= user.jwtDecrypted.exp);
            }, function () {
                // if error occurred, then undo decoding and decryption
                user.jwtDecoded = user.jwtDecrypted =
                    user.jwtEncoded = user.jwtEncrypted = null;
            });
        };

        local.swgg.jwtEncodedSetHeader = function (request, response) {
        /*
         * this function will set the jwtEncoded-cookie in the response
         * from request.swgg.user.jwtEncoded
         */
            local.serverRespondHeadSet(request, response, null, {
                'swgg-jwt-encoded': request.swgg.user.jwtEncoded
            });
        };

        local.swgg.middlewareBodyParse = function (request, response, nextMiddleware) {
        /*
         * this function will run the middleware that will parse request.bodyRaw
         */
            var ii, jj, options;
            // jslint-hack
            local.nop(response);
            // if request is already parsed, then goto nextMiddleware
            if (!local.isNullOrUndefined(request.swgg.bodyParsed)) {
                nextMiddleware();
                return;
            }
            switch (String(request.headers['content-type']).split(';')[0]) {
            // parse application/x-www-form-urlencoded, e.g.
            // aa=hello%20world&bb=bye%20world
            case 'application/x-www-form-urlencoded':
                request.swgg.bodyParsed = local.bufferToString(request.bodyRaw);
                request.swgg.bodyParsed =
                    local.urlParse('?' + request.swgg.bodyParsed, true).query;
                break;
            /*
             * https://tools.ietf.org/html/rfc7578
             * parse multipart/form-data, e.g.
             * --Boundary\r\n
             * Content-Disposition: form-data; name="key"\r\n
             * \r\n
             * value\r\n
             * --Boundary\r\n
             * Content-Disposition: form-data; name="input1"; filename="file1.png"\r\n
             * Content-Type: image/jpeg\r\n
             * \r\n
             * <data1>\r\n
             * --Boundary\r\n
             * Content-Disposition: form-data; name="input2"; filename="file2.png"\r\n
             * Content-Type: image/jpeg\r\n
             * \r\n
             * <data2>\r\n
             * --Boundary--\r\n
             */
            case 'multipart/form-data':
                request.swgg.isMultipartFormData = true;
                request.swgg.bodyParsed = {};
                request.swgg.bodyMeta = {};
                options = {};
                options.crlf = local.bufferCreate([0x0d, 0x0a]);
                // init boundary
                ii = 0;
                jj = local.bufferIndexOfSubBuffer(request.bodyRaw, options.crlf, ii);
                if (jj <= 0) {
                    break;
                }
                options.boundary = local.bufferConcat([
                    options.crlf,
                    request.bodyRaw.slice(ii, jj)
                ]);
                ii = jj + 2;
                while (true) {
                    jj = local.bufferIndexOfSubBuffer(
                        request.bodyRaw,
                        options.boundary,
                        ii
                    );
                    if (jj < 0) {
                        break;
                    }
                    options.header = local.bufferToString(
                        request.bodyRaw.slice(ii, ii + 1024)
                    ).split('\r\n').slice(0, 2).join('\r\n');
                    options.contentType = (/^content-type:(.*)/im).exec(options.header);
                    options.contentType = options.contentType && options.contentType[1].trim();
                    options.filename = (/^content-disposition:.*?\bfilename="([^"]+)/im)
                        .exec(options.header);
                    options.filename = options.filename && options.filename[1];
                    options.name = (/^content-disposition:.*?\bname="([^"]+)/im)
                        .exec(options.header);
                    options.name = options.name && options.name[1];
                    ii = local.bufferIndexOfSubBuffer(
                        request.bodyRaw,
                        [0x0d, 0x0a, 0x0d, 0x0a],
                        ii + 2
                    ) + 4;
                    options.data = request.bodyRaw.slice(ii, jj);
                    request.swgg.bodyParsed[options.name] = options.data;
                    request.swgg.bodyMeta[options.name] = {
                        contentType: options.contentType,
                        filename: options.filename,
                        name: options.name
                    };
                    ii = jj + options.boundary.length + 2;
                }
                break;
            default:
                request.swgg.bodyParsed = local.bufferToString(request.bodyRaw || '');
                // try to JSON.parse the string
                local.tryCatchOnError(function () {
                    request.swgg.bodyParsed = JSON.parse(request.swgg.bodyParsed);
                }, local.nop);
            }
            nextMiddleware();
        };

        local.swgg.middlewareCrudBuiltin = function (request, response, nextMiddleware) {
        /*
         * this function will run the middleware that will
         * run the builtin crud-operations backed by db-lite
         */
            var crud, onParallel, options, tmp, user;
            options = {};
            local.onNext(options, function (error, data, meta) {
                switch (options.modeNext) {
                case 1:
                    crud = request.swgg.crud;
                    user = request.swgg.user;
                    switch (crud.operationId.split('.')[0]) {
                    case 'crudCountManyByQuery':
                        crud.dbTable.crudCountManyByQuery(crud.queryWhere, options.onNext);
                        break;
                    case 'crudSetManyById':
                        crud.dbTable.crudSetManyById(crud.body, options.onNext);
                        break;
                    case 'crudSetOneById':
                        // replace idField with idAlias in body
                        delete crud.body.id;
                        delete crud.body[crud.idField];
                        crud.body[crud.idAlias] = crud.data[crud.idField];
                        crud.dbTable.crudSetOneById(crud.body, options.onNext);
                        break;
                    case 'crudUpdateOneById':
                        // replace idField with idAlias in body
                        delete crud.body.id;
                        delete crud.body[crud.idField];
                        crud.body[crud.idAlias] = crud.data[crud.idField];
                        crud.dbTable.crudUpdateOneById(crud.body, options.onNext);
                        break;
                    // coverage-hack - test error handling-behavior
                    case 'crudErrorDelete':
                    case 'crudErrorGet':
                    case 'crudErrorHead':
                    case 'crudErrorOptions':
                    case 'crudErrorPatch':
                    case 'crudErrorPost':
                    case 'crudErrorPut':
                        options.onNext(local.errorDefault);
                        break;
                    case 'crudGetManyByQuery':
                        onParallel = local.onParallel(options.onNext);
                        onParallel.counter += 1;
                        crud.dbTable.crudGetManyByQuery({
                            limit: crud.queryLimit,
                            projection: crud.queryFields,
                            query: crud.queryWhere,
                            skip: crud.querySkip,
                            sort: crud.querySort
                        }, function (error, data) {
                            crud.queryData = data;
                            onParallel(error);
                        });
                        onParallel.counter += 1;
                        crud.dbTable.crudCountAll(function (error, data) {
                            crud.paginationCountTotal = data;
                            onParallel(error);
                        });
                        break;
                    case 'crudGetOneById':
                        crud.dbTable.crudGetOneById(crud.queryById, options.onNext);
                        break;
                    case 'crudGetOneByQuery':
                        crud.dbTable.crudGetOneByQuery({
                            query: crud.queryWhere
                        },  options.onNext);
                        break;
                    case 'crudNullDelete':
                    case 'crudNullGet':
                    case 'crudNullHead':
                    case 'crudNullOptions':
                    case 'crudNullPatch':
                    case 'crudNullPost':
                    case 'crudNullPut':
                        options.onNext();
                        break;
                    case 'crudRemoveManyByQuery':
                        crud.dbTable.crudRemoveManyByQuery(crud.queryWhere, options.onNext);
                        break;
                    case 'crudRemoveOneById':
                        crud.dbTable.crudRemoveOneById(crud.queryById, options.onNext);
                        break;
                    case 'fileGetOneById':
                        local.swgg.dbTableFile = local.db.dbTableCreateOne({
                            name: 'File'
                        });
                        crud.dbTable.crudGetOneById(crud.queryById, options.onNext);
                        break;
                    case 'fileUploadManyByForm':
                        local.swgg.dbTableFile = local.db.dbTableCreateOne({
                            name: 'File'
                        });
                        request.swgg.paramDict = {};
                        Object.keys(request.swgg.bodyMeta).forEach(function (key) {
                            if (typeof request.swgg.bodyMeta[key].filename !== 'string') {
                                request.swgg.paramDict[key] =
                                    local.bufferToString(request.swgg.bodyParsed[key]);
                            }
                        });
                        crud.body = Object.keys(request.swgg.bodyMeta)
                            .filter(function (key) {
                                return typeof request.swgg.bodyMeta[key].filename === 'string';
                            })
                            .map(function (key) {
                                tmp = local.jsonCopy(request.swgg.paramDict);
                                local.objectSetOverride(tmp, {
                                    fileBlob: local.bufferToString(
                                        request.swgg.bodyParsed[key],
                                        'base64'
                                    ),
                                    fileContentType: request.swgg.bodyMeta[key].contentType,
                                    fileFilename: request.swgg.bodyMeta[key].filename,
                                    fileInputName: request.swgg.bodyMeta[key].name,
                                    fileSize: request.swgg.bodyParsed[key].length,
                                    fileUrl: local.swgg.swaggerJson.basePath + '/' +
                                        request.swgg.pathObject._tags0 +
                                        '/fileGetOneById/' + tmp.id
                                });
                                return tmp;
                            });
                        local.swgg.dbTableFile.crudSetManyById(crud.body, options.onNext);
                        break;
                    case 'userLoginByPassword':
                    case 'userLogout':
                        // respond with 401 Unauthorized
                        if (!user.isAuthenticated) {
                            local.serverRespondHeadSet(request, response, 401, {});
                            request.swgg.crud.endArgList = [request, response];
                            options.modeNext = Infinity;
                            options.onNext();
                            return;
                        }
                        options.onNext();
                        break;
                    default:
                        options.modeNext = Infinity;
                        options.onNext();
                    }
                    break;
                case 2:
                    switch (crud.operationId.split('.')[0]) {
                    case 'crudSetOneById':
                    case 'crudUpdateOneById':
                        options.onNext(null, data);
                        break;
                    case 'crudGetManyByQuery':
                        options.onNext(null, crud.queryData, {
                            paginationCountTotal: crud.paginationCountTotal
                        });
                        break;
                    case 'fileUploadManyByForm':
                        options.onNext(null, data.map(function (element) {
                            delete element.fileBlob;
                            return element;
                        }));
                        break;
                    case 'userLoginByPassword':
                        options.onNext(null, { jwtEncoded: user.jwtEncoded });
                        break;
                    case 'userLogout':
                        crud.dbTable.crudUpdateOneById({
                            username: user.username,
                            jwtEncoded: null
                        }, options.onNext);
                        break;
                    default:
                        options.onNext(null, data, meta);
                    }
                    break;
                case 3:
                    switch (crud.operationId.split('.')[0]) {
                    case 'fileGetOneById':
                        if (!data) {
                            local.serverRespondDefault(request, response, 404);
                            return;
                        }
                        local.serverRespondHeadSet(request, response, null, {
                            'Content-Type': data.fileContentType
                        });
                        response.end(local.bufferCreate(data.fileBlob, 'base64'));
                        break;
                    case 'userLogout':
                        options.onNext();
                        break;
                    default:
                        options.onNext(null, data, meta);
                    }
                    break;
                case 4:
                    request.swgg.crud.endArgList = [request, response, null, data, meta];
                    options.onNext();
                    break;
                default:
                    nextMiddleware(error);
                }
            });
            options.modeNext = 0;
            options.onNext();
        };

        local.swgg.middlewareCrudEnd = function (request, response, nextMiddleware) {
        /*
         * this function will run the middleware that will end the builtin crud-operations
         */
            // jslint-hack
            local.nop(response);
            if (request.swgg.crud.endArgList) {
                local.swgg.serverRespondJsonapi.apply(null, request.swgg.crud.endArgList);
                return;
            }
            nextMiddleware();
        };

        local.swgg.middlewareError = function (error, request, response) {
        /*
         * this function will run the middleware that will
         * handle errors according to http://jsonapi.org/format/#errors
         */
            if (!error) {
                error = new Error('404 Not Found');
                error.statusCode = 404;
            }
            local.swgg.serverRespondJsonapi(request, response, error);
        };

        local.swgg.middlewareRouter = function (request, response, nextMiddleware) {
        /*
         * this function will run the middleware that will
         * map the request's method-path to swagger's tags[0]-operationId
         */
            var tmp;
            // jslint-hack
            local.nop(response);
            // init swgg object
            local.objectSetDefault(
                request,
                { swgg: { crud: { operationId: '' }, user: {} } },
                2
            );
            // if request.url is not prefixed with swaggerJson.basePath,
            // then default to nextMiddleware
            if (request.urlParsed.pathname.indexOf(local.swgg.swaggerJson.basePath) !== 0) {
                nextMiddleware();
                return;
            }
            // init pathname
            request.swgg.pathname = request.method + ' ' + request.urlParsed.pathname
                .replace(local.swgg.swaggerJson.basePath, '');
            // init pathObject
            while (request.swgg.pathname !== tmp) {
                request.swgg.pathObject =
                    local.swgg.apiDict[request.swgg.pathname] ||
                    // handle /foo/{id}/bar case
                    local.swgg.apiDict[request.swgg.pathname
                        .replace((/\/[^\/]+\/([^\/]*?)$/), '//$1')];
                // if pathObject exists, then break
                if (request.swgg.pathObject) {
                    request.swgg.pathObject = local.jsonCopy(request.swgg.pathObject);
                    request.swgg.pathname = request.swgg.pathObject._keyPath;
                    // init crud.operationId
                    request.swgg.crud.operationId = request.swgg.pathObject._operationId;
                    break;
                }
                tmp = request.swgg.pathname;
                request.swgg.pathname = request.swgg.pathname
                    .replace((/\/[^\/]+?(\/*?)$/), '/$1');
            }
            nextMiddleware();
        };

        local.swgg.middlewareUserLogin = function (request, response, nextMiddleware) {
        /*
         * this function will run the middleware that will handle user login
         */
            var crud, options, user;
            options = {};
            local.onNext(options, function (error, data) {
                switch (options.modeNext) {
                case 1:
                    crud = request.swgg.crud;
                    user = request.swgg.user = {};
                    user.jwtEncoded = request.headers.authorization &&
                        request.headers.authorization.replace('Bearer ', '');
                    local.swgg.dbTableUser = local.db.dbTableCreateOne({
                        name: 'User'
                    });
                    // decode and decrypt jwtEncoded
                    local.swgg.jwtEncodedDecodeAndDecrypt(user);
                    switch (crud.operationId.split('.')[0]) {
                    // coverage-hack - test error handling-behavior
                    case 'crudErrorLogin':
                        options.onNext(local.errorDefault);
                        return;
                    case 'userLoginByPassword':
                        user.password = request.urlParsed.query.password;
                        user.username = request.urlParsed.query.username;
                        if (user.password && user.username) {
                            local.swgg.dbTableUser.crudGetOneById({
                                username: user.username
                            },  options.onNext);
                            return;
                        }
                        break;
                    default:
                        if (user.jwtDecrypted && user.jwtDecrypted.sub) {
                            // init username
                            user.username = user.jwtDecrypted.sub;
                            local.swgg.dbTableUser.crudGetOneById({
                                username: user.jwtDecrypted.sub
                            },  options.onNext);
                            return;
                        }
                    }
                    options.modeNext = Infinity;
                    options.onNext();
                    break;
                case 2:
                    switch (crud.operationId.split('.')[0]) {
                    case 'userLoginByPassword':
                        user.data = data;
                        if (!local.sjclHashScryptValidate(
                                user.password,
                                user.data && user.data.password
                            )) {
                            options.modeNext = Infinity;
                            options.onNext();
                            return;
                        }
                        // init isAuthenticated
                        user.isAuthenticated = true;
                        // https://tools.ietf.org/html/rfc7519
                        // create JSON Web Token (JWT)
                        user.jwtDecrypted = {};
                        user.jwtDecrypted.sub = user.data.username;
                        local.swgg.jwtDecodedEncryptAndEncode(user);
                        // update jwtEncoded in client
                        local.swgg.jwtEncodedSetHeader(request, response);
                        // update jwtEncoded in dbTableUser
                        local.swgg.dbTableUser.crudUpdateOneById({
                            jwtEncoded: user.jwtEncoded,
                            username: user.jwtDecrypted.sub
                        }, options.onNext);
                        return;
                    default:
                        user.data = data || {};
                        local.swgg.jwtEncodedDecodeAndDecrypt(user.data);
                        if (user.data.jwtDecrypted &&
                                user.data.jwtDecrypted.sub === user.jwtDecrypted.sub) {
                            // init isAuthenticated
                            user.isAuthenticated = true;
                            // update jwtEncoded in client
                            if (user.data.jwtEncoded !== user.jwtEncoded) {
                                user.jwtEncoded = user.data.jwtEncoded;
                                local.swgg.jwtEncodedDecodeAndDecrypt(user);
                                local.swgg.jwtEncodedSetHeader(request, response);
                            }
                        }
                    }
                    options.onNext();
                    break;
                default:
                    nextMiddleware(error);
                }
            });
            options.modeNext = 0;
            options.onNext();
        };

        local.swgg.middlewareValidate = function (request, response, nextMiddleware) {
        /*
         * this function will run the middleware that will validate the swagger-request
         */
            var crud, modeNext, onNext, tmp;
            modeNext = 0;
            onNext = function () {
                modeNext += 1;
                switch (modeNext) {
                case 1:
                    // serve swagger.json
                    if (request.method + ' ' + request.urlParsed.pathname ===
                            'GET ' + local.swgg.swaggerJson.basePath + '/swagger.json') {
                        response.end(JSON.stringify(local.swgg.swaggerJson));
                        return;
                    }
                    if (!request.swgg.pathObject) {
                        modeNext = Infinity;
                        onNext();
                        return;
                    }
                    // init paramDict
                    request.swgg.paramDict = {};
                    // parse path param
                    tmp = request.urlParsed.pathname
                        .replace(local.swgg.swaggerJson.basePath, '').split('/');
                    request.swgg.pathObject._path.split('/').forEach(function (key, ii) {
                        if ((/^\{\S*?\}$/).test(key)) {
                            request.swgg.paramDict[key.slice(1, -1)] =
                                decodeURIComponent(tmp[ii]);
                        }
                    });
                    request.swgg.pathObject.parameters.forEach(function (paramDef) {
                        switch (paramDef.in) {
                        // parse body param
                        case 'body':
                            request.swgg.paramDict[paramDef.name] = request.swgg.bodyParsed ||
                                undefined;
                            break;
                        // parse formData param
                        case 'formData':
                            switch (String(request.headers['content-type']).split(';')[0]) {
                            case 'application/x-www-form-urlencoded':
                                request.swgg.paramDict[paramDef.name] =
                                    request.swgg.bodyParsed[paramDef.name];
                                break;
                            }
                            break;
                        // parse header param
                        case 'header':
                            request.swgg.paramDict[paramDef.name] =
                                request.headers[paramDef.name.toLowerCase()];
                            break;
                        // parse query param
                        case 'query':
                            request.swgg.paramDict[paramDef.name] =
                                request.urlParsed.query[paramDef.name];
                            break;
                        }
                        // init default param
                        if (local.isNullOrUndefined(request.swgg.paramDict[paramDef.name]) &&
                                paramDef.default !== undefined) {
                            request.swgg.paramDict[paramDef.name] =
                                local.jsonCopy(paramDef.default);
                        }
                    });
                    // normalize paramDict
                    local.swgg.normalizeParamDictSwagger(
                        request.swgg.paramDict,
                        request.swgg.pathObject
                    );
                    // validate paramDict
                    local.swgg.validateByParamDefList({
                        data: request.swgg.paramDict,
                        key: request.swgg.pathname,
                        paramDefList: request.swgg.pathObject.parameters
                    });
                    onNext();
                    break;
                case 2:
                    // init crud
                    crud = request.swgg.crud;
                    // init crud.dbTable
                    crud.dbTable = request.swgg.pathObject &&
                        request.swgg.pathObject._schemaName &&
                        local.db.dbTableCreateOne({
                            name: request.swgg.pathObject._schemaName
                        });
                    if (!crud.dbTable) {
                        nextMiddleware();
                        return;
                    }
                    // init crud.body
                    if (!request.swgg.isMultipartFormData) {
                        crud.body = local.jsonCopy(request.swgg.bodyParsed);
                    }
                    // init crud.data
                    crud.data = local.jsonCopy(request.swgg.paramDict);
                    request.swgg.pathObject.parameters.forEach(function (param) {
                        // JSON.parse json-string
                        if (param.format === 'json' &&
                                param.type === 'string' &&
                                crud.data[param.name]) {
                            crud.data[param.name] = JSON.parse(crud.data[param.name]);
                        }
                    });
                    // init crud.query*
                    [{
                        key: 'queryFields',
                        value: {}
                    }, {
                        key: 'queryLimit',
                        value: 100
                    }, {
                        key: 'querySkip',
                        value: 0
                    }, {
                        key: 'querySort',
                        value: [{ fieldName: '_timeUpdated', isDescending: true }]
                    }, {
                        key: 'queryWhere',
                        value: {}
                    }].forEach(function (element) {
                        crud[element.key] = crud.data['_' + element.key] || JSON.parse(
                            local.templateRender(
                                request.swgg.pathObject['_' + element.key] || 'null',
                                request.swgg.paramDict
                            )
                        ) || element.value;
                    });
                    // pre-init crud.idField
                    crud.modeQueryByIdInvert = true;
                    local.swgg.idFieldInit(crud);
                    // init crud.data.id
                    switch (crud.operationId.split('.')[0]) {
                    case 'crudSetOneById':
                    case 'crudUpdateOneById':
                        if (!local.isNullOrUndefined(crud.data[crud.idField])) {
                            break;
                        }
                        crud.data[crud.idField] = (crud.body && crud.body[crud.idAlias]);
                        break;
                    }
                    // post-init crud.idField
                    crud.modeQueryByIdInvert = true;
                    local.swgg.idFieldInit(crud);
                    nextMiddleware();
                    break;
                default:
                    nextMiddleware();
                }
            };
            onNext();
        };

        local.swgg.normalizeParamDictSwagger = function (data, pathObject) {
        /*
         * this function will parse the data according to pathObject.parameters
         */
            var tmp;
            pathObject.parameters.forEach(function (paramDef) {
                tmp = data[paramDef.name];
                // init default value
                if (local.isNullOrUndefined(tmp) && paramDef.default !== undefined) {
                    tmp = local.jsonCopy(paramDef.default);
                }
                // JSON.parse paramDict
                if (!(paramDef.type === 'file' || paramDef.type === 'string') &&
                        (typeof tmp === 'string' || tmp instanceof local.global.Uint8Array)) {
                    // try to JSON.parse the string
                    local.tryCatchOnError(function () {
                        tmp = JSON.parse(local.bufferToString(tmp));
                    }, local.nop);
                }
                data[paramDef.name] = tmp;
            });
            return data;
        };

        local.swgg.onErrorJsonapi = function (onError) {
        /*
         * http://jsonapi.org/format/#errors
         * http://jsonapi.org/format/#document-structure-resource-objects
         * this function will normalize the error and data to jsonapi format,
         * and pass them to onError
         */
            return function (error, data, meta) {
                data = [error, data].map(function (data, ii) {
                    // if no error occurred, then return
                    if ((ii === 0 && !data) ||
                            // if data is already normalized, then return it
                            (data && data.meta && data.meta.isJsonapiResponse)) {
                        return data;
                    }
                    // normalize data-list
                    if (!Array.isArray(data)) {
                        data = [data];
                    }
                    // normalize error-list to contain non-null objects
                    if (ii === 0) {
                        // normalize error-list to be non-empty
                        if (!data.length) {
                            data.push(null);
                        }
                        data = data.map(function (element) {
                            if (!(element && typeof element === 'object')) {
                                element = { message: String(element) };
                            }
                            // normalize error-object to plain json-object
                            error = local.jsonCopy(element);
                            error.message = element.message;
                            error.stack = element.stack;
                            error.statusCode = Number(error.statusCode) || 500;
                            return error;
                        });
                        error = local.jsonCopy(data[0]);
                        error.errors = data;
                        return error;
                    }
                    return { data: data };
                });
                // init data.meta
                data.forEach(function (data, ii) {
                    if (!data) {
                        return;
                    }
                    data.meta = local.jsonCopy(meta || {});
                    data.meta.isJsonapiResponse = true;
                    if (ii === 0) {
                        data.meta.errorsLength = (data.errors && data.errors.length) | 0;
                    } else {
                        data.meta.dataLength = (data.data && data.data.length) | 0;
                    }
                    data.meta.statusCode = Number(data.meta.statusCode) ||
                        Number(data.statusCode) ||
                        0;
                });
                onError(data[0], data[1]);
            };
        };

        local.swgg.schemaNormalizeAndCopy = function (schema) {
        /*
         * this function will return a normalized copy the schema
         */
            var tmp;
            // dereference $ref
            if (schema.$ref) {
                [
                    local.swgg.swaggerJson,
                    local.swgg.swaggerSchemaJson
                ].some(function (options) {
                    local.tryCatchOnError(function () {
                        schema.$ref.replace(
                            (/#\/(.*?)\/(.*?)$/),
                            function (match0, match1, match2) {
                                // jslint-hack - nop
                                local.nop(match0);
                                tmp = options[match1][match2];
                            }
                        );
                    }, local.nop);
                    return tmp;
                });
                // validate schema
                local.assert(tmp, schema.$ref);
                // recurse
                tmp = local.swgg.schemaNormalizeAndCopy(tmp);
                schema = tmp;
            }
            // inherit allOf
            if (schema.allOf) {
                tmp = local.jsonCopy(schema);
                delete tmp.allOf;
                schema.allOf.reverse().forEach(function (element) {
                    // recurse
                    local.objectSetDefault(tmp, local.swgg.schemaNormalizeAndCopy(element), 2);
                });
                schema = tmp;
            }
            return local.jsonCopy(schema);
        };

        local.swgg.serverRespondJsonapi = function (request, response, error, data, meta) {
        /*
         * http://jsonapi.org/format/#errors
         * http://jsonapi.org/format/#document-structure-resource-objects
         * this function will respond in jsonapi format
         */
            local.swgg.onErrorJsonapi(function (error, data) {
                local.serverRespondHeadSet(request, response, error && error.statusCode, {
                    'Content-Type': 'application/json; charset=UTF-8'
                });
                if (error) {
                    // debug statusCode / method / url
                    local.errorMessagePrepend(error, response.statusCode + ' ' +
                        request.method + ' ' + request.url + '\n');
                    // print error.stack to stderr
                    local.onErrorDefault(error);
                }
                data = error || data;
                data.meta.statusCode = response.statusCode =
                    data.meta.statusCode || response.statusCode;
                response.end(JSON.stringify(data));
            })(error, data, meta);
        };

        local.swgg.urlBaseGet = function () {
        /*
         * this function will return the base swagger url
         */
            return (local.swgg.swaggerJson.schemes ||
                local.urlParse('').protocol.slice(0, -1)) + '://' +
                (local.swgg.swaggerJson.host || local.urlParse('').host) +
                local.swgg.swaggerJson.basePath;
        };

        local.swgg.userLoginByPassword = function (options, onError) {
        /*
         * this function will send a login-by-password request
         */
            local.swgg.apiDict["GET /user/userLoginByPassword"]._ajax({ paramDict: {
                password: options.password,
                username: options.username
            } }, onError);
        };

        local.swgg.userLogout = function (options, onError) {
        /*
         * this function will send a logout request
         */
            local.swgg.apiDict["GET /user/userLogout"]._ajax(options, onError);
        };

        local.swgg.validateByParamDefList = function (options) {
        /*
         * this function will validate options.data against options.paramDefList
         */
            var data, key;
            local.tryCatchOnError(function () {
                data = options.data;
                // validate data
                local.assert(data && typeof data === 'object', data);
                (options.paramDefList || []).forEach(function (paramDef) {
                    key = paramDef.name;
                    // recurse - validateByPropDef
                    local.swgg.validateByPropDef({
                        circularList: options.circularList,
                        data: data[key],
                        dataReadonlyRemove: (options.dataReadonlyRemove || {})[key],
                        key: key,
                        schema: paramDef,
                        required: paramDef.required,
                        'x-swgg-notRequired': paramDef['x-swgg-notRequired']
                    });
                });
            }, function (error) {
                error.statusCode = error.statusCode || 400;
                local.errorMessagePrepend(error, options.key + '.' + key + ' -> ');
                throw error;
            });
        };

        local.swgg.validateByPropDef = function (options) {
        /*
         * this function will validate options.data against options.schema
         */
            var data, prefix, propDef, tmp;
            local.tryCatchOnError(function () {
                data = options.data;
                prefix = 'property ' + options.key;
                propDef = options.schema;
                // validate undefined data
                if (local.isNullOrUndefined(data)) {
                    if (options.required && !options['x-swgg-notRequired']) {
                        tmp = new Error(prefix + ' cannot be null or undefined');
                        tmp.options = options;
                        throw tmp;
                    }
                    return;
                }
                // handle $ref
                tmp = propDef.$ref || (propDef.schema && propDef.schema.$ref);
                if (tmp) {
                    // recurse - validateBySchema
                    local.swgg.validateBySchema({
                        circularList: options.circularList,
                        data: data,
                        dataReadonlyRemove: options.dataReadonlyRemove,
                        key: tmp,
                        schema: local.swgg.schemaNormalizeAndCopy({ $ref: tmp }),
                        'x-swgg-notRequired': options['x-swgg-notRequired']
                    });
                    return;
                }
                // handle anyOf
                if (propDef.anyOf) {
                    tmp = propDef.anyOf.some(function (element) {
                        local.tryCatchOnError(function () {
                            // recurse - validateBySchema
                            local.swgg.validateBySchema({
                                circularList: options.circularList,
                                data: data,
                                key: 'anyOf',
                                schema: local.swgg.schemaNormalizeAndCopy(element),
                                'x-swgg-notRequired': options['x-swgg-notRequired']
                            });
                        }, local.nop);
                        return !local.utility2._debugTryCatchErrorCaught;
                    });
                    local.assert(tmp, local.utility2._debugTryCatchErrorCaught);
                    return;
                }
                // normalize propDef
                propDef = local.swgg.schemaNormalizeAndCopy(options.schema);
                // init circularList
                if (data && typeof data === 'object') {
                    options.circularList = options.circularList || [];
                    if (options.circularList.indexOf(data) >= 0) {
                        return;
                    }
                    options.circularList.push(data);
                }
                // validate propDef embedded in propDef.schema.type
                if (!propDef.type && propDef.schema && propDef.schema.type) {
                    propDef = propDef.schema;
                }
                // http://json-schema.org/latest/json-schema-validation.html#anchor13
                // 5.1.  Validation keywords for numeric instances (number and integer)
                if (typeof data === 'number') {
                    if (typeof propDef.multipleOf === 'number') {
                        local.assert(
                            data % propDef.multipleOf === 0,
                            prefix + ' must be a multiple of ' + propDef.multipleOf
                        );
                    }
                    if (typeof propDef.maximum === 'number') {
                        local.assert(
                            propDef.exclusiveMaximum
                                ? data < propDef.maximum
                                : data <= propDef.maximum,
                            prefix + ' must be ' + (propDef.exclusiveMaximum
                                ? '< '
                                : '<= ') + propDef.maximum
                        );
                    }
                    if (typeof propDef.minimum === 'number') {
                        local.assert(
                            propDef.exclusiveMinimum
                                ? data > propDef.minimum
                                : data >= propDef.minimum,
                            prefix + ' must be ' + (propDef.exclusiveMinimum
                                ? '> '
                                : '>= ') + propDef.minimum
                        );
                    }
                // http://json-schema.org/latest/json-schema-validation.html#anchor25
                // 5.2.  Validation keywords for strings
                } else if (typeof data === 'string') {
                    if (propDef.maxLength) {
                        local.assert(
                            data.length <= propDef.maxLength,
                            prefix + ' must have <= ' + propDef.maxLength + ' characters'
                        );
                    }
                    if (propDef.minLength) {
                        local.assert(
                            data.length >= propDef.minLength,
                            prefix + ' must have >= ' + propDef.minLength + ' characters'
                        );
                    }
                    if (propDef.pattern) {
                        local.assert(
                            new RegExp(propDef.pattern).test(data),
                            prefix + ' must match regex pattern /' + propDef.pattern + '/'
                        );
                    }
                // http://json-schema.org/latest/json-schema-validation.html#anchor36
                // 5.3.  Validation keywords for arrays
                } else if (Array.isArray(data)) {
                    if (propDef.maxItems) {
                        local.assert(
                            data.length <= propDef.maxItems,
                            prefix + ' must have <= ' + propDef.maxItems + ' items'
                        );
                    }
                    if (propDef.minItems) {
                        local.assert(
                            data.length >= propDef.minItems,
                            prefix + ' must have >= ' + propDef.minItems + ' items'
                        );
                    }
                    if (propDef.uniqueItems) {
                        tmp = {};
                        data.forEach(function (element) {
                            element = JSON.stringify(element);
                            local.assert(
                                !tmp[element],
                                prefix + ' must have only unique items'
                            );
                            tmp[element] = true;
                        });
                    }
                // http://json-schema.org/latest/json-schema-validation.html#anchor53
                // 5.4.  Validation keywords for objects
                } else if (typeof data === 'object') {
                    if (propDef.maxProperties) {
                        local.assert(
                            Object.keys(data).length <= propDef.maxProperties,
                            prefix + ' must have <= ' + propDef.maxProperties + ' items'
                        );
                    }
                    if (propDef.minProperties) {
                        local.assert(
                            Object.keys(data).length >= propDef.minProperties,
                            prefix + ' must have >= ' + propDef.minProperties + ' items'
                        );
                    }
                }
                // http://json-schema.org/latest/json-schema-validation.html#anchor75
                // 5.5.  Validation keywords for any instance type
                if (propDef.enum) {
                    (Array.isArray(data)
                        ? data
                        : [data]).forEach(function (element) {
                        local.assert(
                            propDef.enum.indexOf(element) >= 0,
                            prefix + ' must only have items in the list ' +
                                JSON.stringify(propDef.enum)
                        );
                    });
                }
                // https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md
                // #data-types
                // validate schema.type
                switch (propDef.type) {
                case 'array':
                    local.assert(Array.isArray(data) && propDef.items);
                    data.forEach(function (element, ii) {
                        // recurse - validateByPropDef
                        local.swgg.validateByPropDef({
                            circularList: options.circularList,
                            data: element,
                            dataReadonlyRemove: (options.dataReadonlyRemove || {})[ii],
                            key: ii,
                            schema: propDef.items,
                            'x-swgg-notRequired': options['x-swgg-notRequired']
                        });
                    });
                    break;
                case 'boolean':
                    local.assert(typeof data === 'boolean');
                    break;
                case 'file':
                    break;
                case 'integer':
                    local.assert(typeof data === 'number' &&
                        isFinite(data) &&
                        Math.floor(data) === data);
                    switch (propDef.format) {
                    case 'int32':
                    case 'int64':
                        break;
                    }
                    break;
                case 'number':
                    local.assert(typeof data === 'number' && isFinite(data));
                    switch (propDef.format) {
                    case 'double':
                    case 'float':
                        break;
                    }
                    break;
                case 'object':
                    local.assert(typeof data === 'object');
                    break;
                case 'string':
                    local.assert(typeof data === 'string' || propDef.format === 'binary');
                    switch (propDef.format) {
                    // https://github.com/swagger-api/swagger-spec/issues/50
                    // Clarify 'byte' format #50
                    case 'byte':
                        local.assert(!(/[^\n\r\+\/0-9\=A-Za-z]/).test(data));
                        break;
                    case 'date':
                    case 'date-time':
                        local.assert(isFinite(new Date(data).getTime()));
                        break;
                    case 'email':
                        local.assert(local.regexpEmailValidate.test(data));
                        break;
                    case 'json':
                        JSON.parse(data);
                        break;
                    }
                    break;
                default:
                    local.assert(
                        propDef.type === undefined,
                        prefix + ' has invalid type ' + propDef.type
                    );
                }
            }, function (error) {
                error.message = error.message || prefix + ' is not a valid ' + propDef.type +
                    (propDef.format
                    ? ' (' + propDef.format + ')'
                    : '');
                error.options = options;
                throw error;
            });
        };

        local.swgg.validateBySchema = function (options) {
        /*
         * this function will validate options.data against options.schema
         */
            var data, key, prefix, propDefDict, schema, tmp, validateByPropDef;
            // recurse - validateByPropDef
            local.swgg.validateByPropDef(options);
            local.tryCatchOnError(function () {
                data = options.data;
                prefix = 'schema ' + options.key;
                schema = options.schema;
                // validate schema
                local.assert(
                    schema && typeof schema === 'object',
                    prefix + ' must be an object (not ' + typeof schema + ')'
                );
                // init propDefDict
                propDefDict = schema.properties || {};
                // validate data
                local.assert(
                    (data && typeof data === 'object') || !Object.keys(propDefDict).length,
                    'data for ' + prefix + ' must be an object (not ' + typeof data + ')'
                );
                if (typeof data !== 'object') {
                    return;
                }
                validateByPropDef = function (propDef) {
                    // remove options.dataReadonlyRemove[key]
                    if (propDef.readOnly &&
                            (options.dataReadonlyRemove || {}).hasOwnProperty(key)) {
                        delete options.dataReadonlyRemove[key];
                    }
                    // recurse - validateByPropDef
                    local.swgg.validateByPropDef({
                        circularList: options.circularList,
                        data: data[key],
                        dataReadonlyRemove: (options.dataReadonlyRemove || {})[key],
                        key: key,
                        schema: propDef,
                        required: schema.required && schema.required.indexOf(key) >= 0,
                        'x-swgg-notRequired': options['x-swgg-notRequired']
                    });
                };
                Object.keys(propDefDict).forEach(function (_) {
                    key = _;
                    validateByPropDef(propDefDict[key]);
                });
                Object.keys(data).forEach(function (_) {
                    key = _;
                    if (propDefDict[key]) {
                        return;
                    }
                    tmp = Object.keys(schema.patternProperties || {}).some(function (_) {
                        if (new RegExp(_).test(key)) {
                            validateByPropDef(schema.patternProperties[_]);
                            return true;
                        }
                    });
                    if (tmp) {
                        return;
                    }
                    // https://tools.ietf.org/html/draft-fge-json-schema-validation-00
                    // #section-5.4.4
                    // validate additionalProperties
                    local.assert(
                        schema.additionalProperties !== false,
                        prefix + ' must not have additionalProperties - ' + key
                    );
                    if (schema.additionalProperties) {
                        validateByPropDef(schema.additionalProperties);
                    }
                });
            }, function (error) {
                local.errorMessagePrepend(error, options.key + '.' + key + ' -> ');
                throw error;
            });
        };

        local.swgg.validateBySwagger = function (options) {
        /*
         * this function will validate the entire swagger json object
         */
            var key, schema, tmp, validateDefault;
            local.swgg.validateBySchema({
                data: options,
                key: 'swaggerJson',
                schema: local.swgg.swaggerSchemaJson
            });
            // validate default
            validateDefault = function () {
                if (schema.default !== undefined) {
                    return;
                }
                local.swgg.validateByPropDef({
                    data: schema.default,
                    key: key + '.default',
                    schema: schema
                });
            };
            Object.keys(options.definitions).forEach(function (schemaName) {
                schema = options.definitions[schemaName];
                key = schemaName;
                validateDefault();
                Object.keys(options.definitions[schemaName].properties || {
                }).forEach(function (propName) {
                    schema = options.definitions[schemaName].properties[propName];
                    key = schemaName + '.' + propName;
                    validateDefault();
                });
            });
            Object.keys(options.paths).forEach(function (pathName) {
                Object.keys(options.paths[pathName]).forEach(function (methodName) {
                    tmp = options.paths[pathName][methodName];
                    Object.keys(tmp.parameters).forEach(function (paramName) {
                        schema = tmp.parameters[paramName];
                        key = tmp.tags[0] + '.' + tmp.operationId + '.' + paramName;
                        validateDefault();
                    });
                });
            });
        };

        local.utility2._middlewareJsonpStateInit = function (
            request,
            response,
            nextMiddleware
        ) {
        /*
         * this function will run the middleware that will
         * serve the browser-state wrapped in the given jsonp-callback
         */
            var state;
            if (request._configInit || request._stateInit || (request.urlParsed &&
                    request.urlParsed.pathname === '/jsonp.utility2._stateInit')) {
                state = { utility2: { assetsDict: {
                    '/assets.swgg.lib.json-schema.schema.json':
                        local.assetsDict['/assets.swgg.lib.json-schema.schema.json'],
                    '/assets.swgg.lib.swagger.petstore.json':
                        local.assetsDict['/assets.swgg.lib.swagger.petstore.json'],
                    '/assets.swgg.lib.swagger.schema.json':
                        local.assetsDict['/assets.swgg.lib.swagger.schema.json']
                } } };
                if (request._configInit) {
                    return state;
                }
                local.objectSetDefault(state, { utility2: { env: {
                    NODE_ENV: local.env.NODE_ENV,
                    npm_config_mode_backend: local.env.npm_config_mode_backend,
                    npm_package_description: local.env.npm_package_description,
                    npm_package_homepage: local.env.npm_package_homepage,
                    npm_package_name: local.env.npm_package_name,
                    npm_package_nameAlias: local.env.npm_package_nameAlias,
                    npm_package_version: local.env.npm_package_version
                } } }, 3);
                if (request._stateInit) {
                    return state;
                }
                response.end(request.urlParsed.query.callback + '(' + JSON.stringify(state) +
                    ');');
                return;
            }
            nextMiddleware();
        };

        local.utility2._stateInit = function (options) {
        /*
         * this function will init the state-options
         */
            local.objectSetOverride(local, options, 10);
            // init swaggerSchemaJson
            local.swgg.swaggerSchemaJson = local.objectSetOverride(
                JSON.parse(local.assetsDict['/assets.swgg.lib.json-schema.schema.json']),
                JSON.parse(local.assetsDict['/assets.swgg.lib.swagger.schema.json']),
                2
            );
            // init api
            local.swgg.apiDictUpdate(local.swgg.swaggerJson);
        };
    }());
    switch (local.modeJs) {



    // run browser js-env code - post-init
    case 'browser':
        // init exports
        local.global.swgg = local.swgg;
        break;



    // run node js-env code - post-init
    case 'node':
        // init exports
        module.exports = module['swagger-lite'] = local.swgg;
        module.exports.__dirname = __dirname;
        // require modules
        local.fs = require('fs');
        local.path = require('path');
        local.url = require('url');
        /* istanbul ignore next */
        if (local.global.utility2_rollup) {
            break;
        }
        // init assets
        [
            // https://json-schema.org/draft-04/schema
            'lib.json-schema.schema.json',
            // https://petstore.swagger.io/v2/swagger.json
            'lib.swagger.petstore.json',
            'lib.swagger-ui.js',
            // https://swagger.io/v2/schema.json
            'lib.swagger.schema.json',
            'lib.swgg.css',
            'lib.swgg.js'
        ].forEach(function (key) {
            switch (key) {
            case 'lib.swgg.css':
                local.assetsWrite(
                    '/assets.swgg.css',
                    local.tryCatchReadFile(__dirname + '/' + key, 'utf8')
                );
                break;
            case 'lib.swgg.js':
                local.assetsWrite(
                    '/assets.swgg.js',
                    local.istanbulInstrumentInPackage(
                        local.tryCatchReadFile(__dirname + '/' + key, 'utf8'),
                        __dirname + '/' + key
                    )
                );
                break;
            case 'lib.json-schema.schema.json':
            case 'lib.swagger.petstore.json':
            case 'lib.swagger.schema.json':
                local.assetsDict['/assets.swgg.' + key] =
                    local.fs.readFileSync(__dirname + '/' + key, 'utf8');
                break;
            case 'lib.swagger-ui.js':
                local.assetsWrite(
                    '/assets.swgg.' + key,
                    local.istanbulInstrumentInPackage(
                        local.fs.readFileSync(__dirname + '/' + key, 'utf8'),
                        __dirname + '/' + key
                    )
                );
                break;
            }
        });
        local.assetsWrite('/assets.swgg.rollup.js', [
            '/assets.utility2.rollup.js',
            '/assets.utility2.rollup.begin.js',
            '/assets.swgg.css',
            '/assets.swgg.js',
            '/assets.swgg.lib.swagger-ui.js',
            'local._stateInit',
            '/assets.utility2.rollup.end.js'
        ].map(function (key) {
            switch (local.path.extname(key)) {
            case '.js':
                return '// ' + key + '\n' + local.assetsDict[key];
            case '._stateInit':
                return '// ' + key + '\n' +
                    local.assetsDict['/assets.utility2.rollup.content.js']
                    .replace(
                        '/* utility2.rollup.js content */',
                        key + '(' + JSON.stringify(
                            local.utility2._middlewareJsonpStateInit({ _configInit: true })
                        ) + ');'
                    );
            default:
                return '// ' + key + '\n' +
                    local.assetsDict['/assets.utility2.rollup.content.js']
                    .replace(
                        '/* utility2.rollup.js content */',
                        'local.assetsDict[' + JSON.stringify(key) + '] = ' +
                            JSON.stringify(local.assetsDict[key])
                    );
            }
        }).join('\n\n\n\n'));
        require('./lib.swagger-ui.js');
        break;
    }



    // run shared js-env code - post-init
    (function () {
        // init state
        local.utility2._stateInit({});
    }());
}());
