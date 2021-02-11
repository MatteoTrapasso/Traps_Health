import {Injectable} from '@angular/core';
import {Structure} from '@models/vo/structure';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class StructureService extends BaseCrudService<Structure> {
	public service = environment.webServiceUri + 'structure';
}
