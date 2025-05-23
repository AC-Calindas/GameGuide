document.addEventListener('DOMContentLoaded', function() {

    const guides = [
        {
            id: 1,
            title: "COMPLETE CASTORICE GUIDE! | Best Castorice Light Cones, Relics, Planars & Teams | Honkai Star Rail",
            game: "rpg",
            description: "Castorice will be coming in the 1st phase of version 3.2! She looks to be an awesome DPS, so here's everything to build and play her!",
            image: "media/guide1_castoriceguide.png",
            date: "2025-3-24",
            rating: 5.0,
            views: 2317102
        },
        {
            id: 2,
            title: "Weapon Tier List | Elden Ring NG+",
            game: "rpg",
            description: "Best weapons to use in Elden Ring NG+",
            image: "media/guide1_eldenringweapontierlist.png",
            date: "2019-10-10",
            rating: 4.5,
            views: 323200
        },
        {
            id: 3,
            title: "Minecraft Hardcore Mode Tips in 100 Days | Minecraft",
            game: "survival",
            description: "Minecraft hardcore mode tips in just 100 days",
            image: "media/guide3_minecrafthardcoremodetips.png",
            date: "2024-10-12",
            rating: 4.7,
            views: 531540
        },
        {
            id: 4,
            title: "Valorant Aiming Pro tips | Valorant",
            game: "fps",
            description: "Master aiming in Valorant with these pro tips",
            image: "media/guide2_valorantaimtips.png",
            date: "2023-10-15",
            rating: 5.0,
            views: 1612083
        },
        {
            id: 5,
            title: "ULTIMATE Soldier 0 Anby Guide! [Builds, W-Engines, Teams, Showcase, MORE] Zenless Zone Zero",
            game: "rpg",
            description: "Silver Soldier 0 Anby is an Attack S-Rank Agent in Zenless Zone Zero version 1.6. She's a great Aftershock focused DPS character.",
            image: "media/guide1_anbyguide.png",
            date: "2025-1-10",
            rating: 4.8,
            views: 437921
        },
        {
            id: 6,
            title: "New Kiana battlesuit: Ba-dum Fiery Wishing Star Full Guide | Honkai Impact 3rd",
            game: "rpg",
            description: "New S-rank SD-type Fire DMG dealer Ba-Dum! Gameplay guide.",
            image: "media/guide1_kianaguide.png",
            date: "2024-10-10",
            rating: 4.2,
            views: 339746
        },
        {
            id: 7,
            title: "How to use Changli | Wuthering Waves",
            game: "rpg",
            description: "This is a complete 2.1 updated Changli build guide with everything you need to know.",
            image: "media/Tguide_changliquickswapguide.png",
            date: "2024-10-7",
            rating: 4.1,
            views: 19746
        },
        {
            id: 8,
            title: "The Complete Guide To Lucia Pyroath | Punishing Gray Raven",
            game: "rpg",
            description: "LIV LOVE LAUGH LUCIA. Today we are covering S Lucia Pyroath 's skills, passives, ascensions, playstyle and gameplay tips, weapons, builds, team synergies, cub/pet and overall pull + build recommendations. I'll also cover slash team and rotation, balter leap, and patch updates!",
            image: "media/guide1_pyroathguide.png",
            date: "2025-4-5",
            rating: 4.1,
            views: 88123
        },
        // add guides here
    ];

    const container = document.querySelector('.all-guides-container');
    const gameFilter = document.getElementById('gameFilter');
    const sortFilter = document.getElementById('sortFilter');

    renderGuides(guides);

    // add event listeners for filters
    gameFilter.addEventListener('change', filterGuides);
    sortFilter.addEventListener('change', filterGuides);

    function filterGuides() {
        const gameValue = gameFilter.value;
        const sortValue = sortFilter.value;
        
        let filteredGuides = [...guides];
        
        // filter by game
        if (gameValue !== 'all') {
            filteredGuides = filteredGuides.filter(guide => guide.game === gameValue);
        }
        
        // sort guides
        switch(sortValue) {
            case 'newest':
                filteredGuides.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'popular':
                filteredGuides.sort((a, b) => b.views - a.views);
                break;
            case 'rating':
                filteredGuides.sort((a, b) => b.rating - a.rating);
                break;
        }
        
        renderGuides(filteredGuides);
    }

    function renderGuides(guidesToRender) {
        container.innerHTML = '';
        
        if (guidesToRender.length === 0) {
            container.innerHTML = '<p class="no-guides">No guides found matching your criteria.</p>';
            return;
        }
        
        guidesToRender.forEach(guide => {
            const guideCard = document.createElement('div');
            guideCard.className = 'guide-card';
            guideCard.innerHTML = `
                <div class="guide-image" style="background-image: url('${guide.image}')"></div>
                <div class="guide-content">
                    <h3 class="guide-title">${guide.title}</h3>
                    <p class="guide-desc">${guide.description}</p>
                    <div class="guide-meta">
                        <span class="guide-rating">★ ${guide.rating}</span>
                        <span class="guide-views">👁 ${guide.views.toLocaleString()} views</span>
                    </div>
                    <a href="#" class="read-more">Read Guide →</a>
                </div>
            `;
            container.appendChild(guideCard);
        });
    }
});