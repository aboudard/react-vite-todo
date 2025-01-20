import { makeAutoObservable } from "mobx";

class AppStore {
  title = "";

  constructor(title: string) {
    makeAutoObservable(this);
    this.title = title;
  }

  setTitle(title: string) {
    this.title = title;
  }
}

export default AppStore;
