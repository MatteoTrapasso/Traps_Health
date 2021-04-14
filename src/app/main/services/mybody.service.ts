import {Injectable} from '@angular/core';
import {Mybody} from '@models/vo/mybody';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class MybodyService extends BaseCrudService<Mybody> {
	public service = environment.webServiceUri + 'mybody';
}
