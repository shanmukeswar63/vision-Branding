const taglines = [
    "Empowering brands with intelligent automation.",
    "Your vision, our automated precision.",
    "Smart branding for a digital future.",
    "Innovation meets identity.",
    "Automate. Create. Dominate."
  ];
  
  const colors = [
    "#ff6a00", "#ee0979", "#00c6ff", "#7b2ff7", "#00ff88"
  ];
  
  const drawbacks = [
    "Automation may lack human creativity and emotional depth.",
    "Generic outputs can make brands feel less unique.",
    "Cultural nuances are often missed by automated systems.",
    "Over-reliance on automation reduces personal storytelling.",
    "AI branding may struggle with ethical or sensitive contexts."
  ];
  
  function generateTagline() {
    const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    const output = document.getElementById("output");
    output.innerHTML = `<p class="branding-text">${randomTagline}</p>`;
  }
  
  function generateColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const output = document.getElementById("output");
    output.innerHTML = `<p style="color:${randomColor}; font-size:1.5rem; font-weight:bold;">Brand Color: ${randomColor}</p>`;
  }
  
  function showDrawback() {
    const randomDrawback = drawbacks[Math.floor(Math.random() * drawbacks.length)];
    const output = document.getElementById("output");
    output.innerHTML = `<p class="drawback">⚠️ Drawback: ${randomDrawback}</p>`;
  }
  
  function applyCustom() {
    const tagline = document.getElementById("customTagline").value;
    const color = document.getElementById("customColor").value;
    const output = document.getElementById("output");
  
    if (tagline.trim() !== "") {
      output.innerHTML = `<p style="color:${color}; font-size:1.5rem; font-weight:bold;">${tagline}</p>`;
    } else {
      output.innerHTML = `<p style="color:${color}; font-size:1.5rem; font-weight:bold;">Custom Brand Color: ${color}</p>`;
    }
  }
  