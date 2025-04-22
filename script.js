
//Modal
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const overlay = document.getElementById('modal-form');

openModal.addEventListener('click', () => {
    overlay.style.display = 'flex';
});
closeModal.addEventListener('click', () => {
    overlay.style.display = 'none';

});



