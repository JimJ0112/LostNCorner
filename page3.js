/*CONSTANT DISPLAY IN EVERY PAGE/SCREEN*/
// open/close phone
const phoneBtn = document.getElementById('see-phone-btn');
const mobile = document.querySelector('.mobile');
const mobileScreen = document.querySelector('.screen')
const mobilePwrBtn = document.querySelector('.power-btn')
let pwrBtnCont = 0;
let pwrBtnOn = false;
let mobileOpen = false;
const phoneReturnBtn = document.querySelector('.phone-return-div');


//variables for message div
const msgIcon = document.getElementById('message-icon');
const msgNotif = document.querySelector('.notif-div');

const msgDiv = document.querySelector('.message-div');

//convo 1
const convo_one = document.querySelector('.convo-1');
const frnd_one = document.querySelector('.friend-1')
const msgNotifConvo1 = document.querySelector('.notif-div-convo-1');

//convo 2
/*
	note: every hour or every 2 hours , someone will message the users
	convo 2 will appear when it is 8 AM
	convo 3 - N is still to be determine
*/
let showConvo_two = false;
const convo_two = document.querySelector('.convo-2');
const frnd_two = document.querySelector('.friend-2')
const msgNotifConvo2 = document.querySelector('.notif-div-convo-2');
let showNotifFriend2 = false;

//reminder to turn off phone before leaving the phone view
const reminderDiv2 = document.querySelector('.reminder-div-2');

//map div
const mapBtn = document.getElementById('see-map-btn');
const map = document.querySelector('.map-div');
let mapOpen = false;

//items div
const itemsBtn = document.getElementById('see-items-btn');
const itemsDiv = document.querySelector('.items-div')
const inventoryDiv = document.querySelector('.inventory-div');
let itemsOpen = false;

function onLoad(){
	//itemsBtn.style.pointerEvents = "none"
}

phoneBtn.addEventListener('click' , function(){

	//whenever user click another NAV BTNs , it will automaitcally close . so the MAP INVENTROY and PHONE VIEW will not overlap
	if(itemsOpen == true){
		itemsDiv.style.right = "-400px";
		inventoryDiv.style.right = "-400px";

		itemsOpen = false

		itemsDiv.style.visibility = "hidden"
		inventoryDiv.style.visibility = "hidden"
	}

	if(mobileOpen == true){
		mobile.style.right = "-590px"
		mobileOpen = false;
		mobile.style.visibility = "hidden"
	}else{
		mobile.style.right = "90px"
		mobileOpen = true;
		mobile.style.visibility = "visible"


	}

	/* second convo/message will pop , only if the USER click the PHONE VIEW btn and open his/her phone at 8 AM
	*/
	if(showNotifFriend2 == true){
		msgNotif.style.visibility = "visible"
		showNotifFriend2 = false;
	}

	/* only for the page 2 , the USER can't proceed to page3 if he didnt close his phone*/
	if(pwrBtnOn == true){
		reminderDiv2.style.visibility = "visible";
	}else{
		//mobile.style.right = "-590px"
	}
}, false)

mobilePwrBtn.addEventListener('click' , function(){

	//update whether the power btn has clicked or not/ the phone is open or not
	if(pwrBtnOn == true){
		pwrBtnOn = false;
	}else{
		pwrBtnOn = true;
	}

} , false)

/*end ofphone open/close btn*/

/*PHONE MESSAGES FUNCTIONS*/
$(document).ready(function(){
	$('.power-btn').click(function(){
		$('.screen').toggleClass('active')

		/*when the USER turns off the phone . all DIV (convo 1, convo 2) will automatically close also*/

		msgDiv.style.visibility = "hidden"

		//convo -1
		convo_one.style.visibility = "hidden"
		frnd_one.style.visibility = "hidden"

		//convo -2
		convo_two.style.visibility = "hidden"
		frnd_two.style.visibility = "hidden"
	})
})

msgIcon.addEventListener('click' , function(){
	/* when the USER clicks the message icon on the phone , and reads the convo 1 or the other unopened convo , the notification
	message will be hidden.
	*/
	msgDiv.style.visibility = "visible"
	convo_one.style.visibility = "visible"
	msgNotif.style.visibility = "hidden"

	if(showConvo_two == true){
		convo_two.style.visibility = "visible";
	}
},false)

phoneReturnBtn.addEventListener('click' , function(){

	/* when the user press the back button of the phone , the screen of the phone will return to home screen and close all the convos*/
	frnd_one.style.visibility = "hidden";
	msgDiv.style.visibility = "hidden"	


	//convo -1
	convo_one.style.visibility = "hidden"
	frnd_one.style.visibility = "hidden"

	//convo -2
	convo_two.style.visibility = "hidden"
	frnd_two.style.visibility = "hidden"

},false)


convo_one.addEventListener('click' , function(){
	convo_one.style.visibility = "hidden";
	msgNotifConvo1.style.visibility = "hidden"
	frnd_one.style.visibility = "visible";

	//hide others convo
	convo_two.style.visibility = "hidden";
	
} , false)

convo_two.addEventListener('click' , function(){
	convo_two.style.visibility = "hidden";
	msgNotifConvo2.style.visibility = "hidden"
	frnd_two.style.visibility = "visible";

	//hide others convo
	convo_one.style.visibility = "hidden";
	
} , false)
/*end of PHONE MESSAGES FUNCTIONS*/


// map div functions
mapBtn.addEventListener('click', function(){
	//whenever user click another NAV BTNs , it will automaitcally close . so the MAP INVENTROY and PHONE VIEW will not overlap
	if(itemsOpen == true){
		itemsDiv.style.right = "-400px";
		inventoryDiv.style.right = "-400px";

		itemsOpen = false

		itemsDiv.style.visibility = "hidden"
		inventoryDiv.style.visibility = "hidden"
	}

	if(mobileOpen == true){
		mobile.style.right = "-590px";
		mobileOpen = false
		mobile.style.visibility = "hidden"
		
	}

	/* to hide and unhide the MAP whenever the user click the MAP VIEW btn*/
	if(mapOpen == false){
		map.style.visibility = "visible"
		map.style.right = "0px";
		mapOpen = true
	}else{
		map.style.right = "-555px";
		mapOpen = false
		map.style.visibility = "visible"
	}
} , false)

// items div functions
itemsBtn.addEventListener('click', function(){

	//whenever user click another NAV BTNs , it will automaitcally close . so the MAP INVENTROY and PHONE VIEW will not overlap
	if(mobileOpen == true){
		mobile.style.right = "-590px";
		mobileOpen = false
		mobile.style.visibility = "hidden"
		
	}

	//to hide and unhide the INVENTORY whenever the user click the INVENTORY VIEW btn
	if(itemsOpen == false){
		itemsDiv.style.visibility = "visible"
		itemsDiv.style.right = "80px";

		inventoryDiv.style.visibility = "visible"
		inventoryDiv.style.right = "120px";

		itemsOpen = true
	}else{
		itemsDiv.style.right = "-400px";
		inventoryDiv.style.right = "-400px";

		itemsOpen = false

		itemsDiv.style.visibility = "visible"
		inventoryDiv.style.visibility = "visible"
	}
} , false)

/*END CONSTANT DISPLAY IN EVERY PAGE/SCREEN*/

const body = document.getElementsByTagName('BODY')

const elipsis = document.querySelector('.elipsis')

//reminder 1 / Conversation Box
const reminderDiv_1 = document.querySelector('.reminder-div-1')

// all reminder OKAY CLICK and SPAN ORIG
const okClick = document.querySelectorAll('.okay-click')
const spanOrig = document.querySelectorAll('.span-orig')

//all message bar and its child paragraph
const msgBar_P = document.querySelectorAll('.characters-message-bar p')

const note = document.querySelector('.note');

//reminder 1 / Conversation Box
okClick[0].addEventListener('click' , function(){
	reminderDiv_1.style.visibility = "hidden"
	msgBar_P[0].style.visibility = "visible"

	note.style.visibility = "visible"
}, false)
