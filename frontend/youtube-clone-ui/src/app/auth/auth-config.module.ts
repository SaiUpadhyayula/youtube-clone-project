import {NgModule} from '@angular/core';
import {AuthModule} from 'angular-auth-oidc-client';


@NgModule({
  imports: [AuthModule.forRoot({
    config: {
      authority: 'https://programmingtechie.eu.auth0.com',
      redirectUrl: window.location.origin,
      clientId: 'p1M5laciMpSQr6Eg0XghX57jIoSYsUtj',
      scope: 'openid profile offline_access',
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true
    }
  })],
  providers: [],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
