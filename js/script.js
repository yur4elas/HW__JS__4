document.getElementById('submit-laptop').addEventListener('click', (e) => {
   let nameLaptop = document.getElementById('name-laptop').value;
   let yearLaptop = document.getElementById('year-laptop').value;
   let processorLaptop = document.getElementById('processor-laptop').value;
   let ramLaptop = document.getElementById('ram-laptop').value;
   let coreLaptop = document.getElementById('core-laptop').value;
   let materialLaptop = document.getElementById('material-laptop').value;
   let weightLaptop = document.getElementById('weight-laptop').value;

   let popupLaptop = new Popup(); 
   let viewLaptop = new ViewLaptop();
   
   

   if (nameLaptop.trim() == '' || yearLaptop.trim() == '' || processorLaptop.trim() == '' || ramLaptop.trim() == '' || coreLaptop.trim() == '' || materialLaptop.trim() == '' || weightLaptop.trim() == '') {
      popupLaptop.addPopup('Ошибка!! Заполните все поля', 'unsuccess');
   } else if (weightLaptop > 3000) {
      popupLaptop.addPopup('Ошибка!! Масса превышает допустимую (<= 3000гр)', 'unsuccess');
   } else {
      let laptop = new Laptop(nameLaptop, yearLaptop, processorLaptop, ramLaptop, coreLaptop, weightLaptop, materialLaptop);      
      viewLaptop.addLaptop(laptop);      
      viewLaptop.clearInput(laptop);      
      popupLaptop.addPopup('Вы добавили Laptop', 'success');
   }
   
   closePopup();
   deleteBtn();
   popupInfoLaptop();
   e.preventDefault();
   
});

document.getElementById('submit-ultra').addEventListener('click', (e)=>{
   let nameUltra = document.getElementById('name-ultra').value;
   let yearUltra = document.getElementById('year-ultra').value;
   let processorUltra = document.getElementById('processor-ultra').value;
   let ramUltra = document.getElementById('ram-ultra').value;
   let coreUltra = document.getElementById('core-ultra').value;
   let colorUltra = document.getElementById('color-ultra').value;
   let weightUltra = document.getElementById('weight-ultra').value;

   let popupUltra = new Popup(); 
   let viewUltra = new ViewUltra();

   if (nameUltra.trim() == '' || yearUltra.trim() == '' || processorUltra.trim() == '' || ramUltra.trim() == '' || coreUltra.trim() == '' || colorUltra.trim() == '' || weightUltra.trim() == '') {
      popupUltra.addPopup('Ошибка!! Заполните все поля', 'unsuccess');
   } else if (weightUltra > 1500) {
      popupUltra.addPopup('Ошибка!! Масса превышает допустимую (<= 1500гр)', 'unsuccess');
   } else {
      let ultra = new Ultra(nameUltra, yearUltra, processorUltra, ramUltra, coreUltra, weightUltra, colorUltra);      
      viewUltra.addLaptop(ultra);
      viewUltra.clearInputUltra(ultra);
      popupUltra.addPopup('Вы добавили Ultrabook', 'success');
   }
   closePopup();
   deleteBtn();
   popupInfoUltra();
   e.preventDefault();
});




function deleteBtn(){
   let btnDel = document.querySelectorAll('.delete');
   btnDel.forEach(del => {
      del.addEventListener('click', (e)=>{
         del.parentElement.parentElement.remove();
         e.preventDefault();
      });
   });
};



function popupInfoLaptop(){
   let info = document.querySelectorAll('.info');
   info.forEach(btnInfo => {
      btnInfo.addEventListener('click', (e)=>{
         btnInfo.parentElement.parentElement.firstChild.style.display = 'flex';
         btnInfo.parentElement.parentElement.firstChild.firstChild.firstChild.childNodes[3].style.display = 'none';
         e.preventDefault();
      })
   });
};

function popupInfoUltra(){
   let info = document.querySelectorAll('.info');
   info.forEach(btnInfo => {
      btnInfo.addEventListener('click', (e)=>{
         btnInfo.parentElement.parentElement.firstChild.style.display = 'flex';
         btnInfo.parentElement.parentElement.firstChild.firstChild.firstChild.childNodes[4].style.display = 'none';
         e.preventDefault();
      })
   });
};