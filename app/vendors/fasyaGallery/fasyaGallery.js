(function (u) {
    u.fn.fasyaGallery = function (c) {
        c = jQuery.extend({
            settings_slideshowTime: "5",
            settings_slideshow: "off",
            settings_slideshowDontChangeOnHover: "on",
            settings_skin: "skin-default",
            settings_responsive: "on",
            settings_mode: "normal",
            design_ratio: "16:9",
            design_maxwidth: "1400",
            design_padding: "100",
            design_enableShadows: "on",
            settings_makeFunctional: 1,
            onChange: function(){}
        }, c);

        var returnobject = {
            active: null
        };

        return this.each(function () {
            function z() {
                v++;
                !("on" == c.settings_slideshowDontChangeOnHover && !0 == A) && v >= G && (B(), v = 0)
            }

            function u() {
                setTimeout(H, 100)
            }

            function I() {
                for (g =
                    0; g < f.length; g++) {
                    var a = g,
                        b = h.children().eq(a).children("canvas").eq(0)[0].getContext("2d"),
                        c = h.children().eq(a).children("canvas").width(),
                        a = h.children().eq(a).children("canvas").height(),
                        d = b.createLinearGradient(0, 0, 0, a+10);
                    b.clearRect(0, 0, c, a);
                    d.addColorStop(0, "rgba(0,0,0,0.2)");
                    d.addColorStop(0.1, "rgba(0,0,0,0)");
                    b.fillStyle = d;
                    b.fillRect(0, 0, c, a)
                }
            }

            function L() {
                var a = jQuery(this);
                a.parent().children().index(a) != n && (a.hasClass("nextItem") && B(), a.hasClass("prevItem") && H())
            }

            function J() {
                if (!1 == c.settings_makeFunctional) {
                    var a = !1,
                        b = document.URL,
                        f = b.indexOf("://") + 3,
                        g = b.indexOf("/", f),
                        b = b.substring(f, g); - 1 < b.indexOf("a") && (-1 < b.indexOf("c") && -1 < b.indexOf("o") && -1 < b.indexOf("l")) && (a = !0); - 1 < b.indexOf("o") && (-1 < b.indexOf("z") && -1 < b.indexOf("e") && -1 < b.indexOf("h") && -1 < b.indexOf("t")) && (a = !0); - 1 < b.indexOf("e") && (-1 < b.indexOf("v") && -1 < b.indexOf("n") && -1 < b.indexOf("a") && -1 < b.indexOf("t")) && (a = !0);
                    
                    if (!1 == a) return
                }
                a = "50%";
                0.5 * C > 0.5 * e && (a = 0.5 * e);
                D = {
                    width: a,
                    height: 0.5 * e * k / l,
                    "margin-left": -(0.5 * e) / 2,
                    "margin-top": -(0.5 * e * k / l) / 2
                };
                a =
                    "35%";
                0.35 * C > 0.35 * e && (a = 0.35 * e);
                p = {
                    width: a,
                    height: 0.35 * e * k / l,
                    "margin-left": -(0.35 * e) / 2,
                    "margin-top": -(0.35 * e * k / l) / 2
                };
                d.css({
                    height: 0.5 * e * k / l + c.design_padding
                })
            }

            function B(a) {
                var b = n + 1;
                0 < a && (b = a);
                b == q && (b = 0);
                "only-three" != j && f.eq(nextnextNr).addClass("nextnextItem non-animate");
                setTimeout(function () {
                    E(b)
                }, 10)
            }

            function H() {
                var a = n - 1; - 1 == a && (a = q - 1);
                E(a)
            }

            function E(a) {
                f = h.children();
                r = a - 1;
                0 > r && (r = f.length - 1);
                prevprevNr = r - 1;
                0 > prevprevNr && (prevprevNr = f.length - 1);
                s = a + 1;
                s > f.length -
                    1 && (s = 0);
                nextnextNr = s + 1;
                nextnextNr > f.length - 1 && (nextnextNr = 0);
                f.removeClass("prevItem").removeClass("currItem").removeClass("nextItem");
                f.removeClass("non-animate").removeClass("nextnextItem");
                w = f.eq(r);
                x = f.eq(a);
                y = f.eq(s);
                "only-two" != j && w.addClass("prevItem");
                x.addClass("currItem");
                returnobject.active = x.find('.imageId').attr('id');
                c.onChange.call(this, returnobject);
                y.addClass("nextItem");
                J();

                x.css(D);
                "only-two" != j && w.css(p);
                y.css(p);
                "on" == c.design_enableShadows && I();
                v = 0;
                n = a
            }

            function M() {
                A = !0
            }

            function N() {
                A = !1
            }

            function K() {
                jQuery(window).width();
                e = C = d.outerWidth();
                e > c.design_maxwidth &&
                    (e = c.design_maxwidth);
                320 > e && (e = 320);
                d.removeClass("under1100");
                d.removeClass("under800");
                1100 > e && d.addClass("under1100");
                800 > e && d.addClass("under800"); - 1 != n && (J(), x.css(D), w.css(p), y.css(p))
            }
            var d = jQuery(this),
                n = -1,
                r = 0,
                s = 0,
                x, w, y, D, p, q = 0,
                g = 0,
                C, e, l = 0,
                k = 0,
                v = 0,
                G, A = !1,
                j = "normal",
                h, m, f;
            c.design_maxwidth = parseInt(c.design_maxwidth, 10);
            c.design_padding = parseInt(c.design_padding, 10);
            c.settings_slideshowTime = parseInt(c.settings_slideshowTime, 10);
            G = c.settings_slideshowTime;
            !0 == is_ie8() && (c.design_enableShadows =
                "off"); - 1 == d.attr("class").indexOf("skin-") && d.addClass(c.settings_skin);
            d.hasClass("skin-default") && (c.settings_skin = "skin-default");
            m = c.design_ratio.split(":");
            l = m[0];
            k = m[1];
            q = d.children(".items").eq(0).children().length;
            3 > q && window.console && console.info("fasyaGallery:js - why less then 3 items");
            j = c.settings_mode;
            3 == q && "normal" == j && (j = "only-three");
            d.addClass("mode-" + j);
            m = d.children(".items");
            d.append('<div class="preloader"></div>');
            d.append('<div class="the-structure-holder"></div>');
            d.append('<div class="the-items"></div>');
            h = d.children(".the-items");
            for (g = 0; g < m.children().length; g++) {
                var t = m.children().eq(g),
                    F = "image";
                void 0 != t.attr("data-type") && (F = t.attr("data-type"));
                h.append('<div class="item type-' + F + '"></div>');
                "image" == F && h.children().eq(g).append('<canvas class="da-shadow"></canvas><div class="the-bg" style="background-image: url(' + t.attr("data-source") + ')"></div>');
                0 < t.children().length && h.children().eq(g).append(t.children());
                h.children().eq(g).append('<div class="controlsCon"><div class="arrow-left"></div><div class="arrow-right"></div></div>')
            }
            setTimeout(function () {
                d.addClass("loaded");
                "on" == c.design_enableShadows && I();
                h.children().bind("click", L);
                d.find(".controlsCon .arrow-right").bind("click", B);
                d.find(".controlsCon .arrow-left").bind("click", u)
            }, 1E3);
            "on" == c.settings_responsive && (jQuery(window).bind("resize", K), K());
            "on" == c.settings_slideshow && (setInterval(z, 1E3), d.bind("mouseenter", M), d.bind("mouseleave", N));
            E(0);
            return this
        })
    };
    window.fasyaGallery_init = function (c, z) {
        u(c).fasyaGallery(z)
    }
})(jQuery);

function is_ios() {
    return -1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod") || -1 != navigator.platform.indexOf("iPad")
}

function is_android() {
    return -1 != navigator.platform.indexOf("Android")
}

function is_ie() {
    return -1 != navigator.appVersion.indexOf("MSIE") ? !0 : !1
}

function is_firefox() {
    return -1 != navigator.userAgent.indexOf("Firefox") ? !0 : !1
}

function is_opera() {
    return -1 != navigator.userAgent.indexOf("Opera") ? !0 : !1
}

function is_chrome() {
    return -1 < navigator.userAgent.toLowerCase().indexOf("chrome")
}

function is_safari() {
    return -1 < navigator.userAgent.toLowerCase().indexOf("safari")
}

function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1])
}

function version_firefox() {
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) return new Number(RegExp.$1)
}

function version_opera() {
    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) return new Number(RegExp.$1)
}

function is_ie8() {
    return is_ie() && 8 >= version_ie() ? !0 : !1
};