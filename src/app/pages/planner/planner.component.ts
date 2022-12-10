import { Component } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  plannerTasks: any[] = [];
  inputValue = '';
  addTask(): void {
    const newTask = { text: this.inputValue, done: false };

    if (this.inputValue.trim() !== '') {
      this.plannerTasks.push(newTask);
    }

    this.inputValue = '';
  }

  deleteTask(index: number): void {
    this.plannerTasks.splice(index, 1);
  }

  get addCompletedTasks(): number {
    return this.plannerTasks.filter((task) => task.done).length;
  }
}
