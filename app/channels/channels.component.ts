import { Component, ViewChild} from '@angular/core';
//import { Test }     from 'app/channels/test.service';
//import { TestClass }     from 'app/channels/testClass';
import { Channel}     from 'app/models/channel';
import { Channels }     from 'app/channels/channels.service';
import { AppStore }     from 'app/store/store';

import { ChannelComponent } from 'app/channel/channel.component';

@Component({
  selector: 'my-channels',
  templateUrl: 'app/channels/channels.component.html'
  //providers: [TestService]
})
export class ChannelsComponent {
  @ViewChild( 'myProfile' ) chart111: ChannelComponent;

  channel : string = 'channels';
  //channelToSave: Channel;
  channelToSave = {};
  channelsList[];
  errorMessage : string;
  isLoading: boolean = false;
  hovers = {};
  selChannel = 'test select';

  ngAfterViewInit(){
    console.log(this.chart111);
  }
  constructor(private channelsService: Channels,private store : AppStore) {

//////////////
    this.store
      .changes
      .pluck('isLoading')
      .subscribe((isLoading: boolean) =>
        this.isLoading = isLoading)

    this.store
      .changes
      .pluck('channels')
      .subscribe((channels: Channel[]) =>{
            this.channelsList =[].concat(channels)
        })
//////////////////
    //this.channelToSave = new Channel('newName', 'urlll')

    this.channelsService.getChannels()
                .subscribe(
                channels => {//this.channels = channels
                            this.store.addChannels(channels);
                              },
               error =>  this.errorMessage = <any>error);

  }

  onSubmit(){
    this.channelsService.addChannel(this.channelToSave.name, this.channelToSave.url)
                       .subscribe(
                       savedChannel => {
                          let currentStat222e = this.store.getState();
                          let chan = new Channel(savedChannel.name, savedChannel.url, savedChannel.id);
                          this.store.addChannels(chan);
                          },
                       error =>  this.errorMessage = <any>error);;


  }

  changeStatus(){
  }

  addChannel(){
    let channelsList= this.store.getStateNew().channels;
    this.channelsService.deleteChannel(channelsList[0].id);
  }

  selectChannel(channel){
      this.selChannel = channel;
  }

  onDelete(channelToDel: Channel) {
      this.channelsService.deleteChannel(channelToDel.id);
  }


  onHovering(eventObject) {
    //console.log(eventObject);
    //this.hovers = {};
    //this.hovers[eventObject.id] = true;
  }

}
