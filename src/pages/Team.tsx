import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const team = [
  { name: 'Akshay Kumar', role: 'CEO', bio: 'Visionary leader with 10+ years in IT.', img: '', details: 'Akshay has led Suprix Solution to new heights with a focus on innovation, client success, and operational excellence.' },
  { name: 'Priya Sharma', role: 'Lead Developer', bio: 'Expert in scalable web and mobile apps.', img: '', details: 'Priya architects and delivers robust, scalable solutions for clients across industries.' },
  { name: 'Rahul Verma', role: 'UI/UX Designer', bio: 'Passionate about user-centered design.', img: '', details: 'Rahul creates intuitive, engaging interfaces that delight users and drive business results.' },
];

export default function Team() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="team-main">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Meet Our Team
      </motion.h1>
      <div className="team-list">
        {team.map((member, idx) => (
          <motion.div
            className={`team-detail-card${openIdx === idx ? ' open' : ''}`}
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            style={{cursor: 'pointer'}}
          >
            <div className="team-img-lg">👤</div>
            <h2>{member.name}</h2>
            <span className="team-role-lg">{member.role}</span>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{overflow: 'hidden'}}
                >
                  <p style={{marginTop: 12, color: '#333'}}>{member.bio}</p>
                  <div style={{marginTop: 8, color: '#666'}}>{member.details}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </main>
  );
} 