import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;
