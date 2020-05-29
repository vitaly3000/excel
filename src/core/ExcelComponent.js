import { DomListener } from '@core/DomListener';
export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];
    this.prepare();
  }
  // Настраивает наш компонент до init
  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return '';
  }
  // уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }
  // подписываемся на события
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  // инициализируем компонент
  // Добавляем DOM слушателей
  init() {
    this.initDOMListeners();
  }
  // Удаляем компонент
  // чистим слушателей
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
