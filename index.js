class Common{
    constructor(name){
      this.name = name;
      ++this.id;
    }
}

class Driver extends Common {
    constructor(name){
      this.name = name;
      ++this.id;
    }

  trips(){}
  passengers(){}
}

Driver.prototype.id = 0;


class Passenger extends Common{
    constructor(name){
      this.name = name;
      ++this.id;
    }
}

Passenger.prototype.id = 0;
