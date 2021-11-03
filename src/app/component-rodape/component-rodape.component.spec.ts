import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRodapeComponent } from './component-rodape.component';

describe('ComponentRodapeComponent', () => {
  let component: ComponentRodapeComponent;
  let fixture: ComponentFixture<ComponentRodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRodapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
