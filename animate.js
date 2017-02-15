jQuery.cookie = function(e, n, o) {
        if (arguments.length > 1 && "[object Object]" !== String(n)) {
            if (o = jQuery.extend({}, o), (null === n ||
                    void 0 === n) && (o.expires = -1), "number" == typeof o.expires) {
                var i = o.expires,
                    c = o.expires = new Date;
                c.setDate(c.getDate() + i)
            }
            return n = String(n), document.cookie = [encodeURIComponent(e), "=", o.raw ? n : encodeURIComponent(n), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
        }
        o = n || {};
        var t, d = o.raw ? function(e) {
            return e
        } : decodeURIComponent;
        return (t = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)")
            .exec(document.cookie)) ? d(t[1]) : null
    },
    jQuery(document).ready(function(e) {
        "yes" != e.cookie("popup_user_login") && (e("#fanback").delay(100).fadeIn("medium"),
                e("#fanclose, #fan-exit").click(function() {
                    e("#fanback")
                        .stop().fadeOut("medium")
                })),
            e.cookie("popup_user_login", "yes", { path: "/", expires: 7 })
    }),
    $(document).ready(function() {
        $("div#b_icon1").hide(),
            $("div#b_icon2").hide(), $("div#b_icon3").hide(),
            $("div#h_icon1").mouseover(function() {
                $("div#h_icon1").hide(), $("div#b_icon1").show()
            }),
            $("div#h_icon2").mouseover(function() {
                $("div#h_icon2").hide(),
                    $("div#b_icon2").show()
            }),
            $("div#h_icon3").mouseover(function() {
                $("div#h_icon3").hide(),
                    $("div#b_icon3").show()
            }),
            $("div#b_icon1").click(function() {
                $("#bannerfloat03").html("")
            })
    });
