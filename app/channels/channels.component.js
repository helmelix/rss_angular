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
//import { Test }     from 'app/channels/test.service';
//import { TestClass }     from 'app/channels/testClass';
var channel_1 = require('app/models/channel');
var channels_service_1 = require('app/channels/channels.service');
var store_1 = require('app/store/store');
var channel_component_1 = require('app/channel/channel.component');
var ChannelsComponent = (function () {
    function ChannelsComponent(channelsService, store) {
        var _this = this;
        this.channelsService = channelsService;
        this.store = store;
        this.channel = 'channels';
        //channelToSave: Channel;
        this.channelToSave = {};
        this.channelsList = [];
        this.isLoading = false;
        this.hovers = {};
        this.selChannel = 'test select';
        //////////////
        this.store
            .changes
            .pluck('isLoading')
            .subscribe(function (isLoading) {
            return _this.isLoading = isLoading;
        });
        this.store
            .changes
            .pluck('channels')
            .subscribe(function (channels) {
            _this.channelsList = [].concat(channels);
        });
        //////////////////
        //this.channelToSave = new Channel('newName', 'urlll')
        this.channelsService.getChannels()
            .subscribe(function (channels) {
            _this.store.addChannels(channels);
        }, function (error) { return _this.errorMessage = error; });
    }
    ChannelsComponent.prototype.ngAfterViewInit = function () {
        console.log(this.chart111);
    };
    ChannelsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.channelsService.addChannel(this.channelToSave.name, this.channelToSave.url)
            .subscribe(function (savedChannel) {
            var currentStat222e = _this.store.getState();
            var chan = new channel_1.Channel(savedChannel.name, savedChannel.url, savedChannel.id);
            _this.store.addChannels(chan);
        }, function (error) { return _this.errorMessage = error; });
        ;
    };
    ChannelsComponent.prototype.changeStatus = function () {
    };
    ChannelsComponent.prototype.addChannel = function () {
        var channelsList = this.store.getStateNew().channels;
        this.channelsService.deleteChannel(channelsList[0].id);
    };
    ChannelsComponent.prototype.selectChannel = function (channel) {
        this.selChannel = channel;
    };
    ChannelsComponent.prototype.onDelete = function (channelToDel) {
        this.channelsService.deleteChannel(channelToDel.id);
    };
    ChannelsComponent.prototype.onHovering = function (eventObject) {
        //console.log(eventObject);
        //this.hovers = {};
        //this.hovers[eventObject.id] = true;
    };
    __decorate([
        core_1.ViewChild('myProfile'), 
        __metadata('design:type', (typeof (_a = typeof channel_component_1.ChannelComponent !== 'undefined' && channel_component_1.ChannelComponent) === 'function' && _a) || Object)
    ], ChannelsComponent.prototype, "chart111", void 0);
    ChannelsComponent = __decorate([
        core_1.Component({
            selector: 'my-channels',
            templateUrl: 'app/channels/channels.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof channels_service_1.Channels !== 'undefined' && channels_service_1.Channels) === 'function' && _b) || Object, (typeof (_c = typeof store_1.AppStore !== 'undefined' && store_1.AppStore) === 'function' && _c) || Object])
    ], ChannelsComponent);
    return ChannelsComponent;
    var _a, _b, _c;
}());
exports.ChannelsComponent = ChannelsComponent;
//# sourceMappingURL=channels.component.js.map