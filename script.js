// external js: isotope.pkgd.js
var elem = document.querySelector('.grid');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

// element argument can be a selector string
//   for an individual element
var iso = new Isotope( '.grid', {
  // options
});

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      comida: '.comida',
      avaliacao: '.avaliacao parseFloat',
      entrega: '[data-category]',
      preco: '.preco'
    }
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan4: function() {
      var avaliacao = $(this).find('.avaliacao').text();
      return parseFloat( avaliacao, 0.1 ) > 4;
    },
    
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    if(sortByValue == 'avaliacao'){ $grid.isotope({ sortBy: sortByValue, sortAscending: false })  }
    else { $grid.isotope({ sortBy: sortByValue, sortAscending: true })};
  });
  
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
    
  