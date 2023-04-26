import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDniComponent } from './consulta-dni.component';

describe('ConsultaDniComponent', () => {
  let component: ConsultaDniComponent;
  let fixture: ComponentFixture<ConsultaDniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaDniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
