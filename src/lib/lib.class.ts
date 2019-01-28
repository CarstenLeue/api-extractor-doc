import { Observable } from 'rxjs';

export class MyClass {
  /**
   * Doc of my exported function
   *
   * @param aParam - first parameter
   * @param aObs$ - second parameter
   * @returns the return value
   */
  myFunction(aParam: string, aObs$: Observable<string>): string {
    return '';
  }
}
