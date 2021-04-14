import {Injectable} from '@angular/core';
import {Myprogress} from '@models/vo/myprogress';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class MyprogressService extends BaseCrudService<Myprogress> {
	public service = environment.webServiceUri + 'myprogress';
}
