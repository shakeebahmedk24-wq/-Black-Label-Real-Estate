/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import millenniumPenthouseImg from '../assets/images/millennium_grand_penthouse_1790865993984.jpg';
import pacificHeightsManorImg from '../assets/images/pacific_heights_manor_1790866007200.jpg';
import russianHillModernImg from '../assets/images/russian_hill_residence_1790866020502.jpg';
import telegraphHillVillaImg from '../assets/images/telegraph_hill_villa_1790866032861.jpg';

export interface PropertyListing {
  id: string;
  title: string;
  neighborhood: string;
  address: string;
  category: 'Penthouses' | 'Historic Mansions' | 'Modernist Architectural';
  status: string;
  priceText: string;
  specs: {
    beds: number;
    baths: number;
    sqft: string;
    outdoor: string;
    parking: string;
  };
  image: string;
  tagline: string;
  narrative: string;
  architecturalHighlights: string[];
}

export const curatedProperties: PropertyListing[] = [
  {
    id: 'millennium-grand-penthouse',
    title: 'The Grand Penthouse at Millennium Tower',
    neighborhood: 'SOMA / Transbay Core',
    address: '301 Mission Street, San Francisco, CA',
    category: 'Penthouses',
    status: 'Private Treaty Offering',
    priceText: 'Price Upon Request',
    tagline: 'Double-Height Glass Overlooking the Entire San Francisco Bay',
    image: millenniumPenthouseImg,
    specs: {
      beds: 4,
      baths: 5.5,
      sqft: '5,450 SF',
      outdoor: '620 SF Loggia',
      parking: '2 Valet Spaces',
    },
    narrative:
      'Perched atop San Francisco’s iconic Millennium Tower, this bespoke corner penthouse commands uninterrupted 360-degree panoramas of the Bay Bridge, the Financial District skyline, and the East Bay hills. Finished with honed Pietra di Cardoso, dark fumed oak paneling, and motorized solar shades.',
    architecturalHighlights: [
      'Double-height great room with 12-foot floor-to-ceiling structural glass curtain walls',
      'Custom architectural kitchen by Poliform with Gaggenau 400 Series appliances and marble waterfall island',
      'Private elevator vestibule with dual keyed entry directly into the residence gallery',
      'Primary retreat with dual spa bathrooms, custom Italian dressing suites, and soaking tub with bridge views',
      'Direct resident privileges to 20,000 SF Club Level, private screening room, and saline indoor lap pool',
    ],
  },
  {
    id: 'pacific-heights-broadway-manor',
    title: 'The Broadway Historic Manor',
    neighborhood: 'Gold Coast, Pacific Heights',
    address: 'Broadway & Divisadero, San Francisco, CA',
    category: 'Historic Mansions',
    status: 'Private Placement Mandate',
    priceText: 'Price Upon Request',
    tagline: 'Monumental Beaux-Arts Limestone Estate with Manicured Courtyard',
    image: pacificHeightsManorImg,
    specs: {
      beds: 6,
      baths: 7.5,
      sqft: '8,200 SF',
      outdoor: 'Private Courtyard',
      parking: '3-Car Carriage Garage',
    },
    narrative:
      'Positioned along San Francisco’s most revered Gold Coast corridor, this grand limestone residence exemplifies timeless Beaux-Arts architecture. Meticulously restored to harmonize museum-grade period plasterwork with state-of-the-art structural and home automation engineering.',
    architecturalHighlights: [
      'Hand-carved limestone exterior with wrought-iron entry gating and private motor court',
      'Five authentic wood-burning marble hearths with antique French mantels',
      'Subterranean 1,800-bottle climate-controlled wine tasting cellar and tasting salon',
      'Top-floor library and observatory terrace with sweeping Golden Gate and Marin Headland sightlines',
      'Secluded formal boxwood parterre garden and heated outdoor dining loggia',
    ],
  },
  {
    id: 'russian-hill-summit-residence',
    title: 'The Summit Architectural Residence',
    neighborhood: 'Russian Hill',
    address: 'Green Street Crest, San Francisco, CA',
    category: 'Modernist Architectural',
    status: 'Confidential Mandate',
    priceText: 'Price Upon Request',
    tagline: 'Cantilevered Steel & Concrete Framing Alcatraz & Golden Gate',
    image: russianHillModernImg,
    specs: {
      beds: 4,
      baths: 4.5,
      sqft: '4,800 SF',
      outdoor: '850 SF Terraces',
      parking: '2-Car Private Garage',
    },
    narrative:
      'An architectural tour de force anchored into the crest of Russian Hill. Designed with board-formed concrete, dark bronze structural mullions, and extensive cantilevered terraces that create an illusion of floating above the Bay.',
    architecturalHighlights: [
      'Motorized Fleetwood glass pocket walls disappearing entirely into hidden wall pockets',
      'Cantilevered linear fire lounge terrace overlooking the Bay, Alcatraz, and Coit Tower',
      'Bespoke Boffi architectural kitchen with concealed butler’s pantry and Dornbracht fixtures',
      'Integrated Lutron HomeWorks automated architectural lighting and motorized shades',
      'Private wellness suite featuring custom western red cedar sauna and cold plunge',
    ],
  },
  {
    id: 'telegraph-hill-view-villa',
    title: 'The Telegraph Hill View Villa',
    neighborhood: 'Telegraph Hill',
    address: 'Montgomery Street Steps, San Francisco, CA',
    category: 'Modernist Architectural',
    status: 'Exclusive Representation',
    priceText: 'Price Upon Request',
    tagline: 'Discreet Modernist Sanctuary with Panoramic Bay Rooftop Garden',
    image: telegraphHillVillaImg,
    specs: {
      beds: 3,
      baths: 3.5,
      sqft: '3,650 SF',
      outdoor: 'Rooftop Garden',
      parking: '2-Car Garage with EV',
    },
    narrative:
      'Tucked along a quiet, tree-lined lane on Telegraph Hill, this warm modernist villa blends serene privacy with dramatic cityscape outlooks. The crown jewel is a private landscaped rooftop terrace offering an extraordinary setting for entertaining against the backdrop of the Bay.',
    architecturalHighlights: [
      'Private landscaped rooftop garden terrace with outdoor kitchen and 360-degree city views',
      'Hydronic radiant-heated terrazzo flooring throughout all primary living levels',
      'Sculptural floating blackened steel staircase illuminated by a continuous glass skylight spine',
      'Primary suite featuring bespoke walnut dressing cabinetry and bay-facing freestanding soaking tub',
      'Direct pedestrian access to historic landscaped stairways and prime North Beach culinary enclaves',
    ],
  },
];
