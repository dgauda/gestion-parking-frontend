import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from 'src/app/shared/table/table.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tipos-tarifa',
  templateUrl: './tipos-tarifa.component.html',
  styleUrls: ['./tipos-tarifa.component.scss']
})
export class TiposTarifaComponent implements OnInit {

  subscriptions: Subscription = new Subscription();
  literals: any = {};

  constructor(private readonly translationService: TranslateService) { }

  @ViewChild(TableComponent) table: TableComponent;

  ngOnInit() {
    this.getTranslations();
  }

  private getTranslations() {
    const currentLang = this.translationService.currentLang;
    this.translationService.getTranslation(currentLang).subscribe(translations => {
      this.literals = translations;
    });
    this.translationService.onLangChange.subscribe( translations => {
      this.literals = translations.translations;
    });
  }

}
