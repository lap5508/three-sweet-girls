import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ISoapTile } from '../soap-tile/soap-tile.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-soap-tile-detail',
  templateUrl: './soap-tile-detail.component.html'
})
export class SoapTileDetailComponent implements OnInit {

  soapTile$;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.afs.doc('soapTiles/' + params['soap']).valueChanges().subscribe(soap => this.soapTile$ = soap);
    });
  }

}
