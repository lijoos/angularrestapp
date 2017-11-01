import { AngularWebApiPage } from './app.po';

describe('angular-web-api App', function() {
  let page: AngularWebApiPage;

  beforeEach(() => {
    page = new AngularWebApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
