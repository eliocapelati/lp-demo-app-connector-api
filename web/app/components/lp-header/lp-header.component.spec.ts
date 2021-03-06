import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LpHeaderComponent } from './lp-header.component';
import {LpNavComponent} from "./lp-nav/lp-nav.component";
import {LpNavMenuComponent} from "./lp-nav-menu/lp-nav-menu.component";
import {MaterialModule} from "../../material.module";
import {AuthenticationService} from "../../core/services/authentication.service";
import {Router} from "@angular/router";

describe('LpHeaderComponent', () => {
  let component: LpHeaderComponent;
  let fixture: ComponentFixture<LpHeaderComponent>;

  beforeEach(async(() => {
    const authenticationService = jasmine.createSpy('AuthenticationService');
    const router = jasmine.createSpy( 'Router');

    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ LpHeaderComponent, LpNavComponent, LpNavMenuComponent ],
      providers: [
        {provide: AuthenticationService, useValue: authenticationService},
        {provide:Router, useValue: router}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
