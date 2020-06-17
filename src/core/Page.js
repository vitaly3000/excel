export class Page {
  constructor(params) {
    this.params = params;
  }
  getRoot() {
    throw new Error('method "getRoot shoud be implemented"');
  }
  afterRender() {}
  destroy() {}
}
