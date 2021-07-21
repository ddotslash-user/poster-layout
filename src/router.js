const routes = {
    '/': { name: 'app-home' },
    '/post': { name: 'app-post'}
}

class Router extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const path = window.location.pathname;
        const route = routes[path];
        if(route) {
            this.setContent(route.name);
        }
    }

    setContent(name) {
        this.innerHTML = `<${name}></${name}>`
    }
} 

customElements.define('app-router', Router);