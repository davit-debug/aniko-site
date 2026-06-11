/* ===========================================================
   ANIKO — Portfolio dataset v2 (shared by all variants + project.html)
   3 disciplines: Photography · Videography · Graphic Design.
   Each project: slug (→ project.html?id=slug), title, tag, year,
   color (aniko accent), img (cover), desc (detail-page copy).
   Stills are portrait 3:4 / 5:6 in portfolio-images/.

   VIDEOGRAPHY: `embed` holds a YouTube/Vimeo URL. It is EMPTY for now
   (Anna has no public reels yet) — project.html then shows the poster
   with a "video coming soon" state. Paste a real embed URL per item to
   go live, e.g. embed:"https://www.youtube.com/embed/XXXX" (use the
   /embed/ form for YouTube, or "https://player.vimeo.com/video/XXXX").
   `gallery` (optional array) adds extra stills to a project's detail page.
   =========================================================== */
window.ANIKO_PF = {
  photography: [
    { slug:"sunset-black-sea",   title:"Sunset, Black Sea",     tag:"Landscape",   year:"2024", color:"orange", img:"portfolio-images/en-07.jpg", desc:"A quiet evening on the Black Sea coast, shot entirely in natural light with no retouching. The series chases the last warm minutes before the colour drops out of the sky." },
    { slug:"portraits-in-place", title:"Portraits in Place",    tag:"Portrait",    year:"2024", color:"pink",   img:"portfolio-images/en-01.jpg", desc:"On-location portraiture made with available light. Each frame keeps the subject inside their own environment rather than a studio, so the surroundings tell half the story." },
    { slug:"catering-hospitality", title:"Catering & Hospitality", tag:"Event",   year:"2024", color:"cyan",   img:"portfolio-images/en-18.jpg", desc:"Dessert-table and service coverage for a premium hospitality event. Shot fast and discreetly to keep the evening feeling natural rather than staged." },
    { slug:"working-hands",      title:"Working Hands",         tag:"Documentary", year:"2024", color:"yellow", img:"portfolio-images/en-04.jpg", desc:"A close documentary look at craft and manual labour — the texture of hands, tools and material caught mid-task." },
    { slug:"children-companions",title:"Children & Companions", tag:"B&W",         year:"2024", color:"purple", img:"portfolio-images/en-05.jpg", desc:"Black-and-white candids of children and their companions. Monochrome strips away distraction and leaves only gesture and expression." },
    { slug:"autumn-light",       title:"Autumn Light",          tag:"Nature",      year:"2024", color:"orange", img:"portfolio-images/en-06.jpg", desc:"Golden-hour light filtered through turning leaves — a short seasonal study of warm colour and soft, low shadow." },
    { slug:"garden-small-wonder",title:"Garden & Small Wonder", tag:"Macro",       year:"2024", color:"green",  img:"portfolio-images/en-02.jpg", desc:"Macro frames of the small details most people walk straight past: petals, dew and the tiny structures hiding in a garden." },
    { slug:"wildlife-in-the-park",title:"Wildlife in the Park", tag:"Wildlife",    year:"2024", color:"green",  img:"portfolio-images/en-03.jpg", desc:"Patient observation of wildlife in the city's green spaces, waiting for the one unguarded moment worth keeping." },
    { slug:"self-portraits",     title:"Self Portraits",        tag:"B&W",         year:"2024", color:"pink",   img:"portfolio-images/en-08.jpg", desc:"A personal black-and-white study of self — an exercise in light, composition and a little honesty in front of the lens." },
    { slug:"old-room-textures",  title:"Old Room Textures",     tag:"Interior",    year:"2024", color:"coral",  img:"portfolio-images/en-09.jpg", desc:"Patina, fabric and afternoon shadow in a lived-in room — a study about texture more than subject." },
    { slug:"vintage-interiors",  title:"Vintage Interiors",     tag:"Interior",    year:"2024", color:"yellow", img:"portfolio-images/en-10.jpg", desc:"Lived-in interiors with a story baked into every surface, shot to feel warm and genuinely inhabited." },
    { slug:"countryside-stay",   title:"Countryside Stay",      tag:"Travel",      year:"2024", color:"orange", img:"portfolio-images/en-11.jpg", desc:"Slow mornings outside the city. A travel series that is as much about pace as it is about place." },
    { slug:"horses-mountains",   title:"Horses, Mountains",     tag:"Travel",      year:"2024", color:"cyan",   img:"portfolio-images/en-12.jpg", desc:"Highland light, open air and horses, made on a trip up into the mountains." },
    { slug:"plates-craft",       title:"Plates & Craft",        tag:"Food",        year:"2024", color:"green",  img:"portfolio-images/en-13.jpg", desc:"Food styling and plating detail for a hospitality client, lit to keep the food appetising and real instead of glossy." },
    { slug:"dining-atmosphere",  title:"Dining Atmosphere",     tag:"Lifestyle",   year:"2024", color:"cyan",   img:"portfolio-images/en-14.jpg", desc:"The mood of a full table — people, light and the in-between moments of a shared meal." },
    { slug:"seasonal-stillness", title:"Seasonal Stillness",    tag:"Still Life",  year:"2024", color:"pink",   img:"portfolio-images/en-15.jpg", desc:"Composed quiet in a seasonal palette. A still-life series built on restraint." },
    { slug:"still-life-moma",    title:"Still Life · MoMA",     tag:"Still Life",  year:"2024", color:"blue",   img:"portfolio-images/en-17.jpg", desc:"A gallery-inspired arrangement, composed and lit like a printed plate." },
    { slug:"daylight-moment",    title:"Daylight Moment",       tag:"Lifestyle",   year:"2024", color:"yellow", img:"portfolio-images/ka-03.jpg", desc:"Caught in passing daylight — an unposed lifestyle frame that happened in a second." },
    { slug:"gallery-moment",     title:"Gallery Moment",        tag:"Documentary", year:"2024", color:"purple", img:"portfolio-images/ka-12.jpg", desc:"People and art share the same frame inside a gallery space — a quiet documentary observation." }
  ],

  videography: [
    { slug:"campa-brand-film", title:"Campa — Brand Film", tag:"Brand Film", year:"2025", color:"green",  poster:"portfolio-images/ka-07.jpg", duration:"1:24", embed:"", desc:"Hero film for the Campa juice line — concept, shoot and edit. Built to introduce the brand's personality in under ninety seconds." },
    { slug:"jazz-night-recap", title:"Jazz Night — Event Recap", tag:"Event Recap", year:"2024", color:"orange", poster:"portfolio-images/ka-10.jpg", duration:"2:10", embed:"", desc:"An after-movie cut from a live jazz evening, paced to the music and built for social sharing the next morning." },
    { slug:"behind-the-lens", title:"Behind the Lens", tag:"BTS Reel", year:"2024", color:"yellow", poster:"portfolio-images/en-04.jpg", duration:"0:48", embed:"", desc:"A behind-the-scenes reel from a marketing shoot — the setup, the crew and the small chaos that never makes the final frame." },
    { slug:"tbilisi-in-motion", title:"Tbilisi in Motion", tag:"City Mood", year:"2024", color:"cyan", poster:"portfolio-images/ka-12.jpg", duration:"1:05", embed:"", desc:"A moving portrait of the city at golden hour — a mood piece more than a story." },
    { slug:"juice-line-teaser", title:"Juice Line — Product Teaser", tag:"Product Spot", year:"2025", color:"pink", poster:"portfolio-images/ka-11.jpg", duration:"0:30", embed:"", desc:"A fast-cut teaser optimised for Reels and Stories, designed to land the product in the first two seconds." },
    { slug:"catering-story", title:"Catering Story", tag:"Social Cut", year:"2024", color:"blue", poster:"portfolio-images/en-18.jpg", duration:"1:38", embed:"", desc:"A vertical social edit for a hospitality client, cut to feel like a guest's own evening." }
  ],

  graphic: [
    { slug:"be-your-own-muse",  title:"Be Your Own Muse",    tag:"Creative Direction", year:"2024", color:"green",  img:"portfolio-images/ka-08.jpg", desc:"A photo composite paired with a custom typography system for a self-styled creative campaign — art direction, image and type in one." },
    { slug:"history-of-jazz",   title:"History of Jazz",     tag:"Event Poster",       year:"2023", color:"yellow", img:"portfolio-images/en-16.jpg", desc:"Poster design plus portrait retouch for a Birdland NY jazz event, balancing a strong headline with a clean photographic focal point." },
    { slug:"new-york-romance",  title:"New York Romance",    tag:"Collage",            year:"2024", color:"pink",   img:"portfolio-images/ka-02.jpg", desc:"A layered editorial collage where vintage photography meets the city skyline — built up from scanned textures and cut paper." },
    { slug:"georgia-europe",    title:"Georgia, Europe!",    tag:"Illustration",       year:"2024", color:"blue",   img:"portfolio-images/ka-14.jpg", desc:"A civic-participation illustration made for a pro-EU voting campaign, designed to feel hopeful and shareable." },
    { slug:"ny-skyline-collage",title:"NY Skyline Collage",  tag:"Collage",            year:"2024", color:"pink",   img:"portfolio-images/ka-01.jpg", desc:"A skyline montage assembled with cut-paper texture and a tight, warm colour story." },
    { slug:"color-study",       title:"Color Study",         tag:"Poster",             year:"2024", color:"coral",  img:"portfolio-images/ka-04.jpg", desc:"An exercise in palette and contrast — a poster made purely to test how far two colours can carry a composition." },
    { slug:"brand-moodboard",   title:"Brand Moodboard",     tag:"Creative Direction", year:"2024", color:"cyan",   img:"portfolio-images/ka-06.jpg", desc:"A direction board that sets tone, palette and texture for a brand before a single asset is produced." },
    { slug:"campaign-key-visual",title:"Campaign Key Visual",tag:"Key Visual",         year:"2024", color:"green",  img:"portfolio-images/ka-07.jpg", desc:"The hero artwork that anchors a full campaign — the one frame every other asset is cut down from." },
    { slug:"editorial-layout",  title:"Editorial Layout",    tag:"Layout",             year:"2024", color:"yellow", img:"portfolio-images/ka-09.jpg", desc:"A type-led editorial spread, built on a strict grid so the imagery can breathe." },
    { slug:"jazz-night-kv",     title:"Jazz Night",          tag:"Key Visual",         year:"2024", color:"orange", img:"portfolio-images/ka-10.jpg", desc:"Event identity and key visual for a jazz night, carried across poster, social and signage." },
    { slug:"brand-visual",      title:"Brand Visual",        tag:"Branding",           year:"2024", color:"purple", img:"portfolio-images/ka-11.jpg", desc:"A visual-identity application showing how the brand's elements hold together on a real layout." },
    { slug:"lifestyle-composite",title:"Lifestyle Composite",tag:"Creative Direction", year:"2024", color:"green",  img:"portfolio-images/ka-13.jpg", desc:"A composited lifestyle scene built for social — direction, retouch and assembly into one believable frame." },
    { slug:"campaign-closer",   title:"Campaign Closer",     tag:"Key Visual",         year:"2024", color:"pink",   img:"portfolio-images/ka-15.jpg", desc:"The closing frame of a campaign rollout, designed to tie the whole sequence together." }
  ]
};

/* Flat lookup helpers (used by project.html and variants) */
window.ANIKO_PF.all = function(){
  var d = window.ANIKO_PF, out = [];
  d.photography.forEach(function(p){ out.push(Object.assign({kind:"photo",  group:"Photography"},   p)); });
  d.videography.forEach(function(p){ out.push(Object.assign({kind:"video",  group:"Videography",   img:p.poster}, p)); });
  d.graphic.forEach(function(p){     out.push(Object.assign({kind:"graphic",group:"Graphic Design"},p)); });
  return out;
};
window.ANIKO_PF.find = function(slug){ return window.ANIKO_PF.all().find(function(p){ return p.slug===slug; }) || null; };
