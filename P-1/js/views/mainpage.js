class Mainpage {
  constructor($body) {
    this.$body = $body;
  }
  createMainList() {
    const list = document.createElement('li');
    const date = document.createElement('div');
    const summary = document.createElement('button');
    const writer = document.createElement('div');
    list.appendChild(date);
    list.appendChild(summary);
    list.appendChild(writer);
  }

  render() {}
}

export default Mainpage;
