import React from "react";
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
import backgroundImage from "./../assets/img/bee-on-flower-bkd3-fixed.jpg";
import "./InfoPage.css";

const Info = () => {

    return (
        <main>
            <div className="card-container">
                <img className="background-image w-full h-72 opacity-80"
                    id="bckgrd-img"
                    src={backgroundImage}
                    alt="Bee on a Flower Image" />
                <p className="background-image-text card-content text-2xl mt-4 leading-10 absolute top-28 pl-[55%] pr-[5%] pt-[5%] font-medium"> There are many different types of bees, hornets and wasps in Florida. Here are some of the different species to be on the look out for.</p>
            </div>
            <div className="card-container py-16">
                <p className="card-content text-2xl px-16 leading-10">Three-fourths of the world’s flowering plants and about 35 percent of the world’s food crops depend on animal pollinators to reproduce. That’s one out of every three bites of food you eat. More than 3,500 species of native bees help increase crop yields. Some scientists estimate that one out of every three bites of food we eat exists because of animal pollinators like bees, butterflies and moths, birds and bats, and beetles and other insects.</p>
            </div>
            <div className="card-container pb-[5%] w-full">
                <div className="page-title card-content text-center text-5xl font-semibold">Bees found in Florida</div>
            </div>

            <div className="text-3xl text-center font-medium">American Bumblebee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row-reverse lg:px-36 lg:py-11 lg:gap-32">
                <div className="card-container flex justify-center pt-4 pb-5">
                    <img className="card-content object-contain"
                        id="beePic1"
                        src={americanBumblebee}
                        alt="American Bumblebee Image"
                    />
                </div>
                <div className="card-content w-full lg:w-2/3" >
                    <p className="px-6 md:pl-16 leading-7" >There was a time when you could find this bumble bee across most of North America from Quebec to Florida, westward to South Dakota, then south into the central Mountains of Mexico. Within the past decade, though, its numbers have collapsed. It is strongly suspected that the American bumble bee was infected with a virus when European bumble bees were imported into North America to pollinate greenhouse tomatoes. It is still commonly found in the southern parts of its historic distribution from Florida, west to Colorado, Texas, and New Mexico. This species favors prairies and grasslands and is rarely associated with extensive forests.</p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Brown-Belted Bumblebee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row lg:px-36 lg:py-11 lg:gap-32">
                <div className="card-container">
                    <img className="card-content"
                        id="beePic2"
                        src={brownBelted}
                        alt="Brown-Belted Bumblebee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> The brown-belted bumblebee is native to much of the United States except for the Southwest, and to the southernmost regions of several of the provinces of Canada. This bumblebee can occupy many kinds of habitat, including meadows, wetlands, agricultural fields, and urban areas, even densely populated cities. It is a common pollinator in community gardens in New York City and it has been observed near the top of the Empire State Building over 100 stories above ground level. This species nests underground or on the surface. Nests are generally small colonies of fewer than 50 workers, but they aggressively defend their establishments. This is a eusocial bee, one that forms a colony that works together to rear young with labor divided amongst reproductive and non-reproductive castes. This is a common species in much of its wide range. Unlike many bumblebees in North America, it has experienced an average decline of 0%, and in some areas its populations may be increasing. It apparently faces no serious threats</p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Bumblebee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row-reverse lg:px-36 lg:py-11 lg:gap-32">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic3"
                        src={bumblebee}
                        alt="Bumblebee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> Bumblebees are the only bees native to North America that are truly social. They live in colonies, have different divisions of labor or castes, and have overlapping generations, usually with multiple broods throughout the spring, summer, and fall. Bumble bees are important pollinators of wild flowering plants and crops. As generalist foragers, they do not depend on any one flower type. However, some plants do rely on bumble bees to achieve pollination. The bumble bee colony has an annual life cycle. At the end of the summer the foundress queen, her workers and male offspring will all die; only the newly emerged, fertilized queens (gynes) survive to hibernate through the winter. Bumble bees need a cavity in which to build their nest. The queens are opportunists, looking for any suitably sized cavity. Sometimes this is above ground, such as in hollow trees, abandoned bird nests, rock walls, or under a tussock of grass, but they mostly nest underground. An abandoned rodent hole is a favorite, as this space is warm and already lined with fur.</p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Carpenter Bee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row lg:px-36 lg:py-11 lg:gap-20">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic4"
                        src={carpenterBee}
                        alt="Carpenter Bee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> The common name "carpenter bee" derives from their nesting behavior; nearly all species burrow into hard plant material such as dead wood or bamboo. Carpenter bees are traditionally considered solitary bees, though some species have simple social nests in which mothers and daughters may cohabit. Solitary bees tend to be gregarious and often several nests of solitary bees are near each other. In solitary nesting, the founding bee forages, builds cells, lays the eggs, and guards. Normally, only one generation of bees live in the nest. Carpenter bees make nests by tunneling into wood, bamboo, and similar hard plant material such as peduncles, usually dead. They vibrate their bodies as they rasp their mandibles against hard wood, each nest having a single entrance which may have many adjacent tunnels. Male bees often are seen hovering near nests and will approach nearby animals. However, males are harmless, since they do not have a stinger. Female carpenter bees are capable of stinging, but they are docile and rarely sting unless caught in the hand or otherwise directly provoked.</p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Common Eastern Bumblebee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row-reverse lg:px-36 lg:py-11 lg:gap-32">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic5"
                        src={commonEastern}
                        alt="Common Eastern Bumblebee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> The common eastern bumble bee is the most commonly encountered bumblebee across much of eastern North America. They can be found in the Eastern temperate forest region of the eastern United States, southern Canada, and the eastern Great Plains. Common eastern bumble bees adapt well to a variety of habitats, nectar sources, and climates and were seen visiting a variety and abundance of plants. In addition to agricultural, wetland, and urban conditions, the species can thrive in wooded habitats, and is likely related to woodland spring ephemerals. It nests underground in open fields and woods. They are used as pollinator bees for tomatoes, blueberries, raspberries, and pumpkins.</p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Digger Bee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row lg:px-36 lg:py-11 lg:gap-20">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic6"
                        src={diggerBee}
                        alt="Digger Bee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> Also known as ground bees, digger bees are solitary bees that nest underground. The United States is home to approximately 70 species of digger bees. Female adult digger bees live underground, where they build a nest about 6 inches (15 cm.) deep. Within the nest, they prepare a chamber with plenty of pollen and nectar to sustain the larvae. Male digger bees don’t help with this project. Instead, their job is to tunnel to the surface of the soil before the females emerge in spring. They spend their time flying around, waiting to create the next generation of digger bees. You may notice digger bees in areas of your yard where the grass is sparse, such as dry or shady spots. They typically don’t damage the turf, although some types leave piles of soil outside the holes. Digger bees are solitary, and each bee has its own special entry to its private chamber. However, there may be an entire community of bees, and a whole lot of holes. Digger bees generally don’t sting unless they’re threatened. They aren’t aggressive and they won’t attack like wasps or yellowjackets.</p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">East African Lowland Honeybee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row-reverse lg:px-36 lg:py-11 lg:gap-32">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic7"
                        src={eastAfrican}
                        alt="East African Lowland Honeybee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> The East African lowland honeybee is a subspecies of the western honeybee. It is native to central, southern and eastern Africa. This subspecies has been determined to constitute one part of the ancestry of the Africanized bees (also known as "killer bees") spreading through North and South America. A single East African lowland bee sting is no more venomous than a single European bee sting, though East African lowland honeybees respond more quickly when disturbed than do European honeybees. They send out three to four times as many workers in response to a threat. They will also pursue an intruder for a greater distance from the hive. The species was first imported across the Atlantic Ocean to Brazil before it spread to Central America, South America, and southern areas of the United States. The Africanized honeybee thrives in tropical areas and is not well adapted for cold areas that receive heavy rainfall. The underlying hypothesis for the aggressive behavior of East African lowland honeybees is based on the idea that this race of bees evolved in an arid environment, where the bees' food was scarce. Under this situation, selection favored more aggressive colonies, which protected their food source and hive from predators and robbed bees from other colonies. This behavior allowed more aggressive colonies to survive where the less aggressive colonies eventually were selected against by natural selection.</p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Eastern Carpenter Bee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row lg:px-36 lg:py-11 lg:gap-20">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic8"
                        src={easternCarpenter}
                        alt="Eastern Carpenter Bee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> The eastern carpenter bee extends through the eastern United States and into Canada.  Eastern carpenter bees build their nests in wood, bamboo culms, agave stalks, and other comparable materials, but they prefer to nest in milled pine or cedar lumber. The nests are built by scraping wood shavings off the wall. These shavings are then used to create partitions between nesting cells. The entrance cuts into the wood perpendicular to the grain, but they are built parallel beyond the entrance. These nests may be either social, containing groups of two to five females, or solitary.  During nesting time, only the older females are responsible for nesting duties such as digging, excavating the cells, lining the cells, collecting food, and ovipositing. Evidence of this activity can be found in their worn mandibles. Young females rarely leave the nest and guard the entrance while the older females work, resulting in unworn wings and mandibles in the younger females. Additionally, the eastern carpenter bee is the only known species in which one-year-old females cohabit the nest with two-year-old females that do all the labor. The male bee is unable to sting because the stinger is simply a modified ovipositor (which males lack by definition), though they will commonly approach human beings and buzz loudly around them or fly close to them. The female, on the other hand, is capable of stinging; while the pain level of these stings is not well-documented, researchers have testified that the eastern carpenter bee will sting if roughly handled. As the stinger is not barbed, a female can sting multiple times.</p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Honeybee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row-reverse lg:px-36 lg:py-11 lg:gap-20">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic9"
                        src={honeyBee}
                        alt="Honeybee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> Honeybees are known for their construction of perennial colonial nests from wax, the large size of their colonies, and surplus production and storage of honey, distinguishing their hives as a prized foraging target of many animals, including honey badgers, bears and human hunter-gatherers. Honeybees can thrive in natural or domesticated environments, though they prefer to live in gardens, woodlands, orchards, meadows and other areas where flowering plants are abundant. Within their natural habitat, honeybees build nests inside tree cavities and under edges of objects to hide themselves from predators. Honeybees: you either love them or hate them. The latter is understandable – the idea of a bee sting can inspire fear in even the bravest of humans, especially if they happen to be allergic. But the truth is, these insects really do more good than harm.</p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Orchid Bee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row lg:px-36 lg:py-11 lg:gap-20">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic10"
                        src={orchidBee}
                        alt="Orchid Bee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> Orchid bees are found only in the Americas. There are around 200 different known species, and new orchid bee species are discovered every year. The most diverse orchid bee populations are in Costa Rica and Panamá but can be found all the way from Florida in the north through Brazil in the south. Only a single species can be found in the United States.  This bee, Euglossa viridissima, is a recent arrival from either Mexico or Central America and was likely introduced to the United States accidentally.  These tiny but powerful fliers often travel long distances on their flights—some bees can fly up to 30 miles in a single trip. That’s really far when you’re only an inch long. Some orchids are entirely dependent on orchid bee males for pollination and reproduction, but most orchid bees visit many plants to meet their needs—not just orchids. Nests are generally constructed close to, but not on, the ground's surface. Each female constructs 8 brood cells, rearing her larvae on the pollen and nectar of many tropical trees, bushes, and orchids. </p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Southeastern Blueberry Bee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row-reverse lg:px-36 lg:py-11 lg:gap-32">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic11"
                        src={southeasternBlueberry}
                        alt="Southeastern Blueberry Bee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> The Southeastern blueberry bee is most active from February through April. They primarily forage on blueberries and conveniently emerge just before the plants begin to flower, resulting in significantly higher yields. Blueberry bees resemble a small bumble bee, are strong fliers, and do very well in cool weather. By vibrating their wing muscles, they can warm up and fly before temperatures even reach 60 degrees. One study revealed that a single adult female can visit up to 50,000 blueberry flowers, resulting in more than 6,000 ripe blueberries! Blueberry bees are solitary ground nesters, but often nest in large aggregations. They prefer to nest in sandy soils in sunny, open areas. Females dig an entrance tunnel into the soil and create individual nest cells off the main tunnel. She lines the cell walls with a waterproof coating and provisions each one with a mass of nectar and blueberry pollen. A single egg is laid on each pollen mass, and she seals the main tunnel shut. Come spring, adult males emerge before females and anxiously await their female counterparts. Males patrol nest aggregation sites, especially in the mornings when females are most likely to emerge. Some males are so anxious to beat out their competition that they dig into the sand to meet females climbing out of their nests. </p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Southern Carpenter Bee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row lg:px-36 lg:py-11 lg:gap-20">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic12"
                        src={southernCarpenter}
                        alt="Southern Carpenter Bee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> The southern carpenter bee can be found mainly in the coastal and gulf regions of the southeastern United States, as well as Mexico and Guatemala. They excavate nests in woody plant material. However, unlike its sympatric species, the southern carpenter bee has not been found to construct nest galleries in structural timbers of building, making it less of an economic nuisance to humans. They are considered solitary bees because they do not live in colonies. As a general pollinator, the southern carpenter bee is key to the reproduction of many plants within its habitat. In the nesting sites of many bee populations, destruction and removal of woody plants have caused the loss and extinction of those populations. </p>
                </div>
            </div>
            <div className="text-3xl text-center font-medium">Southern Plains Bumblebee</div>
            <div className="card-container flex flex-col pb-10 lg:flex-row-reverse lg:px-36 lg:py-11 lg:gap-32">
                <div className="card-container">
                    <img className="card-content object-contain"
                        id="beePic13"
                        src={southernPlains}
                        alt="Southern PLains Bumblebee Image" />
                </div>
                <div className="card-content w-2/3">
                    <p className="pl-16 text-lg"> Southern plains bumblebees are found in the Eastern Temperate Forest region on the coastal plain of the southeastern United States from central Florida north to New Jersey, Ohio west throughout the United States Great Plains. This North American species has exhibited declines in relative abundance across its range over the past decade. This species’ long-term downward trend in relative abundance is significant; if the same rate of decline continues, this species could potentially go extinct within 80-90 years. This species is large in comparison to other bumblebees and is unusual among bumblebees because the hairs of the abdomen appear flattened rather than fluffy like most other bumblebees. The southern plains bumblebee can be found in the open prairies, meadows, and grasslands of the southeastern coastal plain. They nest underground. In general, they are opportunistic nesters that do not dig their own underground nests but take advantage of pre-existing holes and depressions below the surface formed by rodents or other animals or cavities above the surface created by old logs, stumps, old ground-nesting bird nests, or clumps of grass. </p>
                </div>
            </div>
        

        </main >
    );
}

export default Info;