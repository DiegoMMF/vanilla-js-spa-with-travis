import { Character } from "../pages/Character.js";
import { Error404 } from "../pages/Error404.js";
import { Home } from "../pages/Home.js";
import { Header } from "../templates/Header.js";

const routes = {
    '/': Home,
    '/:id': Character,
    '/*': Error404,
}

export const router = window.addEventListener(
    'load',
    async () => {
        const header = document.getElementById('header') || null
        // const header = document.getElementById('header') ?? null
        const content = null || document.getElementById('content')
        // const content = document.getElementById('content') ?? null

        // header.innerHTML = '<p>Hola</p>' // Header()
        console.log(header)
    }
);