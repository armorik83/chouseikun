import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Rx'

@Injectable()
export class AuthServiceMock {
  whenLoggedIn$ = new Subject<any>()
  whenLoggedOut$ = new Subject<any>()

  statusIsLoggedIn() {
    return false
  }

  statusIsNotLoggedIn() {
    return false
  }
}
