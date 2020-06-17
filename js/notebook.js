function Notebook(name, year, processor, ram, core, weight){
   this.name = name;
   this.year = year;
   this.processor = processor;
   this.ram = ram;
   this.core = core;
   this.weight = weight;
}

function Laptop( name, year, processor, ram, core, weight, material){
   Notebook.call(this,name, year, processor, ram, core, weight);
   this.material = material;
}

function Ultra( name, year, processor, ram, core, weight, color){
   Notebook.call(this,name, year, processor, ram, core, weight);
   this.color = color;
}

