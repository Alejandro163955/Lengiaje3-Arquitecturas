class Middleware { setNext(m) { this.next = m; return m; } handle(req) { if(this.next) return this.next.handle(req); } }
class AuthMiddleware extends Middleware {
    handle(req) { if(req.user) return super.handle(req); return "Error: No autenticado"; }
}