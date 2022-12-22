import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useEffect, useState } from 'react';
import { Option } from './Admin_dashboard';
import { Dashboard } from './Admin_dashboard';
import { Link } from 'react-router-dom';
import './solution.css';

export function Solution() {
  const [data, setData] = useState([]);
  const fetchInventory = () => {
    fetch()
      .then(res => res.json())
      .then(json => setData(json));
  }
  return (
    <div>
      <Option />
      <Dashboard />
      <div className='container' id="mydiv">
        <br></br>
        <h4 className='text-center'>Create your first article</h4>
        <br></br>
        <p className='text-center'>You haven't created any articles yet. Start by creating your first one.</p>
        <br></br>
        <Link to={'/solution/article'}>
          <button id="my">New Article</button>
        </Link>

      </div>

    </div>
  );
}

export default Solution;