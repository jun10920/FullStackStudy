// frontend/static/js/index.js

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Home") },
        { path: "/posts", view: () => console.log("Viewing Posts") },
        { path: "/settings", view: () => console.log("Viewing Settings") },
    ];

    // test
    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        };
    });

    let match = potentialMatches.find(
        (potentialMatches) => potentialMatches.isMatch
    );

    // 정해진 url이 아니면 Home으로 세팅
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }

    console.log(match);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});
