store = { drivers: [], passengers: [], trips: [] };
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
    this.driverId = driver.id
    this.passengerId = passenger.id
    ++this.id;
  }

  driver(){
    return store.trips.find(
        function(driver) {
            return driver.id === this.driverId;
        }.bind(this)
    );
  }

  passenger(){}
}

Trip.prototype.id = 0;
