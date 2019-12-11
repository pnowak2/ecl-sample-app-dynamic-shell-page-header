import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

export interface ApplicationPageHeader {
    title?: string;
    description?: string;
}

@Injectable({ providedIn: 'root' })
export class PageHeaderService {
    public state$: Subject<ApplicationPageHeader> = new BehaviorSubject<ApplicationPageHeader>({
        title: 'Hello ECL',
        description: 'This is application starter'
    });

    update(model: ApplicationPageHeader) {
        this.state$.next(model);
    }
}
