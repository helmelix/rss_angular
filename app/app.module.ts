import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestService }     from './channels/test.service';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {ChartsModule} from "ng2-charts";

//import {Chart} from 'chart';

import {nvD3} from 'ng2-nvd3'

import { AppComponent }   from './app.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelComponent } from './channel/channel.component';

import { AppStore }     from './store/store';
import { Channels }     from './channels/channels.service';
import { ChannelService }     from 'app/channel/channel.service';

@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ChannelsComponent, ChannelComponent, nvD3],
  providers: [Channels, AppStore, ChannelService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
