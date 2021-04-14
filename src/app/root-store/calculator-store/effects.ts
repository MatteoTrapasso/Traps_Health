import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Calculator} from '@models/vo/calculator';

@Injectable()
export class CalculatorStoreEffects {
    constructor(private readonly actions$: Actions) {
    }
}
