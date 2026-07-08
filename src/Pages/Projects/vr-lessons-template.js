// VR Class Lessons Demo Project Template Data
export const vrLessonsTemplate = {
  overview:
    "I was brought onto the Wehrle Global Supply Chain Lab at West Virginia University to help translate traditional supply-chain coursework into immersive, hands-on virtual reality. The lab wanted students to stop reading about warehouses, logistics flows, and inventory systems on slides — and instead step inside them. Working in Unity 3D with C# scripting, I built a set of class-specific VR lessons delivered through the Oculus headset, letting students walk a virtual distribution center, interact with the objects and processes they were studying, and learn supply-chain concepts by doing rather than memorizing.",

  keyFeatures: [
    "Immersive Supply-Chain Environments - 3D-modeled warehouses, dock doors, and inventory zones that students physically walk through in VR to understand material flow and facility layout",
    "Class-Specific Interactive Lessons - Modular lesson scenes mapped to course topics, so instructors could drop students into the exact scenario tied to that week's material",
    "Hands-On Object Interaction - C# interaction scripts letting students grab, move, scan, and place items with the Oculus controllers to simulate real picking, receiving, and put-away tasks",
    "Guided Instructional Flow - In-headset prompts, waypoints, and step sequencing that walk a student through a lesson without an instructor standing over their shoulder",
  ],

  challenges: [
    "Translating Curriculum into 3D - Turning abstract supply-chain concepts (throughput, lead time, order flow) into spatial, interactable experiences a student could actually feel",
    "Comfortable VR Interaction - Building grab, teleport, and UI interactions in Unity that felt natural on the Oculus without causing motion discomfort during a full lesson",
    "Performance on Headset Hardware - Keeping frame rates high inside detailed warehouse scenes so the experience stayed smooth and immersive rather than nauseating",
    "Non-Technical Users - Designing for supply-chain students and faculty who had never worn a headset, so the lessons had to be self-explanatory from the moment they put it on",
  ],

  solutions: [
    "Partnered with lab faculty to storyboard each lesson, mapping specific learning objectives to concrete VR interactions before writing a line of C#",
    "Implemented Unity's XR interaction patterns with custom C# scripts for teleport locomotion, grabbable objects, and gaze/controller-driven UI to keep movement comfortable",
    "Optimized scenes with level-of-detail models, baked lighting, and occlusion culling to hold a stable frame rate on the Oculus hardware",
    "Built a short in-headset onboarding sequence so first-time users learned the controls inside the experience before the lesson began",
  ],

  technicalDetails: {
    architecture:
      "Unity 3D application structured as modular, per-lesson scenes sharing a common C# interaction framework (locomotion, grabbable objects, guided prompts) so new lessons could be authored without rebuilding core systems.",
    database:
      "Lesson content and scene configuration handled locally within Unity; no external backend required for the classroom demo deployment.",
    deployment:
      "Built and sideloaded to the Oculus headset for in-lab use, running standalone on-device for the Wehrle Global Supply Chain Lab.",
    testing:
      "Iterative playtesting in-headset with lab staff and students to validate comfort, interaction clarity, and instructional flow.",
  },

  learnings: [
    "VR/XR Development in Unity - Hands-on experience building comfortable, interactive VR experiences with Unity's XR toolkit and C# scripting",
    "Instructional Design for Immersion - How to turn a lesson plan into an experience, designing interactions around learning objectives rather than technical showmanship",
    "Working Inside a Research Lab - Collaborating with faculty and staff at the Wehrle Global Supply Chain Lab to ship something real students would use",
    "Performance-First 3D - Balancing visual fidelity against the strict frame-rate demands of head-mounted hardware",
  ],

  futureImprovements: [
    "Expanded Lesson Library - Author additional VR modules covering more of the supply-chain curriculum, from procurement to last-mile delivery",
    "Assessment & Analytics - Track student actions in-headset to measure comprehension and give instructors data on where learners struggle",
    "Multiplayer Sessions - Let an instructor and multiple students share the same virtual facility for guided, collaborative lessons",
  ],

  metrics: {
    duration: "One academic semester",
    teamSize: "Wehrle Global Supply Chain Lab (WVU)",
    linesOfCode: "~6,000 lines (C#)",
    userBase: "WVU supply chain students & faculty",
  },
};
