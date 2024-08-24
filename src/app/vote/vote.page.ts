import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.page.html',
  styleUrls: ['./vote.page.scss'],
})
export class VotePage {
  players = [
    { id: 1, name: 'Player 1' },
    { id: 2, name: 'Player 2' },
    // Add more players
  ];
  selectedPlayer: number | null = null; // Initialize with null

  constructor() {}

  submitVote() {
    if (this.selectedPlayer !== null) { // Ensure selectedPlayer is not null
      console.log('Vote submitted for player ID:', this.selectedPlayer);
      // Handle the vote submission logic here
    } else {
      console.log('No player selected');
    }
  }
}