export const getHash = () => location.hash           // '#/about'
                                .slice(2)            // 'about'
                                .toLocaleLowerCase() // por las dudas...
                                || '/'               // para != ''