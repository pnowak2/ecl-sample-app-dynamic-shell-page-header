import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { PageHeaderService } from './core/services/page-header.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy, OnInit {
    pageHeaderTitle: string;
    pageHeaderDescription: string;

    constructor(
        private pageHeaderService: PageHeaderService,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.pageHeaderService.state$.subscribe(({ title, description }) => {
            this.pageHeaderTitle = title;
            this.pageHeaderDescription = description;
            this.cd.detectChanges();
        });
    }

    ngOnDestroy() {
        // handle subscription cleanup here..
    }
}
