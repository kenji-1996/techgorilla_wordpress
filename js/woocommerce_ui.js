/*! hostbill 2018-02-20 */

function Triangulr(t, e, i, n, s) {
    if ("number" != typeof t || t <= 0) throw "Triangulr: width must be positive";
    if ("number" != typeof e || e <= 0) throw "Triangulr: height must be positive";
    if ("number" != typeof i || i <= 0) throw "Triangulr: lineHeight must be set and be positive number";
    if (n && "number" != typeof n || n < 0) throw "Triangulr: pointArea must be set and be a positive number";
    if (s && "function" != typeof s) throw "Triangulr: renderingFunction must be a function";
    return this.mapWidth = t, this.mapHeight = e, this.lineHeight = i, this.pointArea = n || 0, this.colorRendering = s || this.generateGray, this.triangleLine = Math.sqrt(Math.pow(i / 2, 2) + Math.pow(i, 2)), this.originX = -this.triangleLine, this.originY = -this.lineHeight, this.lines = [], this.exportData = [], this.lineMapping(), this.createTriangles(), this.generateDom()
}
if (function(t, e, i) {
        function n(t, e) {
            return typeof t === e
        }

        function s(t) {
            var e = A.className,
                i = C._config.classPrefix || "";
            if (T && (e = e.baseVal), C._config.enableJSClass) {
                var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                e = e.replace(n, "$1" + i + "js$2")
            }
            C._config.enableClasses && (e += " " + i + t.join(" " + i), T ? A.className.baseVal = e : A.className = e)
        }

        function r(t, e) {
            if ("object" == typeof t)
                for (var i in t) I(t, i) && r(i, t[i]);
            else {
                var n = (t = t.toLowerCase()).split("."),
                    a = C[n[0]];
                if (2 == n.length && (a = a[n[1]]), void 0 !== a) return C;
                e = "function" == typeof e ? e() : e, 1 == n.length ? C[n[0]] = e : (!C[n[0]] || C[n[0]] instanceof Boolean || (C[n[0]] = new Boolean(C[n[0]])), C[n[0]][n[1]] = e), s([(e && 0 != e ? "" : "no-") + n.join("-")]), C._trigger(t, e)
            }
            return C
        }

        function a() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : T ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
        }

        function o(t) {
            return t.replace(/([a-z])-([a-z])/g, function(t, e, i) {
                return e + i.toUpperCase()
            }).replace(/^-/, "")
        }

        function l(t) {
            return t.replace(/([A-Z])/g, function(t, e) {
                return "-" + e.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function d(t, e) {
            return t - 1 === e || t === e || t + 1 === e
        }

        function c() {
            var t = e.body;
            return t || (t = a(T ? "svg" : "body"), t.fake = !0), t
        }

        function h(t, i, n, s) {
            var r, o, l, d, h = "modernizr",
                u = a("div"),
                p = c();
            if (parseInt(n, 10))
                for (; n--;) l = a("div"), l.id = s ? s[n] : h + (n + 1), u.appendChild(l);
            return r = a("style"), r.type = "text/css", r.id = "s" + h, (p.fake ? p : u).appendChild(r), p.appendChild(u), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(e.createTextNode(t)), u.id = h, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = A.style.overflow, A.style.overflow = "hidden", A.appendChild(p)), o = i(u, t), p.fake ? (p.parentNode.removeChild(p), A.style.overflow = d, A.offsetHeight) : u.parentNode.removeChild(u), !!o
        }

        function u(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function p(e, n) {
            var s = e.length;
            if ("CSS" in t && "supports" in t.CSS) {
                for (; s--;)
                    if (t.CSS.supports(l(e[s]), n)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in t) {
                for (var r = []; s--;) r.push("(" + l(e[s]) + ":" + n + ")");
                return r = r.join(" or "), h("@supports (" + r + ") { #modernizr { position: absolute; } }", function(t) {
                    return "absolute" == getComputedStyle(t, null).position
                })
            }
            return i
        }

        function f(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function g(t, e, i) {
            var s;
            for (var r in t)
                if (t[r] in e) return !1 === i ? t[r] : (s = e[t[r]], n(s, "function") ? f(s, i || e) : s);
            return !1
        }

        function v(t, e, s, r) {
            function l() {
                c && (delete N.style, delete N.modElem)
            }
            if (r = !n(r, "undefined") && r, !n(s, "undefined")) {
                var d = p(t, s);
                if (!n(d, "undefined")) return d
            }
            for (var c, h, f, g, v, m = ["modernizr", "tspan"]; !N.style;) c = !0, N.modElem = a(m.shift()), N.style = N.modElem.style;
            for (f = t.length, h = 0; f > h; h++)
                if (g = t[h], v = N.style[g], u(g, "-") && (g = o(g)), N.style[g] !== i) {
                    if (r || n(s, "undefined")) return l(), "pfx" != e || g;
                    try {
                        N.style[g] = s
                    } catch (t) {}
                    if (N.style[g] != v) return l(), "pfx" != e || g
                }
            return l(), !1
        }

        function m(t, e, i, s, r) {
            var a = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + E.join(a + " ") + a).split(" ");
            return n(e, "string") || n(e, "undefined") ? v(o, e, s, r) : (o = (t + " " + _.join(a + " ") + a).split(" "), g(o, e, i))
        }

        function b(t, e, n) {
            return m(t, i, i, e, n)
        }
        var y = [],
            w = [],
            x = {
                _version: "3.2.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(t, e) {
                    var i = this;
                    setTimeout(function() {
                        e(i[t])
                    }, 0)
                },
                addTest: function(t, e, i) {
                    w.push({
                        name: t,
                        fn: e,
                        options: i
                    })
                },
                addAsyncTest: function(t) {
                    w.push({
                        name: null,
                        fn: t
                    })
                }
            },
            C = function() {};
        C.prototype = x, (C = new C).addTest("target", function() {
            var e = t.document;
            if (!("querySelectorAll" in e)) return !1;
            try {
                return e.querySelectorAll(":target"), !0
            } catch (t) {
                return !1
            }
        });
        var S = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
        x._prefixes = S;
        var A = e.documentElement,
            T = "svg" === A.nodeName.toLowerCase();
        T || function(t, e) {
            function i(t, e) {
                var i = t.createElement("p"),
                    n = t.getElementsByTagName("head")[0] || t.documentElement;
                return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
            }

            function n() {
                var t = x.elements;
                return "string" == typeof t ? t.split(" ") : t
            }

            function s(t) {
                var e = w[t[b]];
                return e || (e = {}, y++, t[b] = y, w[y] = e), e
            }

            function r(t, i, n) {
                if (i || (i = e), f) return i.createElement(t);
                n || (n = s(i));
                var r;
                return !(r = n.cache[t] ? n.cache[t].cloneNode() : m.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t)).canHaveChildren || v.test(t) || r.tagUrn ? r : n.frag.appendChild(r)
            }

            function a(t, e) {
                e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
                    return x.shivMethods ? r(i, t, e) : e.createElem(i)
                }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-:]+/g, function(t) {
                    return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                }) + ");return n}")(x, e.frag)
            }

            function o(t) {
                t || (t = e);
                var n = s(t);
                return !x.shivCSS || p || n.hasCSS || (n.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || a(t, n), t
            }

            function l(t) {
                for (var e, i = t.getElementsByTagName("*"), s = i.length, r = RegExp("^(?:" + n().join("|") + ")$", "i"), a = []; s--;) e = i[s], r.test(e.nodeName) && a.push(e.applyElement(d(e)));
                return a
            }

            function d(t) {
                for (var e, i = t.attributes, n = i.length, s = t.ownerDocument.createElement(S + ":" + t.nodeName); n--;)(e = i[n]).specified && s.setAttribute(e.nodeName, e.nodeValue);
                return s.style.cssText = t.style.cssText, s
            }

            function c(t) {
                for (var e, i = t.split("{"), s = i.length, r = RegExp("(^|[\\s,>+~])(" + n().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + S + "\\:$2"; s--;) e = i[s] = i[s].split("}"), e[e.length - 1] = e[e.length - 1].replace(r, a), i[s] = e.join("}");
                return i.join("{")
            }

            function h(t) {
                for (var e = t.length; e--;) t[e].removeNode()
            }

            function u(t) {
                function e() {
                    clearTimeout(a._removeSheetTimer), n && n.removeNode(!0), n = null
                }
                var n, r, a = s(t),
                    o = t.namespaces,
                    d = t.parentWindow;
                return !A || t.printShived ? t : (void 0 === o[S] && o.add(S), d.attachEvent("onbeforeprint", function() {
                    e();
                    for (var s, a, o, d = t.styleSheets, h = [], u = d.length, p = Array(u); u--;) p[u] = d[u];
                    for (; o = p.pop();)
                        if (!o.disabled && C.test(o.media)) {
                            try {
                                s = o.imports, a = s.length
                            } catch (t) {
                                a = 0
                            }
                            for (u = 0; a > u; u++) p.push(s[u]);
                            try {
                                h.push(o.cssText)
                            } catch (t) {}
                        }
                    h = c(h.reverse().join("")), r = l(t), n = i(t, h)
                }), d.attachEvent("onafterprint", function() {
                    h(r), clearTimeout(a._removeSheetTimer), a._removeSheetTimer = setTimeout(e, 500)
                }), t.printShived = !0, t)
            }
            var p, f, g = t.html5 || {},
                v = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                b = "_html5shiv",
                y = 0,
                w = {};
            ! function() {
                try {
                    var t = e.createElement("a");
                    t.innerHTML = "<xyz></xyz>", p = "hidden" in t, f = 1 == t.childNodes.length || function() {
                        e.createElement("a");
                        var t = e.createDocumentFragment();
                        return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                    }()
                } catch (t) {
                    p = !0, f = !0
                }
            }();
            var x = {
                elements: g.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                version: "3.7.3",
                shivCSS: !1 !== g.shivCSS,
                supportsUnknownElements: f,
                shivMethods: !1 !== g.shivMethods,
                type: "default",
                shivDocument: o,
                createElement: r,
                createDocumentFragment: function(t, i) {
                    if (t || (t = e), f) return t.createDocumentFragment();
                    for (var r = (i = i || s(t)).frag.cloneNode(), a = 0, o = n(), l = o.length; l > a; a++) r.createElement(o[a]);
                    return r
                },
                addElements: function(t, e) {
                    var i = x.elements;
                    "string" != typeof i && (i = i.join(" ")), "string" != typeof t && (t = t.join(" ")), x.elements = i + " " + t, o(e)
                }
            };
            t.html5 = x, o(e);
            var C = /^$|\b(?:all|print)\b/,
                S = "html5shiv",
                A = !f && function() {
                    var i = e.documentElement;
                    return !(void 0 === e.namespaces || void 0 === e.parentWindow || void 0 === i.applyElement || void 0 === i.removeNode || void 0 === t.attachEvent)
                }();
            x.type += " print", x.shivPrint = u, u(e), "object" == typeof module && module.exports && (module.exports = x)
        }(void 0 !== t ? t : this, e);
        var $ = "Moz O ms Webkit",
            _ = x._config.usePrefixes ? $.toLowerCase().split(" ") : [];
        x._domPrefixes = _;
        var I;
        ! function() {
            var t = {}.hasOwnProperty;
            I = n(t, "undefined") || n(t.call, "undefined") ? function(t, e) {
                return e in t && n(t.constructor.prototype[e], "undefined")
            } : function(e, i) {
                return t.call(e, i)
            }
        }(), x._l = {}, x.on = function(t, e) {
            this._l[t] || (this._l[t] = []), this._l[t].push(e), C.hasOwnProperty(t) && setTimeout(function() {
                C._trigger(t, C[t])
            }, 0)
        }, x._trigger = function(t, e) {
            if (this._l[t]) {
                var i = this._l[t];
                setTimeout(function() {
                    var t;
                    for (t = 0; t < i.length; t++)(0, i[t])(e)
                }, 0), delete this._l[t]
            }
        }, C._q.push(function() {
            x.addTest = r
        }), C.addAsyncTest(function() {
            var t = new Image;
            t.onerror = function() {
                r("webpanimation", !1, {
                    aliases: ["webp-animation"]
                })
            }, t.onload = function() {
                r("webpanimation", 1 == t.width, {
                    aliases: ["webp-animation"]
                })
            }, t.src = "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        });
        var E = x._config.usePrefixes ? $.split(" ") : [];
        x._cssomPrefixes = E;
        var k = function(e) {
            var n, s = S.length,
                r = t.CSSRule;
            if (void 0 === r) return i;
            if (!e) return !1;
            if (e = e.replace(/^@/, ""), (n = e.replace(/-/g, "_").toUpperCase() + "_RULE") in r) return "@" + e;
            for (var a = 0; s > a; a++) {
                var o = S[a];
                if (o.toUpperCase() + "_" + n in r) return "@-" + o.toLowerCase() + "-" + e
            }
            return !1
        };
        x.atRule = k;
        var P = function() {
            var t = !("onblur" in e.documentElement);
            return function(e, n) {
                var s;
                return !!e && (n && "string" != typeof n || (n = a(n || "div")), e = "on" + e, !(s = e in n) && t && (n.setAttribute || (n = a("div")), n.setAttribute(e, ""), s = "function" == typeof n[e], n[e] !== i && (n[e] = i), n.removeAttribute(e)), s)
            }
        }();
        x.hasEvent = P;
        x.prefixedCSSValue = function(t, e) {
            var i = !1,
                n = a("div").style;
            if (t in n) {
                var s = _.length;
                for (n[t] = e, i = n[t]; s-- && !i;) n[t] = "-" + _[s] + "-" + e, i = n[t]
            }
            return "" === i && (i = !1), i
        }, C.addTest("webanimations", "animate" in a("div")), C.addTest("multiplebgs", function() {
            var t = a("a").style;
            return t.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(t.background)
        });
        var V = "CSS" in t && "supports" in t.CSS,
            D = "supportsCSS" in t;
        C.addTest("supports", V || D);
        var L = function() {
            var e = t.matchMedia || t.msMatchMedia;
            return e ? function(t) {
                var i = e(t);
                return i && i.matches || !1
            } : function(e) {
                var i = !1;
                return h("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
                    i = "absolute" == (t.getComputedStyle ? t.getComputedStyle(e, null) : e.currentStyle).position
                }), i
            }
        }();
        x.mq = L;
        var R = x.testStyles = h;
        R("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}", function(e) {
            var i = e.firstChild;
            i.innerHTML = "This is a text written in Arial", C.addTest("subpixelfont", !!t.getComputedStyle && "44px" !== t.getComputedStyle(i, null).getPropertyValue("width"))
        }, 1, ["subpixel"]), C.addTest("cssvalid", function() {
            return R("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}", function(t) {
                var e = a("input");
                return t.appendChild(e), e.clientWidth > 10
            })
        }), R("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
            var i = e.childNodes[2],
                n = e.childNodes[1],
                s = e.childNodes[0],
                r = parseInt((n.offsetWidth - n.clientWidth) / 2, 10),
                a = s.clientWidth / 100,
                o = s.clientHeight / 100,
                l = parseInt(50 * Math.max(a, o), 10),
                c = parseInt((t.getComputedStyle ? getComputedStyle(i, null) : i.currentStyle).width, 10);
            C.addTest("cssvmaxunit", d(l, c) || d(l, c - r))
        }, 3), R("#modernizr { width: 50vw; }", function(e) {
            var i = parseInt(t.innerWidth / 2, 10),
                n = parseInt((t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).width, 10);
            C.addTest("cssvwunit", n == i)
        });
        var F = {
            elem: a("modernizr")
        };
        C._q.push(function() {
            delete F.elem
        });
        var N = {
            style: F.elem.style
        };
        C._q.unshift(function() {
            delete N.style
        });
        var M = x.testProp = function(t, e, n) {
            return v([t], i, e, n)
        };
        C.addTest("textshadow", M("textShadow", "1px 1px")), x.testAllProps = m;
        var O = x.prefixed = function(t, e, i) {
            return 0 === t.indexOf("@") ? k(t) : (-1 != t.indexOf("-") && (t = o(t)), e ? m(t, e, i) : m(t, "pfx"))
        };
        x.prefixedCSS = function(t) {
            var e = O(t);
            return e && l(e)
        }, C.addTest("requestanimationframe", !!O("requestAnimationFrame", t), {
            aliases: ["raf"]
        }), x.testAllProps = b, C.addTest("cssanimations", b("animationName", "a", !0)), C.addTest("csspseudoanimations", function() {
            var e = !1;
            if (!C.cssanimations || !t.getComputedStyle) return e;
            var i = ["@", C._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/, ""), '#modernizr:before { content:" "; font-size:5px;', C._prefixes.join("animation:csspseudoanimations 1ms infinite;"), "}"].join("");
            return C.testStyles(i, function(i) {
                e = "10px" === t.getComputedStyle(i, ":before").getPropertyValue("font-size")
            }), e
        }), C.addTest("ellipsis", b("textOverflow", "ellipsis")), C.addTest("cssmask", b("maskRepeat", "repeat-x", !0)), C.addTest("overflowscrolling", b("overflowScrolling", "touch", !0)), C.addTest("cssresize", b("resize", "both", !0)), C.addTest("csstransforms3d", function() {
            var t = !!b("perspective", "1px", !0),
                e = C._config.usePrefixes;
            if (t && (!e || "webkitPerspective" in A.style)) {
                var i;
                C.supports ? i = "@supports (perspective: 1px)" : (i = "@media (transform-3d)", e && (i += ",(-webkit-transform-3d)")), R("#modernizr{width:0;height:0}" + (i += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"), function(e) {
                    t = 7 === e.offsetWidth && 18 === e.offsetHeight
                })
            }
            return t
        }), C.addTest("csstransitions", b("transition", "all", !0)),
            function() {
                var t, e, i, s, r, a, o;
                for (var l in w)
                    if (w.hasOwnProperty(l)) {
                        if (t = [], (e = w[l]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                            for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                        for (s = n(e.fn, "function") ? e.fn() : e.fn, r = 0; r < t.length; r++) a = t[r], 1 === (o = a.split(".")).length ? C[o[0]] = s : (!C[o[0]] || C[o[0]] instanceof Boolean || (C[o[0]] = new Boolean(C[o[0]])), C[o[0]][o[1]] = s), y.push((s ? "" : "no-") + o.join("-"))
                    }
            }(), s(y), delete x.addTest, delete x.addAsyncTest;
        for (var B = 0; B < C._q.length; B++) C._q[B]();
        t.Modernizr = C
    }(window, document), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
if (function(t) {
        "use strict";
        var e = jQuery.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
    }(), function(t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", function() {
                i = !0
            });
            return setTimeout(function() {
                i || t(n).trigger(t.support.transition.end)
            }, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), function(t) {
        "use strict";
        var e = '[data-dismiss="alert"]',
            i = function(i) {
                t(i).on("click", e, this.close)
            };
        i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
            function n() {
                a.detach().trigger("closed.bs.alert").remove()
            }
            var s = t(this),
                r = s.attr("data-target");
            r || (r = s.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            var a = t(r);
            e && e.preventDefault(), a.length || (a = s.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var n = t.fn.alert;
        t.fn.alert = function(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.alert");
                s || n.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(n)
            })
        }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
            return t.fn.alert = n, this
        }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.button"),
                    r = "object" == typeof e && e;
                s || n.data("bs.button", s = new i(this, r)), "toggle" == e ? s.toggle() : e && s.setState(e)
            })
        }
        var i = function(e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
        };
        i.VERSION = "3.3.5", i.DEFAULTS = {
            loadingText: "loading..."
        }, i.prototype.setState = function(e) {
            var i = "disabled",
                n = this.$element,
                s = n.is("input") ? "val" : "html",
                r = n.data();
            e += "Text", null == r.resetText && n.data("resetText", n[s]()), setTimeout(t.proxy(function() {
                n[s](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
            }, this), 0)
        }, i.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var i = this.$element.find("input");
                "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var n = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
            return t.fn.button = n, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
            var n = t(i.target);
            n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        })
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.carousel"),
                    r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                    a = "string" == typeof e ? e : r.slide;
                s || n.data("bs.carousel", s = new i(this, r)), "number" == typeof e ? s.to(e) : a ? s[a]() : r.interval && s.pause().cycle()
            })
        }
        var i = function(e, i) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
        i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, i.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, i.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, i.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, i.prototype.getItemForDirection = function(t, e) {
            var i = this.getItemIndex(e);
            if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
            var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
            return this.$items.eq(n)
        }, i.prototype.to = function(t) {
            var e = this,
                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
        }, i.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, i.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, i.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, i.prototype.slide = function(e, n) {
            var s = this.$element.find(".item.active"),
                r = n || this.getItemForDirection(e, s),
                a = this.interval,
                o = "next" == e ? "left" : "right",
                l = this;
            if (r.hasClass("active")) return this.sliding = !1;
            var d = r[0],
                c = t.Event("slide.bs.carousel", {
                    relatedTarget: d,
                    direction: o
                });
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var h = t(this.$indicators.children()[this.getItemIndex(r)]);
                    h && h.addClass("active")
                }
                var u = t.Event("slid.bs.carousel", {
                    relatedTarget: d,
                    direction: o
                });
                return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, s.addClass(o), r.addClass(o), s.one("bsTransitionEnd", function() {
                    r.removeClass([e, o].join(" ")).addClass("active"), s.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function() {
                        l.$element.trigger(u)
                    }, 0)
                }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(u)), a && this.cycle(), this
            }
        };
        var n = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = n, this
        };
        var s = function(i) {
            var n, s = t(this),
                r = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (r.hasClass("carousel")) {
                var a = t.extend({}, r.data(), s.data()),
                    o = s.attr("data-slide-to");
                o && (a.interval = !1), e.call(r, a), o && r.data("bs.carousel").to(o), i.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
            t('[data-ride="carousel"]').each(function() {
                var i = t(this);
                e.call(i, i.data())
            })
        })
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return t(n)
        }

        function i(e) {
            return this.each(function() {
                var i = t(this),
                    s = i.data("bs.collapse"),
                    r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                !s && r.toggle && /show|hide/.test(e) && (r.toggle = !1), s || i.data("bs.collapse", s = new n(this, r)), "string" == typeof e && s[e]()
            })
        }
        var n = function(e, i) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        n.VERSION = "3.3.5", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
            toggle: !0
        }, n.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height"
        }, n.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(s && s.length && (e = s.data("bs.collapse")) && e.transitioning)) {
                    var r = t.Event("show.bs.collapse");
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                        s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                        var a = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var o = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return o.call(this);
                        var l = t.camelCase(["scroll", a].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])
                    }
                }
            }
        }, n.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var s = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this)
                }
            }
        }, n.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, n.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
                var s = t(n);
                this.addAriaAndCollapsedClass(e(s), s)
            }, this)).end()
        }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
            var i = t.hasClass("in");
            t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
        };
        var s = t.fn.collapse;
        t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = s, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
            var s = t(this);
            s.attr("data-target") || n.preventDefault();
            var r = e(s),
                a = r.data("bs.collapse") ? "toggle" : s.data();
            i.call(r, a)
        })
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            var i = e.attr("data-target");
            i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && t(i);
            return n && n.length ? n : e.parent()
        }

        function i(i) {
            i && 3 === i.which || (t(n).remove(), t(s).each(function() {
                var n = t(this),
                    s = e(n),
                    r = {
                        relatedTarget: this
                    };
                s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", r))))
            }))
        }
        var n = ".dropdown-backdrop",
            s = '[data-toggle="dropdown"]',
            r = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        r.VERSION = "3.3.5", r.prototype.toggle = function(n) {
            var s = t(this);
            if (!s.is(".disabled, :disabled")) {
                var r = e(s),
                    a = r.hasClass("open");
                if (i(), !a) {
                    "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                    var o = {
                        relatedTarget: this
                    };
                    if (r.trigger(n = t.Event("show.bs.dropdown", o)), n.isDefaultPrevented()) return;
                    s.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", o)
                }
                return !1
            }
        }, r.prototype.keydown = function(i) {
            if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                var n = t(this);
                if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var r = e(n),
                        a = r.hasClass("open");
                    if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && r.find(s).trigger("focus"), n.trigger("click");
                    var o = r.find(".dropdown-menu li:not(.disabled):visible a");
                    if (o.length) {
                        var l = o.index(i.target);
                        38 == i.which && l > 0 && l--, 40 == i.which && l < o.length - 1 && l++, ~l || (l = 0), o.eq(l).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = function(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
            })
        }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = a, this
        }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
    }(jQuery), function(t) {
        "use strict";

        function e(e, n) {
            return this.each(function() {
                var s = t(this),
                    r = s.data("bs.modal"),
                    a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
                r || s.data("bs.modal", r = new i(this, a)), "string" == typeof e ? r[e](n) : a.show && r.show(n)
            })
        }
        var i = function(e, i) {
            this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, i.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, i.prototype.show = function(e) {
            var n = this,
                s = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var s = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                var r = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                s ? n.$dialog.one("bsTransitionEnd", function() {
                    n.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
            }))
        }, i.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
        }, i.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, i.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, i.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, i.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, i.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, i.prototype.backdrop = function(e) {
            var n = this,
                s = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = t.support.transition && s;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var a = function() {
                    n.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
            } else e && e()
        }, i.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, i.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, i.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, i.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, i.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, i.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var n = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
            return t.fn.modal = n, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
            var n = t(this),
                s = n.attr("href"),
                r = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
                a = r.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(s) && s
                }, r.data(), n.data());
            n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                    n.is(":visible") && n.trigger("focus")
                })
            }), e.call(r, a, this)
        })
    }(jQuery), function(t) {
        "use strict";
        var e = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        e.VERSION = "3.3.5", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, e.prototype.init = function(e, i, n) {
            if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var s = this.options.trigger.split(" "), r = s.length; r--;) {
                var a = s[r];
                if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != a) {
                    var o = "hover" == a ? "mouseenter" : "focusin",
                        l = "hover" == a ? "mouseleave" : "focusout";
                    this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, e.prototype.getDefaults = function() {
            return e.DEFAULTS
        }, e.prototype.getOptions = function(e) {
            return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, e.prototype.getDelegateOptions = function() {
            var e = {},
                i = this.getDefaults();
            return this._options && t.each(this._options, function(t, n) {
                i[t] != n && (e[t] = n)
            }), e
        }, e.prototype.enter = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)) : i.show())
        }, e.prototype.isInStateTrue = function() {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1
        }, e.prototype.leave = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)) : i.hide())
        }, e.prototype.show = function() {
            var i = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(i);
                var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (i.isDefaultPrevented() || !n) return;
                var s = this,
                    r = this.tip(),
                    a = this.getUID(this.type);
                this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
                var o = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    d = l.test(o);
                d && (o = o.replace(l, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(o).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var c = this.getPosition(),
                    h = r[0].offsetWidth,
                    u = r[0].offsetHeight;
                if (d) {
                    var p = o,
                        f = this.getPosition(this.$viewport);
                    o = "bottom" == o && c.bottom + u > f.bottom ? "top" : "top" == o && c.top - u < f.top ? "bottom" : "right" == o && c.right + h > f.width ? "left" : "left" == o && c.left - h < f.left ? "right" : o, r.removeClass(p).addClass(o)
                }
                var g = this.getCalculatedOffset(o, c, h, u);
                this.applyPlacement(g, o);
                var v = function() {
                    var t = s.hoverState;
                    s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
                };
                t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v()
            }
        }, e.prototype.applyPlacement = function(e, i) {
            var n = this.tip(),
                s = n[0].offsetWidth,
                r = n[0].offsetHeight,
                a = parseInt(n.css("margin-top"), 10),
                o = parseInt(n.css("margin-left"), 10);
            isNaN(a) && (a = 0), isNaN(o) && (o = 0), e.top += a, e.left += o, t.offset.setOffset(n[0], t.extend({
                using: function(t) {
                    n.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), n.addClass("in");
            var l = n[0].offsetWidth,
                d = n[0].offsetHeight;
            "top" == i && d != r && (e.top = e.top + r - d);
            var c = this.getViewportAdjustedDelta(i, e, l, d);
            c.left ? e.left += c.left : e.top += c.top;
            var h = /top|bottom/.test(i),
                u = h ? 2 * c.left - s + l : 2 * c.top - r + d,
                p = h ? "offsetWidth" : "offsetHeight";
            n.offset(e), this.replaceArrow(u, n[0][p], h)
        }, e.prototype.replaceArrow = function(t, e, i) {
            this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
        }, e.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, e.prototype.hide = function(i) {
            function n() {
                "in" != s.hoverState && r.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), i && i()
            }
            var s = this,
                r = t(this.$tip),
                a = t.Event("hide.bs." + this.type);
            return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(e.TRANSITION_DURATION) : n(), this.hoverState = null, this)
        }, e.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, e.prototype.hasContent = function() {
            return this.getTitle()
        }, e.prototype.getPosition = function(e) {
            var i = (e = e || this.$element)[0],
                n = "BODY" == i.tagName,
                s = i.getBoundingClientRect();
            null == s.width && (s = t.extend({}, s, {
                width: s.right - s.left,
                height: s.bottom - s.top
            }));
            var r = n ? {
                    top: 0,
                    left: 0
                } : e.offset(),
                a = {
                    scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                o = n ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, s, a, o, r)
        }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - i / 2
            } : "top" == t ? {
                top: e.top - n,
                left: e.left + e.width / 2 - i / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - n / 2,
                left: e.left - i
            } : {
                top: e.top + e.height / 2 - n / 2,
                left: e.left + e.width
            }
        }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
            var s = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return s;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                a = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var o = e.top - r - a.scroll,
                    l = e.top + r - a.scroll + n;
                o < a.top ? s.top = a.top - o : l > a.top + a.height && (s.top = a.top + a.height - l)
            } else {
                var d = e.left - r,
                    c = e.left + r + i;
                d < a.left ? s.left = a.left - d : c > a.right && (s.left = a.left + a.width - c)
            }
            return s
        }, e.prototype.getTitle = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, e.prototype.getUID = function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, e.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, e.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, e.prototype.enable = function() {
            this.enabled = !0
        }, e.prototype.disable = function() {
            this.enabled = !1
        }, e.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, e.prototype.toggle = function(e) {
            var i = this;
            e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, e.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
            })
        };
        var i = t.fn.tooltip;
        t.fn.tooltip = function(i) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.tooltip"),
                    r = "object" == typeof i && i;
                (s || !/destroy|hide/.test(i)) && (s || n.data("bs.tooltip", s = new e(this, r)), "string" == typeof i && s[i]())
            })
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = i, this
        }
    }(jQuery), function(t) {
        "use strict";
        var e = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        e.VERSION = "3.3.5", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
            return e.DEFAULTS
        }, e.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, e.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, e.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, e.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var i = t.fn.popover;
        t.fn.popover = function(i) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.popover"),
                    r = "object" == typeof i && i;
                (s || !/destroy|hide/.test(i)) && (s || n.data("bs.popover", s = new e(this, r)), "string" == typeof i && s[i]())
            })
        }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
            return t.fn.popover = i, this
        }
    }(jQuery), function(t) {
        "use strict";

        function e(i, n) {
            this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }

        function i(i) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.scrollspy"),
                    r = "object" == typeof i && i;
                s || n.data("bs.scrollspy", s = new e(this, r)), "string" == typeof i && s[i]()
            })
        }
        e.VERSION = "3.3.5", e.DEFAULTS = {
            offset: 10
        }, e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function() {
            var e = this,
                i = "offset",
                n = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var e = t(this),
                    s = e.data("target") || e.attr("href"),
                    r = /^#./.test(s) && t(s);
                return r && r.length && r.is(":visible") && [
                    [r[i]().top + n, s]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                e.offsets.push(this[0]), e.targets.push(this[1])
            })
        }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.getScrollHeight(),
                n = this.options.offset + i - this.$scrollElement.height(),
                s = this.offsets,
                r = this.targets,
                a = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), e >= n) return a != (t = r[r.length - 1]) && this.activate(t);
            if (a && e < s[0]) return this.activeTarget = null, this.clear();
            for (t = s.length; t--;) a != r[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(r[t])
        }, e.prototype.activate = function(e) {
            this.activeTarget = e, this.clear();
            var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                n = t(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function() {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var n = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = n, this
        }, t(window).on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                i.call(e, e.data())
            })
        })
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.tab");
                s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
            })
        }
        var i = function(e) {
            this.element = t(e)
        };
        i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
            var e = this.element,
                i = e.closest("ul:not(.dropdown-menu)"),
                n = e.data("target");
            if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var s = i.find(".active:last a"),
                    r = t.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    }),
                    a = t.Event("show.bs.tab", {
                        relatedTarget: s[0]
                    });
                if (s.trigger(r), e.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    var o = t(n);
                    this.activate(e.closest("li"), i), this.activate(o, o.parent(), function() {
                        s.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: e[0]
                        }), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: s[0]
                        })
                    })
                }
            }
        }, i.prototype.activate = function(e, n, s) {
            function r() {
                a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
            }
            var a = n.find("> .active"),
                o = s && t.support.transition && (a.length && a.hasClass("fade") || !!n.find("> .fade").length);
            a.length && o ? a.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), a.removeClass("in")
        };
        var n = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
            return t.fn.tab = n, this
        };
        var s = function(i) {
            i.preventDefault(), e.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    s = n.data("bs.affix"),
                    r = "object" == typeof e && e;
                s || n.data("bs.affix", s = new i(this, r)), "string" == typeof e && s[e]()
            })
        }
        var i = function(e, n) {
            this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
            offset: 0,
            target: window
        }, i.prototype.getState = function(t, e, i, n) {
            var s = this.$target.scrollTop(),
                r = this.$element.offset(),
                a = this.$target.height();
            if (null != i && "top" == this.affixed) return i > s && "top";
            if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= r.top) && "bottom" : !(t - n >= s + a) && "bottom";
            var o = null == this.affixed,
                l = o ? s : r.top,
                d = o ? a : e;
            return null != i && i >= s ? "top" : null != n && l + d >= t - n && "bottom"
        }, i.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, i.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, i.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    n = this.options.offset,
                    s = n.top,
                    r = n.bottom,
                    a = Math.max(t(document).height(), t(document.body).height());
                "object" != typeof n && (r = s = n), "function" == typeof s && (s = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
                var o = this.getState(a, e, s, r);
                if (this.affixed != o) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (o ? "-" + o : ""),
                        d = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                    this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == o && this.$element.offset({
                    top: a - e - r
                })
            }
        };
        var n = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
            return t.fn.affix = n, this
        }, t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var i = t(this),
                    n = i.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
            })
        })
    }(jQuery), "undefined" == typeof jQuery) throw new Error("BootstrapValidator's JavaScript requires jQuery");
! function(t) {
    var e = function(e, i) {
        this.$form = t(e), this.options = t.extend({}, t.fn.bootstrapValidator.DEFAULT_OPTIONS, i), this.$invalidFields = t([]), this.$submitButton = null, this.$hiddenButton = null, this.STATUS_NOT_VALIDATED = "NOT_VALIDATED", this.STATUS_VALIDATING = "VALIDATING", this.STATUS_INVALID = "INVALID", this.STATUS_VALID = "VALID";
        var n = function() {
                for (var t = 3, e = document.createElement("div"), i = e.all || []; e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><br><![endif]--\x3e", i[0];);
                return t > 4 ? t : !t
            }(),
            s = document.createElement("div");
        this._changeEvent = 9 !== n && "oninput" in s ? "input" : "keyup", this._submitIfValid = null, this._cacheFields = {}, this._init()
    };
    e.prototype = {
        constructor: e,
        _init: function() {
            var e = this,
                i = {
                    container: this.$form.attr("data-bv-container"),
                    events: {
                        formInit: this.$form.attr("data-bv-events-form-init"),
                        formError: this.$form.attr("data-bv-events-form-error"),
                        formSuccess: this.$form.attr("data-bv-events-form-success"),
                        fieldAdded: this.$form.attr("data-bv-events-field-added"),
                        fieldRemoved: this.$form.attr("data-bv-events-field-removed"),
                        fieldInit: this.$form.attr("data-bv-events-field-init"),
                        fieldError: this.$form.attr("data-bv-events-field-error"),
                        fieldSuccess: this.$form.attr("data-bv-events-field-success"),
                        fieldStatus: this.$form.attr("data-bv-events-field-status"),
                        validatorError: this.$form.attr("data-bv-events-validator-error"),
                        validatorSuccess: this.$form.attr("data-bv-events-validator-success")
                    },
                    excluded: this.$form.attr("data-bv-excluded"),
                    feedbackIcons: {
                        valid: this.$form.attr("data-bv-feedbackicons-valid"),
                        invalid: this.$form.attr("data-bv-feedbackicons-invalid"),
                        validating: this.$form.attr("data-bv-feedbackicons-validating")
                    },
                    group: this.$form.attr("data-bv-group"),
                    live: this.$form.attr("data-bv-live"),
                    message: this.$form.attr("data-bv-message"),
                    onError: this.$form.attr("data-bv-onerror"),
                    onSuccess: this.$form.attr("data-bv-onsuccess"),
                    submitButtons: this.$form.attr("data-bv-submitbuttons"),
                    threshold: this.$form.attr("data-bv-threshold"),
                    trigger: this.$form.attr("data-bv-trigger"),
                    verbose: this.$form.attr("data-bv-verbose"),
                    fields: {}
                };
            this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit.bv", function(t) {
                t.preventDefault(), e.validate()
            }).on("click.bv", this.options.submitButtons, function() {
                e.$submitButton = t(this), e._submitIfValid = !0
            }).find("[name], [data-bv-field]").each(function() {
                var n = t(this),
                    s = n.attr("name") || n.attr("data-bv-field"),
                    r = e._parseOptions(n);
                r && (n.attr("data-bv-field", s), i.fields[s] = t.extend({}, r, i.fields[s]))
            }), this.options = t.extend(!0, this.options, i), this.$hiddenButton = t("<button/>").attr("type", "submit").prependTo(this.$form).addClass("bv-hidden-submit").css({
                display: "none",
                width: 0,
                height: 0
            }), this.$form.on("click.bv", '[type="submit"]', function(i) {
                if (!i.isDefaultPrevented()) {
                    var n = t(i.target),
                        s = n.is('[type="submit"]') ? n.eq(0) : n.parent('[type="submit"]').eq(0);
                    !e.options.submitButtons || s.is(e.options.submitButtons) || s.is(e.$hiddenButton) || e.$form.off("submit.bv").submit()
                }
            });
            for (var n in this.options.fields) this._initField(n);
            this.$form.trigger(t.Event(this.options.events.formInit), {
                bv: this,
                options: this.options
            }), this.options.onSuccess && this.$form.on(this.options.events.formSuccess, function(i) {
                t.fn.bootstrapValidator.helpers.call(e.options.onSuccess, [i])
            }), this.options.onError && this.$form.on(this.options.events.formError, function(i) {
                t.fn.bootstrapValidator.helpers.call(e.options.onError, [i])
            })
        },
        _parseOptions: function(e) {
            var i, n, s, r, a, o, l, d = e.attr("name") || e.attr("data-bv-field"),
                c = {};
            for (n in t.fn.bootstrapValidator.validators)
                if (i = t.fn.bootstrapValidator.validators[n], s = e.attr("data-bv-" + n.toLowerCase()) + "", (l = "function" == typeof i.enableByHtml5 ? i.enableByHtml5(e) : null) && "false" !== s || !0 !== l && ("" === s || "true" === s)) {
                    i.html5Attributes = t.extend({}, {
                        message: "message",
                        onerror: "onError",
                        onsuccess: "onSuccess"
                    }, i.html5Attributes), c[n] = t.extend({}, !0 === l ? {} : l, c[n]);
                    for (o in i.html5Attributes) r = i.html5Attributes[o], (a = e.attr("data-bv-" + n.toLowerCase() + "-" + o)) && ("true" === a ? a = !0 : "false" === a && (a = !1), c[n][r] = a)
                }
            var h = {
                    container: e.attr("data-bv-container"),
                    excluded: e.attr("data-bv-excluded"),
                    feedbackIcons: e.attr("data-bv-feedbackicons"),
                    group: e.attr("data-bv-group"),
                    message: e.attr("data-bv-message"),
                    onError: e.attr("data-bv-onerror"),
                    onStatus: e.attr("data-bv-onstatus"),
                    onSuccess: e.attr("data-bv-onsuccess"),
                    selector: e.attr("data-bv-selector"),
                    threshold: e.attr("data-bv-threshold"),
                    trigger: e.attr("data-bv-trigger"),
                    verbose: e.attr("data-bv-verbose"),
                    validators: c
                },
                u = t.isEmptyObject(h);
            return !t.isEmptyObject(c) || !u && this.options.fields && this.options.fields[d] ? (h.validators = c, h) : null
        },
        _initField: function(e) {
            var i = t([]);
            switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    (i = this.getFieldElements(e)).attr("data-bv-field", e)
            }
            if (0 !== i.length && null !== this.options.fields[e] && null !== this.options.fields[e].validators) {
                var n;
                for (n in this.options.fields[e].validators) t.fn.bootstrapValidator.validators[n] || delete this.options.fields[e].validators[n];
                null === this.options.fields[e].enabled && (this.options.fields[e].enabled = !0);
                for (var s = this, r = i.length, a = i.attr("type"), o = 1 === r || "radio" === a || "checkbox" === a, l = "radio" === a || "checkbox" === a || "file" === a || "SELECT" === i.eq(0).get(0).tagName ? "change" : this._changeEvent, d = (this.options.fields[e].trigger || this.options.trigger || l).split(" "), c = t.map(d, function(t) {
                    return t + ".update.bv"
                }).join(" "), h = 0; r > h; h++) {
                    var u = i.eq(h),
                        p = this.options.fields[e].group || this.options.group,
                        f = u.parents(p),
                        g = "function" == typeof(this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, u, this) : this.options.fields[e].container || this.options.container,
                        v = g && "tooltip" !== g && "popover" !== g ? t(g) : this._getMessageContainer(u, p);
                    g && "tooltip" !== g && "popover" !== g && v.addClass("has-error"), v.find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').remove(), f.find('i[data-bv-icon-for="' + e + '"]').remove(), u.off(c).on(c, function() {
                        s.updateStatus(t(this), s.STATUS_NOT_VALIDATED)
                    }), u.data("bv.messages", v);
                    for (n in this.options.fields[e].validators) u.data("bv.result." + n, this.STATUS_NOT_VALIDATED), o && h !== r - 1 || t("<small/>").css("display", "none").addClass("help-block").attr("data-bv-validator", n).attr("data-bv-for", e).attr("data-bv-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(e, n)).appendTo(v), "function" == typeof t.fn.bootstrapValidator.validators[n].init && t.fn.bootstrapValidator.validators[n].init(this, u, this.options.fields[e].validators[n]);
                    if (!1 !== this.options.fields[e].feedbackIcons && "false" !== this.options.fields[e].feedbackIcons && this.options.feedbackIcons && this.options.feedbackIcons.validating && this.options.feedbackIcons.invalid && this.options.feedbackIcons.valid && (!o || h === r - 1)) {
                        f.addClass("has-feedback");
                        var m = t("<i/>").css("display", "none").addClass("form-control-feedback").attr("data-bv-icon-for", e).insertAfter(u);
                        if ("checkbox" === a || "radio" === a) {
                            var b = u.parent();
                            b.hasClass(a) ? m.insertAfter(b) : b.parent().hasClass(a) && m.insertAfter(b.parent())
                        }
                        0 === f.find("label").length && m.addClass("bv-no-label"), 0 !== f.find(".input-group").length && m.addClass("bv-icon-input-group").insertAfter(f.find(".input-group").eq(0)), g && u.off("focus.bv").on("focus.bv", function() {
                            switch (g) {
                                case "tooltip":
                                    m.tooltip("show");
                                    break;
                                case "popover":
                                    m.popover("show")
                            }
                        }).off("blur.bv").on("blur.bv", function() {
                            switch (g) {
                                case "tooltip":
                                    m.tooltip("hide");
                                    break;
                                case "popover":
                                    m.popover("hide")
                            }
                        })
                    }
                }
                switch (i.on(this.options.events.fieldSuccess, function(e, i) {
                    var n = s.getOptions(i.field, null, "onSuccess");
                    n && t.fn.bootstrapValidator.helpers.call(n, [e, i])
                }).on(this.options.events.fieldError, function(e, i) {
                    var n = s.getOptions(i.field, null, "onError");
                    n && t.fn.bootstrapValidator.helpers.call(n, [e, i])
                }).on(this.options.events.fieldStatus, function(e, i) {
                    var n = s.getOptions(i.field, null, "onStatus");
                    n && t.fn.bootstrapValidator.helpers.call(n, [e, i])
                }).on(this.options.events.validatorError, function(e, i) {
                    var n = s.getOptions(i.field, i.validator, "onError");
                    n && t.fn.bootstrapValidator.helpers.call(n, [e, i])
                }).on(this.options.events.validatorSuccess, function(e, i) {
                    var n = s.getOptions(i.field, i.validator, "onSuccess");
                    n && t.fn.bootstrapValidator.helpers.call(n, [e, i])
                }), c = t.map(d, function(t) {
                    return t + ".live.bv"
                }).join(" "), this.options.live) {
                    case "submitted":
                        break;
                    case "disabled":
                        i.off(c);
                        break;
                    case "enabled":
                    default:
                        i.off(c).on(c, function() {
                            s._exceedThreshold(t(this)) && s.validateField(t(this))
                        })
                }
                i.trigger(t.Event(this.options.events.fieldInit), {
                    bv: this,
                    field: e,
                    element: i
                })
            }
        },
        _getMessage: function(e, i) {
            if (!(this.options.fields[e] && t.fn.bootstrapValidator.validators[i] && this.options.fields[e].validators && this.options.fields[e].validators[i])) return "";
            var n = this.options.fields[e].validators[i];
            switch (!0) {
                case !!n.message:
                    return n.message;
                case !!this.options.fields[e].message:
                    return this.options.fields[e].message;
                case !!t.fn.bootstrapValidator.i18n[i]:
                    return t.fn.bootstrapValidator.i18n[i].default;
                default:
                    return this.options.message
            }
        },
        _getMessageContainer: function(t, e) {
            var i = t.parent();
            if (i.is(e)) return i;
            var n = i.attr("class");
            if (!n) return this._getMessageContainer(i, e);
            for (var s = (n = n.split(" ")).length, r = 0; s > r; r++)
                if (/^col-(xs|sm|md|lg)-\d+$/.test(n[r]) || /^col-(xs|sm|md|lg)-offset-\d+$/.test(n[r])) return i;
            return this._getMessageContainer(i, e)
        },
        _submit: function() {
            var e = this.isValid(),
                i = e ? this.options.events.formSuccess : this.options.events.formError,
                n = t.Event(i);
            this.$form.trigger(n), this.$submitButton && (e ? this._onSuccess(n) : this._onError(n))
        },
        _isExcluded: function(e) {
            var i = e.attr("data-bv-excluded"),
                n = e.attr("data-bv-field") || e.attr("name");
            switch (!0) {
                case !!n && this.options.fields && this.options.fields[n] && ("true" === this.options.fields[n].excluded || !0 === this.options.fields[n].excluded):
                case "true" === i:
                case "" === i:
                    return !0;
                case !!n && this.options.fields && this.options.fields[n] && ("false" === this.options.fields[n].excluded || !1 === this.options.fields[n].excluded):
                case "false" === i:
                    return !1;
                default:
                    if (this.options.excluded) {
                        "string" == typeof this.options.excluded && (this.options.excluded = t.map(this.options.excluded.split(","), function(e) {
                            return t.trim(e)
                        }));
                        for (var s = this.options.excluded.length, r = 0; s > r; r++)
                            if ("string" == typeof this.options.excluded[r] && e.is(this.options.excluded[r]) || "function" == typeof this.options.excluded[r] && !0 === this.options.excluded[r].call(this, e, this)) return !0
                    }
                    return !1
            }
        },
        _exceedThreshold: function(e) {
            var i = e.attr("data-bv-field"),
                n = this.options.fields[i].threshold || this.options.threshold;
            return !n || (-1 !== t.inArray(e.attr("type"), ["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"]) || e.val().length >= n)
        },
        _onError: function(e) {
            if (!e.isDefaultPrevented()) {
                if ("submitted" === this.options.live) {
                    this.options.live = "enabled";
                    var i = this;
                    for (var n in this.options.fields) ! function(e) {
                        var s = i.getFieldElements(e);
                        if (s.length) {
                            var r = t(s[0]).attr("type"),
                                a = "radio" === r || "checkbox" === r || "file" === r || "SELECT" === t(s[0]).get(0).tagName ? "change" : i._changeEvent,
                                o = i.options.fields[n].trigger || i.options.trigger || a,
                                l = t.map(o.split(" "), function(t) {
                                    return t + ".live.bv"
                                }).join(" ");
                            s.off(l).on(l, function() {
                                i._exceedThreshold(t(this)) && i.validateField(t(this))
                            })
                        }
                    }(n)
                }
                var s = this.$invalidFields.eq(0);
                if (s) {
                    var r, a = s.parents(".tab-pane");
                    a && (r = a.attr("id")) && t('a[href="#' + r + '"][data-toggle="tab"]').tab("show"), s.focus()
                }
            }
        },
        _onSuccess: function(t) {
            t.isDefaultPrevented() || this.disableSubmitButtons(!0).defaultSubmit()
        },
        _onFieldValidated: function(e, i) {
            var n = e.attr("data-bv-field"),
                s = this.options.fields[n].validators,
                r = {},
                a = 0,
                o = {
                    bv: this,
                    field: n,
                    element: e,
                    validator: i,
                    result: e.data("bv.response." + i)
                };
            if (i) switch (e.data("bv.result." + i)) {
                case this.STATUS_INVALID:
                    e.trigger(t.Event(this.options.events.validatorError), o);
                    break;
                case this.STATUS_VALID:
                    e.trigger(t.Event(this.options.events.validatorSuccess), o)
            }
            r[this.STATUS_NOT_VALIDATED] = 0, r[this.STATUS_VALIDATING] = 0, r[this.STATUS_INVALID] = 0, r[this.STATUS_VALID] = 0;
            for (var l in s)
                if (!1 !== s[l].enabled) {
                    a++;
                    var d = e.data("bv.result." + l);
                    d && r[d]++
                }
            r[this.STATUS_VALID] === a ? (this.$invalidFields = this.$invalidFields.not(e), e.trigger(t.Event(this.options.events.fieldSuccess), o)) : 0 === r[this.STATUS_NOT_VALIDATED] && 0 === r[this.STATUS_VALIDATING] && r[this.STATUS_INVALID] > 0 && (this.$invalidFields = this.$invalidFields.add(e), e.trigger(t.Event(this.options.events.fieldError), o))
        },
        getFieldElements: function(e) {
            return this._cacheFields[e] || (this._cacheFields[e] = this.options.fields[e] && this.options.fields[e].selector ? t(this.options.fields[e].selector) : this.$form.find('[name="' + e + '"]')), this._cacheFields[e]
        },
        getOptions: function(t, e, i) {
            if (!t) return this.options;
            if ("object" == typeof t && (t = t.attr("data-bv-field")), !this.options.fields[t]) return null;
            var n = this.options.fields[t];
            return e ? n.validators && n.validators[e] ? i ? n.validators[e][i] : n.validators[e] : null : i ? n[i] : n
        },
        disableSubmitButtons: function(t) {
            return t ? "disabled" !== this.options.live && this.$form.find(this.options.submitButtons).attr("disabled", "disabled") : this.$form.find(this.options.submitButtons).removeAttr("disabled"), this
        },
        validate: function() {
            if (!this.options.fields) return this;
            this.disableSubmitButtons(!0);
            for (var t in this.options.fields) this.validateField(t);
            return this._submit(), this
        },
        validateField: function(e) {
            var i = t([]);
            switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    i = this.getFieldElements(e)
            }
            if (0 === i.length || this.options.fields[e] && !1 === this.options.fields[e].enabled) return this;
            for (var n, s, r = this, a = i.attr("type"), o = "radio" === a || "checkbox" === a ? 1 : i.length, l = "radio" === a || "checkbox" === a, d = this.options.fields[e].validators, c = "true" === this.options.fields[e].verbose || !0 === this.options.fields[e].verbose || "true" === this.options.verbose || !0 === this.options.verbose, h = 0; o > h; h++) {
                var u = i.eq(h);
                if (!this._isExcluded(u)) {
                    var p = !1;
                    for (n in d) {
                        if (u.data("bv.dfs." + n) && u.data("bv.dfs." + n).reject(), p) break;
                        var f = u.data("bv.result." + n);
                        if (f !== this.STATUS_VALID && f !== this.STATUS_INVALID)
                            if (!1 !== d[n].enabled) {
                                if (u.data("bv.result." + n, this.STATUS_VALIDATING), "object" == typeof(s = t.fn.bootstrapValidator.validators[n].validate(this, u, d[n])) && s.resolve) this.updateStatus(l ? e : u, this.STATUS_VALIDATING, n), u.data("bv.dfs." + n, s), s.done(function(t, e, i) {
                                    t.removeData("bv.dfs." + e).data("bv.response." + e, i), i.message && r.updateMessage(t, e, i.message), r.updateStatus(l ? t.attr("data-bv-field") : t, i.valid ? r.STATUS_VALID : r.STATUS_INVALID, e), i.valid && !0 === r._submitIfValid ? r._submit() : i.valid || c || (p = !0)
                                });
                                else if ("object" == typeof s && void 0 !== s.valid && void 0 !== s.message) {
                                    if (u.data("bv.response." + n, s), this.updateMessage(l ? e : u, n, s.message), this.updateStatus(l ? e : u, s.valid ? this.STATUS_VALID : this.STATUS_INVALID, n), !s.valid && !c) break
                                } else if ("boolean" == typeof s && (u.data("bv.response." + n, s), this.updateStatus(l ? e : u, s ? this.STATUS_VALID : this.STATUS_INVALID, n), !s && !c)) break
                            } else this.updateStatus(l ? e : u, this.STATUS_VALID, n);
                        else this._onFieldValidated(u, n)
                    }
                }
            }
            return this
        },
        updateMessage: function(e, i, n) {
            var s = t([]);
            switch (typeof e) {
                case "object":
                    s = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    s = this.getFieldElements(e)
            }
            s.each(function() {
                t(this).data("bv.messages").find('.help-block[data-bv-validator="' + i + '"][data-bv-for="' + e + '"]').html(n)
            })
        },
        updateStatus: function(e, i, n) {
            var s = t([]);
            switch (typeof e) {
                case "object":
                    s = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    s = this.getFieldElements(e)
            }
            i === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1);
            for (var r = this, a = s.attr("type"), o = this.options.fields[e].group || this.options.group, l = "radio" === a || "checkbox" === a ? 1 : s.length, d = 0; l > d; d++) {
                var c = s.eq(d);
                if (!this._isExcluded(c)) {
                    var h = c.parents(o),
                        u = c.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + e + '"]'),
                        p = n ? u.filter('[data-bv-validator="' + n + '"]') : u,
                        f = h.find('.form-control-feedback[data-bv-icon-for="' + e + '"]'),
                        g = "function" == typeof(this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, c, this) : this.options.fields[e].container || this.options.container,
                        v = null;
                    if (n) c.data("bv.result." + n, i);
                    else
                        for (var m in this.options.fields[e].validators) c.data("bv.result." + m, i);
                    p.attr("data-bv-result", i);
                    var b, y, w = c.parents(".tab-pane");
                    switch (w && (b = w.attr("id")) && (y = t('a[href="#' + b + '"][data-toggle="tab"]').parent()), i) {
                        case this.STATUS_VALIDATING:
                            v = null, this.disableSubmitButtons(!0), h.removeClass("has-success").removeClass("has-error"), f && f.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show(), y && y.removeClass("bv-tab-success").removeClass("bv-tab-error");
                            break;
                        case this.STATUS_INVALID:
                            v = !1, this.disableSubmitButtons(!0), h.removeClass("has-success").addClass("has-error"), f && f.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show(), y && y.removeClass("bv-tab-success").addClass("bv-tab-error");
                            break;
                        case this.STATUS_VALID:
                            null !== (v = 0 === u.filter('[data-bv-result="' + this.STATUS_NOT_VALIDATED + '"]').length ? u.filter('[data-bv-result="' + this.STATUS_VALID + '"]').length === u.length : null) && (this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !v), f && f.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(v ? this.options.feedbackIcons.valid : this.options.feedbackIcons.invalid).show()), h.removeClass("has-error has-success").addClass(this.isValidContainer(h) ? "has-success" : "has-error"), y && y.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(w) ? "bv-tab-success" : "bv-tab-error");
                            break;
                        case this.STATUS_NOT_VALIDATED:
                        default:
                            v = null, this.disableSubmitButtons(!1), h.removeClass("has-success").removeClass("has-error"), f && f.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(), y && y.removeClass("bv-tab-success").removeClass("bv-tab-error")
                    }
                    switch (!0) {
                        case f && "tooltip" === g:
                            !1 === v ? f.css("cursor", "pointer").tooltip("destroy").tooltip({
                                container: "body",
                                html: !0,
                                placement: "top",
                                title: u.filter('[data-bv-result="' + r.STATUS_INVALID + '"]').eq(0).html()
                            }) : f.tooltip("hide");
                            break;
                        case f && "popover" === g:
                            !1 === v ? f.css("cursor", "pointer").popover("destroy").popover({
                                container: "body",
                                content: u.filter('[data-bv-result="' + r.STATUS_INVALID + '"]').eq(0).html(),
                                html: !0,
                                placement: "top",
                                trigger: "hover click"
                            }) : f.popover("hide");
                            break;
                        default:
                            i === this.STATUS_INVALID ? p.show() : p.hide()
                    }
                    c.trigger(t.Event(this.options.events.fieldStatus), {
                        bv: this,
                        field: e,
                        element: c,
                        status: i
                    }), this._onFieldValidated(c, n)
                }
            }
            return this
        },
        isValid: function() {
            for (var t in this.options.fields)
                if (!this.isValidField(t)) return !1;
            return !0
        },
        isValidField: function(e) {
            var i = t([]);
            switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    i = this.getFieldElements(e)
            }
            if (0 === i.length || null === this.options.fields[e] || !1 === this.options.fields[e].enabled) return !0;
            for (var n, s, r = i.attr("type"), a = "radio" === r || "checkbox" === r ? 1 : i.length, o = 0; a > o; o++)
                if (n = i.eq(o), !this._isExcluded(n))
                    for (s in this.options.fields[e].validators)
                        if (!1 !== this.options.fields[e].validators[s].enabled && n.data("bv.result." + s) !== this.STATUS_VALID) return !1;
            return !0
        },
        isValidContainer: function(e) {
            var i = this,
                n = {},
                s = "string" == typeof e ? t(e) : e;
            if (0 === s.length) return !0;
            s.find("[data-bv-field]").each(function() {
                var e = t(this),
                    s = e.attr("data-bv-field");
                i._isExcluded(e) || n[s] || (n[s] = e)
            });
            for (var r in n)
                if (n[r].data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + r + '"]').filter('[data-bv-result="' + this.STATUS_INVALID + '"]').length > 0) return !1;
            return !0
        },
        defaultSubmit: function() {
            this.$submitButton && t("<input/>").attr("type", "hidden").attr("data-bv-submit-hidden", "").attr("name", this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form), this.$form.off("submit.bv").submit()
        },
        getInvalidFields: function() {
            return this.$invalidFields
        },
        getSubmitButton: function() {
            return this.$submitButton
        },
        getMessages: function(e, i) {
            var n = this,
                s = [],
                r = t([]);
            switch (!0) {
                case e && "object" == typeof e:
                    r = e;
                    break;
                case e && "string" == typeof e:
                    var a = this.getFieldElements(e);
                    if (a.length > 0) {
                        var o = a.attr("type");
                        r = "radio" === o || "checkbox" === o ? a.eq(0) : a
                    }
                    break;
                default:
                    r = this.$invalidFields
            }
            var l = i ? '[data-bv-validator="' + i + '"]' : "";
            return r.each(function() {
                s = s.concat(t(this).data("bv.messages").find('.help-block[data-bv-for="' + t(this).attr("data-bv-field") + '"][data-bv-result="' + n.STATUS_INVALID + '"]' + l).map(function() {
                    var e = t(this).attr("data-bv-validator"),
                        i = t(this).attr("data-bv-for");
                    return !1 === n.options.fields[i].validators[e].enabled ? "" : t(this).html()
                }).get())
            }), s
        },
        updateOption: function(t, e, i, n) {
            return "object" == typeof t && (t = t.attr("data-bv-field")), this.options.fields[t] && this.options.fields[t].validators[e] && (this.options.fields[t].validators[e][i] = n, this.updateStatus(t, this.STATUS_NOT_VALIDATED, e)), this
        },
        addField: function(e, i) {
            var n = t([]);
            switch (typeof e) {
                case "object":
                    n = e, e = e.attr("data-bv-field") || e.attr("name");
                    break;
                case "string":
                    delete this._cacheFields[e], n = this.getFieldElements(e)
            }
            n.attr("data-bv-field", e);
            for (var s = n.attr("type"), r = "radio" === s || "checkbox" === s ? 1 : n.length, a = 0; r > a; a++) {
                var o = n.eq(a),
                    l = this._parseOptions(o);
                l = null === l ? i : t.extend(!0, i, l), this.options.fields[e] = t.extend(!0, this.options.fields[e], l), this._cacheFields[e] = this._cacheFields[e] ? this._cacheFields[e].add(o) : o, this._initField("checkbox" === s || "radio" === s ? e : o)
            }
            return this.disableSubmitButtons(!1), this.$form.trigger(t.Event(this.options.events.fieldAdded), {
                field: e,
                element: n,
                options: this.options.fields[e]
            }), this
        },
        removeField: function(e) {
            var i = t([]);
            switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-bv-field") || e.attr("name"), i.attr("data-bv-field", e);
                    break;
                case "string":
                    i = this.getFieldElements(e)
            }
            if (0 === i.length) return this;
            for (var n = i.attr("type"), s = "radio" === n || "checkbox" === n ? 1 : i.length, r = 0; s > r; r++) {
                var a = i.eq(r);
                this.$invalidFields = this.$invalidFields.not(a), this._cacheFields[e] = this._cacheFields[e].not(a)
            }
            return this._cacheFields[e] && 0 !== this._cacheFields[e].length || delete this.options.fields[e], ("checkbox" === n || "radio" === n) && this._initField(e), this.disableSubmitButtons(!1), this.$form.trigger(t.Event(this.options.events.fieldRemoved), {
                field: e,
                element: i
            }), this
        },
        resetField: function(e, i) {
            var n = t([]);
            switch (typeof e) {
                case "object":
                    n = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    n = this.getFieldElements(e)
            }
            var s = n.length;
            if (this.options.fields[e])
                for (var r = 0; s > r; r++)
                    for (var a in this.options.fields[e].validators) n.eq(r).removeData("bv.dfs." + a);
            if (this.updateStatus(e, this.STATUS_NOT_VALIDATED), i) {
                var o = n.attr("type");
                "radio" === o || "checkbox" === o ? n.removeAttr("checked").removeAttr("selected") : n.val("")
            }
            return this
        },
        resetForm: function(e) {
            for (var i in this.options.fields) this.resetField(i, e);
            return this.$invalidFields = t([]), this.$submitButton = null, this.disableSubmitButtons(!1), this
        },
        revalidateField: function(t) {
            return this.updateStatus(t, this.STATUS_NOT_VALIDATED).validateField(t), this
        },
        enableFieldValidators: function(t, e, i) {
            var n = this.options.fields[t].validators;
            if (i && n && n[i] && n[i].enabled !== e) this.options.fields[t].validators[i].enabled = e, this.updateStatus(t, this.STATUS_NOT_VALIDATED, i);
            else if (!i && this.options.fields[t].enabled !== e) {
                this.options.fields[t].enabled = e;
                for (var s in n) this.enableFieldValidators(t, e, s)
            }
            return this
        },
        getDynamicOption: function(e, i) {
            var n = "string" == typeof e ? this.getFieldElements(e) : e,
                s = n.val();
            if ("function" == typeof i) return t.fn.bootstrapValidator.helpers.call(i, [s, this, n]);
            if ("string" == typeof i) {
                var r = this.getFieldElements(i);
                return r.length ? r.val() : t.fn.bootstrapValidator.helpers.call(i, [s, this, n]) || i
            }
            return null
        },
        destroy: function() {
            var e, i, n, s, r, a;
            for (e in this.options.fields) {
                i = this.getFieldElements(e), a = this.options.fields[e].group || this.options.group;
                for (var o = 0; o < i.length; o++) {
                    if ((n = i.eq(o)).data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').remove().end().end().removeData("bv.messages").parents(a).removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"), r = n.parents(a).find('i[data-bv-icon-for="' + e + '"]')) switch ("function" == typeof(this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, n, this) : this.options.fields[e].container || this.options.container) {
                        case "tooltip":
                            r.tooltip("destroy").remove();
                            break;
                        case "popover":
                            r.popover("destroy").remove();
                            break;
                        default:
                            r.remove()
                    }
                    for (s in this.options.fields[e].validators) n.data("bv.dfs." + s) && n.data("bv.dfs." + s).reject(), n.removeData("bv.result." + s).removeData("bv.response." + s).removeData("bv.dfs." + s), "function" == typeof t.fn.bootstrapValidator.validators[s].destroy && t.fn.bootstrapValidator.validators[s].destroy(this, n, this.options.fields[e].validators[s])
                }
            }
            this.disableSubmitButtons(!1), this.$hiddenButton.remove(), this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove().end().find('[type="submit"]').off("click.bv")
        }
    }, t.fn.bootstrapValidator = function(i) {
        var n = arguments;
        return this.each(function() {
            var s = t(this),
                r = s.data("bootstrapValidator"),
                a = "object" == typeof i && i;
            r || (r = new e(this, a), s.data("bootstrapValidator", r)), "string" == typeof i && r[i].apply(r, Array.prototype.slice.call(n, 1))
        })
    }, t.fn.bootstrapValidator.DEFAULT_OPTIONS = {
        elementClass: "bv-form",
        message: "This value is not valid",
        group: ".form-group",
        container: null,
        threshold: null,
        excluded: [":disabled", ":hidden", ":not(:visible)"],
        feedbackIcons: {
            valid: null,
            invalid: null,
            validating: null
        },
        submitButtons: '[type="submit"]',
        live: "enabled",
        fields: null,
        events: {
            formInit: "init.form.bv",
            formError: "error.form.bv",
            formSuccess: "success.form.bv",
            fieldAdded: "added.field.bv",
            fieldRemoved: "removed.field.bv",
            fieldInit: "init.field.bv",
            fieldError: "error.field.bv",
            fieldSuccess: "success.field.bv",
            fieldStatus: "status.field.bv",
            validatorError: "error.validator.bv",
            validatorSuccess: "success.validator.bv"
        },
        verbose: !0
    }, t.fn.bootstrapValidator.validators = {}, t.fn.bootstrapValidator.i18n = {}, t.fn.bootstrapValidator.Constructor = e, t.fn.bootstrapValidator.helpers = {
        call: function(t, e) {
            if ("function" == typeof t) return t.apply(this, e);
            if ("string" == typeof t) {
                "()" === t.substring(t.length - 2) && (t = t.substring(0, t.length - 2));
                for (var i = t.split("."), n = i.pop(), s = window, r = 0; r < i.length; r++) s = s[i[r]];
                return void 0 === s[n] ? null : s[n].apply(this, e)
            }
        },
        format: function(e, i) {
            t.isArray(i) || (i = [i]);
            for (var n in i) e = e.replace("%s", i[n]);
            return e
        },
        date: function(t, e, i, n) {
            if (isNaN(t) || isNaN(e) || isNaN(i)) return !1;
            if (i.length > 2 || e.length > 2 || t.length > 4) return !1;
            if (i = parseInt(i, 10), e = parseInt(e, 10), 1e3 > (t = parseInt(t, 10)) || t > 9999 || 0 >= e || e > 12) return !1;
            var s = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((t % 400 == 0 || t % 100 != 0 && t % 4 == 0) && (s[1] = 29), 0 >= i || i > s[e - 1]) return !1;
            if (!0 === n) {
                var r = new Date,
                    a = r.getFullYear(),
                    o = r.getMonth(),
                    l = r.getDate();
                return a > t || t === a && o > e - 1 || t === a && e - 1 === o && l > i
            }
            return !0
        },
        luhn: function(t) {
            for (var e = t.length, i = 0, n = [
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
            ], s = 0; e--;) s += n[i][parseInt(t.charAt(e), 10)], i ^= 1;
            return s % 10 == 0 && s > 0
        },
        mod11And10: function(t) {
            for (var e = 5, i = t.length, n = 0; i > n; n++) e = (2 * (e || 10) % 11 + parseInt(t.charAt(n), 10)) % 10;
            return 1 === e
        },
        mod37And36: function(t, e) {
            for (var i = (e = e || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").length, n = t.length, s = Math.floor(i / 2), r = 0; n > r; r++) s = (2 * (s || i) % (i + 1) + e.indexOf(t.charAt(r))) % i;
            return 1 === s
        }
    }
}(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.base64 = t.extend(t.fn.bootstrapValidator.i18n.base64 || {}, {
            default: "Please enter a valid base 64 encoded"
        }), t.fn.bootstrapValidator.validators.base64 = {
            validate: function(t, e) {
                var i = e.val();
                return "" === i || /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(i)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.between = t.extend(t.fn.bootstrapValidator.i18n.between || {}, {
            default: "Please enter a value between %s and %s",
            notInclusive: "Please enter a value between %s and %s strictly"
        }), t.fn.bootstrapValidator.validators.between = {
            html5Attributes: {
                message: "message",
                min: "min",
                max: "max",
                inclusive: "inclusive"
            },
            enableByHtml5: function(t) {
                return "range" === t.attr("type") && {
                    min: t.attr("min"),
                    max: t.attr("max")
                }
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                if (!t.isNumeric(s)) return !1;
                var r = t.isNumeric(n.min) ? n.min : e.getDynamicOption(i, n.min),
                    a = t.isNumeric(n.max) ? n.max : e.getDynamicOption(i, n.max);
                return s = parseFloat(s), !0 === n.inclusive || void 0 === n.inclusive ? {
                    valid: s >= r && a >= s,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.between.default, [r, a])
                } : {
                    valid: s > r && a > s,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.between.notInclusive, [r, a])
                }
            }
        }
    }(window.jQuery), window.jQuery.fn.bootstrapValidator.validators.blank = {
    validate: function() {
        return !0
    }
},
    function(t) {
        t.fn.bootstrapValidator.i18n.callback = t.extend(t.fn.bootstrapValidator.i18n.callback || {}, {
            default: "Please enter a valid value"
        }), t.fn.bootstrapValidator.validators.callback = {
            html5Attributes: {
                message: "message",
                callback: "callback"
            },
            validate: function(e, i, n) {
                var s = i.val(),
                    r = new t.Deferred,
                    a = {
                        valid: !0
                    };
                if (n.callback) {
                    var o = t.fn.bootstrapValidator.helpers.call(n.callback, [s, e, i]);
                    a = "boolean" == typeof o ? {
                        valid: o
                    } : o
                }
                return r.resolve(i, "callback", a), r
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.choice = t.extend(t.fn.bootstrapValidator.i18n.choice || {}, {
            default: "Please enter a valid value",
            less: "Please choose %s options at minimum",
            more: "Please choose %s options at maximum",
            between: "Please choose %s - %s options"
        }), t.fn.bootstrapValidator.validators.choice = {
            html5Attributes: {
                message: "message",
                min: "min",
                max: "max"
            },
            validate: function(e, i, n) {
                var s = i.is("select") ? e.getFieldElements(i.attr("data-bv-field")).find("option").filter(":selected").length : e.getFieldElements(i.attr("data-bv-field")).filter(":checked").length,
                    r = n.min ? t.isNumeric(n.min) ? n.min : e.getDynamicOption(i, n.min) : null,
                    a = n.max ? t.isNumeric(n.max) ? n.max : e.getDynamicOption(i, n.max) : null,
                    o = !0,
                    l = n.message || t.fn.bootstrapValidator.i18n.choice.default;
                switch ((r && s < parseInt(r, 10) || a && s > parseInt(a, 10)) && (o = !1), !0) {
                    case !!r && !!a:
                        l = t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.choice.between, [parseInt(r, 10), parseInt(a, 10)]);
                        break;
                    case !!r:
                        l = t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.choice.less, parseInt(r, 10));
                        break;
                    case !!a:
                        l = t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.choice.more, parseInt(a, 10))
                }
                return {
                    valid: o,
                    message: l
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.creditCard = t.extend(t.fn.bootstrapValidator.i18n.creditCard || {}, {
            default: "Please enter a valid credit card number"
        }), t.fn.bootstrapValidator.validators.creditCard = {
            validate: function(e, i) {
                var n = i.val();
                if ("" === n) return !0;
                if (/[^0-9-\s]+/.test(n)) return !1;
                if (n = n.replace(/\D/g, ""), !t.fn.bootstrapValidator.helpers.luhn(n)) return !1;
                var s, r, a = {
                    AMERICAN_EXPRESS: {
                        length: [15],
                        prefix: ["34", "37"]
                    },
                    DINERS_CLUB: {
                        length: [14],
                        prefix: ["300", "301", "302", "303", "304", "305", "36"]
                    },
                    DINERS_CLUB_US: {
                        length: [16],
                        prefix: ["54", "55"]
                    },
                    DISCOVER: {
                        length: [16],
                        prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
                    },
                    JCB: {
                        length: [16],
                        prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
                    },
                    LASER: {
                        length: [16, 17, 18, 19],
                        prefix: ["6304", "6706", "6771", "6709"]
                    },
                    MAESTRO: {
                        length: [12, 13, 14, 15, 16, 17, 18, 19],
                        prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
                    },
                    MASTERCARD: {
                        length: [16],
                        prefix: ["51", "52", "53", "54", "55"]
                    },
                    SOLO: {
                        length: [16, 18, 19],
                        prefix: ["6334", "6767"]
                    },
                    UNIONPAY: {
                        length: [16, 17, 18, 19],
                        prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
                    },
                    VISA: {
                        length: [16],
                        prefix: ["4"]
                    }
                };
                for (s in a)
                    for (r in a[s].prefix)
                        if (n.substr(0, a[s].prefix[r].length) === a[s].prefix[r] && -1 !== t.inArray(n.length, a[s].length)) return !0;
                return !1
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.cusip = t.extend(t.fn.bootstrapValidator.i18n.cusip || {}, {
            default: "Please enter a valid CUSIP number"
        }), t.fn.bootstrapValidator.validators.cusip = {
            validate: function(e, i) {
                var n = i.val();
                if ("" === n) return !0;
                if (n = n.toUpperCase(), !/^[0-9A-Z]{9}$/.test(n)) return !1;
                for (var s = t.map(n.split(""), function(t) {
                    var e = t.charCodeAt(0);
                    return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t
                }), r = s.length, a = 0, o = 0; r - 1 > o; o++) {
                    var l = parseInt(s[o], 10);
                    o % 2 != 0 && (l *= 2), l > 9 && (l -= 9), a += l
                }
                return (a = (10 - a % 10) % 10) === s[r - 1]
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.cvv = t.extend(t.fn.bootstrapValidator.i18n.cvv || {}, {
            default: "Please enter a valid CVV number"
        }), t.fn.bootstrapValidator.validators.cvv = {
            html5Attributes: {
                message: "message",
                ccfield: "creditCardField"
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                if (!/^[0-9]{3,4}$/.test(s)) return !1;
                if (!n.creditCardField) return !0;
                var r = e.getFieldElements(n.creditCardField).val();
                if ("" === r) return !0;
                r = r.replace(/\D/g, "");
                var a, o, l = {
                        AMERICAN_EXPRESS: {
                            length: [15],
                            prefix: ["34", "37"]
                        },
                        DINERS_CLUB: {
                            length: [14],
                            prefix: ["300", "301", "302", "303", "304", "305", "36"]
                        },
                        DINERS_CLUB_US: {
                            length: [16],
                            prefix: ["54", "55"]
                        },
                        DISCOVER: {
                            length: [16],
                            prefix: ["6011", "622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925", "644", "645", "646", "647", "648", "649", "65"]
                        },
                        JCB: {
                            length: [16],
                            prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"]
                        },
                        LASER: {
                            length: [16, 17, 18, 19],
                            prefix: ["6304", "6706", "6771", "6709"]
                        },
                        MAESTRO: {
                            length: [12, 13, 14, 15, 16, 17, 18, 19],
                            prefix: ["5018", "5020", "5038", "6304", "6759", "6761", "6762", "6763", "6764", "6765", "6766"]
                        },
                        MASTERCARD: {
                            length: [16],
                            prefix: ["51", "52", "53", "54", "55"]
                        },
                        SOLO: {
                            length: [16, 18, 19],
                            prefix: ["6334", "6767"]
                        },
                        UNIONPAY: {
                            length: [16, 17, 18, 19],
                            prefix: ["622126", "622127", "622128", "622129", "62213", "62214", "62215", "62216", "62217", "62218", "62219", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "62290", "62291", "622920", "622921", "622922", "622923", "622924", "622925"]
                        },
                        VISA: {
                            length: [16],
                            prefix: ["4"]
                        }
                    },
                    d = null;
                for (a in l)
                    for (o in l[a].prefix)
                        if (r.substr(0, l[a].prefix[o].length) === l[a].prefix[o] && -1 !== t.inArray(r.length, l[a].length)) {
                            d = a;
                            break
                        }
                return null !== d && ("AMERICAN_EXPRESS" === d ? 4 === s.length : 3 === s.length)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.date = t.extend(t.fn.bootstrapValidator.i18n.date || {}, {
            default: "Please enter a valid date"
        }), t.fn.bootstrapValidator.validators.date = {
            html5Attributes: {
                message: "message",
                format: "format",
                separator: "separator"
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                n.format = n.format || "MM/DD/YYYY", "date" === i.attr("type") && (n.format = "YYYY-MM-DD");
                var r = n.format.split(" "),
                    a = r[0],
                    o = r.length > 1 ? r[1] : null,
                    l = r.length > 2 ? r[2] : null,
                    d = s.split(" "),
                    c = d[0],
                    h = d.length > 1 ? d[1] : null;
                if (r.length !== d.length) return !1;
                var u = n.separator;
                if (u || (u = -1 !== c.indexOf("/") ? "/" : -1 !== c.indexOf("-") ? "-" : null), null === u || -1 === c.indexOf(u)) return !1;
                if (c = c.split(u), a = a.split(u), c.length !== a.length) return !1;
                var p = c[t.inArray("YYYY", a)],
                    f = c[t.inArray("MM", a)],
                    g = c[t.inArray("DD", a)];
                if (!p || !f || !g || 4 !== p.length) return !1;
                var v = null,
                    m = null,
                    b = null;
                if (o) {
                    if (o = o.split(":"), h = h.split(":"), o.length !== h.length) return !1;
                    if (m = h.length > 0 ? h[0] : null, v = h.length > 1 ? h[1] : null, b = h.length > 2 ? h[2] : null) {
                        if (isNaN(b) || b.length > 2) return !1;
                        if (0 > (b = parseInt(b, 10)) || b > 60) return !1
                    }
                    if (m) {
                        if (isNaN(m) || m.length > 2) return !1;
                        if (0 > (m = parseInt(m, 10)) || m >= 24 || l && m > 12) return !1
                    }
                    if (v) {
                        if (isNaN(v) || v.length > 2) return !1;
                        if (0 > (v = parseInt(v, 10)) || v > 59) return !1
                    }
                }
                return t.fn.bootstrapValidator.helpers.date(p, f, g)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.different = t.extend(t.fn.bootstrapValidator.i18n.different || {}, {
            default: "Please enter a different value"
        }), t.fn.bootstrapValidator.validators.different = {
            html5Attributes: {
                message: "message",
                field: "field"
            },
            validate: function(t, e, i) {
                var n = e.val();
                if ("" === n) return !0;
                for (var s = i.field.split(","), r = !0, a = 0; a < s.length; a++) {
                    var o = t.getFieldElements(s[a]);
                    if (null != o && 0 !== o.length) {
                        var l = o.val();
                        n === l ? r = !1 : "" !== l && t.updateStatus(o, t.STATUS_VALID, "different")
                    }
                }
                return r
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.digits = t.extend(t.fn.bootstrapValidator.i18n.digits || {}, {
            default: "Please enter only digits"
        }), t.fn.bootstrapValidator.validators.digits = {
            validate: function(t, e) {
                var i = e.val();
                return "" === i || /^\d+$/.test(i)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.ean = t.extend(t.fn.bootstrapValidator.i18n.ean || {}, {
            default: "Please enter a valid EAN number"
        }), t.fn.bootstrapValidator.validators.ean = {
            validate: function(t, e) {
                var i = e.val();
                if ("" === i) return !0;
                if (!/^(\d{8}|\d{12}|\d{13})$/.test(i)) return !1;
                for (var n = i.length, s = 0, r = 8 === n ? [3, 1] : [1, 3], a = 0; n - 1 > a; a++) s += parseInt(i.charAt(a), 10) * r[a % 2];
                return (s = (10 - s % 10) % 10) + "" === i.charAt(n - 1)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.emailAddress = t.extend(t.fn.bootstrapValidator.i18n.emailAddress || {}, {
            default: "Please enter a valid email address"
        }), t.fn.bootstrapValidator.validators.emailAddress = {
            html5Attributes: {
                message: "message",
                multiple: "multiple",
                separator: "separator"
            },
            enableByHtml5: function(t) {
                return "email" === t.attr("type")
            },
            validate: function(t, e, i) {
                var n = e.val();
                if ("" === n) return !0;
                var s = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                if (!0 === i.multiple || "true" === i.multiple) {
                    for (var r = i.separator || /[,;]/, a = this._splitEmailAddresses(n, r), o = 0; o < a.length; o++)
                        if (!s.test(a[o])) return !1;
                    return !0
                }
                return s.test(n)
            },
            _splitEmailAddresses: function(t, e) {
                for (var i = t.split(/"/), n = i.length, s = [], r = "", a = 0; n > a; a++)
                    if (a % 2 == 0) {
                        var o = i[a].split(e),
                            l = o.length;
                        if (1 === l) r += o[0];
                        else {
                            s.push(r + o[0]);
                            for (var d = 1; l - 1 > d; d++) s.push(o[d]);
                            r = o[l - 1]
                        }
                    } else r += '"' + i[a], n - 1 > a && (r += '"');
                return s.push(r), s
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.file = t.extend(t.fn.bootstrapValidator.i18n.file || {}, {
            default: "Please choose a valid file"
        }), t.fn.bootstrapValidator.validators.file = {
            html5Attributes: {
                extension: "extension",
                maxsize: "maxSize",
                minsize: "minSize",
                message: "message",
                type: "type"
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                var r, a = n.extension ? n.extension.toLowerCase().split(",") : null,
                    o = n.type ? n.type.toLowerCase().split(",") : null;
                if (window.File && window.FileList && window.FileReader)
                    for (var l = i.get(0).files, d = l.length, c = 0; d > c; c++) {
                        if (n.minSize && l[c].size < parseInt(n.minSize, 10)) return !1;
                        if (n.maxSize && l[c].size > parseInt(n.maxSize, 10)) return !1;
                        if (r = l[c].name.substr(l[c].name.lastIndexOf(".") + 1), a && -1 === t.inArray(r.toLowerCase(), a)) return !1;
                        if (l[c].type && o && -1 === t.inArray(l[c].type.toLowerCase(), o)) return !1
                    } else if (r = s.substr(s.lastIndexOf(".") + 1), a && -1 === t.inArray(r.toLowerCase(), a)) return !1;
                return !0
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.greaterThan = t.extend(t.fn.bootstrapValidator.i18n.greaterThan || {}, {
            default: "Please enter a value greater than or equal to %s",
            notInclusive: "Please enter a value greater than %s"
        }), t.fn.bootstrapValidator.validators.greaterThan = {
            html5Attributes: {
                message: "message",
                value: "value",
                inclusive: "inclusive"
            },
            enableByHtml5: function(t) {
                var e = t.attr("type"),
                    i = t.attr("min");
                return !(!i || "date" === e) && {
                    value: i
                }
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                if (!t.isNumeric(s)) return !1;
                var r = t.isNumeric(n.value) ? n.value : e.getDynamicOption(i, n.value);
                return s = parseFloat(s), !0 === n.inclusive || void 0 === n.inclusive ? {
                    valid: s >= r,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.greaterThan.default, r)
                } : {
                    valid: s > r,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.greaterThan.notInclusive, r)
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.grid = t.extend(t.fn.bootstrapValidator.i18n.grid || {}, {
            default: "Please enter a valid GRId number"
        }), t.fn.bootstrapValidator.validators.grid = {
            validate: function(e, i) {
                var n = i.val();
                return "" === n || (n = n.toUpperCase(), !!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(n) && ("GRID:" === (n = n.replace(/\s/g, "").replace(/-/g, "")).substr(0, 5) && (n = n.substr(5)), t.fn.bootstrapValidator.helpers.mod37And36(n)))
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.hex = t.extend(t.fn.bootstrapValidator.i18n.hex || {}, {
            default: "Please enter a valid hexadecimal number"
        }), t.fn.bootstrapValidator.validators.hex = {
            validate: function(t, e) {
                var i = e.val();
                return "" === i || /^[0-9a-fA-F]+$/.test(i)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.hexColor = t.extend(t.fn.bootstrapValidator.i18n.hexColor || {}, {
            default: "Please enter a valid hex color"
        }), t.fn.bootstrapValidator.validators.hexColor = {
            enableByHtml5: function(t) {
                return "color" === t.attr("type")
            },
            validate: function(t, e) {
                var i = e.val();
                return "" === i || /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(i)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.iban = t.extend(t.fn.bootstrapValidator.i18n.iban || {}, {
            default: "Please enter a valid IBAN number",
            countryNotSupported: "The country code %s is not supported",
            country: "Please enter a valid IBAN number in %s",
            countries: {
                AD: "Andorra",
                AE: "United Arab Emirates",
                AL: "Albania",
                AO: "Angola",
                AT: "Austria",
                AZ: "Azerbaijan",
                BA: "Bosnia and Herzegovina",
                BE: "Belgium",
                BF: "Burkina Faso",
                BG: "Bulgaria",
                BH: "Bahrain",
                BI: "Burundi",
                BJ: "Benin",
                BR: "Brazil",
                CH: "Switzerland",
                CI: "Ivory Coast",
                CM: "Cameroon",
                CR: "Costa Rica",
                CV: "Cape Verde",
                CY: "Cyprus",
                CZ: "Czech Republic",
                DE: "Germany",
                DK: "Denmark",
                DO: "Dominica",
                DZ: "Algeria",
                EE: "Estonia",
                ES: "Spain",
                FI: "Finland",
                FO: "Faroe Islands",
                FR: "France",
                GB: "United Kingdom",
                GE: "Georgia",
                GI: "Gibraltar",
                GL: "Greenland",
                GR: "Greece",
                GT: "Guatemala",
                HR: "Croatia",
                HU: "Hungary",
                IE: "Ireland",
                IL: "Israel",
                IR: "Iran",
                IS: "Iceland",
                IT: "Italy",
                JO: "Jordan",
                KW: "Kuwait",
                KZ: "Kazakhstan",
                LB: "Lebanon",
                LI: "Liechtenstein",
                LT: "Lithuania",
                LU: "Luxembourg",
                LV: "Latvia",
                MC: "Monaco",
                MD: "Moldova",
                ME: "Montenegro",
                MG: "Madagascar",
                MK: "Macedonia",
                ML: "Mali",
                MR: "Mauritania",
                MT: "Malta",
                MU: "Mauritius",
                MZ: "Mozambique",
                NL: "Netherlands",
                NO: "Norway",
                PK: "Pakistan",
                PL: "Poland",
                PS: "Palestine",
                PT: "Portugal",
                QA: "Qatar",
                RO: "Romania",
                RS: "Serbia",
                SA: "Saudi Arabia",
                SE: "Sweden",
                SI: "Slovenia",
                SK: "Slovakia",
                SM: "San Marino",
                SN: "Senegal",
                TN: "Tunisia",
                TR: "Turkey",
                VG: "Virgin Islands, British"
            }
        }), t.fn.bootstrapValidator.validators.iban = {
            html5Attributes: {
                message: "message",
                country: "country"
            },
            REGEX: {
                AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
                AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
                AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
                AO: "AO[0-9]{2}[0-9]{21}",
                AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
                AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
                BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
                BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
                BF: "BF[0-9]{2}[0-9]{23}",
                BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
                BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
                BI: "BI[0-9]{2}[0-9]{12}",
                BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
                BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
                CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
                CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
                CM: "CM[0-9]{2}[0-9]{23}",
                CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}",
                CV: "CV[0-9]{2}[0-9]{21}",
                CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
                CZ: "CZ[0-9]{2}[0-9]{20}",
                DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
                DK: "DK[0-9]{2}[0-9]{14}",
                DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
                DZ: "DZ[0-9]{2}[0-9]{20}",
                EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
                ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
                FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
                FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
                FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
                GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
                GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
                GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
                GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
                GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
                GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
                HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
                HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
                IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
                IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
                IR: "IR[0-9]{2}[0-9]{22}",
                IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
                IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
                JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
                KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
                KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
                LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
                LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
                LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
                LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
                LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
                MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
                MD: "MD[0-9]{2}[A-Z0-9]{20}",
                ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                MG: "MG[0-9]{2}[0-9]{23}",
                MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
                ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
                MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
                MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
                MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
                MZ: "MZ[0-9]{2}[0-9]{21}",
                NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
                NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
                PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
                PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
                PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
                PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
                QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
                RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
                RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
                SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
                SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
                SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
                SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
                SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
                TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
                TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
                VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}"
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                s = s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
                var r = n.country;
                if (r ? "string" == typeof r && this.REGEX[r] || (r = e.getDynamicOption(i, r)) : r = s.substr(0, 2), !this.REGEX[r]) return {
                    valid: !1,
                    message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.iban.countryNotSupported, r)
                };
                if (!new RegExp("^" + this.REGEX[r] + "$").test(s)) return {
                    valid: !1,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.iban.country, t.fn.bootstrapValidator.i18n.iban.countries[r])
                };
                s = s.substr(4) + s.substr(0, 4), s = (s = t.map(s.split(""), function(t) {
                    var e = t.charCodeAt(0);
                    return e >= "A".charCodeAt(0) && e <= "Z".charCodeAt(0) ? e - "A".charCodeAt(0) + 10 : t
                })).join("");
                for (var a = parseInt(s.substr(0, 1), 10), o = s.length, l = 1; o > l; ++l) a = (10 * a + parseInt(s.substr(l, 1), 10)) % 97;
                return {
                    valid: 1 === a,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.iban.country, t.fn.bootstrapValidator.i18n.iban.countries[r])
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.id = t.extend(t.fn.bootstrapValidator.i18n.id || {}, {
            default: "Please enter a valid identification number",
            countryNotSupported: "The country code %s is not supported",
            country: "Please enter a valid identification number in %s",
            countries: {
                BA: "Bosnia and Herzegovina",
                BG: "Bulgaria",
                BR: "Brazil",
                CH: "Switzerland",
                CL: "Chile",
                CN: "China",
                CZ: "Czech Republic",
                DK: "Denmark",
                EE: "Estonia",
                ES: "Spain",
                FI: "Finland",
                HR: "Croatia",
                IE: "Ireland",
                IS: "Iceland",
                LT: "Lithuania",
                LV: "Latvia",
                ME: "Montenegro",
                MK: "Macedonia",
                NL: "Netherlands",
                RO: "Romania",
                RS: "Serbia",
                SE: "Sweden",
                SI: "Slovenia",
                SK: "Slovakia",
                SM: "San Marino",
                TH: "Thailand",
                ZA: "South Africa"
            }
        }), t.fn.bootstrapValidator.validators.id = {
            html5Attributes: {
                message: "message",
                country: "country"
            },
            COUNTRY_CODES: ["BA", "BG", "BR", "CH", "CL", "CN", "CZ", "DK", "EE", "ES", "FI", "HR", "IE", "IS", "LT", "LV", "ME", "MK", "NL", "RO", "RS", "SE", "SI", "SK", "SM", "TH", "ZA"],
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                var r = n.country;
                return r ? ("string" != typeof r || -1 === t.inArray(r.toUpperCase(), this.COUNTRY_CODES)) && (r = e.getDynamicOption(i, r)) : r = s.substr(0, 2), -1 === t.inArray(r, this.COUNTRY_CODES) ? {
                    valid: !1,
                    message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.id.countryNotSupported, r)
                } : !!this[["_", r.toLowerCase()].join("")](s) || {
                    valid: !1,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.id.country, t.fn.bootstrapValidator.i18n.id.countries[r.toUpperCase()])
                }
            },
            _validateJMBG: function(t, e) {
                if (!/^\d{13}$/.test(t)) return !1;
                var i = parseInt(t.substr(0, 2), 10),
                    n = parseInt(t.substr(2, 2), 10),
                    s = (parseInt(t.substr(4, 3), 10), parseInt(t.substr(7, 2), 10)),
                    r = parseInt(t.substr(12, 1), 10);
                if (i > 31 || n > 12) return !1;
                for (var a = 0, o = 0; 6 > o; o++) a += (7 - o) * (parseInt(t.charAt(o), 10) + parseInt(t.charAt(o + 6), 10));
                if ((10 === (a = 11 - a % 11) || 11 === a) && (a = 0), a !== r) return !1;
                switch (e.toUpperCase()) {
                    case "BA":
                        return s >= 10 && 19 >= s;
                    case "MK":
                        return s >= 41 && 49 >= s;
                    case "ME":
                        return s >= 20 && 29 >= s;
                    case "RS":
                        return s >= 70 && 99 >= s;
                    case "SI":
                        return s >= 50 && 59 >= s;
                    default:
                        return !0
                }
            },
            _ba: function(t) {
                return this._validateJMBG(t, "BA")
            },
            _mk: function(t) {
                return this._validateJMBG(t, "MK")
            },
            _me: function(t) {
                return this._validateJMBG(t, "ME")
            },
            _rs: function(t) {
                return this._validateJMBG(t, "RS")
            },
            _si: function(t) {
                return this._validateJMBG(t, "SI")
            },
            _bg: function(e) {
                if (!/^\d{10}$/.test(e) && !/^\d{6}\s\d{3}\s\d{1}$/.test(e)) return !1;
                e = e.replace(/\s/g, "");
                var i = parseInt(e.substr(0, 2), 10) + 1900,
                    n = parseInt(e.substr(2, 2), 10),
                    s = parseInt(e.substr(4, 2), 10);
                if (n > 40 ? (i += 100, n -= 40) : n > 20 && (i -= 100, n -= 20), !t.fn.bootstrapValidator.helpers.date(i, n, s)) return !1;
                for (var r = 0, a = [2, 4, 8, 5, 10, 9, 7, 3, 6], o = 0; 9 > o; o++) r += parseInt(e.charAt(o), 10) * a[o];
                return (r = r % 11 % 10) + "" === e.substr(9, 1)
            },
            _br: function(t) {
                if (/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t)) return !1;
                if (!/^\d{11}$/.test(t) && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(t)) return !1;
                t = t.replace(/\./g, "").replace(/-/g, "");
                for (var e = 0, i = 0; 9 > i; i++) e += (10 - i) * parseInt(t.charAt(i), 10);
                if ((10 === (e = 11 - e % 11) || 11 === e) && (e = 0), e + "" !== t.charAt(9)) return !1;
                var n = 0;
                for (i = 0; 10 > i; i++) n += (11 - i) * parseInt(t.charAt(i), 10);
                return (10 === (n = 11 - n % 11) || 11 === n) && (n = 0), n + "" === t.charAt(10)
            },
            _ch: function(t) {
                if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(t)) return !1;
                for (var e = (t = t.replace(/\D/g, "").substr(3)).length, i = 0, n = 8 === e ? [3, 1] : [1, 3], s = 0; e - 1 > s; s++) i += parseInt(t.charAt(s), 10) * n[s % 2];
                return (i = 10 - i % 10) + "" === t.charAt(e - 1)
            },
            _cl: function(t) {
                if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(t)) return !1;
                for (t = t.replace(/\-/g, ""); t.length < 9;) t = "0" + t;
                for (var e = 0, i = [3, 2, 7, 6, 5, 4, 3, 2], n = 0; 8 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return 11 === (e = 11 - e % 11) ? e = 0 : 10 === e && (e = "K"), e + "" === t.charAt(8).toUpperCase()
            },
            _cn: function(e) {
                if (e = e.trim(), !/^\d{15}$/.test(e) && !/^\d{17}[\dXx]{1}$/.test(e)) return !1;
                var i = {
                        11: {
                            0: [0],
                            1: [
                                [0, 9],
                                [11, 17]
                            ],
                            2: [0, 28, 29]
                        },
                        12: {
                            0: [0],
                            1: [
                                [0, 16]
                            ],
                            2: [0, 21, 23, 25]
                        },
                        13: {
                            0: [0],
                            1: [
                                [0, 5], 7, 8, 21, [23, 33],
                                [81, 85]
                            ],
                            2: [
                                [0, 5],
                                [7, 9],
                                [23, 25], 27, 29, 30, 81, 83
                            ],
                            3: [
                                [0, 4],
                                [21, 24]
                            ],
                            4: [
                                [0, 4], 6, 21, [23, 35], 81
                            ],
                            5: [
                                [0, 3],
                                [21, 35], 81, 82
                            ],
                            6: [
                                [0, 4],
                                [21, 38],
                                [81, 84]
                            ],
                            7: [
                                [0, 3], 5, 6, [21, 33]
                            ],
                            8: [
                                [0, 4],
                                [21, 28]
                            ],
                            9: [
                                [0, 3],
                                [21, 30],
                                [81, 84]
                            ],
                            10: [
                                [0, 3],
                                [22, 26], 28, 81, 82
                            ],
                            11: [
                                [0, 2],
                                [21, 28], 81, 82
                            ]
                        },
                        14: {
                            0: [0],
                            1: [0, 1, [5, 10],
                                [21, 23], 81
                            ],
                            2: [
                                [0, 3], 11, 12, [21, 27]
                            ],
                            3: [
                                [0, 3], 11, 21, 22
                            ],
                            4: [
                                [0, 2], 11, 21, [23, 31], 81
                            ],
                            5: [
                                [0, 2], 21, 22, 24, 25, 81
                            ],
                            6: [
                                [0, 3],
                                [21, 24]
                            ],
                            7: [
                                [0, 2],
                                [21, 29], 81
                            ],
                            8: [
                                [0, 2],
                                [21, 30], 81, 82
                            ],
                            9: [
                                [0, 2],
                                [21, 32], 81
                            ],
                            10: [
                                [0, 2],
                                [21, 34], 81, 82
                            ],
                            11: [
                                [0, 2],
                                [21, 30], 81, 82
                            ],
                            23: [
                                [0, 3], 22, 23, [25, 30], 32, 33
                            ]
                        },
                        15: {
                            0: [0],
                            1: [
                                [0, 5],
                                [21, 25]
                            ],
                            2: [
                                [0, 7],
                                [21, 23]
                            ],
                            3: [
                                [0, 4]
                            ],
                            4: [
                                [0, 4],
                                [21, 26],
                                [28, 30]
                            ],
                            5: [
                                [0, 2],
                                [21, 26], 81
                            ],
                            6: [
                                [0, 2],
                                [21, 27]
                            ],
                            7: [
                                [0, 3],
                                [21, 27],
                                [81, 85]
                            ],
                            8: [
                                [0, 2],
                                [21, 26]
                            ],
                            9: [
                                [0, 2],
                                [21, 29], 81
                            ],
                            22: [
                                [0, 2],
                                [21, 24]
                            ],
                            25: [
                                [0, 2],
                                [22, 31]
                            ],
                            26: [
                                [0, 2],
                                [24, 27],
                                [29, 32], 34
                            ],
                            28: [0, 1, [22, 27]],
                            29: [0, [21, 23]]
                        },
                        21: {
                            0: [0],
                            1: [
                                [0, 6],
                                [11, 14],
                                [22, 24], 81
                            ],
                            2: [
                                [0, 4],
                                [11, 13], 24, [81, 83]
                            ],
                            3: [
                                [0, 4], 11, 21, 23, 81
                            ],
                            4: [
                                [0, 4], 11, [21, 23]
                            ],
                            5: [
                                [0, 5], 21, 22
                            ],
                            6: [
                                [0, 4], 24, 81, 82
                            ],
                            7: [
                                [0, 3], 11, 26, 27, 81, 82
                            ],
                            8: [
                                [0, 4], 11, 81, 82
                            ],
                            9: [
                                [0, 5], 11, 21, 22
                            ],
                            10: [
                                [0, 5], 11, 21, 81
                            ],
                            11: [
                                [0, 3], 21, 22
                            ],
                            12: [
                                [0, 2], 4, 21, 23, 24, 81, 82
                            ],
                            13: [
                                [0, 3], 21, 22, 24, 81, 82
                            ],
                            14: [
                                [0, 4], 21, 22, 81
                            ]
                        },
                        22: {
                            0: [0],
                            1: [
                                [0, 6], 12, 22, [81, 83]
                            ],
                            2: [
                                [0, 4], 11, 21, [81, 84]
                            ],
                            3: [
                                [0, 3], 22, 23, 81, 82
                            ],
                            4: [
                                [0, 3], 21, 22
                            ],
                            5: [
                                [0, 3], 21, 23, 24, 81, 82
                            ],
                            6: [
                                [0, 2], 4, 5, [21, 23], 25, 81
                            ],
                            7: [
                                [0, 2],
                                [21, 24], 81
                            ],
                            8: [
                                [0, 2], 21, 22, 81, 82
                            ],
                            24: [
                                [0, 6], 24, 26
                            ]
                        },
                        23: {
                            0: [0],
                            1: [
                                [0, 12], 21, [23, 29],
                                [81, 84]
                            ],
                            2: [
                                [0, 8], 21, [23, 25], 27, [29, 31], 81
                            ],
                            3: [
                                [0, 7], 21, 81, 82
                            ],
                            4: [
                                [0, 7], 21, 22
                            ],
                            5: [
                                [0, 3], 5, 6, [21, 24]
                            ],
                            6: [
                                [0, 6],
                                [21, 24]
                            ],
                            7: [
                                [0, 16], 22, 81
                            ],
                            8: [
                                [0, 5], 11, 22, 26, 28, 33, 81, 82
                            ],
                            9: [
                                [0, 4], 21
                            ],
                            10: [
                                [0, 5], 24, 25, 81, [83, 85]
                            ],
                            11: [
                                [0, 2], 21, 23, 24, 81, 82
                            ],
                            12: [
                                [0, 2],
                                [21, 26],
                                [81, 83]
                            ],
                            27: [
                                [0, 4],
                                [21, 23]
                            ]
                        },
                        31: {
                            0: [0],
                            1: [0, 1, [3, 10],
                                [12, 20]
                            ],
                            2: [0, 30]
                        },
                        32: {
                            0: [0],
                            1: [
                                [0, 7], 11, [13, 18], 24, 25
                            ],
                            2: [
                                [0, 6], 11, 81, 82
                            ],
                            3: [
                                [0, 5], 11, 12, [21, 24], 81, 82
                            ],
                            4: [
                                [0, 2], 4, 5, 11, 12, 81, 82
                            ],
                            5: [
                                [0, 9],
                                [81, 85]
                            ],
                            6: [
                                [0, 2], 11, 12, 21, 23, [81, 84]
                            ],
                            7: [0, 1, 3, 5, 6, [21, 24]],
                            8: [
                                [0, 4], 11, 26, [29, 31]
                            ],
                            9: [
                                [0, 3],
                                [21, 25], 28, 81, 82
                            ],
                            10: [
                                [0, 3], 11, 12, 23, 81, 84, 88
                            ],
                            11: [
                                [0, 2], 11, 12, [81, 83]
                            ],
                            12: [
                                [0, 4],
                                [81, 84]
                            ],
                            13: [
                                [0, 2], 11, [21, 24]
                            ]
                        },
                        33: {
                            0: [0],
                            1: [
                                [0, 6],
                                [8, 10], 22, 27, 82, 83, 85
                            ],
                            2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
                            3: [
                                [0, 4], 22, 24, [26, 29], 81, 82
                            ],
                            4: [
                                [0, 2], 11, 21, 24, [81, 83]
                            ],
                            5: [
                                [0, 3],
                                [21, 23]
                            ],
                            6: [
                                [0, 2], 21, 24, [81, 83]
                            ],
                            7: [
                                [0, 3], 23, 26, 27, [81, 84]
                            ],
                            8: [
                                [0, 3], 22, 24, 25, 81
                            ],
                            9: [
                                [0, 3], 21, 22
                            ],
                            10: [
                                [0, 4],
                                [21, 24], 81, 82
                            ],
                            11: [
                                [0, 2],
                                [21, 27], 81
                            ]
                        },
                        34: {
                            0: [0],
                            1: [
                                [0, 4], 11, [21, 24], 81
                            ],
                            2: [
                                [0, 4], 7, 8, [21, 23], 25
                            ],
                            3: [
                                [0, 4], 11, [21, 23]
                            ],
                            4: [
                                [0, 6], 21
                            ],
                            5: [
                                [0, 4], 6, [21, 23]
                            ],
                            6: [
                                [0, 4], 21
                            ],
                            7: [
                                [0, 3], 11, 21
                            ],
                            8: [
                                [0, 3], 11, [22, 28], 81
                            ],
                            10: [
                                [0, 4],
                                [21, 24]
                            ],
                            11: [
                                [0, 3], 22, [24, 26], 81, 82
                            ],
                            12: [
                                [0, 4], 21, 22, 25, 26, 82
                            ],
                            13: [
                                [0, 2],
                                [21, 24]
                            ],
                            14: [
                                [0, 2],
                                [21, 24]
                            ],
                            15: [
                                [0, 3],
                                [21, 25]
                            ],
                            16: [
                                [0, 2],
                                [21, 23]
                            ],
                            17: [
                                [0, 2],
                                [21, 23]
                            ],
                            18: [
                                [0, 2],
                                [21, 25], 81
                            ]
                        },
                        35: {
                            0: [0],
                            1: [
                                [0, 5], 11, [21, 25], 28, 81, 82
                            ],
                            2: [
                                [0, 6],
                                [11, 13]
                            ],
                            3: [
                                [0, 5], 22
                            ],
                            4: [
                                [0, 3], 21, [23, 30], 81
                            ],
                            5: [
                                [0, 5], 21, [24, 27],
                                [81, 83]
                            ],
                            6: [
                                [0, 3],
                                [22, 29], 81
                            ],
                            7: [
                                [0, 2],
                                [21, 25],
                                [81, 84]
                            ],
                            8: [
                                [0, 2],
                                [21, 25], 81
                            ],
                            9: [
                                [0, 2],
                                [21, 26], 81, 82
                            ]
                        },
                        36: {
                            0: [0],
                            1: [
                                [0, 5], 11, [21, 24]
                            ],
                            2: [
                                [0, 3], 22, 81
                            ],
                            3: [
                                [0, 2], 13, [21, 23]
                            ],
                            4: [
                                [0, 3], 21, [23, 30], 81, 82
                            ],
                            5: [
                                [0, 2], 21
                            ],
                            6: [
                                [0, 2], 22, 81
                            ],
                            7: [
                                [0, 2],
                                [21, 35], 81, 82
                            ],
                            8: [
                                [0, 3],
                                [21, 30], 81
                            ],
                            9: [
                                [0, 2],
                                [21, 26],
                                [81, 83]
                            ],
                            10: [
                                [0, 2],
                                [21, 30]
                            ],
                            11: [
                                [0, 2],
                                [21, 30], 81
                            ]
                        },
                        37: {
                            0: [0],
                            1: [
                                [0, 5], 12, 13, [24, 26], 81
                            ],
                            2: [
                                [0, 3], 5, [11, 14],
                                [81, 85]
                            ],
                            3: [
                                [0, 6],
                                [21, 23]
                            ],
                            4: [
                                [0, 6], 81
                            ],
                            5: [
                                [0, 3],
                                [21, 23]
                            ],
                            6: [
                                [0, 2],
                                [11, 13], 34, [81, 87]
                            ],
                            7: [
                                [0, 5], 24, 25, [81, 86]
                            ],
                            8: [
                                [0, 2], 11, [26, 32],
                                [81, 83]
                            ],
                            9: [
                                [0, 3], 11, 21, 23, 82, 83
                            ],
                            10: [
                                [0, 2],
                                [81, 83]
                            ],
                            11: [
                                [0, 3], 21, 22
                            ],
                            12: [
                                [0, 3]
                            ],
                            13: [
                                [0, 2], 11, 12, [21, 29]
                            ],
                            14: [
                                [0, 2],
                                [21, 28], 81, 82
                            ],
                            15: [
                                [0, 2],
                                [21, 26], 81
                            ],
                            16: [
                                [0, 2],
                                [21, 26]
                            ],
                            17: [
                                [0, 2],
                                [21, 28]
                            ]
                        },
                        41: {
                            0: [0],
                            1: [
                                [0, 6], 8, 22, [81, 85]
                            ],
                            2: [
                                [0, 5], 11, [21, 25]
                            ],
                            3: [
                                [0, 7], 11, [22, 29], 81
                            ],
                            4: [
                                [0, 4], 11, [21, 23], 25, 81, 82
                            ],
                            5: [
                                [0, 3], 5, 6, 22, 23, 26, 27, 81
                            ],
                            6: [
                                [0, 3], 11, 21, 22
                            ],
                            7: [
                                [0, 4], 11, 21, [24, 28], 81, 82
                            ],
                            8: [
                                [0, 4], 11, [21, 23], 25, [81, 83]
                            ],
                            9: [
                                [0, 2], 22, 23, [26, 28]
                            ],
                            10: [
                                [0, 2],
                                [23, 25], 81, 82
                            ],
                            11: [
                                [0, 4],
                                [21, 23]
                            ],
                            12: [
                                [0, 2], 21, 22, 24, 81, 82
                            ],
                            13: [
                                [0, 3],
                                [21, 30], 81
                            ],
                            14: [
                                [0, 3],
                                [21, 26], 81
                            ],
                            15: [
                                [0, 3],
                                [21, 28]
                            ],
                            16: [
                                [0, 2],
                                [21, 28], 81
                            ],
                            17: [
                                [0, 2],
                                [21, 29]
                            ],
                            90: [0, 1]
                        },
                        42: {
                            0: [0],
                            1: [
                                [0, 7],
                                [11, 17]
                            ],
                            2: [
                                [0, 5], 22, 81
                            ],
                            3: [
                                [0, 3],
                                [21, 25], 81
                            ],
                            5: [
                                [0, 6],
                                [25, 29],
                                [81, 83]
                            ],
                            6: [
                                [0, 2], 6, 7, [24, 26],
                                [82, 84]
                            ],
                            7: [
                                [0, 4]
                            ],
                            8: [
                                [0, 2], 4, 21, 22, 81
                            ],
                            9: [
                                [0, 2],
                                [21, 23], 81, 82, 84
                            ],
                            10: [
                                [0, 3],
                                [22, 24], 81, 83, 87
                            ],
                            11: [
                                [0, 2],
                                [21, 27], 81, 82
                            ],
                            12: [
                                [0, 2],
                                [21, 24], 81
                            ],
                            13: [
                                [0, 3], 21, 81
                            ],
                            28: [
                                [0, 2], 22, 23, [25, 28]
                            ],
                            90: [0, [4, 6], 21]
                        },
                        43: {
                            0: [0],
                            1: [
                                [0, 5], 11, 12, 21, 22, 24, 81
                            ],
                            2: [
                                [0, 4], 11, 21, [23, 25], 81
                            ],
                            3: [
                                [0, 2], 4, 21, 81, 82
                            ],
                            4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
                            5: [
                                [0, 3], 11, [21, 25],
                                [27, 29], 81
                            ],
                            6: [
                                [0, 3], 11, 21, 23, 24, 26, 81, 82
                            ],
                            7: [
                                [0, 3],
                                [21, 26], 81
                            ],
                            8: [
                                [0, 2], 11, 21, 22
                            ],
                            9: [
                                [0, 3],
                                [21, 23], 81
                            ],
                            10: [
                                [0, 3],
                                [21, 28], 81
                            ],
                            11: [
                                [0, 3],
                                [21, 29]
                            ],
                            12: [
                                [0, 2],
                                [21, 30], 81
                            ],
                            13: [
                                [0, 2], 21, 22, 81, 82
                            ],
                            31: [0, 1, [22, 27], 30]
                        },
                        44: {
                            0: [0],
                            1: [
                                [0, 7],
                                [11, 16], 83, 84
                            ],
                            2: [
                                [0, 5], 21, 22, 24, 29, 32, 33, 81, 82
                            ],
                            3: [0, 1, [3, 8]],
                            4: [
                                [0, 4]
                            ],
                            5: [0, 1, [6, 15], 23, 82, 83],
                            6: [0, 1, [4, 8]],
                            7: [0, 1, [3, 5], 81, [83, 85]],
                            8: [
                                [0, 4], 11, 23, 25, [81, 83]
                            ],
                            9: [
                                [0, 3], 23, [81, 83]
                            ],
                            12: [
                                [0, 3],
                                [23, 26], 83, 84
                            ],
                            13: [
                                [0, 3],
                                [22, 24], 81
                            ],
                            14: [
                                [0, 2],
                                [21, 24], 26, 27, 81
                            ],
                            15: [
                                [0, 2], 21, 23, 81
                            ],
                            16: [
                                [0, 2],
                                [21, 25]
                            ],
                            17: [
                                [0, 2], 21, 23, 81
                            ],
                            18: [
                                [0, 3], 21, 23, [25, 27], 81, 82
                            ],
                            19: [0],
                            20: [0],
                            51: [
                                [0, 3], 21, 22
                            ],
                            52: [
                                [0, 3], 21, 22, 24, 81
                            ],
                            53: [
                                [0, 2],
                                [21, 23], 81
                            ]
                        },
                        45: {
                            0: [0],
                            1: [
                                [0, 9],
                                [21, 27]
                            ],
                            2: [
                                [0, 5],
                                [21, 26]
                            ],
                            3: [
                                [0, 5], 11, 12, [21, 32]
                            ],
                            4: [0, 1, [3, 6], 11, [21, 23], 81],
                            5: [
                                [0, 3], 12, 21
                            ],
                            6: [
                                [0, 3], 21, 81
                            ],
                            7: [
                                [0, 3], 21, 22
                            ],
                            8: [
                                [0, 4], 21, 81
                            ],
                            9: [
                                [0, 3],
                                [21, 24], 81
                            ],
                            10: [
                                [0, 2],
                                [21, 31]
                            ],
                            11: [
                                [0, 2],
                                [21, 23]
                            ],
                            12: [
                                [0, 2],
                                [21, 29], 81
                            ],
                            13: [
                                [0, 2],
                                [21, 24], 81
                            ],
                            14: [
                                [0, 2],
                                [21, 25], 81
                            ]
                        },
                        46: {
                            0: [0],
                            1: [0, 1, [5, 8]],
                            2: [0, 1],
                            3: [0, [21, 23]],
                            90: [
                                [0, 3],
                                [5, 7],
                                [21, 39]
                            ]
                        },
                        50: {
                            0: [0],
                            1: [
                                [0, 19]
                            ],
                            2: [0, [22, 38],
                                [40, 43]
                            ],
                            3: [0, [81, 84]]
                        },
                        51: {
                            0: [0],
                            1: [0, 1, [4, 8],
                                [12, 15],
                                [21, 24], 29, 31, 32, [81, 84]
                            ],
                            3: [
                                [0, 4], 11, 21, 22
                            ],
                            4: [
                                [0, 3], 11, 21, 22
                            ],
                            5: [
                                [0, 4], 21, 22, 24, 25
                            ],
                            6: [0, 1, 3, 23, 26, [81, 83]],
                            7: [0, 1, 3, 4, [22, 27], 81],
                            8: [
                                [0, 2], 11, 12, [21, 24]
                            ],
                            9: [
                                [0, 4],
                                [21, 23]
                            ],
                            10: [
                                [0, 2], 11, 24, 25, 28
                            ],
                            11: [
                                [0, 2],
                                [11, 13], 23, 24, 26, 29, 32, 33, 81
                            ],
                            13: [
                                [0, 4],
                                [21, 25], 81
                            ],
                            14: [
                                [0, 2],
                                [21, 25]
                            ],
                            15: [
                                [0, 3],
                                [21, 29]
                            ],
                            16: [
                                [0, 3],
                                [21, 23], 81
                            ],
                            17: [
                                [0, 3],
                                [21, 25], 81
                            ],
                            18: [
                                [0, 3],
                                [21, 27]
                            ],
                            19: [
                                [0, 3],
                                [21, 23]
                            ],
                            20: [
                                [0, 2], 21, 22, 81
                            ],
                            32: [0, [21, 33]],
                            33: [0, [21, 38]],
                            34: [0, 1, [22, 37]]
                        },
                        52: {
                            0: [0],
                            1: [
                                [0, 3],
                                [11, 15],
                                [21, 23], 81
                            ],
                            2: [0, 1, 3, 21, 22],
                            3: [
                                [0, 3],
                                [21, 30], 81, 82
                            ],
                            4: [
                                [0, 2],
                                [21, 25]
                            ],
                            5: [
                                [0, 2],
                                [21, 27]
                            ],
                            6: [
                                [0, 3],
                                [21, 28]
                            ],
                            22: [0, 1, [22, 30]],
                            23: [0, 1, [22, 28]],
                            24: [0, 1, [22, 28]],
                            26: [0, 1, [22, 36]],
                            27: [
                                [0, 2], 22, 23, [25, 32]
                            ]
                        },
                        53: {
                            0: [0],
                            1: [
                                [0, 3],
                                [11, 14], 21, 22, [24, 29], 81
                            ],
                            3: [
                                [0, 2],
                                [21, 26], 28, 81
                            ],
                            4: [
                                [0, 2],
                                [21, 28]
                            ],
                            5: [
                                [0, 2],
                                [21, 24]
                            ],
                            6: [
                                [0, 2],
                                [21, 30]
                            ],
                            7: [
                                [0, 2],
                                [21, 24]
                            ],
                            8: [
                                [0, 2],
                                [21, 29]
                            ],
                            9: [
                                [0, 2],
                                [21, 27]
                            ],
                            23: [0, 1, [22, 29], 31],
                            25: [
                                [0, 4],
                                [22, 32]
                            ],
                            26: [0, 1, [21, 28]],
                            27: [0, 1, [22, 30]],
                            28: [0, 1, 22, 23],
                            29: [0, 1, [22, 32]],
                            31: [0, 2, 3, [22, 24]],
                            34: [0, [21, 23]],
                            33: [0, 21, [23, 25]],
                            35: [0, [21, 28]]
                        },
                        54: {
                            0: [0],
                            1: [
                                [0, 2],
                                [21, 27]
                            ],
                            21: [0, [21, 29], 32, 33],
                            22: [0, [21, 29],
                                [31, 33]
                            ],
                            23: [0, 1, [22, 38]],
                            24: [0, [21, 31]],
                            25: [0, [21, 27]],
                            26: [0, [21, 27]]
                        },
                        61: {
                            0: [0],
                            1: [
                                [0, 4],
                                [11, 16], 22, [24, 26]
                            ],
                            2: [
                                [0, 4], 22
                            ],
                            3: [
                                [0, 4],
                                [21, 24],
                                [26, 31]
                            ],
                            4: [
                                [0, 4],
                                [22, 31], 81
                            ],
                            5: [
                                [0, 2],
                                [21, 28], 81, 82
                            ],
                            6: [
                                [0, 2],
                                [21, 32]
                            ],
                            7: [
                                [0, 2],
                                [21, 30]
                            ],
                            8: [
                                [0, 2],
                                [21, 31]
                            ],
                            9: [
                                [0, 2],
                                [21, 29]
                            ],
                            10: [
                                [0, 2],
                                [21, 26]
                            ]
                        },
                        62: {
                            0: [0],
                            1: [
                                [0, 5], 11, [21, 23]
                            ],
                            2: [0, 1],
                            3: [
                                [0, 2], 21
                            ],
                            4: [
                                [0, 3],
                                [21, 23]
                            ],
                            5: [
                                [0, 3],
                                [21, 25]
                            ],
                            6: [
                                [0, 2],
                                [21, 23]
                            ],
                            7: [
                                [0, 2],
                                [21, 25]
                            ],
                            8: [
                                [0, 2],
                                [21, 26]
                            ],
                            9: [
                                [0, 2],
                                [21, 24], 81, 82
                            ],
                            10: [
                                [0, 2],
                                [21, 27]
                            ],
                            11: [
                                [0, 2],
                                [21, 26]
                            ],
                            12: [
                                [0, 2],
                                [21, 28]
                            ],
                            24: [0, 21, [24, 29]],
                            26: [0, 21, [23, 30]],
                            29: [0, 1, [21, 27]],
                            30: [0, 1, [21, 27]]
                        },
                        63: {
                            0: [0],
                            1: [
                                [0, 5],
                                [21, 23]
                            ],
                            2: [0, 2, [21, 25]],
                            21: [0, [21, 23],
                                [26, 28]
                            ],
                            22: [0, [21, 24]],
                            23: [0, [21, 24]],
                            25: [0, [21, 25]],
                            26: [0, [21, 26]],
                            27: [0, 1, [21, 26]],
                            28: [
                                [0, 2],
                                [21, 23]
                            ]
                        },
                        64: {
                            0: [0],
                            1: [0, 1, [4, 6], 21, 22, 81],
                            2: [
                                [0, 3], 5, [21, 23]
                            ],
                            3: [
                                [0, 3],
                                [21, 24], 81
                            ],
                            4: [
                                [0, 2],
                                [21, 25]
                            ],
                            5: [
                                [0, 2], 21, 22
                            ]
                        },
                        65: {
                            0: [0],
                            1: [
                                [0, 9], 21
                            ],
                            2: [
                                [0, 5]
                            ],
                            21: [0, 1, 22, 23],
                            22: [0, 1, 22, 23],
                            23: [
                                [0, 3],
                                [23, 25], 27, 28
                            ],
                            28: [0, 1, [22, 29]],
                            29: [0, 1, [22, 29]],
                            30: [0, 1, [22, 24]],
                            31: [0, 1, [21, 31]],
                            32: [0, 1, [21, 27]],
                            40: [0, 2, 3, [21, 28]],
                            42: [
                                [0, 2], 21, [23, 26]
                            ],
                            43: [0, 1, [21, 26]],
                            90: [
                                [0, 4]
                            ],
                            27: [
                                [0, 2], 22, 23
                            ]
                        },
                        71: {
                            0: [0]
                        },
                        81: {
                            0: [0]
                        },
                        82: {
                            0: [0]
                        }
                    },
                    n = parseInt(e.substr(0, 2), 10),
                    s = parseInt(e.substr(2, 2), 10),
                    r = parseInt(e.substr(4, 2), 10);
                if (!i[n] || !i[n][s]) return !1;
                for (var a = !1, o = i[n][s], l = 0; l < o.length; l++)
                    if (t.isArray(o[l]) && o[l][0] <= r && r <= o[l][1] || !t.isArray(o[l]) && r === o[l]) {
                        a = !0;
                        break
                    }
                if (!a) return !1;
                var d;
                d = 18 === e.length ? e.substr(6, 8) : "19" + e.substr(6, 6);
                var c = parseInt(d.substr(0, 4), 10),
                    h = parseInt(d.substr(4, 2), 10),
                    u = parseInt(d.substr(6, 2), 10);
                if (!t.fn.bootstrapValidator.helpers.date(c, h, u)) return !1;
                if (18 === e.length) {
                    var p = 0,
                        f = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                    for (l = 0; 17 > l; l++) p += parseInt(e.charAt(l), 10) * f[l];
                    return p = (12 - p % 11) % 11, ("X" !== e.charAt(17).toUpperCase() ? parseInt(e.charAt(17), 10) : 10) === p
                }
                return !0
            },
            _cz: function(e) {
                if (!/^\d{9,10}$/.test(e)) return !1;
                var i = 1900 + parseInt(e.substr(0, 2), 10),
                    n = parseInt(e.substr(2, 2), 10) % 50 % 20,
                    s = parseInt(e.substr(4, 2), 10);
                if (9 === e.length) {
                    if (i >= 1980 && (i -= 100), i > 1953) return !1
                } else 1954 > i && (i += 100);
                if (!t.fn.bootstrapValidator.helpers.date(i, n, s)) return !1;
                if (10 === e.length) {
                    var r = parseInt(e.substr(0, 9), 10) % 11;
                    return 1985 > i && (r %= 10), r + "" === e.substr(9, 1)
                }
                return !0
            },
            _dk: function(e) {
                if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)) return !1;
                e = e.replace(/-/g, "");
                var i = parseInt(e.substr(0, 2), 10),
                    n = parseInt(e.substr(2, 2), 10),
                    s = parseInt(e.substr(4, 2), 10);
                switch (!0) {
                    case -1 !== "5678".indexOf(e.charAt(6)) && s >= 58:
                        s += 1800;
                        break;
                    case -1 !== "0123".indexOf(e.charAt(6)):
                    case -1 !== "49".indexOf(e.charAt(6)) && s >= 37:
                        s += 1900;
                        break;
                    default:
                        s += 2e3
                }
                return t.fn.bootstrapValidator.helpers.date(s, n, i)
            },
            _ee: function(t) {
                return this._lt(t)
            },
            _es: function(t) {
                if (!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(t) && !/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(t)) return !1;
                t = t.replace(/-/g, "");
                var e = "XYZ".indexOf(t.charAt(0)); - 1 !== e && (t = e + t.substr(1) + "");
                var i = parseInt(t.substr(0, 8), 10);
                return (i = "TRWAGMYFPDXBNJZSQVHLCKE" [i % 23]) === t.substr(8, 1)
            },
            _fi: function(e) {
                if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(e)) return !1;
                var i = parseInt(e.substr(0, 2), 10),
                    n = parseInt(e.substr(2, 2), 10),
                    s = parseInt(e.substr(4, 2), 10);
                if (s = {
                        "+": 1800,
                        "-": 1900,
                        A: 2e3
                    }[e.charAt(6)] + s, !t.fn.bootstrapValidator.helpers.date(s, n, i)) return !1;
                if (2 > parseInt(e.substr(7, 3), 10)) return !1;
                var r = e.substr(0, 6) + e.substr(7, 3) + "";
                return r = parseInt(r, 10), "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(r % 31) === e.charAt(10)
            },
            _hr: function(e) {
                return !!/^[0-9]{11}$/.test(e) && t.fn.bootstrapValidator.helpers.mod11And10(e)
            },
            _ie: function(t) {
                if (!/^\d{7}[A-W][AHWTX]?$/.test(t)) return !1;
                var e = function(t) {
                    for (; t.length < 7;) t = "0" + t;
                    for (var e = "WABCDEFGHIJKLMNOPQRSTUV", i = 0, n = 0; 7 > n; n++) i += parseInt(t.charAt(n), 10) * (8 - n);
                    return i += 9 * e.indexOf(t.substr(7)), e[i % 23]
                };
                return 9 !== t.length || "A" !== t.charAt(8) && "H" !== t.charAt(8) ? t.charAt(7) === e(t.substr(0, 7)) : t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "")
            },
            _is: function(e) {
                if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)) return !1;
                e = e.replace(/-/g, "");
                var i = parseInt(e.substr(0, 2), 10),
                    n = parseInt(e.substr(2, 2), 10),
                    s = parseInt(e.substr(4, 2), 10),
                    r = parseInt(e.charAt(9), 10);
                if (s = 9 === r ? 1900 + s : 100 * (20 + r) + s, !t.fn.bootstrapValidator.helpers.date(s, n, i, !0)) return !1;
                for (var a = 0, o = [3, 2, 7, 6, 5, 4, 3, 2], l = 0; 8 > l; l++) a += parseInt(e.charAt(l), 10) * o[l];
                return (a = 11 - a % 11) + "" === e.charAt(8)
            },
            _lt: function(e) {
                if (!/^[0-9]{11}$/.test(e)) return !1;
                var i = parseInt(e.charAt(0), 10),
                    n = parseInt(e.substr(1, 2), 10),
                    s = parseInt(e.substr(3, 2), 10),
                    r = parseInt(e.substr(5, 2), 10);
                if (n = 100 * (i % 2 == 0 ? 17 + i / 2 : 17 + (i + 1) / 2) + n, !t.fn.bootstrapValidator.helpers.date(n, s, r, !0)) return !1;
                for (var a = 0, o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1], l = 0; 10 > l; l++) a += parseInt(e.charAt(l), 10) * o[l];
                if (10 != (a %= 11)) return a + "" === e.charAt(10);
                for (a = 0, o = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3], l = 0; 10 > l; l++) a += parseInt(e.charAt(l), 10) * o[l];
                return 10 === (a %= 11) && (a = 0), a + "" === e.charAt(10)
            },
            _lv: function(e) {
                if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(e)) return !1;
                e = e.replace(/\D/g, "");
                var i = parseInt(e.substr(0, 2), 10),
                    n = parseInt(e.substr(2, 2), 10),
                    s = parseInt(e.substr(4, 2), 10);
                if (s = s + 1800 + 100 * parseInt(e.charAt(6), 10), !t.fn.bootstrapValidator.helpers.date(s, n, i, !0)) return !1;
                for (var r = 0, a = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], o = 0; 10 > o; o++) r += parseInt(e.charAt(o), 10) * a[o];
                return (r = (r + 1) % 11 % 10) + "" === e.charAt(10)
            },
            _nl: function(t) {
                for (; t.length < 9;) t = "0" + t;
                if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t)) return !1;
                if (t = t.replace(/\./g, ""), 0 === parseInt(t, 10)) return !1;
                for (var e = 0, i = t.length, n = 0; i - 1 > n; n++) e += (9 - n) * parseInt(t.charAt(n), 10);
                return 10 === (e %= 11) && (e = 0), e + "" === t.charAt(i - 1)
            },
            _ro: function(e) {
                if (!/^[0-9]{13}$/.test(e)) return !1;
                var i = parseInt(e.charAt(0), 10);
                if (0 === i || 7 === i || 8 === i) return !1;
                var n = parseInt(e.substr(1, 2), 10),
                    s = parseInt(e.substr(3, 2), 10),
                    r = parseInt(e.substr(5, 2), 10),
                    a = {
                        1: 1900,
                        2: 1900,
                        3: 1800,
                        4: 1800,
                        5: 2e3,
                        6: 2e3
                    };
                if (r > 31 && s > 12) return !1;
                if (9 !== i && (n = a[i + ""] + n, !t.fn.bootstrapValidator.helpers.date(n, s, r))) return !1;
                for (var o = 0, l = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], d = e.length, c = 0; d - 1 > c; c++) o += parseInt(e.charAt(c), 10) * l[c];
                return 10 === (o %= 11) && (o = 1), o + "" === e.charAt(d - 1)
            },
            _se: function(e) {
                if (!/^[0-9]{10}$/.test(e) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(e)) return !1;
                e = e.replace(/[^0-9]/g, "");
                var i = parseInt(e.substr(0, 2), 10) + 1900,
                    n = parseInt(e.substr(2, 2), 10),
                    s = parseInt(e.substr(4, 2), 10);
                return !!t.fn.bootstrapValidator.helpers.date(i, n, s) && t.fn.bootstrapValidator.helpers.luhn(e)
            },
            _sk: function(t) {
                return this._cz(t)
            },
            _sm: function(t) {
                return /^\d{5}$/.test(t)
            },
            _th: function(t) {
                if (13 !== t.length) return !1;
                for (var e = 0, i = 0; 12 > i; i++) e += parseInt(t.charAt(i), 10) * (13 - i);
                return (11 - e % 11) % 10 === parseInt(t.charAt(12), 10)
            },
            _za: function(e) {
                if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(e)) return !1;
                var i = parseInt(e.substr(0, 2), 10),
                    n = (new Date).getFullYear() % 100,
                    s = parseInt(e.substr(2, 2), 10),
                    r = parseInt(e.substr(4, 2), 10);
                return i = i >= n ? i + 1900 : i + 2e3, !!t.fn.bootstrapValidator.helpers.date(i, s, r) && t.fn.bootstrapValidator.helpers.luhn(e)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.identical = t.extend(t.fn.bootstrapValidator.i18n.identical || {}, {
            default: "Please enter the same value"
        }), t.fn.bootstrapValidator.validators.identical = {
            html5Attributes: {
                message: "message",
                field: "field"
            },
            validate: function(t, e, i) {
                var n = e.val();
                if ("" === n) return !0;
                var s = t.getFieldElements(i.field);
                return null === s || 0 === s.length || n === s.val() && (t.updateStatus(i.field, t.STATUS_VALID, "identical"), !0)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.imei = t.extend(t.fn.bootstrapValidator.i18n.imei || {}, {
            default: "Please enter a valid IMEI number"
        }), t.fn.bootstrapValidator.validators.imei = {
            validate: function(e, i) {
                var n = i.val();
                if ("" === n) return !0;
                switch (!0) {
                    case /^\d{15}$/.test(n):
                    case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(n):
                    case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(n):
                        return n = n.replace(/[^0-9]/g, ""), t.fn.bootstrapValidator.helpers.luhn(n);
                    case /^\d{14}$/.test(n):
                    case /^\d{16}$/.test(n):
                    case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(n):
                    case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(n):
                        return !0;
                    default:
                        return !1
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.imo = t.extend(t.fn.bootstrapValidator.i18n.imo || {}, {
            default: "Please enter a valid IMO number"
        }), t.fn.bootstrapValidator.validators.imo = {
            validate: function(t, e) {
                var i = e.val();
                if ("" === i) return !0;
                if (!/^IMO \d{7}$/i.test(i)) return !1;
                for (var n = 0, s = i.replace(/^.*(\d{7})$/, "$1"), r = 6; r >= 1; r--) n += s.slice(6 - r, -r) * (r + 1);
                return n % 10 === parseInt(s.charAt(6), 10)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.integer = t.extend(t.fn.bootstrapValidator.i18n.integer || {}, {
            default: "Please enter a valid number"
        }), t.fn.bootstrapValidator.validators.integer = {
            enableByHtml5: function(t) {
                return "number" === t.attr("type") && (void 0 === t.attr("step") || t.attr("step") % 1 == 0)
            },
            validate: function(t, e) {
                if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput) return !1;
                var i = e.val();
                return "" === i || /^(?:-?(?:0|[1-9][0-9]*))$/.test(i)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.ip = t.extend(t.fn.bootstrapValidator.i18n.ip || {}, {
            default: "Please enter a valid IP address",
            ipv4: "Please enter a valid IPv4 address",
            ipv6: "Please enter a valid IPv6 address"
        }), t.fn.bootstrapValidator.validators.ip = {
            html5Attributes: {
                message: "message",
                ipv4: "ipv4",
                ipv6: "ipv6"
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                var r, a = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                    o = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
                    l = !1;
                switch (!0) {
                    case (n = t.extend({}, {
                        ipv4: !0,
                        ipv6: !0
                    }, n)).ipv4 && !n.ipv6:
                        l = a.test(s), r = n.message || t.fn.bootstrapValidator.i18n.ip.ipv4;
                        break;
                    case !n.ipv4 && n.ipv6:
                        l = o.test(s), r = n.message || t.fn.bootstrapValidator.i18n.ip.ipv6;
                        break;
                    case n.ipv4 && n.ipv6:
                    default:
                        l = a.test(s) || o.test(s), r = n.message || t.fn.bootstrapValidator.i18n.ip.default
                }
                return {
                    valid: l,
                    message: r
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.isbn = t.extend(t.fn.bootstrapValidator.i18n.isbn || {}, {
            default: "Please enter a valid ISBN number"
        }), t.fn.bootstrapValidator.validators.isbn = {
            validate: function(t, e) {
                var i = e.val();
                if ("" === i) return !0;
                var n;
                switch (!0) {
                    case /^\d{9}[\dX]$/.test(i):
                    case 13 === i.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(i):
                    case 13 === i.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(i):
                        n = "ISBN10";
                        break;
                    case /^(978|979)\d{9}[\dX]$/.test(i):
                    case 17 === i.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(i):
                    case 17 === i.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(i):
                        n = "ISBN13";
                        break;
                    default:
                        return !1
                }
                var s, r, a = (i = i.replace(/[^0-9X]/gi, "")).split(""),
                    o = a.length,
                    l = 0;
                switch (n) {
                    case "ISBN10":
                        for (l = 0, s = 0; o - 1 > s; s++) l += parseInt(a[s], 10) * (10 - s);
                        return 11 === (r = 11 - l % 11) ? r = 0 : 10 === r && (r = "X"), r + "" === a[o - 1];
                    case "ISBN13":
                        for (l = 0, s = 0; o - 1 > s; s++) l += s % 2 == 0 ? parseInt(a[s], 10) : 3 * parseInt(a[s], 10);
                        return 10 === (r = 10 - l % 10) && (r = "0"), r + "" === a[o - 1];
                    default:
                        return !1
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.isin = t.extend(t.fn.bootstrapValidator.i18n.isin || {}, {
            default: "Please enter a valid ISIN number"
        }), t.fn.bootstrapValidator.validators.isin = {
            COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
            validate: function(t, e) {
                var i = e.val();
                if ("" === i) return !0;
                if (i = i.toUpperCase(), !new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$").test(i)) return !1;
                for (var n = "", s = i.length, r = 0; s - 1 > r; r++) {
                    var a = i.charCodeAt(r);
                    n += a > 57 ? (a - 55).toString() : i.charAt(r)
                }
                var o = "",
                    l = n.length,
                    d = l % 2 != 0 ? 0 : 1;
                for (r = 0; l > r; r++) o += parseInt(n[r], 10) * (r % 2 === d ? 2 : 1) + "";
                var c = 0;
                for (r = 0; r < o.length; r++) c += parseInt(o.charAt(r), 10);
                return (c = (10 - c % 10) % 10) + "" === i.charAt(s - 1)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.ismn = t.extend(t.fn.bootstrapValidator.i18n.ismn || {}, {
            default: "Please enter a valid ISMN number"
        }), t.fn.bootstrapValidator.validators.ismn = {
            validate: function(t, e) {
                var i = e.val();
                if ("" === i) return !0;
                var n;
                switch (!0) {
                    case /^M\d{9}$/.test(i):
                    case /^M-\d{4}-\d{4}-\d{1}$/.test(i):
                    case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(i):
                        n = "ISMN10";
                        break;
                    case /^9790\d{9}$/.test(i):
                    case /^979-0-\d{4}-\d{4}-\d{1}$/.test(i):
                    case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(i):
                        n = "ISMN13";
                        break;
                    default:
                        return !1
                }
                "ISMN10" === n && (i = "9790" + i.substr(1));
                for (var s = (i = i.replace(/[^0-9]/gi, "")).length, r = 0, a = [1, 3], o = 0; s - 1 > o; o++) r += parseInt(i.charAt(o), 10) * a[o % 2];
                return (r = 10 - r % 10) + "" === i.charAt(s - 1)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.issn = t.extend(t.fn.bootstrapValidator.i18n.issn || {}, {
            default: "Please enter a valid ISSN number"
        }), t.fn.bootstrapValidator.validators.issn = {
            validate: function(t, e) {
                var i = e.val();
                if ("" === i) return !0;
                if (!/^\d{4}\-\d{3}[\dX]$/.test(i)) return !1;
                var n = (i = i.replace(/[^0-9X]/gi, "")).split(""),
                    s = n.length,
                    r = 0;
                "X" === n[7] && (n[7] = 10);
                for (var a = 0; s > a; a++) r += parseInt(n[a], 10) * (8 - a);
                return r % 11 == 0
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.lessThan = t.extend(t.fn.bootstrapValidator.i18n.lessThan || {}, {
            default: "Please enter a value less than or equal to %s",
            notInclusive: "Please enter a value less than %s"
        }), t.fn.bootstrapValidator.validators.lessThan = {
            html5Attributes: {
                message: "message",
                value: "value",
                inclusive: "inclusive"
            },
            enableByHtml5: function(t) {
                var e = t.attr("type"),
                    i = t.attr("max");
                return !(!i || "date" === e) && {
                    value: i
                }
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                if (!t.isNumeric(s)) return !1;
                var r = t.isNumeric(n.value) ? n.value : e.getDynamicOption(i, n.value);
                return s = parseFloat(s), !0 === n.inclusive || void 0 === n.inclusive ? {
                    valid: r >= s,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.lessThan.default, r)
                } : {
                    valid: r > s,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.lessThan.notInclusive, r)
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.mac = t.extend(t.fn.bootstrapValidator.i18n.mac || {}, {
            default: "Please enter a valid MAC address"
        }), t.fn.bootstrapValidator.validators.mac = {
            validate: function(t, e) {
                var i = e.val();
                return "" === i || /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(i)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.meid = t.extend(t.fn.bootstrapValidator.i18n.meid || {}, {
            default: "Please enter a valid MEID number"
        }), t.fn.bootstrapValidator.validators.meid = {
            validate: function(e, i) {
                var n = i.val();
                if ("" === n) return !0;
                switch (!0) {
                    case /^[0-9A-F]{15}$/i.test(n):
                    case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(n):
                    case /^\d{19}$/.test(n):
                    case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(n):
                        var s = n.charAt(n.length - 1);
                        if ((n = n.replace(/[- ]/g, "")).match(/^\d*$/i)) return t.fn.bootstrapValidator.helpers.luhn(n);
                        n = n.slice(0, -1);
                        for (var r = "", a = 1; 13 >= a; a += 2) r += (2 * parseInt(n.charAt(a), 16)).toString(16);
                        var o = 0;
                        for (a = 0; a < r.length; a++) o += parseInt(r.charAt(a), 16);
                        return o % 10 == 0 ? "0" === s : s === (2 * (10 * Math.floor((o + 10) / 10) - o)).toString(16);
                    case /^[0-9A-F]{14}$/i.test(n):
                    case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(n):
                    case /^\d{18}$/.test(n):
                    case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(n):
                        return !0;
                    default:
                        return !1
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.notEmpty = t.extend(t.fn.bootstrapValidator.i18n.notEmpty || {}, {
            default: "Please enter a value"
        }), t.fn.bootstrapValidator.validators.notEmpty = {
            enableByHtml5: function(t) {
                var e = t.attr("required") + "";
                return "required" === e || "true" === e
            },
            validate: function(e, i) {
                var n = i.attr("type");
                return "radio" === n || "checkbox" === n ? e.getFieldElements(i.attr("data-bv-field")).filter(":checked").length > 0 : !("number" !== n || !i.get(0).validity || !0 !== i.get(0).validity.badInput) || "" !== t.trim(i.val())
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.numeric = t.extend(t.fn.bootstrapValidator.i18n.numeric || {}, {
            default: "Please enter a valid float number"
        }), t.fn.bootstrapValidator.validators.numeric = {
            html5Attributes: {
                message: "message",
                separator: "separator"
            },
            enableByHtml5: function(t) {
                return "number" === t.attr("type") && void 0 !== t.attr("step") && t.attr("step") % 1 != 0
            },
            validate: function(t, e, i) {
                if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput) return !1;
                var n = e.val();
                if ("" === n) return !0;
                var s = i.separator || ".";
                return "." !== s && (n = n.replace(s, ".")), !isNaN(parseFloat(n)) && isFinite(n)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.phone = t.extend(t.fn.bootstrapValidator.i18n.phone || {}, {
            default: "Please enter a valid phone number",
            countryNotSupported: "The country code %s is not supported",
            country: "Please enter a valid phone number in %s",
            countries: {
                BR: "Brazil",
                CN: "China",
                CZ: "Czech Republic",
                DK: "Denmark",
                ES: "Spain",
                FR: "France",
                GB: "United Kingdom",
                MA: "Morocco",
                PK: "Pakistan",
                RO: "Romania",
                RU: "Russia",
                SK: "Slovakia",
                TH: "Thailand",
                US: "USA",
                VE: "Venezuela"
            }
        }), t.fn.bootstrapValidator.validators.phone = {
            html5Attributes: {
                message: "message",
                country: "country"
            },
            COUNTRY_CODES: ["BR", "CN", "CZ", "DK", "ES", "FR", "GB", "MA", "PK", "RO", "RU", "SK", "TH", "US", "VE"],
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                var r = n.country;
                if (("string" != typeof r || -1 === t.inArray(r, this.COUNTRY_CODES)) && (r = e.getDynamicOption(i, r)), !r || -1 === t.inArray(r.toUpperCase(), this.COUNTRY_CODES)) return {
                    valid: !1,
                    message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.phone.countryNotSupported, r)
                };
                var a = !0;
                switch (r.toUpperCase()) {
                    case "BR":
                        s = t.trim(s), a = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(s);
                        break;
                    case "CN":
                        s = t.trim(s), a = /^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(s);
                        break;
                    case "CZ":
                        a = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(s);
                        break;
                    case "DK":
                        s = t.trim(s), a = /^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(s);
                        break;
                    case "ES":
                        s = t.trim(s), a = /^(?:(?:(?:\+|00)34\D?))?(?:9|6)(?:\d\D?){8}$/.test(s);
                        break;
                    case "FR":
                        s = t.trim(s), a = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(s);
                        break;
                    case "GB":
                        s = t.trim(s), a = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(s);
                        break;
                    case "MA":
                        s = t.trim(s), a = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(s);
                        break;
                    case "PK":
                        s = t.trim(s), a = /^0?3[0-9]{2}[0-9]{7}$/.test(s);
                        break;
                    case "RO":
                        a = /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(s);
                        break;
                    case "RU":
                        a = /^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(s);
                        break;
                    case "SK":
                        a = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(s);
                        break;
                    case "TH":
                        a = /^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(s);
                        break;
                    case "VE":
                        s = t.trim(s), a = /^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(s);
                        break;
                    case "US":
                    default:
                        s = s.replace(/\D/g, ""), a = /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(s) && 10 === s.length
                }
                return {
                    valid: a,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.phone.country, t.fn.bootstrapValidator.i18n.phone.countries[r])
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.regexp = t.extend(t.fn.bootstrapValidator.i18n.regexp || {}, {
            default: "Please enter a value matching the pattern"
        }), t.fn.bootstrapValidator.validators.regexp = {
            html5Attributes: {
                message: "message",
                regexp: "regexp"
            },
            enableByHtml5: function(t) {
                var e = t.attr("pattern");
                return !!e && {
                    regexp: e
                }
            },
            validate: function(t, e, i) {
                var n = e.val();
                return "" === n || ("string" == typeof i.regexp ? new RegExp(i.regexp) : i.regexp).test(n)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.remote = t.extend(t.fn.bootstrapValidator.i18n.remote || {}, {
            default: "Please enter a valid value"
        }), t.fn.bootstrapValidator.validators.remote = {
            html5Attributes: {
                message: "message",
                name: "name",
                type: "type",
                url: "url",
                delay: "delay"
            },
            destroy: function(t, e) {
                e.data("bv.remote.timer") && (clearTimeout(e.data("bv.remote.timer")), e.removeData("bv.remote.timer"))
            },
            validate: function(e, i, n) {
                function s() {
                    var e = t.ajax({
                        type: c,
                        headers: h,
                        url: d,
                        dataType: "json",
                        data: l
                    });
                    return e.then(function(t) {
                        t.valid = !0 === t.valid || "true" === t.valid, a.resolve(i, "remote", t)
                    }), a.fail(function() {
                        e.abort()
                    }), a
                }
                var r = i.val(),
                    a = new t.Deferred;
                if ("" === r) return a.resolve(i, "remote", {
                    valid: !0
                }), a;
                var o = i.attr("data-bv-field"),
                    l = n.data || {},
                    d = n.url,
                    c = n.type || "GET",
                    h = n.headers || {};
                return "function" == typeof l && (l = l.call(this, e)), "function" == typeof d && (d = d.call(this, e)), l[n.name || o] = r, n.delay ? (i.data("bv.remote.timer") && clearTimeout(i.data("bv.remote.timer")), i.data("bv.remote.timer", setTimeout(s, n.delay)), a) : s()
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.rtn = t.extend(t.fn.bootstrapValidator.i18n.rtn || {}, {
            default: "Please enter a valid RTN number"
        }), t.fn.bootstrapValidator.validators.rtn = {
            validate: function(t, e) {
                var i = e.val();
                if ("" === i) return !0;
                if (!/^\d{9}$/.test(i)) return !1;
                for (var n = 0, s = 0; s < i.length; s += 3) n += 3 * parseInt(i.charAt(s), 10) + 7 * parseInt(i.charAt(s + 1), 10) + parseInt(i.charAt(s + 2), 10);
                return 0 !== n && n % 10 == 0
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.sedol = t.extend(t.fn.bootstrapValidator.i18n.sedol || {}, {
            default: "Please enter a valid SEDOL number"
        }), t.fn.bootstrapValidator.validators.sedol = {
            validate: function(t, e) {
                var i = e.val();
                if ("" === i) return !0;
                if (i = i.toUpperCase(), !/^[0-9A-Z]{7}$/.test(i)) return !1;
                for (var n = 0, s = [1, 3, 1, 7, 3, 9, 1], r = i.length, a = 0; r - 1 > a; a++) n += s[a] * parseInt(i.charAt(a), 36);
                return (n = (10 - n % 10) % 10) + "" === i.charAt(r - 1)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.siren = t.extend(t.fn.bootstrapValidator.i18n.siren || {}, {
            default: "Please enter a valid SIREN number"
        }), t.fn.bootstrapValidator.validators.siren = {
            validate: function(e, i) {
                var n = i.val();
                return "" === n || !!/^\d{9}$/.test(n) && t.fn.bootstrapValidator.helpers.luhn(n)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.siret = t.extend(t.fn.bootstrapValidator.i18n.siret || {}, {
            default: "Please enter a valid SIRET number"
        }), t.fn.bootstrapValidator.validators.siret = {
            validate: function(t, e) {
                var i = e.val();
                if ("" === i) return !0;
                for (var n, s = 0, r = i.length, a = 0; r > a; a++) n = parseInt(i.charAt(a), 10), a % 2 == 0 && (n *= 2) > 9 && (n -= 9), s += n;
                return s % 10 == 0
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.step = t.extend(t.fn.bootstrapValidator.i18n.step || {}, {
            default: "Please enter a valid step of %s"
        }), t.fn.bootstrapValidator.validators.step = {
            html5Attributes: {
                message: "message",
                base: "baseValue",
                step: "step"
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                if (n = t.extend({}, {
                        baseValue: 0,
                        step: 1
                    }, n), s = parseFloat(s), !t.isNumeric(s)) return !1;
                var r = function(t, e) {
                        var i = Math.pow(10, e),
                            n = (t *= i) > 0 | -(0 > t);
                        return t % 1 == .5 * n ? (Math.floor(t) + (n > 0)) / i : Math.round(t) / i
                    },
                    a = function(t, e) {
                        if (0 === e) return 1;
                        var i = (t + "").split("."),
                            n = (e + "").split("."),
                            s = (1 === i.length ? 0 : i[1].length) + (1 === n.length ? 0 : n[1].length);
                        return r(t - e * Math.floor(t / e), s)
                    }(s - n.baseValue, n.step);
                return {
                    valid: 0 === a || a === n.step,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.step.default, [n.step])
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.stringCase = t.extend(t.fn.bootstrapValidator.i18n.stringCase || {}, {
            default: "Please enter only lowercase characters",
            upper: "Please enter only uppercase characters"
        }), t.fn.bootstrapValidator.validators.stringCase = {
            html5Attributes: {
                message: "message",
                case: "case"
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                var r = (n.case || "lower").toLowerCase();
                return {
                    valid: "upper" === r ? s === s.toUpperCase() : s === s.toLowerCase(),
                    message: n.message || ("upper" === r ? t.fn.bootstrapValidator.i18n.stringCase.upper : t.fn.bootstrapValidator.i18n.stringCase.default)
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.stringLength = t.extend(t.fn.bootstrapValidator.i18n.stringLength || {}, {
            default: "Please enter a value with valid length",
            less: "Please enter less than %s characters",
            more: "Please enter more than %s characters",
            between: "Please enter value between %s and %s characters long"
        }), t.fn.bootstrapValidator.validators.stringLength = {
            html5Attributes: {
                message: "message",
                min: "min",
                max: "max"
            },
            enableByHtml5: function(e) {
                var i = {},
                    n = e.attr("maxlength"),
                    s = e.attr("minlength");
                return n && (i.max = parseInt(n, 10)), s && (i.min = parseInt(s, 10)), !t.isEmptyObject(i) && i
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                var r = t.isNumeric(n.min) ? n.min : e.getDynamicOption(i, n.min),
                    a = t.isNumeric(n.max) ? n.max : e.getDynamicOption(i, n.max),
                    o = s.length,
                    l = !0,
                    d = n.message || t.fn.bootstrapValidator.i18n.stringLength.default;
                switch ((r && o < parseInt(r, 10) || a && o > parseInt(a, 10)) && (l = !1), !0) {
                    case !!r && !!a:
                        d = t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.stringLength.between, [parseInt(r, 10), parseInt(a, 10)]);
                        break;
                    case !!r:
                        d = t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.stringLength.more, parseInt(r, 10));
                        break;
                    case !!a:
                        d = t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.stringLength.less, parseInt(a, 10))
                }
                return {
                    valid: l,
                    message: d
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.uri = t.extend(t.fn.bootstrapValidator.i18n.uri || {}, {
            default: "Please enter a valid URI"
        }), t.fn.bootstrapValidator.validators.uri = {
            html5Attributes: {
                message: "message",
                allowlocal: "allowLocal",
                protocol: "protocol"
            },
            enableByHtml5: function(t) {
                return "url" === t.attr("type")
            },
            validate: function(t, e, i) {
                var n = e.val();
                if ("" === n) return !0;
                var s = !0 === i.allowLocal || "true" === i.allowLocal,
                    r = (i.protocol || "http, https, ftp").split(",").join("|").replace(/\s/g, "");
                return new RegExp("^(?:(?:" + r + ")://)(?:\\S+(?::\\S*)?@)?(?:" + (s ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") + "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (s ? "?" : "") + ")(?::\\d{2,5})?(?:/[^\\s]*)?$", "i").test(n)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.uuid = t.extend(t.fn.bootstrapValidator.i18n.uuid || {}, {
            default: "Please enter a valid UUID number",
            version: "Please enter a valid UUID version %s number"
        }), t.fn.bootstrapValidator.validators.uuid = {
            html5Attributes: {
                message: "message",
                version: "version"
            },
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                var r = {
                        3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                        4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                        5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                        all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
                    },
                    a = n.version ? n.version + "" : "all";
                return {
                    valid: null === r[a] || r[a].test(s),
                    message: n.version ? t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.uuid.version, n.version) : n.message || t.fn.bootstrapValidator.i18n.uuid.default
                }
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.vat = t.extend(t.fn.bootstrapValidator.i18n.vat || {}, {
            default: "Please enter a valid VAT number",
            countryNotSupported: "The country code %s is not supported",
            country: "Please enter a valid VAT number in %s",
            countries: {
                AT: "Austria",
                BE: "Belgium",
                BG: "Bulgaria",
                BR: "Brazil",
                CH: "Switzerland",
                CY: "Cyprus",
                CZ: "Czech Republic",
                DE: "Germany",
                DK: "Denmark",
                EE: "Estonia",
                ES: "Spain",
                FI: "Finland",
                FR: "France",
                GB: "United Kingdom",
                GR: "Greek",
                EL: "Greek",
                HU: "Hungary",
                HR: "Croatia",
                IE: "Ireland",
                IS: "Iceland",
                IT: "Italy",
                LT: "Lithuania",
                LU: "Luxembourg",
                LV: "Latvia",
                MT: "Malta",
                NL: "Netherlands",
                NO: "Norway",
                PL: "Poland",
                PT: "Portugal",
                RO: "Romania",
                RU: "Russia",
                RS: "Serbia",
                SE: "Sweden",
                SI: "Slovenia",
                SK: "Slovakia",
                VE: "Venezuela",
                ZA: "South Africa"
            }
        }), t.fn.bootstrapValidator.validators.vat = {
            html5Attributes: {
                message: "message",
                country: "country"
            },
            COUNTRY_CODES: ["AT", "BE", "BG", "BR", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "RS", "SE", "SK", "SI", "VE", "ZA"],
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s) return !0;
                var r = n.country;
                return r ? ("string" != typeof r || -1 === t.inArray(r.toUpperCase(), this.COUNTRY_CODES)) && (r = e.getDynamicOption(i, r)) : r = s.substr(0, 2), -1 === t.inArray(r, this.COUNTRY_CODES) ? {
                    valid: !1,
                    message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.vat.countryNotSupported, r)
                } : !!this[["_", r.toLowerCase()].join("")](s) || {
                    valid: !1,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.vat.country, t.fn.bootstrapValidator.i18n.vat.countries[r.toUpperCase()])
                }
            },
            _at: function(t) {
                if (/^ATU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^U[0-9]{8}$/.test(t)) return !1;
                t = t.substr(1);
                for (var e = 0, i = [1, 2, 1, 2, 1, 2, 1], n = 0, s = 0; 7 > s; s++)(n = parseInt(t.charAt(s), 10) * i[s]) > 9 && (n = Math.floor(n / 10) + n % 10), e += n;
                return 10 === (e = 10 - (e + 4) % 10) && (e = 0), e + "" === t.substr(7, 1)
            },
            _be: function(t) {
                return /^BE[0]{0,1}[0-9]{9}$/.test(t) && (t = t.substr(2)), !!/^[0]{0,1}[0-9]{9}$/.test(t) && (9 === t.length && (t = "0" + t), "0" !== t.substr(1, 1) && (parseInt(t.substr(0, 8), 10) + parseInt(t.substr(8, 2), 10)) % 97 == 0)
            },
            _bg: function(e) {
                if (/^BG[0-9]{9,10}$/.test(e) && (e = e.substr(2)), !/^[0-9]{9,10}$/.test(e)) return !1;
                var i = 0,
                    n = 0;
                if (9 === e.length) {
                    for (n = 0; 8 > n; n++) i += parseInt(e.charAt(n), 10) * (n + 1);
                    if (10 == (i %= 11))
                        for (i = 0, n = 0; 8 > n; n++) i += parseInt(e.charAt(n), 10) * (n + 3);
                    return (i %= 10) + "" === e.substr(8)
                }
                if (10 === e.length) {
                    return function(e) {
                        var i = parseInt(e.substr(0, 2), 10) + 1900,
                            n = parseInt(e.substr(2, 2), 10),
                            s = parseInt(e.substr(4, 2), 10);
                        if (n > 40 ? (i += 100, n -= 40) : n > 20 && (i -= 100, n -= 20), !t.fn.bootstrapValidator.helpers.date(i, n, s)) return !1;
                        for (var r = 0, a = [2, 4, 8, 5, 10, 9, 7, 3, 6], o = 0; 9 > o; o++) r += parseInt(e.charAt(o), 10) * a[o];
                        return (r = r % 11 % 10) + "" === e.substr(9, 1)
                    }(e) || function(t) {
                        for (var e = 0, i = [21, 19, 17, 13, 11, 9, 7, 3, 1], n = 0; 9 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                        return (e %= 10) + "" === t.substr(9, 1)
                    }(e) || function(t) {
                        for (var e = 0, i = [4, 3, 2, 7, 6, 5, 4, 3, 2], n = 0; 9 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                        return 10 != (e = 11 - e % 11) && (11 === e && (e = 0), e + "" === t.substr(9, 1))
                    }(e)
                }
                return !1
            },
            _br: function(t) {
                if ("" === t) return !0;
                var e = t.replace(/[^\d]+/g, "");
                if ("" === e || 14 !== e.length) return !1;
                if ("00000000000000" === e || "11111111111111" === e || "22222222222222" === e || "33333333333333" === e || "44444444444444" === e || "55555555555555" === e || "66666666666666" === e || "77777777777777" === e || "88888888888888" === e || "99999999999999" === e) return !1;
                for (var i = e.length - 2, n = e.substring(0, i), s = e.substring(i), r = 0, a = i - 7, o = i; o >= 1; o--) r += parseInt(n.charAt(i - o), 10) * a--, 2 > a && (a = 9);
                var l = 2 > r % 11 ? 0 : 11 - r % 11;
                if (l !== parseInt(s.charAt(0), 10)) return !1;
                for (i += 1, n = e.substring(0, i), r = 0, a = i - 7, o = i; o >= 1; o--) r += parseInt(n.charAt(i - o), 10) * a--, 2 > a && (a = 9);
                return (l = 2 > r % 11 ? 0 : 11 - r % 11) === parseInt(s.charAt(1), 10)
            },
            _ch: function(t) {
                if (/^CHE[0-9]{9}(MWST)?$/.test(t) && (t = t.substr(2)), !/^E[0-9]{9}(MWST)?$/.test(t)) return !1;
                t = t.substr(1);
                for (var e = 0, i = [5, 4, 3, 2, 7, 6, 5, 4], n = 0; 8 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return 10 != (e = 11 - e % 11) && (11 === e && (e = 0), e + "" === t.substr(8, 1))
            },
            _cy: function(t) {
                if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t) && (t = t.substr(2)), !/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t)) return !1;
                if ("12" === t.substr(0, 2)) return !1;
                for (var e = 0, i = {
                    0: 1,
                    1: 0,
                    2: 5,
                    3: 7,
                    4: 9,
                    5: 13,
                    6: 15,
                    7: 17,
                    8: 19,
                    9: 21
                }, n = 0; 8 > n; n++) {
                    var s = parseInt(t.charAt(n), 10);
                    n % 2 == 0 && (s = i[s + ""]), e += s
                }
                return (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" [e % 26]) + "" === t.substr(8, 1)
            },
            _cz: function(e) {
                if (/^CZ[0-9]{8,10}$/.test(e) && (e = e.substr(2)), !/^[0-9]{8,10}$/.test(e)) return !1;
                var i = 0,
                    n = 0;
                if (8 === e.length) {
                    if (e.charAt(0) + "" == "9") return !1;
                    for (i = 0, n = 0; 7 > n; n++) i += parseInt(e.charAt(n), 10) * (8 - n);
                    return 10 === (i = 11 - i % 11) && (i = 0), 11 === i && (i = 1), i + "" === e.substr(7, 1)
                }
                if (9 === e.length && e.charAt(0) + "" == "6") {
                    for (i = 0, n = 0; 7 > n; n++) i += parseInt(e.charAt(n + 1), 10) * (8 - n);
                    return 10 === (i = 11 - i % 11) && (i = 0), 11 === i && (i = 1), (i = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][i - 1]) + "" === e.substr(8, 1)
                }
                if (9 === e.length || 10 === e.length) {
                    var s = 1900 + parseInt(e.substr(0, 2), 10),
                        r = parseInt(e.substr(2, 2), 10) % 50 % 20,
                        a = parseInt(e.substr(4, 2), 10);
                    if (9 === e.length) {
                        if (s >= 1980 && (s -= 100), s > 1953) return !1
                    } else 1954 > s && (s += 100);
                    if (!t.fn.bootstrapValidator.helpers.date(s, r, a)) return !1;
                    if (10 === e.length) {
                        var o = parseInt(e.substr(0, 9), 10) % 11;
                        return 1985 > s && (o %= 10), o + "" === e.substr(9, 1)
                    }
                    return !0
                }
                return !1
            },
            _de: function(e) {
                return /^DE[0-9]{9}$/.test(e) && (e = e.substr(2)), !!/^[0-9]{9}$/.test(e) && t.fn.bootstrapValidator.helpers.mod11And10(e)
            },
            _dk: function(t) {
                if (/^DK[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1;
                for (var e = 0, i = [2, 7, 6, 5, 4, 3, 2, 1], n = 0; 8 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return e % 11 == 0
            },
            _ee: function(t) {
                if (/^EE[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
                for (var e = 0, i = [3, 7, 1, 3, 7, 1, 3, 7, 1], n = 0; 9 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return e % 10 == 0
            },
            _es: function(t) {
                if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t) && (t = t.substr(2)), !/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t)) return !1;
                var e = t.charAt(0);
                return /^[0-9]$/.test(e) ? function(t) {
                    var e = parseInt(t.substr(0, 8), 10);
                    return (e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23]) + "" === t.substr(8, 1)
                }(t) : /^[XYZ]$/.test(e) ? function(t) {
                    var e = ["XYZ".indexOf(t.charAt(0)), t.substr(1)].join("");
                    return e = parseInt(e, 10), (e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23]) + "" === t.substr(8, 1)
                }(t) : function(t) {
                    var e, i = t.charAt(0);
                    if (-1 !== "KLM".indexOf(i)) return e = parseInt(t.substr(1, 8), 10), (e = "TRWAGMYFPDXBNJZSQVHLCKE" [e % 23]) + "" === t.substr(8, 1);
                    if (-1 !== "ABCDEFGHJNPQRSUVW".indexOf(i)) {
                        for (var n = 0, s = [2, 1, 2, 1, 2, 1, 2], r = 0, a = 0; 7 > a; a++)(r = parseInt(t.charAt(a + 1), 10) * s[a]) > 9 && (r = Math.floor(r / 10) + r % 10), n += r;
                        return (n = 10 - n % 10) + "" === t.substr(8, 1) || "JABCDEFGHI" [n] === t.substr(8, 1)
                    }
                    return !1
                }(t)
            },
            _fi: function(t) {
                if (/^FI[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1;
                for (var e = 0, i = [7, 9, 10, 5, 8, 4, 2, 1], n = 0; 8 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return e % 11 == 0
            },
            _fr: function(e) {
                if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(e) && (e = e.substr(2)), !/^[0-9A-Z]{2}[0-9]{9}$/.test(e)) return !1;
                if (!t.fn.bootstrapValidator.helpers.luhn(e.substr(2))) return !1;
                if (/^[0-9]{2}$/.test(e.substr(0, 2))) return e.substr(0, 2) === parseInt(e.substr(2) + "12", 10) % 97 + "";
                var i, n = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";
                return i = /^[0-9]{1}$/.test(e.charAt(0)) ? 24 * n.indexOf(e.charAt(0)) + n.indexOf(e.charAt(1)) - 10 : 34 * n.indexOf(e.charAt(0)) + n.indexOf(e.charAt(1)) - 100, (parseInt(e.substr(2), 10) + 1 + Math.floor(i / 11)) % 11 == i % 11
            },
            _gb: function(t) {
                if ((/^GB[0-9]{9}$/.test(t) || /^GB[0-9]{12}$/.test(t) || /^GBGD[0-9]{3}$/.test(t) || /^GBHA[0-9]{3}$/.test(t) || /^GB(GD|HA)8888[0-9]{5}$/.test(t)) && (t = t.substr(2)), !(/^[0-9]{9}$/.test(t) || /^[0-9]{12}$/.test(t) || /^GD[0-9]{3}$/.test(t) || /^HA[0-9]{3}$/.test(t) || /^(GD|HA)8888[0-9]{5}$/.test(t))) return !1;
                var e = t.length;
                if (5 === e) {
                    var i = t.substr(0, 2),
                        n = parseInt(t.substr(2), 10);
                    return "GD" === i && 500 > n || "HA" === i && n >= 500
                }
                if (11 === e && ("GD8888" === t.substr(0, 6) || "HA8888" === t.substr(0, 6))) return !("GD" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) >= 500 || "HA" === t.substr(0, 2) && parseInt(t.substr(6, 3), 10) < 500) && parseInt(t.substr(6, 3), 10) % 97 === parseInt(t.substr(9, 2), 10);
                if (9 === e || 12 === e) {
                    for (var s = 0, r = [8, 7, 6, 5, 4, 3, 2, 10, 1], a = 0; 9 > a; a++) s += parseInt(t.charAt(a), 10) * r[a];
                    return s %= 97, parseInt(t.substr(0, 3), 10) >= 100 ? 0 === s || 42 === s || 55 === s : 0 === s
                }
                return !0
            },
            _gr: function(t) {
                if (/^(GR|EL)[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
                8 === t.length && (t = "0" + t);
                for (var e = 0, i = [256, 128, 64, 32, 16, 8, 4, 2], n = 0; 8 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return (e = e % 11 % 10) + "" === t.substr(8, 1)
            },
            _el: function(t) {
                return this._gr(t)
            },
            _hu: function(t) {
                if (/^HU[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1;
                for (var e = 0, i = [9, 7, 3, 1, 9, 7, 3, 1], n = 0; 8 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return e % 10 == 0
            },
            _hr: function(e) {
                return /^HR[0-9]{11}$/.test(e) && (e = e.substr(2)), !!/^[0-9]{11}$/.test(e) && t.fn.bootstrapValidator.helpers.mod11And10(e)
            },
            _ie: function(t) {
                if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t) && (t = t.substr(2)), !/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t)) return !1;
                var e = function(t) {
                    for (; t.length < 7;) t = "0" + t;
                    for (var e = "WABCDEFGHIJKLMNOPQRSTUV", i = 0, n = 0; 7 > n; n++) i += parseInt(t.charAt(n), 10) * (8 - n);
                    return i += 9 * e.indexOf(t.substr(7)), e[i % 23]
                };
                return /^[0-9]+$/.test(t.substr(0, 7)) ? t.charAt(7) === e(t.substr(0, 7) + t.substr(8) + "") : -1 === "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(t.charAt(1)) || t.charAt(7) === e(t.substr(2, 5) + t.substr(0, 1) + "")
            },
            _is: function(t) {
                return /^IS[0-9]{5,6}$/.test(t) && (t = t.substr(2)), /^[0-9]{5,6}$/.test(t)
            },
            _it: function(e) {
                if (/^IT[0-9]{11}$/.test(e) && (e = e.substr(2)), !/^[0-9]{11}$/.test(e)) return !1;
                if (0 === parseInt(e.substr(0, 7), 10)) return !1;
                var i = parseInt(e.substr(7, 3), 10);
                return !(1 > i || i > 201 && 999 !== i && 888 !== i) && t.fn.bootstrapValidator.helpers.luhn(e)
            },
            _lt: function(t) {
                if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t) && (t = t.substr(2)), !/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t)) return !1;
                var e, i = t.length,
                    n = 0;
                for (e = 0; i - 1 > e; e++) n += parseInt(t.charAt(e), 10) * (1 + e % 9);
                var s = n % 11;
                if (10 === s)
                    for (n = 0, e = 0; i - 1 > e; e++) n += parseInt(t.charAt(e), 10) * (1 + (e + 2) % 9);
                return (s = s % 11 % 10) + "" === t.charAt(i - 1)
            },
            _lu: function(t) {
                return /^LU[0-9]{8}$/.test(t) && (t = t.substr(2)), !!/^[0-9]{8}$/.test(t) && parseInt(t.substr(0, 6), 10) % 89 + "" === t.substr(6, 2)
            },
            _lv: function(e) {
                if (/^LV[0-9]{11}$/.test(e) && (e = e.substr(2)), !/^[0-9]{11}$/.test(e)) return !1;
                var i, n = parseInt(e.charAt(0), 10),
                    s = 0,
                    r = [],
                    a = e.length;
                if (n > 3) {
                    for (s = 0, r = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1], i = 0; a > i; i++) s += parseInt(e.charAt(i), 10) * r[i];
                    return 3 == (s %= 11)
                }
                var o = parseInt(e.substr(0, 2), 10),
                    l = parseInt(e.substr(2, 2), 10),
                    d = parseInt(e.substr(4, 2), 10);
                if (d = d + 1800 + 100 * parseInt(e.charAt(6), 10), !t.fn.bootstrapValidator.helpers.date(d, l, o)) return !1;
                for (s = 0, r = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9], i = 0; a - 1 > i; i++) s += parseInt(e.charAt(i), 10) * r[i];
                return (s = (s + 1) % 11 % 10) + "" === e.charAt(a - 1)
            },
            _mt: function(t) {
                if (/^MT[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1;
                for (var e = 0, i = [3, 4, 6, 7, 8, 9, 10, 1], n = 0; 8 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return e % 37 == 0
            },
            _nl: function(t) {
                if (/^NL[0-9]{9}B[0-9]{2}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}B[0-9]{2}$/.test(t)) return !1;
                for (var e = 0, i = [9, 8, 7, 6, 5, 4, 3, 2], n = 0; 8 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return (e %= 11) > 9 && (e = 0), e + "" === t.substr(8, 1)
            },
            _no: function(t) {
                if (/^NO[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
                for (var e = 0, i = [3, 2, 7, 6, 5, 4, 3, 2], n = 0; 8 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return 11 === (e = 11 - e % 11) && (e = 0), e + "" === t.substr(8, 1)
            },
            _pl: function(t) {
                if (/^PL[0-9]{10}$/.test(t) && (t = t.substr(2)), !/^[0-9]{10}$/.test(t)) return !1;
                for (var e = 0, i = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], n = 0; 10 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return e % 11 == 0
            },
            _pt: function(t) {
                if (/^PT[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
                for (var e = 0, i = [9, 8, 7, 6, 5, 4, 3, 2], n = 0; 8 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return (e = 11 - e % 11) > 9 && (e = 0), e + "" === t.substr(8, 1)
            },
            _ro: function(t) {
                if (/^RO[1-9][0-9]{1,9}$/.test(t) && (t = t.substr(2)), !/^[1-9][0-9]{1,9}$/.test(t)) return !1;
                for (var e = t.length, i = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - e), n = 0, s = 0; e - 1 > s; s++) n += parseInt(t.charAt(s), 10) * i[s];
                return (n = 10 * n % 11 % 10) + "" === t.substr(e - 1, 1)
            },
            _ru: function(t) {
                if (/^RU([0-9]{10}|[0-9]{12})$/.test(t) && (t = t.substr(2)), !/^([0-9]{10}|[0-9]{12})$/.test(t)) return !1;
                var e = 0;
                if (10 === t.length) {
                    var i = 0,
                        n = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                    for (e = 0; 10 > e; e++) i += parseInt(t.charAt(e), 10) * n[e];
                    return (i %= 11) > 9 && (i %= 10), i + "" === t.substr(9, 1)
                }
                if (12 === t.length) {
                    var s = 0,
                        r = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
                        a = 0,
                        o = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
                    for (e = 0; 11 > e; e++) s += parseInt(t.charAt(e), 10) * r[e], a += parseInt(t.charAt(e), 10) * o[e];
                    return (s %= 11) > 9 && (s %= 10), (a %= 11) > 9 && (a %= 10), s + "" === t.substr(10, 1) && a + "" === t.substr(11, 1)
                }
                return !1
            },
            _rs: function(t) {
                if (/^RS[0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[0-9]{9}$/.test(t)) return !1;
                for (var e = 10, i = 0, n = 0; 8 > n; n++) 0 === (i = (parseInt(t.charAt(n), 10) + e) % 10) && (i = 10), e = 2 * i % 11;
                return (e + parseInt(t.substr(8, 1), 10)) % 10 == 1
            },
            _se: function(e) {
                return /^SE[0-9]{10}01$/.test(e) && (e = e.substr(2)), !!/^[0-9]{10}01$/.test(e) && (e = e.substr(0, 10), t.fn.bootstrapValidator.helpers.luhn(e))
            },
            _si: function(t) {
                if (/^SI[0-9]{8}$/.test(t) && (t = t.substr(2)), !/^[0-9]{8}$/.test(t)) return !1;
                for (var e = 0, i = [8, 7, 6, 5, 4, 3, 2], n = 0; 7 > n; n++) e += parseInt(t.charAt(n), 10) * i[n];
                return 10 === (e = 11 - e % 11) && (e = 0), e + "" === t.substr(7, 1)
            },
            _sk: function(t) {
                return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && (t = t.substr(2)), !!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t) && parseInt(t, 10) % 11 == 0
            },
            _ve: function(t) {
                if (/^VE[VEJPG][0-9]{9}$/.test(t) && (t = t.substr(2)), !/^[VEJPG][0-9]{9}$/.test(t)) return !1;
                for (var e = {
                    V: 4,
                    E: 8,
                    J: 12,
                    P: 16,
                    G: 20
                }[t.charAt(0)], i = [3, 2, 7, 6, 5, 4, 3, 2], n = 0; 8 > n; n++) e += parseInt(t.charAt(n + 1), 10) * i[n];
                return (11 === (e = 11 - e % 11) || 10 === e) && (e = 0), e + "" === t.substr(9, 1)
            },
            _za: function(t) {
                return /^ZA4[0-9]{9}$/.test(t) && (t = t.substr(2)), /^4[0-9]{9}$/.test(t)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.vin = t.extend(t.fn.bootstrapValidator.i18n.vin || {}, {
            default: "Please enter a valid VIN number"
        }), t.fn.bootstrapValidator.validators.vin = {
            validate: function(t, e) {
                var i = e.val();
                if ("" === i) return !0;
                if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(i)) return !1;
                for (var n = {
                    A: 1,
                    B: 2,
                    C: 3,
                    D: 4,
                    E: 5,
                    F: 6,
                    G: 7,
                    H: 8,
                    J: 1,
                    K: 2,
                    L: 3,
                    M: 4,
                    N: 5,
                    P: 7,
                    R: 9,
                    S: 2,
                    T: 3,
                    U: 4,
                    V: 5,
                    W: 6,
                    X: 7,
                    Y: 8,
                    Z: 9,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                    9: 9,
                    0: 0
                }, s = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2], r = 0, a = (i = i.toUpperCase()).length, o = 0; a > o; o++) r += n[i.charAt(o) + ""] * s[o];
                var l = r % 11;
                return 10 === l && (l = "X"), l + "" === i.charAt(8)
            }
        }
    }(window.jQuery),
    function(t) {
        t.fn.bootstrapValidator.i18n.zipCode = t.extend(t.fn.bootstrapValidator.i18n.zipCode || {}, {
            default: "Please enter a valid postal code",
            countryNotSupported: "The country code %s is not supported",
            country: "Please enter a valid postal code in %s",
            countries: {
                BR: "Brazil",
                CA: "Canada",
                CZ: "Czech Republic",
                DK: "Denmark",
                GB: "United Kingdom",
                IT: "Italy",
                MA: "Morocco",
                NL: "Netherlands",
                RO: "Romania",
                RU: "Russia",
                SE: "Sweden",
                SG: "Singapore",
                SK: "Slovakia",
                US: "USA"
            }
        }), t.fn.bootstrapValidator.validators.zipCode = {
            html5Attributes: {
                message: "message",
                country: "country"
            },
            COUNTRY_CODES: ["BR", "CA", "CZ", "DK", "GB", "IT", "MA", "NL", "RO", "RU", "SE", "SG", "SK", "US"],
            validate: function(e, i, n) {
                var s = i.val();
                if ("" === s || !n.country) return !0;
                var r = n.country;
                if (("string" != typeof r || -1 === t.inArray(r, this.COUNTRY_CODES)) && (r = e.getDynamicOption(i, r)), !r || -1 === t.inArray(r.toUpperCase(), this.COUNTRY_CODES)) return {
                    valid: !1,
                    message: t.fn.bootstrapValidator.helpers.format(t.fn.bootstrapValidator.i18n.zipCode.countryNotSupported, r)
                };
                var a = !1;
                switch (r = r.toUpperCase()) {
                    case "BR":
                        a = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(s);
                        break;
                    case "CA":
                        a = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(s);
                        break;
                    case "CZ":
                        a = /^(\d{3})([ ]?)(\d{2})$/.test(s);
                        break;
                    case "DK":
                        a = /^(DK(-|\s)?)?\d{4}$/i.test(s);
                        break;
                    case "GB":
                        a = this._gb(s);
                        break;
                    case "IT":
                        a = /^(I-|IT-)?\d{5}$/i.test(s);
                        break;
                    case "MA":
                        a = /^[1-9][0-9]{4}$/i.test(s);
                        break;
                    case "NL":
                        a = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(s);
                        break;
                    case "RO":
                        a = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(s);
                        break;
                    case "RU":
                        a = /^[0-9]{6}$/i.test(s);
                        break;
                    case "SE":
                        a = /^(S-)?\d{3}\s?\d{2}$/i.test(s);
                        break;
                    case "SG":
                        a = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(s);
                        break;
                    case "SK":
                        a = /^(\d{3})([ ]?)(\d{2})$/.test(s);
                        break;
                    case "US":
                    default:
                        a = /^\d{4,5}([\-]?\d{4})?$/.test(s)
                }
                return {
                    valid: a,
                    message: t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.zipCode.country, t.fn.bootstrapValidator.i18n.zipCode.countries[r])
                }
            },
            _gb: function(t) {
                for (var e = "[ABCDEFGHIJKLMNOPRSTUWYZ]", i = "[ABCDEFGHKLMNOPQRSTUVWXY]", n = "[ABDEFGHJLNPQRSTUWXYZ]", s = [new RegExp("^(" + e + "{1}" + i + "?[0-9]{1,2})(\\s*)([0-9]{1}" + n + "{2})$", "i"), new RegExp("^(" + e + "{1}[0-9]{1}[ABCDEFGHJKPMNRSTUVWXY]{1})(\\s*)([0-9]{1}" + n + "{2})$", "i"), new RegExp("^(" + e + "{1}" + i + "{1}?[0-9]{1}[ABEHMNPRVWXY]{1})(\\s*)([0-9]{1}" + n + "{2})$", "i"), new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$", "i"), /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i], r = 0; r < s.length; r++)
                    if (s[r].test(t)) return !0;
                return !1
            }
        }
    }(window.jQuery),
    function(t) {
        var e = t(window),
            i = e.height();
        e.resize(function() {
            i = e.height()
        }), t.fn.parallax = function(n, s, r) {
            function a() {
                var r = e.scrollTop();
                d.each(function() {
                    var e = t(this),
                        a = e.offset().top;
                    a + o(e) < r || a > r + i || d.css("backgroundPosition", n + " " + Math.round((l - r) * s) + "px")
                })
            }
            var o, l, d = t(this);
            d.each(function() {
                l = d.offset().top
            }), o = r ? function(t) {
                return t.outerHeight(!0)
            } : function(t) {
                return t.height()
            }, (arguments.length < 1 || null === n) && (n = "50%"), (arguments.length < 2 || null === s) && (s = .1), (arguments.length < 3 || null === r) && (r = !0), e.bind("scroll", a).resize(a), a()
        }
    }(jQuery),
    function(t) {
        var e = -1,
            i = -1,
            n = function(e) {
                var i = null,
                    n = [];
                return t(e).each(function() {
                    var e = t(this),
                        r = e.offset().top - s(e.css("margin-top")),
                        a = 0 < n.length ? n[n.length - 1] : null;
                    null === a ? n.push(e) : 1 >= Math.floor(Math.abs(i - r)) ? n[n.length - 1] = a.add(e) : n.push(e), i = r
                }), n
            },
            s = function(t) {
                return parseFloat(t) || 0
            },
            r = t.fn.matchHeight = function(e) {
                if ("remove" === e) {
                    var i = this;
                    return this.css("height", ""), t.each(r._groups, function(t, e) {
                        e.elements = e.elements.not(i)
                    }), this
                }
                return 1 >= this.length ? this : (e = void 0 === e || e, r._groups.push({
                    elements: this,
                    byRow: e
                }), r._apply(this, e), this)
            };
        r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._apply = function(e, i) {
            var a = t(e),
                o = [a],
                l = t(window).scrollTop(),
                d = t("html").outerHeight(!0),
                c = a.parents().filter(":hidden");
            return c.css("display", "block"), i && (a.each(function() {
                var e = t(this),
                    i = "inline-block" === e.css("display") ? "inline-block" : "block";
                e.data("style-cache", e.attr("style")), e.css({
                    display: i,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px"
                })
            }), o = n(a), a.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || "").css("height", "")
            })), t.each(o, function(e, n) {
                var r = t(n),
                    a = 0;
                i && 1 >= r.length || (r.each(function() {
                    var e = t(this),
                        i = "inline-block" === e.css("display") ? "inline-block" : "block";
                    e.css({
                        display: i,
                        height: ""
                    }), e.outerHeight(!1) > a && (a = e.outerHeight(!1)), e.css("display", "")
                }), r.each(function() {
                    var e = t(this),
                        i = 0;
                    "border-box" !== e.css("box-sizing") && (i += s(e.css("border-top-width")) + s(e.css("border-bottom-width")), i += s(e.css("padding-top")) + s(e.css("padding-bottom"))), e.css("height", a - i)
                }))
            }), c.css("display", ""), r._maintainScroll && t(window).scrollTop(l / d * t("html").outerHeight(!0)), this
        }, r._applyDataApi = function() {
            var e = {};
            t("[data-match-height], [data-mh]").each(function() {
                var i = t(this),
                    n = i.attr("data-match-height") || i.attr("data-mh");
                e[n] = n in e ? e[n].add(i) : i
            }), t.each(e, function() {
                this.matchHeight(!0)
            })
        };
        var a = function(e) {
            r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
                r._apply(this.elements, this.byRow)
            }), r._afterUpdate && r._afterUpdate(e, r._groups)
        };
        r._update = function(n, s) {
            if (s && "resize" === s.type) {
                var o = t(window).width();
                if (o === e) return;
                e = o
            }
            n ? -1 === i && (i = setTimeout(function() {
                a(s), i = -1
            }, r._throttle)) : a(s)
        }, t(r._applyDataApi), t(window).bind("load", function(t) {
            r._update(!1, t)
        }), t(window).bind("resize orientationchange", function(t) {
            r._update(!0, t)
        })
    }(jQuery),
    function(t, e, i, n) {
        "use strict";

        function s(t) {
            var e = t.currentTarget,
                n = t.data ? t.data.options : {},
                s = n.selector ? i(n.selector) : t.data ? t.data.items : [],
                r = i(e).attr("data-fancybox") || "",
                a = 0,
                o = i.fancybox.getInstance();
            t.preventDefault(), o && o.current.opts.$orig.is(e) || (r ? (s = s.length ? s.filter('[data-fancybox="' + r + '"]') : i('[data-fancybox="' + r + '"]'), (a = s.index(e)) < 0 && (a = 0)) : s = [e], i.fancybox.open(s, n, a))
        }
        if (i) {
            if (i.fn.fancybox) return void i.error("fancyBox already initialized");
            var r = {
                    loop: !1,
                    margin: [44, 0],
                    gutter: 50,
                    keyboard: !0,
                    arrows: !0,
                    infobar: !1,
                    toolbar: !0,
                    buttons: ["slideShow", "fullScreen", "thumbs", "close"],
                    idleTime: 4,
                    smallBtn: "auto",
                    protect: !1,
                    modal: !1,
                    image: {
                        preload: "auto"
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: {
                            scrolling: "auto"
                        }
                    },
                    animationEffect: "zoom",
                    animationDuration: 366,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                    btnTpl: {
                        slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
                        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
                        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
                        smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
                    },
                    parentEl: "body",
                    autoFocus: !0,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: {
                        autoStart: !1
                    },
                    touch: {
                        vertical: !0,
                        momentum: !0
                    },
                    hash: null,
                    media: {},
                    slideShow: {
                        autoStart: !1,
                        speed: 4e3
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0
                    },
                    onInit: i.noop,
                    beforeLoad: i.noop,
                    afterLoad: i.noop,
                    beforeShow: i.noop,
                    afterShow: i.noop,
                    beforeClose: i.noop,
                    afterClose: i.noop,
                    onActivate: i.noop,
                    onDeactivate: i.noop,
                    clickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        clickContent: function(t, e) {
                            return "image" === t.type && "toggleControls"
                        },
                        clickSlide: function(t, e) {
                            return "image" === t.type ? "toggleControls" : "close"
                        },
                        dblclickContent: function(t, e) {
                            return "image" === t.type && "zoom"
                        },
                        dblclickSlide: function(t, e) {
                            return "image" === t.type && "zoom"
                        }
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails"
                        },
                        de: {
                            CLOSE: "Schliessen",
                            NEXT: "Weiter",
                            PREV: "ZurÃ¼ck",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder"
                        }
                    }
                },
                a = i(t),
                o = i(e),
                l = 0,
                d = function(t) {
                    return t && t.hasOwnProperty && t instanceof i
                },
                c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                    return t.setTimeout(e, 1e3 / 60)
                },
                h = function() {
                    var t, i = e.createElement("fakeelement"),
                        s = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (t in s)
                        if (i.style[t] !== n) return s[t]
                }(),
                u = function(t) {
                    return t && t.length && t[0].offsetHeight
                },
                p = function(t, n, s) {
                    var a = this;
                    a.opts = i.extend(!0, {
                        index: s
                    }, r, n || {}), n && i.isArray(n.buttons) && (a.opts.buttons = n.buttons), a.id = a.opts.id || ++l, a.group = [], a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = null, a.createGroup(t), a.group.length && (a.$lastFocus = i(e.activeElement).blur(), a.slides = {}, a.init(t))
                };
            i.extend(p.prototype, {
                init: function() {
                    var t, e, n, s = this,
                        r = s.group[s.currIndex].opts;
                    s.scrollTop = o.scrollTop(), s.scrollLeft = o.scrollLeft(), i.fancybox.getInstance() || i.fancybox.isMobile || "hidden" === i("body").css("overflow") || (t = i("body").width(), i("html").addClass("fancybox-enabled"), (t = i("body").width() - t) > 1 && i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")), n = "", i.each(r.buttons, function(t, e) {
                        n += r.btnTpl[e] || ""
                    }), e = i(s.translate(s, r.baseTpl.replace("{{BUTTONS}}", n))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + s.id).addClass(r.baseClass).data("FancyBox", s).prependTo(r.parentEl), s.$refs = {
                        container: e
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function(t) {
                        s.$refs[t] = e.find(".fancybox-" + t)
                    }), (!r.arrows || s.group.length < 2) && e.find(".fancybox-navigation").remove(), r.infobar || s.$refs.infobar.remove(), r.toolbar || s.$refs.toolbar.remove(), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex)
                },
                translate: function(t, e) {
                    var i = t.opts.i18n[t.opts.lang];
                    return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                        var s = i[e];
                        return s === n ? t : s
                    })
                },
                createGroup: function(t) {
                    var e = this,
                        s = i.makeArray(t);
                    i.each(s, function(t, s) {
                        var r, a, o, l, d = {},
                            c = {},
                            h = [];
                        i.isPlainObject(s) ? (d = s, c = s.opts || s) : "object" === i.type(s) && i(s).length ? (r = i(s), h = r.data(), c = "options" in h ? h.options : {}, c = "object" === i.type(c) ? c : {}, d.src = "src" in h ? h.src : c.src || r.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function(t) {
                            t in h && (c[t] = h[t])
                        }), "srcset" in h && (c.image = {
                            srcset: h.srcset
                        }), c.$orig = r, d.type || d.src || (d.type = "inline", d.src = s)) : d = {
                            type: "html",
                            src: s + ""
                        }, d.opts = i.extend(!0, {}, e.opts, c), i.fancybox.isMobile && (d.opts = i.extend(!0, {}, d.opts, d.opts.mobile)), a = d.type || d.opts.type, o = d.src || "", !a && o && (o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : o.match(/\.(pdf)((\?|#).*)?$/i) ? a = "pdf" : "#" === o.charAt(0) && (a = "inline")), d.type = a, d.index = e.group.length, d.opts.$orig && !d.opts.$orig.length && delete d.opts.$orig, !d.opts.$thumb && d.opts.$orig && (d.opts.$thumb = d.opts.$orig.find("img:first")), d.opts.$thumb && !d.opts.$thumb.length && delete d.opts.$thumb, "function" === i.type(d.opts.caption) ? d.opts.caption = d.opts.caption.apply(s, [e, d]) : "caption" in h && (d.opts.caption = h.caption), d.opts.caption = d.opts.caption === n ? "" : d.opts.caption + "", "ajax" === a && (l = o.split(/\s+/, 2)).length > 1 && (d.src = l.shift(), d.opts.filter = l.shift()), "auto" == d.opts.smallBtn && (i.inArray(a, ["html", "inline", "ajax"]) > -1 ? (d.opts.toolbar = !1, d.opts.smallBtn = !0) : d.opts.smallBtn = !1), "pdf" === a && (d.type = "iframe", d.opts.iframe.preload = !1), d.opts.modal && (d.opts = i.extend(!0, d.opts, {
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), e.group.push(d)
                    })
                },
                addEvents: function() {
                    var n = this;
                    n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.close(t)
                    }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.previous()
                    }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.next()
                    }), a.on("orientationchange.fb resize.fb", function(t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? c(function() {
                            n.update()
                        }) : (n.$refs.stage.hide(), setTimeout(function() {
                            n.$refs.stage.show(), n.update()
                        }, 500))
                    }), o.on("focusin.fb", function(t) {
                        var s = i.fancybox ? i.fancybox.getInstance() : null;
                        s.isClosing || !s.current || !s.current.opts.trapFocus || i(t.target).hasClass("fancybox-container") || i(t.target).is(e) || s && "fixed" !== i(t.target).css("position") && !s.$refs.container.has(t.target).length && (t.stopPropagation(), s.focus(), a.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft))
                    }), o.on("keydown.fb", function(t) {
                        var e = n.current,
                            s = t.keyCode || t.which;
                        if (e && e.opts.keyboard && !i(t.target).is("input") && !i(t.target).is("textarea")) return 8 === s || 27 === s ? (t.preventDefault(), void n.close(t)) : 37 === s || 38 === s ? (t.preventDefault(), void n.previous()) : 39 === s || 40 === s ? (t.preventDefault(), void n.next()) : void n.trigger("afterKeydown", t, s)
                    }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, o.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                        n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1
                    }), n.idleInterval = t.setInterval(function() {
                        n.idleSecondsCounter++, n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && (n.isIdle = !0, n.idleSecondsCounter = 0, n.hideControls())
                    }, 1e3))
                },
                removeEvents: function() {
                    var e = this;
                    a.off("orientationchange.fb resize.fb"), o.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                },
                previous: function(t) {
                    return this.jumpTo(this.currPos - 1, t)
                },
                next: function(t) {
                    return this.jumpTo(this.currPos + 1, t)
                },
                jumpTo: function(t, e, s) {
                    var r, a, o, l, d, c, h, p = this,
                        f = p.group.length;
                    if (!(p.isSliding || p.isClosing || p.isAnimating && p.firstRun)) {
                        if (t = parseInt(t, 10), !(a = p.current ? p.current.opts.loop : p.opts.loop) && (t < 0 || t >= f)) return !1;
                        if (r = p.firstRun = null === p.firstRun, !(f < 2 && !r && p.isSliding)) {
                            if (l = p.current, p.prevIndex = p.currIndex, p.prevPos = p.currPos, o = p.createSlide(t), f > 1 && ((a || o.index > 0) && p.createSlide(t - 1), (a || o.index < f - 1) && p.createSlide(t + 1)), p.current = o, p.currIndex = o.index, p.currPos = o.pos, p.trigger("beforeShow", r), p.updateControls(), c = i.fancybox.getTranslate(o.$slide), o.isMoved = (0 !== c.left || 0 !== c.top) && !o.$slide.hasClass("fancybox-animated"), o.forcedDuration = n, i.isNumeric(e) ? o.forcedDuration = e : e = o.opts[r ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), r) return o.opts.animationEffect && e && p.$refs.container.css("transition-duration", e + "ms"), p.$refs.container.removeClass("fancybox-is-hidden"), u(p.$refs.container), p.$refs.container.addClass("fancybox-is-open"), o.$slide.addClass("fancybox-slide--current"), p.loadSlide(o), void p.preload();
                            i.each(p.slides, function(t, e) {
                                i.fancybox.stop(e.$slide)
                            }), o.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), o.isMoved ? (d = Math.round(o.$slide.width()), i.each(p.slides, function(t, n) {
                                var s = n.pos - o.pos;
                                i.fancybox.animate(n.$slide, {
                                    top: 0,
                                    left: s * d + s * n.opts.gutter
                                }, e, function() {
                                    n.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === p.currPos && (o.isMoved = !1, p.complete())
                                })
                            })) : p.$refs.stage.children().removeAttr("style"), o.isLoaded ? p.revealContent(o) : p.loadSlide(o), p.preload(), l.pos !== o.pos && (h = "fancybox-slide--" + (l.pos > o.pos ? "next" : "previous"), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), l.isComplete = !1, e && (o.isMoved || o.opts.transitionEffect) && (o.isMoved ? l.$slide.addClass(h) : (h = "fancybox-animated " + h + " fancybox-fx-" + o.opts.transitionEffect, i.fancybox.animate(l.$slide, h, e, function() {
                                l.$slide.removeClass(h).removeAttr("style")
                            }))))
                        }
                    }
                },
                createSlide: function(t) {
                    var e, n, s = this;
                    return n = t % s.group.length, n = n < 0 ? s.group.length + n : n, !s.slides[t] && s.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(s.$refs.stage), s.slides[t] = i.extend(!0, {}, s.group[n], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }), s.updateSlide(s.slides[t])), s.slides[t]
                },
                scaleToActual: function(t, e, s) {
                    var r, a, o, l, d, c = this,
                        h = c.current,
                        u = h.$content,
                        p = parseInt(h.$slide.width(), 10),
                        f = parseInt(h.$slide.height(), 10),
                        g = h.width,
                        v = h.height;
                    "image" != h.type || h.hasError || !u || c.isAnimating || (i.fancybox.stop(u), c.isAnimating = !0, t = t === n ? .5 * p : t, e = e === n ? .5 * f : e, r = i.fancybox.getTranslate(u), l = g / r.width, d = v / r.height, a = .5 * p - .5 * g, o = .5 * f - .5 * v, g > p && ((a = r.left * l - (t * l - t)) > 0 && (a = 0), a < p - g && (a = p - g)), v > f && ((o = r.top * d - (e * d - e)) > 0 && (o = 0), o < f - v && (o = f - v)), c.updateCursor(g, v), i.fancybox.animate(u, {
                        top: o,
                        left: a,
                        scaleX: l,
                        scaleY: d
                    }, s || 330, function() {
                        c.isAnimating = !1
                    }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                },
                scaleToFit: function(t) {
                    var e, n = this,
                        s = n.current,
                        r = s.$content;
                    "image" != s.type || s.hasError || !r || n.isAnimating || (i.fancybox.stop(r), n.isAnimating = !0, e = n.getFitPos(s), n.updateCursor(e.width, e.height), i.fancybox.animate(r, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / r.width(),
                        scaleY: e.height / r.height()
                    }, t || 330, function() {
                        n.isAnimating = !1
                    }))
                },
                getFitPos: function(t) {
                    var e, n, s, r, o, l = this,
                        d = t.$content,
                        c = t.width,
                        h = t.height,
                        u = t.opts.margin;
                    return !(!d || !d.length || !c && !h) && ("number" === i.type(u) && (u = [u, u]), 2 == u.length && (u = [u[0], u[1], u[0], u[1]]), a.width() < 800 && (u = [0, 0, 0, 0]), e = parseInt(l.$refs.stage.width(), 10) - (u[1] + u[3]), n = parseInt(l.$refs.stage.height(), 10) - (u[0] + u[2]), s = Math.min(1, e / c, n / h), r = Math.floor(s * c), o = Math.floor(s * h), {
                        top: Math.floor(.5 * (n - o)) + u[0],
                        left: Math.floor(.5 * (e - r)) + u[3],
                        width: r,
                        height: o
                    })
                },
                update: function() {
                    var t = this;
                    i.each(t.slides, function(e, i) {
                        t.updateSlide(i)
                    })
                },
                updateSlide: function(t) {
                    var e = this,
                        n = t.$content;
                    n && (t.width || t.height) && (i.fancybox.stop(n), i.fancybox.setTranslate(n, e.getFitPos(t)), t.pos === e.currPos && e.updateCursor()), t.$slide.trigger("refresh"), e.trigger("onUpdate", t)
                },
                updateCursor: function(t, e) {
                    var i = this,
                        s = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                    i.current && !i.isClosing && (i.isZoomable() ? (s.addClass("fancybox-is-zoomable"), (t !== n && e !== n ? t < i.current.width && e < i.current.height : i.isScaledDown()) ? s.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? s.addClass("fancybox-can-drag") : s.addClass("fancybox-can-zoomOut")) : i.current.opts.touch && s.addClass("fancybox-can-drag"))
                },
                isZoomable: function() {
                    var t, e = this,
                        n = e.current;
                    if (n && !e.isClosing) return !!("image" === n.type && n.isLoaded && !n.hasError && ("zoom" === n.opts.clickContent || i.isFunction(n.opts.clickContent) && "zoom" === n.opts.clickContent(n)) && (t = e.getFitPos(n), n.width > t.width || n.height > t.height))
                },
                isScaledDown: function() {
                    var t = this.current,
                        e = t.$content,
                        n = !1;
                    return e && (n = i.fancybox.getTranslate(e), n = n.width < t.width || n.height < t.height), n
                },
                canPan: function() {
                    var t = this,
                        e = t.current,
                        i = e.$content,
                        n = !1;
                    return i && (n = t.getFitPos(e), n = Math.abs(i.width() - n.width) > 1 || Math.abs(i.height() - n.height) > 1), n
                },
                loadSlide: function(t) {
                    var e, n, s, r = this;
                    if (!t.isLoading && !t.isLoaded) {
                        switch (t.isLoading = !0, r.trigger("beforeLoad", t), e = t.type, (n = t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), e) {
                            case "image":
                                r.setImage(t);
                                break;
                            case "iframe":
                                r.setIframe(t);
                                break;
                            case "html":
                                r.setContent(t, t.src || t.content);
                                break;
                            case "inline":
                                i(t.src).length ? r.setContent(t, i(t.src)) : r.setError(t);
                                break;
                            case "ajax":
                                r.showLoading(t), s = i.ajax(i.extend({}, t.opts.ajax.settings, {
                                    url: t.src,
                                    success: function(e, i) {
                                        "success" === i && r.setContent(t, e)
                                    },
                                    error: function(e, i) {
                                        e && "abort" !== i && r.setError(t)
                                    }
                                })), n.one("onReset", function() {
                                    s.abort()
                                });
                                break;
                            default:
                                r.setError(t)
                        }
                        return !0
                    }
                },
                setImage: function(e) {
                    var n, s, r, a, o = this,
                        l = e.opts.image.srcset;
                    if (l) {
                        r = t.devicePixelRatio || 1, a = t.innerWidth * r, (s = l.split(",").map(function(t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach(function(t, i) {
                                var n = parseInt(t.substring(0, t.length - 1), 10);
                                return 0 === i ? e.url = t : void(n && (e.value = n, e.postfix = t[t.length - 1]))
                            }), e
                        })).sort(function(t, e) {
                            return t.value - e.value
                        });
                        for (var d = 0; d < s.length; d++) {
                            var c = s[d];
                            if ("w" === c.postfix && c.value >= a || "x" === c.postfix && c.value >= r) {
                                n = c;
                                break
                            }
                        }!n && s.length && (n = s[s.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value))
                    }
                    e.$content = i('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = i("<img />").one("error", function() {
                        i(this).remove(), e.$ghost = null, o.setBigImage(e)
                    }).one("load", function() {
                        o.afterLoad(e), o.setBigImage(e)
                    }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : o.setBigImage(e)
                },
                setBigImage: function(t) {
                    var e = this,
                        n = i("<img />");
                    t.$image = n.one("error", function() {
                        e.setError(t)
                    }).one("load", function() {
                        clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
                            t.timouts = null, t.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                    }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (n[0].complete || "complete" == n[0].readyState) && n[0].naturalWidth && n[0].naturalHeight ? n.trigger("load") : n[0].error ? n.trigger("error") : t.timouts = setTimeout(function() {
                        n[0].complete || t.hasError || e.showLoading(t)
                    }, 100)
                },
                setIframe: function(t) {
                    var e, s = this,
                        r = t.opts.iframe,
                        a = t.$slide;
                    t.$content = i('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(a), e = i(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(t.$content), r.preload ? (s.showLoading(t), e.on("load.fb error.fb", function(e) {
                        this.isReady = 1, t.$slide.trigger("refresh"), s.afterLoad(t)
                    }), a.on("refresh.fb", function() {
                        var i, s, a = t.$content,
                            o = r.css.width,
                            l = r.css.height;
                        if (1 === e[0].isReady) {
                            try {
                                s = e.contents().find("body")
                            } catch (t) {}
                            s && s.length && (o === n && (i = e[0].contentWindow.document.documentElement.scrollWidth, o = Math.ceil(s.outerWidth(!0) + (a.width() - i)), o += a.outerWidth() - a.innerWidth()), l === n && (l = Math.ceil(s.outerHeight(!0)), l += a.outerHeight() - a.innerHeight()), o && a.width(o), l && a.height(l)), a.removeClass("fancybox-is-hidden")
                        }
                    })) : this.afterLoad(t), e.attr("src", t.src), !0 === t.opts.smallBtn && t.$content.prepend(s.translate(t, t.opts.btnTpl.smallBtn)), a.one("onReset", function() {
                        try {
                            i(this).find("iframe").hide().attr("src", "//about:blank")
                        } catch (t) {}
                        i(this).empty(), t.isLoaded = !1
                    })
                },
                setContent: function(t, e) {
                    var n = this;
                    n.isClosing || (n.hideLoading(t), t.$slide.empty(), d(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = i("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && 3 === (e = i("<div>").append(i.trim(e)).contents())[0].nodeType && (e = i("<div>").html(e)), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                        t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1)
                    }), t.$content = i(e).appendTo(t.$slide), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = i(n.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div").first())), this.afterLoad(t))
                },
                setError: function(t) {
                    t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
                },
                showLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = i(e.opts.spinnerTpl).appendTo(t.$slide))
                },
                hideLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
                },
                afterLoad: function(t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                        return 2 == t.button && t.preventDefault(), !0
                    }), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
                },
                revealContent: function(t) {
                    var e, s, r, a, o, l = this,
                        d = t.$slide,
                        c = !1;
                    return e = t.opts[l.firstRun ? "animationEffect" : "transitionEffect"], r = t.opts[l.firstRun ? "animationDuration" : "transitionDuration"], r = parseInt(t.forcedDuration === n ? r : t.forcedDuration, 10), !t.isMoved && t.pos === l.currPos && r || (e = !1), "zoom" !== e || t.pos === l.currPos && r && "image" === t.type && !t.hasError && (c = l.getThumbPos(t)) || (e = "fade"), "zoom" === e ? (o = l.getFitPos(t), o.scaleX = o.width / c.width, o.scaleY = o.height / c.height, delete o.width, delete o.height, "auto" == (a = t.opts.zoomOpacity) && (a = Math.abs(t.width / t.height - c.width / c.height) > .1), a && (c.opacity = .1, o.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), u(t.$content), void i.fancybox.animate(t.$content, o, r, function() {
                        l.complete()
                    })) : (l.updateSlide(t), e ? (i.fancybox.stop(d), s = "fancybox-animated fancybox-slide--" + (t.pos > l.prevPos ? "next" : "previous") + " fancybox-fx-" + e, d.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(s), t.$content.removeClass("fancybox-is-hidden"), u(d), void i.fancybox.animate(d, "fancybox-slide--current", r, function(e) {
                        d.removeClass(s).removeAttr("style"), t.pos === l.currPos && l.complete()
                    }, !0)) : (u(d), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === l.currPos && l.complete())))
                },
                getThumbPos: function(n) {
                    var s, r = this,
                        a = !1,
                        o = n.opts.$thumb,
                        l = o ? o.offset() : 0;
                    return l && o[0].ownerDocument === e && function(e) {
                        for (var n = e[0], s = n.getBoundingClientRect(), r = []; null !== n.parentElement;) "hidden" !== i(n.parentElement).css("overflow") && "auto" !== i(n.parentElement).css("overflow") || r.push(n.parentElement.getBoundingClientRect()), n = n.parentElement;
                        return r.every(function(t) {
                            var e = Math.min(s.right, t.right) - Math.max(s.left, t.left),
                                i = Math.min(s.bottom, t.bottom) - Math.max(s.top, t.top);
                            return e > 0 && i > 0
                        }) && s.bottom > 0 && s.right > 0 && s.left < i(t).width() && s.top < i(t).height()
                    }(o) && (s = r.$refs.stage.offset(), a = {
                        top: l.top - s.top + parseFloat(o.css("border-top-width") || 0),
                        left: l.left - s.left + parseFloat(o.css("border-left-width") || 0),
                        width: o.width(),
                        height: o.height(),
                        scaleX: 1,
                        scaleY: 1
                    }), a
                },
                complete: function() {
                    var t = this,
                        n = t.current,
                        s = {};
                    n.isMoved || !n.isLoaded || n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), u(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(t.slides, function(e, n) {
                        n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? s[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.off().remove())
                    }), t.slides = s, t.updateCursor(), t.trigger("afterShow"), (i(e.activeElement).is("[disabled]") || n.opts.autoFocus && "image" != n.type && "iframe" !== n.type) && t.focus())
                },
                preload: function() {
                    var t, e, i = this;
                    i.group.length < 2 || (t = i.slides[i.currPos + 1], e = i.slides[i.currPos - 1], t && "image" === t.type && i.loadSlide(t), e && "image" === e.type && i.loadSlide(e))
                },
                focus: function() {
                    var t, e = this.current;
                    this.isClosing || (e && e.isComplete && ((t = e.$slide.find("input[autofocus]:enabled:visible:first")).length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), (t = t && t.length ? t : this.$refs.container).focus())
                },
                activate: function() {
                    var t = this;
                    i(".fancybox-container").each(function() {
                        var e = i(this).data("FancyBox");
                        e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
                    }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                },
                close: function(t, e) {
                    var n, s, r, a, o, l, d = this,
                        u = d.current,
                        p = function() {
                            d.cleanUp(t)
                        };
                    return !(d.isClosing || (d.isClosing = !0, !1 === d.trigger("beforeClose", t) ? (d.isClosing = !1, c(function() {
                        d.update()
                    }), 1) : (d.removeEvents(), u.timouts && clearTimeout(u.timouts), r = u.$content, n = u.opts.animationEffect, s = i.isNumeric(e) ? e : n ? u.opts.animationDuration : 0, u.$slide.off(h).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), u.$slide.siblings().trigger("onReset").remove(), s && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), d.hideLoading(u), d.hideControls(), d.updateCursor(), "zoom" !== n || !0 !== t && r && s && "image" === u.type && !u.hasError && (l = d.getThumbPos(u)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(r), o = i.fancybox.getTranslate(r), o.width = o.width * o.scaleX, o.height = o.height * o.scaleY, "auto" == (a = u.opts.zoomOpacity) && (a = Math.abs(u.width / u.height - l.width / l.height) > .1), a && (l.opacity = 0), o.scaleX = o.width / l.width, o.scaleY = o.height / l.height, o.width = l.width, o.height = l.height, i.fancybox.setTranslate(u.$content, o), i.fancybox.animate(u.$content, l, s, p), 0) : (n && s ? !0 === t ? setTimeout(p, s) : i.fancybox.animate(u.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + n, s, p) : p(), 0))))
                },
                cleanUp: function(t) {
                    var e, n = this;
                    n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", t), n.$lastFocus && n.current.opts.backFocus && n.$lastFocus.focus(), n.current = null, (e = i.fancybox.getInstance()) ? e.activate() : (a.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft), i("html").removeClass("fancybox-enabled"), i("#fancybox-style-noscroll").remove())
                },
                trigger: function(t, e) {
                    var n, s = Array.prototype.slice.call(arguments, 1),
                        r = this,
                        a = e && e.opts ? e : r.current;
                    return a ? s.unshift(a) : a = r, s.unshift(r), i.isFunction(a.opts[t]) && (n = a.opts[t].apply(a, s)), !1 === n ? n : void("afterClose" === t ? o.trigger(t + ".fb", s) : r.$refs.container.trigger(t + ".fb", s))
                },
                updateControls: function(t) {
                    var e = this,
                        n = e.current,
                        s = n.index,
                        r = n.opts,
                        a = r.caption,
                        o = e.$refs.caption;
                    n.$slide.trigger("refresh"), e.$caption = a && a.length ? o.html(a) : null, e.isHiddenControls || e.showControls(), i("[data-fancybox-count]").html(e.group.length), i("[data-fancybox-index]").html(s + 1), i("[data-fancybox-prev]").prop("disabled", !r.loop && s <= 0), i("[data-fancybox-next]").prop("disabled", !r.loop && s >= e.group.length - 1)
                },
                hideControls: function() {
                    this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
                },
                showControls: function() {
                    var t = this,
                        e = t.current ? t.current.opts : t.opts,
                        i = t.$refs.container;
                    t.isHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? i.addClass("fancybox-show-caption ") : i.removeClass("fancybox-show-caption")
                },
                toggleControls: function() {
                    this.isHiddenControls ? this.showControls() : this.hideControls()
                }
            }), i.fancybox = {
                version: "3.1.28",
                defaults: r,
                getInstance: function(t) {
                    var e = i('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
                        n = Array.prototype.slice.call(arguments, 1);
                    return e instanceof p && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e)
                },
                open: function(t, e, i) {
                    return new p(t, e, i)
                },
                close: function(t) {
                    var e = this.getInstance();
                    e && (e.close(), !0 === t && this.close())
                },
                destroy: function() {
                    this.close(!0), o.off("click.fb-start")
                },
                isMobile: e.createTouch !== n && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
                use3d: function() {
                    var i = e.createElement("div");
                    return t.getComputedStyle && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
                }(),
                getTranslate: function(t) {
                    var e;
                    if (!t || !t.length) return !1;
                    if ((e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? (e = e.split("(")[1], e = e.split(")")[0], e = e.split(",")) : e = [], e.length) e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]], e = e.map(parseFloat);
                    else {
                        e = [0, 0, 1, 1];
                        var i = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                        i && (e[0] = parseFloat(i[2]), e[1] = parseFloat(i[1]))
                    }
                    return {
                        top: e[0],
                        left: e[1],
                        scaleX: e[2],
                        scaleY: e[3],
                        opacity: parseFloat(t.css("opacity")),
                        width: t.width(),
                        height: t.height()
                    }
                },
                setTranslate: function(t, e) {
                    var i = "",
                        s = {};
                    if (t && e) return e.left === n && e.top === n || (i = (e.left === n ? t.position().left : e.left) + "px, " + (e.top === n ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), e.scaleX !== n && e.scaleY !== n && (i = (i.length ? i + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), i.length && (s.transform = i), e.opacity !== n && (s.opacity = e.opacity), e.width !== n && (s.width = e.width), e.height !== n && (s.height = e.height), t.css(s)
                },
                animate: function(t, e, s, r, a) {
                    var o = h || "transitionend";
                    i.isFunction(s) && (r = s, s = null), i.isPlainObject(e) || t.removeAttr("style"), t.on(o, function(s) {
                        (!s || !s.originalEvent || t.is(s.originalEvent.target) && "z-index" != s.originalEvent.propertyName) && (t.off(o), i.isPlainObject(e) ? e.scaleX !== n && e.scaleY !== n && (t.css("transition-duration", "0ms"), e.width = Math.round(t.width() * e.scaleX), e.height = Math.round(t.height() * e.scaleY), e.scaleX = 1, e.scaleY = 1, i.fancybox.setTranslate(t, e)) : !0 !== a && t.removeClass(e), i.isFunction(r) && r(s))
                    }), i.isNumeric(s) && t.css("transition-duration", s + "ms"), i.isPlainObject(e) ? i.fancybox.setTranslate(t, e) : t.addClass(e), t.data("timer", setTimeout(function() {
                        t.trigger("transitionend")
                    }, s + 16))
                },
                stop: function(t) {
                    clearTimeout(t.data("timer")), t.off(h)
                }
            }, i.fn.fancybox = function(t) {
                var e;
                return t = t || {}, (e = t.selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, s) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, s), this
            }, o.on("click.fb-start", "[data-fancybox]", s)
        }
    }(window, document, window.jQuery || jQuery),
    function(t) {
        "use strict";
        var e = function(e, i, n) {
                if (e) return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function(t, i) {
                    e = e.replace("$" + t, i || "")
                }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
            },
            i = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1
                    },
                    paramPlace: 8,
                    type: "iframe",
                    url: "//www.youtube.com/embed/$4",
                    thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1,
                        api: 1
                    },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2"
                },
                metacafe: {
                    matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                    type: "iframe",
                    url: "//www.metacafe.com/embed/$1/?ap=1"
                },
                dailymotion: {
                    matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                    params: {
                        additionalInfos: 0,
                        autoStart: 1
                    },
                    type: "iframe",
                    url: "//www.dailymotion.com/embed/video/$1"
                },
                vine: {
                    matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                    type: "iframe",
                    url: "//vine.co/v/$1/embed/simple"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function(t) {
                        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function(t) {
                        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                    }
                }
            };
        t(document).on("onInit.fb", function(n, s) {
            t.each(s.group, function(n, s) {
                var r, a, o, l, d, c, h, u = s.src || "",
                    p = !1;
                s.type || (r = t.extend(!0, {}, i, s.opts.media), t.each(r, function(i, n) {
                    if (o = u.match(n.matcher), c = {}, h = i, o) {
                        if (p = n.type, n.paramPlace && o[n.paramPlace]) {
                            "?" == (d = o[n.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                            for (var r = 0; r < d.length; ++r) {
                                var f = d[r].split("=", 2);
                                2 == f.length && (c[f[0]] = decodeURIComponent(f[1].replace(/\+/g, " ")))
                            }
                        }
                        return l = t.extend(!0, {}, n.params, s.opts[i], c), u = "function" === t.type(n.url) ? n.url.call(this, o, l, s) : e(n.url, o, l), a = "function" === t.type(n.thumb) ? n.thumb.call(this, o, l, s) : e(n.thumb, o), "vimeo" === h && (u = u.replace("&%23", "#")), !1
                    }
                }), p ? (s.src = u, s.type = p, s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = a), "iframe" === p && (t.extend(!0, s.opts, {
                    iframe: {
                        preload: !1,
                        attr: {
                            scrolling: "no"
                        }
                    }
                }), s.contentProvider = h, s.opts.slideClass += " fancybox-slide--" + ("gmap_place" == h || "gmap_search" == h ? "map" : "video"))) : s.type = "image")
            })
        })
    }(window.jQuery),
    function(t, e, i) {
        "use strict";
        var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            s = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e)
            },
            r = function(e) {
                var i = [];
                e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
                for (var n in e) e[n].pageX ? i.push({
                    x: e[n].pageX,
                    y: e[n].pageY
                }) : e[n].clientX && i.push({
                    x: e[n].clientX,
                    y: e[n].clientY
                });
                return i
            },
            a = function(t, e, i) {
                return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
            },
            o = function(t) {
                if (t.is("a,button,input,select,textarea,label") || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                for (var e = 0, n = t[0].attributes, s = n.length; e < s; e++)
                    if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
                return !1
            },
            l = function(e) {
                var i = t.getComputedStyle(e)["overflow-y"],
                    n = t.getComputedStyle(e)["overflow-x"],
                    s = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight,
                    r = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
                return s || r
            },
            d = function(t) {
                for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
                return e
            },
            c = function(t) {
                var e = this;
                e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"))
            };
        c.prototype.destroy = function() {
            this.$container.off(".fb.touch")
        }, c.prototype.ontouchstart = function(n) {
            var s = this,
                l = i(n.target),
                c = s.instance,
                h = c.current,
                u = h.$content,
                p = "touchstart" == n.type;
            if (p && s.$container.off("mousedown.fb.touch"), !h || s.instance.isAnimating || s.instance.isClosing) return n.stopPropagation(), void n.preventDefault();
            if ((!n.originalEvent || 2 != n.originalEvent.button) && l.length && !o(l) && !o(l.parent()) && !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left) && (s.startPoints = r(n), s.startPoints && !(s.startPoints.length > 1 && c.isSliding))) {
                if (s.$target = l, s.$content = u, s.canTap = !0, i(e).off(".fb.touch"), i(e).on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(s, "ontouchend")), i(e).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(s, "ontouchmove")), !c.current.opts.touch && !c.canPan() || !l.is(s.$stage) && !s.$stage.find(l).length) return void(l.is("img") && n.preventDefault());
                n.stopPropagation(), i.fancybox.isMobile && (d(s.$target) || d(s.$target.parent())) || n.preventDefault(), s.canvasWidth = Math.round(h.$slide[0].clientWidth), s.canvasHeight = Math.round(h.$slide[0].clientHeight), s.startTime = (new Date).getTime(), s.distanceX = s.distanceY = s.distance = 0, s.isPanning = !1, s.isSwiping = !1, s.isZooming = !1, s.sliderStartPos = s.sliderLastPos || {
                    top: 0,
                    left: 0
                }, s.contentStartPos = i.fancybox.getTranslate(s.$content), s.contentLastPos = null, 1 !== s.startPoints.length || s.isZooming || (s.canTap = !c.isSliding, "image" === h.type && (s.contentStartPos.width > s.canvasWidth + 1 || s.contentStartPos.height > s.canvasHeight + 1) ? (i.fancybox.stop(s.$content), s.$content.css("transition-duration", "0ms"), s.isPanning = !0) : s.isSwiping = !0, s.$container.addClass("fancybox-controls--isGrabbing")), 2 !== s.startPoints.length || c.isAnimating || h.hasError || "image" !== h.type || !h.isLoaded && !h.$ghost || (s.isZooming = !0, s.isSwiping = !1, s.isPanning = !1, i.fancybox.stop(s.$content), s.$content.css("transition-duration", "0ms"), s.centerPointStartX = .5 * (s.startPoints[0].x + s.startPoints[1].x) - i(t).scrollLeft(), s.centerPointStartY = .5 * (s.startPoints[0].y + s.startPoints[1].y) - i(t).scrollTop(), s.percentageOfImageAtPinchPointX = (s.centerPointStartX - s.contentStartPos.left) / s.contentStartPos.width, s.percentageOfImageAtPinchPointY = (s.centerPointStartY - s.contentStartPos.top) / s.contentStartPos.height, s.startDistanceBetweenFingers = a(s.startPoints[0], s.startPoints[1]))
            }
        }, c.prototype.ontouchmove = function(t) {
            var e = this;
            if (e.newPoints = r(t), i.fancybox.isMobile && (d(e.$target) || d(e.$target.parent()))) return t.stopPropagation(), void(e.canTap = !1);
            if ((e.instance.current.opts.touch || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = a(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = a(e.newPoints[0], e.startPoints[0], "y"), e.distance = a(e.newPoints[0], e.startPoints[0]), e.distance > 0)) {
                if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length) return;
                t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()
            }
        }, c.prototype.onSwipe = function() {
            var e, r = this,
                a = r.isSwiping,
                o = r.sliderStartPos.left || 0;
            !0 === a ? Math.abs(r.distance) > 10 && (r.canTap = !1, r.instance.group.length < 2 && r.instance.opts.touch.vertical ? r.isSwiping = "y" : r.instance.isSliding || !1 === r.instance.opts.touch.vertical || "auto" === r.instance.opts.touch.vertical && i(t).width() > 800 ? r.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(r.distanceY, r.distanceX) / Math.PI), r.isSwiping = e > 45 && e < 135 ? "y" : "x"), r.instance.isSliding = r.isSwiping, r.startPoints = r.newPoints, i.each(r.instance.slides, function(t, e) {
                i.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, e.pos === r.instance.current.pos && (r.sliderStartPos.left = i.fancybox.getTranslate(e.$slide).left)
            }), r.instance.SlideShow && r.instance.SlideShow.isActive && r.instance.SlideShow.stop()) : ("x" == a && (r.distanceX > 0 && (r.instance.group.length < 2 || 0 === r.instance.current.index && !r.instance.current.opts.loop) ? o += Math.pow(r.distanceX, .8) : r.distanceX < 0 && (r.instance.group.length < 2 || r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop) ? o -= Math.pow(-r.distanceX, .8) : o += r.distanceX), r.sliderLastPos = {
                top: "x" == a ? 0 : r.sliderStartPos.top + r.distanceY,
                left: o
            }, r.requestId && (s(r.requestId), r.requestId = null), r.requestId = n(function() {
                r.sliderLastPos && (i.each(r.instance.slides, function(t, e) {
                    var n = e.pos - r.instance.currPos;
                    i.fancybox.setTranslate(e.$slide, {
                        top: r.sliderLastPos.top,
                        left: r.sliderLastPos.left + n * r.canvasWidth + n * e.opts.gutter
                    })
                }), r.$container.addClass("fancybox-is-sliding"))
            }))
        }, c.prototype.onPan = function() {
            var t, e, r, a = this;
            a.canTap = !1, t = a.contentStartPos.width > a.canvasWidth ? a.contentStartPos.left + a.distanceX : a.contentStartPos.left, e = a.contentStartPos.top + a.distanceY, (r = a.limitMovement(t, e, a.contentStartPos.width, a.contentStartPos.height)).scaleX = a.contentStartPos.scaleX, r.scaleY = a.contentStartPos.scaleY, a.contentLastPos = r, a.requestId && (s(a.requestId), a.requestId = null), a.requestId = n(function() {
                i.fancybox.setTranslate(a.$content, a.contentLastPos)
            })
        }, c.prototype.limitMovement = function(t, e, i, n) {
            var s, r, a, o, l = this,
                d = l.canvasWidth,
                c = l.canvasHeight,
                h = l.contentStartPos.left,
                u = l.contentStartPos.top,
                p = l.distanceX,
                f = l.distanceY;
            return s = Math.max(0, .5 * d - .5 * i), r = Math.max(0, .5 * c - .5 * n), a = Math.min(d - i, .5 * d - .5 * i), o = Math.min(c - n, .5 * c - .5 * n), i > d && (p > 0 && t > s && (t = s - 1 + Math.pow(-s + h + p, .8) || 0), p < 0 && t < a && (t = a + 1 - Math.pow(a - h - p, .8) || 0)), n > c && (f > 0 && e > r && (e = r - 1 + Math.pow(-r + u + f, .8) || 0), f < 0 && e < o && (e = o + 1 - Math.pow(o - u - f, .8) || 0)), {
                top: e,
                left: t
            }
        }, c.prototype.limitPosition = function(t, e, i, n) {
            var s = this,
                r = s.canvasWidth,
                a = s.canvasHeight;
            return i > r ? (t = t > 0 ? 0 : t, t = t < r - i ? r - i : t) : t = Math.max(0, r / 2 - i / 2), n > a ? (e = e > 0 ? 0 : e, e = e < a - n ? a - n : e) : e = Math.max(0, a / 2 - n / 2), {
                top: e,
                left: t
            }
        }, c.prototype.onZoom = function() {
            var e = this,
                r = e.contentStartPos.width,
                o = e.contentStartPos.height,
                l = e.contentStartPos.left,
                d = e.contentStartPos.top,
                c = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                h = Math.floor(r * c),
                u = Math.floor(o * c),
                p = (r - h) * e.percentageOfImageAtPinchPointX,
                f = (o - u) * e.percentageOfImageAtPinchPointY,
                g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
                v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(),
                m = g - e.centerPointStartX,
                b = {
                    top: d + (f + (v - e.centerPointStartY)),
                    left: l + (p + m),
                    scaleX: e.contentStartPos.scaleX * c,
                    scaleY: e.contentStartPos.scaleY * c
                };
            e.canTap = !1, e.newWidth = h, e.newHeight = u, e.contentLastPos = b, e.requestId && (s(e.requestId), e.requestId = null), e.requestId = n(function() {
                i.fancybox.setTranslate(e.$content, e.contentLastPos)
            })
        }, c.prototype.ontouchend = function(t) {
            var n = this,
                a = Math.max((new Date).getTime() - n.startTime, 1),
                o = n.isSwiping,
                l = n.isPanning,
                d = n.isZooming;
            return n.endPoints = r(t), n.$container.removeClass("fancybox-controls--isGrabbing"), i(e).off(".fb.touch"), n.requestId && (s(n.requestId), n.requestId = null), n.isSwiping = !1, n.isPanning = !1, n.isZooming = !1, n.canTap ? n.onTap(t) : (n.speed = 366, n.velocityX = n.distanceX / a * .5, n.velocityY = n.distanceY / a * .5, n.speedX = Math.max(.5 * n.speed, Math.min(1.5 * n.speed, 1 / Math.abs(n.velocityX) * n.speed)), void(l ? n.endPanning() : d ? n.endZooming() : n.endSwiping(o)))
        }, c.prototype.endSwiping = function(t) {
            var e = this,
                n = !1;
            e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && Math.abs(e.distanceY) > 50 ? (i.fancybox.animate(e.instance.current.$slide, {
                top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
                opacity: 0
            }, 150), n = e.instance.close(!0, 300)) : "x" == t && e.distanceX > 50 && e.instance.group.length > 1 ? n = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && e.instance.group.length > 1 && (n = e.instance.next(e.speedX)), !1 !== n || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), e.$container.removeClass("fancybox-is-sliding")
        }, c.prototype.endPanning = function() {
            var t, e, n, s = this;
            s.contentLastPos && (!1 === s.instance.current.opts.touch.momentum ? (t = s.contentLastPos.left, e = s.contentLastPos.top) : (t = s.contentLastPos.left + s.velocityX * s.speed, e = s.contentLastPos.top + s.velocityY * s.speed), n = s.limitPosition(t, e, s.contentStartPos.width, s.contentStartPos.height), n.width = s.contentStartPos.width, n.height = s.contentStartPos.height, i.fancybox.animate(s.$content, n, 330))
        }, c.prototype.endZooming = function() {
            var t, e, n, s, r = this,
                a = r.instance.current,
                o = r.newWidth,
                l = r.newHeight;
            r.contentLastPos && (t = r.contentLastPos.left, e = r.contentLastPos.top, s = {
                top: e,
                left: t,
                width: o,
                height: l,
                scaleX: 1,
                scaleY: 1
            }, i.fancybox.setTranslate(r.$content, s), o < r.canvasWidth && l < r.canvasHeight ? r.instance.scaleToFit(150) : o > a.width || l > a.height ? r.instance.scaleToActual(r.centerPointStartX, r.centerPointStartY, 150) : (n = r.limitPosition(t, e, o, l), i.fancybox.setTranslate(r.content, i.fancybox.getTranslate(r.$content)), i.fancybox.animate(r.$content, n, 150)))
        }, c.prototype.onTap = function(t) {
            var e, n = this,
                s = i(t.target),
                a = n.instance,
                o = a.current,
                l = t && r(t) || n.startPoints,
                d = l[0] ? l[0].x - n.$stage.offset().left : 0,
                c = l[0] ? l[0].y - n.$stage.offset().top : 0,
                h = function(e) {
                    var s = o.opts[e];
                    if (i.isFunction(s) && (s = s.apply(a, [o, t])), s) switch (s) {
                        case "close":
                            a.close(n.startEvent);
                            break;
                        case "toggleControls":
                            a.toggleControls(!0);
                            break;
                        case "next":
                            a.next();
                            break;
                        case "nextOrClose":
                            a.group.length > 1 ? a.next() : a.close(n.startEvent);
                            break;
                        case "zoom":
                            "image" == o.type && (o.isLoaded || o.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(d, c) : a.group.length < 2 && a.close(n.startEvent))
                    }
                };
            if (!(t.originalEvent && 2 == t.originalEvent.button || a.isSliding || d > s[0].clientWidth + s.offset().left)) {
                if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
                else if (s.is(".fancybox-slide")) e = "Slide";
                else {
                    if (!a.current.$content || !a.current.$content.has(t.target).length) return;
                    e = "Content"
                }
                if (n.tapped) {
                    if (clearTimeout(n.tapped), n.tapped = null, Math.abs(d - n.tapX) > 50 || Math.abs(c - n.tapY) > 50 || a.isSliding) return this;
                    h("dblclick" + e)
                } else n.tapX = d, n.tapY = c, o.opts["dblclick" + e] && o.opts["dblclick" + e] !== o.opts["click" + e] ? n.tapped = setTimeout(function() {
                    n.tapped = null, h("click" + e)
                }, 300) : h("click" + e);
                return this
            }
        }, i(e).on("onActivate.fb", function(t, e) {
            e && !e.Guestures && (e.Guestures = new c(e))
        }), i(e).on("beforeClose.fb", function(t, e) {
            e && e.Guestures && e.Guestures.destroy()
        })
    }(window, document, window.jQuery),
    function(t, e) {
        "use strict";
        var i = function(t) {
            this.instance = t, this.init()
        };
        e.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            speed: 3e3,
            init: function() {
                var t = this;
                t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                    t.toggle()
                }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
            },
            set: function() {
                var t = this;
                t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                    t.instance.next()
                }, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
            },
            clear: function() {
                var t = this;
                clearTimeout(t.timer), t.timer = null
            },
            start: function() {
                var t = this,
                    e = t.instance.current;
                t.instance && e && (e.opts.loop || e.index < t.instance.group.length - 1) && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), e.isComplete && t.set())
            },
            stop: function() {
                var t = this,
                    e = t.instance.current;
                t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), t.isActive = !1
            },
            toggle: function() {
                var t = this;
                t.isActive ? t.stop() : t.start()
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                e && !e.SlideShow && (e.SlideShow = new i(e))
            },
            "beforeShow.fb": function(t, e, i, n) {
                var s = e && e.SlideShow;
                n ? s && i.opts.slideShow.autoStart && s.start() : s && s.isActive && s.clear()
            },
            "afterShow.fb": function(t, e, i) {
                var n = e && e.SlideShow;
                n && n.isActive && n.set()
            },
            "afterKeydown.fb": function(i, n, s, r, a) {
                var o = n && n.SlideShow;
                !o || !s.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (r.preventDefault(), o.toggle())
            },
            "beforeClose.fb onDeactivate.fb": function(t, e) {
                var i = e && e.SlideShow;
                i && i.stop()
            }
        }), e(t).on("visibilitychange", function() {
            var i = e.fancybox.getInstance(),
                n = i && i.SlideShow;
            n && n.isActive && (t.hidden ? n.clear() : n.set())
        })
    }(document, window.jQuery),
    function(t, e) {
        "use strict";
        var i = function() {
            var e, i, n, s = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ],
                r = {};
            for (i = 0; i < s.length; i++)
                if ((e = s[i]) && e[1] in t) {
                    for (n = 0; n < e.length; n++) r[s[0][n]] = e[n];
                    return r
                }
            return !1
        }();
        if (i) {
            var n = {
                request: function(e) {
                    (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
                },
                exit: function() {
                    t[i.exitFullscreen]()
                },
                toggle: function(e) {
                    e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
                },
                isFullscreen: function() {
                    return Boolean(t[i.fullscreenElement])
                },
                enabled: function() {
                    return Boolean(t[i.fullscreenEnabled])
                }
            };
            e(t).on({
                "onInit.fb": function(t, e) {
                    var i, s = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
                    e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? ((i = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.toggle(i[0])
                    }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(i[0]), e.FullScreen = n) : s.hide()
                },
                "afterKeydown.fb": function(t, e, i, n, s) {
                    e && e.FullScreen && 70 === s && (n.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
                },
                "beforeClose.fb": function(t) {
                    t && t.FullScreen && n.exit()
                }
            }), e(t).on(i.fullscreenchange, function() {
                var t = e.fancybox.getInstance();
                t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0)), t.trigger("onFullscreenChange", n.isFullscreen())
            })
        } else e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1)
    }(document, window.jQuery),
    function(t, e) {
        "use strict";
        var i = function(t) {
            this.instance = t, this.init()
        };
        e.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            init: function() {
                var t = this,
                    e = t.instance.group[0],
                    i = t.instance.group[1];
                t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), t.instance.group.length > 1 && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (t.$button.on("click", function() {
                    t.toggle()
                }), t.isActive = !0) : (t.$button.hide(), t.isActive = !1)
            },
            create: function() {
                var t, i, n = this.instance;
                this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(n.$refs.container), t = "<ul>", e.each(n.group, function(e, n) {
                    (i = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null)) || "image" !== n.type || (i = n.src), i && i.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
                }), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click", "li", function() {
                    n.jumpTo(e(this).data("index"))
                }), this.$list.find("img").hide().one("load", function() {
                    var t, i, n, s, r = e(this).parent().removeClass("fancybox-thumbs-loading"),
                        a = r.outerWidth(),
                        o = r.outerHeight();
                    t = this.naturalWidth || this.width, s = (i = this.naturalHeight || this.height) / o, (n = t / a) >= 1 && s >= 1 && (n > s ? (t /= s, i = o) : (t = a, i /= n)), e(this).css({
                        width: Math.floor(t),
                        height: Math.floor(i),
                        "margin-top": Math.min(0, Math.floor(.3 * o - .3 * i)),
                        "margin-left": Math.min(0, Math.floor(.5 * a - .5 * t))
                    }).show()
                }).each(function() {
                    this.src = e(this).data("src")
                })
            },
            focus: function() {
                this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
            },
            close: function() {
                this.$grid.hide()
            },
            update: function() {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
            },
            hide: function() {
                this.isVisible = !1, this.update()
            },
            show: function() {
                this.isVisible = !0, this.update()
            },
            toggle: function() {
                this.isVisible = !this.isVisible, this.update()
            }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                e && !e.Thumbs && (e.Thumbs = new i(e))
            },
            "beforeShow.fb": function(t, e, i, n) {
                var s = e && e.Thumbs;
                if (s && s.isActive) {
                    if (i.modal) return s.$button.hide(), void s.hide();
                    n && !0 === i.opts.thumbs.autoStart && s.show(), s.isVisible && s.focus()
                }
            },
            "afterKeydown.fb": function(t, e, i, n, s) {
                var r = e && e.Thumbs;
                r && r.isActive && 71 === s && (n.preventDefault(), r.toggle())
            },
            "beforeClose.fb": function(t, e) {
                var i = e && e.Thumbs;
                i && i.isVisible && !1 !== e.opts.thumbs.hideOnClose && i.close()
            }
        })
    }(document, window.jQuery),
    function(t, e, i) {
        "use strict";

        function n() {
            var t = e.location.hash.substr(1),
                i = t.split("-"),
                n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) ? parseInt(i.pop(-1), 10) || 1 : 1,
                s = i.join("-");
            return n < 1 && (n = 1), {
                hash: t,
                index: n,
                gallery: s
            }
        }

        function s(t) {
            var e;
            "" !== t.gallery && ((e = i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = i("#" + i.escapeSelector(t.gallery))), e.length && (a = !1, e.trigger("click")))
        }

        function r(t) {
            var e;
            return !!t && ((e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") : ""))
        }
        i.escapeSelector || (i.escapeSelector = function(t) {
            var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
            return (t + "").replace(e, function(t, e) {
                return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            })
        });
        var a = !0,
            o = null,
            l = null;
        i(function() {
            setTimeout(function() {
                !1 !== i.fancybox.defaults.hash && (i(t).on({
                    "onInit.fb": function(t, e) {
                        var i, s;
                        !1 !== e.group[e.currIndex].opts.hash && (i = n(), (s = r(e)) && i.gallery && s == i.gallery && (e.currIndex = i.index - 1))
                    },
                    "beforeShow.fb": function(i, n, s) {
                        var d;
                        s && !1 !== s.opts.hash && (d = r(n)) && "" !== d && (e.location.hash.indexOf(d) < 0 && (n.opts.origHash = e.location.hash), o = d + (n.group.length > 1 ? "-" + (s.index + 1) : ""), "replaceState" in e.history ? (l && clearTimeout(l), l = setTimeout(function() {
                            e.history[a ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + o), l = null, a = !1
                        }, 300)) : e.location.hash = o)
                    },
                    "beforeClose.fb": function(n, s, a) {
                        var d, c;
                        l && clearTimeout(l), !1 !== a.opts.hash && (d = r(s), c = s && s.opts.origHash ? s.opts.origHash : "", d && "" !== d && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + c) : (e.location.hash = c, i(e).scrollTop(s.scrollTop).scrollLeft(s.scrollLeft))), o = null)
                    }
                }), i(e).on("hashchange.fb", function() {
                    var t = n();
                    i.fancybox.getInstance() ? !o || o === t.gallery + "-" + t.index || 1 === t.index && o == t.gallery || (o = null, i.fancybox.close()) : "" !== t.gallery && s(t)
                }), s(n()))
            }, 50)
        })
    }(document, window, window.jQuery),
    function(t, e, i, n) {
        function s(e) {
            if (this.options = t.extend({}, a, e), !i.cookie.indexOf(this.options.cookieName)) return !1;
            this._defaults = a, this._name = r, this.create()
        }
        var r = "cookieInfo",
            a = {
                defaultText: "We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.",
                okButton: "Ok",
                displayMore: !0,
                moreButton: "More Info",
                moreInfo: "Cookies are small text files held on your computer. Some cookies are required to ensure that the site functions correctly, for this reason we may have already set some cookies. They also allow us to give you the best browsing experience possible and help us understand how you use our site.",
                moreURL: "",
                location: "bottom",
                makeSpace: !1,
                spaceMargin: "34px",
                speedIn: 500,
                speedOut: 400,
                delay: 1e3,
                float: !0,
                style: "dark",
                cookieExpiry: 90,
                cookieName: "CookieInfo",
                ok: function() {}
            };
        s.prototype.create = function() {
            if (this.options.displayMore && "" == this.options.moreURL) var e = '<div id="cookie-law-more-info"><div id="cookie-law-info-container"><a id="cookie-law-more-text-close" href="#">X</a><div id="cookie-law-more-text">' + this.options.moreInfo + '</div><div style="clear:both;"></div></div></div>',
                i = '<a class="cookie-law-button" id="cookie-law-button-more" href="#cookie-law-more-info">' + this.options.moreButton + "</a>";
            else if (this.options.moreURL) var e = "",
                i = '<a class="cookie-law-button" id="cookie-law-button-more" href="' + this.options.moreURL + '">' + this.options.moreButton + "</a>";
            else var e = "",
                    i = "";
            var n = '<div id="cookie-law-container-box"><div id="cookie-law-container"><div id="cookie-law-message">' + this.options.defaultText + '</div><div id="cookie-law-action" style="float:right;"><a class="cookie-law-button" id="cookie-law-button-ok" href="#">' + this.options.okButton + "</a>" + i + '</div><div style="clear:both;"></div></div></div>';
            if (this.options.float || "top" != this.options.location) s = "fixed";
            else var s = "absolute";
            this.options.makeSpace && "top" == this.options.location ? t("body").css("margin-top", this.options.spaceMargin) : this.options.makeSpace && t("body").css("margin-bottom", this.options.spaceMargin), t("body").append('<div id="jquery-cookie-law-script" class="' + this.options.style + " " + this.options.location + " " + s + '">' + e + n + "</div>"), this.action()
        }, s.prototype.action = function() {
            var e = this.options;
            t("#cookie-law-button-ok").click(function(n) {
                n.preventDefault(), i.cookie = e.cookieName + "=accepted;path=/;max-age=" + 86400 * e.cookieExpiry, t("#jquery-cookie-law-script").slideUp(e.speedOut), e.ok.call(e)
            }), e.moreURL || t("#cookie-law-button-more").click(function(i) {
                i.preventDefault(), t("#jquery-cookie-law-script #cookie-law-more-info").slideToggle(e.speedIn)
            }), t("#cookie-law-more-text-close").click(function(i) {
                i.preventDefault(), t("#jquery-cookie-law-script #cookie-law-more-info").slideUp(e.speedOut)
            }), "accepted" != function(t) {
                var e = new RegExp(t + "=([^;]+)").exec(i.cookie);
                return null != e ? unescape(e[1]) : null
            }(e.cookieName) && t("#jquery-cookie-law-script").delay(e.delay).slideDown(e.speedIn)
        }, t.fn[r] = function(t) {
            new s(t)
        }
    }(jQuery, window, document), jQuery.extend({
    highlight: function(t, e, i, n) {
        if (3 === t.nodeType) {
            var s = t.data.match(e);
            if (s) {
                var r = document.createElement(i || "span");
                r.className = n || "highlight";
                var a = t.splitText(s.index);
                a.splitText(s[0].length);
                var o = a.cloneNode(!0);
                return r.appendChild(o), a.parentNode.replaceChild(r, a), 1
            }
        } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName) && (t.tagName !== i.toUpperCase() || t.className !== n))
            for (var l = 0; l < t.childNodes.length; l++) l += jQuery.highlight(t.childNodes[l], e, i, n);
        return 0
    }
}), jQuery.fn.unhighlight = function(t) {
    var e = {
        className: "highlight",
        element: "span"
    };
    return jQuery.extend(e, t), this.find(e.element + "." + e.className).each(function() {
        var t = this.parentNode;
        t.replaceChild(this.firstChild, this), t.normalize()
    }).end()
}, jQuery.fn.highlight = function(t, e) {
    var i = {
        className: "highlight",
        element: "span",
        caseSensitive: !1,
        wordsOnly: !1
    };
    if (jQuery.extend(i, e), t.constructor === String && (t = [t]), t = jQuery.grep(t, function(t, e) {
            return "" != t
        }), 0 == (t = jQuery.map(t, function(t, e) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        })).length) return this;
    var n = i.caseSensitive ? "" : "i",
        s = "(" + t.join("|") + ")";
    i.wordsOnly && (s = "\\b" + s + "\\b");
    var r = new RegExp(s, n);
    return this.each(function() {
        jQuery.highlight(this, r, i.element, i.className)
    })
},
    function(t, e, i, n) {
        function s(e, i) {
            this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this.drag = t.extend({}, u), this.state = t.extend({}, p), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(s.Plugins, t.proxy(function(t, e) {
                this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(s.Pipe, t.proxy(function(e, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }

        function r(t) {
            if (t.touches !== n) return {
                x: t.touches[0].pageX,
                y: t.touches[0].pageY
            };
            if (t.touches === n) {
                if (t.pageX !== n) return {
                    x: t.pageX,
                    y: t.pageY
                };
                if (t.pageX === n) return {
                    x: t.clientX,
                    y: t.clientY
                }
            }
        }

        function a(t) {
            var e, n, s = i.createElement("div"),
                r = t;
            for (e in r)
                if (n = r[e], void 0 !== s.style[n]) return s = null, [n, e];
            return [!1]
        }

        function o() {
            return a(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
        }

        function l() {
            return a(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
        }

        function d() {
            return a(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
        }

        function c() {
            return "ontouchstart" in e || !!navigator.msMaxTouchPoints
        }

        function h() {
            return e.navigator.msPointerEnabled
        }
        var u, p, f;
        u = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            offsetX: 0,
            offsetY: 0,
            distance: null,
            startTime: 0,
            endTime: 0,
            updatedX: 0,
            targetEl: null
        }, p = {
            isTouch: !1,
            isScrolling: !1,
            isSwiping: !1,
            direction: !1,
            inMotion: !1
        }, f = {
            _onDragStart: null,
            _onDragMove: null,
            _onDragEnd: null,
            _transitionEnd: null,
            _resizer: null,
            _responsiveCall: null,
            _goToLoop: null,
            _checkVisibile: null
        }, s.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            responsiveClass: !1,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active"
        }, s.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, s.Plugins = {}, s.Pipe = [{
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t = this._clones;
                (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t, e, i = this._clones,
                    n = this._items,
                    s = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
                for (t = 0, e = Math.abs(s / 2); e > t; t++) s > 0 ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned")))
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t, e, i, n = this.settings.rtl ? 1 : -1,
                    s = (this.width() / this.settings.items).toFixed(3),
                    r = 0;
                for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, r += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : s * t) * n, this._coordinates.push(r)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var e, i, n = (this.width() / this.settings.items).toFixed(3),
                    s = {
                        width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                        "padding-left": this.settings.stagePadding || "",
                        "padding-right": this.settings.stagePadding || ""
                    };
                if (this.$stage.css(s), s = {
                        width: this.settings.autoWidth ? "auto" : n - this.settings.margin
                    }, s[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                        return t > 1
                    }).length > 0)
                    for (e = 0, i = this._coordinates.length; i > e; e++) s.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(s);
                else this.$stage.children().css(s)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current && this.reset(this.$stage.children().index(t.current))
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                    r = 2 * this.settings.stagePadding,
                    a = this.coordinates(this.current()) + r,
                    o = a + this.width() * s,
                    l = [];
                for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + r * s, (this.op(t, "<=", a) && this.op(t, ">", o) || this.op(e, "<", a) && this.op(e, ">", o)) && l.push(i);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
            }
        }], s.prototype.initialize = function() {
            if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) {
                var e, i, s;
                if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, s = this.$element.children(i).width(), e.length && 0 >= s) return this.preloadAutoWidthImages(e), !1
            }
            this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
        }, s.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                s = null;
            i ? (t.each(i, function(t) {
                e >= t && t > n && (n = Number(t))
            }), s = t.extend({}, this.options, i[n]), delete s.responsive, s.responsiveClass && this.$element.attr("class", function(t, e) {
                return e.replace(/\b owl-responsive-\S+/g, "")
            }).addClass("owl-responsive-" + n)) : s = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", {
                property: {
                    name: "settings",
                    value: s
                }
            }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            }))
        }, s.prototype.optionsLogic = function() {
            this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, s.prototype.prepare = function(e) {
            var i = this.trigger("prepare", {
                content: e
            });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, s.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), s = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
            this._invalidated = {}
        }, s.prototype.width = function(t) {
            switch (t = t || s.Width.Default) {
                case s.Width.Inner:
                case s.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, s.prototype.refresh = function() {
            if (0 === this._items.length) return !1;
            (new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
        }, s.prototype.eventsCall = function() {
            this.e._onDragStart = t.proxy(function(t) {
                this.onDragStart(t)
            }, this), this.e._onDragMove = t.proxy(function(t) {
                this.onDragMove(t)
            }, this), this.e._onDragEnd = t.proxy(function(t) {
                this.onDragEnd(t)
            }, this), this.e._onResize = t.proxy(function(t) {
                this.onResize(t)
            }, this), this.e._transitionEnd = t.proxy(function(t) {
                this.transitionEnd(t)
            }, this), this.e._preventClick = t.proxy(function(t) {
                this.preventClick(t)
            }, this)
        }, s.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
        }, s.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
        }, s.prototype.eventsRouter = function(t) {
            var e = t.type;
            "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
        }, s.prototype.internalEvents = function() {
            var i = (c(), h());
            this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
                this.eventsRouter(t)
            }, this)), this.$stage.on("dragstart", function() {
                return !1
            }), this.$stage.get(0).onselectstart = function() {
                return !1
            }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
                this.eventsRouter(t)
            }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
        }, s.prototype.onDragStart = function(n) {
            var s, a, o, l;
            if (3 === (s = n.originalEvent || n || e.event).which || this.state.isTouch) return !1;
            if ("mousedown" === s.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, a = r(s).x, o = r(s).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = a - this.drag.offsetX, this.drag.startY = o - this.drag.offsetY, this.drag.start = a - this.drag.startX, this.drag.targetEl = s.target || s.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
                this.eventsRouter(t)
            }, this))
        }, s.prototype.onDragMove = function(t) {
            var i, s, a, o, l, d;
            this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, s = r(i).x, a = r(i).y, this.drag.currentX = s - this.drag.startX, this.drag.currentY = a - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (o = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), d = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, o + d), l + d)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== n ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
        }, s.prototype.onDragEnd = function(e) {
            var n, s;
            if (this.state.isTouch) {
                if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), n = this.drag.endTime - this.drag.startTime, (Math.abs(this.drag.distance) > 3 || n > 300) && this.removeClick(this.drag.targetEl), s = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(s), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(s) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
            }
        }, s.prototype.removeClick = function(i) {
            this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
                t(i).off("click.preventClick")
            }, 300)
        }, s.prototype.preventClick = function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
        }, s.prototype.getTransformProperty = function() {
            var t;
            return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), !0 !== (16 === t.length) ? t[4] : t[12]
        }, s.prototype.closest = function(e) {
            var i = -1,
                n = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || t.each(s, t.proxy(function(t, r) {
                return e > r - 30 && r + 30 > e ? i = t : this.op(e, "<", r) && this.op(e, ">", s[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
            }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i
        }, s.prototype.animate = function(e) {
            this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px, 0px)",
                transition: this.speed() / 1e3 + "s"
            }) : this.state.isTouch ? this.$stage.css({
                left: e + "px"
            }) : this.$stage.animate({
                left: e
            }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
                this.state.inMotion && this.transitionEnd()
            }, this))
        }, s.prototype.current = function(t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, s.prototype.invalidate = function(t) {
            this._invalidated[t] = !0
        }, s.prototype.reset = function(t) {
            (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, s.prototype.normalize = function(e, i) {
            var s = i ? this._items.length : this._items.length + this._clones.length;
            return !t.isNumeric(e) || 1 > s ? n : e = this._clones.length ? (e % s + s) % s : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
        }, s.prototype.relative = function(t) {
            return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
        }, s.prototype.maximum = function(t) {
            var e, i, n, s = 0,
                r = this.settings;
            if (t) return this._items.length - 1;
            if (!r.loop && r.center) e = this._items.length - 1;
            else if (r.loop || r.center)
                if (r.loop || r.center) e = this._items.length + r.items;
                else {
                    if (!r.autoWidth && !r.merge) throw "Can not detect maximum absolute position.";
                    for (revert = r.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                         (n = this.coordinates(s)) && !(n * revert >= i);) e = ++s
                }
            else e = this._items.length - r.items;
            return e
        }, s.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, s.prototype.items = function(t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, s.prototype.mergers = function(t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, s.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                s = i + this._items.length,
                r = function(t) {
                    return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2
                };
            return e === n ? t.map(this._clones, function(t, e) {
                return r(e)
            }) : t.map(this._clones, function(t, i) {
                return t === e ? r(i) : null
            })
        }, s.prototype.speed = function(t) {
            return t !== n && (this._speed = t), this._speed
        }, s.prototype.coordinates = function(e) {
            var i = null;
            return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
        }, s.prototype.duration = function(t, e, i) {
            return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, s.prototype.to = function(i, n) {
            if (this.settings.loop) {
                var s = i - this.relative(this.current()),
                    r = this.current(),
                    a = this.current(),
                    o = this.current() + s,
                    l = 0 > a - o,
                    d = this._clones.length + this._items.length;
                o < this.settings.items && !1 === l ? (r = a + this._items.length, this.reset(r)) : o >= d - this.settings.items && !0 === l && (r = a - this._items.length, this.reset(r)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                    this.speed(this.duration(this.current(), r + s, n)), this.current(r + s), this.update()
                }, this), 30)
            } else this.speed(this.duration(this.current(), i, n)), this.current(i), this.update()
        }, s.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, s.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, s.prototype.transitionEnd = function(t) {
            return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
        }, s.prototype.viewport = function() {
            var n;
            if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) n = e.innerWidth;
            else {
                if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                n = i.documentElement.clientWidth
            }
            return n
        }, s.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, s.prototype.add = function(t, e) {
            e = e === n ? this._items.length : this.normalize(e, !0), this.trigger("add", {
                content: t,
                position: e
            }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, s.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, s.prototype.addTriggerableEvents = function() {
            var e = t.proxy(function(e, i) {
                return t.proxy(function(t) {
                    t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, this)
            }, this);
            t.each({
                next: this.next,
                prev: this.prev,
                to: this.to,
                destroy: this.destroy,
                refresh: this.refresh,
                replace: this.replace,
                add: this.add,
                remove: this.remove
            }, t.proxy(function(t, i) {
                this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
            }, this))
        }, s.prototype.watchVisibility = function() {
            function i(t) {
                return t.offsetWidth > 0 && t.offsetHeight > 0
            }
            i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(function() {
                i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
            }, this), 500))
        }, s.prototype.preloadAutoWidthImages = function(e) {
            var i, n, s, r;
            i = 0, n = this, e.each(function(a, o) {
                s = t(o), (r = new Image).onload = function() {
                    i++, s.attr("src", r.src), s.css("opacity", 1), i >= e.length && (n.state.imagesLoaded = !0, n.initialize())
                }, r.src = s.attr("src") || s.attr("data-src") || s.attr("data-src-retina")
            })
        }, s.prototype.destroy = function() {
            this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var n in this._plugins) this._plugins[n].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
                return !1
            })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
        }, s.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : i > t;
                case ">":
                    return n ? i > t : t > i;
                case ">=":
                    return n ? i >= t : t >= i;
                case "<=":
                    return n ? t >= i : i >= t
            }
        }, s.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, s.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, s.prototype.trigger = function(e, i, n) {
            var s = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                r = t.camelCase(t.grep(["on", e, n], function(t) {
                    return t
                }).join("-").toLowerCase()),
                a = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, s, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(a)
            }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].apply(this, a)), a
        }, s.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, s.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, s.prototype.browserSupport = function() {
            if (this.support3d = d(), this.support3d) {
                this.transformVendor = l();
                var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                this.transitionEndVendor = t[o()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
            }
            this.state.orientation = e.orientation
        }, t.fn.owlCarousel = function(e) {
            return this.each(function() {
                t(this).data("owlCarousel") || t(this).data("owlCarousel", new s(this, e))
            })
        }, t.fn.owlCarousel.Constructor = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e) {
        var i = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, s = i.center && -1 * n || 0, r = (e.property && e.property.value || this._core.current()) + s, a = this._core.clones().length, o = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); s++ < n;) this.load(a / 2 + this._core.relative(r)), a && t.each(this._core.clones(this._core.relative(r++)), o)
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            lazyLoad: !1
        }, i.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                s = n && n.find(".owl-lazy");
            !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, n) {
                var s, r = t(n),
                    a = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
                this._core.trigger("load", {
                    element: r,
                    url: a
                }, "lazy"), r.is("img") ? r.one("load.owl.lazy", t.proxy(function() {
                    r.css("opacity", 1), this._core.trigger("loaded", {
                        element: r,
                        url: a
                    }, "lazy")
                }, this)).attr("src", a) : (s = new Image, s.onload = t.proxy(function() {
                    r.css({
                        "background-image": "url(" + a + ")",
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: r,
                        url: a
                    }, "lazy")
                }, this), s.src = a)
            }, this)), this._loaded.push(n.get(0)))
        }, i.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        var e = function(i) {
            this._core = i, this._handlers = {
                "initialized.owl.carousel": t.proxy(function() {
                    this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, e.prototype.update = function() {
            this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
        }, e.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i) {
        var n = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
                "resize.owl.carousel": t.proxy(function(t) {
                    this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
                }, this),
                "refresh.owl.carousel changed.owl.carousel": t.proxy(function() {
                    this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }, this)
            }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        n.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, n.prototype.fetch = function(t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                s = t.attr("data-width") || this._core.settings.videoWidth,
                r = t.attr("data-height") || this._core.settings.videoHeight,
                a = t.attr("href");
            if (!a) throw new Error("Missing video URL.");
            if ((n = a.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
            else {
                if (!(n[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                i = "vimeo"
            }
            n = n[6], this._videos[a] = {
                type: i,
                id: n,
                width: s,
                height: r
            }, e.attr("data-video", a), this.thumbnail(t, this._videos[a])
        }, n.prototype.thumbnail = function(e, i) {
            var n, s, r, a = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                o = e.find("img"),
                l = "src",
                d = "",
                c = this._core.settings,
                h = function(t) {
                    s = '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? '<div class="owl-video-tn ' + d + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(s)
                };
            return e.wrap('<div class="owl-video-wrapper"' + a + "></div>"), this._core.settings.lazyLoad && (l = "data-src", d = "owl-lazy"), o.length ? (h(o.attr(l)), o.remove(), !1) : void("youtube" === i.type ? (r = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", h(r)) : "vimeo" === i.type && t.ajax({
                type: "GET",
                url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    r = t[0].thumbnail_large, h(r)
                }
            }))
        }, n.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
        }, n.prototype.play = function(e) {
            this._core.trigger("play", null, "video"), this._playing && this.stop();
            var i, n, s = t(e.target || e.srcElement),
                r = s.closest("." + this._core.settings.itemClass),
                a = this._videos[r.attr("data-video")],
                o = a.width || "100%",
                l = a.height || this._core.$stage.height();
            "youtube" === a.type ? i = '<iframe width="' + o + '" height="' + l + '" src="http://www.youtube.com/embed/' + a.id + "?autoplay=1&v=" + a.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === a.type && (i = '<iframe src="http://player.vimeo.com/video/' + a.id + '?autoplay=1" width="' + o + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), r.addClass("owl-video-playing"), this._playing = r, n = t('<div style="height:' + l + "px; width:" + o + 'px" class="owl-video-frame">' + i + "</div>"), s.after(n)
        }, n.prototype.isInFullScreen = function() {
            var n = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return n && t(n).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(n && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
        }, n.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = n
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    this.swapping = "translated" == t.type
                }, this),
                "translate.owl.carousel": t.proxy(function() {
                    this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        s.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, s.prototype.swap = function() {
            if (1 === this.core.settings.items && this.core.support3d) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    s = this.core.$stage.children().eq(this.next),
                    r = this.core.settings.animateIn,
                    a = this.core.settings.animateOut;
                this.core.current() !== this.previous && (a && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), r && s.addClass("animated owl-animated-in").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
            }
        }, s.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i) {
        var n = function(e) {
            this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = {
                "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                    this.autoplay()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, i) {
                    this.play(e, i)
                }, this),
                "stop.owl.autoplay": t.proxy(function() {
                    this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this.core.settings.autoplayHoverPause && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this.core.settings.autoplayHoverPause && this.autoplay()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        n.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, n.prototype.autoplay = function() {
            this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
                this.play()
            }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
        }, n.prototype.play = function() {
            return !0 === i.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
        }, n.prototype.stop = function() {
            e.clearInterval(this.interval)
        }, n.prototype.pause = function() {
            e.clearInterval(this.interval)
        }, n.prototype.destroy = function() {
            var t, i;
            e.clearInterval(this.interval);
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        "use strict";
        var e = function(i) {
            this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot"))
                }, this),
                "add.owl.carousel": t.proxy(function(e) {
                    this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot"))
                }, this),
                "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                    this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "change.owl.carousel": t.proxy(function(t) {
                    if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var e = this._core.current(),
                            i = this._core.maximum(),
                            n = this._core.minimum();
                        t.data = t.property.value > i ? e >= i ? n : i : t.property.value < n ? i : t.property.value
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    "position" == t.property.name && this.draw()
                }, this),
                "refreshed.owl.carousel": t.proxy(function() {
                    this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
                }, this)
            }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navRewind: !0,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
            controlsClass: "owl-controls"
        }, e.prototype.initialize = function() {
            var e, i, n = this._core.settings;
            n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), n.navContainer && n.dotsContainer || (this._controls.$container = t("<div>").addClass(n.controlsClass).appendTo(this.$element)), this._controls.$indicators = n.dotsContainer ? t(n.dotsContainer) : t("<div>").hide().addClass(n.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
                var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(i, n.dotsSpeed)
            }, this)), e = n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + n.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(n.navClass[0]).html(n.navText[0]).hide().prependTo(e).on("click", t.proxy(function() {
                this.prev(n.navSpeed)
            }, this)), this._controls.$next.addClass(n.navClass[1]).html(n.navText[1]).hide().appendTo(e).on("click", t.proxy(function() {
                this.next(n.navSpeed)
            }, this));
            for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
        }, e.prototype.destroy = function() {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, e.prototype.update = function() {
            var t, e, i = this._core.settings,
                n = this._core.clones().length / 2,
                s = n + this._core.items().length,
                r = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;
            if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy)
                for (this._pages = [], t = n, e = 0, 0; s > t; t++)(e >= r || 0 === e) && (this._pages.push({
                    start: t - n,
                    end: t - n + r - 1
                }), e = 0, 0), e += this._core.mergers(this._core.relative(t))
        }, e.prototype.draw = function() {
            var e, i, n = "",
                s = this._core.settings,
                r = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!s.nav || s.loop || s.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= r), this._controls.$next.toggleClass("disabled", r >= this._core.maximum())), this._controls.$previous.toggle(s.nav), this._controls.$next.toggle(s.nav), s.dots) {
                if (e = this._pages.length - this._controls.$indicators.children().length, s.dotData && 0 !== e) {
                    for (i = 0; i < this._controls.$indicators.children().length; i++) n += this._templates[this._core.relative(i)];
                    this._controls.$indicators.html(n)
                } else e > 0 ? (n = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(n)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
            }
            this._controls.$indicators.toggle(s.dots)
        }, e.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
            }
        }, e.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, function(t) {
                return t.start <= e && t.end >= e
            }).pop()
        }, e.prototype.getPosition = function(e) {
            var i, n, s = this._core.settings;
            return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
        }, e.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, e.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, e.prototype.to = function(e, i, n) {
            var s;
            n ? t.proxy(this._overrides.to, this._core)(e, i) : (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i))
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function(t, e) {
        "use strict";
        var i = function(n) {
            this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function() {
                    "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    this._hashes[i] = e.content
                }, this)
            }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
                var t = e.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    n = this._hashes[t] && i.index(this._hashes[t]) || 0;
                return !!t && void this._core.to(n, !1, !0)
            }, this))
        };
        i.Defaults = {
            URLhashListener: !1
        }, i.prototype.destroy = function() {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
    }(window.Zepto || window.jQuery, window, document),
    function() {
        var t = function(e) {
            var i = new t.Builder;
            return i.pipeline.add(t.trimmer, t.stopWordFilter, t.stemmer), i.searchPipeline.add(t.stemmer), e.call(i, i), i.build()
        };
        t.version = "2.1.4", t.utils = {}, t.utils.warn = function(t) {
            return function(e) {
                t.console && console.warn && console.warn(e)
            }
        }(this), t.utils.asString = function(t) {
            return void 0 === t || null === t ? "" : t.toString()
        }, t.FieldRef = function(t, e, i) {
            this.docRef = t, this.fieldName = e, this._stringValue = i
        }, t.FieldRef.joiner = "/", t.FieldRef.fromString = function(e) {
            var i = e.indexOf(t.FieldRef.joiner);
            if (-1 === i) throw "malformed field ref string";
            var n = e.slice(0, i),
                s = e.slice(i + 1);
            return new t.FieldRef(s, n, e)
        }, t.FieldRef.prototype.toString = function() {
            return void 0 == this._stringValue && (this._stringValue = this.fieldName + t.FieldRef.joiner + this.docRef), this._stringValue
        }, t.idf = function(t, e) {
            var i = 0;
            for (var n in t) "_index" != n && (i += Object.keys(t[n]).length);
            var s = (e - i + .5) / (i + .5);
            return Math.log(1 + Math.abs(s))
        }, t.Token = function(t, e) {
            this.str = t || "", this.metadata = e || {}
        }, t.Token.prototype.toString = function() {
            return this.str
        }, t.Token.prototype.update = function(t) {
            return this.str = t(this.str, this.metadata), this
        }, t.Token.prototype.clone = function(e) {
            return e = e || function(t) {
                return t
            }, new t.Token(e(this.str, this.metadata), this.metadata)
        }, t.tokenizer = function(e) {
            if (null == e || void 0 == e) return [];
            if (Array.isArray(e)) return e.map(function(e) {
                return new t.Token(t.utils.asString(e).toLowerCase())
            });
            for (var i = e.toString().trim().toLowerCase(), n = i.length, s = [], r = 0, a = 0; r <= n; r++) {
                var o = r - a;
                (i.charAt(r).match(t.tokenizer.separator) || r == n) && (o > 0 && s.push(new t.Token(i.slice(a, r), {
                    position: [a, o],
                    index: s.length
                })), a = r + 1)
            }
            return s
        }, t.tokenizer.separator = /[\s\-]+/, t.Pipeline = function() {
            this._stack = []
        }, t.Pipeline.registeredFunctions = Object.create(null), t.Pipeline.registerFunction = function(e, i) {
            i in this.registeredFunctions && t.utils.warn("Overwriting existing registered function: " + i), e.label = i, t.Pipeline.registeredFunctions[e.label] = e
        }, t.Pipeline.warnIfFunctionNotRegistered = function(e) {
            e.label && e.label in this.registeredFunctions || t.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e)
        }, t.Pipeline.load = function(e) {
            var i = new t.Pipeline;
            return e.forEach(function(e) {
                var n = t.Pipeline.registeredFunctions[e];
                if (!n) throw new Error("Cannot load unregistered function: " + e);
                i.add(n)
            }), i
        }, t.Pipeline.prototype.add = function() {
            Array.prototype.slice.call(arguments).forEach(function(e) {
                t.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e)
            }, this)
        }, t.Pipeline.prototype.after = function(e, i) {
            t.Pipeline.warnIfFunctionNotRegistered(i);
            var n = this._stack.indexOf(e);
            if (-1 == n) throw new Error("Cannot find existingFn");
            n += 1, this._stack.splice(n, 0, i)
        }, t.Pipeline.prototype.before = function(e, i) {
            t.Pipeline.warnIfFunctionNotRegistered(i);
            var n = this._stack.indexOf(e);
            if (-1 == n) throw new Error("Cannot find existingFn");
            this._stack.splice(n, 0, i)
        }, t.Pipeline.prototype.remove = function(t) {
            var e = this._stack.indexOf(t); - 1 != e && this._stack.splice(e, 1)
        }, t.Pipeline.prototype.run = function(t) {
            for (var e = this._stack.length, i = 0; i < e; i++) {
                var n = this._stack[i];
                t = t.reduce(function(e, i, s) {
                    var r = n(i, s, t);
                    return void 0 === r || "" === r ? e : e.concat(r)
                }, [])
            }
            return t
        }, t.Pipeline.prototype.runString = function(e) {
            var i = new t.Token(e);
            return this.run([i]).map(function(t) {
                return t.toString()
            })
        }, t.Pipeline.prototype.reset = function() {
            this._stack = []
        }, t.Pipeline.prototype.toJSON = function() {
            return this._stack.map(function(e) {
                return t.Pipeline.warnIfFunctionNotRegistered(e), e.label
            })
        }, t.Vector = function(t) {
            this._magnitude = 0, this.elements = t || []
        }, t.Vector.prototype.positionForIndex = function(t) {
            if (0 == this.elements.length) return 0;
            for (var e = 0, i = this.elements.length / 2, n = i - e, s = Math.floor(n / 2), r = this.elements[2 * s]; n > 1 && (r < t && (e = s), r > t && (i = s), r != t);) n = i - e, s = e + Math.floor(n / 2), r = this.elements[2 * s];
            return r == t ? 2 * s : r > t ? 2 * s : r < t ? 2 * (s + 1) : void 0
        }, t.Vector.prototype.insert = function(t, e) {
            this.upsert(t, e, function() {
                throw "duplicate index"
            })
        }, t.Vector.prototype.upsert = function(t, e, i) {
            this._magnitude = 0;
            var n = this.positionForIndex(t);
            this.elements[n] == t ? this.elements[n + 1] = i(this.elements[n + 1], e) : this.elements.splice(n, 0, t, e)
        }, t.Vector.prototype.magnitude = function() {
            if (this._magnitude) return this._magnitude;
            for (var t = 0, e = this.elements.length, i = 1; i < e; i += 2) {
                var n = this.elements[i];
                t += n * n
            }
            return this._magnitude = Math.sqrt(t)
        }, t.Vector.prototype.dot = function(t) {
            for (var e = 0, i = this.elements, n = t.elements, s = i.length, r = n.length, a = 0, o = 0, l = 0, d = 0; l < s && d < r;)(a = i[l]) < (o = n[d]) ? l += 2 : a > o ? d += 2 : a == o && (e += i[l + 1] * n[d + 1], l += 2, d += 2);
            return e
        }, t.Vector.prototype.similarity = function(t) {
            return this.dot(t) / (this.magnitude() * t.magnitude())
        }, t.Vector.prototype.toArray = function() {
            for (var t = new Array(this.elements.length / 2), e = 1, i = 0; e < this.elements.length; e += 2, i++) t[i] = this.elements[e];
            return t
        }, t.Vector.prototype.toJSON = function() {
            return this.elements
        }, t.stemmer = function() {
            var t = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                e = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                i = "[aeiouy]",
                n = "[^aeiou][^aeiouy]*",
                s = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),
                r = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),
                a = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),
                o = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),
                l = /^(.+?)(ss|i)es$/,
                d = /^(.+?)([^s])s$/,
                c = /^(.+?)eed$/,
                h = /^(.+?)(ed|ing)$/,
                u = /.$/,
                p = /(at|bl|iz)$/,
                f = new RegExp("([^aeiouylsz])\\1$"),
                g = new RegExp("^" + n + i + "[^aeiouwxy]$"),
                v = /^(.+?[^aeiou])y$/,
                m = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
                b = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                y = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
                w = /^(.+?)(s|t)(ion)$/,
                x = /^(.+?)e$/,
                C = /ll$/,
                S = new RegExp("^" + n + i + "[^aeiouwxy]$"),
                A = function(i) {
                    var n, A, T, $, _, I, E;
                    if (i.length < 3) return i;
                    if ("y" == (T = i.substr(0, 1)) && (i = T.toUpperCase() + i.substr(1)), $ = l, _ = d, $.test(i) ? i = i.replace($, "$1$2") : _.test(i) && (i = i.replace(_, "$1$2")), $ = c, _ = h, $.test(i)) {
                        var k = $.exec(i);
                        ($ = s).test(k[1]) && ($ = u, i = i.replace($, ""))
                    } else _.test(i) && (n = (k = _.exec(i))[1], (_ = o).test(n) && (i = n, I = f, E = g, (_ = p).test(i) ? i += "e" : I.test(i) ? ($ = u, i = i.replace($, "")) : E.test(i) && (i += "e")));
                    return ($ = v).test(i) && (i = (n = (k = $.exec(i))[1]) + "i"), ($ = m).test(i) && (n = (k = $.exec(i))[1], A = k[2], ($ = s).test(n) && (i = n + t[A])), ($ = b).test(i) && (n = (k = $.exec(i))[1], A = k[2], ($ = s).test(n) && (i = n + e[A])), $ = y, _ = w, $.test(i) ? (n = (k = $.exec(i))[1], ($ = r).test(n) && (i = n)) : _.test(i) && (n = (k = _.exec(i))[1] + k[2], (_ = r).test(n) && (i = n)), ($ = x).test(i) && (n = (k = $.exec(i))[1], _ = a, I = S, (($ = r).test(n) || _.test(n) && !I.test(n)) && (i = n)), $ = C, _ = r, $.test(i) && _.test(i) && ($ = u, i = i.replace($, "")), "y" == T && (i = T.toLowerCase() + i.substr(1)), i
                };
            return function(t) {
                return t.update(A)
            }
        }(), t.Pipeline.registerFunction(t.stemmer, "stemmer"), t.generateStopWordFilter = function(t) {
            var e = t.reduce(function(t, e) {
                return t[e] = e, t
            }, {});
            return function(t) {
                if (t && e[t.toString()] !== t.toString()) return t
            }
        }, t.stopWordFilter = t.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), t.Pipeline.registerFunction(t.stopWordFilter, "stopWordFilter"), t.trimmer = function(t) {
            return t.update(function(t) {
                return t.replace(/^\W+/, "").replace(/\W+$/, "")
            })
        }, t.Pipeline.registerFunction(t.trimmer, "trimmer"), t.TokenSet = function() {
            this.final = !1, this.edges = {}, this.id = t.TokenSet._nextId, t.TokenSet._nextId += 1
        }, t.TokenSet._nextId = 1, t.TokenSet.fromArray = function(e) {
            for (var i = new t.TokenSet.Builder, n = 0, s = e.length; n < s; n++) i.insert(e[n]);
            return i.finish(), i.root
        }, t.TokenSet.fromClause = function(e) {
            return "editDistance" in e ? t.TokenSet.fromFuzzyString(e.term, e.editDistance) : t.TokenSet.fromString(e.term)
        }, t.TokenSet.fromFuzzyString = function(e, i) {
            for (var n = new t.TokenSet, s = [{
                node: n,
                editsRemaining: i,
                str: e
            }]; s.length;) {
                var r = s.pop();
                if (r.str.length > 0) {
                    var a;
                    (l = r.str.charAt(0)) in r.node.edges ? a = r.node.edges[l] : (a = new t.TokenSet, r.node.edges[l] = a), 1 == r.str.length ? a.final = !0 : s.push({
                        node: a,
                        editsRemaining: r.editsRemaining,
                        str: r.str.slice(1)
                    })
                }
                if (r.editsRemaining > 0 && r.str.length > 1) {
                    var o, l = r.str.charAt(1);
                    l in r.node.edges ? o = r.node.edges[l] : (o = new t.TokenSet, r.node.edges[l] = o), r.str.length <= 2 ? o.final = !0 : s.push({
                        node: o,
                        editsRemaining: r.editsRemaining - 1,
                        str: r.str.slice(2)
                    })
                }
                if (r.editsRemaining > 0 && 1 == r.str.length && (r.node.final = !0), r.editsRemaining > 0 && r.str.length >= 1) {
                    if ("*" in r.node.edges) d = r.node.edges["*"];
                    else {
                        var d = new t.TokenSet;
                        r.node.edges["*"] = d
                    }
                    1 == r.str.length ? d.final = !0 : s.push({
                        node: d,
                        editsRemaining: r.editsRemaining - 1,
                        str: r.str.slice(1)
                    })
                }
                if (r.editsRemaining > 0) {
                    if ("*" in r.node.edges) c = r.node.edges["*"];
                    else {
                        var c = new t.TokenSet;
                        r.node.edges["*"] = c
                    }
                    0 == r.str.length ? c.final = !0 : s.push({
                        node: c,
                        editsRemaining: r.editsRemaining - 1,
                        str: r.str
                    })
                }
                if (r.editsRemaining > 0 && r.str.length > 1) {
                    var h, u = r.str.charAt(0),
                        p = r.str.charAt(1);
                    p in r.node.edges ? h = r.node.edges[p] : (h = new t.TokenSet, r.node.edges[p] = h), 1 == r.str.length ? h.final = !0 : s.push({
                        node: h,
                        editsRemaining: r.editsRemaining - 1,
                        str: u + r.str.slice(2)
                    })
                }
            }
            return n
        }, t.TokenSet.fromString = function(e) {
            for (var i = new t.TokenSet, n = i, s = !1, r = 0, a = e.length; r < a; r++) {
                var o = e[r],
                    l = r == a - 1;
                if ("*" == o) s = !0, i.edges[o] = i, i.final = l;
                else {
                    var d = new t.TokenSet;
                    d.final = l, i.edges[o] = d, i = d, s && (i.edges["*"] = n)
                }
            }
            return n
        }, t.TokenSet.prototype.toArray = function() {
            for (var t = [], e = [{
                prefix: "",
                node: this
            }]; e.length;) {
                var i = e.pop(),
                    n = Object.keys(i.node.edges),
                    s = n.length;
                i.node.final && t.push(i.prefix);
                for (var r = 0; r < s; r++) {
                    var a = n[r];
                    e.push({
                        prefix: i.prefix.concat(a),
                        node: i.node.edges[a]
                    })
                }
            }
            return t
        }, t.TokenSet.prototype.toString = function() {
            if (this._str) return this._str;
            for (var t = this.final ? "1" : "0", e = Object.keys(this.edges).sort(), i = e.length, n = 0; n < i; n++) {
                var s = e[n];
                t = t + s + this.edges[s].id
            }
            return t
        }, t.TokenSet.prototype.intersect = function(e) {
            for (var i = new t.TokenSet, n = void 0, s = [{
                qNode: e,
                output: i,
                node: this
            }]; s.length;) {
                n = s.pop();
                for (var r = Object.keys(n.qNode.edges), a = r.length, o = Object.keys(n.node.edges), l = o.length, d = 0; d < a; d++)
                    for (var c = r[d], h = 0; h < l; h++) {
                        var u = o[h];
                        if (u == c || "*" == c) {
                            var p = n.node.edges[u],
                                f = n.qNode.edges[c],
                                g = p.final && f.final,
                                v = void 0;
                            u in n.output.edges ? (v = n.output.edges[u]).final = v.final || g : ((v = new t.TokenSet).final = g, n.output.edges[u] = v), s.push({
                                qNode: f,
                                output: v,
                                node: p
                            })
                        }
                    }
            }
            return i
        }, t.TokenSet.Builder = function() {
            this.previousWord = "", this.root = new t.TokenSet, this.uncheckedNodes = [], this.minimizedNodes = {}
        }, t.TokenSet.Builder.prototype.insert = function(e) {
            var i, n = 0;
            if (e < this.previousWord) throw new Error("Out of order word insertion");
            for (s = 0; s < e.length && s < this.previousWord.length && e[s] == this.previousWord[s]; s++) n++;
            this.minimize(n), i = 0 == this.uncheckedNodes.length ? this.root : this.uncheckedNodes[this.uncheckedNodes.length - 1].child;
            for (var s = n; s < e.length; s++) {
                var r = new t.TokenSet,
                    a = e[s];
                i.edges[a] = r, this.uncheckedNodes.push({
                    parent: i,
                    char: a,
                    child: r
                }), i = r
            }
            i.final = !0, this.previousWord = e
        }, t.TokenSet.Builder.prototype.finish = function() {
            this.minimize(0)
        }, t.TokenSet.Builder.prototype.minimize = function(t) {
            for (var e = this.uncheckedNodes.length - 1; e >= t; e--) {
                var i = this.uncheckedNodes[e],
                    n = i.child.toString();
                n in this.minimizedNodes ? i.parent.edges[i.char] = this.minimizedNodes[n] : (i.child._str = n, this.minimizedNodes[n] = i.child), this.uncheckedNodes.pop()
            }
        }, t.Index = function(t) {
            this.invertedIndex = t.invertedIndex, this.fieldVectors = t.fieldVectors, this.tokenSet = t.tokenSet, this.fields = t.fields, this.pipeline = t.pipeline
        }, t.Index.prototype.search = function(e) {
            return this.query(function(i) {
                new t.QueryParser(e, i).parse()
            })
        }, t.Index.prototype.query = function(e) {
            var i = new t.Query(this.fields),
                n = Object.create(null),
                s = Object.create(null),
                r = Object.create(null);
            e.call(i, i);
            for (E = 0; E < i.clauses.length; E++) {
                var a = i.clauses[E],
                    o = null;
                o = a.usePipeline ? this.pipeline.runString(a.term) : [a.term];
                for (var l = 0; l < o.length; l++) {
                    var d = o[l];
                    a.term = d;
                    for (var c = t.TokenSet.fromClause(a), h = this.tokenSet.intersect(c).toArray(), u = 0; u < h.length; u++)
                        for (var p = h[u], f = this.invertedIndex[p], g = f._index, v = 0; v < a.fields.length; v++) {
                            var m = a.fields[v],
                                b = f[m],
                                y = Object.keys(b),
                                w = p + "/" + m;
                            if (void 0 === s[m] && (s[m] = new t.Vector), s[m].upsert(g, 1 * a.boost, function(t, e) {
                                    return t + e
                                }), !r[w]) {
                                for (var x = 0; x < y.length; x++) {
                                    var C, S = y[x],
                                        A = new t.FieldRef(S, m),
                                        T = b[S];
                                    void 0 === (C = n[A]) ? n[A] = new t.MatchData(p, m, T) : C.add(p, d, T)
                                }
                                r[w] = !0
                            }
                        }
                }
            }
            for (var $ = Object.keys(n), _ = [], I = Object.create(null), E = 0; E < $.length; E++) {
                var k, P = t.FieldRef.fromString($[E]),
                    V = P.docRef,
                    D = this.fieldVectors[P],
                    L = s[P.fieldName].similarity(D);
                if (void 0 !== (k = I[V])) k.score += L, k.matchData.combine(n[P]);
                else {
                    var R = {
                        ref: V,
                        score: L,
                        matchData: n[P]
                    };
                    I[V] = R, _.push(R)
                }
            }
            return _.sort(function(t, e) {
                return e.score - t.score
            })
        }, t.Index.prototype.toJSON = function() {
            var e = Object.keys(this.invertedIndex).sort().map(function(t) {
                    return [t, this.invertedIndex[t]]
                }, this),
                i = Object.keys(this.fieldVectors).map(function(t) {
                    return [t, this.fieldVectors[t].toJSON()]
                }, this);
            return {
                version: t.version,
                fields: this.fields,
                fieldVectors: i,
                invertedIndex: e,
                pipeline: this.pipeline.toJSON()
            }
        }, t.Index.load = function(e) {
            var i = {},
                n = {},
                s = e.fieldVectors,
                r = {},
                a = e.invertedIndex,
                o = new t.TokenSet.Builder,
                l = t.Pipeline.load(e.pipeline);
            e.version != t.version && t.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + t.version + "' does not match serialized index '" + e.version + "'");
            for (h = 0; h < s.length; h++) {
                var d = (u = s[h])[0],
                    c = u[1];
                n[d] = new t.Vector(c)
            }
            for (var h = 0; h < a.length; h++) {
                var u = a[h],
                    p = u[0],
                    f = u[1];
                o.insert(p), r[p] = f
            }
            return o.finish(), i.fields = e.fields, i.fieldVectors = n, i.invertedIndex = r, i.tokenSet = o.root, i.pipeline = l, new t.Index(i)
        }, t.Builder = function() {
            this._ref = "id", this._fields = [], this.invertedIndex = Object.create(null), this.fieldTermFrequencies = {}, this.fieldLengths = {}, this.tokenizer = t.tokenizer, this.pipeline = new t.Pipeline, this.searchPipeline = new t.Pipeline, this.documentCount = 0, this._b = .75, this._k1 = 1.2, this.termIndex = 0, this.metadataWhitelist = []
        }, t.Builder.prototype.ref = function(t) {
            this._ref = t
        }, t.Builder.prototype.field = function(t) {
            this._fields.push(t)
        }, t.Builder.prototype.b = function(t) {
            this._b = t < 0 ? 0 : t > 1 ? 1 : t
        }, t.Builder.prototype.k1 = function(t) {
            this._k1 = t
        }, t.Builder.prototype.add = function(e) {
            var i = e[this._ref];
            this.documentCount += 1;
            for (var n = 0; n < this._fields.length; n++) {
                var s = this._fields[n],
                    r = e[s],
                    a = this.tokenizer(r),
                    o = this.pipeline.run(a),
                    l = new t.FieldRef(i, s),
                    d = Object.create(null);
                this.fieldTermFrequencies[l] = d, this.fieldLengths[l] = 0, this.fieldLengths[l] += o.length;
                for (var c = 0; c < o.length; c++) {
                    var h = o[c];
                    if (void 0 == d[h] && (d[h] = 0), d[h] += 1, void 0 == this.invertedIndex[h]) {
                        var u = Object.create(null);
                        u._index = this.termIndex, this.termIndex += 1;
                        for (var p = 0; p < this._fields.length; p++) u[this._fields[p]] = Object.create(null);
                        this.invertedIndex[h] = u
                    }
                    void 0 == this.invertedIndex[h][s][i] && (this.invertedIndex[h][s][i] = Object.create(null));
                    for (var f = 0; f < this.metadataWhitelist.length; f++) {
                        var g = this.metadataWhitelist[f],
                            v = h.metadata[g];
                        void 0 == this.invertedIndex[h][s][i][g] && (this.invertedIndex[h][s][i][g] = []), this.invertedIndex[h][s][i][g].push(v)
                    }
                }
            }
        }, t.Builder.prototype.calculateAverageFieldLengths = function() {
            for (var e = Object.keys(this.fieldLengths), i = e.length, n = {}, s = {}, r = 0; r < i; r++) {
                var a = t.FieldRef.fromString(e[r]);
                s[o = a.fieldName] || (s[o] = 0), s[o] += 1, n[o] || (n[o] = 0), n[o] += this.fieldLengths[a]
            }
            for (r = 0; r < this._fields.length; r++) {
                var o = this._fields[r];
                n[o] = n[o] / s[o]
            }
            this.averageFieldLength = n
        }, t.Builder.prototype.createFieldVectors = function() {
            for (var e = {}, i = Object.keys(this.fieldTermFrequencies), n = i.length, s = Object.create(null), r = 0; r < n; r++) {
                for (var a = t.FieldRef.fromString(i[r]), o = a.fieldName, l = this.fieldLengths[a], d = new t.Vector, c = this.fieldTermFrequencies[a], h = Object.keys(c), u = h.length, p = 0; p < u; p++) {
                    var f, g, v, m = h[p],
                        b = c[m],
                        y = this.invertedIndex[m]._index;
                    void 0 === s[m] ? (f = t.idf(this.invertedIndex[m], this.documentCount), s[m] = f) : f = s[m], g = f * ((this._k1 + 1) * b) / (this._k1 * (1 - this._b + this._b * (l / this.averageFieldLength[o])) + b), v = Math.round(1e3 * g) / 1e3, d.insert(y, v)
                }
                e[a] = d
            }
            this.fieldVectors = e
        }, t.Builder.prototype.createTokenSet = function() {
            this.tokenSet = t.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())
        }, t.Builder.prototype.build = function() {
            return this.calculateAverageFieldLengths(), this.createFieldVectors(), this.createTokenSet(), new t.Index({
                invertedIndex: this.invertedIndex,
                fieldVectors: this.fieldVectors,
                tokenSet: this.tokenSet,
                fields: this._fields,
                pipeline: this.searchPipeline
            })
        }, t.Builder.prototype.use = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            e.unshift(this), t.apply(this, e)
        }, t.MatchData = function(t, e, i) {
            for (var n = Object.create(null), s = Object.keys(i), r = 0; r < s.length; r++) {
                var a = s[r];
                n[a] = i[a].slice()
            }
            this.metadata = Object.create(null), this.metadata[t] = Object.create(null), this.metadata[t][e] = n
        }, t.MatchData.prototype.combine = function(t) {
            for (var e = Object.keys(t.metadata), i = 0; i < e.length; i++) {
                var n = e[i],
                    s = Object.keys(t.metadata[n]);
                void 0 == this.metadata[n] && (this.metadata[n] = Object.create(null));
                for (var r = 0; r < s.length; r++) {
                    var a = s[r],
                        o = Object.keys(t.metadata[n][a]);
                    void 0 == this.metadata[n][a] && (this.metadata[n][a] = Object.create(null));
                    for (var l = 0; l < o.length; l++) {
                        var d = o[l];
                        void 0 == this.metadata[n][a][d] ? this.metadata[n][a][d] = t.metadata[n][a][d] : this.metadata[n][a][d] = this.metadata[n][a][d].concat(t.metadata[n][a][d])
                    }
                }
            }
        }, t.MatchData.prototype.add = function(t, e, i) {
            if (!(t in this.metadata)) return this.metadata[t] = Object.create(null), void(this.metadata[t][e] = i);
            if (e in this.metadata[t])
                for (var n = Object.keys(i), s = 0; s < n.length; s++) {
                    var r = n[s];
                    r in this.metadata[t][e] ? this.metadata[t][e][r] = this.metadata[t][e][r].concat(i[r]) : this.metadata[t][e][r] = i[r]
                } else this.metadata[t][e] = i
        }, t.Query = function(t) {
            this.clauses = [], this.allFields = t
        }, t.Query.wildcard = new String("*"), t.Query.wildcard.NONE = 0, t.Query.wildcard.LEADING = 1, t.Query.wildcard.TRAILING = 2, t.Query.prototype.clause = function(e) {
            return "fields" in e || (e.fields = this.allFields), "boost" in e || (e.boost = 1), "usePipeline" in e || (e.usePipeline = !0), "wildcard" in e || (e.wildcard = t.Query.wildcard.NONE), e.wildcard & t.Query.wildcard.LEADING && e.term.charAt(0) != t.Query.wildcard && (e.term = "*" + e.term), e.wildcard & t.Query.wildcard.TRAILING && e.term.slice(-1) != t.Query.wildcard && (e.term = e.term + "*"), this.clauses.push(e), this
        }, t.Query.prototype.term = function(t, e) {
            var i = e || {};
            return i.term = t, this.clause(i), this
        }, t.QueryParseError = function(t, e, i) {
            this.name = "QueryParseError", this.message = t, this.start = e, this.end = i
        }, t.QueryParseError.prototype = new Error, t.QueryLexer = function(t) {
            this.lexemes = [], this.str = t, this.length = t.length, this.pos = 0, this.start = 0, this.escapeCharPositions = []
        }, t.QueryLexer.prototype.run = function() {
            for (var e = t.QueryLexer.lexText; e;) e = e(this)
        }, t.QueryLexer.prototype.sliceString = function() {
            for (var t = [], e = this.start, i = this.pos, n = 0; n < this.escapeCharPositions.length; n++) i = this.escapeCharPositions[n], t.push(this.str.slice(e, i)), e = i + 1;
            return t.push(this.str.slice(e, this.pos)), this.escapeCharPositions.length = 0, t.join("")
        }, t.QueryLexer.prototype.emit = function(t) {
            this.lexemes.push({
                type: t,
                str: this.sliceString(),
                start: this.start,
                end: this.pos
            }), this.start = this.pos
        }, t.QueryLexer.prototype.escapeCharacter = function() {
            this.escapeCharPositions.push(this.pos - 1), this.pos += 1
        }, t.QueryLexer.prototype.next = function() {
            if (this.pos >= this.length) return t.QueryLexer.EOS;
            var e = this.str.charAt(this.pos);
            return this.pos += 1, e
        }, t.QueryLexer.prototype.width = function() {
            return this.pos - this.start
        }, t.QueryLexer.prototype.ignore = function() {
            this.start == this.pos && (this.pos += 1), this.start = this.pos
        }, t.QueryLexer.prototype.backup = function() {
            this.pos -= 1
        }, t.QueryLexer.prototype.acceptDigitRun = function() {
            var e, i;
            do {
                i = (e = this.next()).charCodeAt(0)
            } while (i > 47 && i < 58);
            e != t.QueryLexer.EOS && this.backup()
        }, t.QueryLexer.prototype.more = function() {
            return this.pos < this.length
        }, t.QueryLexer.EOS = "EOS", t.QueryLexer.FIELD = "FIELD", t.QueryLexer.TERM = "TERM", t.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE", t.QueryLexer.BOOST = "BOOST", t.QueryLexer.lexField = function(e) {
            return e.backup(), e.emit(t.QueryLexer.FIELD), e.ignore(), t.QueryLexer.lexText
        }, t.QueryLexer.lexTerm = function(e) {
            if (e.width() > 1 && (e.backup(), e.emit(t.QueryLexer.TERM)), e.ignore(), e.more()) return t.QueryLexer.lexText
        }, t.QueryLexer.lexEditDistance = function(e) {
            return e.ignore(), e.acceptDigitRun(), e.emit(t.QueryLexer.EDIT_DISTANCE), t.QueryLexer.lexText
        }, t.QueryLexer.lexBoost = function(e) {
            return e.ignore(), e.acceptDigitRun(), e.emit(t.QueryLexer.BOOST), t.QueryLexer.lexText
        }, t.QueryLexer.lexEOS = function(e) {
            e.width() > 0 && e.emit(t.QueryLexer.TERM)
        }, t.QueryLexer.termSeparator = t.tokenizer.separator, t.QueryLexer.lexText = function(e) {
            for (;;) {
                var i = e.next();
                if (i == t.QueryLexer.EOS) return t.QueryLexer.lexEOS;
                if (92 != i.charCodeAt(0)) {
                    if (":" == i) return t.QueryLexer.lexField;
                    if ("~" == i) return e.backup(), e.width() > 0 && e.emit(t.QueryLexer.TERM), t.QueryLexer.lexEditDistance;
                    if ("^" == i) return e.backup(), e.width() > 0 && e.emit(t.QueryLexer.TERM), t.QueryLexer.lexBoost;
                    if (i.match(t.QueryLexer.termSeparator)) return t.QueryLexer.lexTerm
                } else e.escapeCharacter()
            }
        }, t.QueryParser = function(e, i) {
            this.lexer = new t.QueryLexer(e), this.query = i, this.currentClause = {}, this.lexemeIdx = 0
        }, t.QueryParser.prototype.parse = function() {
            this.lexer.run(), this.lexemes = this.lexer.lexemes;
            for (var e = t.QueryParser.parseFieldOrTerm; e;) e = e(this);
            return this.query
        }, t.QueryParser.prototype.peekLexeme = function() {
            return this.lexemes[this.lexemeIdx]
        }, t.QueryParser.prototype.consumeLexeme = function() {
            var t = this.peekLexeme();
            return this.lexemeIdx += 1, t
        }, t.QueryParser.prototype.nextClause = function() {
            var t = this.currentClause;
            this.query.clause(t), this.currentClause = {}
        }, t.QueryParser.parseFieldOrTerm = function(e) {
            var i = e.peekLexeme();
            if (void 0 != i) switch (i.type) {
                case t.QueryLexer.FIELD:
                    return t.QueryParser.parseField;
                case t.QueryLexer.TERM:
                    return t.QueryParser.parseTerm;
                default:
                    var n = "expected either a field or a term, found " + i.type;
                    throw i.str.length >= 1 && (n += " with value '" + i.str + "'"), new t.QueryParseError(n, i.start, i.end)
            }
        }, t.QueryParser.parseField = function(e) {
            var i = e.consumeLexeme();
            if (void 0 != i) {
                if (-1 == e.query.allFields.indexOf(i.str)) {
                    var n = e.query.allFields.map(function(t) {
                            return "'" + t + "'"
                        }).join(", "),
                        s = "unrecognised field '" + i.str + "', possible fields: " + n;
                    throw new t.QueryParseError(s, i.start, i.end)
                }
                e.currentClause.fields = [i.str];
                var r = e.peekLexeme();
                if (void 0 == r) {
                    s = "expecting term, found nothing";
                    throw new t.QueryParseError(s, i.start, i.end)
                }
                switch (r.type) {
                    case t.QueryLexer.TERM:
                        return t.QueryParser.parseTerm;
                    default:
                        s = "expecting term, found '" + r.type + "'";
                        throw new t.QueryParseError(s, r.start, r.end)
                }
            }
        }, t.QueryParser.parseTerm = function(e) {
            var i = e.consumeLexeme();
            if (void 0 != i) {
                e.currentClause.term = i.str.toLowerCase(), -1 != i.str.indexOf("*") && (e.currentClause.usePipeline = !1);
                var n = e.peekLexeme();
                if (void 0 != n) switch (n.type) {
                    case t.QueryLexer.TERM:
                        return e.nextClause(), t.QueryParser.parseTerm;
                    case t.QueryLexer.FIELD:
                        return e.nextClause(), t.QueryParser.parseField;
                    case t.QueryLexer.EDIT_DISTANCE:
                        return t.QueryParser.parseEditDistance;
                    case t.QueryLexer.BOOST:
                        return t.QueryParser.parseBoost;
                    default:
                        var s = "Unexpected lexeme type '" + n.type + "'";
                        throw new t.QueryParseError(s, n.start, n.end)
                } else e.nextClause()
            }
        }, t.QueryParser.parseEditDistance = function(e) {
            var i = e.consumeLexeme();
            if (void 0 != i) {
                var n = parseInt(i.str, 10);
                if (isNaN(n)) {
                    r = "edit distance must be numeric";
                    throw new t.QueryParseError(r, i.start, i.end)
                }
                e.currentClause.editDistance = n;
                var s = e.peekLexeme();
                if (void 0 != s) switch (s.type) {
                    case t.QueryLexer.TERM:
                        return e.nextClause(), t.QueryParser.parseTerm;
                    case t.QueryLexer.FIELD:
                        return e.nextClause(), t.QueryParser.parseField;
                    case t.QueryLexer.EDIT_DISTANCE:
                        return t.QueryParser.parseEditDistance;
                    case t.QueryLexer.BOOST:
                        return t.QueryParser.parseBoost;
                    default:
                        var r = "Unexpected lexeme type '" + s.type + "'";
                        throw new t.QueryParseError(r, s.start, s.end)
                } else e.nextClause()
            }
        }, t.QueryParser.parseBoost = function(e) {
            var i = e.consumeLexeme();
            if (void 0 != i) {
                var n = parseInt(i.str, 10);
                if (isNaN(n)) {
                    r = "boost must be numeric";
                    throw new t.QueryParseError(r, i.start, i.end)
                }
                e.currentClause.boost = n;
                var s = e.peekLexeme();
                if (void 0 != s) switch (s.type) {
                    case t.QueryLexer.TERM:
                        return e.nextClause(), t.QueryParser.parseTerm;
                    case t.QueryLexer.FIELD:
                        return e.nextClause(), t.QueryParser.parseField;
                    case t.QueryLexer.EDIT_DISTANCE:
                        return t.QueryParser.parseEditDistance;
                    case t.QueryLexer.BOOST:
                        return t.QueryParser.parseBoost;
                    default:
                        var r = "Unexpected lexeme type '" + s.type + "'";
                        throw new t.QueryParseError(r, s.start, s.end)
                } else e.nextClause()
            }
        },
        function(t, e) {
            "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.lunr = e()
        }(this, function() {
            return t
        })
    }(), Triangulr.prototype.lineMapping = function() {
    var t, e, i, n = Math.ceil(this.mapWidth / this.triangleLine) + 4,
        s = Math.ceil(this.mapHeight / this.lineHeight) + 2,
        r = this.triangleLine / 4;
    for (e = 0; e < s; e++) {
        for (i = [], t = 0; t < n; t++) i.push({
            x: t * this.triangleLine + Math.round(Math.random() * this.pointArea * 2) - this.pointArea + this.originX + r,
            y: e * this.lineHeight + Math.round(Math.random() * this.pointArea * 2) - this.pointArea + this.originX
        });
        this.lines.push(i), r *= -1
    }
}, Triangulr.prototype.createTriangles = function() {
    var t, e, i, n, s, r, a, o, l = 0,
        d = !0;
    for (this.exportData = [], t = 0; t < this.lines.length - 1; t++) {
        i = this.lines[t], n = this.lines[t + 1], s = 0, r = 0, e = d;
        do {
            a = [i[s], n[r]], e ? (r++, a.push(n[r])) : (s++, a.push(i[s])), e = !e, o = [a[0], a[1], a[2]], this.exportData.push({
                style: {
                    fill: this.colorRendering({
                        counter: l,
                        x: s + r - 1,
                        y: t,
                        lines: this.lines.length,
                        cols: 2 * (i.length - 2),
                        points: o
                    })
                },
                points: o
            }), l++
        } while (s != i.length - 1 && r != i.length - 1);
        d = !d
    }
}, Triangulr.prototype.generateDom = function() {
    var t, e, i, n, s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("version", "1.1"), s.setAttribute("viewBox", "0 0 " + this.mapWidth + " " + this.mapHeight), s.setAttribute("enable-background", "new 0 0 " + this.mapWidth + " " + this.mapHeight), s.setAttribute("preserveAspectRatio", "xMinYMin slice");
    for (t in this.exportData) e = this.exportData[t], n = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = "M" + e.points[0].x + " " + e.points[0].y + " ", i += "L" + e.points[1].x + " " + e.points[1].y + " ", i += "L" + e.points[2].x + " " + e.points[2].y + " Z", n.setAttribute("d", i), n.setAttribute("fill", e.style.fill), n.setAttribute("shape-rendering", "geometricPrecision"), s.appendChild(n);
    return s
}, Triangulr.prototype.generateGray = function(t) {
    var e = Math.floor(5 * Math.random()).toString(16);
    return "#" + (e += Math.floor(16 * Math.random()).toString(16)) + e + e
}, "function" == typeof define && define.amd ? define([], function() {
    return Triangulr
}) : "object" == typeof exports ? module.exports = Triangulr : window.Triangulr = Triangulr,
    function() {
        var t, e;
        t = this.jQuery || window.jQuery, e = t(window), t.fn.stick_in_parent = function(i) {
            var n, s, r, a, o, l, d, c, h, u, p;
            for (null == i && (i = {}), p = i.sticky_class, o = i.inner_scrolling, u = i.recalc_every, h = i.parent, c = i.offset_top, d = i.spacer, s = i.bottoming, null == c && (c = 0), null == h && (h = void 0), null == o && (o = !0), null == p && (p = "is_stuck"), n = t(document), null == s && (s = !0), r = function(i, r, a, l, f, g, v, m) {
                var b, y, w, x, C, S, A, T, $, _, I, E;
                if (!i.data("sticky_kit")) {
                    if (i.data("sticky_kit", !0), C = n.height(), A = i.parent(), null != h && (A = A.closest(h)), !A.length) throw "failed to find stick parent";
                    if (b = w = !1, (I = null != d ? d && i.closest(d) : t("<div />")) && I.css("position", i.css("position")), (T = function() {
                            var t, e, s;
                            if (!m && (C = n.height(), t = parseInt(A.css("border-top-width"), 10), e = parseInt(A.css("padding-top"), 10), r = parseInt(A.css("padding-bottom"), 10), a = A.offset().top + t + e, l = A.height(), w && (b = w = !1, null == d && (i.insertAfter(I), I.detach()), i.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(p), s = !0), f = i.offset().top - (parseInt(i.css("margin-top"), 10) || 0) - c, g = i.outerHeight(!0), v = i.css("float"), I && I.css({
                                    width: i.outerWidth(!0),
                                    height: g,
                                    display: i.css("display"),
                                    "vertical-align": i.css("vertical-align"),
                                    float: v
                                }), s)) return E()
                        })(), g !== l) return x = void 0, S = c, _ = u, E = function() {
                        var t, h, y, $;
                        if (!m && (y = !1, null != _ && 0 >= --_ && (_ = u, T(), y = !0), y || n.height() === C || T(), y = e.scrollTop(), null != x && (h = y - x), x = y, w ? (s && ($ = y + g + S > l + a, b && !$ && (b = !1, i.css({
                                position: "fixed",
                                bottom: "",
                                top: S
                            }).trigger("sticky_kit:unbottom"))), y < f && (w = !1, S = c, null == d && ("left" !== v && "right" !== v || i.insertAfter(I), I.detach()), t = {
                                position: "",
                                width: "",
                                top: ""
                            }, i.css(t).removeClass(p).trigger("sticky_kit:unstick")), o && (t = e.height(), g + c > t && !b && (S -= h, S = Math.max(t - g, S), S = Math.min(c, S), w && i.css({
                                top: S + "px"
                            })))) : y > f && (w = !0, t = {
                                position: "fixed",
                                top: S
                            }, t.width = "border-box" === i.css("box-sizing") ? i.outerWidth() + "px" : i.width() + "px", i.css(t).addClass(p), null == d && (i.after(I), "left" !== v && "right" !== v || I.append(i)), i.trigger("sticky_kit:stick")), w && s && (null == $ && ($ = y + g + S > l + a), !b && $))) return b = !0, "static" === A.css("position") && A.css({
                            position: "relative"
                        }), i.css({
                            position: "absolute",
                            bottom: r,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")
                    }, $ = function() {
                        return T(), E()
                    }, y = function() {
                        if (m = !0, e.off("touchmove", E), e.off("scroll", E), e.off("resize", $), t(document.body).off("sticky_kit:recalc", $), i.off("sticky_kit:detach", y), i.removeData("sticky_kit"), i.css({
                                position: "",
                                bottom: "",
                                top: "",
                                width: ""
                            }), A.position("position", ""), w) return null == d && ("left" !== v && "right" !== v || i.insertAfter(I), I.remove()), i.removeClass(p)
                    }, e.on("touchmove", E), e.on("scroll", E), e.on("resize", $), t(document.body).on("sticky_kit:recalc", $), i.on("sticky_kit:detach", y), setTimeout(E, 0)
                }
            }, a = 0, l = this.length; a < l; a++) i = this[a], r(t(i));
            return this
        }
    }.call(this), $.fancybox.defaults.infobar = !0;
var nice = !1;
! function(t) {
    "use strict";

    function e(t) {
        return parseInt(t, 10)
    }

    function i(e) {
        function i() {
            r.css("top", "0")
        }
        var n = e.outerHeight(),
            s = e.clone().removeAttr("style").removeClass("houzez-header-transparent"),
            r = t(s).wrap("<div class='sticky_nav'></div>").parent().addClass(G).removeClass("houzez-header-transparent");
        r = r.removeClass("header-transparent not-splash-header nav-left"), t("body").append(r), t(window).on("scroll", function() {
            var i = t(window).scrollTop();
            i >= e.position().top + n ? r.slideDown(function() {}) : i <= e.position().top && r.fadeOut()
        }), i(), t(window).resize(function() {
            i()
        })
    }

    function n() {
        var e = t(".banner-bg-wrap");
        if (t(".header-media .banner-parallax").length) {
            var i = L.offset().top,
                n = t(window).scrollTop(),
                s = n - i;
            n >= i ? e.css("transform", "translate3d(0," + -.3 * -s + "px,0)") : n < i && e.css("transform", "translate3d(0,0px,0)")
        }
    }

    function s(t, e) {
        var i, n = e;
        if (n && (n = n.match(/^url\("?(.+?)"?\)$/))[1]) return n = n[1], i = new Image, i.src = n, "height" === t ? i.height : i.width
    }

    function r() {
        var i = 0,
            n = o() - D - k,
            r = t(".fave-screen-fix-inner"),
            l = t(".fave-screen-fix"),
            d = t(".banner-parallax-auto");
        F ? r.css("height", n - 1) : r.css("height", n), a() >= 992 ? (f.length && (i = T), f.length && m.length && !m.hasClass("search-hidden") && (i = e($) + e(T)), f.is("*") && m.hasClass("search-hidden") && (i = T), f.length && p.length && (i = e(T) + e(P)), f.length && m.length && !m.hasClass("search-hidden") && p.length && (i = e(T) + e(P) + e($)), f.length && u.length && (i = e(T) + e(V)), f.length && u.length && p.length && (i = e(T) + e(V) + e(P)), f.length && u.length && m.length && !m.hasClass("search-hidden") && (i = e(T) + e(V) + e($)), f.length && u.length && m.length && !m.hasClass("search-hidden") && p.length && (i = e(T) + e(V) + e($) + e(P)), f.length && u.length && m.length && m.hasClass("search-hidden") && p.length && (i = e(T) + e(V) + e(P))) : (y.length && !y.hasClass("search-hidden") && b.length && (i = e(E) + e(I)), y.hasClass("search-hidden") && b.is("*") && (i = I), b.length && (i = I), b.length && p.length && (i = e(I) + e(P)), b.length && y.length && !y.hasClass("search-hidden") && p.length && (i = e(I) + e(P) + e(E)), b.length && u.length && (i = e(I) + e(V)), b.length && u.length && y.length && !y.hasClass("search-hidden") && (i = e(I) + e(V) + e(E)), b.length && u.length && y.length && !y.hasClass("search-hidden") && p.length && (i = e(I) + e(V) + e(E) + e(P)), b.length && u.length && y.length && y.hasClass("search-hidden") && p.length && (i = e(I) + e(V) + e(P)), b.length && u.length && p.length && (i = e(I) + e(V) + e(P)));
        var c = o() - i;
        if (F ? l.css("height", c - 1) : l.css("height", c), t(".banner-parallax-fix").css("height", c), a() > 768) {
            var h = t(".banner-parallax-auto .banner-inner").css("background-image");
            if ("none" != h) {
                var g = d.width() * s("height", h) / s("width", h);
                g > o() ? d.css("height", c) : d.css("height", g - i)
            } else d.css("height", c)
        } else d.css("height", 300)
    }

    function a() {
        return Math.max(t(window).width(), window.innerWidth)
    }

    function o() {
        return Math.max(t(window).height(), window.innerHeight)
    }

    function l(e, i) {
        var n = t(e).html();
        t(i).html(n), t(i + " ul li").each(function() {
            t(this).has("ul").addClass("has-child")
        }), t(i + " ul .has-child").append('<span class="expand-me"></span>'), t(i + " .expand-me").on("click", function() {
            var e = t(this).parent("li");
            e.hasClass("active") ? (e.removeClass("active"), e.children("ul").slideUp()) : (e.addClass("active"), e.children("ul").slideDown())
        })
    }

    function d(e, i) {
        t(document).on("mouseup", function(n) {
            var s = t(e),
                r = t(".nav-dropdown"),
                a = t(".account-dropdown");
            s.is(n.target) || 0 !== s.has(n.target).length || r.is(n.target) || 0 !== r.has(n.target).length || a.is(n.target) || 0 !== a.has(n.target).length || t(e).removeClass(i)
        })
    }

    function c() {
        var t = h() - 60;
        lt.css("width", t), ht.length > 0 ? (ct.css("width", t - yt), bt.css("width", t - yt - 40), ht.addClass("in"), ft.removeClass("show"), Modernizr.mq("(max-width: 1199px)") && (gt.removeClass("compress"), dt.removeClass("pop-expand")), Modernizr.mq("(max-width: 1024px)") && (ct.css("width", "100%"), ht.removeClass("in"), bt.css("width", "100%"), gt.addClass("compress"), ft.addClass("show"))) : (ct.css("width", "100%"), bt.css("width", "100%"), ft.addClass("show"), vt.hide("show"))
    }

    function h() {
        return Math.max(t(window).width(), t(window).innerWidth())
    }
    var u = t("#wpadminbar"),
        p = t(".top-bar"),
        f = t(".header-main"),
        g = f.find(".header-bottom"),
        v = t(".splash-header"),
        m = t(".advance-search-header"),
        b = t(".header-mobile"),
        y = t(".advanced-search-mobile"),
        w = t(".splash-footer"),
        x = f.data("sticky"),
        C = g.data("sticky"),
        S = m.data("sticky"),
        A = b.data("sticky"),
        T = f.outerHeight(),
        $ = m.outerHeight(),
        _ = g.outerHeight(),
        I = (y.outerHeight(), b.outerHeight()),
        E = y.outerHeight(),
        k = w.outerHeight(),
        P = p.outerHeight(),
        V = u.outerHeight(),
        D = v.outerHeight(),
        L = (t("#section-body"), t(".header-media"));
    t('[data-toggle="popover"]').popover({
        trigger: "hover",
        html: !0
    });
    ! function() {
        var e = t(".hb_search_overlay"),
            i = t(".hb_search"),
            n = t(".hb_search_result_list"),
            s = t(".hb_search_input"),
            r = t(".hb_search_icon_reset"),
            a = !1,
            o = s.data("type"),
            l = t(".hb_search_result_meta"),
            d = null,
            c = null;
        t(document).keyup(function(t) {
            27 === t.keyCode && u()
        });
        var h = function() {
                d = lunr(function() {
                    this.ref("dir"), this.field("excerpt"), this.field("name", {
                        boost: 10
                    });
                    for (var t in c.modules) c.modules.hasOwnProperty(t) && this.add(c.modules[t])
                })
            },
            u = function() {
                e.removeClass("enabled"), i.removeClass("enabled"), s.blur()
            };
        r.click(function() {
            s.val("")
        }), s.focus(function() {
            e.addClass("enabled"), i.addClass("enabled"), !a && o && t.getJSON("/appstore/dist/" + o + ".json", function(t) {
                a = !0, c = t, h()
            })
        }).keyup(function(t) {
            if (27 === t.keyCode) return u();
            if (13 === t.keyCode) return !1;
            var e = s.val().trim(),
                i = function() {
                    n.empty(), l.html('No results found. <a href="/services/custom-development/" target="_blank">Would you like us to build it for you?</a>')
                };
            if (i(), a && e) {
                var r = d.query(function(t) {
                    e.toLowerCase().split(" ").forEach(function(e) {
                        t.term(e, {
                            wildcard: lunr.Query.wildcard.TRAILING
                        })
                    })
                });
                r.length ? (l.text("Found " + r.length + " matching integrations"), r.forEach(function(t) {
                    var i = c.modules[t.ref];
                    n.append('<li class="hb_search_result_item"><a href="' + i.url.replace(/^http(s)?\:\/\/hostbillapp\.com/, "") + '" title="' + i.name + '" class="hb_search_result_link"><article class="hb_search_result_article"><strong class="hb_search_result_title">' + i.name + '</strong><p class="hb_search_result_teaser">' + i.excerpt + "</p></article></a></li>"), e.toLowerCase().split(" ").forEach(function(t) {
                        n.highlight(t)
                    })
                })) : i()
            }
        }), t(".hb_search_overlay").click(u)
    }(),
        function() {
            var e = ["Fixed(s)?:", "Added(s)?:", "Changed(s)?:"],
                i = ["fixed", "added", "changed"],
                n = ["fixed", "success", "info"];
            t("ul.changelog li").each(function() {
                for (var s, r = t(this), a = "label label-", o = r.html(), l = 0; l < e.length; l++)
                    if ((s = new RegExp(e[l])).test(r.text())) {
                        a += n[l], r.addClass(i[l]), r.html(o.replace(s, function(t) {
                            return "<label class='" + a + "'>" + t + "</label>"
                        }));
                        break
                    }
            })
        }();
    var R = t("#comparison_table");
    t(window).on("scroll", function() {
        if (R.length && R.is(":visible")) {
            var e = R.height(),
                i = t(this).scrollTop();
            i > 1100 ? i > e + 1100 ? R.removeClass("fixed-header") : R.addClass("fixed-header") : R.removeClass("fixed-header")
        }
    }), window.location.hash.match(/compare/) && (t("#not-sure-row").hide(), t("#compare-header-row").show(), t("#comparison").show()), t(".hbmainpage-tabs-selector a").each(function(e) {
        t(this).click(function() {
            return t(".hbmainpage-tabs-selector a").removeClass("active").eq(e).addClass("active"), t(".mainpage-tabs-content .row").hide().eq(e).show(), !1
        })
    }), t('[data-toggle="tooltip"]').tooltip();
    var F = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
        N = (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor), t(".scrolltop-btn"));
    t(window).on("scroll", function() {
        t(this).scrollTop() > 100 ? N.show() : N.hide()
    });
    var M = t(".panel-btn"),
        O = t(".compare-panel");
    M.on("click", function() {
        O.hasClass("panel-open") ? O.removeClass("panel-open") : O.addClass("panel-open")
    });
    var B = null;
    1 === x && 0 === S && (B = T), 1 === S && 0 === x && (B = $), 1 === C && 0 === S && (B = _), 1 === S && 0 === C && (B = $), 0 === S && 0 === C && (B = 0), 0 === x && 0 === S && (B = 0), f.not("[data-sticky]") && m.not("[data-sticky]") && (B = 0), g.not("[data-sticky]") && m.not("[data-sticky]") && (B = 0), 1 === g && m.not("[data-sticky]") && (B = _), g.not("[data-sticky]") && 1 === S && (B = $), f.not("[data-sticky]") && 1 === S && (B = $), 1 === x && m.not("[data-sticky]") && (B = T), f.hasClass("header-section-3") && 1 === C && (B = _), f.hasClass("header-section-3") && 1 === S && (B = $), f.hasClass("header-section-2") && 1 === C && (B = _), f.hasClass("header-section-2") && 1 === S && (B = $);
    var j = t(".property-menu-wrap"),
        z = t(".target"),
        U = t(".target-block"),
        Q = j.innerHeight(),
        H = t("html, body"),
        Z = t(".detail-media");
    j.length && (z.each(function() {
        t(this).on("click", function(e) {
            var i = t(this).attr("href"),
                n = t(i).offset().top;
            n = n - B - Q, H.animate({
                scrollTop: n
            }, {
                duration: 1e3,
                easing: "easeInOutExpo",
                queue: !1
            }), e.preventDefault()
        })
    }), t(window).on("scroll", function() {
        var e = t(window).scrollTop();
        U.each(function() {
            var i = t(this);
            if (e >= i.offset().top - B - Q) {
                var n = i.attr("id");
                z.removeClass("active"), t('.target[href="#' + n + '"]').addClass("active")
            } else e <= 0 && z.removeClass("active")
        })
    })), t(".back-top").on("click", function() {
        return H.animate({
            scrollTop: 0
        }, "slow"), !1
    }), j.length && t(window).on("scroll", function() {
        var e = t(window).scrollTop();
        e >= Z.offset().top + 200 ? j.css({
            top: B
        }).fadeIn() : e <= Z.offset().top + 200 && j.css({
            top: B
        }).fadeOut()
    }), t(function() {
        t('.features-links-small a[href*="#"]:not([href="#"])').on("click", function() {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var e = t(this.hash);
                if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length) return H.animate({
                    scrollTop: e.offset().top
                }, 1e3), !1
            }
        })
    });
    var G = f.attr("class");
    1 === C && i(g), 1 === x && i(f), 1 === A && i(b), n(), t(window).on("scroll", function() {
        n()
    });
    var W = t("a[data-fancy^='property_video']");
    W.length > 0 && W.prettyPhoto({
        allow_resize: !0,
        default_width: 1900,
        default_height: 1e3,
        animation_speed: "normal",
        theme: "default",
        slideshow: 3e3,
        autoplay_slideshow: !1
    });
    var X = t("a[data-fancy^='property_gallery']");
    X.length > 0 && X.prettyPhoto({
        allow_resize: !0,
        default_width: 1900,
        default_height: 1e3,
        animation_speed: "normal",
        theme: "facebook",
        slideshow: 3e3,
        autoplay_slideshow: !1
    }), t(".firsttab").click(function() {
        var e = t(this).index() - 1;
        t(".firsttab, .secondtab").removeClass("active"), t(this).addClass("active"), t(".secondtab-content").hide(), t(".firsttab-content").show(), t(".firsttab-item").hide().eq(e).show()
    }), t(".secondtab").click(function() {
        t(this);
        t(".firsttab").removeClass("active"), t(this).addClass("active"), t(".secondtab-content").show(), t(".firsttab-content").hide()
    }), t(".add-title-tab > .add-expand").on("click", function() {
        t(this).toggleClass("active").parent().next(".add-tab-content").slideToggle()
    }), t(".toggle-title").on("click", function() {
        t(this).toggleClass("active").next(".toggle-content").slideToggle()
    });
    var Y = t(".accord-tab > .expand-icon");
    Y.on("click", function() {
        var e = t(this);
        1 != e.hasClass("active") && (Y.removeClass("active"), e.addClass("active"), Y.parent().next(".accord-content").slideUp(), e.parent().next(".accord-content").slideDown())
    });
    var q = t(".grid-block");
    t(window).on("load", function() {
        q.length > 0 && q.isotope({
            itemSelector: ".grid-item"
        })
    });
    var K = t(".actions li");
    K.on("click", function() {
        var e = t(this);
        e.children(".share_tooltip").hasClass("in") ? e.children(".share_tooltip").removeClass("in") : (K.children(".share_tooltip").removeClass("in"), e.children(".share_tooltip").addClass("in"))
    }), t(document).on("mouseup", function(e) {
        var i = t(".share-btn");
        i.is(e.target) || 0 !== i.has(e.target).length || t(".share_tooltip").removeClass("in")
    });
    var J = t(".footer-widget");
    J.length > 0 && J.matchHeight();
    var tt = t(".grid");
    tt.length > 0 && tt.each(function() {
        t(this).children().find("img").matchHeight({
            byRow: !0,
            property: "height",
            target: null,
            remove: !1
        })
    }), t(".navi ul li").each(function() {
        t(this).has("ul").not(".houzez-megamenu li").addClass("has-child")
    }), t(".navi ul .has-child").on({
        mouseenter: function() {
            t(this).addClass("active")
        },
        mouseleave: function() {
            t(this).removeClass("active")
        }
    }), r(), t(window).on("resize", function() {
        r()
    }), t(window).bind("load", function() {
        r()
    });
    var et, it = t("#triangles")[0],
        nt = function() {
            t("#triangles").length && (et && et.remove(), et = new Triangulr(window.innerWidth, window.innerHeight, 100, 50, t("#triangles").data("red") ? st : rt), it.appendChild(et))
        },
        st = function(t) {
            var e = (t.x + t.y) / (t.cols + t.lines);
            return "#" + Math.floor(255 - 223 * e - 32 * Math.random()).toString(16) + "0055"
        },
        rt = function(t) {
            var e = t.x * t.y / (t.cols * t.lines),
                i = Math.floor(255 - 223 * e - 32 * Math.random()).toString(16);
            return "#" + i + i + i
        };
    t(window).on("resize", function() {
        nt()
    }), nt();
    var at = t(".sponsors-block");
    t("li", at).click(function() {
        if (t(this).index() != t("li", at).length - 1) {
            t("li", at).removeClass("active");
            var e = t(this).addClass("active").index();
            t(".testimonial-entry").addClass("hidden").eq(e).removeClass("hidden")
        }
    }), t(".prop_featured").on("change", function() {
        var e = t(this).parents("table"),
            i = parseFloat(e.find(".submission_price").text()),
            n = i + parseFloat(e.find(".submission_featured_price").text());
        t(this).is(":checked") ? e.find(".submission_total_price").text(n) : e.find(".submission_total_price").text(i)
    }), l(".main-nav", ".main-nav-dropdown"), l(".top-nav", ".top-nav-dropdown"), l(".top-nav", ".top-nav-dropdown"), t(".nav-trigger").on("click", function() {
        var e = t(this);
        e.hasClass("mobile-open") ? e.removeClass("mobile-open") : e.addClass("mobile-open")
    }), d(".header-mobile .nav-trigger", "mobile-open"), d(".top-bar .nav-trigger", "mobile-open"), d(".account-action li", "active");
    var ot = t("#lightbox-popup-main"),
        lt = t(".lightbox-popup"),
        dt = t(".popup-inner"),
        ct = (t(".lightbox-slide"), t(".lightbox-left")),
        ht = t(".lightbox-right"),
        ut = t(".popup-trigger"),
        pt = t(".lightbox-close"),
        ft = t(".lightbox-left .lightbox-close"),
        gt = t(".expand-icon"),
        vt = t(".lightbox-left .expand-icon"),
        mt = t(".lightbox-expand"),
        bt = t(".gallery-inner"),
        yt = (t(".lightbox-arrow-left"), t(".lightbox-arrow-right"), ht.innerWidth());
    ut.on("click", function() {
        ot.addClass("active").addClass("in")
    }), pt.on("click", function() {
        ot.removeClass("active").removeClass("in")
    }), t(document).keydown(function(t) {
        27 === t.keyCode && ot.removeClass("active").removeClass("in")
    }), c(), mt.on("click", function() {
        var e = t(this),
            i = h(),
            n = h() - 60 - yt;
        ft.toggleClass("show"), i >= 1024 && (e.hasClass("compress") ? (ht.addClass("in"), ct.css("width", n), e.removeClass("compress"), dt.removeClass("pop-expand")) : (ct.css("width", "100%"), ht.removeClass("in"), e.addClass("compress"), dt.addClass("pop-expand"))), i <= 1024 && (e.hasClass("compress") ? (ht.addClass("in"), ct.css("width", n), e.removeClass("compress")) : (ct.css("width", "100%"), ht.removeClass("in"), e.addClass("compress"))), i < 768 && ct.css("width", "100%")
    }), t(window).on("load", function() {
        c(), t(".tagcloud a").removeAttr("style")
    }), t("#featured-slider").owlCarousel({
        items: 1,
        animateOut: "fadeOut",
        margin: 0,
        loop: !0,
        autoplay: !0,
        nav: !0,
        navText: ['<i class="fa fa-chevron-circle-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>']
    });
    var wt = t("#contact_form");
    wt.length && wt.bootstrapValidator({
        message: "This value is not valid",
        feedbackIcons: {
            valid: "fa fa-ok",
            invalid: "fa fa-remove",
            validating: "fa fa-refresh"
        },
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: "The email address is required"
                    },
                    emailAddress: {
                        message: "The email address is not valid"
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: "The Message is required and cannot be empty"
                    }
                }
            }
        }
    })
}(jQuery);
//# sourceMappingURL=script.min.js.map