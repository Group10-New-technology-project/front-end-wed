import 'bootstrap/dist/css/bootstrap.min.css';
// import '~/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from '~/pages/SignIn';
function index() {
    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </Router>
    );
}

export default index;
