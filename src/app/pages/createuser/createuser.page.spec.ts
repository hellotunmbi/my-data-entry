import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateuserPage } from './createuser.page';

describe('CreateuserPage', () => {
  let component: CreateuserPage;
  let fixture: ComponentFixture<CreateuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
