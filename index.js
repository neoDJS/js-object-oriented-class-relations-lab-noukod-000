class Common{
    constructor(name){
      this.name = name;
      ++this.id;
    }
}

class Driver extends Common {

  trips(){}
  passengers(){}
}

Driver.prototype.id = 0;


class Passenger extends Common{
  constructor(name){}
}
