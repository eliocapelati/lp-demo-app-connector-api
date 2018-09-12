import { TestBed, async, inject } from '@angular/core/testing';
import {StateStorage} from "./state-storage";

import { ConversationManager } from './conversation-manager';
import {SendApiService} from "../services/send-api.service";

describe('ConversationManager', () => {
  beforeEach(() => {
    const sendApiService = jasmine.createSpy('SendApiService');
    const stateManager = jasmine.createSpy('StateStorage');

    TestBed.configureTestingModule({
      providers: [ConversationManager,
        {provide: SendApiService, useValue: sendApiService},
        {provide: StateStorage, useValue: stateManager}]
    });
  });

  it('should inject the service', inject([ConversationManager], (intercptor: ConversationManager) => {
    expect(intercptor).toBeTruthy();
  }));


});
