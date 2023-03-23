function addItem() {
    let newItemTextInput = document.getElementById('newItemText');
    let newItemValueInput = document.getElementById('newItemValue');

    const selectMenu = document.getElementById('menu');
    const itemToAdd = document.createElement('option');

    itemToAdd.textContent = newItemTextInput.value;
    itemToAdd.value = newItemValueInput.value;
    selectMenu.appendChild(itemToAdd);
    newItemTextInput.value = '';
    newItemValueInput.value = '';
}