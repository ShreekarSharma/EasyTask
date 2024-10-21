import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Finalize whitepaper for decentralized internet',
      summary:
        'Complete the whitepaper for the new decentralized internet project',
      dueDate: '2024-10-02',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Coordinate investor meeting',
      summary: 'Organize and prepare materials for the upcoming investor pitch',
      dueDate: '2024-10-02',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Optimize compression algorithm',
      summary: 'Improve the efficiency of the data compression algorithm',
      dueDate: '2024-10-02',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Monitor server security',
      summary: 'Check the security protocols for the distributed servers',
      dueDate: '2024-10-02',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Review legal contracts',
      summary: 'Go over the legal contracts for upcoming partnerships',
      dueDate: '2024-10-02',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Pitch to new investors',
      summary:
        'Attend a meeting to pitch Pied Piper to potential new investors',
      dueDate: '2024-10-02',
    },
    {
      id: 't7',
      userId: 'u1',
      title: 'Debug system scaling issue',
      summary: 'Identify and resolve the system’s scalability problems',
      dueDate: '2024-10-02',
    },
    {
      id: 't8',
      userId: 'u2',
      title: 'Employee onboarding meeting',
      summary: 'Lead the onboarding session for new hires at Pied Piper',
      dueDate: '2024-10-02',
    },
    {
      id: 't9',
      userId: 'u3',
      title: 'Refactor legacy code',
      summary: 'Clean up and refactor old code for better performance',
      dueDate: '2024-10-02',
    },
    {
      id: 't10',
      userId: 'u4',
      title: 'Setup new database cluster',
      summary: 'Configure the new distributed database for high availability',
      dueDate: '2024-10-02',
    },
  ];
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
