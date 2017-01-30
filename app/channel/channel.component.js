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
var channel_service_1 = require('app/channel/channel.service');
var store_1 = require('app/store/store');
var ChannelComponent = (function () {
    function ChannelComponent(channelService, store) {
        this.channelService = channelService;
        this.store = store;
        this.onDelete = new core_1.EventEmitter();
    }
    ChannelComponent.prototype.ngOnInit = function () {
        this.nvd3Options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        this.nvd3Data = [];
    };
    ////////////
    ChannelComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.chart222);
    };
    ChannelComponent.prototype.ngDoCheck = function () {
    };
    ChannelComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.selectedPost = {};
        this.errorMessage = '';
        if (this.selectedChannel.id) {
            this.channelService.getNews(this.selectedChannel.id)
                .subscribe(function (news) {
                _this.allNews = news;
                _this.nubberOfNews = news.length;
            }, function (error) {
                _this.errorMessage = error;
                _this.allNews = [];
            });
        }
    };
    ChannelComponent.prototype.delete = function () {
        this.onDelete.emit(this.selectedChannel);
        this.selectedChannel = {};
    };
    ChannelComponent.prototype.selectNews = function (news) {
        this.selectedPost = news;
        this.description = news.description;
        var letters = this.channelService.getLettersRate(news.description);
        var newLetterData = [];
        function compareNumbers(a, b) {
            //  return a.y - b.y;
            return a.key - b.key;
        }
        for (var letter in letters) {
            newLetterData.push({
                key: letter,
                y: letters[letter]
            });
        }
        newLetterData.sort(compareNumbers);
        this.nvd3Data = newLetterData;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChannelComponent.prototype, "selectedChannel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChannelComponent.prototype, "onDelete", void 0);
    ChannelComponent = __decorate([
        core_1.Component({
            selector: 'my-channel',
            //  inputs: ['selectedChannel'],
            templateUrl: 'app/channel/channel.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof channel_service_1.ChannelService !== 'undefined' && channel_service_1.ChannelService) === 'function' && _a) || Object, (typeof (_b = typeof store_1.AppStore !== 'undefined' && store_1.AppStore) === 'function' && _b) || Object])
    ], ChannelComponent);
    return ChannelComponent;
    var _a, _b;
}());
exports.ChannelComponent = ChannelComponent;
//# sourceMappingURL=channel.component.js.map