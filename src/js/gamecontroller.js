// Game Controller class
import SystemShop from './stores/systemshop.js';
import CoordsService from './services/coordsservice.js';

class GameController {
  constructor(pucks) {
    this.pucks = pucks;

    this.movePucks([]); // First run
    this.movePucksOnInput();
  }

  movePucksOnInput() {
    let inputHandler = (e) => {
      let positionArr = CoordsService.getXYFromInput(e);
      let vectorArr = (e.type == 'touchmove')
        ? this.getVectorsFromTouchPositions(positionArr)
        : this.getVectorsFromMousePosition(positionArr)
      this.movePucks(vectorArr);
    };

    ['mousemove', 'touchmove'].forEach(e => {
      document.addEventListener(e, inputHandler.bind(this), false);
    });
  }

  getVectorsFromMousePosition(positionArr) {
    let mousePos = CoordsService.getVectorFromScreenCoords(positionArr[0]);
    return [mousePos, mousePos];
  }

  getVectorsFromTouchPositions(positionArr) {
    let xyArr = positionArr.map(p => CoordsService.getXYFromScreenCoords(p));
    let leftOrRight;
    let vectorArr = [0, 0];

    xyArr.forEach(xy => {
      leftOrRight = (xy.x < 0)
        ? 0
        : 1;
      vectorArr[leftOrRight] = CoordsService.getVectorFromXY(xy.x, xy.y);
    });
    return vectorArr;
  }

  movePucks(vectorArr) {
    this.pucks.forEach(p => {
      let vector = vectorArr[p.index];
      p.vector = this.moveOnePuck(p, vector);
    });
  }

  moveOnePuck(puck, vector) {
    let radius = SystemShop.gameSurfaceCoords.radius;
    let x = Math.cos(vector) * radius;
    let y = Math.sin(vector) * radius;
    let perpendicularInDegs = CoordsService.getDegreesFromRads(vector) + 90;

    puck.domElement.setAttribute('transform', `translate(${x}, ${y}), rotate(${perpendicularInDegs})`);

    return vector;
  }
}

export default GameController;
