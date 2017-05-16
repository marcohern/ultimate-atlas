import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UserRoutes } from '../user.routes';

import { AuthorizedGuard } from '../../../auth/authorized.guard';

import { UserListComponent } from '../user-list/user-list.component';

import { UserService } from '../user.service';
import { RequestService } from '../../../request.service';
import { ConfigService } from '../../../config.service';

import { UserDetailComponent } from './user-detail.component';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

class ActivatedRouteStub {
  route: {
    snapshot: {
      params: {
        id: number
      }
    }
  };
}

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, RouterTestingModule, UserRoutes],
      declarations: [ UserDetailComponent, UserListComponent ],
        providers: [
          AuthorizedGuard,
          UserService, ConfigService, RequestService
          //{ provide: ActivatedRoute, useClass: ActivatedRouteStub },
          //{ provide: Router, useClass: RouterStub }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
