let $addButton;
let $taskInput;
let $list;
let $removeBtn;
let liElement;
let n = 1;
let $span;
let $edtitForm;
let $input;

function sendToNetwork (){
	const xhr = new XMLHttpRequest();
	xhr.open("POST", 'http://195.181.210.249:3000/todo', true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onload = function(data) {
    console.log(data);
	}   
	xhr.send("title='another written-sent code'&author=happyKasiaK JS");	
}
//sendToNetwork();

function putToNetwork(){
	const xhr = new XMLHttpRequest();
	xhr.open("PUT", 'http://195.181.210.249:3000/todo/174', true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onload = function(data) {
    console.log(data);
	}   
	xhr.send("title='change from local host'&author=KasiaK JS&extra=active");	
}
//putToNetwork();

function delToNetwork (){
	const xhr = new XMLHttpRequest();
	xhr.open("DELETE", 'http://195.181.210.249:3000/todo/' +id, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	xhr.send();	
}
//delToNetwork ();

function getToNetwork (){
	const xhr = new XMLHttpRequest();
	xhr.open("GET", 'http://195.181.210.249:3000/todo/author/KasiaK JS' , true);
	
	xhr.onload = function() {
		let $commonToDO = document.getElementById('commonToDO');
		let data = JSON.parse(xhr.responseText);
		console.log(data);
		$commonToDO.src = data[0].title;
		$commonToDO.innerText = $commonToDO.src;
		console.log(JSON.stringify(data[0].title));

		const newNetToDo = createListElement($commonToDO.src);
		$list.appendChild(newNetToDo);
		$commonToDO.src = '';
	} 	
	xhr.send();	

}
getToNetwork ();

function sendMotto(){
	let request = new XMLHttpRequest(); //za pomocą tej instancji pobiorę dane

	request.open('GET','https://api.adviceslip.com/advice', true)//request.open('GET','https://dog.ceo/api/breed/hound/images/random', true)

	request.onload = function() {
		let $motto = document.getElementById('motto');
		let data = JSON.parse(request.responseText);
		console.log(data.slip.advice);
		console.log(JSON.stringify(data.slip.advice));
		
		$motto.src = JSON.stringify(data.slip.advice);
		$motto.innerText = $motto.src;
	};

	request.send();
}
sendMotto();

function sendBcg(){	
	var request = new XMLHttpRequest();

	request.open('GET','https://dog.ceo/api/breeds/image/random');

	request.onload = function(){
		const data = JSON.parse(request.responseText);
		const $dogImage = document.getElementById("dogImg");
		$dogImage.src = data.message;
	};
	
	request.send();
}
sendBcg();

function main (){
	prepareDOMElements();
	prepareDOMEvents();
}

function prepareDOMElements(){
	$addButton = document.getElementById ('addButton');
	$taskInput = document.getElementById ('taskTextArea');
	$list = document.getElementById ('list');
}

function prepareDOMEvents(){
	$addButton.addEventListener('click', addButtonClickHandler);
	$list.addEventListener('click', listClickManager);
//	$toChange.addEventListener('click', console.log('ok');
}

function listClickManager(dataFromJS){
	if (dataFromJS.target.dataset.id){
		const todoId = dataFromJS.target.dataset.id;
		selectedTodo = $list.querySelector('li[data-id="' + todoId +'"]');
		$span = selectedTodo.getElementsByClassName('todoText')[0];
		$edtitForm=selectedTodo.getElementsByClassName('edtitForm')[0];
		$input = selectedTodo.getElementsByClassName('editInput')[0];
		}
	
	if (event.target.classList.contains('deleteBtn')){
		XButtonClickHandler(selectedTodo);
		}
	else if (dataFromJS.target.className === 'todoText'){
		console.log('to editManager - for const vals - was undefined', $span);
		editManager($span, $edtitForm, $input);
		}
	else if (dataFromJS.target.className === 'acceptEdit'){
		acceptManager($span, $edtitForm, $input);
		}
	else if (dataFromJS.target.className === 'declineEdit'){
		declineManager($span, $edtitForm);
		}
	else {
		return;
	}	
}

function editManager($span, $edtitForm, $input){
	console.log('in editManager',$span, $edtitForm, $input);
	$span.style.display = "none";
	$input.value = $span.innerText;
	$edtitForm.style.display = "";
}

function acceptManager($span, $edtitForm, $input){
	$span.style.display = "";
	$edtitForm.style.display = "none ";
	$span.innerText = $input.value;
}

function declineManager($span, $edtitForm){
	$span.style.display = "";
	$edtitForm.style.display = "none";
}

function addButtonClickHandler(){
	if($taskInput.value === ''){
		return;
	}	
	const newTask = createListElement($taskInput.value);
	$list.appendChild(newTask);
	$taskInput.value = '';
	}
	
function createListElement(name){
	let liElement= document.createElement('li');
	liElement.classList.add('form-control');
	liElement.id ='todo'+n;
	liElement.dataset.id = n;
	
	let $spanElement = document.createElement('span');
	$spanElement.classList.add('todoText');
	$spanElement.dataset.id = n;
	$spanElement.innerHTML = name;
	
	let $removeBtn = document.createElement('button');
	$removeBtn.innerHTML = 'X';
	$removeBtn.dataset.id = n;
	$removeBtn.classList.add('btn-outline-secondary');
	$removeBtn.classList.add('btn');
	$removeBtn.classList.add('deleteBtn');
	
	let cBoxElement = document.createElement('INPUT');
	cBoxElement.setAttribute("type", "checkbox");
	cBoxElement.classList.add('cBox');
	cBoxElement.dataset.id = n;
	
	liElement.appendChild($removeBtn);
	liElement.appendChild($spanElement);
	liElement.appendChild(cBoxElement);
	
	let edtitForm= document.createElement('span');
	edtitForm.classList.add('edtitForm');
	edtitForm.dataset.id = n;
	let input= document.createElement('input');
	input.classList.add('editInput');
	input.dataset.id = n;
	let acceptEdit= document.createElement('button');
	acceptEdit.innerHTML = 'OK';
	acceptEdit.classList.add('acceptEdit');
	acceptEdit.dataset.id = n;
	let declineEdit= document.createElement('button');
	declineEdit.innerHTML = 'X';
	declineEdit.classList.add('declineEdit');
	declineEdit.dataset.id = n;
	
	edtitForm.appendChild(input);
	edtitForm.appendChild(acceptEdit);
	edtitForm.appendChild(declineEdit);
	
	liElement.appendChild(edtitForm);
	edtitForm.style.display = "none";
	n++;
	
	return liElement;  
}

function XButtonClickHandler(selectedTodo){

	const $elToRem=document.getElementById('todo'+selectedTodo.dataset.id);
	console.log($elToRem);
	$elToRem.remove();
}

document.addEventListener('DOMContentLoaded', main);
          