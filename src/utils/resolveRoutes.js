export const resolveRoutes = route => route.length > 3
        ? `/${route}`
        : route === '/' 
            ? route
            : '/:id';

/*
Hay menos de 999 personajes, por lo tanto, si son más de tres
caracteres luego de la '/' entonces debe ser un texto, y si son
menos, es una url parametrizada, ...o el home.
*/