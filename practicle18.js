import './App.css'
import {useState} from "react"

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <h2>202203103510124<br/>ANKIT PATIL</h2>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>Personal Information</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>
            Name: Ankit Patil<br/>
            Enrollment No: 202203103510124<br/>
            Email: ankit@varietyheaven.in<br/>
            Phone: +91 1122334455
          </p>
        </div>
      )}
    </div>
  )
}