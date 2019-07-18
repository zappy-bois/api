
class Controller2 {
  get(req, res) {
    console.log('Hey! We received a request on Controller2');
    res.status(200).json('Controller2 got your request!');
  }
}

export default new Controller2();
