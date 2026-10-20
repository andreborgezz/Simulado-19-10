import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css'
})
export class CadastrarTarefa {
  nome: string = '';
  prazo: string = '';

  constructor(private tarefaService: TarefaService) {}

  cadastrar(): void {
    if (this.nome.trim() !== '') {
      this.tarefaService.adicionar(this.nome, this.prazo);
      this.nome = '';
      this.prazo = '';
    }
  }
}
