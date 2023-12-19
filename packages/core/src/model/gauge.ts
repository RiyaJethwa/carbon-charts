import { ChartModel } from './model'

/**
 * The gauge chart model layer
 */
export class GaugeChartModel extends ChartModel {
	constructor(services: any) {
		super(services)
	}

	getDataGroups() {
		return super.getDataGroups().filter((item: any) => item.name !== 'delta')
	}

	getTabularDataArray() {
		const displayData = this.getDisplayData()
		const options = this.getOptions()
		const { groupMapsTo } = options.data
		const headingLabels = ['Group', 'Value']
		const tabelData = [
			...displayData.map((datum: any) => [
				datum[groupMapsTo],
				datum['value'] === null ? '&ndash;' : datum['value'].toLocaleString()
			])
		]

		return super.formatTable(headingLabels, tabelData)
	}
}
