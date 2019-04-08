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

  trips(){}
  drivers(){}
}

Passenger.prototype.id = 0;

class Trip{
  constructor(driver, passenger){
    this.driver = driver
    this.passenger = passenger
  }
}

Passenger.prototype.id = 0;
