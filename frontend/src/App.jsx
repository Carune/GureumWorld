import { useEffect, useState } from 'react';
import { getGureumProfile } from './api/api';

function App() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        getGureumProfile().then(data => setProfile(data));
    }, []);

    return (
        <div>
            <h1>구름월드 🐶☁️</h1>
            {profile ? (
                <div>
                    <p><strong>이름:</strong> {profile.name}</p>
                    <p><strong>종:</strong> {profile.breed}</p>
                    <p><strong>나이:</strong> {profile.age}살</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
