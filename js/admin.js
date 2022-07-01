// https://fuzzy-c-mean-admin.vercel.app/

function handleLogin() {

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    (async () => {
        let req = await fetch(`https://fuzzy-c-mean-api-production.up.railway.app/api/authorize/${username}/${password}`);
        let res = await req.json();

        if (res.is_okay) {
            alert("Login succecss");
            window.location.href = "https://fuzzy-c-mean-admin.vercel.app";
        } else {
            alert("Login fail!");
        }
    })();
}

document.querySelector("#login").addEventListener("click", handleLogin);