const ctx = document.getElementById('pieChart');
const pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [choice1, choice2],
    datasets: [{
      label: '# of Votes',
      data: [3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
    }],
  },
  options: {
    responsible: false,
  },
});
