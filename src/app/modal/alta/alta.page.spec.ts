import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AltaPage } from './alta.page';

describe('AltaPage', () => {
  let component: AltaPage;
  let fixture: ComponentFixture<AltaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
