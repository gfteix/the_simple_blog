import Modal from './modal.js';

const modal = Modal();

const posts = document.querySelectorAll('.post-box')
const deleteForm = document.querySelector('#delete-post')


for(let post of posts){
	const postId = post.id
	const deleteButton = post.querySelector('.delete-button')

	deleteButton.onclick = () => {
		modal.open()
		deleteForm.setAttribute('action', '/delete/' + postId)
	}
}
/*******DROPDOWN ********* */

const dropdownBtn = document.querySelector('.dropdown-btn')
dropdownBtn.addEventListener('mouseover', () => {
	document.querySelector(".dropdown-content").classList.toggle("show")

})

/*****************/

const input = document.querySelector('#input-search')
const btnSearch = document.querySelector('#btn-search');


btnSearch.addEventListener('click', ()=>{

	if(input.value ===""){
		btnSearch.setAttribute('href', '/');
	}else{

	btnSearch.setAttribute('href', '?search=' + input.value);
	}
})

