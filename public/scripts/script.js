/*import Modal from './modal.js';

modal = Modal();

const posts = document.querySelectorAll('.post-list .post-block')
const deletePost = document.querySelector('#delete-post')
const deleteForm = document.querySelector('#delete-job')
for(let post of posts){
	const postId = post.dataset.id

	const deleteButton = post.querySelector('delete-button')
	deleteButton.onclick = () => {
		modal.open()
		deleteForm.setAttribute('action', '/post/delete/' + cardId)
	}
}*/
function showDropdown(){
	document.querySelector(".dropdown-content").classList.toggle("show")

}
