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
require('rxjs/add/operator/map'); ///
//import 'rxjs/Rx';                 ///
var Observable_1 = require("rxjs/Observable");
var http_2 = require('@angular/http');
var store_1 = require('app/store/store');
var Channels = (function () {
    function Channels(http, store) {
        this.http = http;
        this.store = store;
        //private channelsApiUrl ='http://127.0.0.1:1338/channels';
        this.channelsApiUrl = 'http://54.187.164.175:1338/channels';
    }
    Channels.prototype.getChannels = function () {
        return this.http.get(this.channelsApiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    Channels.prototype.addChannel = function (name, url) {
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        var headers = new http_2.Headers({ 'Content-Type': 'application/vnd.api+json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var body = JSON.stringify({ data: { attributes: { name: name, url: url } } });
        //console.log(body);
        return this.http.post(this.channelsApiUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    Channels.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    Channels.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    Channels.prototype.deleteChannel = function (channel_id) {
        var _this = this;
        var headers = new http_2.Headers({ 'Content-Type': 'application/vnd.api+json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var url = this.channelsApiUrl + '/' + channel_id;
        this.http.delete(url, options)
            .map(function (res) {
            _this.store.deleteChannel(channel_id);
        })
            .catch(this.handleError)
            .subscribe(function (res) {
            console.log(channel_id, ' deleted');
        }, function (error) { return console.log(error); });
        ;
    };
    Channels.prototype.getChannelById = function (channel_id) {
        return this.channels.forEach(function (item, i, arr) {
            if (item.id === channel_id)
                return item;
        });
    };
    Channels = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, (typeof (_a = typeof store_1.AppStore !== 'undefined' && store_1.AppStore) === 'function' && _a) || Object])
    ], Channels);
    return Channels;
    var _a;
}());
exports.Channels = Channels;
//# sourceMappingURL=channels.service.js.map