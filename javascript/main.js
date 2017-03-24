/**
 * Created by killer on 2017/3/17.
 */

var WS_URL = "183.175.12.160:9988" + "/CloudCourse" + "/websocket";
if (location.protocol == 'http:') {
	WS_URL = "ws://"+WS_URL;
} else { // 如果页面是https,那么必须走wss协议
	WS_URL = "wss://"+WS_URL;
}
var webSocket = new WebSocket(WS_URL);
window.onload = function () {
	webSocket.send('{"action": "in_course","course_id":1}');
	webSocket.onerror = function(event) {
		//
	};

	webSocket.onopen = function(event) {
		//
	};
};


var ChatBox = new Vue({
	el: '#chatBox',
	data: {
		messageList : [],
		message: '',
	},
	methods: {
		nickname: function (value) {
			if(value.user && value.user.realName){
				return value.user.realName;
			}else{
				return '游客';
			}
		},
		sendMessage: function(event){
			webSocket.send('{"action":"send_msg","course_id":1,"msg":"' + this.message + '","video_time":3}');
			this.message = '';
			return false;
		}
	},
	mounted: function () {
		webSocket.onmessage = function (event) {
			var eventJson = JSON.parse(event.data);
			this.messageList.push(eventJson);
		}.bind(this);
	}
});




