fx_version "cerulean"
game "gta5"
lua54 "yes"

author "Nevos"
description "FiveM TypeScript Boilerplate with React"
version "0.1"

ui_page "web/dist/index.html"
-- ui_page "http://localhost:5173"
files {
    "web/dist/*",
    "web/dist/**/*",
}

server_scripts {
    "game/dist/server.js"
}

client_scripts {
    "game/dist/client.js"
}
