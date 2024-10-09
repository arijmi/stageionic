import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.page.html',
  styleUrls: ['./upcoming-matches.page.scss'],
})
export class UpcomingMatchesPage{

  goToUpcomingMatches() {
    this.navCtrl.navigateForward('/upcoming-matches');
  }
  matches = [
    { id: 1, name: 'Match 1', date: '2024-08-30', location: 'Area 1', venue: 'Stadium A', dateTime: new Date('2024-08-30T18:00:00') },
    { id: 2, name: 'Match 2', date: '2024-08-31', location: 'Area 2', venue: 'Stadium B', dateTime: new Date('2024-08-31T20:00:00') },
    // Add more match data
  ];
  filteredMatches = [...this.matches];
  selectedLocation = 'all';
  constructor(private navCtrl: NavController ,private alertController: AlertController) { }

  



  filterdMatches() {
    if (this.selectedLocation == 'all') {
      this.filteredMatches = [...this.matches];
    } else {
      this.filteredMatches = this.matches.filter(match => match.location == this.selectedLocation);
    }
  }
  async registerForMatch(match: any) {
    const alert = await this.alertController.create({
      header: 'Registration Successful',
      message: `You have successfully registered for ${match.name}.`,
      buttons: ['OK']
    });

    await alert.present();
  }
  openDirections(match: any) {
    const encodedVenue = encodeURIComponent(match.venue);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodedVenue}`;
    window.open(url, '_blank');
  }
}



