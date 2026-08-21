import myImg from "./assets/img.jpg";
import forcartImg from "./assets/forcart.png";
import pixflow from "./assets/pixflow.png";
import priceImg from "./assets/price.png";
import { useState } from "react";
import { easeOut, motion } from "motion/react";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink =
    "relative text-zinc-400 transition hover:text-sky-500 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-sky-500 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-sky-500 selection:text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        
        {/* Navbar */}
       <motion.header
  className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
          <nav className="flex h-20 items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Faiez<span className="text-sky-500">.</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center gap-8 rounded-full bg-zinc-900/90 px-8 py-3 text-sm font-medium border border-zinc-800/80">
              <motion.a href="#about" className={navLink}
              >
                About
              </motion.a>
              <motion.a href="#skills" className={navLink}>
                Skills
              </motion.a>
              <motion.a href="#projects" className={navLink}>
                Projects
              </motion.a>
            </div>

            <div className="flex items-center gap-3">
              
               <a href="/resume.pdf"
               
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.97}}
               className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold transition hover:bg-sky-500 cursor-pointer"> Resume</a>
              

              {/* Mobile Hamburger Toggle */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-xl border border-zinc-800 p-2 text-zinc-400 hover:text-white sm:hidden cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Dropdown */}
          {menuOpen && (
            <div className="mb-6 flex flex-col gap-4 rounded-2xl bg-zinc-900 p-6 sm:hidden border border-zinc-800">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-400 transition hover:text-sky-500"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-400 transition hover:text-sky-500"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-400 transition hover:text-sky-500"
              >
                Projects
              </a>
            </div>
          )}
        </motion.header>

        {/* Hero Section */}
        <section 
        className="flex min-h-[calc(100vh-80px)] items-center justify-center py-16 text-center"
        
        >
          <motion.div 
          className="flex flex-col items-center"
          initial={{opacity:0 , y: 40}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1.2, ease: 'easeOut'}}
         >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Hi, I'm <span className="text-sky-500">Faiez</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
              I'm a frontend developer who turns ideas into fast, interactive,
              and thoughtfully designed digital experiences. I build with React,
              Tailwind CSS, and modern web technologies, with a growing focus on
              AI-powered products.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.a
              
                href="#projects"
                whileHover={{scale: 1.05}}
              whileTap={{scale: 0.97}}
                className="rounded-xl bg-sky-600 px-6 py-3 text-center font-medium transition hover:bg-sky-500"
              >
                View Projects
              </motion.a>
              <motion.a
              
                href="#contact"
                whileHover={{scale: 1.05}}
              whileTap={{scale: 0.97}}
                className="rounded-xl border border-zinc-700 px-6 py-3 text-center font-medium transition hover:border-sky-500 hover:text-sky-500"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section 
        id="about" className="py-16 sm:py-24"
         initial={{opacity: 0, y:50 }}
        whileInView={{opacity: 1, y:0 }}
        viewport={{ amount: 0.2}}
        transition={{duration: 0.8, ease: "easeOut"}}
        >
          <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800/60 p-6 sm:p-10 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-500">
              About Me
            </h2>

            <div className="mt-10 grid gap-10 md:grid-cols-2 items-center">
              <div className="flex justify-center">
                <img
                  src={myImg}
                  alt="Faiez"
                  className="h-72 sm:h-80 w-64 sm:w-72 rounded-2xl object-cover shadow-2xl border border-zinc-800"
                />
              </div>

              <div className="text-center md:text-left">
                <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
                  <span className="text-sky-500 font-semibold block text-xl mb-2">
                    I'm Faiez,
                  </span>
                  A frontend developer who enjoys turning ideas into clean,
                  interactive, and user-focused digital experiences. I work with
                  modern web technologies to build responsive interfaces and
                  AI-powered products that are both useful and enjoyable to use.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
        id="skills" className="py-16 sm:py-24"
        initial={{opacity: 0, y:50 }}
        whileInView={{opacity: 1, y:0 }}
        viewport={{ amount: 0.2}}
        transition={{duration: 0.8, ease: "easeOut"}}
        >
          <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800/60 p-6 sm:p-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-500">
              Skills
            </h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { category: "Frontend", title: "HTML & CSS" },
                { category: "Language", title: "JavaScript" },
                { category: "Framework", title: "React" },
                { category: "Styling", title: "Tailwind CSS" },
                { category: "Backend", title: "REST APIs" },
                { category: "AI", title: "AI Integration" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-5 transition hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/5"
                  initial={{opacity: 0, y:20 }}
        whileInView={{opacity: 1, y:0 }}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: index * 0.1}}

                >
                  <p className="text-xs uppercase tracking-wider text-zinc-500">{skill.category}</p>
                  <p className="mt-1 text-base font-semibold text-zinc-200">{skill.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" className="py-16 sm:py-24"
         initial={{opacity: 0, y:50 }}
        whileInView={{opacity: 1, y:0.15 }}
       
        viewport={{ amount: 0.2}}
        transition={{duration: 0.8, ease: "easeOut"}}>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-500">
              Projects
            </h2>

            <div className="mt-12 space-y-12 sm:space-y-16">
              {/* Project 1 */}
              <motion.div 
              className="overflow-hidden rounded-3xl bg-zinc-900/60 border border-zinc-800/60 transition hover:border-zinc-700"
                initial={{opacity: 0, y:40 }}
        whileInView={{opacity: 1, y:0 }}
        viewport={{once: true,amount: 0.15}}
        whileHover={{ y: -8, scale: 1.01}}
        transition={{duration: 0.5, ease: "easeOut",
          delay: 0.1}}>
                <div className="aspect-video w-full overflow-hidden bg-zinc-950">
                  <motion.img
                    src={forcartImg}
                    alt="Forcart E-commerce Project"
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.4, ease: "easeOut"}}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    <span className="text-sky-500">F</span>orcart
                  </h3>
                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-400">
                    Forcart is a modern e-commerce frontend built with React. It features
                    smooth navigation using React Router, global state management with
                    Context API, and persistent cart data using localStorage to create a
                    seamless shopping experience.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                   <motion.a
                     href="https://forcart-f5ml.vercel.app/"
                    target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.96 }}
                   transition={{ duration: 0.2 }}
                   className="rounded-xl bg-sky-600 px-5 py-2.5 font-medium"
                 >
                   Live Demo
                 </motion.a>
                    <motion.a
                      href="https://github.com/mohdfaiez2004-max/forcart"
                      target="_blank"
                      rel="noopener noreferrer"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.96 }}
                       transition={{ duration: 0.2 }}
                      className="rounded-xl border border-zinc-700 px-5 py-2.5 font-medium transition hover:border-sky-500 hover:text-sky-500"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div 
              className="overflow-hidden rounded-3xl bg-zinc-900/60 border border-zinc-800/60 transition hover:border-zinc-700"
                    initial={{opacity: 0, y:40 }}
                     whileHover={{ y: -8, scale: 1.01}}
        whileInView={{opacity: 1, y:0 }}
        viewport={{once: true,amount: 0.15}}
        transition={{duration: 0.5, ease: "easeOut",
          delay: 0.2}}>
                <div className="aspect-video w-full overflow-hidden bg-zinc-950">
                  <motion.img
                    src={pixflow}
                    alt="Pixflow AI Project"
                     whileHover={{scale: 1.05}}
                    transition={{duration: 0.4, ease: "easeOut"}}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-sky-500">
                    Pixflow
                  </h3>
                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-400">
                    Pixflow is an AI-powered web application that transforms user ideas
                    into modern UI designs and code. Built with React, Tailwind CSS, and
                    AI APIs, it delivers a fast and interactive experience for generating
                    creative interfaces.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                  <motion.a
                     href="https://my-pixflow20.vercel.app/"
                    target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.96 }}
                   transition={{ duration: 0.2 }}
                   className="rounded-xl bg-sky-600 px-5 py-2.5 font-medium"
                 >
                   Live Demo
                 </motion.a>
                    <motion.a
                      href="https://github.com/mohdfaiez2004-max/pixflow-2.0"
                      target="_blank"
                      rel="noopener noreferrer"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.96 }}
                       transition={{ duration: 0.2 }}
                      className="rounded-xl border border-zinc-700 px-5 py-2.5 font-medium transition hover:border-sky-500 hover:text-sky-500"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div 
              className="overflow-hidden rounded-3xl bg-zinc-900/60 border border-zinc-800/60 transition hover:border-zinc-700"
                    initial={{opacity: 0, y:40 }}
                     whileHover={{ y: -8, scale: 1.01}}
        whileInView={{opacity: 1, y:0 }}
        viewport={{once: true,amount: 0.15}}
        transition={{duration: 0.5, ease: "easeOut",
          delay: 0.3}}>
                <div className="aspect-video w-full overflow-hidden bg-zinc-950">
                  <motion.img
                    src={priceImg}
                    alt="Price-Crafter Project"
                     whileHover={{scale: 1.05}}
                    transition={{duration: 0.4, ease: "easeOut"}}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-sky-500">
                    Price-Crafter
                  </h3>
                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-400">
                    Price Crafter is a tool that helps users get UI designs for clean and attractive
                    price tags for their products. It makes designing professional-looking
                    price tags quick, simple, and easy to customize.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <motion.a
                      href="https://price-crafer-2zg5.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                       whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.96 }}
                   transition={{ duration: 0.2 }}
                      className="rounded-xl bg-sky-600 px-5 py-2.5 font-medium transition hover:bg-sky-500"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href="https://github.com/mohdfaiez2004-max/price-crafer"
                      target="_blank"
                      rel="noopener noreferrer"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.96 }}
                       transition={{ duration: 0.2 }}
                      className="rounded-xl border border-zinc-700 px-5 py-2.5 font-medium transition hover:border-sky-500 hover:text-sky-500"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
             </div>
             </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
        id="contact" className="py-16 sm:py-24"
        initial={{opacity: 0, y:50 }}
        whileInView={{opacity: 1, y:0 }}
        viewport={{ amount: 0.2}}
        transition={{duration: 0.8, ease: "easeOut"}}>
          <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800/60 p-6 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-500">
              Let's Work Together
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
              Have a project or idea in mind? Feel free to reach out. I'm always
              open to discussing new opportunities, creative ideas, and interesting
              projects.
            </p>

            <div className="mt-8">
              <a
                href="mailto:mohdfaiez2004@gmail.com"
                className="inline-block rounded-xl bg-sky-600 px-6 py-3 font-medium transition hover:bg-sky-500"
              >
                Email Me
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-8">
              <a
                href="https://github.com/mohdfaiez2004-max"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-sky-500"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/faiez-shaikh-b95553424/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition hover:text-sky-500"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer className="py-8 text-center text-sm text-zinc-500"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{ once: true}}
        transition={{duration: 0.8}}>
          <p>© 2026 Faiez Shaikh. Built with React & Tailwind CSS.</p>
        </motion.footer>
      </div>
    </main>
  );
}
