'use client';
import TimeAgo from 'react-timeago';

function LifeTimeStamp({ time }) {
  return <TimeAgo date={time} />;
}

export default LifeTimeStamp;
