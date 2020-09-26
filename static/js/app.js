function init() {
    d3.json("samples.json").then((data) => {
        var sample_names = data.names;

        sample_names.forEach((sample) => {
            d3.select("#selDataset")
                .append("option")
                .text(sample)
                .property("value", sample);
        });

        var sample_one = sample_names[0];
        barChart(sample_one);
        bubbleChart(sample_one);
        metadataChart(sample_one);
        gaugeChart(sample_one);
    });
}

function optionChanged(newSample) {
    barChart(newSample);
    bubbleChart(newSample);
    metadataChart(newSample);
    gaugeChart(newSample);
}

init();

function barChart(sample) {
    d3.json("samples.json").then((data) => {
        var sample_values = data.samples.filter(sampleObj => sampleObj.id == sample)[0].sample_values;
        var otu_ids = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_ids;
        var otu_labels = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_labels;

        var barData = [{
                x: sample_values.slice(0, 10).reverse(),
                y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h"
        }];

        var barLayout = {
            title: "Top 10 Bacterial Cultures Found",
            xaxis: { title: "Sample Values"},
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
        };

        Plotly.newPlot("bar", barData, barLayout);    
    });
}

function bubbleChart(sample) {
    d3.json("samples.json").then((data) => {
        var sample_values = data.samples.filter(sampleObj => sampleObj.id == sample)[0].sample_values;
        var otu_ids = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_ids;
        var otu_labels = data.samples.filter(sampleObj => sampleObj.id == sample)[0].otu_labels;

        var bubbleData = [{
                x: otu_ids,
                y: sample_values,
                mode: "markers",
                text: otu_labels,
                marker: {
                    size: sample_values,
                    color: otu_ids,
                    colorscale: "YlGnBu"
                }   
        }];

        var bubbleLayout = {
            title: "Bacterial Cultures Per Sample",
            hovermode: "closest",
            xaxis: { title: "OTU ID"},
            yaxis: { title: "Sample Values"},
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
            paper_bgcolor: 'rgba(0, 0, 0, 0)'
        };

        Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    });
}

function metadataChart(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata.filter(sampleObj => sampleObj.id == sample)[0];
        var demographicInfo = d3.select("#sample-metadata");

        demographicInfo.html("");

        Object.entries(metadata).forEach(([key, value]) => {
            demographicInfo.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}