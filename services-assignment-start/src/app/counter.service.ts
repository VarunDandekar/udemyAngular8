export class CounterService {
 private counter:number = 0;
  count() {
    this.counter += 1;
    console.log("count", this.counter);
  }
}
