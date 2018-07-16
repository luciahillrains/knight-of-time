import { Injectable } from '@angular/core';
import { Item } from './objects/item';
@Injectable({
  providedIn: 'root'
})
export class PlayerInformationService {
	inventory:string[] = ["tonic", "blackSigil","handAxe"];
  constructor() { }
}
