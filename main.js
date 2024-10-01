
    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('mega-menu-full');
        const links = document.querySelectorAll('#mega-menu-full a');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                if (!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                }
            });
        });
    });
    
    
  


const options = {
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "line",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 6,
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -26
    },
  },
  series: [      
    {
      name: "Deposit",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#1A56DB",
    },
    {
      name: "Withdrawal",
      data: [6456, 6356, 6526, 6332, 6418, 6500],
      color: "#7E3AF2",
    },
  ],
  legend: {
    show: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
}

if (document.getElementById("line-chart") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("line-chart"), options);
  chart.render();
};




    
        const ctx = document.getElementById('votingChart').getContext('2d');
        const votingChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Feb 2nd', 'Feb 23rd', 'Augst 3rd', 'Sept 4th', 'Sept 25th'], 
                datasets: [
                  
                    {
                        label: 'Voted',
                        data: [80, 70, 85, 90, 100], 
                        backgroundColor: '#1D4ED8'
                    },
                      {
                        label: 'Didn\'t Vote',
                        data: [20, 30, 15, 10, 0], 
                        backgroundColor: '#EF4444'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true, 
                        beginAtZero: true,
                        max: 100 
                    }
                }
            }
        });
    




              
