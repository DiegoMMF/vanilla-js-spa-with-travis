import { Character } from "../pages/Character.js";
import { Error404 } from "../pages/Error404.js";
import { Home } from "../pages/Home.js";
import { Header } from "../templates/Header.js";
import { getHash } from "../utils/getHash.js";
import { resolveRoutes } from "../utils/resolveRoutes.js";

const routes = {
    '/': Home,
    '/:id': Character,
    '/*': Error404,
}

export const router = async () => {
        const header = document.getElementById('header')
        const content = document.getElementById('content')
        
        header.innerHTML = Header()
}