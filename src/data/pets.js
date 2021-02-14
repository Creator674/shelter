const KiraImage = require('../assets/pets/pet-dog-kira.png');
const ZoeImage = require('../assets/pets/pet-cat-zoe.png');
const SchlatImage = require('../assets/pets/pet-dog-schlat.png');
const CleoImage = require('../assets/pets/pet-cat-cleo.png');
const MoneImage = require('../assets/pets/pet-dog-mone.png');
const ShepardImage = require('../assets/pets/pet-dog-shepard.png');
const ScoopyImage = require('../assets/pets/pet-dog-scoopy.png');
const BellaImage = require('../assets/pets/pet-dog-bella.png');
const LunaImage = require('../assets/pets/pet-dog-luna.png');
const MamboJamboImage = require('../assets/pets/pet-dog-mambo-jambo.png');
const ShrinkImage = require('../assets/pets/pet-ferret-shrink.png');
const KamychoImage = require('../assets/pets/pet-rat-kamycho.png');
const TimoteImage = require('../assets/pets/pet-dog-timote.png');
const StormyImage = require('../assets/pets/pet-cat-stormy.png');
const KaceyImage = require('../assets/pets/pet-cat-kacey.png');
const WillImage = require('../assets/pets/pet-cat-will.png');
const TeddyImage = require('../assets/pets/pet-dog-teddy.png');
const CocoImage = require('../assets/pets/pet-dog-coco.png');
const ButangoImage = require('../assets/pets/pet-beaver-butango.png');
const AquilaImage = require('../assets/pets/pet-hedgehog-aquila.png');
const WoodyImage = require('../assets/pets/pet-dog-woody.png');
const TonakuImage = require('../assets/pets/pet-panda-tonaku.png');
const OscarImage = require('../assets/pets/pet-dog-oscar.png');
const JamyaImage = require('../assets/pets/pet-squirrel-jamya.png');
const GrizzImage = require('../assets/pets/pet-bear-grizz.png');

class Pet {
  constructor(id, name, type, image) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.image = image;
  }
}

const pets = [
  new Pet(1, 'Kira', 'dog', KiraImage),
  new Pet(2, 'Zoe', 'cat', ZoeImage),
  new Pet(3, 'Schlat', 'dog', SchlatImage),
  new Pet(4, 'Cleo', 'cat', CleoImage),
  new Pet(5, 'Mone', 'dog', MoneImage),
  new Pet(6, 'Shepard', 'dog', ShepardImage),
  new Pet(7, 'Scoopy', 'dog', ScoopyImage),
  new Pet(8, 'Bella', 'dog', BellaImage),
  new Pet(9, 'Luna', 'dog', LunaImage),
  new Pet(10, 'Mambo & Jambo', 'dog', MamboJamboImage),
  new Pet(11, 'Shrink', 'ferret', ShrinkImage),
  new Pet(12, 'Kamycho', 'rat', KamychoImage),
  new Pet(13, 'Timote', 'dog', TimoteImage),
  new Pet(14, 'Stormy', 'cat', StormyImage),
  new Pet(15, 'Kacey', 'cat', KaceyImage),
  new Pet(16, 'Will', 'cat', WillImage),
  new Pet(17, 'Teddy', 'dog', TeddyImage),
  new Pet(18, 'Coco', 'dog', CocoImage),
  new Pet(19, 'Butango', 'beaver', ButangoImage),
  new Pet(20, 'Aquila', 'hedgehog', AquilaImage),
  new Pet(21, 'Woody', 'dog', WoodyImage),
  new Pet(22, 'Tonaku', 'panda', TonakuImage),
  new Pet(23, 'Oscar', 'dog', OscarImage),
  new Pet(24, 'Jamya', 'squirrel', JamyaImage),
  new Pet(25, 'Grizz', 'bear', GrizzImage),
];

export default pets;
