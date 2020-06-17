function ViewUltra() {
};

ViewUltra.prototype = Object.create(ViewLaptop.prototype);

ViewUltra.prototype.clearInputUltra = function (obj) {
   document.getElementById('name-ultra').value = '';
   document.getElementById('year-ultra').value = '';
   document.getElementById('processor-ultra').value = '';
   document.getElementById('ram-ultra').value = '';
   document.getElementById('core-ultra').value = '';
   document.getElementById('color-ultra').value = '';
   document.getElementById('weight-ultra').value = '';
};