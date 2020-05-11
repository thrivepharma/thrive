import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sevices;
  solution;

  showNavigationArrows = false;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  slideConfig2 = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  constructor(private router: Router) {
    this.sevices = [
      {
        title: 'Active Pharmaceutical Ingredient',
        color: 'skyblue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_telecom'
      },
      {
        title: 'Formulation',
        color: 'yellow ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_customerService'
      },
      {
        title: 'Surgical',
        color: 'orange',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_engineeringMgf'
      },
      {
        title: 'Veterinary',
        color: 'limegreen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_retail'
      },
      {
        title: 'Nutraceutical',
        color: 'purple',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_finervice'
      },
      {
        title: 'Herbal',
        color: 'blue',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
        icon: '#icon_healthCare'
      },
    ];
    this.solution = [
      {
        title: 'Vision',
        color: 'red',
        list : [
          {name: 'To continually set new benchmarks in global healthcare with power of human expertise, innovative research and advanced Marketing.'}
        ],
        description: 'To continually set new benchmarks in global healthcare with power of human expertise, innovative research and advanced Marketing.',
        icon: '#icon_mgmt'
      },
      {
        title: 'Mission',
        color: 'blue',
        list : [
          {name: 'Contributing towards better healthcare through innovation. Maximizing value for our customers and the End User, The Patient with Quality and Affordability.'}
        ],
        description: 'Contributing towards better healthcare through innovation. Maximizing value for our customers and the End User, The Patient with Quality and Affordability.',
        icon: '#icon_softEngg'
      },
      {
        title: 'Values',
        color: 'green',
        list : [
          {name: 'Determined to achieve our business objectives and explore opportunities for accelerating growth through the Niche Marketing.'}
        ],
        description: 'Determined to achieve our business objectives and explore opportunities for accelerating growth through the Niche Marketing.',
        icon: '#icon_training'
      },
    ];
  }
  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  banner = [
    {
      title: 'Thrive  is a leading,',
      title_2: 'vertically integrated global pharmaceutical formulation development.',
      description: 'manufacturing and marketing company headquartered in India and Abroad.'
    },
    {
      title: 'To continually set new benchmarks',
      title_2: 'in global healthcare with power of human expertise,',
      description: 'innovative research and advanced Marketing.'
    },
    {
      title: 'Contributing towards better healthcare through innovation.',
      title_2: 'Maximizing value for our customers and the End User, ',
      description: 'Patient with Quality and Affordability.'
    }
  ];

  client = [
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'},
    {img: 'assets/images/client'}
  ];

  testimonials = [
    {
      clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
      clientView_2: ' Due to our close relationships and constant interactions with clients,',
      clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
      clientName: 'xyz Company'
    },
    {
      clientView_1: ' Consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
      clientView_2: ' Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
      clientView_3: ' lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.',
      clientName: 'ABC Company'
    },
    {
      clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
      clientView_2: ' Due to our close relationships and constant interactions with clients,',
      clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
      clientName: '123 Company'
    },
    {
      clientView_1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      clientView_2: ' Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo',
      clientView_3: ' Proin sodales pulvinar tempor.',
      clientName: 'QWERTy'
    },
];


projects = [
  {
    gridClass: 'col-lg-6 col-md-6 col-sm-6 col-xs-12',
    imgPath: 'assets/images/project',
    title: 'EVENT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: 'assets/images/project',
    title: 'EVENT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: 'assets/images/project',
    title: 'EVENT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: 'assets/images/project',
    title: 'EVENT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  },
  {
    gridClass: 'col-lg-3 col-md-3 col-sm-6 col-xs-12',
    imgPath: 'assets/images/project',
    title: 'EVENT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
  }
];



  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

btnClick = function() {
    this.router.navigateByUrl('/Contactus', {skipLocationChange: true});
};

btnOurProduct = function() {
  this.router.navigateByUrl('/OurProduct', {skipLocationChange: true});
};

lernmore = function(url) {
  this.router.navigateByUrl('/ManagedServices' , {skipLocationChange: true});
};

}

