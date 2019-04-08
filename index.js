class common{
    constructor(name){
      this.name = name;
      ++this.id;
    }
}

class Driver{

  trips(){}
  passengers(){}
}

Driver.prototype.id = 0;


class Passenger{
  constructor(name){}
}
