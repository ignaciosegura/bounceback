
// AtomService

import Atom from '../atom.js';
import CoordsService from './coordsservice.js';
import GameShop from '../stores/gameshop.js';

class AtomService {
  static moveAtoms(atoms) {
    atoms.forEach(a => a.moveAtom());
  }

  static checkAtomsStatus(atoms) {
    atoms.forEach(a => a.checkAtom());
  }

  static createAtom(index, level, direction) {
    let newAtom = new Atom(index, level, direction);
    newAtom.createDOMElement();
    newAtom.domElement = document.querySelector('.atom[index="' + index + '"]');
    return newAtom;
  }

  static destroyAtoms(atoms) {
    let i;

    for (i in atoms) {
      if (atoms[i].status !== 'dead') continue;

      atoms[i].domElement.remove();
      atoms.splice(i, 1);
      GameShop.removeALife();
    }
  }

  static bounceAtoms(atoms, pucks) {
    let colliders = atoms.filter(a => a.status == 'collide');
    let bouncesCount = 0;

    colliders.forEach(a => {
      let didAtomCollide = pucks.some(p => {
        let result = CoordsService.compareVectorsForBounce(a.vector, p.vector, p.angle);

        if (result) {
          a.executeBounce();
          bouncesCount++;
          return true;
        }
      });
    });
    return bouncesCount;
  }

  static setAtomsToVortex(atoms, timeToEffect) {
    setTimeout(function () {
      atoms.forEach(a => a.setAtomToVortex(timeToEffect));
    }, timeToEffect);
  }

  static checkVortex(atoms, vortex) {
    atoms.forEach(a => a.checkVortex(vortex.activeRadius));
  }

  static allAtomsAreInVortex(atoms) {
    if (atoms.length === 0)
      return false;

    let capturedAtoms = atoms.reduce((ax, current) => {
      return (current.status == 'captured')
        ? ax + 1
        : ax;
    }, 0);

    return (capturedAtoms === atoms.length);
  }
}

export default AtomService;
