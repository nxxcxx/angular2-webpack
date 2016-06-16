import { Component } from 'angular2/core'

@Component( {

	selector: 'root-component',
	template: '<h3>{{header}}</h3>'

} )
export class RootComponent {

	constructor() {

		this.header = 'root'

	}

}
