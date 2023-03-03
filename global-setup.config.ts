// global-setup.ts
const config = require('../../env.config');
//import { chromium, FullConfig } from '@playwright/test';
//import { Storage_States } from './env.config';
//import {
//  Account,
//  accounts,
//} from 
//import { TUser } from 
//
//let users: Array<Account> = [
//  {
//    email: process.env.AGENCY_DEFAULT,
//    storage:
//      process.env.STORAGE_STATE_AGENCY_DEFAULT || Storage_States.AGENCY_DEFAULT,
//    account: accounts.Agency,
//  },
//  {
//    email: process.env.USER,
//    storage:
//      process.env.USERSTORAGE ||
//      Storage_States.FOODBANK_ADMIN_HOUSTON,
//    account: accounts.ACCOUNTTYPE,
//  },
//];
//
////Warning for missing .env variables
//async function warning(user: Account, password: string) {
//  if (!user.email || !password || !user.storage) {
//    console.log(
//      `The user or environmental password not found. Please be sure there is an environment specific .env file created containing appropriate values for the user.  The current state of required values are as follows:\nemail: ${user.email}\nstorage: ${user.storage}\npassword: ${password} }`
//    );
//  }
//}
////Login Function
//async function login(user: Account) {
//  const browser = await chromium.launch();
//  const page = await browser.newPage();
//  await page.goto(`${process.env.BASE_URL}/login`, { timeout: 90000 });
//  const username: string = user.email || '';
//  const password: string = process.env.PASSWORD || '';
//  await warning(user, password);
//  console.log(user);
//  await page
//    .locator('')
//    .type(username);
//  await page.locator('').type(password);
//  await page.locator('').click();
//  await page.waitForURL(`${process.env.BASE_URL}/${user.account.landingUrl}`, {
//    timeout: 90000,
//  });
//  await page.context().storageState({ path: `storage-states/${user.storage}` });
//  await browser.close();
//}
//
////Global Setup Main function
//async function globalSetup(config: FullConfig) {
//  for (const user of users) {
//    await login(user);
//  }
//}
//
//export default globalSetup;
