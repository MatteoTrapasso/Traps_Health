import {Injectable} from '@angular/core';
import {Ibm} from '@models/vo/ibm';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class IbmService extends BaseCrudService<Ibm> {
	public service = environment.webServiceUri + 'ibm';
}
