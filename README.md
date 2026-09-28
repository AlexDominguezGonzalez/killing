# 8 BITS BATTLE

Juego multijugador de navegador con servidor autoritativo. Vercel publica la web y un servicio Node persistente mantiene la partida y las conexiones WebSocket. Las funciones serverless de Vercel no pueden alojar este bucle de juego con conexiones WebSocket persistentes.

## Desarrollo local

1. Instala Node.js.
2. Ejecuta `npm install` una vez.
3. Ejecuta `npm run dev` para iniciar el juego en `http://localhost:3000`.
4. En la red local, los demás jugadores entran mediante la IP del equipo que ejecuta el servidor.

`INICIAR.bat` instala dependencias si hace falta, abre el navegador y ejecuta `npm run dev`.

## Publicar

1. Importa este repositorio en Vercel. El archivo `vercel.json` publica la web y `index.js` sirve `/api/config`.
2. Crea un servicio Web en Render desde el mismo repositorio. Render detecta `render.yaml`; el servicio usa `npm ci` y `npm start`. Espera a que el servicio esté disponible y copia su dominio, por ejemplo `https://8bits-battle-server.onrender.com`.
3. En las variables de entorno del proyecto Vercel, configura `GAME_WS_URL` con la URL WebSocket del servicio: `wss://8bits-battle-server.onrender.com` (usa `wss://`, no `https://`). Redepliega Vercel para aplicar el cambio.
4. En Render, copia el valor generado para `HOST_TOKEN`. El profesor abre la web de Vercel agregando `?host=TOKEN`, por ejemplo `https://tu-juego.vercel.app/?host=valor-secreto`. Los alumnos abren la URL pública normal, sin el parámetro.
5. El profesor entra con un nombre en el panel y pulsa **EMPEZAR PARTIDA** cuando haya al menos dos jugadores.

El servidor de Render es la autoridad de la partida y tiene que seguir activo durante el juego. `HOST_TOKEN` protege los controles del profesor; mantenlo privado y rótalo desde Render si se comparte. Los cambios en `server.js` requieren redeplegar Render; los cambios de web requieren redeplegar Vercel.

## Reglas y controles

- 3 vidas y 10 tiros por jugador y partida.
- La zona empieza a cerrarse a los 25 segundos.
- WASD o flechas para moverse, ratón para apuntar, clic o espacio para disparar y M para activar o silenciar el sonido.

Los ajustes principales (`MAX_SHOTS`, `MAX_HP`, `SPEED`, `ZONE_DELAY` y `MAP`) están al principio de `server.js`.
