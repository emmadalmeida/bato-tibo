import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'bato-tibo',
  webDir: 'www',
  server: {
    url: 'http://10.188.195.205:8100',
    cleartext: true
  }
};

export default config;
