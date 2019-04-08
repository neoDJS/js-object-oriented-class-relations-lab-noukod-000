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

      store.drivers.push(this);
    }

  trips(){}
  passengers(){}
}

Driver.prototype.id = 0;


class Passenger{
    constructor(name){
      this.name = name;
      ++this.id;

      store.passengers.push(this);
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

    store.trips.push(this);
  }

  driver(){
    return store.drivers.find(
        function(driver) {
            return driver.id === this.driverId;
        }.bind(this)
    );
  }

  passenger(){
    return store.passengers.find(
        function(passenger) {
            return passenger.id === this.passengerId;
        }.bind(this)
    );
  }
}

Trip.prototype.id = 0;
