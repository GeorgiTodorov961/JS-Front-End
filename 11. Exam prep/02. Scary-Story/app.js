window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),
  };

  const otherDOMSelectors = {
    publishBtn: document.getElementById('form-btn'),
    previewList: document.getElementById('preview-list'),
    mainContainer: document.getElementById('main'),
  };

  otherDOMSelectors.publishBtn.addEventListener('click', publishStoryHandler);

  function publishStoryHandler() {
    const allFieldsHaveValue = Object.values(inputDOMSelectors)
      //.every((input) => input.value !== '');

      if(!allFieldsHaveValue){
        console.log('EMPTY FIELD');
        return
      }

      const { firstName, lastName, age, title, genre, story } = inputDOMSelectors;
      const li = createElements('li', otherDOMSelectors, null, ['story-info']);
      const article = createElements('article', li);
      createElements('h4', article, `Name: ${firstName.value} ${lastName.value}`);
      createElements('p', article, `Age: ${age.value}`);
      createElements('p', article, `Title: ${title.value}`);
      createElements('p', article, `Genre: ${genre.value}`);
      createElements('p', article, story.value);
      const saveBtn = createElements('button',li, 'Save Story', ['save-btn']);
      const editBtn = createElements('button', li, 'Edit Story', ['edit-btn']);
      const delBtn = createElements('button', li, 'Delete Story', ['delete-btn']);


      clearAllInputs();
      otherDOMSelectors.publishBtn.setAttribute('disabled', true);

      function clearAllInputs() {
        Object.values(inputDOMSelectors)
          .forEach((input) => {
            input.value = '';
          })
        }
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
  }
  

}

