function solve() {
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
  const tbody = document.querySelector('.table > tbody');

  generateBtn.addEventListener('click', generateHandler);
  buyBtn.addEventListener('click', buyHandler)


  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const {img, name, price, decFactor} of data) {
      const tableRow = createElements('tr', '', tbody);
      const firstColumnTd = createElements('td', '', tableRow);
      createElements('img', '', firstColumnTd, '', '', {src: img});
      const secondColumnTd = createElements('td', '', tableRow);
      createElements('p', name, secondColumnTd);
      const thirdColumnTd = createElements('td', '', tableRow);
      createElements('p', price, thirdColumnTd);
      const fourthColumnTd = createElements('td', '', tableRow);
      createElements('p', decFactor, fourthColumnTd)
      const fifthColumnTd = createElements('td', '', tableRow);
      createElements('input', '', fifthColumnTd, '', '', {type: 'checkbox'})
    }
  }


  function buyHandler() {
    const allCheckedInputs = Array.from(document.querySelectorAll('tbody tr input:checked'));
    let boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    for (const input of allCheckedInputs) {
      const tableRow = input.parentElement.parentElement;
      const [_firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children);
      let item = secondColumn.children[0].textContent;
      boughtItems.push(item);
      let currentPrice = Number(thirdColumn.children[0].textContent);
      totalPrice += currentPrice;
      let currentDecFactor = Number(fourthColumn.children[0].textContent);
      totalDecFactor += currentDecFactor; 
    }

    buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`;
    buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextArea.value += `Average decoration factor: ${totalDecFactor/ allCheckedInputs.length}`
  }


}



function createElements(type, content, parentNode,  id, classes, attributes){
  const htmlElement = document.createElement(type);

  if(content && type !== 'input'){
    htmlElement.textContent = content;
  }

  if(content && type === 'input'){
    htmlElement.value = content;
  }

  if(id){
    htmlElement.id = id;
  }

  if(parentNode){
    parentNode.appendChild(htmlElement);
  }

  if(classes){
    htmlElement.classList.add(...classes);
  }

  if (attributes){
    for (const key in attributes) {
      htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement
  }
