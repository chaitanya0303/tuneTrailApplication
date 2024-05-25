import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import './uhome.css';

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectionChange = (event) => {
    const selectedValue = event.target.value;
    setShowDropdown(false);

    if (selectedValue === 'user') {
      navigate('/login');
    } else if (selectedValue === 'admin') {
      navigate('/alogin');
    }
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div style={{backgroundImage: "url('https://media.istockphoto.com/id/1290631799/vector/musical-notation-cute-background.jpg?b=1&s=170667a&w=0&k=20&c=F9sEy-XpIWlgIQSa5tczIZZ8-sBxZ-u7cSvnPEOa2ac=')", backgroundSize:"cover", position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
  {/* Your content */}


      <div style={{ position: "relative", top: "27%", color: "white", display: "flex", justifyContent: "center" }}>
        <div>
          <img src='https://img.freepik.com/premium-vector/blue-circle-with-white-music-note-icon-it_778550-496.jpg?w=740' style={{ width: "140px", height: "140px", borderRadius: "50%" }} />
          <h2 className='text-textColor text-lg hover:text-headingColor font-semibold'
            style={{
              paddingLeft: "23px",
              paddingTop: "10px",
              color: 'teal',
              alignItems: "center",
              marginLeft: "20px",
    
              cursor: "pointer",
              
              borderBottom: showDropdown ? "1px solid white" : "none",
            }}
            onClick={handleLoginClick}
          >
            Signin
          </h2>
          {showDropdown && (
            <select
              ref={dropdownRef}
              onChange={handleSelectionChange}
              style={{
                marginTop: "10px",
                padding: "10px",
                width: "130px",
                borderRadius: "5px",
                backgroundColor: "white",
                color: "black",
                border: "none",
                outline: "none",
                cursor: "pointer",
                paddingLeft: "20px"
              }}
            >
                <option style={{display:"none"}}>User</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;