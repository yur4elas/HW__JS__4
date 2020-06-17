function ViewLaptop() {
};

ViewLaptop.prototype.addLaptop = function (obj) {
   let propAll = document.querySelector('.prop-all');

   let addRam = document.createElement('div');
   addRam.classList.add('prop-ram', 'add-ram');

   let addYear = document.createElement('div');
   addYear.classList.add('prop-year', 'add-year');

   let addAction = document.createElement('div');
   addAction.classList.add('action', 'add-action');

   addRam.textContent = `${obj.ram} gb`;
   addYear.textContent = `${obj.year}`;
   addAction.innerHTML = `<button class="delete">Удалить</button>
                        <button class="info">Общая информация</button>`;

   // добавляем элементы POPUP
   let overlayInfo = document.createElement('div');
   let contentInfo = document.createElement('div');
   let popupInfo = document.createElement('div');
   let addName = document.createElement('div')
   let addProcessor = document.createElement('div');
   let addCore = document.createElement('div');
   let addMaterial = document.createElement('div');
   let addWeight = document.createElement('div');
   let addClose = document.createElement('span');
   let addColor = document.createElement('div');

   //элементам POPUP добавляем классы
   overlayInfo.classList.add('overlay-info');
   contentInfo.classList.add('content-info');
   popupInfo.classList.add('popup-info');
   addName.classList.add('prop-name');
   addProcessor.classList.add('prop-processor');
   addCore.classList.add('prop-core');
   addMaterial.classList.add('prop-material');
   addWeight.classList.add('prop-weight');
   addClose.classList.add('close-info');
   addColor.classList.add('prop-color')

   addName.innerHTML = `<span>Название</span> <span>${obj.name}</span>`;
   addProcessor.innerHTML = `<span>Процессор</span> <span>${obj.processor}</span>`;
   addCore.innerHTML = `<span>Количество ядер</span> <span>${obj.core}</span>`;
   addColor.innerHTML = `<span>Цвет корпуса</span> <span>${obj.color}</span>`;
   addMaterial.innerHTML = `<span>Материал</span> <span>${obj.material}</span>`;
   addWeight.innerHTML = `<span>Вес</span> <span>${obj.weight} гр</span>`;
   

   // все элементы группируем в overplay-info
   contentInfo.appendChild(addName);
   contentInfo.appendChild(addProcessor);
   contentInfo.appendChild(addCore);
   contentInfo.appendChild(addColor);
   contentInfo.appendChild(addMaterial);
   contentInfo.appendChild(addWeight);
   popupInfo.appendChild(contentInfo);
   popupInfo.appendChild(addClose);
   overlayInfo.appendChild(popupInfo);


   // все группируем в самостоятельный блок-узел;
   let propNotebook = document.createElement('div');
   propNotebook.classList.add('prop-notebook');

   propNotebook.appendChild(overlayInfo);
   propNotebook.appendChild(addRam);
   propNotebook.appendChild(addYear);
   propNotebook.appendChild(addAction);

   propAll.appendChild(propNotebook);
};

ViewLaptop.prototype.clearInput = function (obj) {
   document.getElementById('name-laptop').value = '';
   document.getElementById('year-laptop').value = '';
   document.getElementById('processor-laptop').value = '';
   document.getElementById('ram-laptop').value = '';
   document.getElementById('core-laptop').value = '';
   document.getElementById('material-laptop').value = '';
   document.getElementById('weight-laptop').value = '';
};
