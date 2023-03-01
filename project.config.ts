enum Browser {
    CHROME = 'chromium',
    FIREFOX = 'firefox',
    WEBKIT = 'webkit',
}

class Project {
    name: string;
    use: object;
    constructor(browser: Browser) {
      this.name = `${browser}`;
      this.use = { browserName: browser };
    }
  }
  
  const chrome = new Project(Browser.CHROME);
  const firefox = new Project(Browser.FIREFOX);
  const webkit = new Project(Browser.WEBKIT);
  
  let browserConfigs = [chrome, firefox, webkit];
  
  let project_configs = [...browserConfigs];
  export default project_configs;
  
