import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Ibm} from '@models/vo/ibm';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IbmStoreActions} from '@root-store/ibm-store';
import {JValidators} from '../../../../core/utils/j-validators';


@Component({
  selector: 'app-ibm-edit',
  templateUrl: './ibm-edit.component.html',
  styles: [``]
})
export class IbmEditComponent extends PopUpBaseComponent<Ibm> {

  form: FormGroup; // form

  id: FormControl; // attributo
  name: FormControl; // attributo
  value: FormControl; // attributo

  setItemPerform(value: Ibm): void {
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {
    this.id = this.fb.control({value: '', disabled: true});
    this.name = this.fb.control('', JValidators.required());
    this.value = this.fb.control('', [JValidators.required(), JValidators.maxLength(2)]);

    this.form = this.fb.group({
      id: this.id, // attributo
      name: this.name, // attributo
      value: this.value // attributo
    });
  }

  acceptPerform(item: Ibm): void {
    if (item.id) {
      this.store$.dispatch(IbmStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(IbmStoreActions.CreateRequest({
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
