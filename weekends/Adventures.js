document.addEventListener('DOMContentLoaded', function () {
    const adventures = [
        { category: 'surfing', image: 'https://wknd.site/us/en/adventures/bali-surf-camp/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323792187/adobestock-175749320.jpeg', title: 'Bali Surf Camp', description: 'Surfing in Bali is on the bucket list.' },
        { category: 'surfing', image: 'https://wknd.site/us/en/adventures/beervana-portland/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323790531/adobestock-200192344.jpeg', title: 'Beervana in Portland', description: 'This adventure will provide insider' },
        { category: 'climbing', image: 'https://wknd.site/us/en/adventures/climbing-new-zealand/_jcr_content/root/container/carousel/item_1571266094599.coreimg.60.1200.jpeg/1660323785724/sport-climbing.jpeg', title: 'Climbing New Zealand', description: 'Let us help you make your New Zealand.' },
        { category: 'cycling', image: 'https://wknd.site/us/en/adventures/west-coast-cycling/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323786740/adobestock-151584995.jpeg', title: 'West Coast Cycling', description: 'Join us for this once in a lifetime bike.' },
        { category: 'skiing', image: 'https://wknd.site/us/en/adventures/ski-touring-mont-blanc/_jcr_content/root/container/carousel/item_1571168419252.coreimg.60.1200.jpeg/1660323789507/adobestock-238230356.jpeg', title: 'Ski Touring Mont Blanc', description: 'This adventure includes 5 days of ski.' },
        { category: 'surfing', image: 'https://wknd.site/us/en/adventures/surf-camp-costa-rica/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323786122/adobestock-278302117.jpeg', title: 'Surf Camp in Costa Rica', description: 'Costa Rica is the ideal location for a fun.' },
        { category: 'travel', image: 'https://wknd.site/us/en/adventures/gastronomic-marais-tour/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323786247/adobestock-294203896.jpeg', title: 'Gastronomic Marais Tour', description: 'Take a VIP gastronomic tour through.' },
        { category: 'travel', image: 'https://wknd.site/us/en/adventures/napa-wine-tasting/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323791204/adobestock-280313729.jpeg', title: 'Napa Wine Tasting', description: 'Enjoy spectacular wine tasting in the.' },
        { category: 'travel', image: 'https://wknd.site/us/en/adventures/riverside-camping-australia/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323783461/adobe-waadobe-wa-mg-2466.jpeg', title: 'Riverside Camping', description: 'Siegel River Australia.' },
        { category: 'skiing', image: 'https://wknd.site/us/en/adventures/tahoe-skiing/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323785476/adobestock-184591344.jpeg', title: 'Tahoe Skiing', description: 'Great weather, crystal clear lake water.' },
        { category: 'cycling', image: 'https://wknd.site/us/en/adventures/yosemite-backpacking/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323790695/adobestock-231698835.jpeg', title: 'Yosemite Backpacking', description: 'Yosemite National Park, designated a.' },
        { category: 'cycling', image: 'https://wknd.site/us/en/adventures/whistler-mountain-biking/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323789625/adobestock-122615840.jpeg', title: 'Whistler Mountain Biking', description: 'Whistler is often considered North.' },
    ];

    const cardsContainer = document.querySelector('.cards-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderCards(filter) {
        cardsContainer.innerHTML = '';

        const filteredAdventures = filter === 'all' ? adventures : adventures.filter(adventure => adventure.category === filter);

        filteredAdventures.forEach(adventure => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${adventure.image}" alt="${adventure.title}">
                <div class="card-content">
                    <h3>${adventure.title}</h3>
                    <p>${adventure.description}</p>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            renderCards(filter);
        });
    });

    // Render all cards initially
    renderCards('all');
});

// document.addEventListener('DOMContentLoaded', function () {
//     const adventures = [
//         { category: 'surfing', image: 'https://wknd.site/us/en/adventures/bali-surf-camp/_jcr_content/root/container/carousel/image.coreimg.60.1200.jpeg/1660323792187/adobestock-175749320.jpeg', title: 'Bali Surf Camp', description: 'Surfing in Bali is on the bucket list.', activity: 'Surfing', adventureType: 'Overnight Trip', tripLength: '6 Days', groupSize: '6', difficulty: 'Beginner', price: '5000.0', additionalInfo: 'Surfing in Bali is on the bucket list of every surfer - whether you\'re a beginner or someone who\'s been surfing for decades, there will be a break to cater to your ability. Bali offers warm water, tropical vibes, awesome breaks and low cost expenses. Looking for a low cost alternative? Checkout Surf Camp Costa Rica', detailedImage: 'https://wknd.site/us/en/adventures/bali-surf-camp/_jcr_content/root/container/container_fixed/tabs/item_1594238312974/par1/image.coreimg.60.1200.jpeg/1660323795978/adobestock-266405335.jpeg' },
//         // Add other adventures here...
//     ];

//     const cardsContainer = document.querySelector('.cards-container');
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const detailedView = document.getElementById('detailed-view');
//     const detailedImage = document.getElementById('detailed-image');
//     const detailedTitle = document.getElementById('detailed-title');
//     const detailedDescription = document.getElementById('detailed-description');
//     const detailedActivity = document.getElementById('detailed-activity');
//     const detailedAdventureType = document.getElementById('detailed-adventure-type');
//     const detailedTripLength = document.getElementById('detailed-trip-length');
//     const detailedGroupSize = document.getElementById('detailed-group-size');
//     const detailedDifficulty = document.getElementById('detailed-difficulty');
//     const detailedPrice = document.getElementById('detailed-price');
//     const detailedAdditionalInfo = document.getElementById('detailed-additional-info');

//     function renderCards(filter) {
//         cardsContainer.innerHTML = '';

//         const filteredAdventures = filter === 'all' ? adventures : adventures.filter(adventure => adventure.category === filter);

//         filteredAdventures.forEach(adventure => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `
//                 <img src="${adventure.image}" alt="${adventure.title}">
//                 <div class="card-content">
//                     <h3>${adventure.title}</h3>
//                     <p>${adventure.description}</p>
//                 </div>
//             `;
//             card.addEventListener('click', function () {
//                 showDetailedView(adventure);
//             });
//             cardsContainer.appendChild(card);
//         });
//     }

//     function showDetailedView(adventure) {
//         detailedImage.src = adventure.detailedImage;
//         detailedTitle.textContent = adventure.title;
//         detailedDescription.textContent = adventure.description;
//         detailedActivity.textContent = adventure.activity;
//         detailedAdventureType.textContent = adventure.adventureType;
//         detailedTripLength.textContent = adventure.tripLength;
//         detailedGroupSize.textContent = adventure.groupSize;
//         detailedDifficulty.textContent = adventure.difficulty;
//         detailedPrice.textContent = adventure.price;
//         detailedAdditionalInfo.textContent = adventure.additionalInfo;

//         detailedView.classList.remove('hidden');
//     }

//     document.querySelector('#detailed-view').addEventListener('click', function (e) {
//         if (e.target === detailedView) {
//             detailedView.classList.add('hidden');
//         }
//     });

//     filterButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const filter = this.getAttribute('data-filter');
//             renderCards(filter);
//         });
//     });

//     renderCards('all');
// });
