// Linux Operating System Project Template Data
export const osTemplate = {
  overview: "A custom Linux-based operating system built from the kernel level up, developed during my senior-year Operating Systems course as the capstone project of the class. Working on a tight-knit team of four, we implemented the core subsystems that make an OS run — system calls, process scheduling, and memory management — writing low-level C and Assembly that talks directly to the hardware. My focus was on the data structures and memory management layer of the kernel: designing the structures that track allocated and free memory, and making sure every process saw a clean, correct view of the system's resources. This project was the moment systems programming stopped being abstract theory and became something I had actually built, one hard-won bug fix at a time.",

  keyFeatures: [
    "Memory Management Subsystem - My primary responsibility: designed the allocation and free-list data structures, page tables, and virtual-to-physical address translation that gave each process an isolated memory space",
    "System Call Interface - Implemented the trap-based syscall layer that lets user programs safely request kernel services without corrupting protected memory",
    "Process Scheduling - Built the scheduler that manages the process table, context switches, and CPU time slicing across concurrent processes",
    "Kernel-Level C & Assembly - Wrote low-level code with no standard library safety net, managing registers, interrupts, and the boot sequence directly"
  ],

  challenges: [
    "Memory Corruption Bugs - Getting the memory management data structures right meant a single off-by-one in a pointer or page boundary could silently corrupt the entire system, often crashing far from the actual cause",
    "Debugging Without a Net - At the kernel level there's no debugger to lean on the way there is in application code; a mistake often meant a triple fault and a black screen with no stack trace to explain why",
    "Coordinating a Team of Four - Four people touching a shared kernel meant subsystems (memory, scheduling, syscalls) had to agree on exactly how they handed data to each other, or everything fell apart at the seams",
    "The Test of Patience - Some bugs took days to track down; the project demanded slowing down, forming a hypothesis, and testing one variable at a time instead of guessing"
  ],

  solutions: [
    "Owned the memory management layer end to end — designed the free-list and page-table structures carefully up front, then validated allocation and deallocation paths exhaustively so the rest of the team could build on a trustworthy foundation",
    "Leaned on QEMU, serial-port logging, and methodical bisection to reproduce and isolate kernel faults, adding assertions and print-based tracing where a debugger couldn't reach",
    "Established clear interface contracts between subsystems so the memory, scheduling, and syscall components could be developed in parallel and integrated cleanly",
    "Learned to embrace patience as an engineering discipline — treating every stubborn bug as a puzzle to be understood rather than a wall to be brute-forced"
  ],

  technicalDetails: {
    architecture: "Monolithic kernel written in C and x86 Assembly, with distinct subsystems for memory management, process scheduling, and system calls, booted from a custom bootloader into protected mode",
    database: "In-memory kernel data structures — page tables, free-memory lists, and a process control block table — hand-built to track system state without any external storage or standard library",
    deployment: "Runs on the QEMU emulator and bare-metal x86 hardware, booted from a compiled kernel image built with a custom GCC/NASM toolchain and linker script",
    testing: "Iterative test-and-debug cycle using QEMU, serial logging, and targeted stress tests for the memory allocator, with the team validating each subsystem in isolation before full-system integration"
  },

  learnings: [
    "Memory Management Mastery - Hands-on understanding of how paging, virtual memory, and allocation data structures actually work beneath every program I'll ever write",
    "Patience as a Skill - The biggest lesson: complex low-level bugs can't be rushed; disciplined, hypothesis-driven debugging beats frantic guessing every time",
    "Systems-Level Thinking - Learned how the kernel, hardware, and user programs fit together, and how a small decision in one subsystem ripples through the whole system",
    "Real Team Engineering - Coordinating a shared, deeply interdependent codebase with three teammates taught me how much clean interfaces and communication matter"
  ],

  futureImprovements: [
    "File System Support - Add a working file system layer to give the OS persistent storage beyond in-memory structures",
    "Advanced Scheduling - Implement priority-based and multi-level feedback queue scheduling for smarter CPU allocation",
    "Multi-Core Support - Extend the kernel to handle SMP so it can schedule processes across multiple CPU cores"
  ],

  metrics: {
    duration: "Full semester (senior-year Operating Systems course)",
    teamSize: "Team of 4 (specialized in data structures & memory management)",
    linesOfCode: "~4,000 lines of C and Assembly",
    userBase: "Academic project — course evaluation and peer review"
  }
};
