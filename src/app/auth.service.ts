export class AuthService {
  loggedIn = false;

  isAthenticated() {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 8000);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
