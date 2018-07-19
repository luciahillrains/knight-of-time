import { Injectable } from '@angular/core';
import {Affinity} from './objects/affinity';
import {AffinityImporter} from './importers/affinity-importer';
import {Card} from './objects/card';
import {CardImporter} from './importers/card-importer';
import {ConversationImporter} from './importers/conversation-importer';
import {EnemyImporter} from './importers/enemy-importer';
import {Enemy} from './objects/enemy';
import {EventImporter} from './importers/event-importer';
import {Event} from './objects/event';
import {ItemImporter} from './importers/item-importer';
import {Item} from './objects/item';
import {RoomImporter} from './importers/room-importer';
import {Room} from './objects/room';
import {TileImporter} from './importers/tile-importer';
import {Tile} from './objects/tile';
import {CharacterImporter} from './importers/character-importer';
import {Character} from './objects/character';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	affinities:Map<string, Affinity>;
  cards:Map<string, Card>;
  conversations:Map<string, string>;
  enemies:Map<string, Enemy>;
  events:Map<string, Event>;
  items:Map<string, Item>;
  rooms: Map<string, Room>;
  tiles: Tile[];
  characters: Character[];
  constructor() {
  	this.setupAffinities();
    this.setupCards();
    this.setupConversations();
    this.setupEnemies();
    this.setupEvents();
    this.setupItems();
    this.setupRooms();
    this.setupTiles();
    this.setupCharacters();
   }


  private setupAffinities() {
  	let importer:AffinityImporter = new AffinityImporter();
  	let affinities = importer.import();
  	this.affinities = affinities;
  }

  private setupCards() {
    let importer:CardImporter = new CardImporter();
    let cards = importer.import();
    this.cards = cards;
  }

  private setupConversations() {
    let importer:ConversationImporter = new ConversationImporter();
    this.conversations = importer.import();
  }

  private setupEnemies() {
    let importer:EnemyImporter = new EnemyImporter();
    this.enemies = importer.import();
  }

  private setupEvents() {
    let importer:EventImporter = new EventImporter();
    this.events = importer.import();
  }

  private setupItems() {
    let importer:ItemImporter = new ItemImporter();
    this.items = importer.import();
  }

  private setupRooms() {
    let importer = new RoomImporter();
    this.rooms = importer.import();
  }

  private setupTiles() {
    let importer = new TileImporter();
    this.tiles = importer.import();
  }

  private setupCharacters() {
    let importer = new CharacterImporter();
    this.characters = importer.import();
  }
}
