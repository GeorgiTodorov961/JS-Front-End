function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons
        .forEach((button) => {
            button.addEventListener('click', toggleInformation)
        })

    function toggleInformation() {
        const currentProfile = this.parentElement;
        const children = Array.from(currentProfile.children);
        const unlockRadioInput = children[4];
        const additionalInformationDiv = children[9];

        if(unlockRadioInput.checked){
            if(this.textContent === 'Show more'){
                additionalInformationDiv.style.display = 'block';
                this.textContent = 'hide it';
            } else {
                additionalInformationDiv.style.display = 'none';
                this.textContent = 'Show more';
            }
        }
    }
}