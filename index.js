
class Driver{
  constructor(name){
    this.name = name
    ++this.id;
  }

  trips(){}
  passengers(){}
}

Driver.prototype.id = 0;
