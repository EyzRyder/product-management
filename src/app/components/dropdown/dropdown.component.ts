import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface DropdownValue {
    value: string;
    func: () => void;
    active: boolean;
}

@Component({
    selector: 'dropdown',
    standalone: true,
    imports: [CommonModule],
    template: `
  <div class="dropdownContainer">
    <button (click)="changeOpenStatus()">Colunas</button>
    <ul *ngIf="isOpen">
        <li *ngFor="let val of getValues(values)" (click)="changeColumnStatus(val[0])">
            {{val[0]}}
        </li>
    </ul>
  </div>
  `,
    styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
    isOpen: boolean = false;

    @Input()
    //values: DropdownValue[] = [];
    values: Map<string,boolean> = new Map<string,boolean>();


    constructor() {
    }

    changeColumnStatus(key:string){
        if (!this.values.has(key)) return
            const val = this.values.get(key);
        this.values.set(key,!val);
        console.log(this.values)
    }

    changeOpenStatus() {
        this.isOpen = !this.isOpen
    }

    getValues(map:Map<string,boolean>){
        return Array.from(map.entries())
    }

}
