import { MonacoEditorNgPage } from './app.po';

describe('monaco-editor-ng App', function() {
  let page: MonacoEditorNgPage;

  beforeEach(() => {
    page = new MonacoEditorNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
