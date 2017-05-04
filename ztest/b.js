!function () {
    var a = function () {
        var b = [].slice.call(arguments);
        return b.push(a.options), b[0].match(/^\s*#([\w:\-\.]+)\s*$/gim) && b[0].replace(/^\s*#([\w:\-\.]+)\s*$/gim, function (a, c) {
            var d = document, e = d && d.getElementById(c);
            b[0] = e ? e.value || e.innerHTML : a
        }), 1 == arguments.length ? a.compile.apply(a, b) : arguments.length >= 2 ? a.to_html.apply(a, b) : void 0
    }, b = {
        escapehash: {"<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#x27;", "/": "&#x2f;"},
        escapereplace: function (a) {
            return b.escapehash[a]
        },
        escaping: function (a) {
            return "string" != typeof a ? a : a.replace(/[&<>"]/gim, this.escapereplace)
        },
        detection: function (a) {
            return "undefined" == typeof a ? "" : a
        }
    }, c = function (a) {
        if ("undefined" != typeof console) {
            if (console.warn)return void console.warn(a);
            if (console.log)return void console.log(a)
        }
        throw a
    }, d = function (a, b) {
        if (a = a !== Object(a) ? {} : a, a.__proto__)return a.__proto__ = b, a;
        var c = function () {
        }, d = Object.create ? Object.create(b) : new (c.prototype = b, c);
        for (var e in a)a.hasOwnProperty(e) && (d[e] = a[e]);
        return d
    };
    a.__cache = {}, a.version = "0.6.5-stable", a.settings = {}, a.tags = {
        operationOpen: "{@",
        operationClose: "}",
        interpolateOpen: "\\${",
        interpolateClose: "}",
        noneencodeOpen: "\\$\\${",
        noneencodeClose: "}",
        commentOpen: "\\{#",
        commentClose: "\\}"
    }, a.options = {
        cache: !0,
        strip: !0,
        errorhandling: !0,
        detection: !0,
        _method: d({__escapehtml: b, __throw: c, __juicer: a}, {})
    }, a.tagInit = function () {
        var b = a.tags.operationOpen + "each\\s*([^}]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?" + a.tags.operationClose, c = a.tags.operationOpen + "\\/each" + a.tags.operationClose, d = a.tags.operationOpen + "if\\s*([^}]*?)" + a.tags.operationClose, e = a.tags.operationOpen + "\\/if" + a.tags.operationClose, f = a.tags.operationOpen + "else" + a.tags.operationClose, g = a.tags.operationOpen + "else if\\s*([^}]*?)" + a.tags.operationClose, h = a.tags.interpolateOpen + "([\\s\\S]+?)" + a.tags.interpolateClose, i = a.tags.noneencodeOpen + "([\\s\\S]+?)" + a.tags.noneencodeClose, j = a.tags.commentOpen + "[^}]*?" + a.tags.commentClose, k = a.tags.operationOpen + "each\\s*(\\w*?)\\s*in\\s*range\\(([^}]+?)\\s*,\\s*([^}]+?)\\)" + a.tags.operationClose, l = a.tags.operationOpen + "include\\s*([^}]*?)\\s*,\\s*([^}]*?)" + a.tags.operationClose;
        a.settings.forstart = new RegExp(b, "igm"), a.settings.forend = new RegExp(c, "igm"), a.settings.ifstart = new RegExp(d, "igm"), a.settings.ifend = new RegExp(e, "igm"), a.settings.elsestart = new RegExp(f, "igm"), a.settings.elseifstart = new RegExp(g, "igm"), a.settings.interpolate = new RegExp(h, "igm"), a.settings.noneencode = new RegExp(i, "igm"), a.settings.inlinecomment = new RegExp(j, "igm"), a.settings.rangestart = new RegExp(k, "igm"), a.settings.include = new RegExp(l, "igm")
    }, a.tagInit(), a.set = function (a, b) {
        var c = this, d = function (a) {
            return a.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/gim, function (a) {
                return "\\" + a
            })
        }, e = function (a, b) {
            var e = a.match(/^tag::(.*)$/i);
            return e ? (c.tags[e[1]] = d(b), void c.tagInit()) : void(c.options[a] = b)
        };
        if (2 === arguments.length)return void e(a, b);
        if (a === Object(a))for (var f in a)a.hasOwnProperty(f) && e(f, a[f])
    }, a.register = function (a, b) {
        var c = this.options._method;
        return c.hasOwnProperty(a) ? !1 : c[a] = b
    }, a.unregister = function (a) {
        var b = this.options._method;
        return b.hasOwnProperty(a) ? delete b[a] : void 0
    }, a.template = function (b) {
        var c = this;
        this.options = b, this.__interpolate = function (a, b, c) {
            var d, e = a.split("|"), f = e[0] || "";
            return e.length > 1 && (a = e.shift(), d = e.shift().split(","), f = "_method." + d.shift() + ".call({}, " + [a].concat(d) + ")"), "<%= " + (b ? "_method.__escapehtml.escaping" : "") + "(" + (c && c.detection === !1 ? "" : "_method.__escapehtml.detection") + "(" + f + ")) %>"
        }, this.__removeShell = function (b, d) {
            var e = 0;
            return b = b.replace(a.settings.forstart, function (a, b, c, d) {
                var c = c || "value", d = d && d.substr(1), f = "i" + e++;
                return "<% ~function() {for(var " + f + " in " + b + ") {if(" + b + ".hasOwnProperty(" + f + ")) {var " + c + "=" + b + "[" + f + "];" + (d ? "var " + d + "=" + f + ";" : "") + " %>"
            }).replace(a.settings.forend, "<% }}}(); %>").replace(a.settings.ifstart, function (a, b) {
                return "<% if(" + b + ") { %>"
            }).replace(a.settings.ifend, "<% } %>").replace(a.settings.elsestart, function (a) {
                return "<% } else { %>"
            }).replace(a.settings.elseifstart, function (a, b) {
                return "<% } else if(" + b + ") { %>"
            }).replace(a.settings.noneencode, function (a, b) {
                return c.__interpolate(b, !1, d)
            }).replace(a.settings.interpolate, function (a, b) {
                return c.__interpolate(b, !0, d)
            }).replace(a.settings.inlinecomment, "").replace(a.settings.rangestart, function (a, b, c, d) {
                var f = "j" + e++;
                return "<% ~function() {for(var " + f + "=" + c + ";" + f + "<" + d + ";" + f + "++) {{var " + b + "=" + f + "; %>"
            }).replace(a.settings.include, function (a, b, c) {
                return b.match(/^file\:\/\//gim) ? a : "<%= _method.__juicer(" + b + ", " + c + "); %>"
            }), d && d.errorhandling === !1 || (b = "<% try { %>" + b, b += '<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'), b
        }, this.__toNative = function (a, b) {
            return this.__convert(a, !b || b.strip)
        }, this.__lexicalAnalyze = function (b) {
            var c = [], d = [], e = "", f = ["if", "each", "_", "_method", "console", "break", "case", "catch", "continue", "debugger", "default", "delete", "do", "finally", "for", "function", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "null", "typeof", "class", "enum", "export", "extends", "import", "super", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "const", "arguments", "true", "false", "undefined", "NaN"], g = function (a, b) {
                if (Array.prototype.indexOf && a.indexOf === Array.prototype.indexOf)return a.indexOf(b);
                for (var c = 0; c < a.length; c++)if (a[c] === b)return c;
                return -1
            }, h = function (b, e) {
                if (e = e.match(/\w+/gim)[0], -1 === g(c, e) && -1 === g(f, e) && -1 === g(d, e)) {
                    if ("undefined" != typeof window && "function" == typeof window[e] && window[e].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return b;
                    if ("undefined" != typeof global && "function" == typeof global[e] && global[e].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return b;
                    if ("function" == typeof a.options._method[e] || a.options._method.hasOwnProperty(e))return d.push(e), b;
                    c.push(e)
                }
                return b
            };
            b.replace(a.settings.forstart, h).replace(a.settings.interpolate, h).replace(a.settings.ifstart, h).replace(a.settings.elseifstart, h).replace(a.settings.include, h).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)\[\]]\s*([A-Za-z_]+)/gim, h);
            for (var i = 0; i < c.length; i++)e += "var " + c[i] + "=_." + c[i] + ";";
            for (var i = 0; i < d.length; i++)e += "var " + d[i] + "=_method." + d[i] + ";";
            return "<% " + e + " %>"
        }, this.__convert = function (a, b) {
            var c = [].join("");
            return c += "'use strict';", c += "var _=_||{};", c += "var _out='';_out+='", c += b !== !1 ? a.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out;" : a.replace(/\\/g, "\\\\").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t").replace(/[\n]/g, "\\n").replace(/'(?=[^%]*%>)/g, "	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g, "';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='") + "';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');"
        }, this.parse = function (a, b) {
            var e = this;
            return b && b.loose === !1 || (a = this.__lexicalAnalyze(a) + a), a = this.__removeShell(a, b), a = this.__toNative(a, b), this._render = new Function("_, _method", a), this.render = function (a, b) {
                return b && b === c.options._method || (b = d(b, c.options._method)), e._render.call(this, a, b)
            }, this
        }
    }, a.compile = function (a, b) {
        b && b === this.options || (b = d(b, this.options));
        try {
            var e = this.__cache[a] ? this.__cache[a] : new this.template(this.options).parse(a, b);
            return b && b.cache === !1 || (this.__cache[a] = e), e
        } catch (f) {
            return c("Juicer Compile Exception: " + f.message), {
                render: function () {
                }
            }
        }
    }, a.to_html = function (a, b, c) {
        return c && c === this.options || (c = d(c, this.options)), this.compile(a, c).render(b, c._method)
    }, "undefined" != typeof module && module.exports ? module.exports = a : this.juicer = a
}(), function (a, b, c) {
    function d(a, c) {
        this.wrapper = "string" == typeof a ? b.querySelector(a) : a, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0
        };
        for (var d in c)this.options[d] = c[d];
        this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = h.hasTransition && this.options.useTransition, this.options.useTransform = h.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function e(a, c, d) {
        var e = b.createElement("div"), f = b.createElement("div");
        return d === !0 && (e.style.cssText = "position:absolute;z-index:9999", f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), f.className = "iScrollIndicator", "h" == a ? (d === !0 && (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", f.style.height = "100%"), e.className = "iScrollHorizontalScrollbar") : (d === !0 && (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", f.style.width = "100%"), e.className = "iScrollVerticalScrollbar"), e.style.cssText += ";overflow:hidden", c || (e.style.pointerEvents = "none"), e.appendChild(f), e
    }

    function f(c, d) {
        this.wrapper = "string" == typeof d.el ? b.querySelector(d.el) : d.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = c, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var e in d)this.options[e] = d[e];
        this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(a, "touchend", this)), this.options.disablePointer || (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.addEvent(a, h.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(a, "mouseup", this))), this.options.fade && (this.wrapperStyle[h.style.transform] = this.scroller.translateZ, this.wrapperStyle[h.style.transitionDuration] = h.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
    }

    var g = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (b) {
            a.setTimeout(b, 1e3 / 60)
        }, h = function () {
        function d(a) {
            return g === !1 ? !1 : "" === g ? a : g + a.charAt(0).toUpperCase() + a.substr(1)
        }

        var e = {}, f = b.createElement("div").style, g = function () {
            for (var a, b = ["t", "webkitT", "MozT", "msT", "OT"], c = 0, d = b.length; d > c; c++)if (a = b[c] + "ransform", a in f)return b[c].substr(0, b[c].length - 1);
            return !1
        }();
        e.getTime = Date.now || function () {
                return (new Date).getTime()
            }, e.extend = function (a, b) {
            for (var c in b)a[c] = b[c]
        }, e.addEvent = function (a, b, c, d) {
            a.addEventListener(b, c, !!d)
        }, e.removeEvent = function (a, b, c, d) {
            a.removeEventListener(b, c, !!d)
        }, e.prefixPointerEvent = function (b) {
            return a.MSPointerEvent ? "MSPointer" + b.charAt(9).toUpperCase() + b.substr(10) : b
        }, e.momentum = function (a, b, d, e, f, g) {
            var h, i, j = a - b, k = c.abs(j) / d;
            return g = void 0 === g ? 6e-4 : g, h = a + k * k / (2 * g) * (0 > j ? -1 : 1), i = k / g, e > h ? (h = f ? e - f / 2.5 * (k / 8) : e, j = c.abs(h - a), i = j / k) : h > 0 && (h = f ? f / 2.5 * (k / 8) : 0, j = c.abs(a) + h, i = j / k), {
                destination: c.round(h),
                duration: i
            }
        };
        var h = d("transform");
        return e.extend(e, {
            hasTransform: h !== !1,
            hasPerspective: d("perspective") in f,
            hasTouch: "ontouchstart" in a,
            hasPointer: a.PointerEvent || a.MSPointerEvent,
            hasTransition: d("transition") in f
        }), e.isBadAndroid = /Android /.test(a.navigator.appVersion) && !/Chrome\/\d/.test(a.navigator.appVersion), e.extend(e.style = {}, {
            transform: h,
            transitionTimingFunction: d("transitionTimingFunction"),
            transitionDuration: d("transitionDuration"),
            transitionDelay: d("transitionDelay"),
            transformOrigin: d("transformOrigin")
        }), e.hasClass = function (a, b) {
            var c = new RegExp("(^|\\s)" + b + "(\\s|$)");
            return c.test(a.className)
        }, e.addClass = function (a, b) {
            if (!e.hasClass(a, b)) {
                var c = a.className.split(" ");
                c.push(b), a.className = c.join(" ")
            }
        }, e.removeClass = function (a, b) {
            if (e.hasClass(a, b)) {
                var c = new RegExp("(^|\\s)" + b + "(\\s|$)", "g");
                a.className = a.className.replace(c, " ")
            }
        }, e.offset = function (a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;)b -= a.offsetLeft, c -= a.offsetTop;
            return {left: b, top: c}
        }, e.preventDefaultException = function (a, b) {
            for (var c in b)if (b[c].test(a[c]))return !0;
            return !1
        }, e.extend(e.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }), e.extend(e.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function (a) {
                    return a * (2 - a)
                }
            }, circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function (a) {
                    return c.sqrt(1 - --a * a)
                }
            }, back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function (a) {
                    var b = 4;
                    return (a -= 1) * a * ((b + 1) * a + b) + 1
                }
            }, bounce: {
                style: "", fn: function (a) {
                    return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }
            }, elastic: {
                style: "", fn: function (a) {
                    var b = .22, d = .4;
                    return 0 === a ? 0 : 1 == a ? 1 : d * c.pow(2, -10 * a) * c.sin((a - b / 4) * (2 * c.PI) / b) + 1
                }
            }
        }), e.tap = function (a, c) {
            var d = b.createEvent("Event");
            d.initEvent(c, !0, !0), d.pageX = a.pageX, d.pageY = a.pageY, a.target.dispatchEvent(d)
        }, e.click = function (a) {
            var c, d = a.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(d.tagName) || (c = b.createEvent("MouseEvents"), c.initMouseEvent("click", !0, !0, a.view, 1, d.screenX, d.screenY, d.clientX, d.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), c._constructed = !0, d.dispatchEvent(c))
        }, e
    }();
    d.prototype = {
        version: "5.1.3", _init: function () {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        }, destroy: function () {
            this._initEvents(!0), this._execEvent("destroy")
        }, _transitionEnd: function (a) {
            a.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd", this.y, this.y == this.maxScrollY)))
        }, _start: function (a) {
            if ((1 == h.eventType[a.type] || 0 === a.button) && this.enabled && (!this.initiated || h.eventType[a.type] === this.initiated)) {
                !this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(a.target, this.options.preventDefaultException) || a.preventDefault();
                var b, d = a.touches ? a.touches[0] : a;
                this.initiated = h.eventType[a.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = h.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, b = this.getComputedPosition(), this._translate(c.round(b.x), c.round(b.y)), this._execEvent("scrollEnd", this.y, this.y == this.maxScrollY)) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd", this.y, !0)), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = d.pageX, this.pointY = d.pageY, this._execEvent("beforeScrollStart")
            }
        }, _move: function (a) {
            if (this.enabled && h.eventType[a.type] === this.initiated) {
                this.options.preventDefault && a.preventDefault();
                var b, d, e, f, g = a.touches ? a.touches[0] : a, i = g.pageX - this.pointX, j = g.pageY - this.pointY, k = h.getTime();
                if (this.pointX = g.pageX, this.pointY = g.pageY, this.distX += i, this.distY += j, e = c.abs(this.distX), f = c.abs(this.distY), !(k - this.endTime > 300 && 10 > e && 10 > f)) {
                    if (this.directionLocked || this.options.freeScroll || (e > f + this.options.directionLockThreshold ? this.directionLocked = "h" : f >= e + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough)a.preventDefault(); else if ("horizontal" == this.options.eventPassthrough)return void(this.initiated = !1);
                        j = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough)a.preventDefault(); else if ("vertical" == this.options.eventPassthrough)return void(this.initiated = !1);
                        i = 0
                    }
                    i = this.hasHorizontalScroll ? i : 0, j = this.hasVerticalScroll ? j : 0, b = this.x + i, d = this.y + j, (b > 0 || b < this.maxScrollX) && (b = this.options.bounce ? this.x + i / 3 : b > 0 ? 0 : this.maxScrollX), (d > 0 || d < this.maxScrollY) && (d = this.options.bounce ? this.y + j / 3 : d > 0 ? 0 : this.maxScrollY), this.directionX = i > 0 ? -1 : 0 > i ? 1 : 0, this.directionY = j > 0 ? -1 : 0 > j ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(b, d), k - this.startTime > 300 && (this.startTime = k, this.startX = this.x, this.startY = this.y)
                }
            }
        }, _end: function (a) {
            if (this.enabled && h.eventType[a.type] === this.initiated) {
                this.options.preventDefault && !h.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();
                var b, d, e = (a.changedTouches ? a.changedTouches[0] : a, h.getTime() - this.startTime), f = c.round(this.x), g = c.round(this.y), i = c.abs(f - this.startX), j = c.abs(g - this.startY), k = 0, l = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = h.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(f, g), !this.moved)return this.options.tap && h.tap(a, this.options.tap), this.options.click && h.click(a), void this._execEvent("scrollCancel");
                    if (this._events.flick && 200 > e && 100 > i && 100 > j)return void this._execEvent("flick");
                    if (this.options.momentum && 300 > e && (b = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, e, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                            destination: f,
                            duration: 0
                        }, d = this.hasVerticalScroll ? h.momentum(this.y, this.startY, e, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                            destination: g,
                            duration: 0
                        }, f = b.destination, g = d.destination, k = c.max(b.duration, d.duration), this.isInTransition = 1), this.options.snap) {
                        var m = this._nearestSnap(f, g);
                        this.currentPage = m, k = this.options.snapSpeed || c.max(c.max(c.min(c.abs(f - m.x), 1e3), c.min(c.abs(g - m.y), 1e3)), 300), f = m.x, g = m.y, this.directionX = 0, this.directionY = 0, l = this.options.bounceEasing
                    }
                    return f != this.x || g != this.y ? ((f > 0 || f < this.maxScrollX || g > 0 || g < this.maxScrollY) && (l = h.ease.quadratic), void this.scrollTo(f, g, k, l)) : void this._execEvent("scrollEnd", this.y, this.y == this.maxScrollY)
                }
            }
        }, _resize: function () {
            var a = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
                a.refresh()
            }, this.options.resizePolling)
        }, resetPosition: function (a) {
            var b = this.x, c = this.y;
            return a = a || 0, !this.hasHorizontalScroll || this.x > 0 ? b = 0 : this.x < this.maxScrollX && (b = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY), b == this.x && c == this.y ? !1 : (this.scrollTo(b, c, a, this.options.bounceEasing), !0)
        }, disable: function () {
            this.enabled = !1
        }, enable: function () {
            this.enabled = !0
        }, refresh: function () {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = h.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        }, on: function (a, b) {
            this._events[a] || (this._events[a] = []), this._events[a].push(b)
        }, off: function (a, b) {
            if (this._events[a]) {
                var c = this._events[a].indexOf(b);
                c > -1 && this._events[a].splice(c, 1)
            }
        }, _execEvent: function (a) {
            if (this._events[a]) {
                var b = 0, c = this._events[a].length;
                if (c)for (; c > b; b++)this._events[a][b].apply(this, [].slice.call(arguments, 1))
            }
        }, scrollBy: function (a, b, c, d) {
            a = this.x + a, b = this.y + b, c = c || 0, this.scrollTo(a, b, c, d)
        }, scrollTo: function (a, b, c, d) {
            d = d || h.ease.circular, this.isInTransition = this.options.useTransition && c > 0, !c || this.options.useTransition && d.style ? (this._transitionTimingFunction(d.style), this._transitionTime(c), this._translate(a, b)) : this._animate(a, b, c, d.fn)
        }, scrollToEnd: function () {
            this.scrollTo(this.maxScrollX, this.maxScrollY)
        }, scrollToElement: function (a, b, d, e, f) {
            if (a = a.nodeType ? a : this.scroller.querySelector(a)) {
                var g = h.offset(a);
                g.left -= this.wrapperOffset.left, g.top -= this.wrapperOffset.top, d === !0 && (d = c.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), e === !0 && (e = c.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), g.left -= d || 0, g.top -= e || 0, g.left = g.left > 0 ? 0 : g.left < this.maxScrollX ? this.maxScrollX : g.left, g.top = g.top > 0 ? 0 : g.top < this.maxScrollY ? this.maxScrollY : g.top, b = void 0 === b || null === b || "auto" === b ? c.max(c.abs(this.x - g.left), c.abs(this.y - g.top)) : b, this.scrollTo(g.left, g.top, b, f)
            }
        }, _transitionTime: function (a) {
            if (a = a || 0, this.scrollerStyle[h.style.transitionDuration] = a + "ms", !a && h.isBadAndroid && (this.scrollerStyle[h.style.transitionDuration] = "0.001s"), this.indicators)for (var b = this.indicators.length; b--;)this.indicators[b].transitionTime(a)
        }, _transitionTimingFunction: function (a) {
            if (this.scrollerStyle[h.style.transitionTimingFunction] = a, this.indicators)for (var b = this.indicators.length; b--;)this.indicators[b].transitionTimingFunction(a)
        }, _translate: function (a, b) {
            if (this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + a + "px," + b + "px)" + this.translateZ : (a = c.round(a), b = c.round(b), this.scrollerStyle.left = a + "px", this.scrollerStyle.top = b + "px"), this.x = a, this.y = b, this.indicators)for (var d = this.indicators.length; d--;)this.indicators[d].updatePosition()
        }, _initEvents: function (b) {
            var c = b ? h.removeEvent : h.addEvent, d = this.options.bindToWrapper ? this.wrapper : a;
            c(a, "orientationchange", this), c(a, "resize", this), this.options.click && c(this.wrapper, "click", this, !0), this.options.disableMouse || (c(this.wrapper, "mousedown", this), c(d, "mousemove", this), c(d, "mousecancel", this), c(d, "mouseup", this)), h.hasPointer && !this.options.disablePointer && (c(this.wrapper, h.prefixPointerEvent("pointerdown"), this), c(d, h.prefixPointerEvent("pointermove"), this), c(d, h.prefixPointerEvent("pointercancel"), this), c(d, h.prefixPointerEvent("pointerup"), this)), h.hasTouch && !this.options.disableTouch && (c(this.wrapper, "touchstart", this), c(d, "touchmove", this), c(d, "touchcancel", this), c(d, "touchend", this)), c(this.scroller, "transitionend", this), c(this.scroller, "webkitTransitionEnd", this), c(this.scroller, "oTransitionEnd", this), c(this.scroller, "MSTransitionEnd", this)
        }, getComputedPosition: function () {
            var b, c, d = a.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (d = d[h.style.transform].split(")")[0].split(", "), b = +(d[12] || d[4]), c = +(d[13] || d[5])) : (b = +d.left.replace(/[^-\d.]/g, ""), c = +d.top.replace(/[^-\d.]/g, "")), {
                x: b,
                y: c
            }
        }, _initIndicators: function () {
            function a(a) {
                for (var b = h.indicators.length; b--;)a.call(h.indicators[b])
            }

            var b, c = this.options.interactiveScrollbars, d = "string" != typeof this.options.scrollbars, g = [], h = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (b = {
                el: e("v", c, this.options.scrollbars),
                interactive: c,
                defaultScrollbars: !0,
                customStyle: d,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(b.el), g.push(b)), this.options.scrollX && (b = {
                el: e("h", c, this.options.scrollbars),
                interactive: c,
                defaultScrollbars: !0,
                customStyle: d,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(b.el), g.push(b))), this.options.indicators && (g = g.concat(this.options.indicators));
            for (var i = g.length; i--;)this.indicators.push(new f(this, g[i]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function () {
                a(function () {
                    this.fade()
                })
            }), this.on("scrollCancel", function () {
                a(function () {
                    this.fade()
                })
            }), this.on("scrollStart", function () {
                a(function () {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function () {
                a(function () {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function () {
                a(function () {
                    this.refresh()
                })
            }), this.on("destroy", function () {
                a(function () {
                    this.destroy()
                }), delete this.indicators
            })
        }, _initWheel: function () {
            h.addEvent(this.wrapper, "wheel", this), h.addEvent(this.wrapper, "mousewheel", this), h.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function () {
                h.removeEvent(this.wrapper, "wheel", this), h.removeEvent(this.wrapper, "mousewheel", this), h.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        }, _wheel: function (a) {
            if (this.enabled) {
                a.preventDefault(), a.stopPropagation();
                var b, d, e, f, g = this;
                if (void 0 === this.wheelTimeout && g._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
                        g._execEvent("scrollEnd", g.y, g.y == g.maxScrollY), g.wheelTimeout = void 0
                    }, 400), "deltaX" in a)1 === a.deltaMode ? (b = -a.deltaX * this.options.mouseWheelSpeed, d = -a.deltaY * this.options.mouseWheelSpeed) : (b = -a.deltaX, d = -a.deltaY); else if ("wheelDeltaX" in a)b = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed, d = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed; else if ("wheelDelta" in a)b = d = a.wheelDelta / 120 * this.options.mouseWheelSpeed; else {
                    if (!("detail" in a))return;
                    b = d = -a.detail / 3 * this.options.mouseWheelSpeed
                }
                if (b *= this.options.invertWheelDirection, d *= this.options.invertWheelDirection, this.hasVerticalScroll || (b = d, d = 0), this.options.snap)return e = this.currentPage.pageX, f = this.currentPage.pageY, b > 0 ? e-- : 0 > b && e++, d > 0 ? f-- : 0 > d && f++, void this.goToPage(e, f);
                e = this.x + c.round(this.hasHorizontalScroll ? b : 0), f = this.y + c.round(this.hasVerticalScroll ? d : 0), e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), f > 0 ? f = 0 : f < this.maxScrollY && (f = this.maxScrollY), this.scrollTo(e, f, 0)
            }
        }, _initSnap: function () {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function () {
                var a, b, d, e, f, g, h = 0, i = 0, j = 0, k = this.options.snapStepX || this.wrapperWidth, l = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (this.options.snap === !0)for (d = c.round(k / 2), e = c.round(l / 2); j > -this.scrollerWidth;) {
                        for (this.pages[h] = [], a = 0, f = 0; f > -this.scrollerHeight;)this.pages[h][a] = {
                            x: c.max(j, this.maxScrollX),
                            y: c.max(f, this.maxScrollY),
                            width: k,
                            height: l,
                            cx: j - d,
                            cy: f - e
                        }, f -= l, a++;
                        j -= k, h++
                    } else for (g = this.options.snap, a = g.length, b = -1; a > h; h++)(0 === h || g[h].offsetLeft <= g[h - 1].offsetLeft) && (i = 0, b++), this.pages[i] || (this.pages[i] = []), j = c.max(-g[h].offsetLeft, this.maxScrollX), f = c.max(-g[h].offsetTop, this.maxScrollY), d = j - c.round(g[h].offsetWidth / 2), e = f - c.round(g[h].offsetHeight / 2), this.pages[i][b] = {
                        x: j,
                        y: f,
                        width: g[h].offsetWidth,
                        height: g[h].offsetHeight,
                        cx: d,
                        cy: e
                    }, j > this.maxScrollX && i++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = c.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function () {
                var a = this.options.snapSpeed || c.max(c.max(c.min(c.abs(this.x - this.startX), 1e3), c.min(c.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a)
            })
        }, _nearestSnap: function (a, b) {
            if (!this.pages.length)return {x: 0, y: 0, pageX: 0, pageY: 0};
            var d = 0, e = this.pages.length, f = 0;
            if (c.abs(a - this.absStartX) < this.snapThresholdX && c.abs(b - this.absStartY) < this.snapThresholdY)return this.currentPage;
            for (a > 0 ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX), b > 0 ? b = 0 : b < this.maxScrollY && (b = this.maxScrollY); e > d; d++)if (a >= this.pages[d][0].cx) {
                a = this.pages[d][0].x;
                break
            }
            for (e = this.pages[d].length; e > f; f++)if (b >= this.pages[0][f].cy) {
                b = this.pages[0][f].y;
                break
            }
            return d == this.currentPage.pageX && (d += this.directionX, 0 > d ? d = 0 : d >= this.pages.length && (d = this.pages.length - 1), a = this.pages[d][0].x), f == this.currentPage.pageY && (f += this.directionY, 0 > f ? f = 0 : f >= this.pages[0].length && (f = this.pages[0].length - 1), b = this.pages[0][f].y), {
                x: a,
                y: b,
                pageX: d,
                pageY: f
            }
        }, goToPage: function (a, b, d, e) {
            e = e || this.options.bounceEasing, a >= this.pages.length ? a = this.pages.length - 1 : 0 > a && (a = 0), b >= this.pages[a].length ? b = this.pages[a].length - 1 : 0 > b && (b = 0);
            var f = this.pages[a][b].x, g = this.pages[a][b].y;
            d = void 0 === d ? this.options.snapSpeed || c.max(c.max(c.min(c.abs(f - this.x), 1e3), c.min(c.abs(g - this.y), 1e3)), 300) : d, this.currentPage = {
                x: f,
                y: g,
                pageX: a,
                pageY: b
            }, this.scrollTo(f, g, d, e)
        }, next: function (a, b) {
            var c = this.currentPage.pageX, d = this.currentPage.pageY;
            c++, c >= this.pages.length && this.hasVerticalScroll && (c = 0, d++), this.goToPage(c, d, a, b)
        }, prev: function (a, b) {
            var c = this.currentPage.pageX, d = this.currentPage.pageY;
            c--, 0 > c && this.hasVerticalScroll && (c = 0, d--), this.goToPage(c, d, a, b)
        }, _initKeys: function (b) {
            var c, d = {pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40};
            if ("object" == typeof this.options.keyBindings)for (c in this.options.keyBindings)"string" == typeof this.options.keyBindings[c] && (this.options.keyBindings[c] = this.options.keyBindings[c].toUpperCase().charCodeAt(0)); else this.options.keyBindings = {};
            for (c in d)this.options.keyBindings[c] = this.options.keyBindings[c] || d[c];
            h.addEvent(a, "keydown", this), this.on("destroy", function () {
                h.removeEvent(a, "keydown", this)
            })
        }, _key: function (a) {
            if (this.enabled) {
                var b, d = this.options.snap, e = d ? this.currentPage.pageX : this.x, f = d ? this.currentPage.pageY : this.y, g = h.getTime(), i = this.keyTime || 0, j = .25;
                switch (this.options.useTransition && this.isInTransition && (b = this.getComputedPosition(), this._translate(c.round(b.x), c.round(b.y)), this.isInTransition = !1), this.keyAcceleration = 200 > g - i ? c.min(this.keyAcceleration + j, 50) : 0, a.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? e += d ? 1 : this.wrapperWidth : f += d ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? e -= d ? 1 : this.wrapperWidth : f -= d ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        e = d ? this.pages.length - 1 : this.maxScrollX, f = d ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        e = 0, f = 0;
                        break;
                    case this.options.keyBindings.left:
                        e += d ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        f += d ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        e -= d ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        f -= d ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                if (d)return void this.goToPage(e, f);
                e > 0 ? (e = 0, this.keyAcceleration = 0) : e < this.maxScrollX && (e = this.maxScrollX, this.keyAcceleration = 0), f > 0 ? (f = 0, this.keyAcceleration = 0) : f < this.maxScrollY && (f = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(e, f, 0), this.keyTime = g
            }
        }, _animate: function (a, b, c, d) {
            function e() {
                var m, n, o, p = h.getTime();
                return p >= l ? (f.isAnimating = !1, f._translate(a, b), void(f.resetPosition(f.options.bounceTime) || f._execEvent("scrollEnd", f.y, f.y == f.maxScrollY))) : (p = (p - k) / c, o = d(p), m = (a - i) * o + i, n = (b - j) * o + j, f._translate(m, n), void(f.isAnimating && g(e)))
            }

            var f = this, i = this.x, j = this.y, k = h.getTime(), l = k + c;
            this.isAnimating = !0, e()
        }, handleEvent: function (a) {
            switch (a.type) {
                case"touchstart":
                case"pointerdown":
                case"MSPointerDown":
                case"mousedown":
                    this._start(a);
                    break;
                case"touchmove":
                case"pointermove":
                case"MSPointerMove":
                case"mousemove":
                    this._move(a);
                    break;
                case"touchend":
                case"pointerup":
                case"MSPointerUp":
                case"mouseup":
                case"touchcancel":
                case"pointercancel":
                case"MSPointerCancel":
                case"mousecancel":
                    this._end(a);
                    break;
                case"orientationchange":
                case"resize":
                    this._resize();
                    break;
                case"transitionend":
                case"webkitTransitionEnd":
                case"oTransitionEnd":
                case"MSTransitionEnd":
                    this._transitionEnd(a);
                    break;
                case"wheel":
                case"DOMMouseScroll":
                case"mousewheel":
                    this._wheel(a);
                    break;
                case"keydown":
                    this._key(a);
                    break;
                case"click":
                    a._constructed || (a.preventDefault(), a.stopPropagation())
            }
        }
    }, f.prototype = {
        handleEvent: function (a) {
            switch (a.type) {
                case"touchstart":
                case"pointerdown":
                case"MSPointerDown":
                case"mousedown":
                    this._start(a);
                    break;
                case"touchmove":
                case"pointermove":
                case"MSPointerMove":
                case"mousemove":
                    this._move(a);
                    break;
                case"touchend":
                case"pointerup":
                case"MSPointerUp":
                case"mouseup":
                case"touchcancel":
                case"pointercancel":
                case"MSPointerCancel":
                case"mousecancel":
                    this._end(a)
            }
        }, destroy: function () {
            this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this), h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.removeEvent(this.indicator, "mousedown", this), h.removeEvent(a, "touchmove", this), h.removeEvent(a, h.prefixPointerEvent("pointermove"), this), h.removeEvent(a, "mousemove", this), h.removeEvent(a, "touchend", this), h.removeEvent(a, h.prefixPointerEvent("pointerup"), this), h.removeEvent(a, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        }, _start: function (b) {
            var c = b.touches ? b.touches[0] : b;
            b.preventDefault(), b.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = c.pageX, this.lastPointY = c.pageY, this.startTime = h.getTime(), this.options.disableTouch || h.addEvent(a, "touchmove", this), this.options.disablePointer || h.addEvent(a, h.prefixPointerEvent("pointermove"), this), this.options.disableMouse || h.addEvent(a, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        }, _move: function (a) {
            var b, c, d, e, f = a.touches ? a.touches[0] : a;
            h.getTime();
            this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, b = f.pageX - this.lastPointX, this.lastPointX = f.pageX, c = f.pageY - this.lastPointY, this.lastPointY = f.pageY, d = this.x + b, e = this.y + c, this._pos(d, e), a.preventDefault(), a.stopPropagation()
        }, _end: function (b) {
            if (this.initiated) {
                if (this.initiated = !1, b.preventDefault(), b.stopPropagation(), h.removeEvent(a, "touchmove", this), h.removeEvent(a, h.prefixPointerEvent("pointermove"), this), h.removeEvent(a, "mousemove", this), this.scroller.options.snap) {
                    var d = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), e = this.options.snapSpeed || c.max(c.max(c.min(c.abs(this.scroller.x - d.x), 1e3), c.min(c.abs(this.scroller.y - d.y), 1e3)), 300);
                    (this.scroller.x != d.x || this.scroller.y != d.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = d, this.scroller.scrollTo(d.x, d.y, e, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd", this.y, this.y == this.maxScrollY)
            }
        }, transitionTime: function (a) {
            a = a || 0, this.indicatorStyle[h.style.transitionDuration] = a + "ms", !a && h.isBadAndroid && (this.indicatorStyle[h.style.transitionDuration] = "0.001s")
        }, transitionTimingFunction: function (a) {
            this.indicatorStyle[h.style.transitionTimingFunction] = a
        }, refresh: function () {
            this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"), h.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"), h.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = c.max(c.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = c.max(c.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        }, updatePosition: function () {
            var a = this.options.listenX && c.round(this.sizeRatioX * this.scroller.x) || 0, b = this.options.listenY && c.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (a < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = c.max(this.indicatorWidth + a, 8), this.indicatorStyle.width = this.width + "px"), a = this.minBoundaryX) : a > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = c.max(this.indicatorWidth - (a - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", a = this.maxPosX + this.indicatorWidth - this.width) : a = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), b < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = c.max(this.indicatorHeight + 3 * b, 8), this.indicatorStyle.height = this.height + "px"), b = this.minBoundaryY) : b > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = c.max(this.indicatorHeight - 3 * (b - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", b = this.maxPosY + this.indicatorHeight - this.height) : b = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = a, this.y = b, this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + a + "px," + b + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = a + "px", this.indicatorStyle.top = b + "px")
        }, _pos: function (a, b) {
            0 > a ? a = 0 : a > this.maxPosX && (a = this.maxPosX), 0 > b ? b = 0 : b > this.maxPosY && (b = this.maxPosY), a = this.options.listenX ? c.round(a / this.sizeRatioX) : this.scroller.x, b = this.options.listenY ? c.round(b / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(a, b)
        }, fade: function (a, b) {
            if (!b || this.visible) {
                clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                var c = a ? 250 : 500, d = a ? 0 : 300;
                a = a ? "1" : "0", this.wrapperStyle[h.style.transitionDuration] = c + "ms", this.fadeTimeout = setTimeout(function (a) {
                    this.wrapperStyle.opacity = a, this.visible = +a
                }.bind(this, a), d)
            }
        }
    }, d.utils = h, "undefined" != typeof module && module.exports ? module.exports = d : a.IScroll = d
}(window, document, Math);
var BinaryFile = function (a, b, c) {
    var d = a, e = b || 0, f = 0;
    this.getRawData = function () {
        return d
    }, "string" == typeof a ? (f = c || d.length, this.getByteAt = function (a) {
        return 255 & d.charCodeAt(a + e)
    }, this.getBytesAt = function (a, b) {
        for (var c = [], f = 0; b > f; f++)c[f] = 255 & d.charCodeAt(a + f + e);
        return c
    }) : "unknown" == typeof a && (f = c || IEBinary_getLength(d), this.getByteAt = function (a) {
        return IEBinary_getByteAt(d, a + e)
    }, this.getBytesAt = function (a, b) {
        return new VBArray(IEBinary_getBytesAt(d, a + e, b)).toArray()
    }), this.getLength = function () {
        return f
    }, this.getSByteAt = function (a) {
        var b = this.getByteAt(a);
        return b > 127 ? b - 256 : b
    }, this.getShortAt = function (a, b) {
        var c = b ? (this.getByteAt(a) << 8) + this.getByteAt(a + 1) : (this.getByteAt(a + 1) << 8) + this.getByteAt(a);
        return 0 > c && (c += 65536), c
    }, this.getSShortAt = function (a, b) {
        var c = this.getShortAt(a, b);
        return c > 32767 ? c - 65536 : c
    }, this.getLongAt = function (a, b) {
        var c = this.getByteAt(a), d = this.getByteAt(a + 1), e = this.getByteAt(a + 2), f = this.getByteAt(a + 3), g = b ? (((c << 8) + d << 8) + e << 8) + f : (((f << 8) + e << 8) + d << 8) + c;
        return 0 > g && (g += 4294967296), g
    }, this.getSLongAt = function (a, b) {
        var c = this.getLongAt(a, b);
        return c > 2147483647 ? c - 4294967296 : c
    }, this.getStringAt = function (a, b) {
        for (var c = [], d = this.getBytesAt(a, b), e = 0; b > e; e++)c[e] = String.fromCharCode(d[e]);
        return c.join("")
    }, this.getCharAt = function (a) {
        return String.fromCharCode(this.getByteAt(a))
    }, this.toBase64 = function () {
        return window.btoa(d)
    }, this.fromBase64 = function (a) {
        d = window.atob(a)
    }
}, BinaryAjax = function () {
    function a() {
        var a = null;
        return window.ActiveXObject ? a = new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest && (a = new XMLHttpRequest), a
    }

    function b(b, c, d) {
        var e = a();
        e ? (c && ("undefined" != typeof e.onload ? e.onload = function () {
            "200" == e.status ? c(this) : d && d(), e = null
        } : e.onreadystatechange = function () {
            4 == e.readyState && ("200" == e.status ? c(this) : d && d(), e = null)
        }), e.open("HEAD", b, !0), e.send(null)) : d && d()
    }

    function c(b, c, d, e, f, g) {
        var h = a();
        if (h) {
            var i = 0;
            e && !f && (i = e[0]);
            var j = 0;
            e && (j = e[1] - e[0] + 1), c && ("undefined" != typeof h.onload ? h.onload = function () {
                "200" == h.status || "206" == h.status || "0" == h.status ? (h.binaryResponse = new BinaryFile(h.responseText, i, j), h.fileSize = g || h.getResponseHeader("Content-Length"), c(h)) : d && d(), h = null
            } : h.onreadystatechange = function () {
                if (4 == h.readyState) {
                    if ("200" == h.status || "206" == h.status || "0" == h.status) {
                        var a = {
                            status: h.status,
                            binaryResponse: new BinaryFile("unknown" == typeof h.responseBody ? h.responseBody : h.responseText, i, j),
                            fileSize: g || h.getResponseHeader("Content-Length")
                        };
                        c(a)
                    } else d && d();
                    h = null
                }
            }), h.open("GET", b, !0), h.overrideMimeType && h.overrideMimeType("text/plain; charset=x-user-defined"), e && f && h.setRequestHeader("Range", "bytes=" + e[0] + "-" + e[1]), h.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT"), h.send(null)
        } else d && d()
    }

    return function (a, d, e, f) {
        f ? b(a, function (b) {
            var g, h, i = parseInt(b.getResponseHeader("Content-Length"), 10), j = b.getResponseHeader("Accept-Ranges");
            g = f[0], f[0] < 0 && (g += i), h = g + f[1] - 1, c(a, d, e, [g, h], "bytes" == j, i)
        }) : c(a, d, e)
    }
}();
document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n	IEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))\r\nEnd Function\r\nFunction IEBinary_getBytesAt(strBinary, iOffset, iLength)\r\n  Dim aBytes()\r\n  ReDim aBytes(iLength - 1)\r\n  For i = 0 To iLength - 1\r\n   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)\r\n  Next\r\n  IEBinary_getBytesAt = aBytes\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n	IEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n</script>\r\n");
var EXIF = function () {
    function a(a) {
        return !!a.exifdata
    }

    function b(a, b) {
        BinaryAjax(a.src, function (d) {
            var e = c(d.binaryResponse);
            a.exifdata = e || {}, b && b.call(a)
        })
    }

    function c(a) {
        if (255 != a.getByteAt(0) || 216 != a.getByteAt(1))return !1;
        for (var b, c = 2, d = a.getLength(); d > c;) {
            if (255 != a.getByteAt(c))return l && console.log("Not a valid marker at offset " + c + ", found: " + a.getByteAt(c)), !1;
            if (b = a.getByteAt(c + 1), 22400 == b)return l && console.log("Found 0xFFE1 marker"), f(a, c + 4, a.getShortAt(c + 2, !0) - 2);
            if (225 == b)return l && console.log("Found 0xFFE1 marker"), f(a, c + 4, a.getShortAt(c + 2, !0) - 2);
            c += 2 + a.getShortAt(c + 2, !0)
        }
    }

    function d(a, b, c, d, f) {
        var g, h, i, j = a.getShortAt(c, f), k = {};
        for (i = 0; j > i; i++)g = c + 12 * i + 2, h = d[a.getShortAt(g, f)], !h && l && console.log("Unknown tag: " + a.getShortAt(g, f)), k[h] = e(a, g, b, c, f);
        return k
    }

    function e(a, b, c, d, e) {
        var f, g, h, i, j, k, l = a.getShortAt(b + 2, e), m = a.getLongAt(b + 4, e), n = a.getLongAt(b + 8, e) + c;
        switch (l) {
            case 1:
            case 7:
                if (1 == m)return a.getByteAt(b + 8, e);
                for (f = m > 4 ? n : b + 8, g = [], i = 0; m > i; i++)g[i] = a.getByteAt(f + i);
                return g;
            case 2:
                return f = m > 4 ? n : b + 8, a.getStringAt(f, m - 1);
            case 3:
                if (1 == m)return a.getShortAt(b + 8, e);
                for (f = m > 2 ? n : b + 8, g = [], i = 0; m > i; i++)g[i] = a.getShortAt(f + 2 * i, e);
                return g;
            case 4:
                if (1 == m)return a.getLongAt(b + 8, e);
                g = [];
                for (var i = 0; m > i; i++)g[i] = a.getLongAt(n + 4 * i, e);
                return g;
            case 5:
                if (1 == m)return j = a.getLongAt(n, e), k = a.getLongAt(n + 4, e), h = new Number(j / k), h.numerator = j, h.denominator = k, h;
                for (g = [], i = 0; m > i; i++)j = a.getLongAt(n + 8 * i, e), k = a.getLongAt(n + 4 + 8 * i, e), g[i] = new Number(j / k), g[i].numerator = j, g[i].denominator = k;
                return g;
            case 9:
                if (1 == m)return a.getSLongAt(b + 8, e);
                for (g = [], i = 0; m > i; i++)g[i] = a.getSLongAt(n + 4 * i, e);
                return g;
            case 10:
                if (1 == m)return a.getSLongAt(n, e) / a.getSLongAt(n + 4, e);
                for (g = [], i = 0; m > i; i++)g[i] = a.getSLongAt(n + 8 * i, e) / a.getSLongAt(n + 4 + 8 * i, e);
                return g
        }
    }

    function f(a, b) {
        if ("Exif" != a.getStringAt(b, 4))return l && console.log("Not valid EXIF data! " + a.getStringAt(b, 4)), !1;
        var c, e, f, g, h, i = b + 6;
        if (18761 == a.getShortAt(i))c = !1; else {
            if (19789 != a.getShortAt(i))return l && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
            c = !0
        }
        if (42 != a.getShortAt(i + 2, c))return l && console.log("Not valid TIFF data! (no 0x002A)"), !1;
        if (8 != a.getLongAt(i + 4, c))return l && console.log("Not valid TIFF data! (First offset not 8)", a.getShortAt(i + 4, c)), !1;
        if (e = d(a, i, i + 8, n, c), e.ExifIFDPointer) {
            g = d(a, i, i + e.ExifIFDPointer, m, c);
            for (f in g) {
                switch (f) {
                    case"LightSource":
                    case"Flash":
                    case"MeteringMode":
                    case"ExposureProgram":
                    case"SensingMethod":
                    case"SceneCaptureType":
                    case"SceneType":
                    case"CustomRendered":
                    case"WhiteBalance":
                    case"GainControl":
                    case"Contrast":
                    case"Saturation":
                    case"Sharpness":
                    case"SubjectDistanceRange":
                    case"FileSource":
                        g[f] = p[f][g[f]];
                        break;
                    case"ExifVersion":
                    case"FlashpixVersion":
                        g[f] = String.fromCharCode(g[f][0], g[f][1], g[f][2], g[f][3]);
                        break;
                    case"ComponentsConfiguration":
                        g[f] = p.Components[g[f][0]] + p.Components[g[f][1]] + p.Components[g[f][2]] + p.Components[g[f][3]]
                }
                e[f] = g[f]
            }
        }
        if (e.GPSInfoIFDPointer) {
            h = d(a, i, i + e.GPSInfoIFDPointer, o, c);
            for (f in h) {
                switch (f) {
                    case"GPSVersionID":
                        h[f] = h[f][0] + "." + h[f][1] + "." + h[f][2] + "." + h[f][3]
                }
                e[f] = h[f]
            }
        }
        return e
    }

    function g(c, d) {
        return c.complete ? (a(c) ? d && d.call(c) : b(c, d), !0) : !1
    }

    function h(b, c) {
        return a(b) ? b.exifdata[c] : void 0
    }

    function i(b) {
        if (!a(b))return {};
        var c, d = b.exifdata, e = {};
        for (c in d)d.hasOwnProperty(c) && (e[c] = d[c]);
        return e
    }

    function j(b) {
        if (!a(b))return "";
        var c, d = b.exifdata, e = "";
        for (c in d)d.hasOwnProperty(c) && (e += "object" == typeof d[c] ? d[c] instanceof Number ? c + " : " + d[c] + " [" + d[c].numerator + "/" + d[c].denominator + "]\r\n" : c + " : [" + d[c].length + " values]\r\n" : c + " : " + d[c] + "\r\n");
        return e
    }

    function k(a) {
        return c(a)
    }

    var l = !1, m = {
        36864: "ExifVersion",
        40960: "FlashpixVersion",
        40961: "ColorSpace",
        40962: "PixelXDimension",
        40963: "PixelYDimension",
        37121: "ComponentsConfiguration",
        37122: "CompressedBitsPerPixel",
        37500: "MakerNote",
        37510: "UserComment",
        40964: "RelatedSoundFile",
        36867: "DateTimeOriginal",
        36868: "DateTimeDigitized",
        37520: "SubsecTime",
        37521: "SubsecTimeOriginal",
        37522: "SubsecTimeDigitized",
        33434: "ExposureTime",
        33437: "FNumber",
        34850: "ExposureProgram",
        34852: "SpectralSensitivity",
        34855: "ISOSpeedRatings",
        34856: "OECF",
        37377: "ShutterSpeedValue",
        37378: "ApertureValue",
        37379: "BrightnessValue",
        37380: "ExposureBias",
        37381: "MaxApertureValue",
        37382: "SubjectDistance",
        37383: "MeteringMode",
        37384: "LightSource",
        37385: "Flash",
        37396: "SubjectArea",
        37386: "FocalLength",
        41483: "FlashEnergy",
        41484: "SpatialFrequencyResponse",
        41486: "FocalPlaneXResolution",
        41487: "FocalPlaneYResolution",
        41488: "FocalPlaneResolutionUnit",
        41492: "SubjectLocation",
        41493: "ExposureIndex",
        41495: "SensingMethod",
        41728: "FileSource",
        41729: "SceneType",
        41730: "CFAPattern",
        41985: "CustomRendered",
        41986: "ExposureMode",
        41987: "WhiteBalance",
        41988: "DigitalZoomRation",
        41989: "FocalLengthIn35mmFilm",
        41990: "SceneCaptureType",
        41991: "GainControl",
        41992: "Contrast",
        41993: "Saturation",
        41994: "Sharpness",
        41995: "DeviceSettingDescription",
        41996: "SubjectDistanceRange",
        40965: "InteroperabilityIFDPointer",
        42016: "ImageUniqueID"
    }, n = {
        256: "ImageWidth",
        257: "ImageHeight",
        34665: "ExifIFDPointer",
        34853: "GPSInfoIFDPointer",
        40965: "InteroperabilityIFDPointer",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        274: "Orientation",
        277: "SamplesPerPixel",
        284: "PlanarConfiguration",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        282: "XResolution",
        283: "YResolution",
        296: "ResolutionUnit",
        273: "StripOffsets",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        513: "JPEGInterchangeFormat",
        514: "JPEGInterchangeFormatLength",
        301: "TransferFunction",
        318: "WhitePoint",
        319: "PrimaryChromaticities",
        529: "YCbCrCoefficients",
        532: "ReferenceBlackWhite",
        306: "DateTime",
        270: "ImageDescription",
        271: "Make",
        272: "Model",
        305: "Software",
        315: "Artist",
        33432: "Copyright"
    }, o = {
        0: "GPSVersionID",
        1: "GPSLatitudeRef",
        2: "GPSLatitude",
        3: "GPSLongitudeRef",
        4: "GPSLongitude",
        5: "GPSAltitudeRef",
        6: "GPSAltitude",
        7: "GPSTimeStamp",
        8: "GPSSatellites",
        9: "GPSStatus",
        10: "GPSMeasureMode",
        11: "GPSDOP",
        12: "GPSSpeedRef",
        13: "GPSSpeed",
        14: "GPSTrackRef",
        15: "GPSTrack",
        16: "GPSImgDirectionRef",
        17: "GPSImgDirection",
        18: "GPSMapDatum",
        19: "GPSDestLatitudeRef",
        20: "GPSDestLatitude",
        21: "GPSDestLongitudeRef",
        22: "GPSDestLongitude",
        23: "GPSDestBearingRef",
        24: "GPSDestBearing",
        25: "GPSDestDistanceRef",
        26: "GPSDestDistance",
        27: "GPSProcessingMethod",
        28: "GPSAreaInformation",
        29: "GPSDateStamp",
        30: "GPSDifferential"
    }, p = {
        ExposureProgram: {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        },
        MeteringMode: {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        },
        LightSource: {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        },
        Flash: {
            0: "Flash did not fire",
            1: "Flash fired",
            5: "Strobe return light not detected",
            7: "Strobe return light detected",
            9: "Flash fired, compulsory flash mode",
            13: "Flash fired, compulsory flash mode, return light not detected",
            15: "Flash fired, compulsory flash mode, return light detected",
            16: "Flash did not fire, compulsory flash mode",
            24: "Flash did not fire, auto mode",
            25: "Flash fired, auto mode",
            29: "Flash fired, auto mode, return light not detected",
            31: "Flash fired, auto mode, return light detected",
            32: "No flash function",
            65: "Flash fired, red-eye reduction mode",
            69: "Flash fired, red-eye reduction mode, return light not detected",
            71: "Flash fired, red-eye reduction mode, return light detected",
            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            89: "Flash fired, auto mode, red-eye reduction mode",
            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        },
        SceneCaptureType: {0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene"},
        SceneType: {1: "Directly photographed"},
        CustomRendered: {0: "Normal process", 1: "Custom process"},
        WhiteBalance: {0: "Auto white balance", 1: "Manual white balance"},
        GainControl: {0: "None", 1: "Low gain up", 2: "High gain up", 3: "Low gain down", 4: "High gain down"},
        Contrast: {0: "Normal", 1: "Soft", 2: "Hard"},
        Saturation: {0: "Normal", 1: "Low saturation", 2: "High saturation"},
        Sharpness: {0: "Normal", 1: "Soft", 2: "Hard"},
        SubjectDistanceRange: {0: "Unknown", 1: "Macro", 2: "Close view", 3: "Distant view"},
        FileSource: {3: "DSC"},
        Components: {0: "", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B"}
    };
    return {
        readFromBinaryFile: k,
        pretty: j,
        getTag: h,
        getAllTags: i,
        getData: g,
        Tags: m,
        TiffTags: n,
        GPSTags: o,
        StringValues: p
    }
}();
!function (a) {
    function b(a, b) {
        this.file = a, this.options = d.extend({}, e, b), this._defaults = e, this._name = c, this.init()
    }

    var c = "canvasResize", d = {
        newsize: function (a, b, c, d, e) {
            var f = e ? "h" : "";
            if (c && a > c || d && b > d) {
                var g = a / b;
                (g >= 1 || 0 === d) && c && !e ? (a = c, b = c / g >> 0) : e && c / d >= g ? (a = c, b = c / g >> 0, f = "w") : (a = d * g >> 0, b = d)
            }
            return {width: a, height: b, cropped: f}
        }, dataURLtoBlob: function (a) {
            for (var b = a.split(",")[0].split(":")[1].split(";")[0], c = atob(a.split(",")[1]), d = new ArrayBuffer(c.length), e = new Uint8Array(d), f = 0; f < c.length; f++)e[f] = c.charCodeAt(f);
            var g = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
            return g ? (g = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder), g.append(d), g.getBlob(b)) : g = new Blob([d], {type: b})
        }, detectSubsampling: function (a) {
            var b = a.width, c = a.height;
            if (b * c > 1048576) {
                var d = document.createElement("canvas");
                d.width = d.height = 1;
                var e = d.getContext("2d");
                return e.drawImage(a, -b + 1, 0), 0 === e.getImageData(0, 0, 1, 1).data[3]
            }
            return !1
        }, rotate: function (a, b) {
            var c = {
                1: {90: 6, 180: 3, 270: 8},
                2: {90: 7, 180: 4, 270: 5},
                3: {90: 8, 180: 1, 270: 6},
                4: {90: 5, 180: 2, 270: 7},
                5: {90: 2, 180: 7, 270: 4},
                6: {90: 3, 180: 8, 270: 1},
                7: {90: 4, 180: 5, 270: 2},
                8: {90: 1, 180: 6, 270: 3}
            };
            return c[a][b] ? c[a][b] : a
        }, transformCoordinate: function (a, b, c, d) {
            switch (d) {
                case 5:
                case 6:
                case 7:
                case 8:
                    a.width = c, a.height = b;
                    break;
                default:
                    a.width = b, a.height = c
            }
            var e = a.getContext("2d");
            switch (d) {
                case 1:
                    break;
                case 2:
                    e.translate(b, 0), e.scale(-1, 1);
                    break;
                case 3:
                    e.translate(b, c), e.rotate(Math.PI);
                    break;
                case 4:
                    e.translate(0, c), e.scale(1, -1);
                    break;
                case 5:
                    e.rotate(.5 * Math.PI), e.scale(1, -1);
                    break;
                case 6:
                    e.rotate(.5 * Math.PI), e.translate(0, -c);
                    break;
                case 7:
                    e.rotate(.5 * Math.PI), e.translate(b, -c), e.scale(-1, 1);
                    break;
                case 8:
                    e.rotate(-.5 * Math.PI), e.translate(-b, 0)
            }
        }, detectVerticalSquash: function (a, b, c) {
            var d = document.createElement("canvas");
            d.width = 1, d.height = c;
            var e = d.getContext("2d");
            e.drawImage(a, 0, 0);
            for (var f = e.getImageData(0, 0, 1, c).data, g = 0, h = c, i = c; i > g;) {
                var j = f[4 * (i - 1) + 3];
                0 === j ? h = i : g = i, i = h + g >> 1
            }
            var k = i / c;
            return 0 === k ? 1 : k
        }, callback: function (a) {
            return a
        }, extend: function () {
            var a = arguments[0] || {}, b = 1, c = arguments.length, e = !1;
            a.constructor === Boolean && (e = a, a = arguments[1] || {}), 1 === c && (a = this, b = 0);
            for (var f; c > b; b++)if (null !== (f = arguments[b]))for (var g in f)a !== f[g] && (e && "object" == typeof f[g] && a[g] ? d.extend(a[g], f[g]) : void 0 !== f[g] && (a[g] = f[g]));
            return a
        }
    }, e = {width: 300, height: 0, crop: !1, quality: 80, rotate: 0, callback: d.callback};
    b.prototype = {
        init: function () {
            var a = this, b = this.file, c = new FileReader;
            c.onloadend = function (c) {
                var e = c.target.result, f = atob(e.split(",")[1]), g = new BinaryFile(f, 0, f.length), h = EXIF.readFromBinaryFile(g), i = new Image;
                i.onload = function (c) {
                    var e = h.Orientation || 1;
                    e = d.rotate(e, a.options.rotate);
                    var f = e >= 5 && 8 >= e ? d.newsize(i.height, i.width, a.options.width, a.options.height, a.options.crop) : d.newsize(i.width, i.height, a.options.width, a.options.height, a.options.crop), g = i.width, j = i.height, k = f.width, l = f.height, m = document.createElement("canvas"), n = m.getContext("2d");
                    n.save(), d.transformCoordinate(m, k, l, e), d.detectSubsampling(i) && (g /= 2, j /= 2);
                    var o = 1024, p = document.createElement("canvas");
                    p.width = p.height = o;
                    for (var q = p.getContext("2d"), r = d.detectVerticalSquash(i, g, j), s = 0; j > s;) {
                        for (var t = s + o > j ? j - s : o, u = 0; g > u;) {
                            var v = u + o > g ? g - u : o;
                            q.clearRect(0, 0, o, o), q.drawImage(i, -u, -s);
                            var w = Math.floor(u * k / g), x = Math.ceil(v * k / g), y = Math.floor(s * l / j / r), z = Math.ceil(t * l / j / r);
                            n.drawImage(p, 0, 0, v, t, w, y, x, z), u += o
                        }
                        s += o
                    }
                    n.restore(), p = q = null;
                    var A = document.createElement("canvas");
                    A.width = "h" === f.cropped ? l : k, A.height = "w" === f.cropped ? k : l;
                    var B = "h" === f.cropped ? .5 * (l - k) : 0, C = "w" === f.cropped ? .5 * (k - l) : 0;
                    if (newctx = A.getContext("2d"), newctx.drawImage(m, B, C, k, l), console.log(b, b.type), "image/png" === b.type)var D = A.toDataURL(b.type); else var D = A.toDataURL("image/jpeg", .01 * a.options.quality);
                    a.options.callback(D, A.width, A.height)
                }, i.src = e
            }, c.readAsDataURL(b)
        }
    }, a[c] = function (a, c) {
        return "string" == typeof a ? d[a](c) : void new b(a, c)
    }
}(window);
var Tpl = {};
Tpl.chat = '{@if titleBar}\n<div class="wkit-title">\n    {@if onBack}\n        <img class="wkit-back-trigger" src="https://gw.alicdn.com/tps/TB1NZU0KFXXXXX1XVXXXXXXXXXX-21-36.png" alt="">\n    {@/if}\n    <h1 id="J_wkitTitle">${title}</h1>\n</div>\n{@/if}\n{@if customUrl}\n<div id="J_wkitCustomWrap" class="wkit-custom-wrap">\n    <div class="wkit-custom-box">\n        <div class="wkit-custom-left">\n            <iframe src="${customUrl}" width="100%" frameborder="0"></iframe>\n        </div>\n        <div class="wkit-avatar-wrap">\n            <img src="${avatar}"/>\n        </div>\n    </div>\n    <div id="J_wkitCustomTrigger" class="wkit-custom-trigger"></div>\n</div>\n{@/if}\n<div id="J_wkitMsgContent" class="wkit-msg-content" style="top:${top}rem;"></div>\n<div id="J_wkitInputWrap" class="wkit-input-content">\n    <div class="wkit-soft-input-wrap">\n        <div id="J_wkitEmotTrigger" class="wkit-emot-wrap">\n            <img class="wkit-emot-trigger" src="https://gw.alicdn.com/tps/TB1n_7TKFXXXXbBXVXXXXXXXXXX-50-50.png" alt="">\n        </div>\n        {@if imgUploader}\n        <div class="wkit-img-wrap">\n            <img class="wkit-img-trigger" src="https://gw.alicdn.com/tps/TB1Dgo5KFXXXXa1XFXXXXXXXXXX-50-50.png" />\n            <input id="J_wKitImgUploader" type="file"/>\n        </div>\n        {@/if}\n    </div>\n    <div class="wkit-input-wrap">\n        <input id="J_wkitTextarea" type="text" placeholder="${placeholder}" autofocus="false" />\n        <button id="J_wkitSendBtn">发送</button>\n    </div>\n</div>', Tpl.emot = '<div class="wkit-emot-con" id="J_wkitEmotCon">\n    {@each _ as item, idx}\n        <div class="wkit-emot-wrap wkit-emot-wrap${idx}">\n            {@each item as i, index}\n                <span title="${i}" data-index="${parseInt(index) + (idx*_[0].length)}"></span>\n            {@/each}\n        </div>\n    {@/each}\n</div>\n<div class="wkit-emot-tab" id="J_wkitEmotTab">\n    {@each _ as items, index}\n    <i class="wkit-emot-tab-item{@if index == 0} wkit-active{@/if}" data-index="${index}"></i>\n    {@/each}\n</div>\n', Tpl.msg = '<div class="wkit-msg-wrap ${cls}">\n    <div class="wkit-avatar-wrap">\n        <img class="wkit-avatar" src="${avatar}" />\n    </div>\n    <div class="wkit-msg">\n        <div class="wkit-msg-time"><span>${nick}</span> ${time}</div>\n        <div class="wkit-msg-inner">\n            <i class="wkit-arr"></i>\n            <div class="wkit-msg-item">$${msg}</div>\n        </div>\n    </div>\n</div>', Tpl.style = ".wkit-theme-custom .wkit-title {\nbackground: ${tbgColor};\ncolor: ${tColor};\n}\n.wkit-theme-custom .wkit-s .wkit-msg-item {\nbackground: ${mbgColor};\ncolor: ${mColor};\n}\n.wkit-theme-custom .wkit-s .wkit-msg-item a {\ncolor: ${mColor};\n}\n.wkit-theme-custom .wkit-s .wkit-arr {\nborder-color: ${mbgColor} transparent transparent;\n}\n.wkit-theme-custom .wkit-emot-tab i.wkit-active {\nbackground: ${mbgColor};\nborder-color: ${mbgColor};\n}\n.wkit-theme-custom .wkit-input-wrap button {\nbackground: ${mbgColor};\ncolor: ${mColor};\n}", Tpl.window = '<div id="J_wkitChatWrap" class="wkit-chat-wrap"></div>\n<div id="J_emotContainer" class="wkit-emot-container wkit-hidden"></div>\n', function (a) {
    !window.console && (window.console = {
        log: function () {
        }
    }), String.prototype.trim || (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "")
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
        var c;
        if (null == this)throw new TypeError('"this" is null or not defined');
        var d = Object(this), e = d.length >>> 0;
        if (0 === e)return -1;
        var f = +b || 0;
        if (Math.abs(f) === 1 / 0 && (f = 0), f >= e)return -1;
        for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c;) {
            if (c in d && d[c] === a)return c;
            c++
        }
        return -1
    });
    var b = new RegExp("(http[s]{0,1}|ftp)://[a-zA-Z0-9\\.\\-]+\\.([a-zA-Z]{2,4})(:\\d+)?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "gi"), c = 36e5, d = 24 * c, e = (new Date).getTimezoneOffset() / 60, f = null;
    a.util || (a.util = {}), a.util.getById = function (a) {
        return document.getElementById(a)
    }, a.util.isUrl = function (a) {
        return b.test(a)
    }, a.util.urlReplacer = function (a) {
        return a.replace(b, function (a) {
            return '<a href="' + a + '" target="_blank">' + a + "</a>"
        })
    }, a.util.param = function (a, b, c) {
        var d = "";
        b = b || "=", c = c || "&";
        for (var e in a)d += c + e + b + a[e];
        return d = d.substring(1)
    }, a.util.encodeHtml = function (a) {
        return a = a.replace(/&/g, "&amp;"), a = a.replace(/>/g, "&gt;"), a = a.replace(/</g, "&lt;"), a = a.replace(/"/g, "&quot;"), a = a.replace(/'/g, "&#39;")
    }, a.util.loadStyle = function (a, b, c) {
        var d = null, e = document.createElement("link"), f = a.split("/");
        return f = "wkit-" + f[f.length - 1].split(".").join("-"), this.getById(f) ? void(b && b.call(c)) : (e.rel = "stylesheet", e.href = a, e.id = f, document.getElementsByTagName("head")[0].appendChild(e), e.onload = function () {
            d && clearTimeout(d), b && b.call(c)
        }, void(d = setTimeout(function () {
            b && b.call(c), e.onload = null
        }, 3e3)))
    }, a.util.addStyle = function (a, b) {
        var c = document.createElement("style");
        return c.type = "text/css", c.styleSheet ? c.styleSheet.cssText = b : c.appendChild(document.createTextNode(b)), a.appendChild(c), this
    }, a.util.css = function (a, b) {
        if (!a || !b)return this;
        var c = this.param(b, ":", ";");
        return c && (a.style.cssText += ";" + c), this
    }, a.util.addClass = function (a, b) {
        return a && b ? (b = b.trim(), a.classList ? b.split(/\s+/).forEach(function (b) {
            a.classList.add(b)
        }) : this.hasClass(a, b) || (a.className += " " + b), this) : this
    }, a.util.removeClass = function (a, b) {
        if (!a || !b)return this;
        if (b = b.trim(), a.classList)b.split(/\s+/).forEach(function (b) {
            a.classList.remove(b)
        }); else {
            var c = a.className;
            c = (" " + c + " ").replace(" " + b + " ", "").trim(), a.className = c
        }
        return this
    }, a.util.hasClass = function (a, b) {
        return a && b ? (b = b.trim(), a.classList ? a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1) : !1
    }, a.util.dateFormatter = function (a) {
        var b, f, g, h, i, j, k = new Date(a), l = new Date, m = +k, n = +l - (+l - e * c) % d;
        return b = k.getFullYear(), f = this.numFormatter(k.getMonth() + 1), g = this.numFormatter(k.getDate()), h = this.numFormatter(k.getHours()), i = this.numFormatter(k.getMinutes()), j = this.numFormatter(k.getSeconds()), l.getFullYear() == b ? m >= n && n + d > m ? "今天 " + h + ":" + i + ":" + j : f + "-" + g + " " + h + ":" + i + ":" + j : b + "-" + f + "-" + g + " " + h + ":" + i + ":" + j
    }, a.util.numFormatter = function (a) {
        return a = parseInt(a), a > 9 ? a : "0" + a
    }, a.util.toast = function (a, b, c, d) {
        var e = document.getElementById("J_WkitToast");
        b || (b = document.body), e ? (f && clearTimeout(f), e.getElementsByTagName("span")[0].innerHTML = a) : (e = document.createElement("div"), e.id = "J_WkitToast", e.className = "wkit-toast", e.innerHTML = "<span>" + a + "</span>", c && (e.style.bottom = c + "px"), b.appendChild(e)), f = setTimeout(function () {
            e && e.parentNode && e.parentNode.removeChild(e), f = null
        }, d || 3e3)
    }, a.util.getSmallImageUrl = function (a, b) {
        var c = this.unparam(a.split("?")[1]), d = a;
        if (c.width && c.height) {
            var e = c.width / c.height;
            c.width > b && (c.thumb_width = b, c.thumb_height = parseInt(c.thumb_width / e)), d = a.split("?")[0] + "?" + this.param(c)
        }
        return d
    }, a.util.getImgOriginSize = function (a) {
        var b = this.unparam(a.split("?")[1]);
        return b.width && b.height ? b : null
    }, a.util.throttle = function (a, b, c, d) {
        var e, f = null, g = +new Date;
        return function () {
            var h = +new Date;
            e = arguments, h - g >= b ? (f && (clearTimeout(f), f = null), g = h, a.apply(d, e), f || (e = null)) : f || (f = setTimeout(function () {
                g = h, f = null, a.apply(d, e), f || (e = null)
            }, c || 500))
        }
    }
}(window.WKIT || (window.WKIT = {})), function (a) {
    var b = null;
    a.Conn = {
        loginPending: !1,
        historyPending: !1,
        isNeedReLogin: !1,
        isNeedReSendCustomData: !0,
        nocache: !1,
        reLoginCount: 0,
        lastReloginTime: 0,
        init: function (a) {
            if (!(a && a.uid && a.appkey && a.credential && a.touid))throw new Error('传入的参数必须包含以下字段{uid: "", appkey: "", credential: "", touid: ""}');
            return this.opts = a, this.sdk || (a.debug ? this.sdk = new WSDK({
                debug: !0,
                env: a.debug.env,
                domain: a.debug.domain
            }) : this.sdk = new WSDK), this.login(), this.events(), this
        },
        events: function () {
            window.addEventListener ? window.addEventListener("focus", this.focusHandler, !1) : window.attachEvent && window.attachEvent("onfocus", this.focusHandler);
        },
        focusHandler: function () {
            a.Conn.isNeedReLogin && a.Conn.reLogin()
        },
        reLogin: function () {
            if (!(this.reLoginCount > 4)) {
                var a = +new Date;
                a - this.lastReloginTime < 3e3 ? this.reLoginCount++ : this.reLoginCount = 0, this.lastReloginTime = a, this.opts.onReLogin && this.opts.onReLogin.call(this.opts.context), this.historyPending = !1, this.login(), this.isNeedReLogin = !1
            }
        },
        login: function () {
            if (!this.loginPending) {
                this.loginPending = !0;
                var a = this, b = this.opts, c = b.onLoginSuccess, d = b.onLoginError;
                this.opts.subTouid = b.uid, b.success = function () {
                    a.loginPending = !1, c && c.call(b.context, a.sdk.LoginInfo), b.onChatMsgReceived && a.listen(), a.history()
                }, b.error = function (c) {
                    a.loginPending = !1, d && d.call(b.context, c)
                }, this.sdk.Base.login(b)
            }
        },
        getRealCid: function (a, b) {
            var c = this, d = this.opts;
            this.sdk.Chat.getRealChatId({
                touid: d.touid, groupid: d.groupId, success: function (b) {
                    c.opts.subTouid = b.data, a && a()
                }, error: function () {
                    b && b()
                }
            })
        },
        listen: function () {
            if (!this.isListened) {
                this.isListened = !0;
                var a = this, c = this.opts, d = c.context, e = c.onChatMsgReceived, f = (this.sdk.LoginInfo.toPrefix, this.sdk.LoginInfo.prefix + this.opts.uid);
                this.sdk.Event.on("START_RECEIVE_ALL_MSG", function (c) {
                    var g = a.opts.touid;
                    1e3 == c.code ? c && c.data && c.data.uid == f && c.data.touid.split(":")[0].substr(8) == g.split(":")[0] && (a.opts.sendMsgToCustomService && c.data.touid != a.opts.subTouid && (a.opts.subTouid = c.data.touid, a.nocache = !0, a.opts.groupid = "", a.opts.touid = c.data.touid.split(":")[0].substr(8)), e.call(d, c)) : (1001 == c.code || 1006 == c.code) && (a.isNeedReLogin = !0, a.isNeedReSendCustomData = !0, "undefined" != typeof document.hidden && (document.hidden || (b && clearTimeout(b), b = setTimeout(function () {
                        a.reLogin()
                    }, 1e3))))
                })
            }
            this.sdk.Base.startListenAllMsg()
        },
        history: function (a) {
            if (!this.historyPending) {
                this.historyPending = !0;
                var b = this, c = this.opts, d = c.touid;
                c.sendMsgToCustomService ? d = ("cntaobao" + d).split(":")[0] : c.hasPrefix && (d = this.sdk.LoginInfo.toPrefix + d), this.sdk.Chat.getHistory({
                    touid: d,
                    nextkey: a || "",
                    hasPrefix: c.sendMsgToCustomService ? !0 : !!c.hasPrefix,
                    count: 20,
                    success: function (a) {
                        a && 1e3 == a.code && c.onHistoryMsgReceived.call(c.context, a), b.historyPending = !1
                    },
                    error: function () {
                        b.historyPending = !1
                    }
                })
            }
        },
        send: function (a) {
            return "undefined" == typeof a.msgType && (a.msgType = 0), a.doNotSend ? void this.sendMsgSuccessHandler(a) : void(this.opts.sendMsgToCustomService ? (this.opts.customData && this.isNeedReSendCustomData && this.sendCustomData(), this.sendServiceMsg(a)) : this.sendMsg(a))
        },
        sendMsg: function (a) {
            var b = this, c = this.opts, d = c.hasPrefix ? this.sdk.LoginInfo.toPrefix + c.touid : c.touid;
            this.sdk.Chat.sendMsg({
                touid: d,
                msg: a.msg,
                msgType: a.msgType,
                hasPrefix: !!c.hasPrefix,
                success: function (c) {
                    c && 1e3 == c.code && b.sendMsgSuccessHandler(a)
                },
                error: function (c) {
                    b.sendMsgErrorHandler(c, a)
                }
            })
        },
        sendServiceMsg: function (a) {
            var b = this, c = this.opts;
            this.sdk.Chat.sendMsgToCustomService({
                touid: c.touid,
                msg: a.msg,
                msgType: a.msgType,
                groupid: c.groupid,
                nocache: this.nocache,
                success: function (c) {
                    c && 1e3 == c.code && b.sendMsgSuccessHandler(a)
                },
                error: function (c) {
                    b.sendMsgErrorHandler(c, a)
                }
            }), b.nocache = !1
        },
        sendCustomData: function () {
            var a = this.opts;
            this.isNeedReSendCustomData = !1, this.sdk.Chat.sendCustomData({
                touid: a.touid,
                customData: a.customData,
                groupid: a.groupid,
                sendMsgToCustomService: !0
            })
        },
        sendMsgSuccessHandler: function (a) {
            this.opts.onMsgSent && this.opts.onMsgSent.call(this.opts.context, !1, this.formatMsgData(a))
        },
        sendMsgErrorHandler: function (a, b) {
            this.opts.onMsgSent && this.opts.onMsgSent.call(this.opts.context, a, this.formatMsgData(b))
        },
        formatMsgData: function (a) {
            if (!a)return {};
            var b = this.opts, c = this.sdk.LoginInfo, d = (c.toPrefix || "") + b.touid, e = (c.prefix || "") + b.uid;
            return {
                msg: 1 != a.msgType ? a.msg : a.base64Img || a.msg,
                type: a.msgType,
                id: a.id,
                to: a.doNotSend ? e : d,
                from: a.doNotSend ? d : e,
                time: +new Date,
                val: a.val
            }
        },
        switchTouid: function (a) {
            a.hasPrefix ? (this.sdk.LoginInfo.toPrefix = a.touid.substring(0, 8), this.opts.touid = a.touid.substr(8)) : this.opts.touid = a.touid, this.opts.hasPrefix = !!a.hasPrefix, this.opts.groupid = a.groupid, this.opts.sendMsgToCustomService = a.sendMsgToCustomService, this.historyPending = !1, this.history()
        },
        destroy: function () {
            this.historyPending = !1, this.sdk.Event.off("START_RECEIVE_ALL_MSG"), window.addEventListener ? window.removeEventListener("focus", this.focusHandler) : window.attachEvent && window.detachEvent("onfocus", this.focusHandler), this.sdk.Base.unlogin()
        }
    }
}(window.WKIT || (window.WKIT = {})), function (a) {
    a.Plugin = {
        init: function (a) {
            a.pluginUrl && this.render(a)
        }, render: function (b) {
            a.UI.Plugin.render(b)
        }, destroy: function () {
            a.UI.Plugin && a.UI.Plugin.destroy()
        }
    }
}(window.WKIT || (window.WKIT = {})), function (a) {
    var b = a.util, c = "https://img.alicdn.com/tps/TB13eM.JpXXXXcoXFXXXXXXXXXX-1099-1024.png_20x20.jpg";
    a.Chat = {
        historyCount: 0,
        historyPending: !1,
        isBottom: !0,
        reLoginCount: 0,
        isReLogin: !1,
        welcomeMsgSent: !1,
        init: function (b) {
            this.opts = b;
            var c = "";
            b.customData && ("object" == typeof b.customData.order && (c += "&$bizOrder.itemID:" + b.customData.order.id), "object" == typeof b.customData.item && (c += "&itemsId=" + b.customData.item.id), b.customData = c.substr(1)), this.sdkOpts = {
                uid: b.uid,
                touid: b.touid,
                appkey: b.appkey,
                credential: b.credential,
                sendMsgToCustomService: b.sendMsgToCustomService,
                groupid: b.groupId,
                onLoginSuccess: this.onLoginSuccess,
                onLoginError: this.onLoginError,
                onHistoryMsgReceived: this.onHistoryMsgReceived,
                onChatMsgReceived: this.onChatMsgReceived,
                onMsgSent: this.onMsgSent,
                onReLogin: this.onReLogin,
                context: this,
                customData: b.customData,
                debug: b.debug
            }, this.render(), this.toast("正在登录...", 1e4), this.C = a.Conn.init(this.sdkOpts)
        },
        render: function () {
            var c = this.opts;
            this.UIOpts = b.merge(c, {wrap: c.wrap, context: this}), this.UI = a.UI.Chat.render(this.UIOpts)
        },
        onLoginSuccess: function (a) {
            var b = this;
            this.isReLogin || (this.loginInfo = a, this.toast("登录成功, 可以发送消息啦~"), this.msgTpl = juicer(Tpl.msg), setTimeout(function () {
                b.opts.onLoginSuccess && b.opts.onLoginSuccess(a)
            }, 100)), setTimeout(function () {
                this.historyPending = !1
            }, 100), this.opts.welcomeMsg && !this.welcomeMsgSent && (this.opts.welcomeMsg && this.sendMsg({
                doNotSend: !0,
                msg: this.opts.welcomeMsg
            }), this.welcomeMsgSent = !0)
        },
        onLoginError: function (a) {
            this.toast(a.resultText || "登录失败啦, 请重试"), this.opts.onLoginError && this.opts.onLoginError(a)
        },
        sendMsg: function (a) {
            this.C.send(a)
        },
        onMsgSent: function (a, b) {
            a ? 1001 == a.code && this.reLoginCount <= 3 ? this.C.login(this.sdkOpts) : this.toast("消息发送失败, 请重试") : (this.renderChatMsg([b]), this.UI.textarea.value = "", this.opts.onMsgSent && this.opts.onMsgSent({msgs: [b]}))
        },
        onChatMsgReceived: function (a) {
            this.renderChatMsg(a.data.msgs), this.opts.onMsgReceived && this.opts.onMsgReceived(a.data)
        },
        history: function () {
            this.isDisabledScroll && this.UI.setScrollStatus(!0), this.historyPending || this.nextKey !== !1 && (this.historyPending = !0, this.C.history(this.nextKey))
        },
        switchTouid: function (a) {
            this.isDisabledScroll = !0, this.UI.setScrollStatus(!1), this.UI.msgContent.innerHTML = "", this.nextKey = "", this.historyPending = !1, this.isBottom = !0;
            var b = a.touid;
            a.hasPrefix && (b = a.touid.substr(8)), this.opts.toAvatar = a.toAvatar, !this.opts.title && document.getElementById("J_wkitTitle") && (document.getElementById("J_wkitTitle").innerText = b), this.C.switchTouid(a)
        },
        onHistoryMsgReceived: function (a) {
            this.isDisabledScroll && this.UI.setScrollStatus(!0);
            var b = a.data.msgs;
            b.reverse(), this.nextKey = a.data.nextKey || !1, this.historyCount++, this.renderHistoryMsg(b), this.opts.autoMsg && (this.sendMsg({
                msg: this.opts.autoMsg,
                msgType: this.opts.autoMsgType || 0
            }), this.opts.autoMsg = ""), this.historyPending = !1
        },
        uploadImg: function (a) {
            var d, e = this, f = this.opts, g = +new Date;
            return a ? (d = a.type ? {
                base64Img: a.base64Img,
                ext: a.ext
            } : {target: a.target}, a.maxSize && (d.maxSize = a.maxSize), this.renderChatMsg([{
                msg: c,
                id: g,
                type: 1,
                time: g,
                to: this.loginInfo.toPrefix + f.touid,
                from: this.loginInfo.prefix + f.uid
            }]), d.success = function (b) {
                e.sendMsg({
                    msg: b.data.url,
                    msgType: 1,
                    id: g,
                    base64Img: b.data.base64Img
                }), 1 !== a.type && e.updateUploader(a.target, e), e.opts.onUploaderSuccess && e.opts.onUploaderSuccess(b.data.url)
            }, d.error = function (c) {
                c && c.code ? e.toast("图片太大了,最多2M") : e.toast("发送图片失败...");
                var d = b.getById("MSG_" + g);
                d && d.parentNode.removeChild(d), 1 !== a.type && e.updateUploader(a.target, e), e.opts.onUploaderError && e.opts.onUploaderError(c)
            }, void this.C.sdk.Plugin.Image.upload(d)) : (f.onUploaderError && f.onUploaderError(), !1)
        },
        updateUploader: function (a, b) {
            if (a) {
                var c = a.parentNode, d = document.createElement("input");
                a.onchange = null, c.removeChild(a), d.type = "file", d.id = "J_wKitImgUploader", c.appendChild(d), b.UI.changeHandler ? b.UI.changeHandler(d, b.UIOpts) : d.onchange = function () {
                    b.uploadImg({type: 0, target: this})
                }
            }
        },
        onReLogin: function () {
            this.isReLogin = !0, this.historyPending = !0, this.UI.msgContent.innerHTML = "", this.historyCount = 0, this.nextKey = "", this.isBottom = !0
        },
        renderHistoryMsg: function (a) {
            var b = this.getMsgTpl(a);
            if (b) {
                var c = this.UI.msgContent;
                c.insertBefore(b, c.firstChild || null), this.historyPending && (c.scrollTop = c.scrollHeight / this.historyCount), this.scrollToBottom(), this.imgLoadToBottom(b)
            }
        },
        renderChatMsg: function (a) {
            var b = this.getMsgTpl(a);
            b && (this.UI.msgContent.appendChild(b), this.scrollToBottom(), this.imgLoadToBottom(b))
        },
        getMsgTpl: function (a) {
            var c, d, e, f, g, h = this, i = this.opts, j = this.UI.Emot, k = this.loginInfo.prefix + this.loginInfo.uid, l = document.createElement("div"), m = i.avatar, n = i.toAvatar, o = !1, p = "", q = !1, r = "";
            return a.forEach(function (a) {
                if (q = a.from === k, d = q ? "wkit-s" : "wkit-r", e = q ? m : n, 0 == a.type)try {
                    r = "string" == typeof a.val ? j.htmlEncode(a.val) : a.msg, r = b.urlReplacer(r), r = j.decode(r)
                } catch (l) {
                    r = ""
                } else if (1 == a.type || 4 == a.type)a.id && (f = b.getById(a.id)) ? (o = !0, f.src = a.msg) : (a.id && (c = a.id), g = b.getSmallImageUrl(a.msg, i.iWidth), r = "<img " + (a.id ? 'id="' + a.id + '"' : "") + 'src="' + g + '" />'); else if (66 == a.type)r = a.msg.customize; else if (2 == a.type)if (i.onAudioReceived)try {
                    r = i.onAudioReceived(a.msg)
                } catch (l) {
                    r = ""
                } else r = ""; else r = "";
                r.trim() && (p += h.msgTpl.render({
                    msg: r,
                    avatar: e,
                    time: b.dateFormatter(a.time),
                    cls: d,
                    nick: !q && a.from.split(":")[1] ? a.from.split(":")[1] : ""
                }))
            }), o ? null : (c && (l.id = "MSG_" + c), b.addClass(l, "wkit-clear"), l.innerHTML = p, l)
        },
        scrollStatusChange: function (a) {
            this.isBottom = a
        },
        scrollToBottom: function (a) {
            (a || this.isBottom) && (this.UI.msgContent.scrollTop = this.UI.msgContent.scrollHeight)
        },
        imgLoadToBottom: function (a) {
            if (!this.historyPending && a) {
                var d = this, e = a.getElementsByTagName("img"), f = e.length;
                if (f)for (var g = 0; f > g; g++)b.hasClass(e[g], "wkit-avatar") || (e[g].onload = function () {
                    this.src !== c && (this.onload = null), d.scrollToBottom(!0)
                })
            }
        },
        toast: function (a, c) {
            b.toast(a, this.opts.container, (this.UI.wh && this.UI.wh.inputHeight || this.UI.inputHeight || 300) + 50, c)
        },
        destroy: function () {
            this.C.destroy(), this.UI.destroy()
        }
    }
}(window.WKIT || (window.WKIT = {})), function (a) {
    var b = "https://g.alicdn.com/aliww/h5-openim/0.0.1/faces/", c = ["加油", "色情狂", "委屈", "悲泣", "飞机", "生病", "不会吧", "痛哭", "怀疑", "花痴", "偷笑", "握手", "玫瑰", "享受", "对不起", "感冒", "凄凉", "困了", "尴尬", "生气", "残花", "电话", "害羞", "流口水", "皱眉", "鼓掌", "迷惑", "忧伤", "时钟", "大笑", "邪恶", "单挑", "大哭", "隐形人", "CS", "I服了U", "欠扁", "炸弹", "惊声尖叫", "微笑", "钱", "购物", "好累", "嘘", "成交", "红唇", "招财猫", "抱抱", "好主意", "很晚了", "收邮件", "举杯庆祝", "疑问", "惊讶", "露齿笑", "天使", "呼叫", "闭嘴", "小样", "跳舞", "无奈", "查找", "大怒", "算帐", "爱慕", "再见", "恭喜发财", "强", "胜利", "财迷", "思考", "晕", "流汗", "爱心", "摇头", "背", "没钱了", "惊愕", "小二", "支付宝", "鄙视你", "吐舌头", "鬼脸", "财神", "等待", "傻笑", "学习雷锋", "心碎", "吐", "漂亮MM", "亲亲", "飞吻", "帅哥", "礼物", "无聊", "呆若木鸡", "再见", "老大", "安慰"], d = [{
        title: "加油",
        img: "10",
        code: "/:012"
    }, {title: "色情狂", img: "26", code: "/:015"}, {title: "委屈", img: "47", code: "/:>_<"}, {
        title: "悲泣",
        img: "48",
        code: "/:018"
    }, {title: "飞机", img: "97", code: "/:plane"}, {title: "生病", img: "56", code: "/:>M<"}, {
        title: "不会吧",
        img: "40",
        code: "/:816"
    }, {title: "痛哭", img: "50", code: "/:020"}, {title: "怀疑", img: "33", code: "/:817"}, {
        title: "花痴",
        img: "14",
        code: "/:814"
    }, {title: "偷笑", img: "3", code: "/:815"}, {title: "握手", img: "82", code: "/:)-("}, {
        title: "玫瑰",
        img: "84",
        code: "/:-F"
    }, {title: "享受", img: "25", code: "/:818"}, {title: "对不起", img: "52", code: "/:819"}, {
        title: "感冒",
        img: "37",
        code: "/:028"
    }, {title: "凄凉", img: "43", code: "/:027"}, {title: "困了", img: "44", code: "/:(Zz...)"}, {
        title: "尴尬",
        img: "38",
        code: "/:026"
    }, {title: "生气", img: "65", code: "/:>W<"}, {title: "残花", img: "85", code: "/:-W"}, {
        title: "电话",
        img: "92",
        code: "/:~B"
    }, {title: "害羞", img: "1", code: "/:^$^"}, {title: "流口水", img: "24", code: "/:813"}, {
        title: "皱眉",
        img: "54",
        code: "/:812"
    }, {title: "鼓掌", img: "81", code: "/:8*8"}, {title: "迷惑", img: "29", code: "/:811"}, {
        title: "忧伤",
        img: "46",
        code: "/:810"
    }, {title: "时钟", img: "94", code: "/:clock"}, {title: "大笑", img: "5", code: "/:^O^"}, {
        title: "邪恶",
        img: "71",
        code: "/:036"
    }, {title: "单挑", img: "72", code: "/:039"}, {title: "大哭", img: "49", code: "/:>O<"}, {
        title: "隐形人",
        img: "74",
        code: "/:046"
    }, {title: "CS", img: "73", code: "/:045"}, {title: "I服了U", img: "51", code: "/:044"}, {
        title: "欠扁",
        img: "62",
        code: "/:043"
    }, {title: "炸弹", img: "75", code: "/:048"}, {title: "惊声尖叫", img: "76", code: "/:047"}, {
        title: "微笑",
        img: "0",
        code: "/:^_^"
    }, {title: "钱", img: "88", code: "/:$"}, {title: "购物", img: "89", code: "/:%"}, {
        title: "好累",
        img: "55",
        code: '/:"'
    }, {title: "嘘", img: "34", code: "/:!"}, {title: "成交", img: "80", code: "/:(OK)"}, {
        title: "红唇",
        img: "83",
        code: "/:lip"
    }, {title: "招财猫", img: "79", code: "/:052"}, {title: "抱抱", img: "9", code: "/:H"}, {
        title: "好主意",
        img: "20",
        code: "/:071"
    }, {title: "很晚了", img: "96", code: "/:C"}, {title: "收邮件", img: "91", code: "/:@"}, {
        title: "举杯庆祝",
        img: "93",
        code: "/:U*U"
    }, {title: "疑问", img: "30", code: "/:?"}, {title: "惊讶", img: "59", code: "/:069"}, {
        title: "露齿笑",
        img: "15",
        code: "/:^W^"
    }, {title: "天使", img: "22", code: "/:065"}, {title: "呼叫", img: "17", code: "/:066"}, {
        title: "闭嘴",
        img: "61",
        code: "/:067"
    }, {title: "小样", img: "35", code: "/:068"}, {title: "跳舞", img: "6", code: "/:081"}, {
        title: "无奈",
        img: "41",
        code: '/:\'""'
    }, {title: "查找", img: "16", code: "/:080"}, {title: "大怒", img: "64", code: "/:808"}, {
        title: "算帐",
        img: "18",
        code: "/:807"
    }, {title: "爱慕", img: "4", code: "/:809"}, {title: "再见", img: "23", code: "/:804"}, {
        title: "恭喜发财",
        img: "68",
        code: "/:803"
    }, {title: "强", img: "12", code: "/:b"}, {title: "胜利", img: "11", code: "/:806"}, {
        title: "财迷",
        img: "19",
        code: "/:805"
    }, {title: "思考", img: "28", code: "/:801"}, {title: "晕", img: "45", code: "/:*&*"}, {
        title: "流汗",
        img: "42",
        code: "/:802"
    }, {title: "爱心", img: "86", code: "/:Y"}, {title: "摇头", img: "36", code: "/:079"}, {
        title: "背",
        img: "58",
        code: "/:076"
    }, {title: "没钱了", img: "31", code: "/:077"}, {title: "老大", img: "70", code: "/:O=O"}, {
        title: "小二",
        img: "69",
        code: "/:074"
    }, {title: "支付宝", img: "98", code: "/:075"}, {title: "鄙视你", img: "63", code: "/:P"}, {
        title: "吐舌头",
        img: "2",
        code: "/:Q"
    }, {title: "鬼脸", img: "21", code: "/:072"}, {title: "财神", img: "66", code: "/:073"}, {
        title: "等待",
        img: "95",
        code: "/:R"
    }, {title: "傻笑", img: "39", code: "/:007"}, {title: "学习雷锋", img: "67", code: "/:008"}, {
        title: "心碎",
        img: "87",
        code: "/:qp"
    }, {title: "吐", img: "57", code: "/:>@<"}, {title: "漂亮MM", img: "77", code: "/:girl"}, {
        title: "亲亲",
        img: "13",
        code: "/:^x^"
    }, {title: "飞吻", img: "7", code: "/:087"}, {title: "帅哥", img: "78", code: "/:man"}, {
        title: "礼物",
        img: "90",
        code: "/:(&)"
    }, {title: "无聊", img: "32", code: "/:083"}, {title: "呆若木鸡", img: "27", code: "/:084"}, {
        title: "再见",
        img: "53",
        code: "/:085"
    }, {title: "惊愕", img: "60", code: "/:O"}, {title: "安慰", img: "8", code: "/:086"}];
    Util = a.util, a.Emot = {
        isShow: !1, isShowing: !1, refreshed: !1, init: function (a) {
            return a && a.container ? (this.isMobile = Util.isMobile(), this.opts = a, this.render(), this) : void 0
        }, render: function () {
            var b = this.opts.container, c = this.sliceEmot();
            b.innerHTML = juicer(Tpl.emot, c), this.con = Util.getById("J_wkitEmotCon"), this.cons = this.con.getElementsByTagName("div"), this.tab = Util.getById("J_wkitEmotTab"), this.tabs = this.tab.getElementsByTagName("i"), this.UI = a.UI.Emot.init(this), this.events()
        }, sliceEmot: function () {
            var a = 21, b = [], d = 0, e = 0;
            return c.forEach(function (c, f) {
                d == a && (d = 0), 0 == d && (b[e++] = []), a > d && (d++, b[e - 1].push(c))
            }), b
        }, events: function () {
            var a = this, b = this.opts, d = 0;
            b.container.onclick = function (e) {
                e = e || window.event;
                var f = e.target || e.srcElement;
                if (!(a.isMobile && a.isShowing || "SPAN" != f.tagName.toUpperCase())) {
                    var g = +new Date;
                    if (500 > g - d)return;
                    d = g;
                    var h = f.getAttribute("data-index"), i = c[h];
                    i && b.context && b.context.onEmotClick("[" + i + "]")
                }
            }
        }, show: function () {
            if (!this.isShow) {
                var a = this;
                this.isShow = !0, this.isShowing = !0, Util.removeClass(this.opts.container, "wkit-hidden"), this.UI.scroller && !this.refreshed && (this.UI.scroller.refresh(), this.refreshed = !0), setTimeout(function () {
                    a.isShowing = !1
                }, 500)
            }
        }, hide: function () {
            this.isShow && (Util.addClass(this.opts.container, "wkit-hidden"), this.isShow = !1)
        }, splitEmot: function (a) {
            return a = a.replace(/\[([A-Z\u4e00-\u9fa5]{1,20}?)\]/gi, "@#[$1]@#"), a.split("@#")
        }, isEmotLike: function (a) {
            return /\[([A-Z\u4e00-\u9fa5]{1,20}?)\]/gi.test(a)
        }, isEmot: function (a) {
            for (var b = a.replace("[", "").replace("]", ""), c = !1, e = 0, f = d.length; f > e; e++)if (d[e].title == b) {
                c = d[e].code;
                break
            }
            return c
        }, htmlEncode: function (a) {
            var b, c = this, d = "";
            return a = this.splitEmot(a), a.forEach(function (a) {
                d += c.isEmotLike(a) && (b = c.isEmot(a)) ? b : Util.encodeHtml(a)
            }), d
        }, encode: function (a) {
            var b, c = this, d = "";
            return a = this.splitEmot(a), a.forEach(function (a) {
                d += c.isEmotLike(a) && (b = c.isEmot(a)) ? b : a
            }), d
        }, decode: function () {
            var a = "", c = d.length;
            return d.forEach(function (b) {
                a += "|" + b.code.substring(2)
            }), a = a.substring(1), a = a.replace(/([\^?()\.\*\$])/g, "\\$1"), a = new RegExp("/:(" + a + ")", "g"), function (e) {
                return e && (e = e.replace(a, function (a) {
                    for (var e = !1, f = "", g = 0; c > g; g++)if (d[g].code == a) {
                        e = d[g].img, f = d[g].title;
                        break
                    }
                    if (e) {
                        var h = parseInt(e) + 1;
                        h = 10 > h ? "0" + h : h, h = "s0" + h + ".png", a = '<img class="wkit-emot" src="' + b + h + '" alt="' + f + '" />'
                    }
                    return a
                })), e
            }
        }(), destroy: function () {
            this.UI.destroy(), this.opts.container.onclick = null
        }
    }
}(window.WKIT || (window.WKIT = {})), function (a) {
    a.UI || (a.UI = {});
    var b = a.util;
    a.UI.Window = {
        render: function (a) {
            this.opts = a;
            var c = a.container, d = document.createElement("div"), e = Tpl.window, f = "wkit-theme-default";
            return a.themeBgColor && (this.setCustomStyle(), a.theme = "", f = "wkit-theme-custom"), a.theme && (f = "wkit-theme-" + a.theme), d.id = "wkit-content", b.addClass(d, f), d.innerHTML = e, c.appendChild(d), this.innerCon = d, this.chatWrap = b.getById("J_wkitChatWrap"), this
        }, setCustomStyle: function () {
            var a = this.opts, c = juicer(Tpl.style, {
                tbgColor: a.themeBgColor,
                tColor: a.themeColor || "#fff",
                mbgColor: a.msgBgColor || a.themeBgColor,
                mColor: a.msgColor || a.themeColor || "#4a4a4a"
            });
            b.addStyle(a.container, c)
        }, destroy: function () {
            this.innerCon.parentNode.removeChild(this.innerCon)
        }
    }
}(window.WKIT || (window.WKIT = {})), function (a) {
    function b(a, b) {
        var c = !1, d = null, e = 0, f = 0, g = 0, h = 0;
        a.addEventListener("touchstart", function (a) {
            if (!d) {
                c = !0;
                var b = a.touches[0];
                b && (e = b.clientX, f = b.clientY)
            }
        }, !1), a.addEventListener("touchmove", function (a) {
            var b = a.touches[0];
            return b ? (g = b.clientX, h = b.clientY, void((Math.abs(g - e) > 2 || Math.abs(h - f) > 2) && (c = !1))) : void(c = !1)
        }, !1), a.addEventListener("touchend", function (a) {
            c && (c = !1, d = setTimeout(function () {
                d = null
            }, 500), b && b.call(this, a))
        }, !1)
    }

    a.UI || (a.UI = {});
    var c = a.util, d = navigator.userAgent, e = d.indexOf("HUAWEI MT7-TL10") > -1;
    a.UI.Chat = {
        customConFold: !1,
        isBottom: !0,
        isInputFocus: !1,
        msgContentHeight: 0,
        isScrollOn: !0,
        render: function (a) {
            this.opts = a;
            var b = a.container, d = a.titleBar ? 2 : 0;
            return a.customUrl && (d += 3.5), b.innerHTML = juicer(Tpl.chat, {
                titleBar: a.titleBar,
                onBack: a.onBack,
                title: a.title || a.touid,
                placeholder: a.placeholder,
                customUrl: a.customUrl,
                avatar: a.toAvatar,
                imgUploader: a.imgUploader,
                top: d
            }), this.msgContent = c.getById("J_wkitMsgContent"), this.emotContainer = c.getById("J_emotContainer"), this.emotTrigger = c.getById("J_wkitEmotTrigger"), this.textarea = c.getById("J_wkitTextarea"), this.sendBtn = c.getById("J_wkitSendBtn"), this.customToggleTrigger = c.getById("J_wkitCustomTrigger"), this.customContent = document.getElementById("J_wkitCustomWrap"), this.imgUploader = document.getElementById("J_wKitImgUploader"), this.inputHeight = 50, this.initEmot(), this.events(), this
        },
        initEmot: function () {
            this.Emot = a.Emot.init({container: this.emotContainer, context: this})
        },
        onEmotClick: function (a) {
            this.textarea.value += a
        },
        toggleEmot: function () {
            this.isInputFocus || (this.Emot.isShow ? this.hideEmot() : this.showEmot())
        },
        showEmot: function () {
            c.css(this.opts.container, {bottom: "7.5rem"}), this.Emot.show(), this.clearMsgContentHeight(), this.isBottom && this.opts.context && this.opts.context.scrollToBottom && this.opts.context.scrollToBottom.call(this.opts.context, !0)
        },
        hideEmot: function () {
            c.css(this.opts.container, {bottom: "0px"}), this.clearMsgContentHeight(), this.Emot.hide()
        },
        clearMsgContentHeight: function () {
            this.msgContentHeight = 0
        },
        toggleCustom: function () {
            if (this.isBottom) {
                var a = this;
                setTimeout(function () {
                    a.opts.context.scrollToBottom(!0)
                }, 1)
            }
            this.customConFold ? (c.css(this.msgContent, {top: "5.5rem"}), this.msgContentHeight = 0, c.removeClass(this.customContent, "wkit-fold")) : (c.css(this.msgContent, {top: "2rem"}), this.msgContentHeight = 0, c.addClass(this.customContent, "wkit-fold")), this.customConFold = !this.customConFold
        },
        events: function () {
            var a = this, d = this.opts, e = d.context;
            b(this.emotTrigger, function (b) {
                return a.toggleEmot(), b.stopPropagation(), !1
            }), this.textarea.onkeydown = function (b) {
                if (b = b || window.event, 13 == b.keyCode) {
                    var c = this.value;
                    if (!c.trim())return;
                    var d = a.Emot.encode(c);
                    return e.sendMsg({msg: d, val: c}), !1
                }
            }, d.isAndroid && (this.textarea.onclick = function () {
                a.focusInput(), a.textarea.onclick = null
            }), this.textarea.onfocus = function (b) {
                a.textarea.onclick = null, a.focusInput()
            }, this.textarea.onblur = function () {
                a.blurInput()
            }, this.sendBtn.onclick = function () {
                var b = a.textarea.value;
                if (b.trim()) {
                    var c = a.Emot.encode(b);
                    return e.sendMsg({msg: c, val: b}), !1
                }
            }, this.msgContent.onscroll = function () {
                if (a.isScrollOn) {
                    var b = this.scrollTop;
                    a.msgContentHeight || (a.msgContentHeight = a.msgContent.clientHeight);
                    var c = this.scrollHeight <= b + a.msgContentHeight + 1;
                    a.isBottom !== c && (a.isBottom = c, e.scrollStatusChange(c)), 100 >= b && e.history()
                }
            }, d.customUrl && b(this.customToggleTrigger, function (b) {
                a.toggleCustom(), b.preventDefault()
            }), d.imgUploader && (d.beforeImageUploaderTrigger ? this.imgUploader.onclick = function (a) {
                var b = this;
                a.stopPropagation(), a.preventDefault(), d.beforeImageUploaderTrigger.call(this, a, function (a) {
                    if (a) {
                        var c = {target: b, type: 1, base64Img: a.base64Img, ext: a.ext};
                        e.uploadImg(c)
                    }
                })
            } : this.changeHandler(this.imgUploader, d)), d.container.onclick = function (b) {
                b = b || window.event;
                var d = b.target || b.srcElement;
                a.opts.onBack && c.hasClass(d, "wkit-back-trigger") && a.opts.onBack()
            }
        },
        focusInput: function () {
            if (this.isInputFocus = !0, this.Emot.isShow && this.hideEmot(), this.opts.isAndroid) {
                var a;
                setTimeout(function () {
                    a = window.innerHeight, e && (a /= 2), c.getById("J_wkitChatWrap").style.height = a + "px"
                }, 200), window.scrollTo(0, 1)
            } else this.interval = setInterval(function () {
                document.body.scrollTop = document.body.scrollHeight
            }, 500)
        },
        blurInput: function () {
            this.interval && clearInterval(this.interval), this.isInputFocus = !1, this.opts.isAndroid && setTimeout(function () {
                c.getById("J_wkitChatWrap").style.height = "auto"
            }, 200)
        },
        changeHandler: function (a, b) {
            a.onchange = function () {
                var a = this;
                if (b.isAndroid)return void b.context.uploadImg({type: 0, target: this, maxSize: 2097152});
                var c = this.value.split("."), d = c[c.length - 1];
                canvasResize(this.files[0], {
                    width: 400, height: 0, crop: !1, quality: 80, callback: function (c) {
                        b.context.uploadImg({type: 2, base64Img: c, ext: d, target: a})
                    }
                })
            }
        },
        setScrollStatus: function (a) {
            this.isScrollOn = a
        },
        destroy: function () {
        }
    }
}(window.WKIT || (window.WKIT = {})), function (a) {
    a.UI || (a.UI = {});
    var b = a.util;
    a.UI.Emot = {
        index: 0, init: function (a) {
            return this.Emot = a, this.scroller = new window.IScroll(this.Emot.opts.container, {
                scrollX: !0,
                scrollY: !1,
                snap: !0,
                click: !0,
                momentum: !1
            }), this.events(), this
        }, events: function () {
            var a = this, b = this.Emot.tabs;
            this.Emot.tab;
            this.scroller.on("scrollEnd", function () {
                if (a.scroller.currentPage) {
                    if (a.index == a.scroller.currentPage.pageX)return;
                    a.setTabActive(b[a.scroller.currentPage.pageX]), a.index = a.scroller.currentPage.pageX
                }
            })
        }, setTabActive: function (a) {
            b.addClass(a, "wkit-active"), b.removeClass(this.Emot.tabs[this.index], "wkit-active")
        }, destroy: function () {
            this.scroller.destroy()
        }
    }
}(window.WKIT || (window.WKIT = {})), function () {
    var a = document.documentElement, b = a.clientWidth;
    a.style.fontSize = b / 320 * 20 + "px"
}(), function (a) {
    var b = document, c = b.body, d = a.util, e = "https://" + (window.__DEBUG ? "g-assets.daily.taobao.net" : "g.alicdn.com") + "/aliww/h5.openim.kit/" + a.version + "/styles/mkit" + (window.__DEBUG ? ".debug" : "") + ".css";
    a.start = function (b) {
        var f = navigator.userAgent;
        b.isAndroid = f.match(/Android/i), b.container = b.container || c, b.width = b.width || window.innerWidth, b.height = b.height || window.innerHeight, d.loadStyle(e, function () {
            var c = a.UI.Window.render(b), e = d.merge({}, b);
            a.Chat.init(d.merge(e, {container: c.chatWrap}))
        }, this)
    }
}(window.WKIT || (window.WKIT = {}));