const form = document.getElementById("signIn");
const signButton = document.getElementById("signButton");

const localAdminBase = ["goalOriented"];

// role editor permission handle

signButton.addEventListener("click", (e) => {
    
    e.preventDefault
    
    const name = form.name.value;
    const password = form.password.value;
    const roleSelect = form.role.value;

    let editPerms = false;

    if(roleSelect === "moderator") {
        location.assign("dataEditor.html");
    } else {
        location.assign("dataViewer.html");
    }

    // localAdminBase.forEach((passKey) => {
    //     if(passKey == password) {
    //         location.assign("dataEditor.html");
    //     }
    // })

    // if(password in localAdminBase) {
    //     location.assign("dataEditor.html");
    // } else {
    //     location.assign("dataViewer.html");
    // };


    return roleSelect;
});

