
const priceSlider = document.getElementById('filter-price-slider');
const minPriceInput = document.getElementById('filter-price-slider-min-price');
const maxPriceInput = document.getElementById('filter-price-slider-max-price');

// noUiSlider'ı başlat
noUiSlider.create(priceSlider, {
  start: [100, 300], // Başlangıç değerleri (örneğin 20 ve 80)
  connect: true,
  range: {
      'min': 0,
      'max': 400
  },    
});

// Slider değeri değiştikçe inputları güncelle
priceSlider.noUiSlider.on('update', function (values, handle) {
    const [minPrice, maxPrice] = values;
    minPriceInput.value = parseFloat(minPrice).toFixed(2);
    maxPriceInput.value = parseFloat(maxPrice).toFixed(2);


});