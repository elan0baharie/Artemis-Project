import { ArtemisAssessPage } from './app.po';

describe('artemis-assess App', () => {
  let page: ArtemisAssessPage;

  beforeEach(() => {
    page = new ArtemisAssessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
