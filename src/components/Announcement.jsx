import React from 'react';
import {announcementText} from '../data.json';

export default function Announcement() {
    
  return (
    <div className='announcement'>
      <p>{announcementText}</p>
    </div>
  )
}
