import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SignInComponent } from '../blog/user/sign-in/sign-in.component';
import { UserInfoComponent } from '../blog/user/user-info/user-info.component';
import { UserProfileComponent } from '../blog/user/user-profile/user-profile.component';
import { FormControlComponent } from '../blog/user/user-profile/dynamic-form/form-control.component';
import { TrimStringPipe } from './pipes/trim-string.pipe';
import { SanitizeHtmlPipe } from './pipes/sanitize-html-pipe';
import { StripHtmlPipe } from './pipes/strip-html.pipe';
import { PickListModule } from 'primeng/picklist';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    PickListModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignInComponent,
    UserInfoComponent,
    UserProfileComponent,
    FormControlComponent,
    TrimStringPipe,
    SanitizeHtmlPipe,
    StripHtmlPipe
  ],
  exports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    PickListModule,
    SignInComponent,
    UserInfoComponent,
    UserProfileComponent,
    TrimStringPipe,
    SanitizeHtmlPipe,
    StripHtmlPipe
  ]
})

export class SharedModule {

}