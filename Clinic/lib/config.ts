// Single place to edit clinic details. Replace every placeholder below.
export const clinic = {
  name: "Velo Dental Cilinic",
  doctor: "Dr. Rupali Gunjal",
  qualification: "BDS(MUHS)",
  
  city: "Pune", state: "Maharastra",
  phone: "+91 9766669169",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919766669169", // digits only, with country code
  email: "velodentalclinic@gmail.com",
  address: "Shop A-2, Gera's Planet of Joy, Upper Kharadi Main Rd, opp. Podar International School, Ubale Nagar, Wagholi, Pune, Maharashtra 412207",
  mapsUrl: "https://maps.app.goo.gl/nUufSBN2GfU45LTXA", instagram: "https://www.instagram.com/velodentalclinic/",
  youtube: "https://www.youtube.com/", // replace with the real channel URL
  facebook: "#",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};
export type Doctor = {
  name: string; role: string; qualification: string; image: string;
  intro: string[]; training: { label: string; text: string }[]; expertise: string[]; philosophy: string;
};
export const doctors: Doctor[] = [
  {
    name: clinic.doctor, role: "Cosmetic Dentist & Endodontics Specialist", qualification: clinic.qualification, image: "/images/doctor.jpeg",
    intro: [
      "Dr. Rupali Gunjal is a gentle, compassionate dental practitioner dedicated to painless, patient-centered care. Known for her exceptionally gentle approach and warm chairside manner, she ensures that every patient, from anxious adults to young children, feels completely relaxed and supported throughout their dental journey.",
      "She specializes in precision root canals, aesthetic smile makeovers, and anxiety-free dental care for children and adults alike.",
    ],
    training: [
      { label: "BDS", text: "Mahatma Gandhi Vidyamandir's KBH Dental College and Hospital, Nashik." },
      { label: "Advanced Modern Endodontics", text: "Specialized training in modern rotary endodontics and microscopic root canal therapies at Thane, under the mentorship of Dr. Anish Naware." },
      { label: "Cosmetic & Aesthetic Dentistry", text: "Aesthetic dentistry certification in Pune: smile design, porcelain veneers, cosmetic restorations and tooth reshaping." },
      { label: "Pediatric & Preventive Dentistry", text: "Child-centered clinical training in Pune, focused on early intervention, preventive care and stress-free techniques for children." },
    ],
    expertise: ["Micro-endodontics & painless root canals", "Smile design & aesthetic makeovers", "Gentle pediatric care", "Preventive oral health"],
    philosophy: "Modern dentistry should be as comfortable as it is effective. By blending advanced clinical techniques with a genuinely gentle touch, Dr. Rupali strives to eliminate dental anxiety and build lasting trust with families.",
  },
  {
    name: "Dr. Aashish Dilip Patil", role: "Pediatric Orthodontist", qualification: "MDS, Pediatric Dentistry and Orthodontics & Dentofacial Orthopedics", image: "/images/doctor-2.jpeg",
    intro: [
      "Dr. Aashish Dilip Patil is the first pediatric orthodontist in India, with specializations in both pediatric dentistry and orthodontics & dentofacial orthopedics. He is passionate about treating children's teeth, jaw and breathing issues at an early age.",
      "He is well known for non-surgical, minimally invasive treatment of complex cases for both kids and adults, and offers advanced solutions such as customized MARPE and mandibular advancement devices for patients with sleep apnea and breathing difficulties.",
    ],
    training: [
      { label: "BDS", text: "Mahatma Gandhi Mission's Dental School, Mumbai." },
      { label: "Specialization", text: "Pediatric dentistry, and orthodontics & dentofacial orthopedics." },
    ],
    expertise: ["Early treatment of kids' teeth, jaws & breathing issues", "Braces & Invisalign aligners", "Customized MARPE", "Mandibular advancement devices for sleep apnea"],
    philosophy: "A firm believer in the non-extraction philosophy for braces and Invisalign aligner patients, preferring non-surgical, minimally invasive treatment wherever possible.",
  },
];
export const nav = [
  { href: "#home", label: "Home" }, { href: "#about", label: "About" }, { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" }, { href: "#testimonials", label: "Testimonials" }, { href: "#contact", label: "Contact" },
];
export const hours = [
  { days: "Daily", time: "Open 24 Hours" },
];
export const stats = [
  { value: 10, suffix: "+", label: "Years experience" }, { value: 5000, suffix: "+", label: "Patients treated" },
  { value: 10, suffix: "+", label: "Dental services" }, { value: 5, suffix: "★", label: "Patient rating" },
];
export const homeLink = () => waLink("Hello, I would like to book a home dental appointment.");
export const waLink = (msg = "Hello, I would like to book a dental appointment.") =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`;
export const extra = {
  reviewsUrl: "https://share.google/ue82mJlEQmrzLyrwI", 
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "", 
  mapsEmbed: process.env.NEXT_PUBLIC_MAPS_EMBED_URL ?? "", // only a Google Maps *embed* URL works in an iframe
  rating: "5.0", reviewCount: "[X]+", // Google rating badge: replace with your real numbers
  homeVisit: true, // set to false if the clinic does not offer home dental visits (hides the home-appointment button and card)
  practoUrl: "", // optional: paste your Practo profile link to show a "Book via Practo" banner
};
