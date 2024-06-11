/*
    LiveG Cloud Spaces

    Copyright (C) LiveG. All Rights Reserved.

    https://liveg.net
    Licensed by the LiveG Open-Source Licence, which can be found at LICENCE.md.
*/

import * as $g from "https://opensource.liveg.tech/Adapt-UI/src/adaptui.js";

$g.waitForLoad().then(function() {
    return $g.l10n.selectLocaleFromResources({
        "en_GB": "/static/locales/en_GB.json",
        "fr_FR": "/static/locales/fr_FR.json",
        "zh_CN": "/static/locales/zh_CN.json"
    }, "en_GB", {
        "fr_FR": "en_GB",
        "zh_CN": "en_GB"
    }, $g.l10n.getSystemLocaleCode());
}).then(function(locale) {
    window._ = function() {
        return locale.translate(...arguments);
    };

    window._format = function() {
        return locale.format(...arguments);
    };

    window._sort = function(items) {
        return items.sort(locale.createCollator().compare);
    };

    $g.l10n.translateApp(locale);

    if ($g.sel("title").is("[translate]")) {
        $g.sel("title").setText(_($g.sel("title").getAttribute("aui-l10nstring")));
    }

    $g.sel(".host").setText(window.location.host);

    $g.sel("body").removeAttribute("hidden");
});