/*! @name videojs-seek-chapter @version 0.2.0 @license MIT */
(function (QUnit, sinon, videojs) {
	'use strict';

	QUnit = QUnit && QUnit.hasOwnProperty('default') ? QUnit['default'] : QUnit;
	sinon = sinon && sinon.hasOwnProperty('default') ? sinon['default'] : sinon;
	videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var minDoc = {};

	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
	    typeof window !== 'undefined' ? window : {};


	var doccy;

	if (typeof document !== 'undefined') {
	    doccy = document;
	} else {
	    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }
	}

	var document_1 = doccy;

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var version = "0.2.0";

	var cov_3yp8cete3 = function () {
	  var path = '/Users/cosmin.seviciu/Documents/videojs-seek-chapter/src/plugin.js',
	      hash = 'd1c9c5ce47e48eaff4f89e2d85d8a248b040dd52',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/cosmin.seviciu/Documents/videojs-seek-chapter/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 4,
	          column: 15
	        },
	        end: {
	          line: 4,
	          column: 42
	        }
	      },
	      '1': {
	        start: {
	          line: 7,
	          column: 17
	        },
	        end: {
	          line: 10,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 13,
	          column: 23
	        },
	        end: {
	          line: 13,
	          column: 63
	        }
	      },
	      '3': {
	        start: {
	          line: 37,
	          column: 4
	        },
	        end: {
	          line: 37,
	          column: 18
	        }
	      },
	      '4': {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 23
	        }
	      },
	      '5': {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 39,
	          column: 21
	        }
	      },
	      '6': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 40,
	          column: 74
	        }
	      },
	      '7': {
	        start: {
	          line: 41,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 59
	        }
	      },
	      '8': {
	        start: {
	          line: 43,
	          column: 4
	        },
	        end: {
	          line: 46,
	          column: 7
	        }
	      },
	      '9': {
	        start: {
	          line: 44,
	          column: 6
	        },
	        end: {
	          line: 44,
	          column: 47
	        }
	      },
	      '10': {
	        start: {
	          line: 45,
	          column: 6
	        },
	        end: {
	          line: 45,
	          column: 28
	        }
	      },
	      '11': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 85,
	          column: 7
	        }
	      },
	      '12': {
	        start: {
	          line: 49,
	          column: 6
	        },
	        end: {
	          line: 49,
	          column: 59
	        }
	      },
	      '13': {
	        start: {
	          line: 50,
	          column: 6
	        },
	        end: {
	          line: 50,
	          column: 73
	        }
	      },
	      '14': {
	        start: {
	          line: 51,
	          column: 6
	        },
	        end: {
	          line: 51,
	          column: 61
	        }
	      },
	      '15': {
	        start: {
	          line: 52,
	          column: 6
	        },
	        end: {
	          line: 52,
	          column: 67
	        }
	      },
	      '16': {
	        start: {
	          line: 54,
	          column: 6
	        },
	        end: {
	          line: 56,
	          column: 7
	        }
	      },
	      '17': {
	        start: {
	          line: 55,
	          column: 8
	        },
	        end: {
	          line: 55,
	          column: 15
	        }
	      },
	      '18': {
	        start: {
	          line: 58,
	          column: 6
	        },
	        end: {
	          line: 58,
	          column: 63
	        }
	      },
	      '19': {
	        start: {
	          line: 59,
	          column: 6
	        },
	        end: {
	          line: 59,
	          column: 45
	        }
	      },
	      '20': {
	        start: {
	          line: 61,
	          column: 21
	        },
	        end: {
	          line: 61,
	          column: 40
	        }
	      },
	      '21': {
	        start: {
	          line: 64,
	          column: 6
	        },
	        end: {
	          line: 68,
	          column: 7
	        }
	      },
	      '22': {
	        start: {
	          line: 65,
	          column: 8
	        },
	        end: {
	          line: 67,
	          column: 9
	        }
	      },
	      '23': {
	        start: {
	          line: 66,
	          column: 10
	        },
	        end: {
	          line: 66,
	          column: 35
	        }
	      },
	      '24': {
	        start: {
	          line: 69,
	          column: 6
	        },
	        end: {
	          line: 83,
	          column: 7
	        }
	      },
	      '25': {
	        start: {
	          line: 70,
	          column: 8
	        },
	        end: {
	          line: 70,
	          column: 45
	        }
	      },
	      '26': {
	        start: {
	          line: 72,
	          column: 26
	        },
	        end: {
	          line: 81,
	          column: 10
	        }
	      },
	      '27': {
	        start: {
	          line: 73,
	          column: 27
	        },
	        end: {
	          line: 80,
	          column: 17
	        }
	      },
	      '28': {
	        start: {
	          line: 74,
	          column: 12
	        },
	        end: {
	          line: 79,
	          column: 13
	        }
	      },
	      '29': {
	        start: {
	          line: 75,
	          column: 14
	        },
	        end: {
	          line: 75,
	          column: 49
	        }
	      },
	      '30': {
	        start: {
	          line: 77,
	          column: 14
	        },
	        end: {
	          line: 77,
	          column: 38
	        }
	      },
	      '31': {
	        start: {
	          line: 78,
	          column: 14
	        },
	        end: {
	          line: 78,
	          column: 24
	        }
	      },
	      '32': {
	        start: {
	          line: 82,
	          column: 8
	        },
	        end: {
	          line: 82,
	          column: 61
	        }
	      },
	      '33': {
	        start: {
	          line: 82,
	          column: 29
	        },
	        end: {
	          line: 82,
	          column: 59
	        }
	      },
	      '34': {
	        start: {
	          line: 89,
	          column: 4
	        },
	        end: {
	          line: 102,
	          column: 7
	        }
	      },
	      '35': {
	        start: {
	          line: 90,
	          column: 22
	        },
	        end: {
	          line: 90,
	          column: 51
	        }
	      },
	      '36': {
	        start: {
	          line: 91,
	          column: 28
	        },
	        end: {
	          line: 91,
	          column: 72
	        }
	      },
	      '37': {
	        start: {
	          line: 92,
	          column: 26
	        },
	        end: {
	          line: 92,
	          column: 62
	        }
	      },
	      '38': {
	        start: {
	          line: 94,
	          column: 6
	        },
	        end: {
	          line: 94,
	          column: 40
	        }
	      },
	      '39': {
	        start: {
	          line: 95,
	          column: 6
	        },
	        end: {
	          line: 95,
	          column: 54
	        }
	      },
	      '40': {
	        start: {
	          line: 96,
	          column: 6
	        },
	        end: {
	          line: 96,
	          column: 50
	        }
	      },
	      '41': {
	        start: {
	          line: 97,
	          column: 6
	        },
	        end: {
	          line: 97,
	          column: 48
	        }
	      },
	      '42': {
	        start: {
	          line: 98,
	          column: 6
	        },
	        end: {
	          line: 98,
	          column: 47
	        }
	      },
	      '43': {
	        start: {
	          line: 99,
	          column: 6
	        },
	        end: {
	          line: 99,
	          column: 141
	        }
	      },
	      '44': {
	        start: {
	          line: 100,
	          column: 6
	        },
	        end: {
	          line: 100,
	          column: 34
	        }
	      },
	      '45': {
	        start: {
	          line: 101,
	          column: 6
	        },
	        end: {
	          line: 101,
	          column: 44
	        }
	      },
	      '46': {
	        start: {
	          line: 104,
	          column: 4
	        },
	        end: {
	          line: 104,
	          column: 25
	        }
	      },
	      '47': {
	        start: {
	          line: 108,
	          column: 22
	        },
	        end: {
	          line: 108,
	          column: 39
	        }
	      },
	      '48': {
	        start: {
	          line: 109,
	          column: 21
	        },
	        end: {
	          line: 135,
	          column: 6
	        }
	      },
	      '49': {
	        start: {
	          line: 110,
	          column: 6
	        },
	        end: {
	          line: 134,
	          column: 7
	        }
	      },
	      '50': {
	        start: {
	          line: 111,
	          column: 8
	        },
	        end: {
	          line: 133,
	          column: 9
	        }
	      },
	      '51': {
	        start: {
	          line: 113,
	          column: 10
	        },
	        end: {
	          line: 124,
	          column: 13
	        }
	      },
	      '52': {
	        start: {
	          line: 114,
	          column: 26
	        },
	        end: {
	          line: 114,
	          column: 57
	        }
	      },
	      '53': {
	        start: {
	          line: 115,
	          column: 26
	        },
	        end: {
	          line: 115,
	          column: 72
	        }
	      },
	      '54': {
	        start: {
	          line: 116,
	          column: 28
	        },
	        end: {
	          line: 119,
	          column: 39
	        }
	      },
	      '55': {
	        start: {
	          line: 121,
	          column: 12
	        },
	        end: {
	          line: 123,
	          column: 13
	        }
	      },
	      '56': {
	        start: {
	          line: 122,
	          column: 14
	        },
	        end: {
	          line: 122,
	          column: 93
	        }
	      },
	      '57': {
	        start: {
	          line: 137,
	          column: 4
	        },
	        end: {
	          line: 137,
	          column: 53
	        }
	      },
	      '58': {
	        start: {
	          line: 140,
	          column: 14
	        },
	        end: {
	          line: 140,
	          column: 28
	        }
	      },
	      '59': {
	        start: {
	          line: 141,
	          column: 12
	        },
	        end: {
	          line: 141,
	          column: 13
	        }
	      },
	      '60': {
	        start: {
	          line: 141,
	          column: 23
	        },
	        end: {
	          line: 141,
	          column: 24
	        }
	      },
	      '61': {
	        start: {
	          line: 143,
	          column: 4
	        },
	        end: {
	          line: 146,
	          column: 5
	        }
	      },
	      '62': {
	        start: {
	          line: 144,
	          column: 6
	        },
	        end: {
	          line: 144,
	          column: 37
	        }
	      },
	      '63': {
	        start: {
	          line: 145,
	          column: 6
	        },
	        end: {
	          line: 145,
	          column: 14
	        }
	      },
	      '64': {
	        start: {
	          line: 147,
	          column: 4
	        },
	        end: {
	          line: 147,
	          column: 13
	        }
	      },
	      '65': {
	        start: {
	          line: 152,
	          column: 0
	        },
	        end: {
	          line: 152,
	          column: 30
	        }
	      },
	      '66': {
	        start: {
	          line: 155,
	          column: 0
	        },
	        end: {
	          line: 155,
	          column: 30
	        }
	      },
	      '67': {
	        start: {
	          line: 158,
	          column: 0
	        },
	        end: {
	          line: 158,
	          column: 43
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 35,
	            column: 2
	          },
	          end: {
	            line: 35,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 35,
	            column: 31
	          },
	          end: {
	            line: 86,
	            column: 3
	          }
	        },
	        line: 35
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 43,
	            column: 22
	          },
	          end: {
	            line: 43,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 43,
	            column: 28
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        },
	        line: 43
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 48,
	            column: 37
	          },
	          end: {
	            line: 48,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 48,
	            column: 43
	          },
	          end: {
	            line: 85,
	            column: 5
	          }
	        },
	        line: 48
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 72,
	            column: 38
	          },
	          end: {
	            line: 72,
	            column: 39
	          }
	        },
	        loc: {
	          start: {
	            line: 72,
	            column: 52
	          },
	          end: {
	            line: 81,
	            column: 9
	          }
	        },
	        line: 72
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 73,
	            column: 39
	          },
	          end: {
	            line: 73,
	            column: 40
	          }
	        },
	        loc: {
	          start: {
	            line: 73,
	            column: 45
	          },
	          end: {
	            line: 80,
	            column: 11
	          }
	        },
	        line: 73
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 82,
	            column: 23
	          },
	          end: {
	            line: 82,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 82,
	            column: 29
	          },
	          end: {
	            line: 82,
	            column: 59
	          }
	        },
	        line: 82
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 88,
	            column: 2
	          },
	          end: {
	            line: 88,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 88,
	            column: 28
	          },
	          end: {
	            line: 105,
	            column: 3
	          }
	        },
	        line: 88
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 89,
	            column: 22
	          },
	          end: {
	            line: 89,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 89,
	            column: 32
	          },
	          end: {
	            line: 102,
	            column: 5
	          }
	        },
	        line: 89
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 107,
	            column: 2
	          },
	          end: {
	            line: 107,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 107,
	            column: 18
	          },
	          end: {
	            line: 138,
	            column: 3
	          }
	        },
	        line: 107
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 109,
	            column: 42
	          },
	          end: {
	            line: 109,
	            column: 43
	          }
	        },
	        loc: {
	          start: {
	            line: 109,
	            column: 61
	          },
	          end: {
	            line: 135,
	            column: 5
	          }
	        },
	        line: 109
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 113,
	            column: 32
	          },
	          end: {
	            line: 113,
	            column: 33
	          }
	        },
	        loc: {
	          start: {
	            line: 113,
	            column: 43
	          },
	          end: {
	            line: 124,
	            column: 11
	          }
	        },
	        line: 113
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 139,
	            column: 2
	          },
	          end: {
	            line: 139,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 139,
	            column: 24
	          },
	          end: {
	            line: 148,
	            column: 3
	          }
	        },
	        line: 139
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 13,
	            column: 23
	          },
	          end: {
	            line: 13,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 13,
	            column: 23
	          },
	          end: {
	            line: 13,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 13,
	            column: 49
	          },
	          end: {
	            line: 13,
	            column: 63
	          }
	        }],
	        line: 13
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 54,
	            column: 6
	          },
	          end: {
	            line: 56,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 54,
	            column: 6
	          },
	          end: {
	            line: 56,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 54,
	            column: 6
	          },
	          end: {
	            line: 56,
	            column: 7
	          }
	        }],
	        line: 54
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 65,
	            column: 8
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 65,
	            column: 8
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 65,
	            column: 8
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        }],
	        line: 65
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 69,
	            column: 6
	          },
	          end: {
	            line: 83,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 69,
	            column: 6
	          },
	          end: {
	            line: 83,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 69,
	            column: 6
	          },
	          end: {
	            line: 83,
	            column: 7
	          }
	        }],
	        line: 69
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 74,
	            column: 12
	          },
	          end: {
	            line: 79,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 74,
	            column: 12
	          },
	          end: {
	            line: 79,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 74,
	            column: 12
	          },
	          end: {
	            line: 79,
	            column: 13
	          }
	        }],
	        line: 74
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 99,
	            column: 28
	          },
	          end: {
	            line: 99,
	            column: 140
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 99,
	            column: 62
	          },
	          end: {
	            line: 99,
	            column: 97
	          }
	        }, {
	          start: {
	            line: 99,
	            column: 100
	          },
	          end: {
	            line: 99,
	            column: 140
	          }
	        }],
	        line: 99
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 111,
	            column: 8
	          },
	          end: {
	            line: 133,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 111,
	            column: 8
	          },
	          end: {
	            line: 133,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 111,
	            column: 8
	          },
	          end: {
	            line: 133,
	            column: 9
	          }
	        }],
	        line: 111
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 116,
	            column: 30
	          },
	          end: {
	            line: 119,
	            column: 38
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 116,
	            column: 30
	          },
	          end: {
	            line: 116,
	            column: 54
	          }
	        }, {
	          start: {
	            line: 117,
	            column: 14
	          },
	          end: {
	            line: 117,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 118,
	            column: 14
	          },
	          end: {
	            line: 118,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 119,
	            column: 14
	          },
	          end: {
	            line: 119,
	            column: 38
	          }
	        }],
	        line: 116
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 121,
	            column: 12
	          },
	          end: {
	            line: 123,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 121,
	            column: 12
	          },
	          end: {
	            line: 123,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 121,
	            column: 12
	          },
	          end: {
	            line: 123,
	            column: 13
	          }
	        }],
	        line: 121
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 121,
	            column: 16
	          },
	          end: {
	            line: 121,
	            column: 67
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 121,
	            column: 16
	          },
	          end: {
	            line: 121,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 121,
	            column: 27
	          },
	          end: {
	            line: 121,
	            column: 67
	          }
	        }],
	        line: 121
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0,
	      '58': 0,
	      '59': 0,
	      '60': 0,
	      '61': 0,
	      '62': 0,
	      '63': 0,
	      '64': 0,
	      '65': 0,
	      '66': 0,
	      '67': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0, 0, 0],
	      '8': [0, 0],
	      '9': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var Plugin = (cov_3yp8cete3.s[0]++, videojs.getPlugin('plugin'));
	var defaults = (cov_3yp8cete3.s[1]++, {
	  displayFullChapter: false,
	  chapterDisplayLength: 10
	});
	var registerPlugin = (cov_3yp8cete3.s[2]++, (cov_3yp8cete3.b[0][0]++, videojs.registerPlugin) || (cov_3yp8cete3.b[0][1]++, videojs.plugin));

	var SeekChapter =
	/*#__PURE__*/
	function (_Plugin) {
	  _inheritsLoose(SeekChapter, _Plugin);

	  function SeekChapter(player, options) {
	    var _this;

	    cov_3yp8cete3.f[0]++;
	    cov_3yp8cete3.s[3]++;
	    _this = _Plugin.call(this, player) || this;
	    cov_3yp8cete3.s[4]++;
	    _this.chapters = [];
	    cov_3yp8cete3.s[5]++;
	    _this.cues = null;
	    cov_3yp8cete3.s[6]++;
	    _this.regTimmer = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;
	    cov_3yp8cete3.s[7]++;
	    _this.options = videojs.mergeOptions(defaults, options);
	    cov_3yp8cete3.s[8]++;

	    _this.player.ready(function () {
	      cov_3yp8cete3.f[1]++;
	      cov_3yp8cete3.s[9]++;

	      _this.player.addClass('vjs-seek-chapter');

	      cov_3yp8cete3.s[10]++;
	      _this.chapterCues = [];
	    });

	    cov_3yp8cete3.s[11]++;

	    _this.player.on('loadedmetadata', function () {
	      cov_3yp8cete3.f[2]++;
	      cov_3yp8cete3.s[12]++;
	      _this.controlBar = _this.player.getChild('controlBar');
	      cov_3yp8cete3.s[13]++;
	      _this.progressControl = _this.controlBar.getChild('progressControl');
	      cov_3yp8cete3.s[14]++;
	      _this.seeker = _this.progressControl.getChild('SeekBar');
	      cov_3yp8cete3.s[15]++;
	      _this.mouseDisplay = _this.seeker.getChild('MouseTimeDisplay');
	      cov_3yp8cete3.s[16]++;

	      if (!_this.mouseDisplay) {
	        cov_3yp8cete3.b[1][0]++;
	        cov_3yp8cete3.s[17]++;
	        return;
	      } else {
	        cov_3yp8cete3.b[1][1]++;
	      }

	      cov_3yp8cete3.s[18]++;
	      _this.tooltip = _this.mouseDisplay.getChild('TimeTooltip');
	      cov_3yp8cete3.s[19]++;
	      _this.duration = _this.player.duration();
	      var tracks = (cov_3yp8cete3.s[20]++, player.textTracks());
	      var chapterTrack;
	      cov_3yp8cete3.s[21]++;

	      for (var i = 0; tracks.length > i; i++) {
	        cov_3yp8cete3.s[22]++;

	        if (tracks[i].kind === 'chapters') {
	          cov_3yp8cete3.b[2][0]++;
	          cov_3yp8cete3.s[23]++;
	          chapterTrack = tracks[i];
	        } else {
	          cov_3yp8cete3.b[2][1]++;
	        }
	      }

	      cov_3yp8cete3.s[24]++;

	      if (chapterTrack) {
	        cov_3yp8cete3.b[3][0]++;
	        cov_3yp8cete3.s[25]++;
	        _this.chapterCues = chapterTrack.cues;
	        var cuesReady = (cov_3yp8cete3.s[26]++, new Promise(function (res, rej) {
	          cov_3yp8cete3.f[3]++;
	          var interval = (cov_3yp8cete3.s[27]++, setInterval(function () {
	            cov_3yp8cete3.f[4]++;
	            cov_3yp8cete3.s[28]++;

	            if (!_this.cues) {
	              cov_3yp8cete3.b[4][0]++;
	              cov_3yp8cete3.s[29]++;
	              _this.cues = _this.chapterCues.cues_;
	            } else {
	              cov_3yp8cete3.b[4][1]++;
	              cov_3yp8cete3.s[30]++;
	              clearInterval(interval);
	              cov_3yp8cete3.s[31]++;
	              res(true);
	            }
	          }, 250));
	        }));
	        cov_3yp8cete3.s[32]++;
	        cuesReady.then(function () {
	          cov_3yp8cete3.f[5]++;
	          cov_3yp8cete3.s[33]++;
	          return _this.addChapterToProgressBar();
	        });
	      } else {
	        cov_3yp8cete3.b[3][1]++;
	      }
	    });

	    return _this;
	  }

	  var _proto = SeekChapter.prototype;

	  _proto.addChapterToProgressBar = function addChapterToProgressBar() {
	    var _this2 = this;

	    cov_3yp8cete3.f[6]++;
	    cov_3yp8cete3.s[34]++;
	    this.cues.forEach(function (vttCue) {
	      cov_3yp8cete3.f[7]++;
	      var chapter = (cov_3yp8cete3.s[35]++, document.createElement('div'));
	      var startPosition = (cov_3yp8cete3.s[36]++, (vttCue.startTime + 1) / _this2.duration * 100);
	      var endPosition = (cov_3yp8cete3.s[37]++, vttCue.endTime / _this2.duration * 100);
	      cov_3yp8cete3.s[38]++;
	      chapter.className = 'chapter-bar';
	      cov_3yp8cete3.s[39]++;
	      chapter.setAttribute('start', vttCue.startTime);
	      cov_3yp8cete3.s[40]++;
	      chapter.setAttribute('end', vttCue.endTime);
	      cov_3yp8cete3.s[41]++;
	      chapter.setAttribute('text', vttCue.text);
	      cov_3yp8cete3.s[42]++;
	      chapter.style.left = startPosition + '%';
	      cov_3yp8cete3.s[43]++;
	      chapter.style.width = _this2.options.displayFullChapter ? (cov_3yp8cete3.b[5][0]++, endPosition - startPosition + '%') : (cov_3yp8cete3.b[5][1]++, _this2.options.chapterDisplayLength + 'px');
	      cov_3yp8cete3.s[44]++;

	      _this2.chapters.push(chapter);

	      cov_3yp8cete3.s[45]++;

	      _this2.seeker.el().appendChild(chapter);
	    });
	    cov_3yp8cete3.s[46]++;
	    this.updateToolTip();
	  };

	  _proto.updateToolTip = function updateToolTip() {
	    var _this3 = this;

	    cov_3yp8cete3.f[8]++;
	    var tooltipEl = (cov_3yp8cete3.s[47]++, this.tooltip.el());
	    var observer = (cov_3yp8cete3.s[48]++, new MutationObserver(function (mutationsList) {
	      cov_3yp8cete3.f[9]++;
	      cov_3yp8cete3.s[49]++;

	      for (var _iterator = mutationsList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var mutation = _ref;
	        cov_3yp8cete3.s[50]++;

	        if (mutation.type === 'childList') {
	          cov_3yp8cete3.b[6][0]++;
	          cov_3yp8cete3.s[51]++;

	          _this3.chapters.forEach(function (chapter) {
	            cov_3yp8cete3.f[10]++;
	            var rect1 = (cov_3yp8cete3.s[52]++, chapter.getBoundingClientRect());
	            var rect2 = (cov_3yp8cete3.s[53]++, _this3.mouseDisplay.el().getBoundingClientRect());
	            var overlap = (cov_3yp8cete3.s[54]++, !((cov_3yp8cete3.b[7][0]++, rect1.right < rect2.left) || (cov_3yp8cete3.b[7][1]++, rect1.left > rect2.right) || (cov_3yp8cete3.b[7][2]++, rect1.bottom < rect2.top) || (cov_3yp8cete3.b[7][3]++, rect1.top > rect2.bottom)));
	            cov_3yp8cete3.s[55]++;

	            if ((cov_3yp8cete3.b[9][0]++, overlap) && (cov_3yp8cete3.b[9][1]++, _this3.regTimmer.test(tooltipEl.innerText))) {
	              cov_3yp8cete3.b[8][0]++;
	              cov_3yp8cete3.s[56]++;
	              tooltipEl.innerText = tooltipEl.innerText + ' ' + chapter.getAttribute('text');
	            } else {
	              cov_3yp8cete3.b[8][1]++;
	            }
	          });
	        } else {
	          cov_3yp8cete3.b[6][1]++;
	        }
	      }
	    }));
	    cov_3yp8cete3.s[57]++;
	    observer.observe(tooltipEl, {
	      childList: true
	    });
	  };

	  _proto.hmsToSecondsOnly = function hmsToSecondsOnly(str) {
	    cov_3yp8cete3.f[11]++;
	    var p = (cov_3yp8cete3.s[58]++, str.split(':'));
	    var s = (cov_3yp8cete3.s[59]++, 0);
	    var m = (cov_3yp8cete3.s[60]++, 1);
	    cov_3yp8cete3.s[61]++;

	    while (p.length > 0) {
	      cov_3yp8cete3.s[62]++;
	      s += m * parseInt(p.pop(), 10);
	      cov_3yp8cete3.s[63]++;
	      m *= 60;
	    }

	    cov_3yp8cete3.s[64]++;
	    return s;
	  };

	  return SeekChapter;
	}(Plugin);

	cov_3yp8cete3.s[65]++;
	SeekChapter.defaultState = {};
	cov_3yp8cete3.s[66]++;
	SeekChapter.VERSION = version;
	cov_3yp8cete3.s[67]++;
	registerPlugin('seekChapter', SeekChapter);

	var Player = videojs.getComponent('Player');
	QUnit.test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs, 'function', 'videojs exists');
	  assert.strictEqual(typeof SeekChapter, 'function', 'plugin is a function');
	});
	QUnit.module('videojs-seek-chapter', {
	  beforeEach: function beforeEach() {
	    // Mock the environment's timers because certain things - particularly
	    // player readiness - are asynchronous in video.js 5. This MUST come
	    // before any player is created; otherwise, timers could get created
	    // with the actual timer methods!
	    this.clock = sinon.useFakeTimers();
	    this.fixture = document_1.getElementById('qunit-fixture');
	    this.video = document_1.createElement('video');
	    this.fixture.appendChild(this.video);
	    this.player = videojs(this.video);
	  },
	  afterEach: function afterEach() {
	    this.player.dispose();
	    this.clock.restore();
	  }
	});
	QUnit.test('registers itself with video.js', function (assert) {
	  assert.expect(2);
	  assert.strictEqual(typeof Player.prototype.seekChapter, 'function', 'videojs-seek-chapter plugin was registered');
	  this.player.seekChapter(); // Tick the clock forward enough to trigger the player to be "ready".

	  this.clock.tick(1);
	  assert.ok(this.player.hasClass('vjs-seek-chapter'), 'the plugin adds a class to the player');
	});

}(QUnit, sinon, videojs));
