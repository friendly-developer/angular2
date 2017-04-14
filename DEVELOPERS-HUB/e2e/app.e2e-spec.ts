import { DEVELOPERSHUBPage } from './app.po';

describe('developers-hub App', () => {
  let page: DEVELOPERSHUBPage;

  beforeEach(() => {
    page = new DEVELOPERSHUBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
