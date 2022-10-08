import { router } from "./routes/index.js";

window.addEventListener('load', router);
// ejecuta router() al cargarse la página por primera vez

window.addEventListener('hashchange', router);
// ejecuta router() cada vez que cambiamos el hash (url relativa)