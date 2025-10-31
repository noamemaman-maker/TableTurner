// ----------------------
// BASIC TABLE MANAGEMENT
// ----------------------

const tables = [
    { id: 5, size: 4, status: "available", seatedParty: null },
    { id: 6, size: 4, status: "available", seatedParty: null },
    { id: 7, size: 6, status: "available", seatedParty: null },
  ];
  
  const queue = [
    { name: "Ava R.", size: 2 },
    { name: "Noan", size: 2 },
  ];
  
  // Policy: no oversize seating (don’t seat 2 at a 4-top)
  const policy = { allowOversize: false, maxOversizeSeats: 0 };
  
  function seatNext() {
    if (queue.length === 0) {
      console.log("No one in queue.");
      return;
    }
  
    const nextParty = queue[0];
    const suitable = tables
      .filter(t => t.status === "available" && t.size >= nextParty.size)
      .sort((a, b) => a.size - b.size);
  
    if (suitable.length === 0) {
      console.log(`No suitable table available for party of ${nextParty.size}.`);
      return;
    }
  
    const best = suitable[0];
    const oversize = best.size - nextParty.size;
  
    if (!policy.allowOversize && oversize > 0) {
      console.log(`Table ${best.id} seats ${best.size} — oversize seating not allowed.`);
      return;
    }
  
    best.status = "seated";
    best.seatedParty = {
      name: nextParty.name,
      size: nextParty.size,
      seatedAt: Date.now(),
    };
    queue.shift(); // remove from queue
  
    console.log(`Seated ${best.seatedParty.name} (party ${best.seatedParty.size}) at Table ${best.id}.`);
  }
  
  // ----------------------
  // TIMER FIX (real-time)
  // ----------------------
  
  function updateTimers() {
    const now = Date.now();
    tables.forEach(t => {
      if (t.status === "seated" && t.seatedParty) {
        const elapsedMinutes = Math.floor((now - t.seatedParty.seatedAt) / 60000);
        const remaining = Math.max(0, 60 - elapsedMinutes);
        console.log(`Table ${t.id}: ${remaining} min left`);
      }
    });
  }
  
  // Call this once a minute in real time (no drift)
  setInterval(updateTimers, 60000);
  
  // ----------------------
  // TEST
  // ----------------------
  
  // Try seating the first party
  seatNext();
  
  // Wait a few seconds, then check the timers
  setTimeout(updateTimers, 5000);
  