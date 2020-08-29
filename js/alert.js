(window.webpackJsonp = window.webpackJsonp || []).push([
	[15], {
		207: function(t, e, n) {
			var r = n(222);
			t.exports = function(t, e) {
				var n = -1,
					c = t.length,
					o = c - 1;
				for (e = void 0 === e ? c : e; ++n < e;) {
					var l = r(n, o),
						d = t[l];
					t[l] = t[n], t[n] = d
				}
				return t.length = e, t
			}
		},
		208: function(t, e) {
			var n = Array.isArray;
			t.exports = n
		},
		209: function(t, e) {
			t.exports = function(t) {
				return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object
					.defineProperty(t, "loaded", {
						enumerable: !0,
						get: function() {
							return t.l
						}
					}), Object.defineProperty(t, "id", {
						enumerable: !0,
						get: function() {
							return t.i
						}
					}), t.webpackPolyfill = 1), t
			}
		},
		211: function(t, e, n) {},
		212: function(t, e, n) {},
		215: function(t, e, n) {
			"use strict";
			var r = n(3),
				c = n(17),
				o = n(22),
				l = n(120),
				d = n(58),
				f = n(9),
				v = n(41).f,
				h = n(59).f,
				m = n(8).f,
				_ = n(271).trim,
				y = r.Number,
				k = y,
				x = y.prototype,
				C = "Number" == o(n(75)(x)),
				L = "trim" in String.prototype,
				S = function(t) {
					var e = d(t, !1);
					if ("string" == typeof e && e.length > 2) {
						var n, r, c, o = (e = L ? e.trim() : _(e, 3)).charCodeAt(0);
						if (43 === o || 45 === o) {
							if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
						} else if (48 === o) {
							switch (e.charCodeAt(1)) {
								case 66:
								case 98:
									r = 2, c = 49;
									break;
								case 79:
								case 111:
									r = 8, c = 55;
									break;
								default:
									return +e
							}
							for (var code, l = e.slice(2), i = 0, f = l.length; i < f; i++)
								if ((code = l.charCodeAt(i)) < 48 || code > c) return NaN;
							return parseInt(l, r)
						}
					}
					return +e
				};
			if (!y(" 0o1") || !y("0b1") || y("+0x1")) {
				y = function(t) {
					var e = arguments.length < 1 ? 0 : t,
						n = this;
					return n instanceof y && (C ? f((function() {
						x.valueOf.call(n)
					})) : "Number" != o(n)) ? l(new k(S(e)), n, y) : S(e)
				};
				for (var w, P = n(7) ? v(k) :
						"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger"
						.split(","), A = 0; P.length > A; A++) c(k, w = P[A]) && !c(y, w) && m(y, w, h(k, w));
				y.prototype = x, x.constructor = y, n(10)(r, "Number", y)
			}
		},
		216: function(t, e, n) {
			"use strict";
			var r = n(219),
				c = n.n(r);
			e.a = function(t) {
				var e = c()(["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg",
					"11.jpg", "12.jpg"
				]);
				return null != t ? e[t] : e
			}
		},
		217: function(t, e, n) {
			var map = {
				"./01.jpg": 243,
				"./02.jpg": 244,
				"./03.jpg": 245,
				"./04.jpg": 246,
				"./05.jpg": 247,
				"./06.jpg": 248,
				"./07.jpg": 249,
				"./08.jpg": 250,
				"./09.jpg": 251,
				"./10.jpg": 252,
				"./11.jpg": 253,
				"./12.jpg": 254
			};

			function r(t) {
				var e = c(t);
				return n(e)
			}

			function c(t) {
				if (!n.o(map, t)) {
					var e = new Error("Cannot find module '" + t + "'");
					throw e.code = "MODULE_NOT_FOUND", e
				}
				return map[t]
			}
			r.keys = function() {
				return Object.keys(map)
			}, r.resolve = c, t.exports = r, r.id = 217
		},
		219: function(t, e, n) {
			var r = n(220),
				c = n(223),
				o = n(208);
			t.exports = function(t) {
				return (o(t) ? r : c)(t)
			}
		},
		220: function(t, e, n) {
			var r = n(221),
				c = n(207);
			t.exports = function(t) {
				return c(r(t))
			}
		},
		221: function(t, e) {
			t.exports = function(source, t) {
				var e = -1,
					n = source.length;
				for (t || (t = Array(n)); ++e < n;) t[e] = source[e];
				return t
			}
		},
		222: function(t, e) {
			var n = Math.floor,
				r = Math.random;
			t.exports = function(t, e) {
				return t + n(r() * (e - t + 1))
			}
		},
		223: function(t, e, n) {
			var r = n(207),
				c = n(224);
			t.exports = function(t) {
				return r(c(t))
			}
		},
		224: function(t, e, n) {
			var r = n(225),
				c = n(227);
			t.exports = function(object) {
				return null == object ? [] : r(object, c(object))
			}
		},
		225: function(t, e, n) {
			var r = n(226);
			t.exports = function(object, t) {
				return r(t, (function(t) {
					return object[t]
				}))
			}
		},
		226: function(t, e) {
			t.exports = function(t, e) {
				for (var n = -1, r = null == t ? 0 : t.length, c = Array(r); ++n < r;) c[n] = e(t[n], n, t);
				return c
			}
		},
		227: function(t, e, n) {
			var r = n(228),
				c = n(238),
				o = n(274);
			t.exports = function(object) {
				return o(object) ? r(object) : c(object)
			}
		},
		228: function(t, e, n) {
			var r = n(229),
				c = n(230),
				o = n(208),
				l = n(232),
				d = n(278),
				f = n(234),
				v = Object.prototype.hasOwnProperty;
			t.exports = function(t, e) {
				var n = o(t),
					h = !n && c(t),
					m = !n && !h && l(t),
					_ = !n && !h && !m && f(t),
					y = n || h || m || _,
					k = y ? r(t.length, String) : [],
					x = k.length;
				for (var C in t) !e && !v.call(t, C) || y && ("length" == C || m && ("offset" == C || "parent" == C) || _ && (
					"buffer" == C || "byteLength" == C || "byteOffset" == C) || d(C, x)) || k.push(C);
				return k
			}
		},
		229: function(t, e) {
			t.exports = function(t, e) {
				for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
				return r
			}
		},
		230: function(t, e, n) {
			var r = n(231),
				c = n(204),
				o = Object.prototype,
				l = o.hasOwnProperty,
				d = o.propertyIsEnumerable,
				f = r(function() {
					return arguments
				}()) ? r : function(t) {
					return c(t) && l.call(t, "callee") && !d.call(t, "callee")
				};
			t.exports = f
		},
		231: function(t, e, n) {
			var r = n(213),
				c = n(204),
				o = "[object Arguments]";
			t.exports = function(t) {
				return c(t) && r(t) == o
			}
		},
		232: function(t, e, n) {
			(function(t) {
				var r = n(275),
					c = n(233),
					o = e && !e.nodeType && e,
					l = o && "object" == typeof t && t && !t.nodeType && t,
					d = l && l.exports === o ? r.Buffer : void 0,
					f = (d ? d.isBuffer : void 0) || c;
				t.exports = f
			}).call(this, n(209)(t))
		},
		233: function(t, e) {
			t.exports = function() {
				return !1
			}
		},
		234: function(t, e, n) {
			var r = n(235),
				c = n(236),
				o = n(237),
				l = o && o.isTypedArray,
				d = l ? c(l) : r;
			t.exports = d
		},
		235: function(t, e, n) {
			var r = n(213),
				c = n(277),
				o = n(204),
				l = {};
			l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l[
					"[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] =
				l["[object Uint32Array]"] = !0, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l[
					"[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] =
				l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l[
					"[object String]"] = l["[object WeakMap]"] = !1, t.exports = function(t) {
					return o(t) && c(t.length) && !!l[r(t)]
				}
		},
		236: function(t, e) {
			t.exports = function(t) {
				return function(e) {
					return t(e)
				}
			}
		},
		237: function(t, e, n) {
			(function(t) {
				var r = n(276),
					c = e && !e.nodeType && e,
					o = c && "object" == typeof t && t && !t.nodeType && t,
					l = o && o.exports === c && r.process,
					d = function() {
						try {
							var t = o && o.require && o.require("util").types;
							return t || l && l.binding && l.binding("util")
						} catch (t) {}
					}();
				t.exports = d
			}).call(this, n(209)(t))
		},
		238: function(t, e, n) {
			var r = n(239),
				c = n(240),
				o = Object.prototype.hasOwnProperty;
			t.exports = function(object) {
				if (!r(object)) return c(object);
				var t = [];
				for (var e in Object(object)) o.call(object, e) && "constructor" != e && t.push(e);
				return t
			}
		},
		239: function(t, e) {
			var n = Object.prototype;
			t.exports = function(t) {
				var e = t && t.constructor;
				return t === ("function" == typeof e && e.prototype || n)
			}
		},
		240: function(t, e, n) {
			var r = n(241)(Object.keys, Object);
			t.exports = r
		},
		241: function(t, e) {
			t.exports = function(t, e) {
				return function(n) {
					return t(e(n))
				}
			}
		},
		243: function(t, e, n) {
			t.exports = n.p + "img/d989de4.jpg"
		},
		244: function(t, e, n) {
			t.exports = n.p + "img/7767076.jpg"
		},
		245: function(t, e, n) {
			t.exports = n.p + "img/fd4faa7.jpg"
		},
		246: function(t, e, n) {
			t.exports = n.p + "img/7f80c72.jpg"
		},
		247: function(t, e, n) {
			t.exports = n.p + "img/7ef0599.jpg"
		},
		248: function(t, e, n) {
			t.exports = n.p + "img/915a786.jpg"
		},
		249: function(t, e, n) {
			t.exports = n.p + "img/a807576.jpg"
		},
		250: function(t, e, n) {
			t.exports = n.p + "img/fe2429a.jpg"
		},
		251: function(t, e, n) {
			t.exports = n.p + "img/e176ee7.jpg"
		},
		252: function(t, e, n) {
			t.exports = n.p + "img/db489cf.jpg"
		},
		253: function(t, e, n) {
			t.exports = n.p + "img/91b4e14.jpg"
		},
		254: function(t, e, n) {
			t.exports = n.p + "img/cfe035b.jpg"
		},
		271: function(t, e, n) {
			var r = n(6),
				c = n(21),
				o = n(9),
				l = n(272),
				d = "[" + l + "]",
				f = RegExp("^" + d + d + "*"),
				v = RegExp(d + d + "*$"),
				h = function(t, e, n) {
					var c = {},
						d = o((function() {
							return !!l[t]() || "​" != "​" [t]()
						})),
						f = c[t] = d ? e(m) : l[t];
					n && (c[n] = f), r(r.P + r.F * d, "String", c)
				},
				m = h.trim = function(t, e) {
					return t = String(c(t)), 1 & e && (t = t.replace(f, "")), 2 & e && (t = t.replace(v, "")), t
				};
			t.exports = h
		},
		272: function(t, e) {
			t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
		},
		281: function(t, e, n) {
			"use strict";
			var r = n(211);
			n.n(r).a
		},
		282: function(t, e, n) {
			"use strict";
			var r = n(212);
			n.n(r).a
		},
		283: function(t, e, n) {},
		284: function(t, e, n) {},
		285: function(t, e, n) {},
		287: function(t, e, n) {
			"use strict";
			n(215);
			var r = {
					props: {
						prefix: Boolean,
						value: {
							type: Number
						},
						pageCount: {
							type: Number,
							required: !0
						},
						forcePage: {
							type: Number
						},
						clickHandler: {
							type: Function,
							default: function() {}
						},
						pageRange: {
							type: Number,
							default: 3
						},
						marginPages: {
							type: Number,
							default: 1
						},
						prevText: {
							type: String,
							default: "Prev"
						},
						nextText: {
							type: String,
							default: "Next"
						},
						breakViewText: {
							type: String,
							default: "…"
						},
						containerClass: {
							type: String
						},
						pageClass: {
							type: String
						},
						pageLinkClass: {
							type: String
						},
						prevClass: {
							type: String
						},
						prevLinkClass: {
							type: String
						},
						nextClass: {
							type: String
						},
						nextLinkClass: {
							type: String
						},
						breakViewClass: {
							type: String
						},
						breakViewLinkClass: {
							type: String
						},
						activeClass: {
							type: String,
							default: "active"
						},
						disabledClass: {
							type: String,
							default: "disabled"
						},
						noLiSurround: {
							type: Boolean,
							default: !1
						},
						firstLastButton: {
							type: Boolean,
							default: !1
						},
						firstButtonText: {
							type: String,
							default: "First"
						},
						lastButtonText: {
							type: String,
							default: "Last"
						},
						hidePrevNext: {
							type: Boolean,
							default: !1
						}
					},
					beforeUpdate: function() {
						void 0 !== this.forcePage && this.forcePage !== this.selected && (this.selected = this.forcePage)
					},
					computed: {
						selected: {
							get: function() {
								return this.value || this.innerValue
							},
							set: function(t) {
								this.innerValue = t
							}
						},
						pages: function() {
							var t = this,
								e = {};
							if (this.pageCount <= this.pageRange)
								for (var n = 0; n < this.pageCount; n++) {
									var r = {
										index: n,
										content: n + 1,
										selected: n === this.selected - 1
									};
									e[n] = r
								} else {
									for (var c = Math.floor(this.pageRange / 2), o = function(n) {
											var r = {
												index: n,
												content: n + 1,
												selected: n === t.selected - 1
											};
											e[n] = r
										}, l = function(t) {
											e[t] = {
												disabled: !0,
												breakView: !0
											}
										}, i = 0; i < this.marginPages; i++) o(i);
									var d = 0;
									this.selected - c > 0 && (d = this.selected - 1 - c);
									var f = d + this.pageRange - 1;
									f >= this.pageCount && (d = (f = this.pageCount - 1) - this.pageRange + 1);
									for (var v = d; v <= f && v <= this.pageCount - 1; v++) o(v);
									d > this.marginPages && l(d - 1), f + 1 < this.pageCount - this.marginPages && l(f + 1);
									for (var h = this.pageCount - 1; h >= this.pageCount - this.marginPages; h--) o(h)
								}
							return e
						}
					},
					data: function() {
						return {
							innerValue: 1
						}
					},
					methods: {
						handlePageSelected: function(t) {
							this.selected !== t && (this.innerValue = t, this.$emit("input", t), this.clickHandler(t))
						},
						prevPage: function() {
							this.selected <= 1 || this.handlePageSelected(this.selected - 1)
						},
						nextPage: function() {
							this.selected >= this.pageCount || this.handlePageSelected(this.selected + 1)
						},
						firstPageSelected: function() {
							return 1 === this.selected
						},
						lastPageSelected: function() {
							return this.selected === this.pageCount || 0 === this.pageCount
						},
						selectFirstPage: function() {
							this.selected <= 1 || this.handlePageSelected(1)
						},
						selectLastPage: function() {
							this.selected >= this.pageCount || this.handlePageSelected(this.pageCount)
						}
					}
				},
				c = (n(281), n(20)),
				o = Object(c.a)(r, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return t.noLiSurround ? n("div", {
						class: t.containerClass
					}, [t.firstLastButton ? n("a", {
						class: [t.pageLinkClass, t.firstPageSelected() ? t.disabledClass : ""],
						attrs: {
							tabindex: "0"
						},
						domProps: {
							innerHTML: t._s(t.firstButtonText)
						},
						on: {
							click: function(e) {
								return t.selectFirstPage()
							},
							keyup: function(e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.selectFirstPage()
							}
						}
					}) : t._e(), t._v(" "), t.firstPageSelected() && t.hidePrevNext ? t._e() : n("a", {
						class: [t.prevLinkClass, t.firstPageSelected() ? t.disabledClass : ""],
						attrs: {
							tabindex: "0"
						},
						domProps: {
							innerHTML: t._s(t.prevText)
						},
						on: {
							click: function(e) {
								return t.prevPage()
							},
							keyup: function(e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.prevPage()
							}
						}
					}), t._v(" "), t._l(t.pages, (function(e, r) {
						return [e.breakView ? n("a", {
							key: r,
							class: [t.pageLinkClass, t.breakViewLinkClass, e.disabled ? t.disabledClass : ""],
							attrs: {
								tabindex: "0"
							}
						}, [t._t("breakViewContent", [t._v(t._s(t.breakViewText))])], 2) : e.disabled ? n("a", {
							key: r,
							class: [t.pageLinkClass, e.selected ? t.activeClass : "", t.disabledClass],
							attrs: {
								tabindex: "0"
							}
						}, [t._v(t._s(e.content))]) : n("a", {
							key: r,
							class: [t.pageLinkClass, e.selected ? t.activeClass : ""],
							attrs: {
								tabindex: "0"
							},
							on: {
								click: function(n) {
									return t.handlePageSelected(e.index + 1)
								},
								keyup: function(n) {
									return !n.type.indexOf("key") && t._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : t.handlePageSelected(
										e.index + 1)
								}
							}
						}, [t._v(t._s(e.content))])]
					})), t._v(" "), t.lastPageSelected() && t.hidePrevNext ? t._e() : n("a", {
						class: [t.nextLinkClass, t.lastPageSelected() ? t.disabledClass : ""],
						attrs: {
							tabindex: "0"
						},
						domProps: {
							innerHTML: t._s(t.nextText)
						},
						on: {
							click: function(e) {
								return t.nextPage()
							},
							keyup: function(e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.nextPage()
							}
						}
					}), t._v(" "), t.firstLastButton ? n("a", {
						class: [t.pageLinkClass, t.lastPageSelected() ? t.disabledClass : ""],
						attrs: {
							tabindex: "0"
						},
						domProps: {
							innerHTML: t._s(t.lastButtonText)
						},
						on: {
							click: function(e) {
								return t.selectLastPage()
							},
							keyup: function(e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.selectLastPage()
							}
						}
					}) : t._e()], 2) : n("ul", {
						class: t.containerClass
					}, [t.firstLastButton ? n("li", {
						class: [t.pageClass, t.firstPageSelected() ? t.disabledClass : ""]
					}, [n("a", {
						class: t.pageLinkClass,
						attrs: {
							tabindex: t.firstPageSelected() ? -1 : 0
						},
						domProps: {
							innerHTML: t._s(t.firstButtonText)
						},
						on: {
							click: function(e) {
								return t.selectFirstPage()
							},
							keyup: function(e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.selectFirstPage()
							}
						}
					})]) : t._e(), t._v(" "), t.firstPageSelected() && t.hidePrevNext ? t._e() : n("li", {
						class: [t.prevClass, t.firstPageSelected() ? t.disabledClass : ""]
					}, [t.prefix ? n("nuxt-link", {
						class: t.prevLinkClass,
						attrs: {
							tag: "a",
							tabindex: t.firstPageSelected() ? -1 : 0,
							to: {
								query: Object.assign({}, t.$route.query, {
									page: t.$route.query.page > 2 ? t.$route.query.page - 1 : 1
								})
							}
						}
					}, [n("a", {
						domProps: {
							innerHTML: t._s(t.prevText)
						}
					})]) : n("a", {
						class: t.prevLinkClass,
						attrs: {
							tabindex: t.firstPageSelected() ? -1 : 0
						},
						domProps: {
							innerHTML: t._s(t.prevText)
						},
						on: {
							click: function(e) {
								return t.prevPage()
							},
							keyup: function(e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.prevPage()
							}
						}
					})], 1), t._v(" "), t._l(t.pages, (function(e, r) {
						return n("li", {
							key: r,
							class: [t.pageClass, e.selected ? t.activeClass : "", e.disabled ? t.disabledClass : "", e.breakView ?
								t.breakViewClass : ""
							]
						}, [e.breakView ? n("a", {
							class: [t.pageLinkClass, t.breakViewLinkClass],
							attrs: {
								tabindex: "0"
							}
						}, [t._t("breakViewContent", [t._v(t._s(t.breakViewText))])], 2) : e.disabled ? n("a", {
							class: t.pageLinkClass,
							attrs: {
								tabindex: "0"
							}
						}, [t._v(t._s(e.content))]) : [t.prefix ? n("nuxt-link", {
							class: t.pageLinkClass,
							attrs: {
								tag: "a",
								tabindex: "0",
								to: {
									query: Object.assign({}, t.$route.query, {
										page: e.index + 1
									})
								}
							}
						}, [t._v(t._s(e.content))]) : n("a", {
							class: t.pageLinkClass,
							attrs: {
								tabindex: "0"
							},
							on: {
								click: function(n) {
									return t.handlePageSelected(e.index + 1)
								},
								keyup: function(n) {
									return !n.type.indexOf("key") && t._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : t.handlePageSelected(
										e.index + 1)
								}
							}
						}, [t._v(t._s(e.content))])]], 2)
					})), t._v(" "), t.lastPageSelected() && t.hidePrevNext ? t._e() : n("li", {
						class: [t.nextClass, t.lastPageSelected() ? t.disabledClass : ""]
					}, [t.prefix ? n("nuxt-link", {
						class: t.nextLinkClass,
						attrs: {
							tag: "a",
							tabindex: t.lastPageSelected() ? -1 : 0,
							to: {
								query: Object.assign({}, t.$route.query, {
									page: t.$route.query.page ? t.$route.query.page < t.pageCount - 1 ? t.$route.query.page - 0 + 1 :
										t.pageCount : 2
								})
							}
						}
					}, [n("a", {
						domProps: {
							innerHTML: t._s(t.nextText)
						}
					})]) : n("a", {
						class: t.nextLinkClass,
						attrs: {
							tabindex: t.lastPageSelected() ? -1 : 0
						},
						domProps: {
							innerHTML: t._s(t.nextText)
						},
						on: {
							click: function(e) {
								return t.nextPage()
							},
							keyup: function(e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.nextPage()
							}
						}
					})], 1), t._v(" "), t.firstLastButton ? n("li", {
						class: [t.pageClass, t.lastPageSelected() ? t.disabledClass : ""]
					}, [n("a", {
						class: t.pageLinkClass,
						attrs: {
							tabindex: t.lastPageSelected() ? -1 : 0
						},
						domProps: {
							innerHTML: t._s(t.lastButtonText)
						},
						on: {
							click: function(e) {
								return t.selectLastPage()
							},
							keyup: function(e) {
								return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.selectLastPage()
							}
						}
					})]) : t._e()], 2)
				}), [], !1, null, "51c29926", null).exports,
				l = {
					name: "Page",
					data: function() {
						return {
							page: 1
						}
					},
					props: {
						total: {
							type: Number,
							default: 0
						},
						pageSize: {
							type: Number,
							default: 10
						},
						currentIndex: {
							type: Number,
							default: 0
						},
						pageChange: {
							type: Function,
							default: function() {}
						}
					},
					methods: {
						functionName: function(t) {
							this.page = t, this.pageChange(t)
						}
					},
					components: {
						LPaginate: o
					},
					beforeMount: function() {
						this.page = this.currentIndex
					},
					computed: {
						pages: function() {
							var t = Math.ceil(this.total / this.pageSize);
							return t
						}
					},
					watch: {
						currentIndex: function(t) {
							this.page = t
						}
					}
				},
				d = (n(282), Object(c.a)(l, (function() {
					var t = this.$createElement,
						e = this._self._c || t;
					return this.pages > 1 ? e("div", {
						staticClass: "page-component"
					}, [e("client-only", [e("LPaginate", {
						attrs: {
							pageCount: this.pages,
							clickHandler: this.functionName,
							prevText: "<",
							nextText: ">",
							value: this.page,
							containerClass: "page-container",
							prefix: !0
						}
					})], 1)], 1) : this._e()
				}), [], !1, null, null, null));
			e.a = d.exports
		},
		313: function(t, e, n) {
			"use strict";
			var r = n(283);
			n.n(r).a
		},
		315: function(t, e, n) {
			"use strict";
			var r = n(284);
			n.n(r).a
		},
		316: function(t, e, n) {
			"use strict";
			var r = n(285);
			n.n(r).a
		},
		317: function(t, e, n) {},
		318: function(t, e, n) {},
		381: function(t, e, n) {
			"use strict";
			var r = {
					name: "cards",
					data: function() {
						return {}
					},
					props: ["cardsList"],
					components: {},
					computed: {},
					mounted: function() {},
					methods: {}
				},
				c = (n(313), n(20)),
				component = Object(c.a)(r, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "cards"
					}, [n("ul", {
						staticClass: "qustion-list"
					}, t._l(t.cardsList, (function(e) {
						return n("li", {
							key: e.id,
							class: 1 === e.id || 4 === e.id ? "center_li" : ""
						}, [n("a", {
							attrs: {
								href: e.href,
								target: "blank"
							}
						}, [n("div", {
							staticClass: "left_icon"
						}, [n("img", {
							attrs: {
								src: e.img,
								alt: ""
							}
						})]), t._v(" "), n("div", {
							staticClass: "right_intr"
						}, [n("p", {
							staticClass: "pro"
						}, [t._v(t._s(e.pro))]), t._v(" "), n("p", {
							staticClass: "intr"
						}, [t._v(t._s(e.intr))])]), t._v(" "), n("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: e.link,
								expression: "item.link"
							}],
							staticClass: "right_link"
						}, [n("p", [t._v(t._s(e.link))])])])])
					})), 0)])
				}), [], !1, null, "4d0ffef5", null);
			e.a = component.exports
		},
		382: function(t, e, n) {
			"use strict";
			var r = {
					name: "companyList",
					data: function() {
						return {
							showFlag: [!0, !0, !0, !0, !0, !0, !0, !0]
						}
					},
					props: ["companyList"],
					components: {},
					computed: {},
					mounted: function() {},
					methods: {
						getImgUrl: function(t) {
							if (t) return "https://www.landray.com.cn/api/" + t.substring(1)
						},
						toggleFalse: function(t) {
							this.showFlag[t] = !1, this.$forceUpdate()
						},
						toggleTrue: function(t) {
							this.showFlag[t] = !0, this.$forceUpdate()
						}
					}
				},
				c = (n(315), n(20)),
				component = Object(c.a)(r, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "companyList"
					}, [n("ul", {
						staticClass: "clearfix"
					}, [t._l(t.companyList, (function(e, r) {
						return [e.relatedUrl && t.$matchHttpUrl(e.relatedUrl) ? n("a", {
							key: r,
							attrs: {
								href: e.relatedUrl,
								target: "_blank"
							}
						}, [n("li", {
							on: {
								click: function(n) {
									return t.$clickListener("case" == t.$route.name ? "SolutionCaseLink" : "HomeRecCase", e.customName)
								}
							}
						}, [n("div", {
							staticClass: "companylist-wrap",
							class: {
								active: 1 == t.showFlag[r]
							},
							on: {
								mouseenter: function(e) {
									return t.toggleFalse(r)
								},
								mouseleave: function(e) {
									return t.toggleTrue(r)
								}
							}
						}, [n("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: t.showFlag[r],
								expression: "showFlag[index]"
							}],
							staticClass: "companylist-normal"
						}, [n("div", {
							staticClass: "companylist-img"
						}, [n("img", {
							attrs: {
								src: t.getImgUrl(e.custFilePath),
								alt: ""
							}
						})]), t._v(" "), n("span", {
							staticClass: "title"
						}, [t._v(t._s(e.industry))])]), t._v(" "), n("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: !t.showFlag[r],
								expression: "!showFlag[index]"
							}],
							staticClass: "companylist-hover-desc"
						}, [n("h3", {
							staticClass: "companylist-tit"
						}, [t._v(t._s(e.customName))]), t._v(" "), n("p", {
							staticClass: "companylist-num"
						}, [t._v(t._s(e.scale) + "人")]), t._v(" "), n("p", {
							staticClass: "companylist-desc"
						}, [t._v(t._s(e.requirement))])])])])]) : n("nuxt-link", {
							key: r,
							attrs: {
								tag: "a",
								to: "/example/" + e.id
							}
						}, [n("li", {
							on: {
								click: function(n) {
									return t.$clickListener("case" == t.$route.name ? "SolutionCaseLink" : "HomeRecCase", e.customName)
								}
							}
						}, [n("div", {
							staticClass: "companylist-wrap",
							class: {
								active: 1 == t.showFlag[r]
							},
							on: {
								mouseenter: function(e) {
									return t.toggleFalse(r)
								},
								mouseleave: function(e) {
									return t.toggleTrue(r)
								}
							}
						}, [n("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: t.showFlag[r],
								expression: "showFlag[index]"
							}],
							staticClass: "companylist-normal"
						}, [n("div", {
							staticClass: "companylist-img"
						}, [n("img", {
							attrs: {
								src: t.getImgUrl(e.custFilePath),
								alt: ""
							}
						})]), t._v(" "), n("span", {
							staticClass: "title"
						}, [t._v(t._s(e.industry))])]), t._v(" "), n("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: !t.showFlag[r],
								expression: "!showFlag[index]"
							}],
							staticClass: "companylist-hover-desc"
						}, [n("h3", {
							staticClass: "companylist-tit"
						}, [t._v(t._s(e.customName))]), t._v(" "), n("p", {
							staticClass: "companylist-num"
						}, [t._v(t._s(e.scale) + "人")]), t._v(" "), n("p", {
							staticClass: "companylist-desc"
						}, [t._v(t._s(e.requirement))])])])])])]
					}))], 2)])
				}), [], !1, null, "a5a6e434", null);
			e.a = component.exports
		},
		383: function(t, e, n) {
			"use strict";
			var r = {
					name: "cardsStatus",
					props: {
						cardsStaList: {
							type: Array,
							default: function() {
								return []
							}
						}
					},
					data: function() {
						return {}
					}
				},
				c = (n(316), n(20)),
				component = Object(c.a)(r, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "cards-status"
					}, [n("div", {
						staticClass: "cards-status-wrap"
					}, t._l(t.cardsStaList, (function(e, r) {
						return n("div", {
							key: r,
							staticClass: "cards-status-item",
							class: {
								horizantal: 0 == e.status, vertical: 1 == e.status, col2: 2 == e.col, col3: 3 == e.col, col4: 4 ==
									e.col, col6: 6 == e.col
							}
						}, [n("div", [n("div", {
							staticClass: "cards-status-img"
						}, [n("img", {
							attrs: {
								src: e.filepath,
								alt: "图片"
							}
						})]), t._v(" "), n("div", {
							staticClass: "cards-status-info"
						}, [n("div", [n("h3", [t._v(t._s(e.name))]), t._v(" "), n("p", [t._v(t._s(e.brief))])])])])])
					})), 0)])
				}), [], !1, null, "1a0134d3", null);
			e.a = component.exports
		},
		474: function(t, e) {
			t.exports =
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////9SnXPCAAAAFnRSTlMADt7RtgXwoYBkGPbmy1MmqotImDR3alzaagAAAMJJREFUOMuFklkShCAMBQMKCLK45v5HndJSJs48tX/TJGShjWXWNq10hxp4p72LN3yQsbC9f0qx8JeAhFEIHgmJ+bmGFUJvoCCYgBClMAKh5ZdfdiLeEaDIOKROuiGMFz1AjD4FrbCR+WQgjHv7poo/hpmWa7WJK84QqbT15HyBO9dZ1QXHOZydyIHL9cUgDhPi6CBoLESqBs7Ri2ZbJGg5cweEmSTe/lUodCEMLIAnljVqUmJyqvk7wpS11b1txr3+Bx/AJSRKDtyXAAAAAElFTkSuQmCC"
		},
		475: function(t, e, n) {
			t.exports = n.p + "img/d5cbfce.png"
		},
		476: function(t, e, n) {
			t.exports = n.p + "img/05f1747.png"
		},
		477: function(t, e, n) {
			t.exports = n.p + "img/82b9979.png"
		},
		478: function(t, e, n) {
			t.exports = n.p + "img/6d9a38a.png"
		},
		479: function(t, e, n) {
			t.exports = n.p + "img/5a06267.png"
		},
		480: function(t, e, n) {
			t.exports = n.p + "img/7ecfa0e.png"
		},
		481: function(t, e, n) {
			t.exports = n.p + "img/cb67714.png"
		},
		482: function(t, e, n) {
			t.exports = n.p + "img/48ffd9d.png"
		},
		483: function(t, e, n) {
			t.exports = n.p + "img/c420637.png"
		},
		484: function(t, e, n) {
			t.exports = n.p + "img/9da6ba5.png"
		},
		485: function(t, e, n) {
			t.exports = n.p + "img/094b264.png"
		},
		486: function(t, e, n) {
			t.exports = n.p + "img/0afffd5.png"
		},
		487: function(t, e, n) {
			t.exports = n.p + "img/a263337.png"
		},
		488: function(t, e, n) {
			t.exports = n.p + "img/5a53aee.png"
		},
		489: function(t, e, n) {
			"use strict";
			var r = n(317);
			n.n(r).a
		},
		490: function(t, e, n) {
			"use strict";
			var r = n(318);
			n.n(r).a
		},
		643: function(t, e, n) {
			"use strict";
			n.r(e);
			var r, c = [function() {
					var t = this.$createElement,
						e = this._self._c || t;
					return e("p", [e("img", {
						attrs: {
							src: n(474),
							alt: ""
						}
					}), this._v(" 4006-222-312\n    ")])
				}, function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r("div", {
						staticClass: "preload"
					}, [r("img", {
						attrs: {
							src: n(475),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(476),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(477),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(478),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(479),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(480),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(481),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(482),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(483),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(484),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(485),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(486),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(487),
							width: "1",
							height: "1"
						}
					}), t._v(" "), r("img", {
						attrs: {
							src: n(488),
							width: "1",
							height: "1"
						}
					})])
				}],
				o = (n(28), n(13), n(40), n(30)),
				l = (n(37), n(5)),
				d = (n(38), n(203)),
				header = n(201),
				f = n(200),
				v = n(287),
				h = n(382),
				m = n(298),
				_ = n(381),
				y = n(383),
				k = n(210),
				x = {
					name: "LAccordion",
					data: function() {
						return {
							activeIndex: 0,
							moving: !1
						}
					},
					methods: {
						hoverHandle: function(t) {
							var e = this;
							this.moving || t === this.activeIndex || (this.activeIndex = t, this.moving = !0, clearTimeout(this.timeout),
								this.timeout = setTimeout((function() {
									e.moving = !1
								}), 500))
						}
					}
				},
				C = n(20),
				L = Object(C.a)(x, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						staticClass: "LAccordion"
					}, t._l(t.$slots, (function(e, r) {
						return n("div", {
							key: r,
							class: r == t.activeIndex ? "active" : "",
							on: {
								mouseover: function(e) {
									return t.hoverHandle(r)
								}
							}
						}, [t._t(r)], 2)
					})), 0)
				}), [], !1, null, null, null).exports,
				S = n(202),
				w = n(280),
				P = n(216),
				A = {
					name: "case",
					data: function() {
						return {
							shuffleImg: Object(P.a)(),
							totalNum: 0,
							downloadPlanInfo: {},
							downloadScaleInfo: {},
							paramCase: {
								tabId: 0,
								cur: 1,
								size: 1
							},
							navFlag: {
								type: "experience"
							},
							navIndex: 1,
							cardsLinkList: [],
							tabList: [],
							signList: {
								signActiveIndex: 0,
								desc: [{
									name: "大中型企业",
									id: "CASE_LARGE"
								}, {
									name: "成长型企业",
									id: "CASE_GROW"
								}]
							},
							hotList: {
								hotActiveIndex: 0,
								desc: [{
									name: "热门行业",
									id: "CASE_LARGE"
								}, {
									name: "热门场景",
									id: "CASE_GROW"
								}]
							},
							industrySelected: !1,
							scaleSelected: !1
						}
					},
					components: {
						Header: d.a,
						Footer: f.a,
						Cards: _.a,
						LAccordion: L,
						CompanyList: h.a,
						Downselector: m.a,
						sideBar: k.a,
						cardsStatus: y.a,
						Page: v.a
					},
					computed: {
						downloadAble: function() {
							return !(!this.industrySelected || !this.scaleSelected)
						}
					},
					methods: {
						getShuffleImg: function(t) {
							return n(217)("./" + this.shuffleImg[t])
						},
						totalItemChange: function(t, e, n) {
							var r = this;
							S.a.getPlanPageList(t, e, n).then((function(t) {
								r.cardsLinkList = t.data.content, r.cardsLinkList.forEach((function(t) {
									t.col = 3, t.status = 0
								}))
							})).catch((function(t) {
								console.log(t)
							}))
						},
						totalChange: function(t) {
							this.classId = t, this.totalItemChange(this.tabList[t].id, 1, 6)
						},
						hotChange: function(t, e) {
							this.$clickListener("SolutionHotTab", e), this.hotList.hotActiveIndex = t, this.$forceUpdate()
						},
						signItemChange: function(t) {
							var e = this;
							S.a.getCaseRec(1, t, 4).then((function(t) {
								e.companyList = t.data
							}))
						},
						signChange: function(t, e) {
							this.signList.signActiveIndex = t, this.signItemChange(e.id), this.$clickListener("SolutionCaseTab", e.name)
						},
						downloadPlan: function() {
							this.$clickListener("SolutionGetSolu");
							var link = document.createElement("a");
							link.style.display = "none", link.href = this.getImgUrl(this.downloadPlanInfo.filePath), link.download =
								this.downloadPlanInfo.fileName, document.body.appendChild(link), link.click(), window.URL.revokeObjectURL(
									link.href)
						},
						getImgUrl: function(t) {
							if (t) return "https://www.landray.com.cn/api/" + t.substring(1)
						},
						getScale: function(t) {
							"请选择公司规模" != t.name && (this.$clickListener("SolutionGetScale", t.name), this.scaleSelected = !0), this.downloadScaleInfo =
								t
						},
						getIndustry: function(t) {
							"请选择公司所在的行业" != t.name && (this.$clickListener("SolutionGetIndustry", t.name), this.industrySelected = !0),
								this.downloadPlanInfo = t
						},
						clickGain: function() {
							return this.industrySelected && "请选择公司所在的行业" != this.downloadPlanInfo.name ? this.scaleSelected && "请选择公司规模" !=
								this.downloadScaleInfo.name ? (w.a.$emit("alertFlag", !1), w.a.$emit("maskActive", !0), w.a.$emit(
									"windowActive", !0), w.a.$emit("windowIn", !0), w.a.$emit("gainBtn", !0), void w.a.$emit("selectVal",
									this.downloadPlanInfo)) : (w.a.$emit("maskActive", !0), w.a.$emit("alertFlag", "请选择规模"), void w.a.$emit(
									"alertIn", !0)) : (w.a.$emit("maskActive", !0), w.a.$emit("alertFlag", "请选择行业"), void w.a.$emit("alertIn",
									!0))
						}
					},
					asyncData: (r = Object(l.a)(regeneratorRuntime.mark((function t(e) {
						var n, r, c, l, d, f, v, h, m, _, y, k;
						return regeneratorRuntime.wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									if (n = "", r = "", e.nuxtState && e.nuxtState.data) try {
										n = e.nuxtState.data[0].industryList, r = e.nuxtState.data[0].companyScaleList
									} catch (t) {
										console.log(t)
									}
									if (n) {
										t.next = 9;
										break
									}
									return t.next = 6, S.a.getIndustry();
								case 6:
									(c = t.sent).data.unshift({
										name: "请选择公司所在的行业"
									}), n = c.data;
								case 9:
									if (r) {
										t.next = 15;
										break
									}
									return t.next = 12, S.a.getCompanyScale();
								case 12:
									(l = t.sent).data.unshift({
										name: "请选择公司规模"
									}), r = l.data;
								case 15:
									return t.next = 17, Promise.all([S.a.getPlanCategoryList(), S.a.getCaseRec(1, "CASE_LARGE", 6), S.a
										.getHotPlan("PLAN_HEAD_INDUSTRY"), S.a.getHotPlan()
									]);
								case 17:
									return d = t.sent, f = Object(o.a)(d, 4), v = f[0], h = f[1], m = f[2], _ = f[3], y = e.query.type ||
										v.data[0].id, t.next = 26, S.a.getPlanPageList(y, e.query.page || 1, 6);
								case 26:
									return (k = t.sent).data.content.forEach((function(t) {
											t.col = 3, t.status = 0
										})), console.log(r), t.t0 = y, t.t1 = v.data, t.t2 = k.data.content, t.t3 = m.data, t.t4 = _.data,
										t.t5 = h.data, t.t6 = n, t.t7 = r, t.t8 = k.data.totalElements, t.next = 40, Object(header.b)(e);
								case 40:
									return t.t9 = t.sent, t.next = 43, Object(header.c)(e);
								case 43:
									return t.t10 = t.sent, t.next = 46, Object(header.a)(e);
								case 46:
									return t.t11 = t.sent, t.abrupt("return", {
										classId: t.t0,
										tabList: t.t1,
										cardsLinkList: t.t2,
										hotIndustry: t.t3,
										hotScene: t.t4,
										companyList: t.t5,
										industryList: t.t6,
										companyScaleList: t.t7,
										totalNum: t.t8,
										headerList: t.t9,
										sidebarDate: t.t10,
										footerList: t.t11
									});
								case 48:
								case "end":
									return t.stop()
							}
						}), t)
					}))), function(t) {
						return r.apply(this, arguments)
					}),
					watchQuery: ["type", "page"],
					head: function() {
						return {
							title: "oa系统建设方案,oa系统解决方案,oa 解决方案-蓝凌OA系统",
							meta: [{
								hid: "keywords",
								name: "keywords",
								content: "OA解决方案,行业OA方案,业务OA方案,数字化方案,智能化方案,知识化方案"
							}, {
								hid: "description",
								name: "description",
								content: "蓝凌是国内数字化工作专业服务商,阿里钉钉唯一投资的OA厂商,阿里云知识管理与协同领域首家战略合作伙伴;19年专注智慧办公领域,致力为企业组织赋能创新,成功服务上万家500强及行业百强企业实现数字化转型,实现了智慧管理与高效办公的工作变革."
							}]
						}
					}
				},
				I = (n(489), n(490), Object(C.a)(A, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", {
						attrs: {
							id: "case"
						}
					}, [n("Header", {
						attrs: {
							headerList: t.headerList,
							navIndex: t.navIndex
						}
					}), t._v(" "), n("div", {
						staticClass: "case-banner"
					}, [n("div", {
						staticClass: "box-position-banner"
					}, [n("div", {
						staticClass: "box-position-banner-item"
					}, [n("Downselector", {
						attrs: {
							dataList: t.industryList
						},
						on: {
							change: t.getIndustry
						}
					})], 1), t._v(" "), n("div", {
						staticClass: "box-position-banner-item"
					}, [n("Downselector", {
						attrs: {
							dataList: t.companyScaleList
						},
						on: {
							change: t.getScale
						}
					})], 1), t._v(" "), n("div", {
						staticClass: "lr-btn case-btn",
						class: {
							disabled: !t.downloadAble
						},
						on: {
							click: function(e) {
								return t.clickGain()
							}
						}
					}, [t._v("免费提取专属方案")])])]), t._v(" "), n("div", {
						staticClass: "hot-case"
					}, [n("div", {
						staticClass: "hot-case-center"
					}, [n("div", {
						staticClass: "title"
					}, [t._v("华天费控平台的管理价值")]), t._v(" "), n("div", {
						staticClass: "case-tag"
					}, t._l(t.hotList.desc, (function(e, r) {
						return n("p", {
							key: r,
							staticClass: "case-tag-item",
							class: {
								active: t.hotList.hotActiveIndex == r
							},
							on: {
								click: function(n) {
									return t.hotChange(r, e.name)
								}
							}
						}, [t._v(t._s(e.name))])
					})), 0), t._v(" "), n("div", {
						staticClass: "case-intr hot-case-accordion"
					}, [n("LAccordion", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: 0 === t.hotList.hotActiveIndex,
							expression: "hotList.hotActiveIndex===0"
						}]
					}, t._l(t.hotIndustry.slice(0, 5), (function(e, r) {
						return n("div", {
							key: r,
							staticClass: "case-slide-item",
							style: {
								backgroundImage: e.fileHeadPath ? "url(" + t.getImgUrl(e.fileHeadPath) + ")" : "url(" + t.getShuffleImg(
									r) + ")"
							},
							attrs: {
								slot: r
							},
							slot: r
						}, [n("div", {
								staticClass: "before",
								style: {
									backgroundImage: e.fileHeadPath ? "url(" + t.getImgUrl(e.fileHeadPath) + ")" : "url(" + t
										.getShuffleImg(r) + ")"
								}
							}), t._v(" "), n("img", {
								attrs: {
									src: t.getImgUrl(e.fileWhiteLogoPath),
									alt: "",
									srcset: ""
								}
							}), t._v(" "), n("h3", [t._v(t._s(e.shortName))]), t._v(" "), n("h2", [t._v(t._s(e.name))]),
							t._v(" "), n("p", [t._v(t._s(e.brief))]), t._v(" "), e.relatedUrl && t.$matchHttpUrl(e.relatedUrl) ?
							n("a", {
								staticClass: "lr-btn",
								attrs: {
									href: e.relatedUrl,
									target: "_blank",
									rel: "noopener noreferrer"
								},
								nativeOn: {
									click: function(n) {
										return t.$clickListener("SolutionHotLink", e.shortName)
									}
								}
							}, [t._v("了解详情")]) : n("nuxt-link", {
								staticClass: "lr-btn",
								attrs: {
									tag: "a",
									to: "/case/" + e.id
								},
								nativeOn: {
									click: function(n) {
										return t.$clickListener("SolutionHotLink", e.shortName)
									}
								}
							}, [t._v("了解详情")])
						], 1)
					})), 0), t._v(" "), n("LAccordion", {
						directives: [{
							name: "show",
							rawName: "v-show",
							value: 1 === t.hotList.hotActiveIndex,
							expression: "hotList.hotActiveIndex===1"
						}]
					}, t._l(t.hotScene.slice(0, 5), (function(e, r) {
						return n("div", {
							key: r,
							staticClass: "case-slide-item",
							style: {
								backgroundImage: e.fileHeadPath ? "url(" + t.getImgUrl(e.fileHeadPath) + ")" : "url(" + t.getShuffleImg(
									5 + r) + ")"
							},
							attrs: {
								slot: r
							},
							slot: r
						}, [n("div", {
								staticClass: "before",
								style: {
									backgroundImage: e.fileHeadPath ? "url(" + t.getImgUrl(e.fileHeadPath) + ")" : "url(" + t
										.getShuffleImg(5 + r) + ")"
								}
							}), t._v(" "), n("img", {
								attrs: {
									src: t.getImgUrl(e.fileWhiteLogoPath),
									alt: "",
									srcset: ""
								}
							}), t._v(" "), n("h3", [t._v(t._s(e.shortName))]), t._v(" "), n("h2", [t._v(t._s(e.name))]),
							t._v(" "), n("p", [t._v(t._s(e.brief))]), t._v(" "), e.relatedUrl && t.$matchHttpUrl(e.relatedUrl) ?
							n("a", {
								staticClass: "lr-btn",
								attrs: {
									href: e.relatedUrl,
									target: "_blank",
									rel: "noopener noreferrer"
								},
								nativeOn: {
									click: function(n) {
										return t.$clickListener("SolutionHotLink", e.shortName)
									}
								}
							}, [t._v("了解详情")]) : t._e(), t._v(" "), n("nuxt-link", {
								staticClass: "lr-btn",
								attrs: {
									tag: "a",
									to: "/case/" + e.id
								},
								nativeOn: {
									click: function(n) {
										return t.$clickListener("SolutionHotLink", e.shortName)
									}
								}
							}, [t._v("了解详情")])
						], 1)
					})), 0)], 1)])]), t._v(" "), n("div", {
						staticClass: "all-case"
					}, [n("div", {
						staticClass: "all-case-center"
					}, [n("div", {
						staticClass: "title"
					}, [t._v("华天费控平台的管理价值")]), t._v(" "), n("ul", {
						staticClass: "tab-list clearfix"
					}, t._l(t.tabList, (function(e, r) {
						return n("li", {
							key: r,
							class: {
								active: t.classId == e.id
							}
						}, [n("nuxt-link", {
							attrs: {
								to: {
									query: {
										type: e.id
									}
								}
							},
							nativeOn: {
								click: function(n) {
									return t.$clickListener("SolutionTotalTab", e.shortName)
								}
							}
						}, [n("span", [t._v(t._s(e.shortName))])])], 1)
					})), 0), t._v(" "), n("div", {
						staticClass: "cards-link"
					}, [n("div", {
						staticClass: "cards-link-wrap clearfix"
					}, [t.cardsLinkList.length > 0 ? t._l(t.cardsLinkList, (function(e, r) {
						return n("div", {
							key: r,
							staticClass: "cards-link-item"
						}, [e.relatedUrl && t.$matchHttpUrl(e.relatedUrl) ? n("div", [n("a", {
								attrs: {
									href: e.relatedUrl,
									target: "_blank"
								},
								nativeOn: {
									click: function(n) {
										return t.$clickListener("SolutionTotalLink", e.shortName)
									}
								}
							}, [n("div", {
								staticClass: "cards-link-item-wrap"
							}, [n("div", {
								staticClass: "cards-link-img"
							}, [n("img", {
								attrs: {
									src: t.getImgUrl(e.filePath),
									alt: ""
								}
							})]), t._v(" "), n("div", {
								staticClass: "cards-link-info"
							}, [n("div", [n("h3", [t._v(t._s(e.shortName))]), t._v(" "), n("p", [t._v(t._s(e.brief))])])])])])]) :
							n("div", [n("nuxt-link", {
									key: r,
									attrs: {
										tag: "a",
										to: "/case/" + e.id
									},
									nativeOn: {
										click: function(n) {
											return t.$clickListener("SolutionTotalLink", e.shortName)
										}
									}
								}, [n("div", {
									staticClass: "cards-link-item-wrap"
								}, [n("div", {
									staticClass: "cards-link-img"
								}, [n("img", {
									attrs: {
										src: t.getImgUrl(e.filePath),
										alt: ""
									}
								})]), t._v(" "), n("div", {
									staticClass: "cards-link-info"
								}, [n("div", [n("h3", [t._v(t._s(e.shortName))]), t._v(" "), n("p", [t._v(t._s(e.brief))])])])])])],
								1)
						])
					})) : n("div", {
						staticClass: "no-result"
					}, [n("div", {
						staticClass: "error-img"
					}), t._v(" "), n("p", [t._v("未找到结果")])])], 2)])]), t._v(" "), t.totalNum > 0 ? n("div", {
						staticClass: "page-control"
					}, [n("Page", {
						attrs: {
							total: t.totalNum,
							pageSize: 6,
							currentIndex: t.$route.query.page - 0 || 1,
							prefix: "activity"
						}
					})], 1) : t._e()]), t._v(" "), n("div", {
						staticClass: "relation-ours"
					}, [n("h1", [t._v("联系我们，获取您所需的更多解决方案")]), t._v(" "), t._m(0), t._v(" "), n("p", [n("nuxt-link", {
						attrs: {
							tag: "a",
							to: {
								name: "relation_ours"
							}
						},
						nativeOn: {
							click: function(e) {
								return t.$clickListener("SolutionContact")
							}
						}
					}, [t._v("\n        更多联系方式\n        "), n("b", {
						staticClass: "right white"
					})])], 1)]), t._v(" "), n("div", {
						staticClass: "standard-case"
					}, [n("div", {
						staticClass: "standard-case-center"
					}, [n("p", {
						staticClass: "standard-case-title"
					}, [t._v("标杆案例")]), t._v(" "), n("div", {
						staticClass: "case-tag"
					}, t._l(t.signList.desc, (function(e, r) {
						return n("p", {
							key: r,
							staticClass: "case-tag-item",
							class: {
								active: t.signList.signActiveIndex == r
							},
							on: {
								click: function(n) {
									return t.signChange(r, e)
								}
							}
						}, [t._v(t._s(e.name))])
					})), 0), t._v(" "), n("CompanyList", {
						attrs: {
							companyList: t.companyList
						}
					}), t._v(" "), n("p", {
						staticClass: "more"
					}, [n("nuxt-link", {
						attrs: {
							tag: "a",
							to: {
								name: "example"
							}
						},
						nativeOn: {
							click: function(e) {
								return t.$clickListener("SolutionMore")
							}
						}
					}, [t._v("\n          更多案例\n          "), n("b", {
						staticClass: "right blue"
					})])], 1)], 1)]), t._v(" "), t._m(1), t._v(" "), n("sideBar", {
						attrs: {
							sidebarDate: t.sidebarDate
						}
					}), t._v(" "), n("Footer", {
						attrs: {
							navFlag: t.navFlag,
							footerList: t.footerList
						}
					}), t._v(" "), n("router-view")], 1)
				}), c, !1, null, null, null));
			e.default = I.exports
		}
	}
]);
