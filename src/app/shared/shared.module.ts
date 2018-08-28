import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NofoundpageComponent } from './nofoundpage/nofoundpage.component';


@NgModule({

    imports: [ 
        RouterModule,
        CommonModule
    ],

    declarations: [
        NofoundpageComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NofoundpageComponent,
    ]

})

export class SharedModule {  }
