/*istanbul ignore next*/(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './PraiseButton.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./PraiseButton.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.PraiseButton);
        global.thumb = mod.exports;
    }
})(this, function (exports, _PraiseButton) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.thumb = undefined;

    var _PraiseButton2 = _interopRequireDefault(_PraiseButton);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var thumb = exports.thumb = function (_praiseButton) {
        _inherits(thumb, _praiseButton);

        function /*istanbul ignore next*/thumb() {
            /*istanbul ignore next*/_classCallCheck(this, thumb);

            return _possibleConstructorReturn(this, (thumb.__proto__ || Object.getPrototypeOf(thumb)).call(this));
        }

        _createClass(thumb, [{
            key: 'change',
            value: function change() {
                this.add();
                $('.count').text(this.count);
            }
        }]);

        return thumb;
    }(_PraiseButton2.default);
});