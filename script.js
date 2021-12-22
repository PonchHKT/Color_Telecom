const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');

// Ajouter un élement 
form.addEventListener('submit', (e => {
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`
    item.value = '';
}))

// Supprimer un élement
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('checked')){
        e.target.remove();
    } else {
        e.target.classList.add('checked');
    }
})