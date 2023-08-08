import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Setting from "./views/Setting.js";
// frontend/static/js/index.js

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Setting },
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

    console.log("match", match);
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match);
};

// 뒤로 가기, 앞으로 가기, 새로고침 시 router 함수 호출
window.addEventListener("popstate", router);

// data-link가 걸려있는 a tag 클릭 시 navigate 후 router 함수 호출
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});
