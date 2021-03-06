/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing'
import {AngularFire} from 'angularfire2'

import {UsersRepositoryService} from './users-repository.service'
import {AngularFireMock} from '../../vendor-mocks/angular-fire.mock'

describe('UsersRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersRepositoryService,
        {provide: AngularFire, useClass: AngularFireMock}
      ]
    })
  })

  it('should ...', inject([UsersRepositoryService], (service: UsersRepositoryService) => {
    expect(service).toBeTruthy()
  }))
})
