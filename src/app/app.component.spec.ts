/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing'
import {AppComponent} from './app.component'
import {NO_ERRORS_SCHEMA} from '@angular/core'

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    TestBed.compileComponents()
  })

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
