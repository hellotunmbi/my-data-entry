import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateorderPage } from './createorder.page';

describe('CreateorderPage', () => {
  let component: CreateorderPage;
  let fixture: ComponentFixture<CreateorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
