import { makeAutoObservable, runInAction } from "mobx";
import { getTitle } from "../services/app-service";

class AppStore {
  title = "";

  constructor(title: string) {
    makeAutoObservable(this);
    this.title = title;
  }

  setTitle() {
    getTitle().then((title) => {
      runInAction(() => {
        this.title = title;
      });
    });
  }
}

export default AppStore;
