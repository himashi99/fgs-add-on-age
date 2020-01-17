// Ideas to Market Graphic
const ideasMarketGrid = document.querySelectorAll('div.ideas-to-market-grid');
const swappableIdeas = new Swappable.default(ideasMarketGrid, {
  draggable: '.ideas-to-market-drag',
  mirror: {
    // appendTo: ideasMarketGrid,
    constrainDimensions: true,
  },
});

// About Us Section Graphic

// jQuery Drag and Droppable

(function ($) {
  var lastPlace;

  $("#choices li img").draggable({
      revert: true,
      zIndex: 10,
      snap: "#answers li",
      snapMode: "inner",
      snapTolerance: 40,
      // helper: "clone",
  });

  $(".strategy-drop").droppable({
      drop: function (event, ui) {
      var dropped = ui.draggable;
      var droppedOn = this;

      if ($(droppedOn).children().length > 0) {
             
}

          $(dropped).detach().css({
              top: 0,
              left: 0
          }).prependTo($(droppedOn));
      }
  });
})(jQuery);


// Sortable Shopify Library

const sortable = new Draggable.Sortable(
document.querySelectorAll('#answers'), {
  draggable: 'li',
  delay: 0,
}
)


// Range Slider Graphic

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

// Range Slider Text Logic

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

// Our Capabilities

const containerSelector = '#GridLayout .BlockLayout';
  const containers = document.querySelectorAll(containerSelector);

const swappable = new Draggable.Swappable(containers, {
    draggable: '.Block--isDraggable',
    mirror: {
      appendTo: containerSelector,
      constrainDimensions: true,
      cursorOffsetX: 70,
      cursorOffsetY: 0,
    },
    plugins: [Plugins.ResizeMirror],
  });

  // This line of code makes the "About Us" section stop working
  swappable.on('drag:start', (e) => {
    console.log('drag:start');
    console.log(e.mirror);
    // e.originalSource.style.backgroundColor='blue';
    e.mirror.style.backgroundColor = '#6CCACD';
  })

















 

















