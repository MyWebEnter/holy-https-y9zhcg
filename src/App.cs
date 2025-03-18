// src/App.css
// Create this file with the following CSS

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header {
  background-color: #1e40af;
  color: white;
  padding: 1.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.header-title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.header-subtitle {
  font-size: 1.125rem;
}

.navigation {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  background-color: #dbeafe;
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-button {
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
}

.nav-button-active {
  background-color: #2563eb;
  color: white;
}

.nav-button-inactive {
  background-color: white;
}

.nav-button-inactive:hover {
  background-color: #eff6ff;
}

.section {
  padding: 1.5rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.section-text {
  margin-bottom: 1rem;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.overview-card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-left: 4px solid #3b82f6;
  transition: box-shadow 0.2s;
}

.overview-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  align-items: flex-start;
}

.card-icon {
  font-size: 2.25rem;
  margin-right: 1rem;
}

.card-title {
  font-weight: bold;
  font-size: 1.125rem;
}

.card-subtitle {
  color: #1d4ed8;
  font-weight: 600;
}

.card-description {
  margin-top: 0.5rem;
  color: #4b5563;
}

.learning-journey {
  background-color: #fefce8;
  border-left: 4px solid #facc15;
  padding: 1rem;
  margin: 1.5rem 0;
}

.expandable-section {
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: white;
}

.expandable-button {
  width: 100%;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  background-color: #eff6ff;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.expandable-button:hover {
  background-color: #dbeafe;
}

.expandable-content {
  padding: 1rem;
}

.component-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .component-row {
    flex-direction: row;
  }
}

.argument-component {
  padding: 1rem;
  border-left: 4px solid;
  border-radius: 0.25rem;
  margin: 0.5rem;
  width: 100%;
}

@media (min-width: 768px) {
  .argument-component {
    width: 33.333%;
  }
}

.argument-component-blue {
  background-color: #dbeafe;
  border-color: #3b82f6;
}

.argument-component-green {
  background-color: #dcfce7;
  border-color: #22c55e;
}

.argument-component-purple {
  background-color: #f3e8ff;
  border-color: #a855f7;
}

.component-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.component-description {
  font-size: 0.875rem;
}

.claim-card {
  background-color: #eff6ff;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 4px solid #60a5fa;
}

.claim-title {
  font-weight: bold;
  color: #1e40af;
}

.claim-example {
  font-style: italic;
  font-size: 0.875rem;
  margin: 0.25rem 0;
}

.claim-description {
  font-size: 0.875rem;
}

.page-container {
  min-height: 100vh;
  background-color: #f9fafb;
}


// src/App.js
// Replace your current App.js with this file

import React, { useState } from 'react';
import './App.css';

const ArgumentAnalysisGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderHeader = () => (
    <div className="header">
      <h1 className="header-title">Week 1: Foundations of Effective Argument Analysis</h1>
      <p className="header-subtitle">An interactive visual guide to understanding and dismantling arguments</p>
    </div>
  );

  const renderNavigation = () => (
    <div className="navigation">
      <NavButton id="overview" text="Overview" />
      <NavButton id="argument-anatomy" text="Argument Anatomy" />
      <NavButton id="source-verification" text="Source Verification" />
      <NavButton id="strong-weak" text="Strong vs. Weak Arguments" />
      <NavButton id="case-study" text="Huff-Carson Framework" />
    </div>
  );

  const NavButton = ({ id, text }) => (
    <button
      className={`nav-button ${activeSection === id ? 'nav-button-active' : 'nav-button-inactive'}`}
      onClick={() => setActiveSection(id)}
    >
      {text}
    </button>
  );

  const ExpandableSection = ({ id, title, children }) => (
    <div className="expandable-section">
      <button
        className="expandable-button"
        onClick={() => toggleExpand(id)}
      >
        {title}
        <span>{expandedItems[id] ? '−' : '+'}</span>
      </button>
      {expandedItems[id] && (
        <div className="expandable-content">
          {children}
        </div>
      )}
    </div>
  );

  const renderOverview = () => (
    <div className="section">
      <h2 className="section-title">Course Overview</h2>
      <p className="section-text">Welcome to Week 1 of our course on effective argument analysis. This week establishes the foundations you'll need to identify, evaluate, and dismantle arguments effectively.</p>
      
      <div className="card-grid">
        <OverviewCard 
          title="Lecture 1" 
          subtitle="The Anatomy of Arguments" 
          description="Learn to identify claims, evidence, and reasoning in any argument"
          icon="📝"
        />
        <OverviewCard 
          title="Lecture 2" 
          subtitle="Source Verification Fundamentals" 
          description="Develop skills to verify and evaluate sources effectively"
          icon="🔍"
        />
        <OverviewCard 
          title="Workshop" 
          subtitle="Identifying Strong vs. Weak Arguments" 
          description="Practice distinguishing between compelling and flawed arguments"
          icon="💪"
        />
        <OverviewCard 
          title="Case Study" 
          subtitle="The Huff-Carson Debate Framework" 
          description="Study effective techniques for dismantling weak arguments"
          icon="⚔️"
        />
      </div>
      
      <div className="learning-journey">
        <h3 className="component-title">Learning Journey</h3>
        <p>This interactive guide will help you navigate the key concepts from Week 1. Use the navigation bar above to explore different sections, and click on expandable sections to reveal detailed content.</p>
      </div>
    </div>
  );

  const OverviewCard = ({ title, subtitle, description, icon }) => (
    <div className="overview-card">
      <div className="card-content">
        <div className="card-icon">{icon}</div>
        <div>
          <h3 className="card-title">{title}</h3>
          <h4 className="card-subtitle">{subtitle}</h4>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );

  const renderArgumentAnatomy = () => (
    <div className="section">
      <h2 className="section-title">The Anatomy of Arguments</h2>
      <p className="section-text">Every argument consists of three essential components that work together to create a persuasive whole. Understanding this structure is key to effective analysis.</p>
      
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
        <div style={{backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '1.5rem', maxWidth: '48rem'}}>
          <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem'}}>Core Components of an Argument</h3>
          
          <div className="component-row">
            <ArgumentComponent 
              title="Claims" 
              description="Assertions or positions that the arguer wants the audience to accept"
              color="blue"
            />
            <ArgumentComponent 
              title="Evidence" 
              description="Supporting information presented to validate the claims"
              color="green"
            />
            <ArgumentComponent 
              title="Reasoning" 
              description="The logical connections made between evidence and claims"
              color="purple"
            />
          </div>
        </div>
      </div>
      
      <ExpandableSection id="claims" title="Claims: The Foundation of Arguments">
        <h4 style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Types of Claims:</h4>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1rem'}}>
          <ClaimTypeCard 
            type="Factual Claims" 
            example="The Codex Sinaiticus dates to the 4th century CE"
            description="Assertions about what is or is not the case; can be verified or falsified through evidence"
          />
          <ClaimTypeCard 
            type="Interpretive Claims" 
            example="The absence of certain passages indicates intentional omission"
            description="Assertions about the meaning or significance of facts; requires interpretive frameworks"
          />
        </div>
      </ExpandableSection>
    </div>
  );

  const ArgumentComponent = ({ title, description, color }) => {
    const colorClass = {
      blue: "argument-component-blue",
      green: "argument-component-green",
      purple: "argument-component-purple"
    }[color];
    
    return (
      <div className={`argument-component ${colorClass}`}>
        <h4 className="component-title">{title}</h4>
        <p className="component-description">{description}</p>
      </div>
    );
  };

  const ClaimTypeCard = ({ type, example, description }) => (
    <div className="claim-card">
      <h5 className="claim-title">{type}</h5>
      <div className="claim-example">"{example}"</div>
      <p className="claim-description">{description}</p>
    </div>
  );

  // Create placeholders for the other render functions to prevent errors
  const renderSourceVerification = () => (
    <div className="section">
      <h2 className="section-title">Source Verification Fundamentals</h2>
      <p>Develop skills to verify and evaluate sources effectively</p>
    </div>
  );

  const renderStrongWeak = () => (
    <div className="section">
      <h2 className="section-title">Identifying Strong vs. Weak Arguments</h2>
      <p>Practice distinguishing between compelling and flawed arguments</p>
    </div>
  );

  const renderCaseStudy = () => (
    <div className="section">
      <h2 className="section-title">The Huff-Carson Debate Framework</h2>
      <p>Study effective techniques for dismantling weak arguments</p>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return renderOverview();
      case 'argument-anatomy': return renderArgumentAnatomy();
      case 'source-verification': return renderSourceVerification();
      case 'strong-weak': return renderStrongWeak();
      case 'case-study': return renderCaseStudy();
      default: return renderOverview();
    }
  };

  return (
    <div className="page-container">
      {renderHeader()}
      {renderNavigation()}
      <div className="container">
        {renderContent()}
      </div>
    </div>
  );
};

export default ArgumentAnalysisGuide;


// src/index.js
// Make sure your index.js looks like this:

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
