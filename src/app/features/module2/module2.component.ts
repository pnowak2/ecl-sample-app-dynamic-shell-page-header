import { Component, OnInit } from '@angular/core';
import { PageHeaderService } from 'src/app/core/services/page-header.service';

@Component({
    templateUrl: './module2.component.html'
})
export class Module2Component implements OnInit {
    constructor(private pageHeaderService: PageHeaderService) { }

    ngOnInit() {
        this.pageHeaderService.update({
            title: 'Module 2',
            description: 'This is module 2 page'
        });
    }
}
