const register = async (user) => {

    const response = await fetch('/user/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    console.log(response.json())
    return response.json();
}

const login = async (user) => {

    const response = await fetch('/user/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    console.log(response.json())
    return response.json();
}
export  { login, register }