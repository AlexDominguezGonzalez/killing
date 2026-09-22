// URL del servidor WebSocket persistente del juego en producción.
// Ejemplo: window.GAME_WS_URL = 'wss://juego-ws.tudominio.com';
// Déjalo vacío para usar el servidor local iniciado con npm start / INICIAR.bat.
window.GAME_WS_URL = '';
// En local y en Vercel se conecta a la misma URL. Si alojas WebSockets en otro
// proveedor, asigna arriba su URL wss:// y tendrá prioridad.
window.USE_SAME_ORIGIN_WS = true;
