import background from '../assets/durhamNotMyImageLowContrast.png';
import LibraryOccupancy from "../components/currentOccupancy.tsx";

export default function HomePage() {
    return (
        <div
            className="bg-cover bg-center h-screen"
            style={{backgroundImage: `url(${background})`}}
        >
            <LibraryOccupancy/>
        </div>
    );
}
