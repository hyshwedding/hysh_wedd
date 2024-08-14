var splide = new Splide("#main-slider", {
    width: '100%',
    height: '100%',
    rewind: true,
    pagination: false,
    cover: true,
    arrows: true
  });

  var thumbnails = document.getElementsByClassName("thumbnail");
  var current;

  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }

  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener("click", function () {
      splide.go(index);
    });
  }

  splide.on("mounted move", function () {
    var thumbnail = thumbnails[splide.index];

    if (thumbnail) {
      if (current) {
        current.classList.remove("is-active");
      }

      thumbnail.classList.add("is-active");
      current = thumbnail;
    }
  });

  splide.mount();