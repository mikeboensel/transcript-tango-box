
import React from 'react';
import TranscriptItem, { Transcript } from './TranscriptItem';

interface TranscriptListProps {
  transcripts: Transcript[];
  isLoading: boolean;
}

const TranscriptList: React.FC<TranscriptListProps> = ({ transcripts, isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto mt-6 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="mb-4 rounded-lg glass overflow-hidden">
            <div className="px-5 py-4">
              <div className="h-3 bg-app-subtle-gray rounded w-20 mb-2"></div>
              <div className="h-5 bg-app-subtle-gray rounded w-40"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (transcripts.length === 0) {
    return (
      <div className="w-full max-w-md mx-auto mt-6 text-center py-8 rounded-lg glass animate-fade-in">
        <div className="text-app-medium-gray">No transcripts found</div>
        <div className="text-sm mt-2 text-app-medium-gray/70">
          Enter a phone number to search for transcripts
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto mt-6 animate-slide-up">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-medium">Transcripts</h2>
        <div className="text-sm text-app-medium-gray">
          {transcripts.length} {transcripts.length === 1 ? 'result' : 'results'}
        </div>
      </div>
      
      {transcripts.map((transcript) => (
        <TranscriptItem key={transcript.id} transcript={transcript} />
      ))}
    </div>
  );
};

export default TranscriptList;
