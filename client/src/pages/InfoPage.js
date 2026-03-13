import React, { useMemo, useState } from "react";
import americanBumblebee from "./../assets/img/AmericanBumblebeeImg.jpg";
import brownBelted from "./../assets/img/Brown-BeltedBumblebeeImg.jpg";
import bumblebee from "./../assets/img/Brown-BeltedBumblebeeImg.jpg";
import carpenterBee from "./../assets/img/CarpenterBeeImg.jpg";
import commonEastern from "./../assets/img/Brown-BeltedBumblebeeImg.jpg";
import diggerBee from "./../assets/img/DiggerBeeImg.jpg";
import eastAfrican from "./../assets/img/EastAfricanLowlandHoneyBeeImg.jpg";
import easternCarpenter from "./../assets/img/EasternCarpenterBeeImg.jpg";
import honeyBee from "./../assets/img/HoneyBee_Img.jpg";
import orchidBee from "./../assets/img/OrchidBeeImg.jpg";
import southeasternBlueberry from "./../assets/img/SoutheasternBlueberryBeeImg.jpg";
import southernCarpenter from "./../assets/img/SouthernCarpenterBeeImg.jpg";
import southernPlains from "./../assets/img/SouthernPlainsBumblebeeImg.jpg";
import "./InfoPage.css";

const beeSpecies = [
    {
        name: "American Bumblebee",
        image: americanBumblebee,
        details:
            "There was a time when you could find this bumble bee across most of North America from Quebec to Florida, westward to South Dakota, then south into the central mountains of Mexico. Within the past decade, though, its numbers have collapsed. It is strongly suspected that the American bumble bee was infected with a virus when European bumble bees were imported into North America to pollinate greenhouse tomatoes. It is still commonly found in the southern parts of its historic distribution from Florida, west to Colorado, Texas, and New Mexico. This species favors prairies and grasslands and is rarely associated with extensive forests.",
    },
    {
        name: "Brown-Belted Bumblebee",
        image: brownBelted,
        details:
            "The brown-belted bumblebee is native to much of the United States except for the Southwest, and to the southernmost regions of several provinces of Canada. This bumblebee can occupy many kinds of habitat, including meadows, wetlands, agricultural fields, and urban areas, even densely populated cities. This species nests underground or on the surface and tends to form smaller colonies that still defend their nest. Unlike many bumblebees in North America, it has not shown major decline across much of its range.",
    },
    {
        name: "Bumblebee",
        image: bumblebee,
        details:
            "Bumblebees are among the only bees native to North America that are truly social, living in colonies with different castes and overlapping generations. They are important pollinators of both wild flowering plants and crops, and as generalist foragers they can use many different flowers. Most colonies have an annual life cycle and only newly emerged queens survive winter by hibernating. Queens usually nest in pre-existing cavities, especially underground spaces such as old rodent burrows.",
    },
    {
        name: "Carpenter Bee",
        image: carpenterBee,
        details:
            "The name carpenter bee comes from their nesting behavior, since they burrow into hard plant material like dead wood and bamboo. Most species are solitary, though some have simple social nesting where mothers and daughters share space. Males may hover near nests but cannot sting, while females can sting but are generally docile unless provoked. Carpenter bees are common pollinators and are often seen around wooden structures and flowering landscapes.",
    },
    {
        name: "Common Eastern Bumblebee",
        image: commonEastern,
        details:
            "The common eastern bumblebee is one of the most frequently encountered bumblebees in eastern North America. It adapts to many habitats including agricultural fields, urban areas, wetlands, and wooded environments. This species nests underground in both open fields and woods and is used as a commercial pollinator for crops like tomatoes, blueberries, raspberries, and pumpkins.",
    },
    {
        name: "Digger Bee",
        image: diggerBee,
        details:
            "Also called ground bees, digger bees are solitary bees that build nests underground. Females create chambers stocked with pollen and nectar for larvae, while males wait near emergence areas in spring. You may notice them in sparse turf or dry soils where many small holes appear close together. They are usually non-aggressive and rarely sting unless directly threatened.",
    },
    {
        name: "East African Lowland Honeybee",
        image: eastAfrican,
        details:
            "The East African lowland honeybee is a subspecies of the western honeybee native to central, southern, and eastern Africa. It contributed to the ancestry of Africanized honeybees in the Americas. Individual stings are not more venomous than European honeybees, but colonies can respond faster and with greater numbers when disturbed. This subspecies is better adapted to warmer climates than cold, wet environments.",
    },
    {
        name: "Eastern Carpenter Bee",
        image: easternCarpenter,
        details:
            "The eastern carpenter bee ranges through the eastern United States and into Canada. It nests in wood, bamboo, and similar materials by scraping tunnels and building partitions from wood shavings. Some nests are solitary while others include small social groups of related females. Males cannot sting, while females can sting if handled roughly.",
    },
    {
        name: "Honeybee",
        image: honeyBee,
        details:
            "Honeybees are known for perennial wax-comb colonies and honey storage, making them essential pollinators and key agricultural partners. They thrive in gardens, orchards, meadows, and woodland edges where flowers are abundant. In natural settings they often nest in tree cavities or sheltered spaces. Their pollination supports ecosystem health and food production far beyond the hive.",
    },
    {
        name: "Orchid Bee",
        image: orchidBee,
        details:
            "Orchid bees are found only in the Americas and include around 200 known species, with new species still being discovered. Populations are especially diverse in Central America, though one species has become established in parts of Florida. These bees are strong fliers and can travel long distances despite their small size. While closely tied to orchids in some cases, many species also visit a wide variety of flowering plants.",
    },
    {
        name: "Southeastern Blueberry Bee",
        image: southeasternBlueberry,
        details:
            "The Southeastern blueberry bee is active mainly from late winter to spring, timing its emergence with blueberry bloom. It is a strong flier in cool conditions and can significantly boost blueberry yield through effective pollination. This species is a solitary ground nester that prefers sunny, sandy soils. Large nesting aggregations are common where habitat conditions are favorable.",
    },
    {
        name: "Southern Carpenter Bee",
        image: southernCarpenter,
        details:
            "The southern carpenter bee is found primarily in coastal and gulf regions of the southeastern United States, along with parts of Mexico and Guatemala. It excavates nests in woody plant material but is less likely to use building timbers than some related species. As a solitary pollinator, it plays an important role in local plant reproduction. Habitat loss and removal of suitable woody nesting material can reduce local populations.",
    },
    {
        name: "Southern Plains Bumblebee",
        image: southernPlains,
        details:
            "Southern plains bumblebees occur across parts of the southeastern coastal plain and the Great Plains. This species has shown notable long-term declines in relative abundance in several regions. They are often found in open prairies, meadows, and grasslands where they nest underground in existing cavities. Ongoing conservation and habitat support are important to maintain healthy populations.",
    },
];

const getPreview = (text) => {
    const firstSentence = text.split(". ")[0];
    return `${firstSentence}.`;
};

const Info = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBees = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return beeSpecies;
    }

    return beeSpecies.filter((bee) => {
      return (
        bee.name.toLowerCase().includes(term) ||
        bee.details.toLowerCase().includes(term)
      );
    });
  }, [searchTerm]);

  return (
    <main className="info-page">
      <section
        id="info-hero-img"
        className="w-full min-h-[18rem] md:min-h-[22rem] flex items-center justify-end"
      >
        <p className="info-hero-copy">
          There are many different types of bees, hornets, and wasps in
          Florida. Explore a few important bee species below.
        </p>
      </section>

      <section className="info-intro-section">
        <p className="info-intro-copy">
          Three-fourths of the world&apos;s flowering plants and about 35 percent
          of food crops depend on animal pollinators to reproduce. In practical
          terms, about one out of every three bites of food depends on
          pollinators like bees.
        </p>
      </section>

      <section className="info-grid-section">
        <h2 className="info-grid-title">Bees Found In Florida</h2>
        <div className="info-search-wrap">
          <input
            type="search"
            className="info-search-input"
            placeholder="Search bees by name or details..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search bees"
          />
        </div>
        <div className="bee-grid">
          {filteredBees.map((bee) => (
            <article className="bee-card" key={bee.name}>
              <h3 className="bee-name">{bee.name}</h3>
              <img className="bee-image" src={bee.image} alt={bee.name} />
              <p className="bee-preview">{getPreview(bee.details)}</p>
              <details className="bee-details">
                <summary>More info</summary>
                <div className="bee-details-body">
                  <p>{bee.details}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
        {filteredBees.length === 0 && (
          <p className="info-no-results">No bees matched your search.</p>
        )}
      </section>
    </main>
  );
};

export default Info;