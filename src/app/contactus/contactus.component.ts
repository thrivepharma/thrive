import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  activMap = 'Mumbai';
  corporate = true;
  mumbai = false;
  thane = false ;
  contactInfo = [
    { title: 'General Informaton', subtitle: 'Inquiry', id: 'info@thriveworld.com', icon: '#icon_contact', phone: '+91 -22-25896399' },
    { title: 'Sales & Learning', subtitle: 'Business development', id: 'sales@thriveworld.com', icon: '#icon_development' },
    { title: 'Current Openings', subtitle: 'Job apply', id: 'careers@thriveworld.com', icon: '#icon_approved' }
  ];

  getTouch = [
    {
      subtitle: 'Corporate Office',
      street_1: '1/109,New Rajshree Ind Est.',
      street_2: ' Chitlsar, Manpada, Thane (W) 400607,  Mumbai,',
      state: 'Maharashtra, India',
      contact: '+91 -22-25896399',
      id: 'info@thriveworld.com'
    },
    {
      subtitle: 'Tajikistan',
      street_1: '1/109,New Rajshree Ind Est.',
      street_2: ' Chitlsar, Manpada, Thane (W) 400607,  Mumbai,',
      state: 'Maharashtra, India',
      contact: '+91 -22-25896399',
      id: 'info@thriveworld.com'
    },
    {
      subtitle: 'South Africa',
      street_1: '1/109,New Rajshree Ind Est.',
      street_2: ' Chitlsar, Manpada, Thane (W) 400607,  Mumbai,',
      state: 'Maharashtra, India',
      contact: '+91 -22-25896399',
      id: 'info@thriveworld.com'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  changeMap(map) {
      if (map === 'Corporate Office') {
        this.activMap = 'Corporate Office';
        this.corporate = true;
        this.mumbai = false;
        this.thane = false;
      } else if (map === 'Mumbai') {
        this.activMap = 'Mumbai';
        this.corporate = false;
        this.mumbai = true;
        this.thane = false;
      } else if (map === 'Thane') {
        this.activMap = 'Thane';
        this.corporate = false;
        this.mumbai = false;
        this.thane = true;
      }
  }
}
