fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Get the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Create a new Chart object
    const chart = new Chart(ctx, {
      // Set the type of chart to be a bar chart
      type: 'bar',
      // Set the data for the chart
      data: {
        labels: data.map(item => item.day), // Set the labels to be the days from the data
        datasets: [
          {
            label: 'Expenses', // Set the label for the dataset
            data: data.map(item => item.amount), // Set the data to be the amounts from the data
            backgroundColor: '#f44336', // Set the background color for the bars
            borderColor: '#f44336', // Set the border color for the bars
            borderWidth: 1 // Set the border width for the bars
          }
        ]
      },
      // Set the options for the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true // Set the minimum value on the y-axis to be 0
              }
            }
          ]
        }
      }
    });
  })
  .catch(error => console.log(error));


let chartContainer = document.querySelector('.chart-container');

// Map through data and populate chart
data.then(data => {
    data.forEach(item => {
        let chart = document.createElement('div');
        chart.classList.add('chart');
        const height = item.amount / 7;
        let value=""
        if (item.day == "wed") {
            value=`<div class="chart-value active" style="--height:${height}em"></div>`
        } else {
            value=`<div class="chart-value" style="--height:${height}em"></div>`;
        }
        chart.innerHTML = `
        <div class="chart-wrapper">
        ${value}
        </div>
        <div class="chart-title">${item.day}</div>
        `;
        chartContainer.appendChild(chart);
    }
    )
}
)