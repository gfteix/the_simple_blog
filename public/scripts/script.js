function Modal(){
	const wrapper = document.querySelector('.modal-wrapper');
	const element = document.querySelector('.modal');
	const cancelButton = document.getElementById("btn-cancel")
  
	cancelButton.addEventListener('click', close)
  
	function open() {
	  document.addEventListener('keydown', closeOnEscape)
	  wrapper.classList.add('on')
	 }
 
	 function close() {
		 document.removeEventListener('keydown', closeOnEscape)
		 wrapper.classList.remove('on')
	 }
 
	 function closeOnEscape({ key }) {
		 if (key == 'Escape') {
			 close()
		 }
	 }
	 
	 return  {
		 open,
		 close
	 }
}

modal = Modal();

const posts = document.querySelectorAll('.post-box')
const deleteForm = document.querySelector('#delete-post')


for(let post of posts){
	const postId = post.id
	console.log(post.id)
	const deleteButton = post.querySelector('.delete-button')

	deleteButton.onclick = () => {
		modal.open()
		deleteForm.setAttribute('action', '/delete/' + postId)
	}
}
function showDropdown(){
	document.querySelector(".dropdown-content").classList.toggle("show")

}

