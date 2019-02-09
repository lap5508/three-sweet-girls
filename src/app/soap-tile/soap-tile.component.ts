import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ISoapTile } from './soap-tile.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-soap-tile',
  templateUrl: './soap-tile.component.html'
})
export class SoapTileComponent implements OnInit {

  soapTileCollection: AngularFirestoreCollection<ISoapTile>;
  soapTiles: Observable<ISoapTile[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.soapTileCollection = this.afs.collection('soapTiles', ref => {
      return ref;
    }); // reference to posts collection
    this.soapTiles = this.soapTileCollection.valueChanges();
  }

}
