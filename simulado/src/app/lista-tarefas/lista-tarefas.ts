import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-lista-tarefas',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css'
})
export class ListaTarefas {
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {
    this.atualizar();
  }

  atualizar() {
    this.tarefas = this.tarefaService.listar();
  }

  remover(id: number) {
    this.tarefaService.remover(id);
    this.atualizar();
  }

  concluir(id: number) {
    this.tarefaService.marcarConcluida(id);
    this.atualizar();
  }

  total() {
    return this.tarefas.length;
  }

  concluidas() {
    return this.tarefas.filter(t => t.concluida).length;
  }

  pendentes() {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}
