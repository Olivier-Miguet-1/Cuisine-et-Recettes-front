import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LayoutPublic } from "./Public/LayoutPublic";
import { LayoutPrivate } from "./Private/LayoutPrivate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="/dashboard" element={<LayoutPrivate />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/profile" element={<LayoutPrivate />}>
                    <Route index element={<Profile />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
