import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Car} from '@models/vo/car';
import {FormGroup} from '@angular/forms';
import {CarStoreActions} from '@root-store/car-store';


@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styles: [``]
})
export class CarEditComponent extends PopUpBaseComponent<Car> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Car): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Car): void {
    if (item.id) {
      this.store$.dispatch(CarStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(CarStoreActions.CreateRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    }
  }

  // cancel(): void {
  //   this.store$.dispatch(closePopUpAction(this.route));
  // }
}
