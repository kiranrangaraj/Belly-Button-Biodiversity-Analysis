# Belly Button Biodiversity Analysis
![Bacteria by filterforge.com](Images/bacteria.jpg)

## Website: https://kiranrangaraj.github.io/Belly-Button-Biodiversity-Analysis/

---

## Summary ##
The habitat of belly button remains relatively unexplored despite its closeness to humans. In January 2011, the world's first citizen science project was launched to investigate the microbes inhabiting human navels and the factors that might influence the microscopic life that inhabits it. Hundreds of participants donated samples at in-person events in the Raleigh-Durham area, many hosted by the North Carolina Museum of Natural Sciences. The study was later opened up to people all over North America. Samples were collected until 2012.

This project involves building an interactive dashboard to explore the Belly Button Biodiversity dataset that was cataloged in the aforementioned study. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. The dashboard allows for specific study participants to be selected for in order to view their individual demographic information, a list of their navel microbial species and relative abundances, and their weekly navel washing frequency. 

---

## Process ##
The original data was provided in JSON format. D3 was used to import and process the data, while Plotly was used to generate the required visualizations. JavaScript was then used to present interactive visualizations of belly button biodiversity data within a web page.
* *Use the D3 library to read in 'samples.json'
* *Filter the data for the object with the desired sample number
* *Use D3 to select the panel with id of #sample-metadata
* *Clear any existing metadata
* *Display each key-value pair from the metadata
* *Build a horizontal bar chart
* *Plotted horizontal bar chart
* *Build a bubble chart
* *Plot bubble chart
* *Display the sample metadata, i.e., an individual's demographic information
* *Select a reference to the dropdown select element
* *Build a gauge chart
* *Plot gauge chart
* *Use the list of sample names to populate the select options
* *Use the first sample from the list to build the initial plots
* *Update all the plots any time a new sample is selected
* *Initialize the dashboard
* *Create an HTML file for dashboard deployment

![Dashboard](Images/Belly-Button-Diversity.png)

---

## Sources ##
Data Set Used:
* Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

Ploty Chart References:
https://plot.ly/javascript/gauge-charts/

---

## Technologies Used ##
* PyCharm
* JavaScript - Plotly, D3
* HTML5
* CSS3
* Bootstrap

---

## Author ##
* Kiran Rangaraj - Data Analytics Bootcamp - Vanderbilt University - 2021
