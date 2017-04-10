import { NeuTravelPage } from './app.po';

describe('neu-travel App', function() {
  let page: NeuTravelPage;

  beforeEach(() => {
    page = new NeuTravelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
