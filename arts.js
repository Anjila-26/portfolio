// arts.js - Contains both art data and rendering logic
// Art Data
const arts = [
    {
      id: 1,
      image: "image/art/art3.jpg",
      alt: "Hand Drawn Art",
      category: "HandDrawn",
      size: "row-span-2",
      type: "tall"
    },
    {
      id: 2,
      image: "image/art/art-5.jpg",
      alt: "Illustration Art",
      category: "ILLUSTRATION",
      size: "row-span-2",
      type: "tall"
    },
    {
      id: 3,
      image: "image/art/ui.png",
      alt: "UI Design",
      category: "UI/UX DESIGN",
      size: "col-span-2",
      type: "wide"
    },
    {
      id: 4,
      image: "image/art/art2.jpg",
      alt: "Digital Art 1",
      category: "DIGITAL ART",
      size: "aspect-square",
      type: "square"
    },
    {
      id: 5,
      image: "image/art/art1.jpg",
      alt: "Digital Art 2",
      category: "DIGITAL ART",
      size: "aspect-square",
      type: "square"
    }
    // You can add more art items as needed
  ];
  
  // Rendering function - Executes when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const artContainer = document.getElementById('art-container');
    
    // If the container exists, render all arts
    if (artContainer) {
      try {
        // Generate HTML for each art piece
        const artsHTML = arts.map(art => {
          // Return complete art item HTML with the appropriate sizing class
          return `
          <div class="group relative overflow-hidden rounded-lg ${art.size} cursor-pointer">
            <img src="${art.image}" alt="${art.alt}" class="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end">
              <span class="text-[#E06031] font-yapari text-sm tracking-wider">${art.category}</span>
            </div>
          </div>
          `;
        }).join('');
        
        // Insert all arts into the container
        artContainer.innerHTML = artsHTML;
        console.log("Arts rendered successfully!");
      } catch (error) {
        console.error("Error rendering arts:", error);
      }
    } else {
      console.error("Art container not found! Make sure the element with id='art-container' exists in the DOM.");
    }
  });
  
  // Log a simple message to confirm the script has loaded
  console.log("arts.js has loaded!");