export default function Modal() {
    const wrapper = document.querySelector('.modal-wrapper');
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
 