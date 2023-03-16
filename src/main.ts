import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// /*loader*/
// import './assets/js/pace.min.js';
//
// import './assets/js/bootstrap.bundle.min.js';
//
// /* plugins */
// import './assets/plugins/simplebar/js/simplebar.min.js';
// import './assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js';
//
// // import './assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js';
//
// /* chartjs */
// import './assets/plugins/chartjs/js/Chart.min.js';
// import './assets/plugins/chartjs/js/Chart.extension.js';
//
// /* index JS */
// import './assets/js/index.js';
//
// /* app JS */
// import './assets/js/app.js';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
