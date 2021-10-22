export class AuthService {
  loggedIn = false;

  // Should realistically reach out to a server
  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    )
    return promise;
  }

  login(){
    this.loggedIn = true;
  }
  logout(){
    this.loggedIn = false;
  }
}
