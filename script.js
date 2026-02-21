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
    document.getElementById("output").innerHTML = `<p class="branding-text">${randomTagline}</p>`;
  }
  
  function generateColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("output").innerHTML = `<p style="color:${randomColor}; font-size:1.5rem; font-weight:bold;">Brand Color: ${randomColor}</p>`;
    renderLogo(randomColor, "Brand Logo");
  }
  
  function showDrawback() {
    const randomDrawback = drawbacks[Math.floor(Math.random() * drawbacks.length)];
    document.getElementById("output").innerHTML = `<p class="drawback">⚠️ Drawback: ${randomDrawback}</p>`;
  }
  
  function applyCustom() {
    const tagline = document.getElementById("customTagline").value || "Custom Brand";
    const color = document.getElementById("customColor").value;
    document.getElementById("output").innerHTML = `<p style="color:${color}; font-size:1.5rem; font-weight:bold;">${tagline}</p>`;
    renderLogo(color, tagline);
  }
  
  function renderLogo(color, text) {
    const logoPreview = document.getElementById("logoPreview");
    logoPreview.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="${color}" stroke="#fff" stroke-width="3"/>
        <text x="50%" y="55%" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial" dy=".3em">${text.substring(0,10)}</text>
      </svg>
      <p style="color:${color}; font-weight:bold;">${text}</p>
    `;
  }
  