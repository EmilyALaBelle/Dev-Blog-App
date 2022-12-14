import { Injectable } from '@angular/core';
import {createClient, Entry} from 'contentful'
import { from } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: enviroment.spaceId,
    accessToken: enviroment.accessToken
  });

  getAllEntries() {
    const promise = this.client.getEntries()
    return from(promise);

  }

getEntryById(id: string) {
  const promise = this.client.getEntry(id);
  return from(promise)
}

}
