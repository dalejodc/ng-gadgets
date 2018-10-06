import { Pipe, PipeTransform } from '@angular/core';

// To transform objects to array
@Pipe({
	name: 'keys'
})
export class KeysPipe implements PipeTransform {

	transform(value: any): any {
		let keys =[];

		for(let key in value){
			keys.push(key);
		}

		return keys:
	}

}
