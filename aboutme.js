// about.js - Simpler version that's closer to the original design
// Profile and Bio Data
const profile = {
    image: "image/profile.jpg",
    alt: "Anjila Subedi",
    bio: "A passionate AI Developer and creative artist based in Nepal, currently pursuing B.Tech at Kathmandu University. I blend technical expertise with artistic vision to create innovative solutions."
  };
  
  // Skills Data
  const skills = [
    {
      id: 1,
      title: "AI/ML",
      icon: "fas fa-brain",
      description: "Python, TensorFlow, PyTorch"
    },
    {
      id: 2,
      title: "Full Stack",
      icon: "fas fa-code",
      description: "React, Next.js, FastAPI, Django"
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: "fas fa-paint-brush",
      description: "Figma"
    },
    {
      id: 4,
      title: "Digital Art",
      icon: "fas fa-pencil-alt",
      description: "Photoshop, Clipstudio Paint, Sketchbook"
    }
  ];
  
  // Rendering function - Executes when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Check for about container
    const aboutContainer = document.getElementById('about-container');
    
    try {
      if (aboutContainer) {
        // Create a complete about section that matches the original design
        aboutContainer.innerHTML = `
          <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <!-- Left Column - Profile Image -->
            <div class="w-full md:w-[45%] mb-8 md:mb-0">
              <div class="relative group">
                <div class="relative">
                  <img src="${profile.image}" alt="${profile.alt}" 
                       class="w-4/5 md:w-3/4 rounded-lg mx-auto shadow-2xl transform hover:scale-105 transition duration-500">
                </div>
              </div>
            </div>
            
            <!-- Right Column - Bio and Skills -->
            <div class="w-full md:w-[45%] text-white space-y-8">
              <!-- Bio Section -->
              <div class="bg-[#252525] rounded-lg p-6 transform hover:scale-105 transition duration-300">
                <h3 class="text-2xl font-poppins font-bold text-[#E06031] mb-4 flex items-center">
                  <i class="fas fa-user-circle mr-3"></i>Who am I?
                </h3>
                <p class="font-poppins font-medium leading-relaxed">
                  ${profile.bio}
                </p>
              </div>
              
              <!-- Skills Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${skills.map(skill => `
                  <div class="bg-[#252525] rounded-lg p-4 transform hover:scale-105 transition duration-300">
                    <i class="${skill.icon} text-[#E06031] text-2xl mb-2"></i>
                    <h4 class="font-poppins font-semibold text-lg tracking-mid-wide">${skill.title}</h4>
                    <p class="text-gray-400 text-sm mt-2">${skill.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
        
        console.log("About section rendered successfully!");
      } else {
        console.error("About container not found! Make sure the element with id='about-container' exists in the DOM.");
      }
    } catch (error) {
      console.error("Error rendering about section:", error);
    }
  });
  
  // Log a simple message to confirm the script has loaded
  console.log("about.js has loaded!");