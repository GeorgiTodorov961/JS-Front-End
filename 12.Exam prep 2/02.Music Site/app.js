window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0;
    let inputDOMSelectors = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    };
    
    const otherDOMSelectors = {
      allHitsContainer: document.querySelector('.all-hits-container'),
      addBtn: document.getElementById('add-btn'),
      savedContainer: document.querySelector('.saved-container'),
      totalLikesContainer: document.querySelector('.likes > p'),
    };


  
    otherDOMSelectors.addBtn.addEventListener('click', addSongHandler);


    function addSongHandler(event) {
      event.preventDefault();
      let allInputsAreNonEmpty = Object.values(inputDOMSelectors)
        .every((input) => input.value !== '');
      
      if(!allInputsAreNonEmpty){
        return;
      }

      const { genre, name, author, date } = inputDOMSelectors;
      const songContainer = createElements('div', otherDOMSelectors.allHitsContainer, '', ['hits-info']);
      createElements('img', songContainer, null, null, null, {src: './static/img/img.png'});
      createElements('h2', songContainer, `Genre: ${genre.value}`);
      createElements('h2', songContainer, `Name: ${name.value}`);
      createElements('h2', songContainer, `Author: ${author.value}`);
      createElements('h3', songContainer, `Date: ${date.value}`);
      const saveBtn = createElements('button', songContainer, 'Save song', ['save-btn']);
      const likeBtn = createElements('button', songContainer, 'Like song', ['like-btn']);
      const deleteBtn = createElements('button', songContainer, 'Delete', ['delete-btn']);
      likeBtn.addEventListener('click', likeSongHandler);
      deleteBtn.addEventListener('click', deleteSongHandler);
      saveBtn.addEventListener('click', saveSongHandler);
      clearAllInputs();
    }

    function likeSongHandler() {
      this.setAttribute('disabled', true);
      totalLikes ++;
      otherDOMSelectors.totalLikesContainer.textContent = `Total likes: ${totalLikes}`;
    }


    function deleteSongHandler() {
      // event.currentTarget = this;
      this.parentNode.remove();
      otherDOMSelectors.totalLikesContainer.textContent = `Total likes: 0`;
    }

    function saveSongHandler() {
      const songRef = this.parentNode; // this is object reference!!! 
      const saveBtn = songRef.querySelector('.save-btn');
      const likeBtn = songRef.querySelector('.like-btn');
      otherDOMSelectors
        .savedContainer
        .appendChild(songRef);

      saveBtn.remove();
      likeBtn.remove();
    }

    function clearAllInputs() {
      Object.values(inputDOMSelectors)
        .forEach((input) => {
          input.value = '';
        })
    }

    function createElements(type, parentNonde, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);
      
        if(content && useInnerHtml){
          htmlElement.innerHTML = content;
        }else{
          if(content && type !== 'input'){
            htmlElement.textContent = content;
          }
          if(content && type === 'input'){
            htmlElement.value = content;
          }
        }
      
        if (classes && classes.length > 0){
          htmlElement.classList.add(...classes);
        }
        if(id){
          htmlElement.id = id;
        }
      
        if(attributes){
          for(const key in attributes){
            htmlElement[key] = attributes[key];
          }
        }
      
        if(parentNonde){
          parentNonde.appendChild(htmlElement);
        }
        return htmlElement;
      }
}


