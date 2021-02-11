import {Injectable} from '@angular/core';
import {Car} from '@models/vo/car';
import {environment} from '../../../environments/environment';
import {BaseCrudService} from 'ngrx-entity-crud';

@Injectable({
	providedIn: 'root'
})
export class CarService extends BaseCrudService<Car> {
	public service = environment.webServiceUri + 'car';
}
