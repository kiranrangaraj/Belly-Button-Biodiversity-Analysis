function gaugeChart(sample) {
    d3.json("samples.json").then((data) => {
        var wfreq = data.metadata.filter(sampleObj => sampleObj.id == sample)[0].wfreq;
        // Maximum washes per week is 9. Thus, 180 degrees of meter travel divided by 9 equals 20
        var wfreqDegrees = parseFloat(wfreq) * 20;
        // Calculate meter point angle in degrees
        var pointAngle = 180 - wfreqDegrees;
        // Calculate x & y data coordinates for meter point
        var radians = (pointAngle * Math.PI) / 180;
        var x = 0.5 * Math.cos(radians);
        var y = 0.5 * Math.sin(radians);
        //
        var pathOutline = "M -.0 -0.05 L .0 0.05 L ";
        var pathX = String(x);
        var space = " ";
        var pathY = String(y);
        var pathEnd = " Z";
        var path = pathOutline.concat(pathX, space, pathY, pathEnd);

        var gaugeData = [{
                type: "scatter",
                x: [0],
                y: [0],
                marker: { size: 12, color: "850000"},
                showlegend: false,
                name: "Freq",
                text: wfreqDegrees,
                hoverinfo: "text+name"
            },
            {
                values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
                rotation: 90,
                text: ["9", "8", "7", "6", "5", "4", "3", "2", "1", ""],
                textinfo: "text",
                textposition: "inside",
                marker: {
                    colors: [
                        "rgb(8, 29, 88)",
                        "rgb(37, 52, 148)",
                        "rgb(34, 94, 168)",
                        "rgb(29, 145, 192)",
                        "rgb(65, 182, 196)",
                        "rgb(127, 205, 187)",
                        "rgb(199, 233, 180)",
                        "rgb(237, 248, 177)",
                        "rgb(255, 255, 217)",
                        "rgba(255, 255, 255, 0)",
                    ]
                },
                labels: ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"],
                hoverinfo: "label",
                hole: 0.5,
                type: "pie",
                showlegend: false
            }
        ];

        var gaugeLayout = {
            shapes: [{
                type: "path",
                path: path,
                fillcolor: "850000",
                line: {
                    color: "850000"
                }
            }],
            title: "<b>Belly Button Washing Frequency</b> <br>Scrubs per Week",
            height: 500,
            width: 500,
            xaxis: {
                zeroline: false,
                showticklabels: false,
                showgrid: false,
                range: [-1, 1]
            },
            yaxis: {
                zeroline: false,
                showticklabels: false,
                showgrid: false,
                range: [-1, 1]
            },
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
            paper_bgcolor: 'rgba(0, 0, 0, 0)'
        };

        var gauge = document.getElementById("gauge");
        Plotly.newPlot(gauge, gaugeData, gaugeLayout);
    });
}