# chess-game

******Project Overview:******
This is a full-stack online chess game. The backend is built with Node.js, TypeScript, and WebSockets, handling real-time multiplayer chess logic. The frontend is a React + TypeScript app (using Vite) that provides a modern, interactive chessboard UI for users to play chess online.

**Features : **
    Real-time Online Chess: Play chess against another player in real time. 
    WebSocket Communication: Fast, bidirectional updates between players. 
    Automatic Matchmaking: Players are paired automatically when they join.
    Modern UI: Responsive, visually appealing chessboard and interface.
    Move Validation: All moves are validated using the chess.js library.
    Game Over Detection: The backend detects and announces game over conditions.

**Tech Stack**
  Frontend: React, TypeScript, Vite, Tailwind CSS (for styling)
  Backend: Node.js, TypeScript, WebSocket (ws), chess.js for chess logic

**Getting Started**  
  Prerequisites
  
    Node.js (v16+ recommended)
    npm
**Installation**
  Clone the repository:
  
     git clone <your-repo-url>
     cd chess
  **Install dependencies:**
  Backend:
      
       cd backend
       npm install
  Frontend :
  
         cd ../frontend
         npm install

**Running the App**
     Start the backend server:
     
          cd backend
          tsc -b
          node /.dist/.index.js
    
The backend WebSocket server will run on ws://localhost:8080.
    Start the frontend app:
    
       cd ../frontend
       npm run dev
The frontend will be available at http://localhost:5173 (or as specified by Vite).

**Usage**
Open the frontend in your browser.
Click "Play Online" to join a game.
When another player joins, you’ll be paired and the game will start.
Play chess in real time; moves are synchronized instantly.
The game ends when a checkmate, stalemate, or draw is detected.

**Customization**
Chess Piece Images: Located in frontend/public/. Replace or add images as needed.
Styling: Uses Tailwind CSS classes. Customize in App.css or component files.

**Credits**
Chess logic powered by `chess.js`
UI built with React and Tailwind CSS

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6de50d22-38f3-4e05-aa5c-528ee03c8a27" />
