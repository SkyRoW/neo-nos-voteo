import { NosWrapperModule } from './nos-wrapper.module';

describe('NosWrapperModule', () => {
  let nosWrapperModule: NosWrapperModule;

  beforeEach(() => {
    nosWrapperModule = new NosWrapperModule();
  });

  it('should create an instance', () => {
    expect(nosWrapperModule).toBeTruthy();
  });
});
