import { Fighter } from '../types';

export const fighterData: Fighter = {
  name: "TAM LAPANG",
  nickname: "Thunder",
  tagline: "Passionate Fighter, Dedicated Athlete",
  disciplines: ["MMA", "Boxing", "Muay Thai"],
  bio: "I discovered my love for combat sports at age 12, and it's been an incredible journey ever since. What started as self-defense has grown into my passion and career. I believe in discipline, hard work, and continuous learning. Every training session and fight has shaped me into the fighter I am today. When I'm not competing, I enjoy mentoring young athletes and giving back to my community.",
  stats: {
    height: "5'11\"",
    weight: "170 lbs",
    reach: "72\"",
    stance: "Orthodox",
    experience: 8,
    homeGym: "Thunder MMA Academy",
    record: {
      wins: 15,
      losses: 3,
      draws: 0
    }
  },
  achievements: [
    {
      id: "1",
      title: "Regional MMA Championship",
      description: "Won the Regional MMA Championship in the Lightweight division",
      date: "2023",
      type: "championship"
    },
    {
      id: "2",
      title: "Golden Gloves Boxing Winner",
      description: "First place in the prestigious Golden Gloves Boxing Tournament",
      date: "2022",
      type: "tournament"
    },
    {
      id: "3",
      title: "Muay Thai National Tournament Finalist",
      description: "Reached the finals of the National Muay Thai Championship",
      date: "2021",
      type: "tournament"
    },
    {
      id: "4",
      title: "Fighter of the Year",
      description: "Awarded Fighter of the Year by the Regional Combat Sports Association",
      date: "2022",
      type: "award"
    },
    {
      id: "5",
      title: "Most Knockouts in a Season",
      description: "Set a new record for most knockouts in a single fighting season",
      date: "2023",
      type: "record"
    }
  ],
  socialMedia: {
    instagram: "@alexthunder_rodriguez",
    youtube: "@ThunderFights",
    twitter: "@AlexThunderRod",
    facebook: "AlexThunderRodriguez",
    followers: {
      instagram: 125000,
      youtube: 89000,
      twitter: 67000,
      facebook: 45000
    }
  },
  contact: {
    email: "alex@thunderfights.com",
    phone: "+1 (555) 123-4567",
    gym: "Thunder MMA Academy",
    location: "Brooklyn, NY"
  }
}; 