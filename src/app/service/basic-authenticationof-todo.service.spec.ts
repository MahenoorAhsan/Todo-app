import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationofTodoService } from './basic-authenticationof-todo.service';

describe('BasicAuthenticationofTodoService', () => {
  let service: BasicAuthenticationofTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthenticationofTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
