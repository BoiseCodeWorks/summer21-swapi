import { ProxyState } from "./AppState.js";
import { StarshipsController } from "./Controllers/StarshipsController.js";

class App {
  starshipsController = new StarshipsController()
}


// NOTE only for debugging
// @ts-ignore
window.proxyState = ProxyState
window["app"] = new App();
