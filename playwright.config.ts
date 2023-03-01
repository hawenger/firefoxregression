import { PlaywrightTestConfig } from '@playwright/test';
import project_configs from './project.config';


const config: PlaywrightTestConfig = {
  retries: 0,
  testDir: './tests',
  workers: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: '../Reports', open: 'always' }],
  ],
  use: {
    //launchOptions: {S
    //  slowMo: 100,
    //},
    //baseURL: process.env.BASE_URL,
    trace: 'on',
    //headless: true,
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'only-on-failure',
  },
  projects: [...project_configs],
};

export default config;