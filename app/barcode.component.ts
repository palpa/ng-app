import {Component} from 'angular2/core';
import barcodescanner from './barcode-scanner';

function emptyItem() {
  return { code: '', desc: '' };
}

@Component({
  selector: 'my-barcode',
  template: `
<StackLayout orientation="vertical">
    <TextField [(ngModel)]="formItem.code" hint="Code" keyboardType="number"></TextField>
    <TextField [(ngModel)]="formItem.desc" hint="Description"></TextField>
    <Button text="Scan" (tap)="scan()"></Button>
    <Button text="Add" (tap)="add(formItem)"></Button>
    <ListView [items]="items">
        <template #item="item">
            <StackLayout>
                <Label [text]=item.code></Label>
                <Label [text]=item.desc></Label>
            </StackLayout>
        </template>
    </ListView>
</StackLayout>
`,
})
export class BarcodeComponent {
  items = [];
  formItem = emptyItem();

  scan() {
    barcodescanner.scan('Scan').then(
      result => this.formItem.code = result
    );
  }

  add(item) {
    this.items.push(item);
    this.formItem = emptyItem();
  }
}