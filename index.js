class Common{
    constructor(name){
      this.name = name;
      ++this.id;
    }
}

class Driver{
    constructor(name){
      this.name = name;
      ++this.id;
    }

  trips(){}
  passengers(){}
}

Driver.prototype.id = 0;


class Passenger{
    constructor(name){
      this.name = name;
      ++this.id;
    }
}

Passenger.prototype.id = 0;
