class User {
    constructor() { this.followers = []; }
    subscribe(f) { this.followers.push(f); }
    post(msg) { this.followers.forEach(f => f.update(msg)); }
}