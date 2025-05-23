// CPU Chart
const cpuOptions = {
	chart: {
		type: 'radialBar',
		offsetY: -10,
		// sparkline: { enabled: true },
		width: "400px",
		fontFamily: "Poppins, sans-serif"
	},
	plotOptions: {
		radialBar: {
			startAngle: -70,
			endAngle: 70,
			hollow: { size: '20%' },
			track: {
				background: '#E4E5E6',
				strokeWidth: '100%'
			},
			dataLabels: {
				name: { show: true, fontSize: '14px', offsetY: 10 },
				value: {
					fontSize: '16px',
					show: true,
					color: '#000022',
					offsetY: -70
				}
			}
		}
	},
	series: [10],
	labels: ['CPU'],
	colors: ['#F29203']
};

// Memory Chart
const memoryOptions = {
	chart: {
		type: 'radialBar',
		offsetY: 15,
		// sparkline: { enabled: true },
		width: "200px",
		fontFamily: "Poppins, sans-serif"
	},
	plotOptions: {
		radialBar: {
			startAngle: -70,
			endAngle: 70,
			hollow: { size: '20%' },
			track: {
				background: '#E4E5E6',
				strokeWidth: '100%'
			},
			dataLabels: {
				name: { show: true, fontSize: '13px', offsetY: 20 },
				value: {
					fontSize: '12px',
					show: true,
					color: '#000022',
					offsetY: -43
				}
			}
		}
	},
	series: [27],
	labels: ['Memory'],
	colors: ['#D13611']
};

// Network Rcvd Chart
const optionsRcvd = {
	chart: {
		type: 'radialBar',
		// sparkline: { enabled: true },
		width: "230px",
		fontFamily: "Poppins, sans-serif"
	},
	series: [6],
	labels: ['Network Rcvd'],
	plotOptions: {
		radialBar: {
			startAngle: 0,
			endAngle: 360,
			hollow: {
				size: '70%',
			},
			track: {
				background: '#E4E5E6',
				strokeWidth: '100%',
			},
			dataLabels: {
				name: {
					offsetY: -10,
					color: '#999',
					fontSize: '14px',
				},
				value: {
					offsetY: 10,
					fontSize: '20px',
					color: '#000022',
					formatter: function (val) {
						return '0.06';
					}
				}
			}
		}
	},
	colors: ['#3061C3'],
	stroke: {
		lineCap: "round"
	}
};

// Network Sent Chart
const optionsSent = {
	chart: {
		type: 'radialBar',
		// sparkline: { enabled: true },
		width: "230px",
		fontFamily: "Poppins, sans-serif"
	},
	series: [5], // 0.05 out of 1.0
	labels: ['Network Sent'],
	plotOptions: {
		radialBar: {
			startAngle: 0,
			endAngle: 360,
			hollow: {
				size: '70%',
			},
			track: {
				background: '#E4E5E6',
				strokeWidth: '100%',
			},
			dataLabels: {
				name: {
					offsetY: -10,
					color: '#999',
					fontSize: '14px',
				},
				value: {
					offsetY: 10,
					fontSize: '20px',
					color: '#000022',
					formatter: function (val) {
						return '0.05';
					}
				}
			}
		}
	},
	colors: ['#D13611'],
	stroke: {
		lineCap: "round"
	}
};

new ApexCharts(document.querySelector("#networkRcvd"), optionsRcvd).render();
new ApexCharts(document.querySelector("#networkSent"), optionsSent).render();

new ApexCharts(document.querySelector("#cpuChart"), cpuOptions).render();
new ApexCharts(document.querySelector("#memoryChart"), memoryOptions).render();
