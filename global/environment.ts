/* Definir las constantes o variables de todo el proyecto
*  Heroku nos da el process.env
*/
export const SERVER_PORT: number = Number(process.env.PORT) || 5000