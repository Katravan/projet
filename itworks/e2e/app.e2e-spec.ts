import { ItworksPage } from './app.po';

describe('itworks App', () => {
  let page: ItworksPage;

  beforeEach(() => {
    page = new ItworksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
