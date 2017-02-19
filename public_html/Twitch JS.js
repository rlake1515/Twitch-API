var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var channels = 'https://api.twitch.tv/kraken/channels/';
var streams = 'https://api.twitch.tv/kraken/streams/';

$(document).ready(function(){
for (let i = 0; i< streamers.length; i++){
    twitchAPICall(channels,streamers[i], i);
    twitchStreamCall(streams,streamers[i], i);
}
});
function twitchAPICall(url, channelName, num){
$.ajax({
        url: `${url}${channelName}`,
        mimeType: 'application/json',
        dataType: 'json',
        async:"false",
        type: "GET",
        headers: {
            "Client-ID":'pnw842lr5wybeu8pgzity7j9immg7i'
        },
        
        success: function(json) {
            console.log(json);
            $("#userBox").append(`<div id="${num}" class="streamerChannel"></div>`);
            $(`#${num}`).append("<i class='streamerName col-md-2'>" + json.name+ "</i>");            
            $(`#${num}`).prepend("<img class='userIcon col-md-1'src='" +json.logo + "'>");

        }
        });        
    }

function twitchStreamCall(url, streamName, num){
$.ajax({
        url: `${url}${streamName}`,
        mimeType: 'application/json',
        dataType: 'json',
        async:"false",
        type: "GET",
        headers: {
            "Client-ID":'pnw842lr5wybeu8pgzity7j9immg7i'
        },
        
        success: function(json) {
            if (json.stream === null){
               $(`#${num}`).append("<i class='userStatus col-md-2'>offline</i>");
                
            }else{
               $(`#${num}`).append("<a class='userStatus col-md-2' href= \"https://www.twitch.tv/"+json.stream.channel.name +"\">online</a>");
               $(`#${num}`).append("<i class='userStream col-md-3'>"+json.stream.channel.status +"</i>");
               
               console.log(json);
            }
        }
        });        
    }


