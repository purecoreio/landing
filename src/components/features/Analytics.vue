<template>
    <div style="width:100%" ref="chart"></div>
</template>
<style>
.chart-legend,
.line-vertical,
text,
.graph-svg-tip.comparison,
.y.axis {
    width: 0px;
    height: 0px;
    visibility: hidden;
}

.chart-container{
    transform: scale(1.18) translateX(-1.2%);
}
</style>
<script>
import { Chart } from 'frappe-charts/dist/frappe-charts.esm.js'
export default {
    mounted() {
        const data = {
            labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
                "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
            ],
            datasets: [
                {
                    name: "Some Data", chartType: "bar",
                    values: [25, 40, 30, 35, 8, 52, 17, -4]
                },
                {
                    name: "Another Set", chartType: "line",
                    values: [25, 50, -10, 15, 18, 32, 27, 14]
                }
            ]
        }
        new Chart(this.$refs.chart, {
            title: "My Awesome Chart",
            data: data,
            type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
            height: 300,
            colors: ['#b3d4ff', '#448aff']
        })
    }
}
</script>