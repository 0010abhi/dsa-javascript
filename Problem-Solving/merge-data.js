const sessions = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];


// export default function mergeData(sessions) {
//   const merged = sessions.reduce((acc, { user, duration, equipment }) => {
//     if (!acc[user]) {
//       acc[user] = { user, duration, equipment: [...equipment] };
//     } else {
//       acc[user].duration += duration;
//       acc[user].equipment = [...new Set([...acc[user].equipment, ...equipment])];
//     }
//     return acc;
//   }, {});

//   return Object.values(merged);
// }

export default function mergeData(sessions) {
  const userMap = new Map();

  for (const session of sessions) {
    const userId = session.user;

    if (!userMap.has(userId)) {
      // Store a copy of the object so we don't mutate the original input
      userMap.set(userId, { 
        ...session, 
        equipment: [...session.equipment] 
      });
    } else {
      const existing = userMap.get(userId);
      
      // 1. Add the durations
      existing.duration += session.duration;
      
      // 2. Merge equipment lists and remove duplicates
      // We combine both arrays and pass them into a Set
      const combined = [...existing.equipment, ...session.equipment].sort();
      console.log('>>> combined', userId, combined);
      existing.equipment = Array.from(new Set(combined));
    }
  }

  // Convert the Map values back into an array for the final output
  return Array.from(userMap.values());
}

console.log(mergeData(sessions));