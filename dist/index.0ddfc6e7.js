// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"i6tik":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "056819570ddfc6e7";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"CE27q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _homeJs = require("./view/home.js");
var _homeJsDefault = parcelHelpers.interopDefault(_homeJs);
var _previewJs = require("./view/preview.js");
var _previewJsDefault = parcelHelpers.interopDefault(_previewJs);
var _seeAllJs = require("./view/seeAll.js");
var _seeAllJsDefault = parcelHelpers.interopDefault(_seeAllJs);
var _searchJs = require("./view/search.js");
var _searchJsDefault = parcelHelpers.interopDefault(_searchJs);
var _headerJs = require("./view/header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
const controlHome = async function() {
    try {
        const hash = window.location.hash.slice(1);
        // If HASH esxist with value in URL -> Check value and create content
        if (hash) {
            switch(true){
                // if hash contain see-all item e.g(#movie/top_rated?p=1, #tv/popular?p=21)
                case hash.includes("movie/top_rated") || hash.includes("movie/popular?p=") || hash.includes("movie/now_playing") || hash.includes("movie/upcoming?p=") || hash.includes("tv/top_rated?p=") || hash.includes("tv/on_the_air?p=") || hash.includes("tv/popular?p="):
                    const page = hash.split("?p=")[1];
                    const link = hash.split("?p=")[0];
                    const data = await _modelJs.getAll(link, page);
                    (0, _seeAllJsDefault.default).render(data, link);
                    break;
                // if hash contain certain id movie or series e.g(#mov-123, #ser-456)
                case hash.includes("mov") || hash.includes("ser"):
                    const [type, id] = hash.split("-");
                    controlPreview(type, id);
                    break;
            }
            return;
        }
        // If dosent exist any HASH Load home page
        // 1) Get home page data
        await _modelJs.getHomeData();
        // 2) Render home page
        (0, _homeJsDefault.default).render(_modelJs.state.tops);
    } catch (err) {
        // An error occurs -> render message
        (0, _homeJsDefault.default).renderError();
        console.log(err);
    }
};
const controlPreview = async function(type, id) {
    try {
        // 1) Get media info
        if (type === "mov") await _modelJs.getMovieInfo(id);
        else await _modelJs.getSeriesInfo(id);
        // 2) Render data
        (0, _previewJsDefault.default).render(_modelJs.state.media);
    } catch (err) {
        // An error occurs -> render message
        (0, _previewJsDefault.default).renderError();
    }
};
const controlSearch = async function(query) {
    try {
        // 1) Get search data from api
        await _modelJs.getSearchInfo(query);
        // 2) Render data
        (0, _searchJsDefault.default).render(_modelJs.state.search);
        // listener: when click position out of the resultList -> clear and hide it result list
        (0, _searchJsDefault.default).addHandlerToCloseResultList();
    } catch (err) {
        // An error occurs -> render message
        (0, _searchJsDefault.default).renderError();
    }
};
const init = async function() {
    (0, _homeJsDefault.default).addHandlerRender(controlHome);
    (0, _searchJsDefault.default).addHandlerSearchInput(controlSearch);
    (0, _headerJsDefault.default).addHandlerMenuBtns();
};
init();

},{"./model.js":"aRvaB","./view/home.js":"djOSy","./view/preview.js":"gP4m3","./view/seeAll.js":"dFlBw","./view/search.js":"bXSkp","./view/header.js":"1m25X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRvaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getHomeData", ()=>getHomeData);
parcelHelpers.export(exports, "getMovieInfo", ()=>getMovieInfo);
parcelHelpers.export(exports, "getSeriesInfo", ()=>getSeriesInfo);
parcelHelpers.export(exports, "getAll", ()=>getAll);
parcelHelpers.export(exports, "getSearchInfo", ()=>getSearchInfo);
var _helper = require("./helper");
var _helperDefault = parcelHelpers.interopDefault(_helper);
var _config = require("./config");
const state = {
    media: {},
    search: {
        query: "",
        results: []
    },
    tops: []
};
const getHomeData = async function() {
    try {
        const tops = [
            "movie/popular",
            "movie/upcoming",
            "tv/popular"
        ];
        for(let i = 0; i < tops.length; i++){
            const data = await (0, _helper.AJAX)(`${(0, _config.TMDB_URL)}${tops[i]}?api_key=${(0, _config.TMDB_KEY)}&language=en-US&page=1`);
            state.tops.push(data.results.slice(0, 11));
        }
    } catch (err) {
        throw err;
    }
};
const getMovieInfo = async function(id) {
    try {
        const tmdbData = await (0, _helper.AJAX)(`${(0, _config.TMDB_URL)}movie/${id}?api_key=${(0, _config.TMDB_KEY)}&language=en-US`);
        const omdbData = await (0, _helper.AJAX)(`${(0, _config.OMDB_URL)}/?i=${tmdbData.imdb_id}&apikey=${(0, _config.OMDB_KEY)}`);
        const similars = await (0, _helper.AJAX)(`${(0, _config.TMDB_URL)}movie/${id}/similar?api_key=${(0, _config.TMDB_KEY)}&language=en-US`);
        state.media = createMovieObject(tmdbData, omdbData);
        // Add similars movies to media object
        state.media.similars = createSimilarsList(similars.results.slice(0, 6));
    } catch (err) {
        throw err;
    }
};
const getSeriesInfo = async function(id) {
    try {
        const tmdbData = await (0, _helper.AJAX)(`${(0, _config.TMDB_URL)}tv/${id}?api_key=${(0, _config.TMDB_KEY)}&language=en-US`);
        const similars = await (0, _helper.AJAX)(`${(0, _config.TMDB_URL)}tv/${id}/similar?api_key=${(0, _config.TMDB_KEY)}&language=en-US`);
        state.media = createSeriesObject(tmdbData);
        // Add similars movies to media object
        state.media.similars = createSimilarsList(similars.results.slice(0, 6));
    } catch (err) {
        throw err;
    }
};
/**
 *
 * @param {object} tmdbData : datas come from TMDB API
 * @param {object} omdbData : tmdbData : datas come from OMDB API
 * @returns {object} Generate customize object with datas come from two API
 */ const createMovieObject = function(tmdbData, omdbData) {
    state.media = {};
    const genres = [];
    tmdbData.genres.forEach((gen)=>{
        genres.push(gen.name);
    });
    const title = tmdbData.title !== undefined ? tmdbData.title : tmdbData.name;
    const rsDate = tmdbData.release_date !== undefined ? tmdbData.release_date : tmdbData.first_air_date;
    let rottenTomatoes = omdbData.Ratings.filter((item)=>item.Source === "Rotten Tomatoes");
    rottenTomatoes = rottenTomatoes.length !== 0 ? rottenTomatoes[0].Value : "-";
    const imdb = omdbData.imdbRating !== "N/A" ? omdbData.imdbRating : tmdbData.vote_average;
    const boxOffice = omdbData.BoxOffice !== "N/A" ? omdbData.BoxOffice : "-";
    return {
        background: tmdbData.backdrop_path,
        poster: tmdbData.poster_path,
        title: title,
        runtime: tmdbData.runtime !== undefined ? tmdbData.runtime : " - ",
        language: tmdbData.original_language,
        genres: genres,
        releaseDate: rsDate,
        overview: tmdbData.overview,
        type: "mov",
        rottenTomatoesRating: rottenTomatoes,
        imdbRating: imdb,
        director: omdbData.Director,
        writer: omdbData.Writer,
        boxOffice: boxOffice
    };
};
/**
 *
 * @param {object} tmdbData : datas come from TMDB API
 * @returns {object} Generate customize object with datas come from TMDB API
 */ const createSeriesObject = function(tmdbData) {
    state.media = {};
    const genres = [];
    tmdbData.genres.forEach((gen)=>{
        genres.push(gen.name);
    });
    const title = tmdbData.title !== undefined ? tmdbData.title : tmdbData.name;
    const rsDate = tmdbData.release_date !== undefined ? tmdbData.release_date : tmdbData.first_air_date;
    return {
        background: tmdbData.backdrop_path,
        poster: tmdbData.poster_path,
        title: title,
        runtime: tmdbData.episode_run_time[0] !== undefined ? tmdbData.episode_run_time[0] : " - ",
        language: tmdbData.original_language,
        genres: genres,
        releaseDate: rsDate,
        overview: tmdbData.overview,
        type: "ser",
        imdbRating: tmdbData.vote_average,
        seasones: tmdbData.number_of_seasons,
        episodes: tmdbData.number_of_episodes,
        writer: tmdbData.created_by[0] ? tmdbData.created_by[0].name : "-"
    };
};
/**
 *
 * @param {array} similars : array of objects
 * @returns {undefined}
 * Create customize objects with similars and return array
 */ const createSimilarsList = function(similarItems) {
    const similars = [];
    similarItems.forEach((item)=>{
        const title = item.title !== undefined ? item.title : item.name;
        similars.push({
            poster_path: item.poster_path,
            title: title,
            id: item.id,
            vote_average: item.vote_average.toFixed(1),
            overview: item.overview
        });
    });
    return similars;
};
const getAll = function(link, page) {
    try {
        return (0, _helper.AJAX)(`${(0, _config.TMDB_URL)}${link}?api_key=${(0, _config.TMDB_KEY)}&language=en-US&page=${page}`);
    } catch (err) {
        throw err;
    }
};
const getSearchInfo = async function(query) {
    try {
        state.search.query = query;
        state.search.results = [];
        const data = await (0, _helper.AJAX)(`${(0, _config.TMDB_URL)}search/multi?api_key=${(0, _config.TMDB_KEY)}&query=${query}&language=en-US&page=1&include_adult=false`);
        // filter results by type : movie or tv
        const results = data.results.filter((item)=>item.media_type === "movie" || item.media_type === "tv").slice(0, 6);
        // create array of customize objects. with top 6 search results
        results.forEach((res)=>{
            const title = res.title !== undefined ? res.title : res.name;
            const rsDate = res.release_date !== undefined ? res.release_date : res.first_air_date;
            state.search.results.push({
                title: title,
                vote: res.vote_average,
                release_date: rsDate,
                id: res.id,
                type: res.media_type,
                poster: res.poster_path
            });
        });
        console.log(state.search);
    } catch (err) {
        throw err;
    }
};

},{"./helper":"9h9CE","./config":"kwbPS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9h9CE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _config = require("./config");
/**
 *
 * @param {s} s: millisecond
 * @returns {promise} promise
 */ const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url) {
    try {
        const fetchPro = fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config":"kwbPS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwbPS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OMDB_KEY", ()=>OMDB_KEY);
parcelHelpers.export(exports, "OMDB_URL", ()=>OMDB_URL);
parcelHelpers.export(exports, "TMDB_KEY", ()=>TMDB_KEY);
parcelHelpers.export(exports, "TMDB_URL", ()=>TMDB_URL);
parcelHelpers.export(exports, "ORIGINAL_IMG", ()=>ORIGINAL_IMG);
parcelHelpers.export(exports, "W500_IMG", ()=>W500_IMG);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
const OMDB_KEY = "YOUR-KEY";
const OMDB_URL = "https://www.omdbapi.com/";
const TMDB_KEY = "YOUR-KEY";
const TMDB_URL = "https://api.themoviedb.org/3/";
const ORIGINAL_IMG = "https://image.tmdb.org/t/p/original";
const W500_IMG = "https://image.tmdb.org/t/p/w500";
const TIMEOUT_SEC = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"djOSy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _configJs = require("../config.js");
class Home extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".main");
    _errorMessage = "Something went wrong. please use VPN and try again";
    /**
   *
   * @param {object} data: data for generate HOME markup
   * @returns {undefined}
   */ render(data) {
        // Data not exist
        if (!data) return;
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
        // create object for SwiperJS
        this._sliderDeclaration();
        this._scrollTop();
    }
    _generateMarkup() {
        return `
      ${this._generateSliderMarkup(this._data[0].slice(0, 5), "mov")}
          
          <!-- Trending Movies -->
          <section class="trending-movies">
            <div class="row">
              <h2 class="heading-secondary">Trending Movies</h2>
              <a href="#movie/popular?p=1" class="btn">See all</a>
            </div>
            ${this._generateCarouselMarkup(this._data[0].slice(5), "mov")}
          </section>

          <!-- UpComing-Movies -->
          <section class="trending-movies">
            <div class="row">
              <h2 class="heading-secondary">Upcoming Movies</h2>
              <a href="#movie/upcoming?p=1" class="btn">See all</a>
            </div>
            ${this._generateCarouselMarkup(this._data[1].slice(0, 6), "mov")}
          </section>

          <!-- Trending Series -->
          <section class="trending-series">
            <div class="row">
              <h2 class="heading-secondary">Trending Series</h2>
              <a href="#tv/popular?p=1" class="btn">See all</a>
            </div>
            ${this._generateCarouselMarkup(this._data[2].slice(0, 6), "ser")}
          </section>
        </main>
    `;
    }
    /**
   *
   * @param {object} data : data for generate Slider markup
   * @param {string} type : type of objects e.g(mov)
   * @returns {string} markup: html markup for slider
   */ _generateSliderMarkup(data, type = "mov") {
        // Add slider markup
        let sliderMarkup = `<div class="slider">
                        <div class="swiper">
                          <div class="swiper-wrapper">`;
        // Add slides markup
        data.forEach((slide)=>{
            const title = slide.title.length <= 30 ? slide.title : slide.title.substring(0, 32) + "...";
            sliderMarkup += `<div class="swiper-slide">
      <a href="#${type}-${slide.id}" class="slide">
        <img src="${0, _configJs.ORIGINAL_IMG}/${slide.backdrop_path}" alt="poster" class="slide__img" />
        <h3 class="slide__title">${title}</h3>
        <span class="slide__rate">
          <ion-icon name="star-outline"></ion-icon>
          <span><strong>${slide.vote_average}</strong>/10</span>
        </span>
      </a>
    </div>
      `;
        });
        // Close slider markup
        sliderMarkup += `</div>
    <div class="swiper-button-prev slide__nav-btn"></div>
    <div class="swiper-button-next slide__nav-btn"></div>
    </div>
  </div>`;
        return sliderMarkup;
    }
    _sliderDeclaration() {
        const swiper = new Swiper(".swiper", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            autoplay: {
                delay: 2300
            },
            gragCursor: "true",
            effect: "fade",
            fadeEffect: {
                crossFade: true
            }
        });
    }
    /**
   *
   * @param {object} data : data for generate carousel markup
   * @param {string} type : type of objects e.g(mov, ser)
   * @returns {string} markup: html markup for carousel
   */ _generateCarouselMarkup(data, type) {
        let cards = "";
        data.forEach((card)=>{
            const title = card.title !== undefined ? card.title : card.name;
            cards += `
        <a class="card" href="#${type}-${card.id}">
          <img src="${0, _configJs.W500_IMG}${card.poster_path}" alt="poster ${title}" class="card__img" />
          <h4 class="card__title">${title}</h4>
         <div class="card__more-info">
          <span>${title}</span>
          <p class="card__story-line">${card.overview.substring(0, 230) + " . . . "}</p>
          <span class="card__rate">
           <ion-icon name="star-outline"></ion-icon>
            <span><strong>${card.vote_average}</strong> /10</span>
           </span>
        </div>
    </a>`;
        });
        return `<div class="carousel">${cards}</div>`;
    }
    /**
   *
   * @param {function} handler: function in controll.js, it run when page load or HASh change
   * @return {undefined}
   */ addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
}
exports.default = new Home();

},{"./view.js":"5tRq4","../config.js":"kwbPS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tRq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data) {
        // Data not exist
        if (!data) return;
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
        this._scrollTop();
    }
    _scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderError(message = this._errorMessage) {
        const markup = `
    <div class="error">
    <div>
      <ion-icon name="warning-outline"></ion-icon>
    </div>
    <p>${message}</p>
  </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gP4m3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _configJs = require("../config.js");
class Preview extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".main");
    _errorMessage = "Something went wrong please try again later!!";
    _generateMarkup() {
        const background = (0, _configJs.ORIGINAL_IMG) + "/" + this._data.background;
        return `
    <section class="preview">
            <div class="preview__background" style="background-image: linear-gradient( to right, rgba(0, 0, 0, 0.47) , rgba(0, 0, 0, 0.47)),url('${background}');"></div>
            <div class="preview__poster">
              <img src="${0, _configJs.W500_IMG}/${this._data.poster}" alt="Poster ${this._data.title}" />
            </div>
            <!-- info -->
            <div class="preview__info">
              <div class="info__heading">
                <h2 class="info__title">${this._data.title}</h2>
                </a>
              </div>
              <ul class="info__data">
                ${this._generateInfoMarkup()}
              </ul>
              <ul class="info__genres">
              ${this._generateGenres(this._data.genres)} 
              </ul>
            </div>
            <div class="preview__story">
              <h3 class="story-line">Story line</h3>
              <p class="story-overview">${this._data.overview}</p>
            </div>
            <div class="similar pad-bt-md">
              <h3 class="heading-tertiary">Similar movies</h3>
             ${this._generateCarouselMarkup(this._data.similars, this._data.type)}
            </div>
          </section>
    `;
    }
    _generateCarouselMarkup(data, type) {
        let cards = "";
        data.forEach((card)=>{
            const title = card.title !== undefined ? card.title : card.name;
            cards += `
        <a class="card" href="#${type}-${card.id}">
          <img src="${0, _configJs.W500_IMG}${card.poster_path}" alt="poster ${title}" class="card__img" />
          <h4 class="card__title">${title}</h4>
         <div class="card__more-info">
          <span>${title}</span>
          <p class="card__story-line">${card.overview.substring(0, 180) + " . . . "}</p>
          <span class="card__rate">
           <ion-icon name="star-outline"></ion-icon>
            <span><strong>${card.vote_average}</strong> /10</span>
           </span>
        </div>
    </a>`;
        });
        return `<div class="carousel">${cards}</div>`;
    }
    _generateInfoMarkup() {
        if (this._data.type === "mov") return `<li class="info__data-item">
      <ion-icon name="time-outline"></ion-icon>
      Runtime :
      <span class="duration">${this._data.runtime} min</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="globe-outline"></ion-icon>
      Language :
      <span class="country">${this._data.language}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="calendar-outline"></ion-icon>
      Relased :
      <span class="date">${this._data.releaseDate}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="cash-outline"></ion-icon>
      Box office :
      <span class="rated">${this._data.boxOffice}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="videocam-outline"></ion-icon>
      Director :
      <span class="rated">${this._splitNames(this._data.director)}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="document-text-outline"></ion-icon>
      Writer :
      <span class="rated">${this._splitNames(this._data.writer)}</span>
    </li>
    <li class="info__data-item">
      <img src="./img/imdb.svg" class="rate-logo--imdb" />
      <span class="rated">${this._data.imdbRating} / 10</span>
    </li>
    <li class="info__data-item">
      <img src="./img/rotten.svg" class="rate-logo--rotten" />
      <span class="rated">${this._data.rottenTomatoesRating}</span>
    </li>`;
        else return `<li class="info__data-item">
      <ion-icon name="time-outline"></ion-icon>
      Runtime :
      <span class="duration">${this._data.runtime} min</span>
    </li>
    <li class="info__data-item">
    <ion-icon name="folder-outline"></ion-icon>
      seasons :
      <span class="country">${this._data.seasones}</span>
    </li>
    <li class="info__data-item">
    <ion-icon name="recording-outline"></ion-icon>
      episodes :
      <span class="country">${this._data.episodes}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="globe-outline"></ion-icon>
      Language :
      <span class="country">${this._data.language}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="calendar-outline"></ion-icon>
      Relased :
      <span class="date">${this._data.releaseDate}</span>
    </li>
    <li class="info__data-item">
      <ion-icon name="document-text-outline"></ion-icon>
      Writer :
      <span class="rated">${this._data.writer}</span>
    </li>
    <li class="info__data-item">
      <img src="./img/imdb.svg" class="rate-logo--imdb" />
      <span class="rated">${this._data.imdbRating} / 10</span>
    </li>`;
    }
    _generateGenres(genres) {
        let html = "";
        genres.forEach((gen)=>{
            html += `<li class="info__genres-item">${gen}</li>`;
        });
        return html;
    }
    _generateSimilars(similars) {
        let html = "";
        similars.forEach((movie)=>{
            html += `
      <a href="#${this._data.type}-${movie.id}" class="card">
        <img src="${0, _configJs.W500_IMG}/${movie.poster}" alt="Poster ${movie.title}" class="card__img" />
        <h4 class="card__title">${movie.title}</h4>
      </a>
      `;
        });
        return html;
    }
    _splitNames(str) {
        if (!str.includes(",")) return str;
        let names = str.split(",");
        return (names[0] + ", " + names[1]).substring(0, 33) + ". . .";
    }
}
exports.default = new Preview();

},{"./view.js":"5tRq4","../config.js":"kwbPS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFlBw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _configJs = require("../config.js");
class SeeAll extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".main");
    _errorMessage = "Something went wrong please try again later!!";
    render(data, link) {
        // Data not exist
        if (!data) return;
        this._data = data;
        this._link = link;
        this._title = this._generateTitle(link);
        this._type = this._generateType(link);
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
        this._scrollTop();
    }
    _generateMarkup() {
        return `
      <div class="row">
      <h2 class="heading-secondary">${this._title}</h2>
      </div>
      <div class="see-all">
      ${this._generateCards(this._data.results, this._type)}
      </div>
      <div class="pagination">
      <ul class="pagination__list">
      ${this._generatePaginationItem(this._link, this._data.page, this._data.total_pages)}
      </ul>
    </div>
  
    `;
    }
    _generateCards(data, type) {
        let cards = "";
        data.forEach((card)=>{
            const title = card.title !== undefined ? card.title : card.name;
            cards += `
        <a class="card" href="#${type}-${card.id}">
          <img src="${0, _configJs.W500_IMG}${card.poster_path}" alt="poster ${title}" class="card__img" />
          <h4 class="card__title">${title}</h4>
         <div class="card__more-info">
          <span>${title}</span>
          <p class="card__story-line">${card.overview.substring(0, 180) + " . . . "}</p>
          <span class="card__rate">
           <ion-icon name="star-outline"></ion-icon>
            <span><strong>${card.vote_average}</strong> /10</span>
           </span>
        </div>
    </a>`;
        });
        return cards;
    }
    /**
   *
   * @param {string} link:  e.g(movie/popular)
   * @returns {string} title : e.g(Trending Movies)
   */ _generateTitle(link) {
        let title;
        switch(link){
            case "movie/popular":
                title = "Trending Movies";
                break;
            case "movie/upcoming":
                title = "Upcoming Movies";
                break;
            case "movie/now_playing":
                title = "Now playing Movies";
                break;
            case "movie/top_rated":
                title = "Top rated Movies";
                break;
            case "tv/popular":
                title = "Trending Series";
                break;
            case "tv/top_rated":
                title = "Top rated Series";
                break;
            case "tv/on_the_air":
                title = "On the air Series";
                break;
        }
        return title;
    }
    /**
   *
   * @param {string} link:  e.g(movie/popular)
   * @returns {string} string : e.g(mov)
   */ _generateType(link) {
        if (link === "movie/popular" || link === "movie/upcoming" || link === "movie/now_playing" || link === "movie/top_rated") return "mov";
        else return "ser";
    }
    /**
   *
   * @param {string} link: link of see all page we create pagination links with this e.g(movie/popular)
   * @param {integer} currPage: current page e.g(1)
   * @param {integer} totalPage:  number og total pages e.g(263)
   * @returns
   */ _generatePaginationItem(link, currPage, totalPage) {
        let markup = "";
        let start = currPage - 1;
        let end = currPage + 3;
        if (currPage === 1) {
            start = currPage;
            end = currPage + 4;
        }
        if (end >= totalPage) {
            end = totalPage;
            start = end - 5;
        }
        if (currPage !== 1) markup += `<li class="pagination__item pagination__prev-btn">
        <a href="#${link}?p=${currPage - 1}">
        <ion-icon name="chevron-back-outline"></ion-icon></a>
      </li>`;
        for(let i = start; i <= end; i++){
            let activeClass = "";
            if (currPage === i) activeClass = "active";
            else activeClass = "";
            markup += `<li class="pagination__item ${activeClass}"><a href="#${link}?p=${i}">${i}</a></li>`;
        }
        if (currPage !== totalPage) markup += `<li class="pagination__item pagination__next-btn">
              <a href="#${link}?p=${currPage + 1}">
              <ion-icon name="chevron-forward-outline">
              </ion-icon></a></li>`;
        return markup;
    }
}
exports.default = new SeeAll();

},{"./view.js":"5tRq4","../config.js":"kwbPS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bXSkp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _configJs = require("../config.js");
class Search extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".result__list");
    _searchInput = document.querySelector(".search__input");
    _searchBtn = document.querySelector(".search__button");
    _form = document.querySelector(".search");
    _errorMessage = "Something went wrong please try again later!!";
    addHandlerSearchInput(handler) {
        let timeOut;
        this._searchInput.addEventListener("input", ()=>{
            clearTimeout(timeOut);
            timeOut = setTimeout(this._search.bind(this, handler), 1100);
        });
        // prevent default: when user press ENTER-KEY page dosent refresh
        this._form.addEventListener("submit", (e)=>e.preventDefault());
    }
    _search(handler) {
        // 0) Get search query from input
        const query = this._searchInput.value;
        if (query === "") return;
        // 1) Visible result list
        this._parentElement.classList.remove("hidden");
        // 2) render Spinner
        this.renderSpinner();
        // 3) request to API
        handler(query);
    // 4) render results in 'render' method
    }
    renderSpinner() {
        const markup = `
    <li class="result__item">
     <div class="spinner">
      <img src="img/load.png" alt="loading icon" />
     </div>
    </li>
    `;
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    render(data) {
        if (!data) return;
        this._data = data;
        const markup = this._generateMarkup();
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
        // add listener to result items
        this._resultItemsListerner();
    }
    _generateMarkup() {
        if (this._data.results.length === 0) // If Not Found
        return `
      <li class="result__item">
        <p class="result__not-found">Not Found !!</p>
      </li>
      `;
        let markup = "";
        this._data.results.forEach((res)=>{
            const reDate = res.release_date === undefined || res.release_date === null ? "" : res.release_date.substring(0, 4);
            const poster = res.poster === undefined || res.poster === null ? "./img/ticket.png" : `${0, _configJs.W500_IMG}${res.poster}`;
            let link = res.type === "movie" ? "#mov-" : "#ser-";
            link += `${res.id}`;
            markup += `
      <li class="result__item">
        <a href="${link}" class="result__link">
                <img
                  class="result__item-img"
                  src='${poster}'
                  alt="Poster ${res.title}"
                />
              <p class="result__item-title">${res.title} - ${reDate}</p>
              <div class="result__item-rate">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>${res.vote !== undefined ? res.vote : "-"}</span>
              </div>
        </a>
      </li>
      `;
        });
        return markup;
    }
    renderError(message = this._errorMessage) {
        const markup = `
    <li class="result__item">
    <div class="error">
    <div>
      <ion-icon name="warning-outline"></ion-icon>
    </div>
    <p>${message}</p>
  </div>
  </li>
    `;
        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    addHandlerToCloseResultList() {
        // if user click point out of the result list -> reset result list and hide
        window.addEventListener("click", this._resetSearchSection.bind(this));
    }
    _resultItemsListerner() {
        // if user select one of the results -> reset result list and hide and go to preview page
        this._parentElement.addEventListener("click", this._resetSearchSection.bind(this));
    }
    _resetSearchSection(e) {
        // user click on one of the result-list link 'OR' some point out of the result list-> reset search section and hide
        if (e.target.closest(".result__link") || !e.target.closest(".result__list")) {
            // clear result list
            this._parentElement.innerHTML = "";
            // Hide result list
            this._parentElement.classList.add("hidden");
            // clear input
            this._searchInput.value = "";
        }
    }
}
exports.default = new Search();

},{"./view.js":"5tRq4","../config.js":"kwbPS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1m25X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Header {
    openBtn = document.querySelector(".nav__btn--open");
    closeBtn = document.querySelector(".nav__btn--close");
    nav = document.querySelector(".nav__list");
    addHandlerMenuBtns() {
        // open btn
        this.openBtn.addEventListener("click", ()=>{
            document.querySelector(".nav__list").classList.add("visible");
        });
        // close btn
        this.closeBtn.addEventListener("click", ()=>{
            document.querySelector(".nav__list").classList.remove("visible");
        });
        // listerner for menu items
        this.nav.addEventListener("click", (e)=>{
            if (e.target.closest(".clickable")) document.querySelector(".nav__list").classList.remove("visible");
        });
    }
    showMenu() {}
    hideMenu() {}
}
exports.default = new Header();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["i6tik","CE27q"], "CE27q", "parcelRequire98fe")

//# sourceMappingURL=index.0ddfc6e7.js.map
