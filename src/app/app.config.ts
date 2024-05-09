import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProvider } from './interceptors/authInterceptorProvider';

export const appConfig: ApplicationConfig = {
  providers: [
    authInterceptorProvider,
    importProvidersFrom(HttpClientModule),
    provideRouter(routes)]
};
