// stories.js - Master story list
// Only edit this file when adding new stories

const ALL_STORIES = [
    { title: 'Aria Caesura', file: 'story-aria-caesura.html' },
    { title: 'Avant-Garde Composition', file: 'story-avant-garde-composition.html' },
    { title: 'Bluish-Green Truths', file: 'story-bluish-green-truths.html' },
    { title: 'Coronation', file: 'story-coronation.html' },
    { title: 'Falling Stars', file: 'story-falling-stars.html' },
    { title: 'Grand Convergence', file: 'story-grand-convergence.html' },
    { title: 'Investiture', file: 'story-investiture.html' },
    { title: 'New Hearts', file: 'story-new-hearts.html' },
    { title: 'Regicide', file: 'story-regicide.html' },
    { title: 'Symphonic Overture', file: 'story-symphonic-overture.html' },
    { title: 'Attacca Subito', file: 'story-attacca-subito.html' }
];

// Populate Other Stories section
function populateOtherStories(currentStory, nextStory) {
    // Filter out current and next story
    const availableStories = ALL_STORIES.filter(story => 
        story.file !== currentStory && story.file !== nextStory
    );

    // Shuffle and pick 3 random stories
    const shuffled = [...availableStories].sort(() => Math.random() - 0.5);
    const randomStories = shuffled.slice(0, 3);

    // Populate the grid
    const grid = document.querySelector('.related-grid');
    if (grid) {
        grid.innerHTML = randomStories.map(story => `
            <a href="${story.file}" class="related-card">
                <div class="related-card-title">${story.title}</div>
            </a>
        `).join('');
    }
}
