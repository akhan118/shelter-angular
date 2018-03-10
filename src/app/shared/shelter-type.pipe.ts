import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shelterType'
})
export class ShelterTypePipe implements PipeTransform {
  transform(SheltersCollection: any, shelterType: string = null): any {
    if (!shelterType) {
      return SheltersCollection;
    }
    let collectionCopy = [...SheltersCollection];
    let filteredShelters: Object[] = [];
    let upperCaseShelter: string = shelterType.toLocaleUpperCase();
    let shelters = collectionCopy.forEach(shelter => {
      console.log(shelter.name + ':', shelter.personType)
      if (shelter.personType.indexOf(upperCaseShelter) !== -1) {
        console.log(shelter.name + ' 2 :', shelter.personType['upperCaseShelter'])
        filteredShelters.push(...shelter);
      }
    })

    console.log('final shelters', shelters)
    return collectionCopy;
  }

}
