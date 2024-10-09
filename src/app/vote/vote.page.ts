import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
@Component({
  selector: 'app-vote',
  templateUrl: './vote.page.html',
  styleUrls: ['./vote.page.scss'],
})
export class VotePage implements OnInit {

  players = [
    { id: 1, name: 'Player 1' },
    { id: 2, name: 'Player 2' },
    { id: 3, name: 'Player 3' },
  ]; 
  selectedPlayer: number | null = null; // Ensure initialization

  constructor(private voteService: VoteService) {}
  ngOnInit(): void {
    // Initialize any additional data if necessary
  }
  submitVote() {
    if (this.selectedPlayer !== null) {
      this.voteService.submitVote(this.selectedPlayer).subscribe({
        next: (response) => {
          console.log('Vote submitted successfully:', response);
          // Handle the response, like showing a confirmation message
        },
        error: (error) => {
          console.error('Error submitting vote:', error);
          // Handle errors
        }
      });
    } else {
      console.log('No player selected');
    }
  }
}