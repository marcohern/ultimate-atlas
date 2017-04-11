import { UltimateAtlasPage } from './app.po';

describe('ultimate-atlas App', () => {
  let page: UltimateAtlasPage;

  beforeEach(() => {
    page = new UltimateAtlasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
