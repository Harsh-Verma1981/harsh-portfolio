// 'use client';

// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export function MobileNav() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="md:hidden">
//       {/* Hamburger Button */}
//       <button
//         onClick={toggleMenu}
//         className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
//         aria-label="Toggle menu"
//       >
//         {isOpen ? (
//           <X className="w-6 h-6 text-primary" />
//         ) : (
//           <Menu className="w-6 h-6 text-primary" />
//         )}
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="fixed inset-0 top-16 bg-background backdrop-blur-xl z-30 animate-in fade-in duration-200">
//           <nav className="flex flex-col gap-4 p-6">
//             <a
//               href="#about"
//               onClick={closeMenu}
//               className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
//             >
//               About
//             </a>
//             <a
//               href="#training"
//               onClick={closeMenu}
//               className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
//             >
//               Training
//             </a>
//             <a
//               href="#projects"
//               onClick={closeMenu}
//               className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
//             >
//               Projects
//             </a>
//             <a
//               href="#skills"
//               onClick={closeMenu}
//               className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
//             >
//               Skills
//             </a>
//             <a
//               href="#achievements"
//               onClick={closeMenu}
//               className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
//             >
//               Achievements
//             </a>
//             <a
//               href="#contact"
//               onClick={closeMenu}
//               className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
//             >
//               Contact
//             </a>
//             <Button
//               asChild
//               size="sm"
//               className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
//             >
//               <a href="/Harsh-Verma-CV.pdf" download onClick={closeMenu}>
//                 Download CV
//               </a>
//             </Button>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }

/* Claude code with fixed bugs */
'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </button>

      {/* Portal renders menu directly into document.body — escapes ALL stacking contexts */}
      {isOpen && createPortal(
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(10, 10, 20, 0.85)',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem' }}>
            <a
              href="#about"
              onClick={closeMenu}
              className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
            >
              About
            </a>
            <a
              href="#training"
              onClick={closeMenu}
              className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
            >
              Training
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={closeMenu}
              className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
            >
              Skills
            </a>
            <a
              href="#achievements"
              onClick={closeMenu}
              className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
            >
              Achievements
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-foreground/70 hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
            >
              Contact
            </a>
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
            >
              <a href="/Harsh-Verma-CV.pdf" download onClick={closeMenu}>
                Download CV
              </a>
            </Button>
          </nav>
        </div>,
        document.body
      )}
    </div>
  );
}