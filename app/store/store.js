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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
//import 'rxjs/add/operator/map'      ///
require('rxjs/Rx'); ///
var core_1 = require('@angular/core');
var state = {
    user: {},
    isLoading: false,
    items: [],
    channels: []
};
var store = new BehaviorSubject_1.BehaviorSubject(state);
var AppStore = (function () {
    function AppStore() {
        this.store = store;
        this.changes = store
            .asObservable()
            .distinctUntilChanged()
            .do(function (changes) { return console.log('new state', changes); });
    }
    AppStore.prototype.getState = function () {
        return this.store.value;
    };
    AppStore.prototype.getStateNew = function () {
        return Object.assign({}, this.store.value);
    };
    AppStore.prototype.setState = function (state) {
        console.log('setState ', state); // log update
        this.store.next(state);
    };
    //addChannels(channelToAdd : Channel) {
    AppStore.prototype.addChannels = function (channelToAdd) {
        //console.log('setState ', state); // log update
        var oldChannels = this.store.value.channels;
        //channelsToAdd.push(channelToAdd);
        var channelsToAdd = oldChannels.concat(channelToAdd);
        var newState = Object.assign({}, this.store.value, { channels: channelsToAdd });
        this.store.next(newState);
    };
    AppStore.prototype.deleteChannel = function (channel_id) {
        var oldChannels = this.store.value.channels;
        var findChannel = false;
        oldChannels.forEach(function (item, i, arr) {
            if (item.id === channel_id) {
                arr.splice(i, 1);
                findChannel = true;
            }
        });
        if (findChannel) {
            var newChannelsList = Object.assign({}, this.store.value, { channels: oldChannels });
            this.store.next(newChannelsList);
        }
    };
    AppStore = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppStore);
    return AppStore;
}());
exports.AppStore = AppStore;
//# sourceMappingURL=store.js.map