import { observable } from 'mobx';

class TodoStore {
  @observable
  public todos = []

  constructor() {

  }

}

export default TodoStore;
