import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  tarefas: Tarefa[] = [];
  proximoId: number = 1;

  listar(): Tarefa[] {
    return this.tarefas;
  }

  adicionar(nome: string, prazo: string): void {
    const novaTarefa: Tarefa = {
      id: this.proximoId++,
      nome: nome,
      prazo: prazo,
      concluida: false
    };
    this.tarefas.push(novaTarefa);
  }

  remover(id: number): void {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }

  marcarConcluida(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = true;
    }
  }
}
