import { Component } from '@angular/core'

@Component( {

	selector: 'rootComponent',
	template: '<h3>{{header}}</h3>'

} )
export class RootComponent {

	constructor() {

		this.header = 'root'

	}

}
