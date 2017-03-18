/**
 * Created by killer on 2017/3/17.
 */
var submitMessage = function(){
	var chatInput = document.getElementById('chatBottomInputText');
	var chatMessage = chatInput.value;
	console.log(chatMessage);

	var chatMain = document.getElementsByClassName("chatMain");
	var newMessage = document.createElement("div");
	var message = document.createElement("p");
	message.innerHTML = chatMessage;

	//为div创建属性class = "test"
	var chatMessageClass = document.createAttribute("class");
	chatMessageClass.value = "chatMessage";

	//把属性class = "test"添加到div
	newMessage.setAttributeNode(chatMessageClass);
	newMessage.appendChild(message);
	chatMain[0].appendChild(newMessage);
	chatInput.value = "";
	return false;
};