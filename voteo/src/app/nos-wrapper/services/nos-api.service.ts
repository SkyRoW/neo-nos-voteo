import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosApiService {

  nos;
  address;

  constructor() {
    if ((window as any).NOS) {
      this.nos = (window as any).NOS.V1;
    }
    this.getAddress().subscribe(
      address =>
        this.address = address
    );
  }

  isConnected() {
    return this.nos;
  }

  getAddress(): Observable<any> {
    if (this.nos) {
      return from(this.nos.getAddress());
    }
  }

  getBalance(asset: string, addres?: string) {

    //examples asset - NEO
    const NEO = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
    const address = 'AZPkgTJixxkSFPyBZrcVpLj9nsHsPDUVkF';

    if (!addres) {
      return this.nos.getBalance({asset});
    } else {
      this.nos.getBalance({asset, address});
    }
  }

  testInvoke(scriptHash: string, operation: string, args?: string[]): Observable<any> {
    if (this.nos) {
      return from(this.nos.testInvoke({scriptHash, operation, args}));
    }
  }

  invoke(scriptHash: string, operation: string, args?: string[]): Observable<any> {
    alert(args);

    if (this.nos) {
      return from(this.nos.invoke({scriptHash, operation, args}));
    }
  }

  getStorage(scriptHash: string, key: string) {
    if (this.nos) {
      return from(this.nos.getStorage({scriptHash, key}));
    }
  }

  claimGas(): Observable<string> {
    return from(this.nos.claimGas());
  }
}
