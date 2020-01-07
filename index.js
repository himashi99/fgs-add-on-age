// const containers = document.querySelectorAll('li');
// const sortable = new Sortable.default(containers, {
//   draggable: 'div',
//   appendTo: 'body',
//   // mirror: {
//   //   constrainDimensions: false,
//   //   cursorOffsetX: 10,
//   //   cursorOffsetY: 10,
//   //   xAxis: false
//   // },
// });

// sortable.on('drag:start', (event) => {
//   event.originalSource.classList.add('original-source');
// });

// sortable.on('drag:stop', (event) => {
//   event.originalSource.classList.remove('original-source');
// });


// Ideas to Market Graphic
const ideasMarketGrid = document.querySelectorAll('div.ideas-to-market-grid');
const swappableIdeas = new Swappable.default(ideasMarketGrid, {
  draggable: '.ideas-to-market-drag',
  mirror: {
    // appendTo: ideasMarketGrid,
    constrainDimensions: true,
  },
});

// swappable.on('swappable:start', () => console.log('swappable:start'));
// swappable.on('swappable:swapped', () => console.log('swappable:swapped'));
// swappable.on('swappable:stop', () => console.log('swappable:stop'));



// Strategy Graphic
// const strategyGrid = document.querySelectorAll('ul.strategy-grid')
// const swappableStrategies = new Draggable.default(strategyGrid, {
//   draggable: '.drago',
//   dropzone: '.strategy-drop',
// });

const droppable = new Droppable.default(document.querySelectorAll('.strategy-grid'), {
  draggable: '.drago', 
  dropzone: '.strategy-drop'
});

droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
droppable.on('droppable:returned', () => console.log('droppable:returned'));

// draggable.on('drag:start', () => console.log('drag:start'));
// draggable.on('drag:move', () => console.log('drag:move'));
// draggable.on('drag:stop', () => console.log('drag:stop'));




// const containerSelector = '.capabilities';
// const containers11 = document.querySelectorAll(containerSelector);

// const swappable11 = new Swappable.default(containers11, {
//   draggable: '.Block--isDraggable',
//   mirror: { 
//     appendTo: containerSelector,
//     constrainDimensions: true,
//   },
//   plugins: [Plugins.ResizeMirror],
// });




// Capabilities Graphic
// const containers2 = document.querySelectorAll('capabilities')
// const capabilitiesGrid = document.querySelectorAll('.capabilities-grid');

// const swappableCapabilities = new Draggable.Swappable.default(capabilitiesGrid, {
//   draggable: '.isDraggable',
//   mirror: {
//     appendTo: capabilitiesGrid,
//     constrainDimensions: true,
//   },
//   plugins: [Plugins.ResizeMirror],
// });


// swappableCapabilities.on('swappable:start', (a) => console.log('swappable:start', a));
// swappableCapabilities.on('swappable:swapped', (a) => console.log('swappable:swapped', a));
// swappableCapabilities.on('swappable:stop', () => console.log('swappable:stop'));
const capabilitiesGrid = document.querySelectorAll('.capabilities-grid');
const swappable1 = new Swappable.default(capabilitiesGrid, {
    draggable: '.inner-drag',
    mirror: {
      constrainDimensions: true,
      cursorOffsetX: 70,
      cursorOffsetY: 0,
    },
    plugins: [Plugins.ResizeMirror],
  })

// swappable1.on('drag:start', () => {
// 	console.log('drag:start')
// })
// swappable1.on('swappable:swapped', () => {
// 	console.log('drag:swapped')
// })
// swappable1.on('drag:stop', () => {
// 	console.log('drag:stop')
// })
// swappable1.on('drag:move', () => {
// 	console.log('drag:move')
// })



// Range Slider

$( document ).ready(function() {
  var innovationSlider = document.getElementById('slider_innovation');

  noUiSlider.create(innovationSlider, {
      start: [ 0 ],
      snap: true,
      connect: true,
      range: {
          'min': 0,
          '24.5%': 5,
          '50%': 10,
          '75': 15,
          'max': 20
      },
      format: {
          from: function(value) {
              return value;
          },
          to: function(value) {
              return value;
          }
      }
  });

 



let rangeSliderValueElement = document.getElementById('slider-range-value');
innovationSlider.noUiSlider.on('update', function (values, handle) {
  rangeSliderValueElement.innerHTML = values[handle];


let description = document.getElementById('step-description');

// Update text box based on value of range slider
switch(rangeSliderValueElement.innerHTML) {
case '0':
  description.innerHTML = "Access - We offer true innovation, which is why we are not afraid to pivot. Our proven 5 Phase Innovation enables your team to accelerate the cycles for getting new products to market.";
  break;
case '5':
  description.innerHTML = " Define - We offer true innovation, which is why we are not afraid to pivot. Our proven 5 Phase Innovation enables your team to accelerate the cycles for getting new products to market.";
  break;
case '10':
  description.innerHTML = "Test - We offer true innovation, which is why we are not afraid to pivot. Our proven 5 Phase Innovation enables your team to accelerate the cycles for getting new products to market.";
  break;
case '15':
  description.innerHTML = "Validate - We offer true innovation, which is why we are not afraid to pivot. Our proven 5 Phase Innovation enables your team to accelerate the cycles for getting new products to market.";
  break;
case '20':
  description.innerHTML = "Launch - We offer true innovation, which is why we are not afraid to pivot. Our proven 5 Phase Innovation enables your team to accelerate the cycles for getting new products to market.";
  break;
}

});

});


var la = document.getElementById('slider_gewicht');





