import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'In.Sanfy.Healtho',
  appName: 'Healtho',
  webDir: 'dist/webapp',
  server: {
    androidScheme: 'https'
  }
};

export default config;
