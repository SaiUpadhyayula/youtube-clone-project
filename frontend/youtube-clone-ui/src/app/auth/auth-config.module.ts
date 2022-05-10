import {NgModule} from '@angular/core';
import {AuthModule} from 'angular-auth-oidc-client';


@NgModule({
  imports: [AuthModule.forRoot({
    config: {
      authority: 'https://programmingtechie.eu.auth0.com',
      redirectUrl: "http://localhost:4200/callback",
      clientId: '4RqbbmO1XmlXjkvoRQ72fbUOorec0vhY',
      scope: 'openid profile offline_access email',
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true,
      secureRoutes: ['http://localhost:8080/'],
      customParamsAuthRequest: {
        audience: 'http://localhost:8080/'
      }
    }
  })],
  providers: [],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
