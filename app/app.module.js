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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
//import {ChartsModule} from "ng2-charts";
//import {Chart} from 'chart';
var ng2_nvd3_1 = require('ng2-nvd3');
var app_component_1 = require('./app.component');
var channels_component_1 = require('./channels/channels.component');
var channel_component_1 = require('./channel/channel.component');
var store_1 = require('./store/store');
var channels_service_1 = require('./channels/channels.service');
var channel_service_1 = require('app/channel/channel.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [ng_bootstrap_1.NgbModule.forRoot(), platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, channels_component_1.ChannelsComponent, channel_component_1.ChannelComponent, ng2_nvd3_1.nvD3],
            providers: [channels_service_1.Channels, store_1.AppStore, channel_service_1.ChannelService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map