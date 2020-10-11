"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_PORT = void 0;
/* Definir las constantes o variables de todo el proyecto
*  Heroku nos da el process.env
*/
exports.SERVER_PORT = Number(process.env.PORT) || 5000;
