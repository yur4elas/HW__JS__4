function Popup() {
};

let wrap = document.querySelector('.wrapper');
let overlay = document.querySelector('.overlay');
let newSpanMessage = document.createElement('span');
let content = document.querySelector('.content');
let popup = document.querySelector('.popup');

Popup.prototype.addPopup = function (message, nameClass) {

   wrap.style.filter = 'blur(2px)';
   newSpanMessage.textContent = message;
   content.appendChild(newSpanMessage);
   popup.classList.add(nameClass);
   overlay.style.display = 'flex';

   setTimeout(() => {
      overlay.style.display = 'none';
      wrap.style.filter = 'blur()';
      newSpanMessage.remove();
      popup.classList.remove(nameClass)
   }, 1000);
};


function closePopup() {
   let close = document.querySelector('.close');
   let closeInfo = document.querySelectorAll('.close-info');

   close.addEventListener('click', () => {
      overlay.style.display = 'none';
      wrap.style.filter = 'blur()';      
   });

   closeInfo.forEach(btnClose => {
      btnClose.addEventListener('click',(e)=>{
         document.querySelectorAll('.overlay-info').forEach(closeOver =>{
            closeOver.style.display = 'none';
         });
      }); 
   });   
};

