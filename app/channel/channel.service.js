"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map'); ////
var store_1 = require('app/store/store');
var ChannelService = (function () {
    function ChannelService(http, store) {
        this.http = http;
        this.store = store;
    }
    ChannelService.prototype.getNews = function (channel_id) {
        var appStore1 = this.store.getState();
        var channelToParse;
        appStore1.channels.forEach(function (item, i) {
            if (item.id === channel_id) {
                channelToParse = item;
            }
        });
        //let query = 'select * from rss(0, 5) where url = "' + channelToParse.url + '"';
        var query = 'select * from rss(0, 100) where url = "' + channelToParse.url + '"';
        var geturl = 'http://query.yahooapis.com/v1/public/yql?format=json&q=' + encodeURIComponent(query);
        //let geturl1='http://127.0.0.1:1338/channels/1423';
        console.log(geturl);
        return this.http.get(geturl)
            .map(this.extractData);
    };
    ChannelService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        var feed = body.query.results.item;
        var channelNews = [];
        for (var i = 0, l = feed.length; i < l; i++) {
            channelNews.push({ 'title': feed[i].title,
                'link': feed[i].link,
                'description': feed[i].description });
        }
        console.log(channelNews);
        return channelNews || {};
    };
    ChannelService.prototype.getLettersRate = function (str) {
        //var string = 'Подсчета dfкол-ва вхождений каждdykdyого символа в строке',
        function compareNumbers(a, b) {
            return a - b;
        }
        var sums = [];
        var otherSymbols = 0;
        var lettersRate = {};
        var str = str.toLowerCase();
        str.split('').map(function (e) {
            if (/[a-z]+/.test(e)) {
                lettersRate[e] = !lettersRate[e] ? 1 : lettersRate[e] + 1;
            }
            else
                otherSymbols++;
        });
        if (otherSymbols) {
            lettersRate['other symbols'] = otherSymbols;
        }
        ;
        console.log(lettersRate);
        return lettersRate;
    };
    ChannelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, (typeof (_a = typeof store_1.AppStore !== 'undefined' && store_1.AppStore) === 'function' && _a) || Object])
    ], ChannelService);
    return ChannelService;
    var _a;
}());
exports.ChannelService = ChannelService;
//# sourceMappingURL=channel.service.js.map