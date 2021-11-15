//importing images for fish
import BlueTang from '../images/BlueTang.png'
import ChocolateChipSeaStar from '../images/ChocolateChipSeaStar.png'
import CubicusBoxfish from '../images/CubicusBoxfish.png'
import DevilsHandLeatherCoral from '../images/DevilsHandLeatherCoral.png'
import DwarfBlueLegHermitCrab from '../images/DwarfBlueLegHermitCrab.png'
import DwarfRedTipHermitCrab from '../images/DwarfRedTipHermitCrab.png'
import FlameAngelfish from '../images/FlameAngelfish.png'
import FuzzyDwarfLionfish from '../images/FuzzyDwarfLionfish.png'
import GoldStripeMaroonClownfish from '../images/GoldStripeMaroonClownfish.png'
import GreenReefChromis from '../images/GreenReefChromis.png'
import GardenEel from '../images/GardenEel.png'
import IndianVagabondButterflyfish from '../images/IndianVagabondButterflyfish.png'
import KenyaTreeCoral from '../images/KenyaTreeCoral.png'
import MarbledBambooCatShark from '../images/MarbledBambooCatShark.png'
import MidasBlenny from '../images/MidasBlenny.png'
import MoorishIdol from '../images/MoorishIdol.png'
import OcellarisClownfish from '../images/OcellarisClownfish.png'
import PearlberryAcroporaCoral from '../images/PearlberryAcroporaCoral.png'
import PeppermintShrimp from '../images/PeppermintShrimp.png'
import RedCorrisWrasse from '../images/RedCorrisWrasse.png'
import RedKnobSeaStar from '../images/RedKnobSeaStar.png'
import ScissortailDartfish from '../images/ScissortailDartfish.png'
import TigertailSeahorse from '../images/TigertailSeahorse.png'
import ToadstoolMushroomLeatherCoral from '../images/ToadstoolMushroomLeatherCoral.png'
import YellowtailDamselfish from '../images/YellowtailDamselfish.png'
import YoungBlushingFingerLeatherCoral from '../images/YoungBlushingFingerLeatherCoral.png'

//list of fish with their respective properties
let list; 
export default list = [
  { Name: 'Blue Tang', Difficulty: 'Medium', pHLevel: '8.1 - 8.4', SG: '1.019 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '180 gal', ReefSafe: 'Yes', Diet: 'Herbivore', Image: BlueTang },
  { Name: 'Chocolate Chip Sea Star', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '72 - 80 °F', MinimumTankSize: '50 gal', ReefSafe: 'No', Diet: 'Carnivore (Chopped clams, shrimp, and squid)', Image: ChocolateChipSeaStar },
  { Name: 'Cubicus Boxfish', Difficulty: 'Expert', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '125 gal', ReefSafe: 'Caution', Diet: 'Omnivore', Image: CubicusBoxfish },
  { Name: 'Devil\'s Hand Leather Coral', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: 'N/A', ReefSafe: 'Yes', Diet: 'Photosynthesis', Image: DevilsHandLeatherCoral },
  { Name: 'Dwarf Blue Leg Hermit Crab', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: 'N/A', ReefSafe: 'Yes', Diet: 'Scavenger/Omnivore', Image: DwarfBlueLegHermitCrab },
  { Name: 'Dwarf Red Tip Hermit Crab', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: 'N/A', ReefSafe: 'Caution', Diet: 'Scavenger/Herbivore', Image: DwarfRedTipHermitCrab },
  { Name: 'Flame Angelfish', Difficulty: 'Medium', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '70 gal', ReefSafe: 'Caution', Diet: 'Omnivore', Image: FlameAngelfish },
  { Name: 'Fuzzy Dwarf Lionfish', Difficulty: 'Moderate', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '50 gal', ReefSafe: 'Caution', Diet: 'Carnivore', Image: FuzzyDwarfLionfish },
  { Name: 'Garden Eel', Difficulty: 'Expert', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '40 gal', ReefSafe: 'Caution', Diet: 'Carnivore', Image: GardenEel },
  { Name: 'Gold Stripe Maroon Clownfish', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.026', Temperature: '76 - 80 °F', MinimumTankSize: '30 gal', ReefSafe: 'Yes', Diet: 'Omnivore', Image: GoldStripeMaroonClownfish },
  { Name: 'Green Reef Chromis', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '30 gal', ReefSafe: 'Yes', Diet: 'Omnivore', Image: GreenReefChromis },
  { Name: 'Indian Vagabond Butterflyfish', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '75 gal', ReefSafe: 'No', Diet: 'Omnivore', Image: IndianVagabondButterflyfish },
  { Name: 'Kenya Tree Coral', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: 'N/A', ReefSafe: 'Yes', Diet: 'Micro-plankton', Image: KenyaTreeCoral },
  { Name: 'Marbled Bamboo Cat Shark', Difficulty: 'Expert', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '300 gal', ReefSafe: 'No', Diet: 'Carnivore', Image: MarbledBambooCatShark },
  { Name: 'Midas Blenny', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '30 gal', ReefSafe: 'Yes', Diet: 'Omnivore', Image: MidasBlenny},
  { Name: 'Moorish Idol', Difficulty: 'Expert', pHLevel: '8.1 - 8.4', SG: '1.021 - 1.023', Temperature: '78 - 80 °F', MinimumTankSize: '125 gal', ReefSafe: 'Caution', Diet: 'Omnivore', Image: MoorishIdol },
  { Name: 'Ocellaris Clownfish', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '20 gal', ReefSafe: 'Yes', Diet: 'Omnivore', Image: OcellarisClownfish },
  { Name: 'Pearlberry Acropora Coral', Difficulty: 'Medium', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: 'N/A', ReefSafe: 'Yes', Diet: 'Photosynthesis', Image: PearlberryAcroporaCoral },
  { Name: 'Peppermint Shrimp', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: 'N/A', ReefSafe: 'Yes', Diet: 'Carnivore', Image: PeppermintShrimp },
  { Name: 'Red Corris Wrasse', Difficulty: 'Medium', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '125 gal', ReefSafe: 'Caution', Diet: 'Carnivore', Image: RedCorrisWrasse },
  { Name: 'Red Knob Sea Star', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '50 gal', ReefSafe: 'No', Diet: 'Carnivore (Chopped clams, shrimp, and squid)', Image: RedKnobSeaStar },
  { Name: 'Scissortail Dartfish', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '30 gal', ReefSafe: 'Yes', Diet: 'Carnivore', Image: ScissortailDartfish },
  { Name: 'Tigertail Seahorse', Difficulty: 'Difficult', pHLevel: '8.0 - 8.4', SG: '1.021 - 1.025', Temperature: '68 - 78 °F', MinimumTankSize: '30 gal', ReefSafe: 'Caution', Diet: 'Carnivore', Image: TigertailSeahorse },
  { Name: 'Toadstool Mushroom Leather Coral', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: 'N/A', ReefSafe: 'Yes', Diet: 'Photosynthesis', Image: ToadstoolMushroomLeatherCoral },
  { Name: 'Yellowtail Damselfish', Difficulty: 'Easy', pHLevel: '8.1 - 8.4', SG: '1.020 - 1.025', Temperature: '72 - 78 °F', MinimumTankSize: '30 gal', ReefSafe: 'Yes', Diet: 'Omnivore', Image: YellowtailDamselfish },
  { Name: 'Young Blushing Finger Leather Coral', Difficulty: 'Moderate', pHLevel: '8.1 - 8.4', SG: '1.023 - 1.025', Temperature: '68 - 78 °F', MinimumTankSize: 'N/A', ReefSafe: 'Yes', Diet: 'Photosynthesis (Aggressive lighting)', Image: YoungBlushingFingerLeatherCoral }
  ]

  //useless function to remove error "'list' is defined but never used"
  export function UselessFunction () {
    return(
      <div>
        <UselessFunction fishes={list} />
      </div>
    );
  }
  





