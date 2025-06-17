
export const chatbotKnowledge = {
  venues: [
    {
      name: "Kigali Convention Centre",
      capacity: "2,600 delegates",
      features: ["State-of-the-art AV equipment", "Simultaneous interpretation", "VIP lounges", "Exhibition halls"],
      contact: "+250 788 123 456",
      email: "info@kcc.rw",
      location: "Kimihurura, Kigali"
    },
    {
      name: "Radisson Blu Hotel & Convention Centre",
      capacity: "1,200 delegates",
      features: ["Modern meeting rooms", "Business center", "Catering services", "Accommodation"],
      contact: "+250 788 100 000",
      email: "events@radissonblu.rw",
      location: "Gasabo, Kigali"
    },
    {
      name: "Intare Conference Arena",
      capacity: "5,000 delegates",
      features: ["Large exhibition space", "Concert facilities", "Sports events", "Cultural shows"],
      contact: "+250 788 200 000",
      email: "bookings@intarearena.rw",
      location: "Rusororo, Gasabo"
    }
  ],
  visaInfo: {
    onArrival: "Available for most nationalities",
    eVisa: "Apply online 2-3 business days before travel",
    requirements: ["Valid passport", "Return ticket", "Proof of accommodation"],
    cost: "$30 USD for most nationalities",
    validity: "30 days single entry"
  },
  transportation: {
    airport: {
      distance: "10km from city center",
      options: ["Taxi services", "Hotel shuttles", "Car rental", "Motorcycle taxis"]
    },
    city: {
      options: ["Bus system", "Taxis", "Motorcycle taxis", "Car rental"],
      apps: ["Move App", "SafeMotos", "Yego Cab"]
    }
  },
  accommodation: [
    {
      category: "Luxury",
      hotels: ["Kigali Marriott Hotel", "Radisson Blu Hotel", "Heaven Restaurant & Boutique Hotel"]
    },
    {
      category: "Business",
      hotels: ["Serena Hotel", "The Retreat", "Hotel des Mille Collines"]
    },
    {
      category: "Budget",
      hotels: ["Step Town Motel", "Khana Khazana Guest House", "Discover Rwanda Youth Hostel"]
    }
  ],
  weather: {
    drySeasons: ["June-September", "December-February"],
    rainySeasons: ["March-May", "October-November"],
    temperature: "18-25°C year-round",
    altitude: "1,500m above sea level"
  },
  attractions: [
    {
      name: "Volcanoes National Park",
      activity: "Mountain gorilla trekking",
      distance: "2 hours from Kigali"
    },
    {
      name: "Lake Kivu",
      activity: "Water sports and relaxation",
      distance: "3 hours from Kigali"
    },
    {
      name: "Nyungwe Forest",
      activity: "Canopy walk and primates",
      distance: "4 hours from Kigali"
    },
    {
      name: "Kigali Genocide Memorial",
      activity: "Historical education",
      distance: "City center"
    }
  ],
  services: {
    eventPlanning: "Full-service event management",
    catering: "International and local cuisine options",
    interpretation: "Available in multiple languages",
    visaAssistance: "Dedicated visa support team",
    transportation: "Airport transfers and local transport"
  }
};

export const getResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // Venue-related queries
  if (lowerQuery.includes('venue') || lowerQuery.includes('capacity') || lowerQuery.includes('meeting')) {
    const venues = chatbotKnowledge.venues;
    if (lowerQuery.includes('500') || lowerQuery.includes('large')) {
      return `For large events (500+ delegates), I recommend:\n\n1. **Kigali Convention Centre** - ${venues[0].capacity}\n2. **Intare Conference Arena** - ${venues[2].capacity}\n3. **Radisson Blu Hotel** - ${venues[1].capacity}\n\nAll venues feature modern AV equipment and catering services. Would you like contact details for any of these?`;
    }
    return `Rwanda offers excellent venues:\n\n${venues.map(v => `**${v.name}** (${v.capacity})\n📍 ${v.location}\n📞 ${v.contact}`).join('\n\n')}`;
  }
  
  // Visa-related queries
  if (lowerQuery.includes('visa')) {
    const visa = chatbotKnowledge.visaInfo;
    return `**Rwanda Visa Information:**\n\n🎫 **On Arrival:** ${visa.onArrival}\n💻 **E-Visa:** ${visa.eVisa}\n💰 **Cost:** ${visa.cost}\n⏱️ **Validity:** ${visa.validity}\n\n**Requirements:**\n${visa.requirements.map(r => `• ${r}`).join('\n')}\n\nNeed help with visa application? I can connect you with our visa assistance team!`;
  }
  
  // Accommodation queries
  if (lowerQuery.includes('hotel') || lowerQuery.includes('accommodation') || lowerQuery.includes('stay')) {
    const hotels = chatbotKnowledge.accommodation;
    return `**Kigali Accommodation Options:**\n\n${hotels.map(cat => `**${cat.category} Hotels:**\n${cat.hotels.map(h => `• ${h}`).join('\n')}`).join('\n\n')}\n\nMost venues have partnerships with nearby hotels for group bookings. Would you like me to help arrange accommodation?`;
  }
  
  // Transportation queries
  if (lowerQuery.includes('airport') || lowerQuery.includes('transport') || lowerQuery.includes('transfer')) {
    const transport = chatbotKnowledge.transportation;
    return `**Transportation in Rwanda:**\n\n🛬 **From Airport:** ${transport.airport.distance}\n**Options:** ${transport.airport.options.join(', ')}\n\n🚗 **City Transport:**\n${transport.city.options.join(', ')}\n\n📱 **Apps:** ${transport.city.apps.join(', ')}\n\nWe can arrange airport transfers for your group. Interested?`;
  }
  
  // Weather/timing queries
  if (lowerQuery.includes('weather') || lowerQuery.includes('month') || lowerQuery.includes('time') || lowerQuery.includes('season')) {
    const weather = chatbotKnowledge.weather;
    return `**Best Time to Visit Rwanda:**\n\n☀️ **Dry Seasons (Ideal for events):**\n• ${weather.drySeasons.join('\n• ')}\n\n🌧️ **Rainy Seasons:**\n• ${weather.rainySeasons.join('\n• ')}\n\n🌡️ **Temperature:** ${weather.temperature}\n🏔️ **Altitude:** ${weather.altitude}\n\nRwanda has a pleasant climate year-round, perfect for conferences!`;
  }
  
  // Attractions queries
  if (lowerQuery.includes('attraction') || lowerQuery.includes('tourism') || lowerQuery.includes('activity') || lowerQuery.includes('gorilla')) {
    const attractions = chatbotKnowledge.attractions;
    return `**Top Attractions in Rwanda:**\n\n${attractions.map(a => `🌟 **${a.name}**\n${a.activity} (${a.distance})`).join('\n\n')}\n\nPerfect for extending business trips! Would you like help planning pre/post-event tours?`;
  }
  
  // Catering queries
  if (lowerQuery.includes('catering') || lowerQuery.includes('food') || lowerQuery.includes('dining')) {
    return `**Catering Services:**\n\n🍽️ Our partner venues offer:\n• International cuisine\n• Local Rwandan specialties\n• Dietary accommodations (halal, kosher, vegetarian, vegan)\n• Coffee break packages\n• Gala dinner arrangements\n\nWe can arrange tastings and custom menus. What's your preference?`;
  }
  
  // Services queries
  if (lowerQuery.includes('service') || lowerQuery.includes('planning') || lowerQuery.includes('help')) {
    const services = chatbotKnowledge.services;
    return `**Our Services:**\n\n${Object.entries(services).map(([key, value]) => `• **${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:** ${value}`).join('\n')}\n\nHow can we assist with your event planning?`;
  }
  
  // Default response
  return "Thank you for your question! I'm here to help with information about:\n\n🏢 **Venues & Capacity**\n🎫 **Visa Requirements**\n🏨 **Accommodation**\n🚗 **Transportation**\n🌤️ **Weather & Timing**\n🎯 **Attractions & Activities**\n🍽️ **Catering Services**\n📋 **Event Planning**\n\nWhat would you like to know more about? For specific requirements, I can connect you with our expert team.";
};
