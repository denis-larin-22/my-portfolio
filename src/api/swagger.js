export class Feedback {
    baseUrl = 'https://todo.hillel.it';
    token = '';

    async login() {
        const response = await fetch(`${this.baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                value:  process.env.REACT_APP_FEEDBACK_LOGIN,
            })
        });
        const tokenValue = await response.json();
        return tokenValue.access_token;
    }

    async postMessage(objMessage, token) {
        const response = await fetch(`${this.baseUrl}/todo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({...objMessage,  priority: 1})
        });

        return await response.json();
    }
}