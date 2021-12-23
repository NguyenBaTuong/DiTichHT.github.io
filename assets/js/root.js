window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header = document.getElementById('header');
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.style.display = 'none';
  } else {
    header.style.display = 'block';
  }
}