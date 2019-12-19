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




const containers1 = document.querySelectorAll('ul.yo')
const draggable = new Draggable.default(containers1, {
  draggable: 'li',
  mirror: {
    // appendTo: ideasMarketGrid,
    constrainDimensions: true,
  },
});

draggable.on('drag:start', () => console.log('drag:start'));
draggable.on('drag:move', () => console.log('drag:move'));
draggable.on('drag:stop', () => console.log('drag:stop'));




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





// const containers2 = document.querySelectorAll('capabilities')
const gridContainer = document.querySelectorAll('.capabilities');

const swappable1 = new Swappable.default(gridContainer, {
  draggable: '.isDraggable',
  mirror: {
    appendTo: gridContainer,
    constrainDimensions: true,
  },
  plugins: [Plugins.ResizeMirror],
});


swappable1.on('swappable:start', (a) => console.log('swappable:start', a));
swappable1.on('swappable:swapped', (a) => console.log('swappable:swapped', a));
swappable1.on('swappable:stop', () => console.log('swappable:stop'));