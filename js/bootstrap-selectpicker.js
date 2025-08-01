/*!
 * Bootstrap-select v1.14.0-beta3 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2022 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */
!(function (e, t) {
  void 0 === e && void 0 !== window && (e = window),
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(e.jQuery);
})(this, function (e) {
  !(function ($) {
    "use strict";
    var M = ["sanitize", "whiteList", "sanitizeFn"],
      W = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      P = {
        "*": [
          "class",
          "dir",
          "id",
          "lang",
          "role",
          "tabindex",
          "style",
          /^aria-[\w-]*$/i,
        ],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      B = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      R =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
      U = ["title", "placeholder"];
    function S(e, t, i) {
      if (i && "function" == typeof i) return i(e);
      for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++)
        for (
          var l = e[n].querySelectorAll("*"), r = 0, a = l.length;
          r < a;
          r++
        ) {
          var c = l[r],
            d = c.nodeName.toLowerCase();
          if (-1 === s.indexOf(d)) c.parentNode.removeChild(c);
          else
            for (
              var h = [].slice.call(c.attributes),
                p = [].concat(t["*"] || [], t[d] || []),
                u = 0,
                f = h.length;
              u < f;
              u++
            ) {
              var m = h[u];
              !(function (e, t) {
                var i = e.nodeName.toLowerCase();
                if (-1 !== $.inArray(i, t))
                  return (
                    -1 === $.inArray(i, W) ||
                    Boolean(e.nodeValue.match(B) || e.nodeValue.match(R))
                  );
                for (
                  var s = $(t).filter(function (e, t) {
                      return t instanceof RegExp;
                    }),
                    n = 0,
                    o = s.length;
                  n < o;
                  n++
                )
                  if (i.match(s[n])) return 1;
              })(m, p) && c.removeAttribute(m.nodeName);
            }
        }
    }
    function d(t) {
      var i,
        s = {};
      return (
        U.forEach(function (e) {
          (i = t.attr(e)) && (s[e] = i);
        }),
        !s.placeholder && s.title && (s.placeholder = s.title),
        s
      );
    }
    if (
      !("classList" in document.createElement("_")) &&
      "Element" in (i = window)
    ) {
      var t = "classList",
        e = "prototype",
        i = i.Element[e],
        s = Object,
        n = function () {
          var i = $(this);
          return {
            add: function (e) {
              return (
                (e = Array.prototype.slice.call(arguments).join(" ")),
                i.addClass(e)
              );
            },
            remove: function (e) {
              return (
                (e = Array.prototype.slice.call(arguments).join(" ")),
                i.removeClass(e)
              );
            },
            toggle: function (e, t) {
              return i.toggleClass(e, t);
            },
            contains: function (e) {
              return i.hasClass(e);
            },
          };
        };
      if (s.defineProperty) {
        var o = { get: n, enumerable: !0, configurable: !0 };
        try {
          s.defineProperty(i, t, o);
        } catch (e) {
          (void 0 !== e.number && -2146823252 !== e.number) ||
            ((o.enumerable = !1), s.defineProperty(i, t, o));
        }
      } else s[e].__defineGetter__ && i.__defineGetter__(t, n);
    }
    var l,
      r,
      a,
      c,
      o = document.createElement("_");
    function h(e) {
      if (null == this) throw new TypeError();
      var t = String(this);
      if (e && "[object RegExp]" == c.call(e)) throw new TypeError();
      var i = t.length,
        s = String(e),
        n = s.length,
        e = 1 < arguments.length ? arguments[1] : void 0,
        e = e ? Number(e) : 0,
        o = (e != e && (e = 0), Math.min(Math.max(e, 0), i));
      if (i < n + o) return !1;
      for (var l = -1; ++l < n; )
        if (t.charCodeAt(o + l) != s.charCodeAt(l)) return !1;
      return !0;
    }
    function y() {
      var e = this.selectpicker.main.data,
        t = (e =
          this.options.source.data || this.options.source.search
            ? Object.values(this.selectpicker.optionValuesDataMap)
            : e).filter(function (e) {
          return !!e.selected && (!this.options.hideDisabled || !e.disabled);
        }, this);
      if (this.options.source.data && !this.multiple && 1 < t.length) {
        for (var i = 0; i < t.length - 1; i++) t[i].selected = !1;
        t = [t[t.length - 1]];
      }
      return t;
    }
    function x(e) {
      for (
        var t, i = [], s = e || y.call(this), n = 0, o = s.length;
        n < o;
        n++
      )
        (t = s[n]).disabled || i.push(void 0 === t.value ? t.text : t.value);
      return this.multiple ? i : i.length ? i[0] : null;
    }
    o.classList.add("c1", "c2"),
      o.classList.contains("c2") ||
        ((l = DOMTokenList.prototype.add),
        (r = DOMTokenList.prototype.remove),
        (DOMTokenList.prototype.add = function () {
          Array.prototype.forEach.call(arguments, l.bind(this));
        }),
        (DOMTokenList.prototype.remove = function () {
          Array.prototype.forEach.call(arguments, r.bind(this));
        })),
      o.classList.toggle("c3", !1),
      o.classList.contains("c3") &&
        ((a = DOMTokenList.prototype.toggle),
        (DOMTokenList.prototype.toggle = function (e, t) {
          return 1 in arguments && !this.contains(e) == !t
            ? t
            : a.call(this, e);
        })),
      (o = null),
      (Object.values =
        "function" == typeof Object.values
          ? Object.values
          : function (t) {
              return Object.keys(t).map(function (e) {
                return t[e];
              });
            }),
      String.prototype.startsWith ||
        ((c = {}.toString),
        Object.defineProperty
          ? Object.defineProperty(String.prototype, "startsWith", {
              value: h,
              configurable: !0,
              writable: !0,
            })
          : (String.prototype.startsWith = h));
    var p = { useDefault: !1, _set: $.valHooks.select.set },
      E =
        (($.valHooks.select.set = function (e, t) {
          return (
            t && !p.useDefault && $(e).data("selected", !0),
            p._set.apply(this, arguments)
          );
        }),
        null),
      V = (function () {
        try {
          return new Event("change"), !0;
        } catch (e) {
          return !1;
        }
      })();
    function b(e, t, i, s) {
      for (
        var n = ["display", "subtext", "tokens"], o = !1, l = 0;
        l < n.length;
        l++
      ) {
        var r = n[l],
          a = e[r];
        if (
          a &&
          ((a = a.toString()),
          "display" === r && (a = a.replace(/<[^>]+>/g, "")),
          (a = (a = s ? u(a) : a).toUpperCase()),
          (o =
            "function" == typeof i
              ? i(a, t)
              : "contains" === i
              ? 0 <= a.indexOf(t)
              : a.startsWith(t)))
        )
          break;
      }
      return o;
    }
    function v(e) {
      return parseInt(e, 10) || 0;
    }
    $.fn.triggerNative = function (e) {
      var t,
        i = this[0];
      i.dispatchEvent &&
        (V
          ? (t = new Event(e, { bubbles: !0 }))
          : (t = document.createEvent("Event")).initEvent(e, !0, !1),
        i.dispatchEvent(t));
    };
    var j = {
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010a": "C",
        "\u010c": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010b": "c",
        "\u010d": "c",
        "\u010e": "D",
        "\u0110": "D",
        "\u010f": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011a": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011b": "e",
        "\u011c": "G",
        "\u011e": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011d": "g",
        "\u011f": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012a": "I",
        "\u012c": "I",
        "\u012e": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012b": "i",
        "\u012d": "i",
        "\u012f": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013b": "L",
        "\u013d": "L",
        "\u013f": "L",
        "\u0141": "L",
        "\u013a": "l",
        "\u013c": "l",
        "\u013e": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014a": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014b": "n",
        "\u014c": "O",
        "\u014e": "O",
        "\u0150": "O",
        "\u014d": "o",
        "\u014f": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015a": "S",
        "\u015c": "S",
        "\u015e": "S",
        "\u0160": "S",
        "\u015b": "s",
        "\u015d": "s",
        "\u015f": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016a": "U",
        "\u016c": "U",
        "\u016e": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016b": "u",
        "\u016d": "u",
        "\u016f": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017b": "Z",
        "\u017d": "Z",
        "\u017a": "z",
        "\u017c": "z",
        "\u017e": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017f": "s",
      },
      _ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      F = RegExp(
        "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]",
        "g"
      );
    function G(e) {
      return j[e];
    }
    function u(e) {
      return (e = e.toString()) && e.replace(_, G).replace(F, "");
    }
    (f = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
    }),
      (s = "(?:" + Object.keys(f).join("|") + ")"),
      (q = RegExp(s)),
      (K = RegExp(s, "g"));
    var f,
      q,
      K,
      k = function (e) {
        return q.test((e = null == e ? "" : "" + e)) ? e.replace(K, Q) : e;
      };
    function Q(e) {
      return f[e];
    }
    var Y = {
        32: " ",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
      },
      Z = 27,
      J = 13,
      w = 32,
      I = 9,
      C = 38,
      O = 40,
      m = window.Dropdown || bootstrap.Dropdown;
    function X() {
      var t;
      try {
        t = $.fn.dropdown.Constructor.VERSION;
      } catch (e) {
        t = m.VERSION;
      }
      return t;
    }
    var g = { success: !1, major: "3" };
    try {
      (g.full = (X() || "").split(" ")[0].split(".")),
        (g.major = g.full[0]),
        (g.success = !0);
    } catch (e) {}
    var ee = 0,
      A = ".bs.select",
      T = {
        DISABLED: "disabled",
        DIVIDER: "divider",
        SHOW: "open",
        DROPUP: "dropup",
        MENU: "dropdown-menu",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left",
        BUTTONCLASS: "btn-default",
        POPOVERHEADER: "popover-title",
        ICONBASE: "glyphicon",
        TICKICON: "glyphicon-ok",
      },
      z = { MENU: "." + T.MENU, DATA_TOGGLE: 'data-toggle="dropdown"' },
      D = {
        div: document.createElement("div"),
        span: document.createElement("span"),
        i: document.createElement("i"),
        subtext: document.createElement("small"),
        a: document.createElement("a"),
        li: document.createElement("li"),
        whitespace: document.createTextNode("\xa0"),
        fragment: document.createDocumentFragment(),
        option: document.createElement("option"),
      },
      te =
        ((D.selectedOption = D.option.cloneNode(!1)),
        D.selectedOption.setAttribute("selected", !0),
        (D.noResults = D.li.cloneNode(!1)),
        (D.noResults.className = "no-results"),
        D.a.setAttribute("role", "option"),
        (D.a.className = "dropdown-item"),
        (D.subtext.className = "text-muted"),
        (D.text = D.span.cloneNode(!1)),
        (D.text.className = "text"),
        (D.checkMark = D.span.cloneNode(!1)),
        new RegExp(C + "|" + O)),
      ie = new RegExp("^" + I + "$|" + Z),
      L = {
        li: function (e, t, i) {
          var s = D.li.cloneNode(!1);
          return (
            e &&
              (1 === e.nodeType || 11 === e.nodeType
                ? s.appendChild(e)
                : (s.innerHTML = e)),
            void 0 !== t && "" !== t && (s.className = t),
            null != i && s.classList.add("optgroup-" + i),
            s
          );
        },
        a: function (e, t, i) {
          var s = D.a.cloneNode(!0);
          return (
            e &&
              (11 === e.nodeType
                ? s.appendChild(e)
                : s.insertAdjacentHTML("beforeend", e)),
            void 0 !== t &&
              "" !== t &&
              s.classList.add.apply(s.classList, t.split(/\s+/)),
            i && s.setAttribute("style", i),
            s
          );
        },
        text: function (e, t) {
          var i,
            s,
            n = D.text.cloneNode(!1);
          if (
            (e.content
              ? (n.innerHTML = e.content)
              : ((n.textContent = e.text),
                e.icon &&
                  ((i = D.whitespace.cloneNode(!1)),
                  ((s = (!0 === t ? D.i : D.span).cloneNode(!1)).className =
                    this.options.iconBase + " " + e.icon),
                  D.fragment.appendChild(s),
                  D.fragment.appendChild(i)),
                e.subtext &&
                  (((s = D.subtext.cloneNode(!1)).textContent = e.subtext),
                  n.appendChild(s))),
            !0 === t)
          )
            for (; 0 < n.childNodes.length; )
              D.fragment.appendChild(n.childNodes[0]);
          else D.fragment.appendChild(n);
          return D.fragment;
        },
        label: function (e) {
          var t,
            i,
            s = D.text.cloneNode(!1);
          return (
            (s.innerHTML = e.display),
            e.icon &&
              ((t = D.whitespace.cloneNode(!1)),
              ((i = D.span.cloneNode(!1)).className =
                this.options.iconBase + " " + e.icon),
              D.fragment.appendChild(i),
              D.fragment.appendChild(t)),
            e.subtext &&
              (((i = D.subtext.cloneNode(!1)).textContent = e.subtext),
              s.appendChild(i)),
            D.fragment.appendChild(s),
            D.fragment
          );
        },
      },
      N = {
        fromOption: function (e, t) {
          var i;
          switch (t) {
            case "divider":
              i = "true" === e.getAttribute("data-divider");
              break;
            case "text":
              i = e.textContent;
              break;
            case "label":
              i = e.label;
              break;
            case "style":
              i = e.style.cssText;
              break;
            case "title":
              i = e.title;
              break;
            default:
              i = e.getAttribute(
                "data-" +
                  t.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function (e, t) {
                    return (t ? "-" : "") + e.toLowerCase();
                  })
              );
          }
          return i;
        },
        fromDataSource: function (e, t) {
          var i;
          switch (t) {
            case "text":
            case "label":
              i = e.text || e.value || "";
              break;
            default:
              i = e[t];
          }
          return i;
        },
      };
    function se(e, t) {
      e.length ||
        ((D.noResults.innerHTML = this.options.noneResultsText.replace(
          "{0}",
          '"' + k(t) + '"'
        )),
        this.$menuInner[0].firstChild.appendChild(D.noResults));
    }
    function ne(e) {
      return !(e.hidden || (this.options.hideDisabled && e.disabled));
    }
    function H(e, t) {
      var i = this;
      p.useDefault || (($.valHooks.select.set = p._set), (p.useDefault = !0)),
        (this.$element = $(e)),
        (this.$newElement = null),
        (this.$button = null),
        (this.$menu = null),
        (this.options = t),
        (this.selectpicker = {
          main: {
            data: [],
            optionQueue: D.fragment.cloneNode(!1),
            hasMore: !1,
          },
          search: { data: [], hasMore: !1 },
          current: {},
          view: {},
          optionValuesDataMap: {},
          isSearching: !1,
          keydown: {
            keyHistory: "",
            resetKeyHistory: {
              start: function () {
                return setTimeout(function () {
                  i.selectpicker.keydown.keyHistory = "";
                }, 800);
              },
            },
          },
        }),
        (this.sizeInfo = {}),
        "number" == typeof (e = this.options.windowPadding) &&
          (this.options.windowPadding = [e, e, e, e]),
        (this.val = H.prototype.val),
        (this.render = H.prototype.render),
        (this.refresh = H.prototype.refresh),
        (this.setStyle = H.prototype.setStyle),
        (this.selectAll = H.prototype.selectAll),
        (this.deselectAll = H.prototype.deselectAll),
        (this.destroy = H.prototype.destroy),
        (this.remove = H.prototype.remove),
        (this.show = H.prototype.show),
        (this.hide = H.prototype.hide),
        this.init();
    }
    function oe(e) {
      var r,
        a = arguments,
        c = e;
      if (([].shift.apply(a), !g.success)) {
        try {
          g.full = (X() || "").split(" ")[0].split(".");
        } catch (e) {
          H.BootstrapVersion
            ? (g.full = H.BootstrapVersion.split(" ")[0].split("."))
            : ((g.full = [g.major, "0", "0"]),
              console.warn(
                "There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",
                e
              ));
        }
        (g.major = g.full[0]), (g.success = !0);
      }
      if ("4" <= g.major) {
        var t = [];
        H.DEFAULTS.style === T.BUTTONCLASS &&
          t.push({ name: "style", className: "BUTTONCLASS" }),
          H.DEFAULTS.iconBase === T.ICONBASE &&
            t.push({ name: "iconBase", className: "ICONBASE" }),
          H.DEFAULTS.tickIcon === T.TICKICON &&
            t.push({ name: "tickIcon", className: "TICKICON" }),
          (T.DIVIDER = "dropdown-divider"),
          (T.SHOW = "show"),
          (T.BUTTONCLASS = "btn-light"),
          (T.POPOVERHEADER = "popover-header"),
          (T.ICONBASE = ""),
          (T.TICKICON = "bs-ok-default");
        for (var i = 0; i < t.length; i++) {
          e = t[i];
          H.DEFAULTS[e.name] = T[e.className];
        }
      }
      "4" < g.major && (z.DATA_TOGGLE = 'data-bs-toggle="dropdown"');
      var s = this.each(function () {
        var e = $(this);
        if (e.is("select")) {
          var t = e.data("selectpicker"),
            i = "object" == typeof c && c;
          if ((i.title && (i.placeholder = i.title), t)) {
            if (i)
              for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) &&
                  (t.options[s] = i[s]);
          } else {
            var n,
              o = e.data();
            for (n in o)
              Object.prototype.hasOwnProperty.call(o, n) &&
                -1 !== $.inArray(n, M) &&
                delete o[n];
            var l = $.extend(
              {},
              H.DEFAULTS,
              $.fn.selectpicker.defaults || {},
              d(e),
              o,
              i
            );
            (l.template = $.extend(
              {},
              H.DEFAULTS.template,
              $.fn.selectpicker.defaults
                ? $.fn.selectpicker.defaults.template
                : {},
              o.template,
              i.template
            )),
              (l.source = $.extend(
                {},
                H.DEFAULTS.source,
                $.fn.selectpicker.defaults
                  ? $.fn.selectpicker.defaults.source
                  : {},
                i.source
              )),
              e.data("selectpicker", (t = new H(this, l)));
          }
          "string" == typeof c &&
            (r = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c]);
        }
      });
      return void 0 !== r ? r : s;
    }
    (H.VERSION = "1.14.0-beta3"),
      (H.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function (e, t) {
          return 1 == e ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function (e, t) {
          return [
            1 == e
              ? "Limit reached ({n} item max)"
              : "Limit reached ({n} items max)",
            1 == t
              ? "Group limit reached ({n} item max)"
              : "Group limit reached ({n} items max)",
          ];
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        source: { pageSize: 40 },
        chunkSize: 40,
        doneButton: !1,
        doneButtonText: "Close",
        multipleSeparator: ", ",
        styleBase: "btn",
        style: T.BUTTONCLASS,
        size: "auto",
        title: null,
        placeholder: null,
        allowClear: !1,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: "contains",
        actionsBox: !1,
        iconBase: T.ICONBASE,
        tickIcon: T.TICKICON,
        showTick: !1,
        template: { caret: '<span class="caret"></span>' },
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !0,
        dropdownAlignRight: !1,
        windowPadding: 0,
        virtualScroll: 600,
        display: !1,
        sanitize: !0,
        sanitizeFn: null,
        whiteList: P,
      }),
      (H.prototype = {
        constructor: H,
        init: function () {
          var i = this,
            e = this.$element.attr("id"),
            t = this.$element[0],
            s = t.form;
          ee++,
            (this.selectId = "bs-select-" + ee),
            t.classList.add("bs-select-hidden"),
            (this.multiple = this.$element.prop("multiple")),
            (this.autofocus = this.$element.prop("autofocus")),
            t.classList.contains("show-tick") && (this.options.showTick = !0),
            (this.$newElement = this.createDropdown()),
            this.$element.after(this.$newElement).prependTo(this.$newElement),
            s &&
              null === t.form &&
              (s.id || (s.id = "form-" + this.selectId),
              t.setAttribute("form", s.id)),
            (this.$button = this.$newElement.children("button")),
            this.options.allowClear &&
              (this.$clearButton = this.$button.children(
                ".bs-select-clear-selected"
              )),
            (this.$menu = this.$newElement.children(z.MENU)),
            (this.$menuInner = this.$menu.children(".inner")),
            (this.$searchbox = this.$menu.find("input")),
            t.classList.remove("bs-select-hidden"),
            this.fetchData(function () {
              i.render(!0),
                i.buildList(),
                requestAnimationFrame(function () {
                  i.$element.trigger("loaded" + A);
                });
            }),
            !0 === this.options.dropdownAlignRight &&
              this.$menu[0].classList.add(T.MENURIGHT),
            void 0 !== e && this.$button.attr("data-id", e),
            this.checkDisabled(),
            this.clickListener(),
            4 < g.major && (this.dropdown = new m(this.$button[0])),
            this.options.liveSearch
              ? (this.liveSearchListener(),
                (this.focusedParent = this.$searchbox[0]))
              : (this.focusedParent = this.$menuInner[0]),
            this.setStyle(),
            this.setWidth(),
            this.options.container
              ? this.selectPosition()
              : this.$element.on("hide" + A, function () {
                  var e, t;
                  i.isVirtual() &&
                    ((t = (e = i.$menuInner[0]).firstChild.cloneNode(!1)),
                    e.replaceChild(t, e.firstChild),
                    (e.scrollTop = 0));
                }),
            this.$menu.data("this", this),
            this.$newElement.data("this", this),
            this.options.mobile && this.mobile(),
            this.$newElement.on({
              "hide.bs.dropdown": function (e) {
                i.$element.trigger("hide" + A, e);
              },
              "hidden.bs.dropdown": function (e) {
                i.$element.trigger("hidden" + A, e);
              },
              "show.bs.dropdown": function (e) {
                i.$element.trigger("show" + A, e);
              },
              "shown.bs.dropdown": function (e) {
                i.$element.trigger("shown" + A, e);
              },
            }),
            t.hasAttribute("required") &&
              this.$element.on("invalid" + A, function () {
                i.$button[0].classList.add("bs-invalid"),
                  i.$element
                    .on("shown" + A + ".invalid", function () {
                      i.$element
                        .val(i.$element.val())
                        .off("shown" + A + ".invalid");
                    })
                    .on("rendered" + A, function () {
                      this.validity.valid &&
                        i.$button[0].classList.remove("bs-invalid"),
                        i.$element.off("rendered" + A);
                    }),
                  i.$button.on("blur" + A, function () {
                    i.$element.trigger("focus").trigger("blur"),
                      i.$button.off("blur" + A);
                  });
              }),
            s &&
              $(s).on("reset" + A, function () {
                requestAnimationFrame(function () {
                  i.render();
                });
              });
        },
        createDropdown: function () {
          var e = this.multiple || this.options.showTick ? " show-tick" : "",
            t = this.multiple ? ' aria-multiselectable="true"' : "",
            i = "",
            s = this.autofocus ? " autofocus" : "";
          g.major < 4 &&
            this.$element.parent().hasClass("input-group") &&
            (i = " input-group-btn");
          var n = "",
            o = "",
            l = "",
            r = "",
            a = "";
          return (
            this.options.header &&
              (n =
                '<div class="' +
                T.POPOVERHEADER +
                '"><button type="button" class="close" aria-hidden="true">&times;</button>' +
                this.options.header +
                "</div>"),
            this.options.liveSearch &&
              (o =
                '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' +
                (null === this.options.liveSearchPlaceholder
                  ? ""
                  : ' placeholder="' +
                    k(this.options.liveSearchPlaceholder) +
                    '"') +
                ' role="combobox" aria-label="Search" aria-controls="' +
                this.selectId +
                '" aria-autocomplete="list"></div>'),
            this.multiple &&
              this.options.actionsBox &&
              (l =
                '<div class="bs-actionsbox"><div class="btn-group btn-group-sm"><button type="button" class="actions-btn bs-select-all btn ' +
                T.BUTTONCLASS +
                '">' +
                this.options.selectAllText +
                '</button><button type="button" class="actions-btn bs-deselect-all btn ' +
                T.BUTTONCLASS +
                '">' +
                this.options.deselectAllText +
                "</button></div></div>"),
            this.multiple &&
              this.options.doneButton &&
              (r =
                '<div class="bs-donebutton"><div class="btn-group"><button type="button" class="btn btn-sm ' +
                T.BUTTONCLASS +
                '">' +
                this.options.doneButtonText +
                "</button></div></div>"),
            this.options.allowClear &&
              (a =
                '<span class="close bs-select-clear-selected" title="' +
                this.options.deselectAllText +
                '"><span>&times;</span>'),
            (e =
              '<div class="dropdown bootstrap-select' +
              e +
              i +
              '"><button type="button" tabindex="-1" class="' +
              this.options.styleBase +
              ' dropdown-toggle" ' +
              ("static" === this.options.display
                ? 'data-display="static"'
                : "") +
              z.DATA_TOGGLE +
              s +
              ' role="combobox" aria-owns="' +
              this.selectId +
              '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">&nbsp;</div></div> </div>' +
              a +
              "</span>" +
              ("4" <= g.major
                ? ""
                : '<span class="bs-caret">' +
                  this.options.template.caret +
                  "</span>") +
              '</button><div class="' +
              T.MENU +
              " " +
              ("4" <= g.major ? "" : T.SHOW) +
              '">' +
              n +
              o +
              l +
              '<div class="inner ' +
              T.SHOW +
              '" role="listbox" id="' +
              this.selectId +
              '" tabindex="-1" ' +
              t +
              '><ul class="' +
              T.MENU +
              " inner " +
              ("4" <= g.major ? T.SHOW : "") +
              '" role="presentation"></ul></div>' +
              r +
              "</div></div>"),
            $(e)
          );
        },
        setPositionData: function () {
          (this.selectpicker.view.canHighlight = []),
            (this.selectpicker.view.size = 0),
            (this.selectpicker.view.firstHighlightIndex = !1);
          for (var e = 0; e < this.selectpicker.current.data.length; e++) {
            var t = this.selectpicker.current.data[e],
              i = !0;
            "divider" === t.type
              ? ((i = !1), (t.height = this.sizeInfo.dividerHeight))
              : "optgroup-label" === t.type
              ? ((i = !1), (t.height = this.sizeInfo.dropdownHeaderHeight))
              : (t.height = this.sizeInfo.liHeight),
              t.disabled && (i = !1),
              this.selectpicker.view.canHighlight.push(i),
              i &&
                (this.selectpicker.view.size++,
                (t.posinset = this.selectpicker.view.size),
                !1 === this.selectpicker.view.firstHighlightIndex &&
                  (this.selectpicker.view.firstHighlightIndex = e)),
              (t.position =
                (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) +
                t.height);
          }
        },
        isVirtual: function () {
          return (
            (!1 !== this.options.virtualScroll &&
              this.selectpicker.main.data.length >=
                this.options.virtualScroll) ||
            !0 === this.options.virtualScroll
          );
        },
        createView: function (y, e, t) {
          var x = this,
            i = 0;
          function E(e, t) {
            var i,
              s = x.selectpicker.current.data.length,
              n = [],
              o = !0,
              l = x.isVirtual();
            x.selectpicker.view.scrollTop = e;
            for (
              var r, a = x.options.chunkSize, c = Math.ceil(s / a) || 1, d = 0;
              d < c;
              d++
            ) {
              var h = d === c - 1 ? s : (d + 1) * a;
              if (((n[d] = [d * a + (d ? 1 : 0), h]), !s)) break;
              void 0 === i &&
                e - 1 <=
                  x.selectpicker.current.data[h - 1].position -
                    x.sizeInfo.menuInnerHeight &&
                (i = d);
            }
            if (
              (void 0 === i && (i = 0),
              (g = [
                x.selectpicker.view.position0,
                x.selectpicker.view.position1,
              ]),
              (p = Math.max(0, i - 1)),
              (f = Math.min(c - 1, i + 1)),
              (x.selectpicker.view.position0 =
                (!1 !== l && Math.max(0, n[p][0])) || 0),
              (x.selectpicker.view.position1 =
                !1 === l ? s : Math.min(s, n[f][1]) || 0),
              (p =
                g[0] !== x.selectpicker.view.position0 ||
                g[1] !== x.selectpicker.view.position1),
              void 0 !== x.activeElement &&
                (t &&
                  (x.activeElement !== x.selectedElement &&
                    x.defocusItem(x.activeElement),
                  (x.activeElement = void 0)),
                x.activeElement !== x.selectedElement &&
                  x.defocusItem(x.selectedElement)),
              void 0 !== x.prevActiveElement &&
                x.prevActiveElement !== x.activeElement &&
                x.prevActiveElement !== x.selectedElement &&
                x.defocusItem(x.prevActiveElement),
              t || p || x.selectpicker.current.hasMore)
            ) {
              if (
                ((f = x.selectpicker.view.visibleElements
                  ? x.selectpicker.view.visibleElements.slice()
                  : []),
                (x.selectpicker.view.visibleElements =
                  !1 === l
                    ? x.selectpicker.current.elements
                    : x.selectpicker.current.elements.slice(
                        x.selectpicker.view.position0,
                        x.selectpicker.view.position1
                      )),
                x.setOptionStatus(),
                (y || (!1 === l && t)) &&
                  ((g = f),
                  (r = x.selectpicker.view.visibleElements),
                  (o = !(
                    g.length === r.length &&
                    g.every(function (e, t) {
                      return e === r[t];
                    })
                  ))),
                (t || !0 === l) && o)
              ) {
                var p = x.$menuInner[0],
                  u = document.createDocumentFragment(),
                  f = p.firstChild.cloneNode(!1),
                  m = x.selectpicker.view.visibleElements,
                  v = [];
                p.replaceChild(f, p.firstChild);
                for (var g, d = 0, b = m.length; d < b; d++) {
                  var w,
                    k,
                    I = m[d];
                  x.options.sanitize &&
                    (w = I.lastChild) &&
                    (k =
                      x.selectpicker.current.data[
                        d + x.selectpicker.view.position0
                      ]) &&
                    k.content &&
                    !k.sanitized &&
                    (v.push(w), (k.sanitized = !0)),
                    u.appendChild(I);
                }
                x.options.sanitize &&
                  v.length &&
                  S(v, x.options.whiteList, x.options.sanitizeFn),
                  !0 === l
                    ? ((g =
                        0 === x.selectpicker.view.position0
                          ? 0
                          : x.selectpicker.current.data[
                              x.selectpicker.view.position0 - 1
                            ].position),
                      (o =
                        x.selectpicker.view.position1 > s - 1
                          ? 0
                          : x.selectpicker.current.data[s - 1].position -
                            x.selectpicker.current.data[
                              x.selectpicker.view.position1 - 1
                            ].position),
                      (p.firstChild.style.marginTop = g + "px"),
                      (p.firstChild.style.marginBottom = o + "px"))
                    : ((p.firstChild.style.marginTop = 0),
                      (p.firstChild.style.marginBottom = 0)),
                  p.firstChild.appendChild(u),
                  !0 === l &&
                    x.sizeInfo.hasScrollBar &&
                    ((f = p.firstChild.offsetWidth),
                    t &&
                    f < x.sizeInfo.menuInnerInnerWidth &&
                    x.sizeInfo.totalMenuWidth > x.sizeInfo.selectWidth
                      ? (p.firstChild.style.minWidth =
                          x.sizeInfo.menuInnerInnerWidth + "px")
                      : f > x.sizeInfo.menuInnerInnerWidth &&
                        ((x.$menu[0].style.minWidth = 0),
                        (g = p.firstChild.offsetWidth) >
                          x.sizeInfo.menuInnerInnerWidth &&
                          ((x.sizeInfo.menuInnerInnerWidth = g),
                          (p.firstChild.style.minWidth =
                            x.sizeInfo.menuInnerInnerWidth + "px")),
                        (x.$menu[0].style.minWidth = "")));
              }
              ((!y && x.options.source.data) ||
                (y && x.options.source.search)) &&
                x.selectpicker.current.hasMore &&
                i === c - 1 &&
                0 < e &&
                ((o =
                  Math.floor(
                    (i * x.options.chunkSize) / x.options.source.pageSize
                  ) + 2),
                x.fetchData(
                  function () {
                    x.render(), x.buildList(s, y), x.setPositionData(), E(e);
                  },
                  y ? "search" : "data",
                  o,
                  y ? x.selectpicker.search.previousValue : void 0
                ));
            }
            (x.prevActiveElement = x.activeElement),
              x.options.liveSearch
                ? y &&
                  t &&
                  (x.selectpicker.view.canHighlight[(l = 0)] ||
                    (l =
                      1 +
                      x.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                  (f = x.selectpicker.view.visibleElements[l]),
                  x.defocusItem(x.selectpicker.view.currentActive),
                  (x.activeElement = (
                    x.selectpicker.current.data[l] || {}
                  ).element),
                  x.focusItem(f))
                : x.$menuInner.trigger("focus");
          }
          (this.selectpicker.isSearching = y),
            (this.selectpicker.current = y
              ? this.selectpicker.search
              : this.selectpicker.main),
            this.setPositionData(),
            e &&
              (t
                ? (i = this.$menuInner[0].scrollTop)
                : x.multiple ||
                  ("number" ==
                    typeof (t = (
                      (e = x.$element[0]).options[e.selectedIndex] || {}
                    ).liIndex) &&
                    !1 !== x.options.size &&
                    (t = (e = x.selectpicker.main.data[t]) && e.position) &&
                    (i =
                      t -
                      (x.sizeInfo.menuInnerHeight + x.sizeInfo.liHeight) / 2))),
            E(i, !0),
            this.$menuInner
              .off("scroll.createView")
              .on("scroll.createView", function (e, t) {
                x.noScroll || E(this.scrollTop, t), (x.noScroll = !1);
              }),
            $(window)
              .off("resize" + A + "." + this.selectId + ".createView")
              .on(
                "resize" + A + "." + this.selectId + ".createView",
                function () {
                  x.$newElement.hasClass(T.SHOW) &&
                    E(x.$menuInner[0].scrollTop);
                }
              );
        },
        focusItem: function (e, t, i) {
          var s;
          e &&
            ((t =
              t ||
              this.selectpicker.current.data[
                this.selectpicker.current.elements.indexOf(this.activeElement)
              ]),
            (s = e.firstChild) &&
              (s.setAttribute("aria-setsize", this.selectpicker.view.size),
              s.setAttribute("aria-posinset", t.posinset),
              !0 !== i &&
                (this.focusedParent.setAttribute("aria-activedescendant", s.id),
                e.classList.add("active"),
                s.classList.add("active"))));
        },
        defocusItem: function (e) {
          e &&
            (e.classList.remove("active"),
            e.firstChild && e.firstChild.classList.remove("active"));
        },
        setPlaceholder: function () {
          var e,
            t,
            i,
            s,
            n,
            o,
            l,
            r = this,
            a = !1;
          return (
            (!this.options.placeholder && !this.options.allowClear) ||
              this.multiple ||
              (this.selectpicker.view.titleOption ||
                (this.selectpicker.view.titleOption =
                  document.createElement("option")),
              (e = this.$element[0]),
              (t = !(a = !0)),
              (i = !this.selectpicker.view.titleOption.parentNode),
              (s = e.selectedIndex),
              (n = e.options[s]),
              (o = (o = e.querySelector("select > *:not(:disabled)"))
                ? o.index
                : 0),
              (l =
                (l =
                  window.performance &&
                  window.performance.getEntriesByType("navigation")) && l.length
                  ? "back_forward" !== l[0].type
                  : 2 !== window.performance.navigation.type),
              i &&
                ((this.selectpicker.view.titleOption.className =
                  "bs-title-option"),
                (this.selectpicker.view.titleOption.value = ""),
                (t =
                  !n ||
                  (s === o &&
                    !1 === n.defaultSelected &&
                    void 0 === this.$element.data("selected")))),
              (!i && 0 === this.selectpicker.view.titleOption.index) ||
                e.insertBefore(
                  this.selectpicker.view.titleOption,
                  e.firstChild
                ),
              t && l
                ? (e.selectedIndex = 0)
                : "complete" !== document.readyState &&
                  window.addEventListener("pageshow", function () {
                    r.selectpicker.view.displayedValue !== e.value &&
                      r.render();
                  })),
            a
          );
        },
        fetchData: function (n, o, e, t) {
          (e = e || 1), (o = o || "data");
          var l,
            r = this,
            i = this.options.source[o];
          i
            ? ((this.options.virtualScroll = !0),
              "function" == typeof i
                ? i.call(
                    this,
                    function (e, t, i) {
                      var s =
                        r.selectpicker["search" === o ? "search" : "main"];
                      (s.hasMore = t),
                        (s.totalItems = i),
                        (l = r.buildData(e, o)),
                        n.call(r, l),
                        r.$element.trigger("fetched" + A);
                    },
                    e,
                    t
                  )
                : Array.isArray(i) && ((l = r.buildData(i, o)), n.call(r, l)))
            : ((l = this.buildData(!1, o)), n.call(r, l));
        },
        buildData: function (h, e) {
          var o = this,
            p = !1 === h ? N.fromOption : N.fromDataSource,
            u =
              ':not([hidden]):not([data-hidden="true"]):not([style*="display: none"])',
            f = [],
            l = this.selectpicker.main.data
              ? this.selectpicker.main.data.length
              : 0,
            m = 0,
            v = this.setPlaceholder() && !h ? 1 : 0,
            t =
              ("search" === e && (l = this.selectpicker.search.data.length),
              this.options.hideDisabled && (u += ":not(:disabled)"),
              h
                ? h.filter(ne, this)
                : this.$element[0].querySelectorAll("select > *" + u));
          function g(e) {
            var t = f[f.length - 1];
            (t && "divider" === t.type && (t.optID || e.optID)) ||
              (((e = e || {}).type = "divider"), f.push(e));
          }
          function b(e, t) {
            var i, s, n;
            ((t = t || {}).divider = p(e, "divider")),
              !0 === t.divider
                ? g({ optID: t.optID })
                : ((i = f.length + l),
                  (s = (s = p(e, "style")) ? k(s) : ""),
                  (n = (e.className || "") + (t.optgroupClass || "")),
                  t.optID && (n = "opt " + n),
                  (t.optionClass = n.trim()),
                  (t.inlineStyle = s),
                  (t.text = p(e, "text")),
                  (t.title = p(e, "title")),
                  (t.content = p(e, "content")),
                  (t.tokens = p(e, "tokens")),
                  (t.subtext = p(e, "subtext")),
                  (t.icon = p(e, "icon")),
                  (t.display = t.content || t.text),
                  (t.value = void 0 === e.value ? e.text : e.value),
                  (t.type = "option"),
                  (t.index = i),
                  (t.option = e.option || e),
                  (t.option.liIndex = i),
                  (t.selected = !!e.selected),
                  (t.disabled = t.disabled || !!e.disabled),
                  !1 !== h &&
                    (o.selectpicker.optionValuesDataMap[t.value]
                      ? (t = $.extend(
                          o.selectpicker.optionValuesDataMap[t.value],
                          t
                        ))
                      : (o.selectpicker.optionValuesDataMap[t.value] = t)),
                  f.push(t));
          }
          function i(e, t) {
            var i = t[e],
              s = !(e - 1 < v) && t[e - 1],
              t = t[e + 1],
              n = h
                ? i.children.filter(ne, this)
                : i.querySelectorAll("option" + u);
            if (n.length) {
              var o,
                l,
                r = {
                  display: k(p(w, "label")),
                  subtext: p(i, "subtext"),
                  icon: p(i, "icon"),
                  type: "optgroup-label",
                  optgroupClass: " " + (i.className || ""),
                  optgroup: i,
                };
              m++, s && g({ optID: m }), (r.optID = m), f.push(r);
              for (var a = 0, c = n.length; a < c; a++) {
                var d = n[a];
                0 === a && (l = (o = f.length - 1) + c),
                  b(d, {
                    headerIndex: o,
                    lastIndex: l,
                    optID: r.optID,
                    optgroupClass: r.optgroupClass,
                    disabled: i.disabled,
                  });
              }
              t && g({ optID: m });
            }
          }
          for (var s = t.length, n = v; n < s; n++) {
            var w = t[n],
              r = w.children;
            r && r.length ? i.call(this, n, t) : b.call(this, w, {});
          }
          switch (e) {
            case "data":
              this.selectpicker.main.data || (this.selectpicker.main.data = []),
                Array.prototype.push.apply(this.selectpicker.main.data, f),
                (this.selectpicker.current.data = this.selectpicker.main.data);
              break;
            case "search":
              Array.prototype.push.apply(this.selectpicker.search.data, f);
          }
          return f;
        },
        buildList: function (e, t) {
          var i = this,
            s = (t ? this.selectpicker.search : this.selectpicker.main).data,
            n = [],
            o = 0;
          (!i.options.showTick && !i.multiple) ||
            D.checkMark.parentNode ||
            ((D.checkMark.className =
              this.options.iconBase + " " + i.options.tickIcon + " check-mark"),
            D.a.appendChild(D.checkMark));
          for (var l = s.length, r = e || 0; r < l; r++) {
            var a,
              c = s[r],
              d = ((p = a = h = d = void 0), n),
              h = c,
              p = 0;
            switch (h.type) {
              case "divider":
                a = L.li(!1, T.DIVIDER, h.optID ? h.optID + "div" : void 0);
                break;
              case "option":
                (a = L.li(
                  L.a(L.text.call(i, h), h.optionClass, h.inlineStyle),
                  "",
                  h.optID
                )).firstChild && (a.firstChild.id = i.selectId + "-" + h.index);
                break;
              case "optgroup-label":
                a = L.li(
                  L.label.call(i, h),
                  "dropdown-header" + h.optgroupClass,
                  h.optID
                );
            }
            h.element ? (h.element.innerHTML = a.innerHTML) : (h.element = a),
              d.push(h.element),
              h.display && (p += h.display.length),
              h.subtext && (p += h.subtext.length),
              h.icon && (p += 1),
              o < p &&
                ((o = p), (i.selectpicker.view.widestOption = d[d.length - 1]));
          }
          e
            ? t
              ? Array.prototype.push.apply(this.selectpicker.search.elements, n)
              : (Array.prototype.push.apply(this.selectpicker.main.elements, n),
                (this.selectpicker.current.elements =
                  this.selectpicker.main.elements))
            : t
            ? (this.selectpicker.search.elements = n)
            : (this.selectpicker.main.elements =
                this.selectpicker.current.elements =
                  n);
        },
        findLis: function () {
          return this.$menuInner.find(".inner > li");
        },
        render: function (e) {
          var i = this,
            t = this.$element[0],
            s = this.setPlaceholder() && 0 === t.selectedIndex,
            n = y.call(this),
            o = n.length,
            l = x.call(this, n),
            r = this.$button[0],
            a = r.querySelector(".filter-option-inner-inner"),
            c = document.createTextNode(this.options.multipleSeparator),
            d = D.fragment.cloneNode(!1),
            h = !1;
          if (
            (this.options.source.data &&
              e &&
              (n.map(function e(t) {
                t.selected
                  ? i.createOption(t, !0)
                  : t.children && t.children.length && t.children.map(e);
              }),
              t.appendChild(this.selectpicker.main.optionQueue),
              (s = s && 0 === t.selectedIndex)),
            r.classList.toggle(
              "bs-placeholder",
              i.multiple ? !o : !l && 0 !== l
            ),
            i.multiple ||
              1 !== n.length ||
              (i.selectpicker.view.displayedValue = l),
            "static" === this.options.selectedTextFormat)
          )
            d = L.text.call(this, { text: this.options.placeholder }, !0);
          else if (
            !1 ===
            (this.multiple &&
              -1 !== this.options.selectedTextFormat.indexOf("count") &&
              0 < o &&
              ((1 < (e = this.options.selectedTextFormat.split(">")).length &&
                o > e[1]) ||
                (1 === e.length && 2 <= o)))
          ) {
            if (!s) {
              for (var p = 0; p < o && p < 50; p++) {
                var u = n[p],
                  f = {};
                u &&
                  (this.multiple && 0 < p && d.appendChild(c.cloneNode(!1)),
                  u.title
                    ? (f.text = u.title)
                    : u.content && i.options.showContent
                    ? ((f.content = u.content.toString()), (h = !0))
                    : (i.options.showIcon && (f.icon = u.icon),
                      i.options.showSubtext &&
                        !i.multiple &&
                        u.subtext &&
                        (f.subtext = " " + u.subtext),
                      (f.text = u.text.trim())),
                  d.appendChild(L.text.call(this, f, !0)));
              }
              49 < o && d.appendChild(document.createTextNode("..."));
            }
          } else
            var t =
                ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"]):not([style*="display: none"])',
              l =
                (this.options.hideDisabled && (t += ":not(:disabled)"),
                this.$element[0].querySelectorAll(
                  "select > option" + t + ", optgroup" + t + " option" + t
                ).length),
              e =
                "function" == typeof this.options.countSelectedText
                  ? this.options.countSelectedText(o, l)
                  : this.options.countSelectedText,
              d = L.text.call(
                this,
                {
                  text: e
                    .replace("{0}", o.toString())
                    .replace("{1}", l.toString()),
                },
                !0
              );
          d.childNodes.length ||
            (d = L.text.call(
              this,
              {
                text: this.options.placeholder || this.options.noneSelectedText,
              },
              !0
            )),
            (r.title = d.textContent.replace(/<[^>]*>?/g, "").trim()),
            this.options.sanitize &&
              h &&
              S([d], i.options.whiteList, i.options.sanitizeFn),
            (a.innerHTML = ""),
            a.appendChild(d),
            g.major < 4 &&
              this.$newElement[0].classList.contains("bs3-has-addon") &&
              ((s = r.querySelector(".filter-expand")),
              ((t = a.cloneNode(!0)).className = "filter-expand"),
              s ? r.replaceChild(t, s) : r.appendChild(t)),
            this.$element.trigger("rendered" + A);
        },
        setStyle: function (e, t) {
          var i = this.$button[0],
            s = this.$newElement[0],
            n = this.options.style.trim();
          this.$element.attr("class") &&
            this.$newElement.addClass(
              this.$element
                .attr("class")
                .replace(
                  /selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,
                  ""
                )
            ),
            g.major < 4 &&
              (s.classList.add("bs3"),
              s.parentNode.classList &&
                s.parentNode.classList.contains("input-group") &&
                (s.previousElementSibling || s.nextElementSibling) &&
                (
                  s.previousElementSibling || s.nextElementSibling
                ).classList.contains("input-group-addon") &&
                s.classList.add("bs3-has-addon")),
            (s = e ? e.trim() : n),
            "add" == t
              ? s && i.classList.add.apply(i.classList, s.split(" "))
              : "remove" == t
              ? s && i.classList.remove.apply(i.classList, s.split(" "))
              : (n && i.classList.remove.apply(i.classList, n.split(" ")),
                s && i.classList.add.apply(i.classList, s.split(" ")));
        },
        liHeight: function (e) {
          if (
            e ||
            (!1 !== this.options.size && !Object.keys(this.sizeInfo).length)
          ) {
            var t,
              e = D.div.cloneNode(!1),
              i = D.div.cloneNode(!1),
              s = D.div.cloneNode(!1),
              n = document.createElement("ul"),
              o = D.li.cloneNode(!1),
              l = D.li.cloneNode(!1),
              r = D.a.cloneNode(!1),
              a = D.span.cloneNode(!1),
              c =
                this.options.header &&
                0 < this.$menu.find("." + T.POPOVERHEADER).length
                  ? this.$menu.find("." + T.POPOVERHEADER)[0].cloneNode(!0)
                  : null,
              d = this.options.liveSearch ? D.div.cloneNode(!1) : null,
              h =
                this.options.actionsBox &&
                this.multiple &&
                0 < this.$menu.find(".bs-actionsbox").length
                  ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0)
                  : null,
              p =
                this.options.doneButton &&
                this.multiple &&
                0 < this.$menu.find(".bs-donebutton").length
                  ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0)
                  : null,
              u = this.$element[0].options[0];
            if (
              ((this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth),
              (a.className = "text"),
              (r.className = "dropdown-item " + (u ? u.className : "")),
              (e.className = this.$menu[0].parentNode.className + " " + T.SHOW),
              (e.style.width = 0),
              "auto" === this.options.width && (i.style.minWidth = 0),
              (i.className = T.MENU + " " + T.SHOW),
              (s.className = "inner " + T.SHOW),
              (n.className =
                T.MENU + " inner " + ("4" <= g.major ? T.SHOW : "")),
              (o.className = T.DIVIDER),
              (l.className = "dropdown-header"),
              a.appendChild(document.createTextNode("\u200b")),
              this.selectpicker.current.data.length)
            )
              for (var f = 0; f < this.selectpicker.current.data.length; f++) {
                var m = this.selectpicker.current.data[f];
                if (
                  "option" === m.type &&
                  "none" !== $(m.element.firstChild).css("display")
                ) {
                  t = m.element;
                  break;
                }
              }
            else (t = D.li.cloneNode(!1)), r.appendChild(a), t.appendChild(r);
            l.appendChild(a.cloneNode(!0)),
              this.selectpicker.view.widestOption &&
                n.appendChild(
                  this.selectpicker.view.widestOption.cloneNode(!0)
                ),
              n.appendChild(t),
              n.appendChild(o),
              n.appendChild(l),
              c && i.appendChild(c),
              d &&
                ((u = document.createElement("input")),
                (d.className = "bs-searchbox"),
                (u.className = "form-control"),
                d.appendChild(u),
                i.appendChild(d)),
              h && i.appendChild(h),
              s.appendChild(n),
              i.appendChild(s),
              p && i.appendChild(p),
              e.appendChild(i),
              document.body.appendChild(e);
            (r = t.offsetHeight),
              (a = l ? l.offsetHeight : 0),
              (u = c ? c.offsetHeight : 0),
              (n = d ? d.offsetHeight : 0),
              (l = h ? h.offsetHeight : 0),
              (c = p ? p.offsetHeight : 0),
              (d = $(o).outerHeight(!0)),
              (h = window.getComputedStyle(i)),
              (p = i.offsetWidth),
              (o = {
                vert:
                  v(h.paddingTop) +
                  v(h.paddingBottom) +
                  v(h.borderTopWidth) +
                  v(h.borderBottomWidth),
                horiz:
                  v(h.paddingLeft) +
                  v(h.paddingRight) +
                  v(h.borderLeftWidth) +
                  v(h.borderRightWidth),
              }),
              (h = {
                vert: o.vert + v(h.marginTop) + v(h.marginBottom) + 2,
                horiz: o.horiz + v(h.marginLeft) + v(h.marginRight) + 2,
              });
            (s.style.overflowY = "scroll"),
              (s = i.offsetWidth - p),
              document.body.removeChild(e),
              (this.sizeInfo.liHeight = r),
              (this.sizeInfo.dropdownHeaderHeight = a),
              (this.sizeInfo.headerHeight = u),
              (this.sizeInfo.searchHeight = n),
              (this.sizeInfo.actionsHeight = l),
              (this.sizeInfo.doneButtonHeight = c),
              (this.sizeInfo.dividerHeight = d),
              (this.sizeInfo.menuPadding = o),
              (this.sizeInfo.menuExtras = h),
              (this.sizeInfo.menuWidth = p),
              (this.sizeInfo.menuInnerInnerWidth = p - o.horiz),
              (this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth),
              (this.sizeInfo.scrollBarWidth = s),
              (this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight),
              this.setPositionData();
          }
        },
        getSelectPosition: function () {
          var e,
            t = $(window),
            i = this.$newElement.offset(),
            s = $(this.options.container),
            s =
              (this.options.container && s.length && !s.is("body")
                ? (((e = s.offset()).top += parseInt(s.css("borderTopWidth"))),
                  (e.left += parseInt(s.css("borderLeftWidth"))))
                : (e = { top: 0, left: 0 }),
              this.options.windowPadding);
          (this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop()),
            (this.sizeInfo.selectOffsetBot =
              t.height() -
              this.sizeInfo.selectOffsetTop -
              this.sizeInfo.selectHeight -
              e.top -
              s[2]),
            (this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft()),
            (this.sizeInfo.selectOffsetRight =
              t.width() -
              this.sizeInfo.selectOffsetLeft -
              this.sizeInfo.selectWidth -
              e.left -
              s[1]),
            (this.sizeInfo.selectOffsetTop -= s[0]),
            (this.sizeInfo.selectOffsetLeft -= s[3]);
        },
        setMenuSize: function (e) {
          this.getSelectPosition();
          var t,
            i,
            s,
            n,
            o,
            l,
            r = this.sizeInfo.selectWidth,
            a = this.sizeInfo.liHeight,
            c = this.sizeInfo.headerHeight,
            d = this.sizeInfo.searchHeight,
            h = this.sizeInfo.actionsHeight,
            p = this.sizeInfo.doneButtonHeight,
            u = this.sizeInfo.dividerHeight,
            f = this.sizeInfo.menuPadding,
            m = 0;
          if (
            (this.options.dropupAuto &&
              ((l = a * this.selectpicker.current.data.length + f.vert),
              (l =
                this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot >
                  this.sizeInfo.menuExtras.vert &&
                l + this.sizeInfo.menuExtras.vert + 50 >
                  this.sizeInfo.selectOffsetBot),
              !0 === this.selectpicker.isSearching &&
                (l = this.selectpicker.dropup),
              this.$newElement.toggleClass(T.DROPUP, l),
              (this.selectpicker.dropup = l)),
            "auto" === this.options.size)
          )
            (l =
              3 < this.selectpicker.current.data.length
                ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2
                : 0),
              (i =
                this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert),
              (s = l + c + d + h + p),
              (o = Math.max(l - f.vert, 0)),
              (t =
                (n = i =
                  this.$newElement.hasClass(T.DROPUP)
                    ? this.sizeInfo.selectOffsetTop -
                      this.sizeInfo.menuExtras.vert
                    : i) -
                c -
                d -
                h -
                p -
                f.vert);
          else if (
            this.options.size &&
            "auto" != this.options.size &&
            this.selectpicker.current.elements.length > this.options.size
          ) {
            for (var v = 0; v < this.options.size; v++)
              "divider" === this.selectpicker.current.data[v].type && m++;
            (t = (i = a * this.options.size + m * u + f.vert) - f.vert),
              (n = i + c + d + h + p),
              (s = o = "");
          }
          this.$menu.css({
            "max-height": n + "px",
            overflow: "hidden",
            "min-height": s + "px",
          }),
            this.$menuInner.css({
              "max-height": t + "px",
              overflow: "hidden auto",
              "min-height": o + "px",
            }),
            (this.sizeInfo.menuInnerHeight = Math.max(t, 1)),
            this.selectpicker.current.data.length &&
              this.selectpicker.current.data[
                this.selectpicker.current.data.length - 1
              ].position > this.sizeInfo.menuInnerHeight &&
              ((this.sizeInfo.hasScrollBar = !0),
              (this.sizeInfo.totalMenuWidth =
                this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth)),
            "auto" === this.options.dropdownAlignRight &&
              this.$menu.toggleClass(
                T.MENURIGHT,
                this.sizeInfo.selectOffsetLeft >
                  this.sizeInfo.selectOffsetRight &&
                  this.sizeInfo.selectOffsetRight <
                    this.sizeInfo.totalMenuWidth - r
              ),
            this.dropdown &&
              this.dropdown._popper &&
              this.dropdown._popper.update();
        },
        setSize: function (e) {
          var t, i;
          this.liHeight(e),
            this.options.header && this.$menu.css("padding-top", 0),
            !1 !== this.options.size &&
              ((t = this),
              (i = $(window)),
              this.setMenuSize(),
              this.options.liveSearch &&
                this.$searchbox
                  .off("input.setMenuSize propertychange.setMenuSize")
                  .on(
                    "input.setMenuSize propertychange.setMenuSize",
                    function () {
                      return t.setMenuSize();
                    }
                  ),
              "auto" === this.options.size
                ? i
                    .off(
                      "resize" +
                        A +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        A +
                        "." +
                        this.selectId +
                        ".setMenuSize"
                    )
                    .on(
                      "resize" +
                        A +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        A +
                        "." +
                        this.selectId +
                        ".setMenuSize",
                      function () {
                        return t.setMenuSize();
                      }
                    )
                : this.options.size &&
                  "auto" != this.options.size &&
                  this.selectpicker.current.elements.length >
                    this.options.size &&
                  i.off(
                    "resize" +
                      A +
                      "." +
                      this.selectId +
                      ".setMenuSize scroll" +
                      A +
                      "." +
                      this.selectId +
                      ".setMenuSize"
                  )),
            this.createView(!1, !0, e);
        },
        setWidth: function () {
          var i = this;
          "auto" === this.options.width
            ? requestAnimationFrame(function () {
                i.$menu.css("min-width", "0"),
                  i.$element.on("loaded" + A, function () {
                    i.liHeight(), i.setMenuSize();
                    var e = i.$newElement.clone().appendTo("body"),
                      t = e
                        .css("width", "auto")
                        .children("button")
                        .outerWidth();
                    e.remove(),
                      (i.sizeInfo.selectWidth = Math.max(
                        i.sizeInfo.totalMenuWidth,
                        t
                      )),
                      i.$newElement.css("width", i.sizeInfo.selectWidth + "px");
                  });
              })
            : "fit" === this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "").addClass("fit-width"))
            : this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", this.options.width))
            : (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "")),
            this.$newElement.hasClass("fit-width") &&
              "fit" !== this.options.width &&
              this.$newElement[0].classList.remove("fit-width");
        },
        selectPosition: function () {
          this.$bsContainer = $('<div class="bs-container" />');
          function e(e) {
            var t = {},
              i =
                l.options.display ||
                (!!$.fn.dropdown.Constructor.Default &&
                  $.fn.dropdown.Constructor.Default.display);
            l.$bsContainer
              .addClass(e.attr("class").replace(/form-control|fit-width/gi, ""))
              .toggleClass(T.DROPUP, e.hasClass(T.DROPUP)),
              (s = e.offset()),
              r.is("body")
                ? (n = { top: 0, left: 0 })
                : (((n = r.offset()).top +=
                    parseInt(r.css("borderTopWidth")) - r.scrollTop()),
                  (n.left +=
                    parseInt(r.css("borderLeftWidth")) - r.scrollLeft())),
              (o = e.hasClass(T.DROPUP) ? 0 : e[0].offsetHeight),
              (g.major < 4 || "static" === i) &&
                ((t.top = s.top - n.top + o), (t.left = s.left - n.left)),
              (t.width = e[0].offsetWidth),
              l.$bsContainer.css(t);
          }
          var s,
            n,
            o,
            l = this,
            r = $(this.options.container);
          this.$button.on("click.bs.dropdown.data-api", function () {
            l.isDisabled() ||
              (e(l.$newElement),
              l.$bsContainer
                .appendTo(l.options.container)
                .toggleClass(T.SHOW, !l.$button.hasClass(T.SHOW))
                .append(l.$menu));
          }),
            $(window)
              .off(
                "resize" +
                  A +
                  "." +
                  this.selectId +
                  " scroll" +
                  A +
                  "." +
                  this.selectId
              )
              .on(
                "resize" +
                  A +
                  "." +
                  this.selectId +
                  " scroll" +
                  A +
                  "." +
                  this.selectId,
                function () {
                  l.$newElement.hasClass(T.SHOW) && e(l.$newElement);
                }
              ),
            this.$element.on("hide" + A, function () {
              l.$menu.data("height", l.$menu.height()), l.$bsContainer.detach();
            });
        },
        createOption: function (e, t) {
          var i,
            s = e.option || e;
          s &&
            1 !== s.nodeType &&
            ((i = (t ? D.selectedOption : D.option).cloneNode(!0)),
            void 0 !== s.value && (i.value = s.value),
            (i.textContent = s.text),
            (i.selected = !0),
            void 0 !== s.liIndex
              ? (i.liIndex = s.liIndex)
              : t || (i.liIndex = e.index),
            (e.option = i),
            this.selectpicker.main.optionQueue.appendChild(i));
        },
        setOptionStatus: function (e) {
          var t = this;
          if (
            ((t.noScroll = !1),
            t.selectpicker.view.visibleElements &&
              t.selectpicker.view.visibleElements.length)
          ) {
            for (
              var i = 0;
              i < t.selectpicker.view.visibleElements.length;
              i++
            ) {
              var s =
                t.selectpicker.current.data[i + t.selectpicker.view.position0];
              s.option && (!0 !== e && t.setDisabled(s), t.setSelected(s));
            }
            this.options.source.data &&
              this.$element[0].appendChild(this.selectpicker.main.optionQueue);
          }
        },
        setSelected: function (e, t) {
          t = void 0 === t ? e.selected : t;
          var i,
            s = e.element,
            n = void 0 !== this.activeElement,
            o = this.activeElement === s || (t && !this.multiple && !n);
          s &&
            (void 0 !== t &&
              ((e.selected = t), e.option && (e.option.selected = t)),
            t && this.options.source.data && this.createOption(e, !1),
            (i = s.firstChild),
            t && (this.selectedElement = s),
            s.classList.toggle("selected", t),
            o
              ? (this.focusItem(s, e),
                (this.selectpicker.view.currentActive = s),
                (this.activeElement = s))
              : this.defocusItem(s),
            i &&
              (i.classList.toggle("selected", t),
              t
                ? i.setAttribute("aria-selected", !0)
                : this.multiple
                ? i.setAttribute("aria-selected", !1)
                : i.removeAttribute("aria-selected")),
            o ||
              n ||
              !t ||
              void 0 === this.prevActiveElement ||
              ((e = this.prevActiveElement), this.defocusItem(e)));
        },
        setDisabled: function (e) {
          var t,
            i = e.disabled,
            e = e.element;
          e &&
            ((t = e.firstChild),
            e.classList.toggle(T.DISABLED, i),
            t &&
              ("4" <= g.major && t.classList.toggle(T.DISABLED, i),
              i
                ? (t.setAttribute("aria-disabled", i),
                  t.setAttribute("tabindex", -1))
                : (t.removeAttribute("aria-disabled"),
                  t.setAttribute("tabindex", 0))));
        },
        isDisabled: function () {
          return this.$element[0].disabled;
        },
        checkDisabled: function () {
          this.isDisabled()
            ? (this.$newElement[0].classList.add(T.DISABLED),
              this.$button.addClass(T.DISABLED).attr("aria-disabled", !0))
            : this.$button[0].classList.contains(T.DISABLED) &&
              (this.$newElement[0].classList.remove(T.DISABLED),
              this.$button.removeClass(T.DISABLED).attr("aria-disabled", !1));
        },
        clickListener: function () {
          var I = this,
            t = $(document);
          function e() {
            (I.options.liveSearch ? I.$searchbox : I.$menuInner).trigger(
              "focus"
            );
          }
          function i() {
            I.dropdown && I.dropdown._popper && I.dropdown._popper.state
              ? e()
              : requestAnimationFrame(i);
          }
          t.data("spaceSelect", !1),
            this.$button.on("keyup", function (e) {
              /(32)/.test(e.keyCode.toString(10)) &&
                t.data("spaceSelect") &&
                (e.preventDefault(), t.data("spaceSelect", !1));
            }),
            this.$newElement.on("show.bs.dropdown", function () {
              I.dropdown ||
                "4" !== g.major ||
                ((I.dropdown = I.$button.data("bs.dropdown")),
                (I.dropdown._menu = I.$menu[0]));
            }),
            this.$button.on("click.bs.dropdown.data-api", function (e) {
              var t, i, s;
              I.options.allowClear &&
                ((t = e.target),
                (i = I.$clearButton[0]),
                ((t = /MSIE|Trident/.test(window.navigator.userAgent)
                  ? document.elementFromPoint(e.clientX, e.clientY)
                  : t) !== i &&
                  t.parentElement !== i) ||
                  (e.stopImmediatePropagation(),
                  I.multiple
                    ? I.deselectAll()
                    : ((i = (t = I.$element[0]).value),
                      (e = t.selectedIndex),
                      (s =
                        !!(s = t.options[e]) &&
                        I.selectpicker.main.data[s.liIndex]) &&
                        I.setSelected(s, !1),
                      (t.selectedIndex = 0),
                      (E = [e, !1, i]),
                      I.$element.triggerNative("change")),
                  I.$newElement.hasClass(T.SHOW) &&
                    (I.options.liveSearch && I.$searchbox.trigger("focus"),
                    I.createView(!1)))),
                I.$newElement.hasClass(T.SHOW) || I.setSize();
            }),
            this.$element.on("shown" + A, function () {
              I.$menuInner[0].scrollTop !== I.selectpicker.view.scrollTop &&
                (I.$menuInner[0].scrollTop = I.selectpicker.view.scrollTop),
                3 < g.major ? requestAnimationFrame(i) : e();
            }),
            this.$menuInner.on("mouseenter", "li a", function (e) {
              var t = this.parentElement,
                i = I.isVirtual() ? I.selectpicker.view.position0 : 0,
                s = Array.prototype.indexOf.call(t.parentElement.children, t),
                s = I.selectpicker.current.data[s + i];
              I.focusItem(t, s, !0);
            }),
            this.$menuInner.on("click", "li a", function (e, t) {
              var i = $(this),
                s = I.$element[0],
                n = I.isVirtual() ? I.selectpicker.view.position0 : 0,
                o = I.selectpicker.current.data[i.parent().index() + n],
                n = o.element,
                l = x.call(I),
                r = s.selectedIndex,
                a = s.options[r],
                a = !!a && I.selectpicker.main.data[a.liIndex],
                c = !0;
              if (
                (I.multiple &&
                  1 !== I.options.maxOptions &&
                  e.stopPropagation(),
                e.preventDefault(),
                !I.isDisabled() && !i.parent().hasClass(T.DISABLED))
              ) {
                var e = o.option,
                  i = $(e),
                  d = e.selected,
                  h = I.selectpicker.current.data.find(function (e) {
                    return e.optID === o.optID && "optgroup-label" === e.type;
                  }),
                  p = h ? h.optgroup : void 0,
                  h = p instanceof Element ? N.fromOption : N.fromDataSource,
                  u = p && p.children,
                  f = parseInt(I.options.maxOptions),
                  h = (p && parseInt(h(p, "maxOptions"))) || !1;
                if (
                  ((t = n === I.activeElement ? !0 : t) ||
                    ((I.prevActiveElement = I.activeElement),
                    (I.activeElement = void 0)),
                  I.multiple && 1 !== f)
                ) {
                  if (
                    (I.setSelected(o, !d),
                    I.focusedParent.focus(),
                    !1 !== f || !1 !== h)
                  ) {
                    var n = f < y.call(I).length,
                      m = 0;
                    if (p && p.children)
                      for (var v = 0; v < p.children.length; v++)
                        p.children[v].selected && m++;
                    t = h < m;
                    if ((f && n) || (h && t))
                      if (f && 1 === f)
                        (s.selectedIndex = -1), I.setOptionStatus(!0);
                      else if (h && 1 === h) {
                        for (v = 0; v < u.length; v++) {
                          var g = u[v];
                          I.setSelected(
                            I.selectpicker.current.data[g.liIndex],
                            !1
                          );
                        }
                        I.setSelected(o, !0);
                      } else {
                        var d =
                            "string" == typeof I.options.maxOptionsText
                              ? [
                                  I.options.maxOptionsText,
                                  I.options.maxOptionsText,
                                ]
                              : I.options.maxOptionsText,
                          d = "function" == typeof d ? d(f, h) : d,
                          b = d[0].replace("{n}", f),
                          w = d[1].replace("{n}", h),
                          k = $('<div class="notify"></div>');
                        d[2] &&
                          ((b = b.replace("{var}", d[2][1 < f ? 0 : 1])),
                          (w = w.replace("{var}", d[2][1 < h ? 0 : 1]))),
                          I.$menu.append(k),
                          f &&
                            n &&
                            (k.append($("<div>" + b + "</div>")),
                            (c = !1),
                            I.$element.trigger("maxReached" + A)),
                          h &&
                            t &&
                            (k.append($("<div>" + w + "</div>")),
                            (c = !1),
                            I.$element.trigger("maxReachedGrp" + A)),
                          setTimeout(function () {
                            I.setSelected(o, !1);
                          }, 10),
                          k[0].classList.add("fadeOut"),
                          setTimeout(function () {
                            k.remove();
                          }, 1050);
                      }
                  }
                } else a && I.setSelected(a, !1), I.setSelected(o, !0);
                I.options.source.data &&
                  I.$element[0].appendChild(I.selectpicker.main.optionQueue),
                  !I.multiple || (I.multiple && 1 === I.options.maxOptions)
                    ? I.$button.trigger("focus")
                    : I.options.liveSearch && I.$searchbox.trigger("focus"),
                  !c ||
                    (!I.multiple && r === s.selectedIndex) ||
                    ((E = [e.index, i.prop("selected"), l]),
                    I.$element.triggerNative("change"));
              }
            }),
            this.$menu.on(
              "click",
              "li." +
                T.DISABLED +
                " a, ." +
                T.POPOVERHEADER +
                ", ." +
                T.POPOVERHEADER +
                " :not(.close)",
              function (e) {
                e.currentTarget == this &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  (I.options.liveSearch && !$(e.target).hasClass("close")
                    ? I.$searchbox
                    : I.$button
                  ).trigger("focus"));
              }
            ),
            this.$menuInner.on(
              "click",
              ".divider, .dropdown-header",
              function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  (I.options.liveSearch ? I.$searchbox : I.$button).trigger(
                    "focus"
                  );
              }
            ),
            this.$menu.on(
              "click",
              "." + T.POPOVERHEADER + " .close",
              function () {
                I.$button.trigger("click");
              }
            ),
            this.$searchbox.on("click", function (e) {
              e.stopPropagation();
            }),
            this.$menu.on("click", ".actions-btn", function (e) {
              (I.options.liveSearch ? I.$searchbox : I.$button).trigger(
                "focus"
              ),
                e.preventDefault(),
                e.stopPropagation(),
                $(this).hasClass("bs-select-all")
                  ? I.selectAll()
                  : I.deselectAll();
            }),
            this.$button
              .on("focus" + A, function (e) {
                var t = I.$element[0].getAttribute("tabindex");
                void 0 !== t &&
                  e.originalEvent &&
                  e.originalEvent.isTrusted &&
                  (this.setAttribute("tabindex", t),
                  I.$element[0].setAttribute("tabindex", -1),
                  (I.selectpicker.view.tabindex = t));
              })
              .on("blur" + A, function (e) {
                void 0 !== I.selectpicker.view.tabindex &&
                  e.originalEvent &&
                  e.originalEvent.isTrusted &&
                  (I.$element[0].setAttribute(
                    "tabindex",
                    I.selectpicker.view.tabindex
                  ),
                  this.setAttribute("tabindex", -1),
                  (I.selectpicker.view.tabindex = void 0));
              }),
            this.$element
              .on("change" + A, function () {
                I.render(), I.$element.trigger("changed" + A, E), (E = null);
              })
              .on("focus" + A, function () {
                I.options.mobile || I.$button[0].focus();
              });
        },
        liveSearchListener: function () {
          var p = this;
          this.$button.on("click.bs.dropdown.data-api", function () {
            p.$searchbox.val() &&
              (p.$searchbox.val(""),
              (p.selectpicker.search.previousValue = void 0));
          }),
            this.$searchbox.on(
              "click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",
              function (e) {
                e.stopPropagation();
              }
            ),
            this.$searchbox.on("input propertychange", function () {
              var t = p.$searchbox[0].value;
              if (
                ((p.selectpicker.search.elements = []),
                (p.selectpicker.search.data = []),
                t)
              )
                if (
                  ((p.selectpicker.search.previousValue = t),
                  p.options.source.search)
                )
                  p.fetchData(
                    function (e) {
                      p.render(),
                        p.buildList(void 0, !0),
                        (p.noScroll = !0),
                        p.$menuInner.scrollTop(0),
                        p.createView(!0),
                        se.call(p, e, t);
                    },
                    "search",
                    0,
                    t
                  );
                else {
                  var e = [],
                    i = t.toUpperCase(),
                    s = {},
                    n = [],
                    o = p._searchStyle(),
                    l = p.options.liveSearchNormalize;
                  l && (i = u(i));
                  for (var r = 0; r < p.selectpicker.main.data.length; r++) {
                    var a = p.selectpicker.main.data[r];
                    s[r] || (s[r] = b(a, i, o, l)),
                      s[r] &&
                        void 0 !== a.headerIndex &&
                        -1 === n.indexOf(a.headerIndex) &&
                        (0 < a.headerIndex &&
                          ((s[a.headerIndex - 1] = !0),
                          n.push(a.headerIndex - 1)),
                        (s[a.headerIndex] = !0),
                        n.push(a.headerIndex),
                        (s[a.lastIndex + 1] = !0)),
                      s[r] && "optgroup-label" !== a.type && n.push(r);
                  }
                  for (var r = 0, c = n.length; r < c; r++) {
                    var d = n[r],
                      h = n[r - 1],
                      a = p.selectpicker.main.data[d],
                      h = p.selectpicker.main.data[h];
                    ("divider" !== a.type ||
                      ("divider" === a.type &&
                        h &&
                        "divider" !== h.type &&
                        c - 1 !== r)) &&
                      (p.selectpicker.search.data.push(a),
                      e.push(p.selectpicker.main.elements[d]));
                  }
                  (p.activeElement = void 0),
                    (p.noScroll = !0),
                    p.$menuInner.scrollTop(0),
                    (p.selectpicker.search.elements = e),
                    p.createView(!0),
                    se.call(p, e, t);
                }
              else
                p.selectpicker.search.previousValue &&
                  (p.$menuInner.scrollTop(0), p.createView(!1));
            });
        },
        _searchStyle: function () {
          return this.options.liveSearchStyle || "contains";
        },
        val: function (t) {
          var e = this.$element[0];
          if (void 0 === t) return this.$element.val();
          var i = y.call(this),
            s = x.call(this, i);
          (E = [null, null, s]), (t = Array.isArray(t) ? t : [t]).map(String);
          for (var n = 0; n < i.length; n++) {
            var o = i[n];
            o && -1 === t.indexOf(String(o.value)) && this.setSelected(o, !1);
          }
          return (
            this.selectpicker.main.data.filter(function (e) {
              return (
                -1 !== t.indexOf(String(e.value)) &&
                (this.setSelected(e, !0), !0)
              );
            }, this),
            this.options.source.data &&
              e.appendChild(this.selectpicker.main.optionQueue),
            this.$element.trigger("changed" + A, E),
            this.$newElement.hasClass(T.SHOW) &&
              (this.multiple
                ? this.setOptionStatus(!0)
                : "number" ==
                    typeof (s = (e.options[e.selectedIndex] || {}).liIndex) &&
                  this.setSelected(this.selectpicker.current.data[s], !0)),
            this.render(),
            (E = null),
            this.$element
          );
        },
        changeAll: function (e) {
          if (this.multiple) {
            void 0 === e && (e = !0);
            var t = this.$element[0],
              i = 0,
              s = 0,
              n = x.call(this);
            t.classList.add("bs-select-hidden");
            for (
              var o = 0, l = this.selectpicker.current.data, r = l.length;
              o < r;
              o++
            ) {
              var a = l[o],
                c = a.option;
              c &&
                !a.disabled &&
                "divider" !== a.type &&
                (a.selected && i++,
                (c.selected = e),
                !0 === (a.selected = e) && s++);
            }
            t.classList.remove("bs-select-hidden"),
              i !== s &&
                (this.setOptionStatus(),
                (E = [null, null, n]),
                this.$element.triggerNative("change"));
          }
        },
        selectAll: function () {
          return this.changeAll(!0);
        },
        deselectAll: function () {
          return this.changeAll(!1);
        },
        toggle: function (e, t) {
          var i = void 0 === t;
          (e = e || window.event) && e.stopPropagation(),
            !1 === i &&
              ((e = this.$newElement[0].classList.contains(T.SHOW)),
              (i = (!0 === t && !1 === e) || (!1 === t && !0 === e))),
            i && this.$button.trigger("click.bs.dropdown.data-api");
        },
        open: function (e) {
          this.toggle(e, !0);
        },
        close: function (e) {
          this.toggle(e, !1);
        },
        keydown: function (e) {
          var t,
            i,
            s,
            n,
            o = $(this),
            l = o.hasClass("dropdown-toggle"),
            r = (l ? o.closest(".dropdown") : o.closest(z.MENU)).data("this"),
            a = r.findLis(),
            c = !1,
            l = e.which === I && !l && !r.options.selectOnTab,
            d = te.test(e.which) || l,
            h = r.$menuInner[0].scrollTop,
            p = !0 === r.isVirtual() ? r.selectpicker.view.position0 : 0;
          if (!(112 <= e.which && e.which <= 123))
            if (
              !(t = r.$menu.hasClass(T.SHOW)) &&
              (d ||
                (48 <= e.which && e.which <= 57) ||
                (96 <= e.which && e.which <= 105) ||
                (65 <= e.which && e.which <= 90)) &&
              (r.$button.trigger("click.bs.dropdown.data-api"),
              r.options.liveSearch)
            )
              r.$searchbox.trigger("focus");
            else {
              if (
                (e.which === Z &&
                  t &&
                  (e.preventDefault(),
                  r.$button
                    .trigger("click.bs.dropdown.data-api")
                    .trigger("focus")),
                d)
              ) {
                if (!a.length) return;
                -1 !==
                  (d = (i = r.activeElement)
                    ? Array.prototype.indexOf.call(i.parentElement.children, i)
                    : -1) && r.defocusItem(i),
                  e.which === C
                    ? (-1 !== d && d--,
                      d + p < 0 && (d += a.length),
                      r.selectpicker.view.canHighlight[d + p] ||
                        (-1 ===
                          (d =
                            r.selectpicker.view.canHighlight
                              .slice(0, d + p)
                              .lastIndexOf(!0) - p) &&
                          (d = a.length - 1)))
                    : (e.which !== O && !l) ||
                      (++d + p >= r.selectpicker.view.canHighlight.length &&
                        (d = r.selectpicker.view.firstHighlightIndex),
                      r.selectpicker.view.canHighlight[d + p] ||
                        (d =
                          d +
                          1 +
                          r.selectpicker.view.canHighlight
                            .slice(d + p + 1)
                            .indexOf(!0))),
                  e.preventDefault();
                var u = p + d;
                e.which === C
                  ? 0 === p && d === a.length - 1
                    ? ((r.$menuInner[0].scrollTop =
                        r.$menuInner[0].scrollHeight),
                      (u = r.selectpicker.current.elements.length - 1))
                    : (s = r.selectpicker.current.data[u]) &&
                      (c = (n = s.position - s.height) < h)
                  : (e.which !== O && !l) ||
                    (d === r.selectpicker.view.firstHighlightIndex
                      ? ((r.$menuInner[0].scrollTop = 0),
                        (u = r.selectpicker.view.firstHighlightIndex))
                      : (s = r.selectpicker.current.data[u]) &&
                        (c =
                          h < (n = s.position - r.sizeInfo.menuInnerHeight))),
                  (i = r.selectpicker.current.elements[u]),
                  (r.activeElement = (
                    r.selectpicker.current.data[u] || {}
                  ).element),
                  r.focusItem(i),
                  (r.selectpicker.view.currentActive = i),
                  c && (r.$menuInner[0].scrollTop = n),
                  (r.options.liveSearch ? r.$searchbox : o).trigger("focus");
              } else if (
                (!o.is("input") && !ie.test(e.which)) ||
                (e.which === w && r.selectpicker.keydown.keyHistory)
              ) {
                var f,
                  m = [];
                e.preventDefault(),
                  (r.selectpicker.keydown.keyHistory += Y[e.which]),
                  r.selectpicker.keydown.resetKeyHistory.cancel &&
                    clearTimeout(r.selectpicker.keydown.resetKeyHistory.cancel),
                  (r.selectpicker.keydown.resetKeyHistory.cancel =
                    r.selectpicker.keydown.resetKeyHistory.start()),
                  (f = r.selectpicker.keydown.keyHistory),
                  /^(.)\1+$/.test(f) && (f = f.charAt(0));
                for (var v = 0; v < r.selectpicker.current.data.length; v++) {
                  var g = r.selectpicker.current.data[v];
                  b(g, f, "startsWith", !0) &&
                    r.selectpicker.view.canHighlight[v] &&
                    m.push(g.element);
                }
                m.length &&
                  ((p = 0),
                  a.removeClass("active").find("a").removeClass("active"),
                  1 === f.length &&
                    (-1 === (p = m.indexOf(r.activeElement)) ||
                    p === m.length - 1
                      ? (p = 0)
                      : p++),
                  (l = m[p]),
                  (c =
                    0 < h - (s = r.selectpicker.main.data[l]).position
                      ? ((n = s.position - s.height), !0)
                      : ((n = s.position - r.sizeInfo.menuInnerHeight),
                        s.position > h + r.sizeInfo.menuInnerHeight)),
                  (i = r.selectpicker.main.elements[l]),
                  (r.activeElement = i),
                  r.focusItem(i),
                  i && i.firstChild.focus(),
                  c && (r.$menuInner[0].scrollTop = n),
                  o.trigger("focus"));
              }
              t &&
                ((e.which === w && !r.selectpicker.keydown.keyHistory) ||
                  e.which === J ||
                  (e.which === I && r.options.selectOnTab)) &&
                (e.which !== w && e.preventDefault(),
                (r.options.liveSearch && e.which === w) ||
                  (r.$menuInner.find(".active a").trigger("click", !0),
                  o.trigger("focus"),
                  r.options.liveSearch ||
                    (e.preventDefault(), $(document).data("spaceSelect", !0))));
            }
        },
        mobile: function () {
          (this.options.mobile = !0),
            this.$element[0].classList.add("mobile-device");
        },
        refresh: function () {
          var e = this,
            t = $.extend(
              {},
              this.options,
              d(this.$element),
              this.$element.data()
            );
          (this.options = t),
            this.options.source.data
              ? (this.render(), this.buildList())
              : this.fetchData(function () {
                  e.render(), e.buildList();
                }),
            this.checkDisabled(),
            this.setStyle(),
            this.setWidth(),
            this.setSize(!0),
            this.$element.trigger("refreshed" + A);
        },
        hide: function () {
          this.$newElement.hide();
        },
        show: function () {
          this.$newElement.show();
        },
        remove: function () {
          this.$newElement.remove(), this.$element.remove();
        },
        destroy: function () {
          this.$newElement.before(this.$element).remove(),
            (this.$bsContainer || this.$menu).remove(),
            this.selectpicker.view.titleOption &&
              this.selectpicker.view.titleOption.parentNode &&
              this.selectpicker.view.titleOption.parentNode.removeChild(
                this.selectpicker.view.titleOption
              ),
            this.$element
              .off(A)
              .removeData("selectpicker")
              .removeClass("bs-select-hidden selectpicker mobile-device"),
            $(window).off(A + "." + this.selectId);
        },
      });
    var le = $.fn.selectpicker;
    function re() {
      return g.major < 5
        ? $.fn.dropdown
          ? (
              $.fn.dropdown.Constructor._dataApiKeydownHandler ||
              $.fn.dropdown.Constructor.prototype.keydown
            ).apply(this, arguments)
          : void 0
        : m.dataApiKeydownHandler;
    }
    ($.fn.selectpicker = oe),
      ($.fn.selectpicker.Constructor = H),
      ($.fn.selectpicker.noConflict = function () {
        return ($.fn.selectpicker = le), this;
      }),
      $(document)
        .off("keydown.bs.dropdown.data-api")
        .on(
          "keydown.bs.dropdown.data-api",
          ":not(.bootstrap-select) > [" + z.DATA_TOGGLE + "]",
          re
        )
        .on(
          "keydown.bs.dropdown.data-api",
          ":not(.bootstrap-select) > .dropdown-menu",
          re
        )
        .on(
          "keydown" + A,
          ".bootstrap-select [" +
            z.DATA_TOGGLE +
            '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
          H.prototype.keydown
        )
        .on(
          "focusin.modal",
          ".bootstrap-select [" +
            z.DATA_TOGGLE +
            '], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
          function (e) {
            e.stopPropagation();
          }
        ),
      document.addEventListener("DOMContentLoaded", function () {
        $(".selectpicker").each(function () {
          var e = $(this);
          oe.call(e, e.data());
        });
      });
  })(e);
});
//# sourceMappingURL=bootstrap-select.min.js.map
