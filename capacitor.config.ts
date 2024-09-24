import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.docente.app',
  appName: 'Geo Docentes',
  webDir: 'dist/app-docente',
  server: {
    hostname: "geoeducacion.com.ar/appdocentes/",
    androidScheme: 'https'
  }
};

export default config;
