import { Component, OnInit } from '@angular/core';

import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
})
export class EntryListComponent implements OnInit {

  constructor(private entryService: EntryService) { }

  entries: Entry[] = [];

  ngOnInit() {
    this.entryService.getAll()
      .subscribe(entries => this.entries = entries, error => alert('error ao carregar a lista'))
  }

  deleteEntry(entry) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    console.log('meu id', entry)
    if (mustDelete) {
      this.entryService.delete(entry).subscribe(
        () => this.entries = this.entries.filter(element => element.id != entry),
        () => alert("Erro ao tentar excluir")
      )
    }
  }
}
