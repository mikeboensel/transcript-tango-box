
import React, { useState } from 'react';

export interface Transcript {
  id: string;
  date: string;
  duration: string;
  phoneNumber: string;
  summary: string;
  content: string;
}

interface TranscriptItemProps {
  transcript: Transcript;
}

const TranscriptItem: React.FC<TranscriptItemProps> = ({ transcript }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className="mb-4 rounded-lg glass card-hover-effect overflow-hidden" 
      onClick={toggleExpand}
    >
      <div className="px-5 py-4 flex justify-between items-center cursor-pointer">
        <div>
          <div className="text-xs uppercase tracking-wide font-medium text-app-medium-gray mb-1">
            {transcript.date}
          </div>
          <div className="font-medium">{transcript.phoneNumber}</div>
        </div>
        <div className="flex items-center">
          <div className="text-sm text-app-medium-gray mr-2">{transcript.duration}</div>
          <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M6 9L12 15L18 9" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      
      <div 
        className={`px-5 pb-4 overflow-hidden transition-all duration-300 bg-white/50 
        ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pt-2 border-t border-app-subtle-gray">
          <div className="text-sm font-medium mb-2">Summary</div>
          <div className="text-sm text-app-medium-gray mb-3">{transcript.summary}</div>
          
          <div className="text-sm font-medium mb-2">Transcript</div>
          <div className="text-sm text-app-medium-gray whitespace-pre-line">
            {transcript.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptItem;
