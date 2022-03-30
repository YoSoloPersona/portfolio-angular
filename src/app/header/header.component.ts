import { Component, OnInit } from '@angular/core';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _langs: string[];

  get langs() {
    return this._langs;
  }

  selectedLang = '';

  constructor(private _translocoService: TranslocoService) {
    this._langs = _translocoService.getAvailableLangs() as string[];
    this.selectedLang = this._langs[0];
  }

  ngOnInit(): void {
  }

  onClickLang(index: number) {
    this._translocoService.setActiveLang(this._langs[index]);
    this.selectedLang = this._langs[index];
  }
}
