import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Tarefa } from '../../../Tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  descricao: string = '';
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;


  AlteraVisualizacao(valor: boolean){
    this.mostrarAddTarefa = valor;
  }

  
  onSubmit() {
    if (!this.tarefa || this.tarefa.length < 3) {
      alert('O campo "Tarefa deve ter pelo menos 3 caracteres!');
      return;
    }
  
    // Criação do objeto novaTarefa com os campos necessários
    const novaTarefa = {
      tarefa: this.tarefa,
      descricao: this.descricao,
      concluido: this.concluido
    }
  
    // Emite o evento para adicionar a tarefa
    this.onAddTask.emit(novaTarefa);
  
    // Limpa os campos após a submissão
    this.tarefa = '';
    this.descricao = '';
    this.concluido = false;
  }
  
}
