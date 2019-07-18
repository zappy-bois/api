
class Controller1 {
  get(req, res) {
    console.log('Hey! We received a request on Controller1');
    res.status(200).json('Controller1 got your request!');
  }
}

export default new Controller1();
