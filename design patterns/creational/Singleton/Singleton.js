const SingletonFactory = (() => {
  let instance;

  class Singleton {
    getName() {
      console.log("Class name");
    }
  }

  return {
    getInstance: () => {
      if (instance == null) {
        instance = new Singleton();
        instance.constructor = null;
      }
      return instance;
    },
  };
})();

const singleton = SingletonFactory.getInstance();
singleton.getName();