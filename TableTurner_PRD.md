# **TableTurner V2 — Product Requirements Document (PRD)**

---

## **1. Executive Summary (8 points)**

**Product Name:** TableTurner V2  
**Elevator Pitch:** TableTurner is an intelligent, real-time restaurant waitlist and seating management platform. It replaces manual guesswork with live data, showing guests precisely how long they’ll wait while helping staff manage seating and turnover more efficiently.  
**Core Problem:** Restaurants lose time and revenue because hosts still rely on rough estimates for wait times. TableTurner solves this by predicting table readiness accurately, improving the guest experience and streamlining operations.

---

## **2. Problem Statement & Opportunity (10 points)**

### **The Problem**
Most restaurants today rely on manual processes to manage seating. Hosts use intuition rather than data, leading to inaccurate wait times, miscommunication, and inefficient table use. Guests become frustrated, leave early, or leave negative reviews — all while staff struggle to maintain order.

### **Why It Matters**
- **Revenue Impact:** Every walkaway represents lost sales — even one missed table per hour can cost hundreds daily.  
- **Customer Trust:** Inconsistent wait estimates erode credibility and reduce repeat business.  
- **Operational Strain:** Hosts juggle multiple lists, unclear timelines, and communication gaps between front-of-house and servers.

### **Current Alternatives**
- **Paper waitlists:** Free, but completely manual and untrackable.  
- **POS-integrated tools:** Often designed for large chains, expensive, and overly complex for small-to-midsize restaurants.  
- **Generic digital queues:** Handle sign-ups but fail to integrate real-time seating data or staff coordination.

### **Opportunity**
TableTurner can become the **standard digital infrastructure** for live seating management — the “Google Maps for restaurant flow.” By combining table turnover data with predictive timing models, restaurants can improve throughput, guest satisfaction, and overall profitability.

---

## **3. Target Users & User Personas (8 points)**

### **Primary Persona: The Restaurant Host**
- **Profile:** A busy front-of-house worker responsible for managing walk-ins and reservations.  
- **Pain Points:** Constant pressure, no visibility into actual table readiness, prone to over/underestimating.  
- **Goals:** Operate efficiently, reduce guest frustration, and communicate confidently with customers.

### **Secondary Persona: The Restaurant Manager**
- **Profile:** Oversees multiple staff and tables during peak hours.  
- **Pain Points:** Lack of data, no accountability metrics, hard to forecast staffing needs.  
- **Goals:** Increase table turnover, reduce idle capacity, and collect performance data for better planning.

### **Tertiary Persona: The Waiting Guest**
- **Profile:** Walk-in diner during peak times.  
- **Pain Points:** Doesn’t know how long they’ll wait; feels ignored or misled.  
- **Goals:** Gain clarity, transparency, and reassurance that their time is respected.

---

## **4. MVP Feature Specifications (12 points)**

### **Feature 1: Real-Time Wait Estimation**
- **User Story:** As a *guest*, I want to know exactly how long until my table is ready so I can plan accordingly.  
- **Acceptance Criteria:** Wait times update every 15 seconds based on real table occupancy, including cleaning buffer.

### **Feature 2: Host Dashboard**
- **User Story:** As a *host*, I want a simple dashboard showing all tables, their current status, and remaining time.  
- **Acceptance Criteria:** Displays per-table occupancy, dining duration, and highlights upcoming ready tables.

### **Feature 3: Automated Waitlist Assignment**
- **User Story:** As a *host*, I want the system to automatically seat the next waiting party when a table becomes available.  
- **Acceptance Criteria:** Table clears → next compatible party is seated → both table and waitlist update instantly.

### **Feature 4: Cleaning Buffer Logic**
- **User Story:** As a *host*, I want a short buffer added after guests leave to account for cleaning time.  
- **Acceptance Criteria:** Adds a default 4-minute buffer before the table becomes available again.

### **Feature 5: Dual Guest/Staff Interface**
- **User Story:** As a *manager*, I want a public view for guests and a private view for staff so communication is seamless.  
- **Acceptance Criteria:** Toggle changes interface between real-time guest display and staff control panel.

---

## **5. Future Roadmap (7 points)**

### **Phase 1 (Weeks 1–2): Foundation**
- Build MVP with live wait estimation, host dashboard, and cleaning buffer logic.  
- Set up local data simulation and update loops for real-time testing.

### **Phase 2 (Weeks 3–4): Guest Experience**
- Add public guest-facing screen (for lobby display or QR access).  
- Implement live SMS/text updates with table readiness countdown.  
- Introduce “Join from Home” feature allowing remote waitlist sign-up.

### **Phase 3 (Weeks 5–6): Analytics & Business Insights**
- Add turnover metrics, peak-hour graphs, and average wait analytics.  
- Export operational reports for managers to improve staffing decisions.  
- Train predictive models for recurring patterns (by day/time).

### **Phase 4 (Weeks 7–8): Integration & Scaling**
- Integrate with major POS systems (Toast, Square, Clover).  
- Build multi-location and franchise dashboards.  
- Introduce subscription tiers and advanced analytics for enterprise clients.

---

## **6. Goals & Success Metrics (5 points)**

| **Goal** | **Metric** | **Target** | **Timeline** |
|-----------|-------------|-------------|---------------|
| Improve table utilization | % of tables occupied during peak hours | +20% | Within 6 weeks |
| Reduce guest walkaways | % of guests leaving before seating | −30% | Within 2 months |
| Increase wait accuracy | Average difference between estimated and actual wait | ≤ ±3 min | Continuous |
| Improve customer trust | % of “satisfied” responses in feedback survey | ≥ 90% | After launch |
| Optimize staff efficiency | Reduction in manual updates or reassignments | −50% | Within 1 month |

---

## **7. Open Questions (5 points)**

1. **Pricing Model Optimization:**  
   Should TableTurner adopt a tiered subscription model (Basic for small venues, Pro for high-traffic chains) or usage-based pricing tied to table turnover volume?  
   *Impact:* Determines revenue predictability and adoption rate across restaurant sizes.

2. **POS Partnership Strategy:**  
   Should we integrate early with established POS systems (Toast, Square) for credibility, or remain platform-agnostic and own the full user experience?  
   *Impact:* Influences speed of adoption, data control, and technical debt.

3. **Consumer Branding vs. B2B Focus:**  
   Should TableTurner evolve into a guest-facing app (where users can check live waits at multiple restaurants) or remain a B2B operational platform?  
   *Impact:* Affects marketing spend, product complexity, and long-term positioning.

4. **Predictive AI Investment:**  
   Should predictive models (e.g., forecasting wait times based on dining speed, weather, holidays) be developed in-house or licensed from third-party providers?  
   *Impact:* Affects innovation cost and product differentiation timeline.

5. **Restaurant Training & Adoption:**  
   What’s the best onboarding model — self-serve tutorials, in-person setup, or dedicated onboarding staff?  
   *Impact:* Influences scalability and customer retention during rollout.

6. **Franchise Scalability:**  
   How can TableTurner manage centralized reporting for restaurant groups while keeping local flexibility?  
   *Impact:* Defines architecture for multi-location support.

7. **Data Ownership & Compliance:**  
   How do we ensure full GDPR/CCPA compliance while allowing restaurants to use customer contact data for re-marketing?  
   *Impact:* Impacts legal positioning and customer trust.

8. **Hardware Integration Potential:**  
   Should we eventually offer a physical “Smart Waitlist Display” that syncs with the app for in-restaurant visibility?  
   *Impact:* Opens hardware revenue streams and increases stickiness in restaurant operations.

9. **International Market Fit:**  
   Should TableTurner adapt early for non-U.S. restaurant models (e.g., cafes in Europe, Izakayas in Japan) where turnover patterns differ?  
   *Impact:* Determines scalability strategy and localization requirements.

---

**Summary:**  
TableTurner V2 combines automation, data, and transparency to solve one of the hospitality industry’s most frustrating inefficiencies — the unpredictability of wait times. It transforms chaotic front-of-house management into a structured, data-driven process that increases revenue, customer satisfaction, and operational control.

---
