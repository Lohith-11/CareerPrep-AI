import React, { useState } from "react";
import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { RiRobot3Fill } from "react-icons/ri";
import { LuSparkles } from "react-icons/lu";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";
import MarqueeDemo from "../components/MarqueeDemo";
import AnimatedGradientTextDemo from "../components/AnimatedGradientTextDemo";
import { Highlighter } from "../components/magicui/Highlighter";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div className="w-full min-h-full" style={{ backgroundColor: "#FAF9F6" }}>
        <div className="w-[500px] h-[500px] bg-blue-200/20 blur-[65px] absolute top-0 left-0 z-0" />
        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* header */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl text-slate-900 font-bold flex items-center">
              <RiRobot3Fill size={29} className="text-blue-600" />
              CareerPrep AI
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-blue-600 text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-blue-700 border border-blue-600 hover:border-blue-700 transition-all duration-200 hover:shadow-lg"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-2">
                <div>
                  <AnimatedGradientTextDemo />
                </div>
              </div>
              <h1 className="text-5xl text-slate-900 font-medium mb-6 leading-tight">
                Ace Interviews with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 font-semibold">
                  AI-Powered
                </span>{" "}
                learning
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <div className="text-[18px] text-slate-700 mr-0 md:mr-20 mb-6 leading-relaxed">
                <p className="mb-4">
                  Discover{" "}
                  <Highlighter
                    action="highlight"
                    color="#2563EB"
                    animationDuration={1500}
                  >
                    personalized, role-specific interview questions
                  </Highlighter>{" "}
                  tailored to your dream job. Expand detailed answers whenever
                  you need deeper insights, explore complex concepts with
                  comprehensive explanations, and{" "}
                  <Highlighter
                    action="underline"
                    color="#10B981"
                    strokeWidth={3}
                    animationDuration={800}
                    iterations={2}
                    isView={true}
                    padding={2}
                  >
                    organize your entire learning journey exactly how you prefer
                  </Highlighter>
                  .
                </p>
                <p>
                  Whether you're just starting your preparation or fine-tuning
                  for mastery, our{" "}
                  <Highlighter
                    action="box"
                    color="#64748B"
                    strokeWidth={2}
                    animationDuration={900}
                    iterations={1}
                    isView={true}
                    padding={5}
                    multiline={false}
                  >
                    comprehensive AI-powered interview toolkit
                  </Highlighter>{" "}
                  adapts to your learning style and career goals. Experience the
                  future of interview preparation — intelligent, interactive,
                  and incredibly effective.
                </p>
              </div>
              <button
                className="bg-slate-900 text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-blue-600 border border-slate-900 hover:border-blue-600 transition-all duration-200 hover:shadow-lg"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full min-h-full relative z-10">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img
              src={HERO_IMG}
              alt="AI Interview Platform Dashboard"
              className="w-[80vw] rounded-lg"
            />
          </section>
        </div>

        <div
          className="w-full min-h-full mt-10"
          style={{ backgroundColor: "#FAF9F6" }}
        >
          {/* Testimonials Marquee Section */}
          <div className="container mx-auto px-4 py-16">
            <MarqueeDemo />
          </div>

          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-3xl font-semibold text-center mb-12 text-slate-900">
                Features That Make You Shine
              </h2>
              <div className="flex flex-col items-center gap-8">
                {/* First 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature, index) => (
                    <div
                      key={feature.id}
                      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
                    >
                      <h3 className="text-lg font-semibold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Last 2 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
                    >
                      <h3 className="text-lg font-semibold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="text-sm bg-white text-slate-600 text-center p-6 mt-5 border-t border-gray-200">
          Made with ❤️ by CareerPrep Team
        </div>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};
export default LandingPage;
