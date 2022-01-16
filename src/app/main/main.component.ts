import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	goWhatsapp() {
		window.open('https://wa.me/87471117329?text=Мне%20нужен%20сайт')
	}

}
