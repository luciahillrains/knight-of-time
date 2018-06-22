import { Injectable } from '@angular/core';
import {Affinity} from './objects/affinity';
import {AffinityImporter} from './importers/affinity-importer';
import {Card} from './objects/card';
import {CardImporter} from './importers/card-importer';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	affinities:Map<string, Affinity>;
  cards:Map<string, Card>;
  constructor() {
  	this.setupAffinities();
    this.setupCards();
   }


  setupAffinities() {
  	let importer:AffinityImporter = new AffinityImporter();
  	let affinities = importer.import();
  	this.affinities = affinities;
  }

  setupCards() {
    let importer:CardImporter = new CardImporter();
    let cards = importer.import();
    this.cards = cards;
  }
}
