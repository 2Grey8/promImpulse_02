const change = (obj, positionX, positionY) => {
  const polygon = document.querySelector(obj);
  const box = document.querySelector('.map__box');

  polygon.addEventListener('click', () => {
    if(polygon.src.indexOf("img/polygon.png") > 0) {
       polygon.src = "img/polygon2.png";
       box.style.transform = `translate(${positionX}px, ${positionY}px)`;
       box.style.display = "block";
    } else {
       polygon.src = "img/polygon.png";
       box.style.display = "none";
    }

  });
}

change('.map__polygon_1', -370, 160);
change('.map__polygon_2', -270, -110);
change('.map__polygon_3', -160, -100);
change('.map__polygon_4', -10, -50);
change('.map__polygon_5', -110, -30);
change('.map__polygon_6', 0, 10);
change('.map__polygon_7', -60, 60);
