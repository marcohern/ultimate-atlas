import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UserRoutes } from '../user.routes';

import { UserDetailComponent } from '../user-detail/user-detail.component';

import { UserService } from '../user.service';
import { RequestService } from '../../../request.service';
import { ConfigService } from '../../../config.service';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, RouterTestingModule, UserRoutes],
      declarations: [ UserListComponent,
        UserDetailComponent
      ],
      providers: [
        UserService, ConfigService, RequestService
        //{ provide: ActivatedRoute, useClass: ActivatedRouteStub },
        //{ provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
