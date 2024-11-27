import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  name: string = '';
  comment: string = '';
  feedback: any = {};

  private apiUrl =
    'https://moodtrackerclientfunctionapp.azurewebsites.net/api/FeedbackFunction?code=L7R7qQyflXJXIfsvcoh5a28707nUxAMgHZunLEeHmEUSAzFuEQ8GrA%3D%3D'; // Example API

  async submitFeedback() {
    this.feedback = { name: this.name, comment: this.comment };

    try {
      const response = await axios
        .post(this.apiUrl, this.feedback)
        .then((response) => {
          // Handle the successful response
          console.log('Response:', response.data);
          alert(response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error('Error:', error);
          alert(error);
        });
      return response;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }
}
