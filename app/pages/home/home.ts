import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var require: any;
var hcharts = require('highcharts');
require('highcharts/modules/exporting')(hcharts);

@Component({
	templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	@ViewChild('myChart') canvas: ElementRef;
	constructor(public navCtrl: NavController) {

	}

	ngAfterViewInit() {
		var chart = hcharts.chart(this.canvas.nativeElement, {
			chart: {
				zoomType: 'x',
				events: {
					load: function () {
						var self = this;
						setTimeout(function () {
							self.reflow();
						}, 100)
					}
				}
			},
			series: [{
				data: [1, 3, 2, 4]
			}],
		});
    }
}
