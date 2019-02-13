import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { ISoapTile } from '../soap-tile/soap-tile.model';

@Component({
  selector: 'app-add-soap',
  templateUrl: './add-soap.component.html'
})
export class AddSoapComponent implements OnInit {

  imageSrc;
  imageToUpload;
  soapName;
  soapPrice;
  soapDescription;
  imageUrl;

  soapsCollection: AngularFirestoreCollection<ISoapTile>;

  constructor(private afStore: AngularFirestore) { }

  ngOnInit() {
    this.soapsCollection = this.afStore.collection('soapTiles', ref => {
      return ref;
    });
  }

  onFileChanged(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;

    reader.readAsDataURL(file);
  }

  onUpload() {
    const newSoap: ISoapTile = {
      id: 0,
      name: this.soapName,
      image: this.imageUrl,
      description: this.soapDescription
    };
    this.soapsCollection.add(newSoap).then(res => {
      newSoap.id = res.id;
      res.update(newSoap).then(response => {
        alert('New soap has been added :)');
      });
    });
  }

  setUrl(event: string) {
    this.imageUrl = event;
  }

}
