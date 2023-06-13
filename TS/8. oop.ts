abstract class Duck {
  protected name: string;

  constructor(name: string) {
      this.name = name;
  }
}

class RubberDuck extends Duck {
  readonly height = 180;
}

const duck = new RubberDuck('Howard');

console.log(duck);