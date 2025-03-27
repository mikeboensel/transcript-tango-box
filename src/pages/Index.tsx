import React, { useState } from "react";
import PlaceCall from "../components/PlaceCall";
import TranscriptFilter from "../components/TranscriptFilter";
import TranscriptList from "../components/TranscriptList";
import { Transcript } from "../components/TranscriptItem";
import { toast } from "sonner";

// Mock data for transcripts
const mockTranscripts: Transcript[] = [
  {
    id: "1",
    date: "Today, 10:23 AM",
    duration: "4:32",
    phoneNumber: "(415) 555-1234",
    summary:
      "Discussion about the new project timeline and next steps for development.",
    content:
      "Person 1: Hi, how are you doing today?\nPerson 2: I'm good. Let's talk about the project timeline.\nPerson 1: Sure. We need to finalize the development phase by next Friday.\nPerson 2: That works for me. I'll send you the updated schedule by end of day.\nPerson 1: Great, thank you!",
  },
  {
    id: "2",
    date: "Yesterday, 3:45 PM",
    duration: "2:15",
    phoneNumber: "(415) 555-1234",
    summary:
      "Quick check-in about the client meeting and presentation materials.",
    content:
      "Person 1: Do you have the presentation ready?\nPerson 2: Yes, just finished the final slides.\nPerson 1: Perfect timing. The client meeting is tomorrow at 9 AM.\nPerson 2: I'll be there. Anything specific you want me to focus on?\nPerson 1: Just the technical implementation details. I'll handle the budget discussion.",
  },
  {
    id: "3",
    date: "Jul 24, 2023",
    duration: "8:07",
    phoneNumber: "(415) 555-1234",
    summary:
      "Detailed discussion about product features, user feedback, and next iteration priorities.",
    content:
      "Person 1: Let's review the user feedback from the beta test.\nPerson 2: The main issues were around the navigation and search functionality.\nPerson 1: I agree. We should prioritize fixing those in the next sprint.\nPerson 2: What about the new feature requests?\nPerson 1: Let's put those in the backlog for now and focus on stability first.\nPerson 2: Makes sense. I'll update the sprint planning document.\nPerson 1: Thanks. Let's also schedule a design review for next week.",
  },
  {
    id: "4",
    date: "Jul 20, 2023",
    duration: "3:45",
    phoneNumber: "(650) 123-4567",
    summary: "Discussion about the marketing strategy for Q4.",
    content:
      "Person 1: We need to finalize our marketing strategy for Q4.\nPerson 2: I was thinking we should focus on social media campaigns.\nPerson 1: That makes sense. What platforms do you recommend?\nPerson 2: Mainly Instagram and TikTok given our target demographic.\nPerson 1: Good point. Let's get a proposal together by next week.",
  },
  {
    id: "5",
    date: "Jul 18, 2023",
    duration: "6:22",
    phoneNumber: "(510) 987-6543",
    summary:
      "Review of the latest user testing results and accessibility improvements.",
    content:
      "Person 1: How did the latest round of user testing go?\nPerson 2: We identified several accessibility issues that need to be addressed.\nPerson 1: What were the main concerns?\nPerson 2: Screen reader compatibility and keyboard navigation.\nPerson 1: Let's make those a priority for the next sprint.\nPerson 2: Agreed. I'll update the backlog accordingly.",
  },
];

const Index: React.FC = () => {
  const [filteredTranscripts, setFilteredTranscripts] =
    useState<Transcript[]>(mockTranscripts);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (phoneNumber: string) => {
    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      if (phoneNumber.trim() === "") {
        // If no phone number is provided, show all transcripts
        setFilteredTranscripts(mockTranscripts);
        toast.success(`Showing all ${mockTranscripts.length} transcripts`);
      } else {
        // Filter transcripts by phone number
        const filtered = mockTranscripts.filter((transcript) =>
          transcript.phoneNumber.includes(phoneNumber)
        );

        if (filtered.length > 0) {
          setFilteredTranscripts(filtered);
          toast.success(`Found ${filtered.length} transcripts`);
        } else {
          setFilteredTranscripts([]);
          toast.info("No transcripts found for this number");
        }
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <PlaceCall />

        <hr></hr>
        <br></br>
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Call Transcripts</h1>
          <p className="text-app-medium-gray max-w-2xl mx-auto">
            Browse all call transcripts or filter by phone number. Click on a
            transcript to expand and view the full content.
          </p>
        </div>

        <TranscriptFilter onSubmit={handleSubmit} />

        <TranscriptList
          transcripts={filteredTranscripts}
          isLoading={isLoading}
        />

        <div className="mt-12 text-center text-sm text-app-medium-gray animate-fade-in">
          <p>Try filtering with numbers like "415", "650", or "510"</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
