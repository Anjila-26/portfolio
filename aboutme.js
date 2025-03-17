// about.js - Visually interesting version without conventional boxes
// Profile and Bio Data
const profile = {
    bio: "AI/ML Intern and Designer from Nepal, currently pursuing a B.Tech in AI  degree at Kathmandu University. I specialize in building intelligent systems, blending machine learning with creative problem-solving. With experience in full-stack development and UI/UX design, I focus on creating user-friendly, scalable, and efficient applications that bridge technology and creativity."
  };
  // Expertise Data
  const expertise = [
    {
      id: 1,
      title: "Machine Learning / Artificial",
      icon: "fa fa-robot",
      description: "Specializing in Large Language Models (LLMs) for conversational AI, prompt engineering, and fine-tuning foundation models using Python, TensorFlow, and PyTorch to create intelligent, context-aware applications."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      icon: "fas fa-laptop-code",
      description: "Building responsive web applications with modern frameworks including React, Next.js, FastAPI, and Django, with a focus on scalable architecture and clean code."
    },
    {
      id: 3,
      title: "UI/UX Designer",
      icon: "fa fa-desktop",
      description: "Creating intuitive user experiences and interfaces with a user-centered design approach, wireframing, prototyping, and implementing designs using Figma."
    },
    {
      id: 4,
      title: "Graphic Designer",
      icon: "fa-solid fa-tablet-screen-button",
      description: "Developing visual concepts and digital illustrations with industry-standard tools including Adobe Photoshop, Clipstudio Paint, and Sketchbook Pro."
    }
  ];
  
  // Rendering function - Executes when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Check for about container
    const aboutContainer = document.getElementById('about-container');
    
    try {
      if (aboutContainer) {
        // Create a visually interesting layout with flowing elements
        aboutContainer.innerHTML = `
          <div class="text-white">
            <!-- Bio Section with subtle gradient background -->
            <div class="relative py-6 mb-5">
              <div class="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent opacity-40 rounded-l-lg"></div>
              <p class="font-poppins font-medium leading-relaxed text-sm relative z-10 pl-4 border-l-2 border-[#E06031]">
                ${profile.bio}
              </p>
            </div>
            
            <!-- Expertise Section with connected elements -->
            <div class="">
              <h3 class="text-2xl font-poppins text-[#E06031] mb-12 relative">
                Areas Of Expertise
                <span class="absolute -bottom-4 left-0 w-24 h-px bg-gradient-to-r from-[#E06031] to-transparent"></span>
              </h3>
              
              <div class="flex flex-wrap">
                ${expertise.map((item, index) => `
                  <div class="relative group w-full md:w-1/2 lg:w-1/4 mb-10 pr-6 justify-between">
                    <!-- Icon with hover effect -->
                    <div class="mb-4 transform transition-all duration-300 group-hover:translate-y-[-5px]">
                      <i class="${item.icon} text-[#E06031] text-4xl"></i>
                      <div class="h-px w-12 mt-3 transform origin-left transition-all duration-300 group-hover:w-20"></div>
                    </div>
                    
                    <!-- Title -->
                    <h4 class="font-poppins font-semibold text-lg mb-3 transition-all duration-300 group-hover:text-[#E06031]">${item.title}</h4>
                    
                    <!-- Description -->
                    <p class="text-gray-300 text-sm leading-relaxed pr-4">${item.description}</p>
                    
                    <!-- Connecting element (except for last item) -->
                    ${index < expertise.length - 1 ? `
                      <div class="hidden lg:block absolute top-0 right-3 h-full w-px bg-gradient-to-b from-transparent via-[#333333] to-transparent opacity-50"></div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
        
        console.log("About section rendered successfully with visually interesting elements!");
      } else {
        console.error("About container not found! Make sure the element with id='about-container' exists in the DOM.");
      }
    } catch (error) {
      console.error("Error rendering about section:", error);
    }
  });
  
  // Log a simple message to confirm the script has loaded
  console.log("about.js has loaded with visually interesting elements!");